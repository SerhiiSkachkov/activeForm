import { FC } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
}));

export const Container: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};
