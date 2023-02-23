import { FC } from 'react';
import { Controller, UseFormSetValue, FieldValues, Control } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { parseToBool } from 'helpers/parse';
import { BaseOptionFieldValues, FieldVariantsEnum } from 'types';

interface FormInputProps {
  options: BaseOptionFieldValues;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export const FormInput: FC<FormInputProps> = ({ options, control, setValue }) => {
  const { alias, type, required, editable } = options;

  const isDisabled = parseToBool(editable);
  const isRequired = parseToBool(required);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let currentValue = e.target.value;

    if (type === FieldVariantsEnum.INT) {
      currentValue = currentValue.replace(/[^\d]/g, '');
    }
    if (type === FieldVariantsEnum.FLOAT) {
      currentValue = currentValue.replace(',', '.');
      if (currentValue === '.') currentValue = '0.';
      currentValue = currentValue.replace(/[^\d.]|\.(?=.*\.)/g, '');
    }
    return setValue(alias, currentValue);
  };

  return (
    <Controller
      name={alias}
      control={control}
      defaultValue=""
      rules={{ required: isRequired && 'Is required' }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
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
