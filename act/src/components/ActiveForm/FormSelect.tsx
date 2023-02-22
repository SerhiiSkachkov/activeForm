import { FC, useCallback, useEffect, useState } from 'react';
import { Controller, UseFormReturn, UseFormSetValue } from 'react-hook-form';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@material-ui/core';
import { parsIsTrue, parsIsFalse } from 'helpers/parse';

interface FormSelectProps {
  options: any;
  control: any;
}

const menuOptions: string[] = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export const FormSelect: FC<FormSelectProps> = ({ options, control }) => {
  const { alias, multiple, required, editable, _link } = options;

  const [selectOption, setSelectOptions] = useState<any[]>([]);

  // const getOptions = useCallback(() => {
  //   return fetchApi(_link, {}).then(setSelectOptions);
  // }, [_link]);

  // useEffect(() => {
  //   getOptions();
  // }, [getOptions]);

  const isDisabled = parsIsFalse(editable);
  const isMultiple = parsIsTrue(multiple);
  const isRequired = parsIsTrue(required) && 'Is required';

  const generateSingleOptions = () => {
    return menuOptions.map(el => (
      <MenuItem key={el} value={el}>
        {el}
      </MenuItem>
    ));
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal" disabled={isDisabled}>
      <InputLabel htmlFor={alias}>{alias}</InputLabel>
      <Controller
        name={alias}
        control={control}
        defaultValue={isMultiple ? [] : ''}
        rules={{ required: isRequired }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select {...field} multiple={isMultiple} defaultValue={isMultiple ? [] : ''}>
              {generateSingleOptions()}
            </Select>
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </>
        )}
      />
    </FormControl>
  );
};
