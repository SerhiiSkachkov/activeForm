import { FC, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { ActiveForm } from 'components/ActiveForm';
import { FormOutput } from 'components/FormOutput';
import { Title } from 'components/Title';
import { data, data2 } from 'api/data';

const fakeRequest = () => {
  return Promise.resolve(data2);
};
const fakeRequestTemplate = url => {
  return Promise.resolve(data);
};

const handleDecoratedValues = obj => {
  let data = obj['_data']['_decorated'];
  return data.reduce((acc, item) => {
    if (typeof item._value === 'object') {
      acc[item._name] = item._value._manifest;
    } else {
      acc[item._name] = item._value;
    }
    return acc;
  }, {});
};

export const Decorate: FC = () => {
  const [defaultValues, setDefaultValues] = useState(null);
  const [template, setTemplate] = useState(null);
  const [formData, setformData] = useState({});

  useEffect(() => {
    fakeRequest()
      .then(res => {
        const defaultValues = handleDecoratedValues(res);
        setDefaultValues(defaultValues);
        return fakeRequestTemplate(res._meta._template);
      })
      .then(res => setTemplate(res));
  }, []);

  if (!template || !defaultValues) return null;

  return (
    <>
      <Title />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ActiveForm
            template={template._template}
            defaultFormValues={defaultValues}
            onSubmitValue={setformData}
          />
        </Grid>
        <Grid item xs={6}>
          <FormOutput formValues={formData} />
        </Grid>
      </Grid>
    </>
  );
};
