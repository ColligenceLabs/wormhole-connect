import { DeliveryStatus } from '@certusone/wormhole-sdk/lib/esm/relayer';
import axios from 'axios';
import { isMainnet } from 'config';
import { Route } from 'config/types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  setRedeemTx,
  setDeliveryStatus,
  setTransferComplete,
} from 'store/redeem';
import { sleep } from 'utils';
import { getEmitterAndSequence } from 'utils/vaa';

const BASE_URL = `https://api.${
  isMainnet ? '' : 'testnet.'
}wormholescan.io/api/v1/relays`;

const RETRY_DELAY = 10 * 1000;

interface Execution {
  transactionHash: string;
  status: DeliveryStatus;
  revertString: string;
}

const useRelayerDeliveryStatus = () => {
  const dispatch = useDispatch();
  const route = useSelector((state: RootState) => state.redeem.route);
  const signedMessage = useSelector(
    (state: RootState) => state.redeem.signedMessage,
  );

  useEffect(() => {
    if (!signedMessage || route !== Route.NTTRelay) return;
    const { emitterChain, emitterAddress, sequence } =
      getEmitterAndSequence(signedMessage);
    let active = true;
    const fetchData = async () => {
      while (active) {
        try {
          const response = await axios.get(
            `${BASE_URL}/${emitterChain}/${emitterAddress}/${sequence}`,
          );
          if (active) {
            const execution: Execution =
              response.data.data?.delivery?.execution;
            if (execution) {
              dispatch(setRedeemTx(execution.transactionHash || ''));
              dispatch(
                setDeliveryStatus({
                  status: execution.status,
                  revertString: execution.revertString,
                }),
              );
              if (execution.status === DeliveryStatus.ReceiverFailure) {
                dispatch(setTransferComplete(true));
              }
              break;
            }
          }
        } catch (e: any) {
          if (e.response?.status !== 404) {
            console.error(e);
          }
        }
        if (active) {
          await sleep(RETRY_DELAY);
        }
      }
    };
    fetchData();
    return () => {
      active = false;
    };
  }, [signedMessage, route]);
};

export default useRelayerDeliveryStatus;
