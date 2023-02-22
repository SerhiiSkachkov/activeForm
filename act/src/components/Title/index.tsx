import { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router';

export const Title: FC = () => {
  const { pathname } = useLocation();

  const titleList = {
    '/': 'Template',
    '/decorated': 'Decorated',
  };
  return <Typography variant="h3">{titleList[pathname]}</Typography>;
};
