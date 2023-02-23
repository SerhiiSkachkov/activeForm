import { FC, useState } from 'react';
import { ActiveForm }  from 'components/ActiveForm';
import { FormOutput } from 'components/FormOutput';
import { Title } from 'components/Title';
import { Grid } from '@material-ui/core';
import { data } from 'api/data';

export const Template: FC = () => {
  const [formData, setformData] = useState({});
  return (
    <>
      <Title />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ActiveForm template={data._template} onSubmitValue={setformData} />
        </Grid>
        <Grid item xs={6}>
          <FormOutput formValues={formData} />
        </Grid>
      </Grid>
    </>
  );
};
