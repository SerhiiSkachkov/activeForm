import { FC } from 'react';
import { Controller, UseFormSetValue, FieldValues, Control } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { parsIsFalse, parsIsTrue } from 'helpers/parse';

interface FormInputProps {
    options: any;
    controls: Control;
    setValue: UseFormSetValue<FieldValues>;
}

export const FormInput: FC<FormInputProps> = ({ options, controls, setValue }) => {
  const { alias, type, required, editable } = options;

  const isDisabled = parsIsFalse(editable);
  const isRequired = parsIsTrue(required) && 'Is required';

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let currentValue = e.target.value;

    if (type === 'int') {
      currentValue = currentValue.replace(/[^\d]/g, '');
    }
    if (type === 'float') {
      currentValue = currentValue.replace(',', '.');
      if (currentValue === '.') currentValue = '0.';
      currentValue = currentValue.replace(/[^\d.]|\.(?=.*\.)/g, '');
    }
    return setValue(alias, currentValue);
  };

  return (
    <Controller
      name={alias}
      control={controls}
      defaultValue=""
      rules={{ required: isRequired }}
      render={({ fieldState: { error } }) => (
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label={alias}
          name={alias}
          disabled={isDisabled}
          onChange={handleChangeValue}
          helperText={error && error.message}
        />
      )}
    />
  );
};
