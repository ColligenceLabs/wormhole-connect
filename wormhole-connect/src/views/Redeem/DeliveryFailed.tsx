import React from 'react';
import { getChainConfig } from 'utils';
import { RelayerDeliveryStatus } from 'store/redeem';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { makeStyles } from 'tss-react/mui';
import InputContainer from 'components/InputContainer';
import { OPACITY } from 'utils/style';
import { Typography, useTheme } from '@mui/material';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: theme.spacing(1),
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  revertString: {
    wordWrap: 'break-word',
  },
}));

const DeliveryFailed = ({
  status,
  chain,
}: {
  status: RelayerDeliveryStatus;
  chain: ChainName;
}) => {
  const { classes } = useStyles();
  const theme: any = useTheme();
  const chainDisplayName = getChainConfig(chain).displayName;

  return (
    <InputContainer bg={theme.palette.warning[500] + OPACITY[25]}>
      <div className={classes.root}>
        <Typography>
          {`Your transfer failed to be completed on ${chainDisplayName}.`}
        </Typography>
        <Typography>
          Please reach out to the Wormhole community on{' '}
          <a
            href="https://discord.com/invite/wormholecrypto"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Discord
          </a>{' '}
          if you have questions.
        </Typography>
        <Typography>{`Status: ${status.status}`}</Typography>
        <Typography className={classes.revertString}>{`Revert reason: ${
          status.revertString || 'N/A'
        }`}</Typography>
      </div>
    </InputContainer>
  );
};

export default DeliveryFailed;
