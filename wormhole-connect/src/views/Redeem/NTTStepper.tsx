import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Stepper from 'components/Stepper/Stepper';
import SendFrom from './SendFrom';
import SendTo from './SendTo';
import BridgeComplete from './BridgeComplete';
import NTTInboundQueued from './NTTInboundQueued';
import { DeliveryStatus } from '@certusone/wormhole-sdk/lib/esm/relayer';
import DeliveryFailed from './DeliveryFailed';

const SEND_FROM_STEP = 1;
const SEND_TO_STEP = 2;
const TRANSACTION_COMPLETE_STEP = 4;

export default function NTTStepper() {
  const txData = useSelector((state: RootState) => state.redeem.txData)!;
  const signedMessage = useSelector(
    (state: RootState) => state.redeem.signedMessage,
  );
  const deliveryStatus = useSelector(
    (state: RootState) => state.redeem.deliveryStatus,
  );
  const transferComplete = useSelector(
    (state: RootState) => state.redeem.transferComplete,
  );
  const inboundQueuedTransfer = useSelector(
    (state: RootState) => state.ntt.inboundQueuedTransfer,
  );
  const isInboundQueued = !!inboundQueuedTransfer.data;
  const deliveryFailure =
    deliveryStatus?.status === DeliveryStatus.ReceiverFailure;

  const activeStep =
    transferComplete || deliveryFailure
      ? TRANSACTION_COMPLETE_STEP
      : signedMessage
      ? SEND_TO_STEP
      : SEND_FROM_STEP;

  const steps = [
    {
      label: 'Send from',
      component: <SendFrom />,
      warningLine: isInboundQueued,
    },
    {
      label: 'Send to',
      component: isInboundQueued ? <NTTInboundQueued /> : <SendTo />,
      warningLabel: isInboundQueued,
      warningLine: deliveryFailure,
    },
    {
      label: deliveryFailure ? 'Delivery failed' : 'Transaction complete',
      component: deliveryFailure ? (
        <DeliveryFailed status={deliveryStatus} chain={txData.toChain} />
      ) : (
        <BridgeComplete />
      ),
      warningLabel: deliveryFailure,
    },
  ];
  return <Stepper steps={steps} activeStep={activeStep} />;
}
