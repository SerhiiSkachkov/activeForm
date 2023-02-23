import { FC } from 'react';
import { Toolbar, AppBar, Button } from '@material-ui/core';
import { NavLinks } from './NavLinks';

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {NavLinks.map(({ path, name }) => (
          <Button key={path} variant="text" color="inherit" href={path}>
            {name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
