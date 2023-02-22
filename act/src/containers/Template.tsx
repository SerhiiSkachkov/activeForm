import ActiveForm from 'components/ActiveForm';
import { FC } from 'react';
import { data } from 'api/data';

export const Template: FC = () => {
  return <ActiveForm template={data._template} />;
};
