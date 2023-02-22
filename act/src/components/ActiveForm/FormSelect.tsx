import { FC, useCallback, useEffect, useState } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@material-ui/core';
import { fetchApi } from 'api';
import { parsIsTrue, parsIsFalse } from 'helpers/parse';
import { PytonBooleanValues, BaseOptionFieldValues } from 'types';

type FormSelectProps = {
  options: BaseOptionFieldValues & {
    depends: PytonBooleanValues;
    hrn: string;
    _link: string;
    behivor: Record<number, string>;
  };
  control: Control<FieldValues>;
};

interface MenuOptionsKey {
  label: string;
  value: string;
}
const menuOptions: MenuOptionsKey[] = [
  {
    label: 'Contract',
    value: 'Contract',
  },
  {
    label: 'B2B_Service',
    value: 'B2B_Service',
  },
];

export const FormSelect: FC<FormSelectProps> = ({ options, control }) => {
  const { alias, multiple, required, editable, _link, depends } = options;

  const [selectOption, setSelectOptions] = useState<MenuOptionsKey[]>(menuOptions);
  // Api doesn't work
  // It will work api

  // const getOptions = useCallback(() => {
  //   if (parsIsTrue(depends)) {
  //     return fetchApi(_link, {}).then(setSelectOptions);
  //   }
  // }, [_link, depends]);

  // useEffect(() => {
  //   getOptions();
  // }, [getOptions]);

  const isDisabled = parsIsFalse(editable);
  const isMultiple = parsIsTrue(multiple);
  const isRequired = parsIsTrue(required);

  const generateSingleOptions = () => {
    return selectOption.map(({ label, value }) => (
      <MenuItem key={value} value={value}>
        {label}
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
        rules={{ required: isRequired && 'Is required' }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select {...field} multiple={isMultiple}>
              {generateSingleOptions()}
            </Select>
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </>
        )}
      />
    </FormControl>
  );
};
