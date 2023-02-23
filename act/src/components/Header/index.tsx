import { FC } from 'react';
import { Toolbar, AppBar, Link } from '@material-ui/core';
import { NavLinks } from './NavLinks';
import Button from '@material-ui/core/Button';

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {NavLinks.map(({ path, name }) => (
          <Button key={path} variant="text" color="inherit" component={Link} href={path}>
            {name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
