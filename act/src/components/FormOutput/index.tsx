import { FC } from 'react';
import { Card, Box, Typography } from '@material-ui/core';

interface FormOutputProps {
  formValues: Record<string, string | {} | any[]>;
}
export const FormOutput: FC<FormOutputProps> = ({ formValues }) => {
  return (
    <Box component={Card} height="100%" p={3}>
      <Typography variant="h3"> Form Output</Typography>
      {Object.keys(formValues).map(key => (
        <div key={key}>{`${key} : ${formValues[key]}`}</div>
      ))}
    </Box>
  );
};
