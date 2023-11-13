import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { loadVGSCollect } from '@vgs/collect-js';
import { useEffect, useState } from 'react';
import { colors } from '../../styles/colors';
import '../../styles/style.scss';
import { theme } from '../../theme';

export const CreditCardInput = () => {
  const [form, setForm] = useState<any>();
  const [vgsCollect, setVgsCollect] = useState<any>();

  useEffect(() => {
    const loadForm = async () => {
      const vgsCollect = await loadVGSCollect({
        vaultId: 'tntnmemz6i7',
        environment: 'sandbox',
        version: '2.18.0'
      }).catch((e) => {
        console.log(e);
      });
      setVgsCollect(vgsCollect);
    };
    loadForm();
  }, []);

  const initForm = (vgsCollect: any) => {
    if (vgsCollect && !form) {
      const form = vgsCollect.init((state: any) => console.log(state));

      const css = {
        boxSizing: 'border-box',
        height: '34px',
        borderBottom: `1px solid ${colors.lightgray[600]}`
      };

      form.field('#cc-holder', {
        type: 'text',
        name: 'Name on card',
        placeholder: 'Name on card',
        validations: ['required'],
        css: { ...css }
      });
      form.field('#cc-number', {
        type: 'card-number',
        name: 'card_number',
        placeholder: 'Card number',
        showCardIcon: {
          left: 0
        },
        validations: ['required', 'validCardNumber'],
        autoComplete: 'cc-number',
        css: {
          padding: '0px 0px 0px 40px',
          ...css
        }
      });
      form.field('#cc-cvc', {
        type: 'card-security-code',
        name: 'card_cvc',
        placeholder: 'CVV',
        maxLength: 4,
        validations: ['required', 'validCardSecurityCode'],
        css
      });
      form.field('#cc-expiration-date', {
        type: 'card-expiration-date',
        name: 'card_exp',
        placeholder: 'MM / YY',
        validations: ['required', 'validCardExpirationDate'],
        autoComplete: 'cc-exp',
        css
      });
      setForm(form);
    }
  };

  useEffect(() => {
    initForm(vgsCollect);
  }, [vgsCollect, form]);

  const submitVGSCollectForm = (e: any) => {
    e.preventDefault();
    form.submit('/post', {}, (status: any, data: any) => {
      console.log(JSON.stringify(data, null, 4));
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="payment-cards">
        <form
          data-testid={`credit-card-input-form-ds`}
          onSubmit={submitVGSCollectForm}
          id="vgs-collect-form"
        >
          <Box id="cc-holder" className="form-field"></Box>
          <Box
            className="single-line-form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 2
            }}
          >
            <Box
              id="cc-number"
              className="form-field card-name-text"
              sx={{ width: '100%' }}
            ></Box>
            <Box
              id="cc-expiration-date"
              className="form-field "
              sx={{ width: '20%' }}
            ></Box>
            <Box id="cc-cvc" className="form-field" sx={{ width: '10%' }}></Box>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
};
