import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Card, Box, Button } from '@material-ui/core';
import { FormInput } from 'components/ActiveForm/FormInput';
import { FormSelect } from 'components/ActiveForm/FormSelect';
import { FormRadioGroup } from 'components/ActiveForm/FormRadioGroup';
import { FieldVariantsEnum } from 'types';

interface ActiveFormProps {
  template?: any;
  defaultFormValues?: any;
  onSubmitValue: React.Dispatch<React.SetStateAction<{}>>;
}

export const ActiveForm: FC<ActiveFormProps> = ({
  template,
  defaultFormValues = {},
  onSubmitValue,
}) => {
  const { control, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: defaultFormValues,
  });
  const { _fields } = template[0];

  const onSubmithandler = data => onSubmitValue(data);

  const FormFields = () => {
    return _fields.map(field => {
      const { type, alias } = field;
      switch (type) {
        case FieldVariantsEnum.REF:
          return <FormSelect key={alias} options={field} control={control} />;
        case FieldVariantsEnum.ENUM:
        case FieldVariantsEnum.BOL:
          return <FormRadioGroup key={alias} options={field} control={control} />;
        default:
          return <FormInput key={alias} setValue={setValue} options={field} control={control} />;
      }
    });
  };

  return (
    <Box component={Card} p={3}>
      <form onSubmit={handleSubmit(onSubmithandler)} autoComplete="off">
        {FormFields()}
        <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
          send
        </Button>
      </form>
    </Box>
  );
};
