import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CachedIcon from '@mui/icons-material/Cached';
import MuiDrawer from '@mui/material/Drawer';
import styled from '@emotion/styled';


export const drawerWidth = 220;

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const routeObjects = [
  { text: 'Home', icon: <HomeIcon />, path: '/Dashboard' },
  { text: 'Donation', icon: <VolunteerActivismIcon/>, path: '/donation' },
  { text: 'DonationHistory', icon: <HistoryIcon />, path: '/Patient' },
  { text: 'Blood Request', icon: <CachedIcon />, path: '/blood-request' },
  { text: 'Request History', icon: <HistoryIcon />, path: '/request-history' },
];