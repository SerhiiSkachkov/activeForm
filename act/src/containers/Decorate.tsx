import { FC, useEffect, useState } from 'react';
import ActiveForm from 'components/ActiveForm';
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
    acc[item._name] = item._value;
    return acc;
  }, {});
};

export const Decorate: FC = () => {
  const [defaultValues, setDefaultValues] = useState(null);
  const [template, setTemplate] = useState(null);

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

  return <ActiveForm template={template._template} defaultFormValues={defaultValues} />;
};
