import { FC } from 'react';
import { Controller } from 'react-hook-form';
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

interface FormRadioGroupProps {
  options: any;
  control: any;
}
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
  const isRequired = parsIsTrue(required) && 'Is required';

  const generateSingleOptions = () => {
    return Object.values<{ alias: string }>(enums).map(({ alias }) => (
      <FormControlLabel key={alias} label={alias} value={alias} control={<Radio />} />
    ));
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal" disabled={isDisabled}>
      <FormLabel htmlFor={alias}>{alias}</FormLabel>
      <Controller
        name={alias}
        rules={{ required: isRequired }}
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
