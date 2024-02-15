import { Route, TokenConfig } from 'config/types';
import { BigNumber } from 'ethers';
import { getPlatform } from './platforms';
import { ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';
import { NTTBase } from './nttBase';
import { CHAINS, TOKENS } from 'config';
import {
  TransferDestInfo,
  TransferDestInfoBaseParams,
  TransferDisplayData,
} from 'routes/types';
import {
  MAX_DECIMALS,
  calculateUSDPrice,
  getDisplayName,
  toNormalizedDecimals,
} from 'utils';
import { wh } from 'utils/sdk';
import { NO_INPUT } from 'utils/style';
import { TokenPrices } from 'store/tokenPrices';

export class NTTRelay extends NTTBase {
  readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean = false;
  readonly AUTOMATIC_DEPOSIT: boolean = true;
  readonly TYPE: Route = Route.NTTRelay;

  async isRouteSupported(
    sourceToken: string,
    destToken: string,
    amount: string,
    sourceChain: ChainName | ChainId,
    destChain: ChainName | ChainId,
  ): Promise<boolean> {
    const managerAddress = TOKENS[sourceToken]?.nttManagerAddress;
    if (!managerAddress) {
      return false;
    }
    return Promise.all([
      super.isRouteSupported(
        sourceToken,
        destToken,
        amount,
        sourceChain,
        destChain,
      ),
      getPlatform(sourceChain, managerAddress).isWormholeRelayingEnabled(
        destChain,
      ),
    ]).then((results) => results.every((result) => result));
  }

  async getRelayerFee(
    sourceChain: ChainName | ChainId,
    destChain: ChainName | ChainId,
    token: string,
    destToken: string,
  ): Promise<BigNumber> {
    const tokenConfig = TOKENS[token];
    if (!tokenConfig.nttManagerAddress) {
      throw new Error('invalid token');
    }
    const deliveryPrice = await getPlatform(
      sourceChain,
      tokenConfig.nttManagerAddress,
    ).quoteDeliveryPrice(destChain);
    return BigNumber.from(deliveryPrice);
  }

  async getPreview(
    token: TokenConfig,
    destToken: TokenConfig,
    amount: number,
    sendingChain: ChainName | ChainId,
    receipientChain: ChainName | ChainId,
    sendingGasEst: string,
    claimingGasEst: string,
    receiveAmount: string,
    tokenPrices: TokenPrices,
    routeOptions: { relayerFee: string },
  ): Promise<TransferDisplayData> {
    const sendingChainName = wh.toChainName(sendingChain);
    const sourceGasToken = CHAINS[sendingChainName]?.gasToken;
    const sourceGasTokenSymbol = sourceGasToken
      ? getDisplayName(TOKENS[sourceGasToken])
      : '';
    // Calculate the USD value of the gas
    const sendingGasEstPrice = calculateUSDPrice(
      sendingGasEst,
      tokenPrices,
      TOKENS[sourceGasToken || ''],
    );
    return [
      {
        title: 'Amount',
        value: `${!isNaN(amount) ? amount : '0'} ${getDisplayName(destToken)}`,
        valueUSD: calculateUSDPrice(amount, tokenPrices, destToken),
      },
      {
        title: 'Total fee estimates',
        value: sendingGasEst ? `${sendingGasEst} ${sourceGasTokenSymbol}` : '',
        valueUSD: sendingGasEst ? `${sendingGasEstPrice || NO_INPUT}` : '',
        rows: [
          {
            title: 'Source chain gas estimate',
            value: sendingGasEst
              ? `~ ${sendingGasEst} ${sourceGasTokenSymbol}`
              : 'Not available',
            valueUSD: sendingGasEstPrice,
          },
          {
            title: 'Relayer fee',
            value: routeOptions.relayerFee
              ? `${routeOptions.relayerFee} ${sourceGasTokenSymbol}`
              : NO_INPUT,
            valueUSD: sendingGasEstPrice,
          },
        ],
      },
    ];
  }

  async getTransferDestInfo<T extends TransferDestInfoBaseParams>(
    params: T,
  ): Promise<TransferDestInfo> {
    const {
      txData: { tokenKey, amount, tokenDecimals },
      tokenPrices,
    } = params;
    const token = TOKENS[tokenKey];
    const formattedAmt = toNormalizedDecimals(
      amount,
      tokenDecimals,
      MAX_DECIMALS,
    );
    return {
      route: this.TYPE,
      displayData: [
        {
          title: 'Amount',
          value: `${formattedAmt} ${getDisplayName(token)}`,
          valueUSD: calculateUSDPrice(formattedAmt, tokenPrices, token),
        },
      ],
    };
  }
}
