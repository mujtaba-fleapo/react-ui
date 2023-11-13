import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { loadVGSCollect } from '@vgs/collect-js';
import {
  ICollectFormPayloadStructure,
  VGSCollectForm,
  VGSCollectFormState,
  VGSCollectProvider,
  VGSCollectVaultEnvironment
} from '@vgs/collect-js-react';
import { ReactElement, useEffect, useState } from 'react';
import { PillButton } from '../../elements/PillButton';
import { colors } from '../../styles/colors';
import '../../styles/style.scss';
import { theme } from '../../theme';

const vgsVersion = '2.18.0';
const vgsVaultId = 'tntok5ve84a';
const vgsEnvironment = 'sandbox';

const {
  CardNumberField,
  CardExpirationDateField,
  CardSecurityCodeField,
  TextField
} = VGSCollectForm;

interface CreditCardInputProps {
  vgsVaultId?: string;
  vgsEnvironment?: VGSCollectVaultEnvironment;
  buttonText?: string;
  buttonIcon?: ReactElement;
  fullWidthButton?: boolean;
  buttonLoading?: boolean;
  accessToken: string;
  handleSubmitNewCard?: (status: any, data: any) => unknown;
  onError?: () => unknown;
  // TODO: somehow make it work
  onSubmit?: () => unknown;
}

export const CreditCardInput2 = (props: CreditCardInputProps) => {
  const [isVGSCollectScriptLoaded, setCollectScriptLoaded] = useState(false);

  useEffect(() => {
    loadVGSCollect({
      vaultId: props.vgsVaultId || vgsVaultId,
      environment: props.vgsEnvironment || vgsEnvironment,
      version: vgsVersion
    })
      .then(() => {
        setCollectScriptLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="payment-cards">
        {isVGSCollectScriptLoaded && (
          <VGSCollectProvider>
            <VGSForm {...props} />
          </VGSCollectProvider>
        )}
      </Box>
    </ThemeProvider>
  );
};

const VGSForm = (props: CreditCardInputProps) => {
  const [cardFormError, setCardFormError] = useState<boolean>(false);
  const [cardFormComplete, setCardFormComplete] = useState<boolean>(false);

  const fieldStyles = {
    boxSizing: 'border-box',
    height: '34px',
    borderBottom: `1px solid ${colors.lightgray[600]}`
  };

  const onUpdateCallback = (fields: VGSCollectFormState) => {
    if (!fields) return;
    for (const fieldKey in fields) {
      if (!fields[fieldKey].isValid) {
        setCardFormError(true);
        return;
      }
      if (fields[fieldKey].isEmpty) {
        setCardFormComplete(false);
        return;
      }
    }
    setCardFormError(false);
    setCardFormComplete(true);
  };

  const handleFormSubmitSuccess = (status: any, data: any) => {
    props.handleSubmitNewCard?.(status, data);
  };

  const handleFormSubmitError = (error: any) => {
    props.onError?.();
    console.log({ error });
  };

  return (
    <VGSCollectForm
      data-testid={`credit-card-input-form-ds`}
      vaultId={props.vgsVaultId || vgsVaultId}
      environment={props.vgsEnvironment || vgsEnvironment}
      action="/v2/cards"
      submitParameters={{
        headers: {
          Authorization: `Bearer ${props.accessToken}`
        },
        // data: {
        //   returnFrom3DSUrl: `https://client-fan-dev.fanfix.dev/fan/3dsRedirect.html?redir=${document.location.href}`
        // },
        data: (fields: ICollectFormPayloadStructure) => {
          props.onSubmit?.();
          return {
            ...fields,
            returnFrom3DSUrl: `https://client-fan-dev.fanfix.dev/fan/3dsRedirect.html?redir=${document.location.href}`
          };
        }
      }}
      onSubmitCallback={handleFormSubmitSuccess}
      onErrorCallback={handleFormSubmitError}
      onUpdateCallback={onUpdateCallback}
    >
      <Box className="form-field">
        <TextField
          name="cardholderName"
          className="vgs-field"
          css={fieldStyles}
          placeholder="Name on Card"
          validations={['required']}
        />
      </Box>
      <Box
        className="single-line-form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2
        }}
      >
        <Box className="form-field card-name-text" sx={{ width: '100%' }}>
          <CardNumberField
            name="cardNumber"
            validations={['required', 'validCardNumber']}
            placeholder="Card Number"
            showCardIcon={{ left: 0, top: 18 }}
            css={{
              padding: '0px 0px 0px 40px',
              ...fieldStyles
            }}
            tokenization={{
              format: 'FPE_T_FOUR',
              storage: 'PERSISTENT'
            }}
          />
        </Box>

        <Box className="form-field" sx={{ width: '20%' }}>
          <CardExpirationDateField
            name="cardExpirationDate"
            validations={['required', 'validCardExpirationDate']}
            placeholder="MM / YY"
            yearLength={2}
            css={fieldStyles}
          />
        </Box>

        <Box className="form-field" sx={{ width: '10%' }}>
          <CardSecurityCodeField
            name="cardCvc"
            validations={['required', 'validCardSecurityCode']}
            placeholder="CVV"
            css={fieldStyles}
          />
        </Box>

        <Box className="form-field" sx={{ width: '10%' }}>
          <VGSCollectForm.ZipCodeField
            name="billingZipCode"
            className="vgs-field"
            css={fieldStyles}
            validations={['required']}
            placeholder="Zip Code"
          />
        </Box>
      </Box>
      <Box position="relative" zIndex={2} pt={1}>
        <PillButton
          fullWidth={Boolean(props.fullWidthButton)}
          type="submit"
          icon={props.buttonIcon ?? null}
          text={props.buttonText || 'Save Payment Method'}
          disabled={cardFormError && !cardFormComplete}
          loading={props.buttonLoading}
        />
      </Box>
    </VGSCollectForm>
  );
};
