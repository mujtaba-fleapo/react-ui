import { useState } from 'react';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { isValidPhoneNumber } from 'react-phone-number-input/input';
import '../styles/phone_input.scss';

interface Props {
  country?: string;
  onChange: (phone: string) => void;
}

export const PhoneNumberInput = (props: Props) => {
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [phone, setPhone] = useState('');

  const _validatePhone = (number: string, formattedNumber: string) => {
    const isInValid = !isValidPhoneNumber(`+${number}`);
    setPhoneInvalid(isInValid);
    setPhone(formattedNumber);
    props.onChange?.(isInValid ? '' : formattedNumber);
  };

  return (
    <div>
      <PhoneInput
        country={props.country || 'us'}
        inputProps={{
          required: true,
          autoFocus: true,
          autoComplete: 'tel',
          inputMode: 'tel'
        }}
        onChange={(v, data: CountryData, e, f) =>
          _validatePhone(v, e.target.value)
        }
        onEnterKeyPress={(e) => {
          if (!phoneInvalid) props.onChange?.(phone);
        }}
        enableSearch={true}
        disableSearchIcon={true}
        specialLabel={''}
      />
    </div>
  );
};
