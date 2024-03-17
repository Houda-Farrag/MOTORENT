import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Badge, InputBase, Menu, MenuItem } from '@mui/material';
import { AccountCircle,   Search } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from "@mui/icons-material/Person2";
import GarageIcon from "@mui/icons-material/Garage";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LogoutIcon from "@mui/icons-material/Logout";
import Collapse from "@mui/material/Collapse";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { Outlet, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: '70px',
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   border: '1px solid #C3D4E9',
//   marginRight: theme.spacing(2),
//   marginLeft: 0,

//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#C3D4E9'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      color: '#C3D4E9'
    },
  },
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


  const PersistentDrawerLeft = () => {
    const [anchorEl, setAnchorEl] = useState(null);
const [notifications, setNotifications] = useState(5); // Number of notifications

const handleMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const menuId = 'primary-search-account-menu';

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };


  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:"white"}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{color:"#3563E9"}} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:"#3563E9",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans" }}>MOTORENT</Typography>
          <Box sx={{ display: { xs: 'none',sm:"flex", md: 'flex' },justifyContent:"flex-end" ,flexGrow:1}} >


            <IconButton
              size="large"
              aria-label="wishlist"
              color="inherit"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
            >
              <FavoriteIcon sx={{"&:hover":{color:"#8b0000"}}}  />
            </IconButton>
            <IconButton
              size="large"
              aria-label="open settings"
              color="inherit"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
            >

              <SettingsIcon />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: '#596780' ,bgcolor: 'white', borderRadius: '50%',border: '1px solid #C3D4E9' ,mr: 2}}
              aria-controls="notifications-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
               <Badge badgeContent={notifications} color="error">
          <NotificationsIcon sx={{"&:hover":{color:"#FBB917"},"&:click":{color:"#FBB917"}}} />
        </Badge>
            </IconButton>
            <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* Notification items */}
        <MenuItem onClick={handleMenuClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Notification 3</MenuItem>
        {/* You can map over a list of notifications to generate menu items */}
      </Menu>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
         
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton >
         <Typography variant='span'sx={{color:"#3563E9",
            fontSize:"18px",
            fontWeight:700,
            font:"Plus Jakarta Sans" }}> Close </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("./profiledetalis");
            }}
          >
            <ListItemIcon>
              <Person2Icon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Profile Details" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate("./rentedcars");
            }}
          >
            <ListItemIcon>
              <GarageIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Rented Cars" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("./rentedcars");
            }}
          >
            <ListItemIcon>
              <NoCrashIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Add Car To rent" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <EmailIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate("./sendmessage");
                }}
              >
                <ListItemIcon>
                  <SendIcon sx={{ color: "#3563E9" }} />
                </ListItemIcon>
                <ListItemText primary="Send Message" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate("./recviedmessage");
                }}
              >
                <ListItemIcon>
                  <MarkEmailUnreadIcon sx={{ color: "#3563E9" }} />
                </ListItemIcon>
                <ListItemText primary="Recivied Messages" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary=" Log out" />
          </ListItemButton>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{boxShadow:5 ,
      bgcolor:"background.paper",
      p:2 ,borderRadius:"10px" }}>


      
       <Outlet></Outlet>
       </Box>
      </Main>
    </Box>
  );
};
export default PersistentDrawerLeft