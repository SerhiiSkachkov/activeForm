import { FC } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';
import { parsIsTrue, parsIsFalse } from 'helpers/parse';
import { BaseOptionFieldValues } from 'types';

type FormRadioGroupProps = {
  options: BaseOptionFieldValues & {
    alias: string;
    hrn: string;
    enums: Record<number, { alias: string }>;
  };
  control: Control<FieldValues>;
};
const useStyles = makeStyles(() => ({
  formGroup: {
    display: 'flex',
    flexFlow: 'wrap',
  },
}));

export const FormRadioGroup: FC<FormRadioGroupProps> = ({ options, control }) => {
  const classes = useStyles();
  const { alias, editable, required, enums } = options;

  const isDisabled = parsIsFalse(editable);
  const isRequired = parsIsTrue(required);

  const generateSingleOptions = () => {
    return Object.values(enums).map(({ alias }) => (
      <FormControlLabel key={alias} label={alias} value={alias} control={<Radio />} />
    ));
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal" disabled={isDisabled}>
      <FormLabel htmlFor={alias}>{alias}</FormLabel>
      <Controller
        name={alias}
        defaultValue=""
        rules={{ required: isRequired && 'Is required' }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <RadioGroup {...field} className={classes.formGroup}>
              {generateSingleOptions()}
            </RadioGroup>
            {error && <FormHelperText error>{error.message} </FormHelperText>}
          </>
        )}
      />
    </FormControl>
  );
};
