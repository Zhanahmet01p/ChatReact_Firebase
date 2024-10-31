import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid2 } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar>
        <Grid2 container justify={'flex-end'}>
          <Button variant="outlined">Login</Button>
          <Button variant="outlined">Log Out</Button>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
