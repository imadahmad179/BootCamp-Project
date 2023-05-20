import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

export default function AppBar1(props) {
  return (
    <Box style={{marginLeft: '30px', zIndex: 10000 }} sx={{ flexGrow: 1 }}>
      <AppBar {...props}>
        <Toolbar style={{backgroundColor:'red'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <BloodtypeIcon sx={{ mr: 2 }} />
            Blood-Donation
          </Typography>
          {/* <Link to={`/login`}>Login</Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
