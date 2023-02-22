import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Box, Button } from '@material-ui/core';
import { FormInput } from 'components/FormInput/FormInput';
import { FormSelect } from 'components/ActiveForm/FormSelect';
import { FormRadioGroup } from 'components/ActiveForm/FormRadioGroup';

const DROP_DOWN_LIST = 'ref';
const RADIO_LIST = 'enum';
const CHECKBOX_LIST = 'bool';

interface ActiveFormProps {
  template?: any;
  templateLink?: any;
  defaultFormValues?: any;
}

const ActiveForm: FC<ActiveFormProps> = ({ template, templateLink, defaultFormValues = {} }) => {
  const { control, handleSubmit, setValue, register } = useForm({ defaultValues: defaultFormValues });
  const { _fields } = template[0];

  const onSubmit = (data: any) => console.log(data);

  const FormFields = () => {
    return _fields.map(field => {
      const { type, alias } = field;
      switch (type) {
        case DROP_DOWN_LIST:
          return <FormSelect key={alias} options={field} control={control} />;
        case RADIO_LIST:
        case CHECKBOX_LIST:
          return <FormRadioGroup key={alias} options={field} control={control} />;
        default:
          return <FormInput key={alias} setValue={setValue} options={field} controls={control} />;
      }
    });
  };

  return (
    <Box component={Card} width="600px" mx={'auto'} p={3}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {FormFields()}
        <Button variant="contained" color="primary" type="submit" size="large">
          Primary
        </Button>
      </form>
    </Box>
  );
};

export default ActiveForm;
