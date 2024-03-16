/*
import { Box, Button } from "@mui/material";
import { logout } from "../../service/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function NavBar({ user }) {
  const { firstName, email, phone } = user.data;
  const navigate = useNavigate();

  async function handleLogout() {
    const token = localStorage.getItem("token");
    try {
      const response = await logout(token);
      toast.success(response.message);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.success(error.respnse.data.message);
    }
  }

  return (
    <Box>
      Hello <strong>{firstName}</strong> your emal address is{" "}
      <strong>{email}</strong> and mobile number is <strong>{phone}</strong>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
}

export default NavBar;
*/


import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '70px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: '1px solid #C3D4E9',
  marginRight: theme.spacing(2),
  marginLeft: 0,
 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

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

function Navbar({user}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1,width:"100%" }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,color:"#3563E9",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            mr:10,
            ml:2

        }}
          >
            MOTORENT
          </Typography>
          <Search sx={{ flex: 1, maxWidth: '600px', display: 'flex', alignItems: 'center', mr:2,
            ml:2}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Write something here"
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
            />
        
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
          <IconButton
              size="large"
              aria-label="wishlist"
              color="inherit"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9',mr: 2 }}
            >
              <FavoriteIcon />
            </IconButton>
          <IconButton
              size="large"
              aria-label="open settings"
              color="inherit"
              sx={{ color: '#596780' ,bgcolor: 'white', borderRadius: '50%',border: '1px solid #C3D4E9' ,mr: 2}}
            >
             
              <SettingsIcon />
            </IconButton>
    
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: '#596780' ,bgcolor: 'white', borderRadius: '50%',border: '1px solid #C3D4E9' ,mr: 2}}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ color: '#596780' ,bgcolor: 'white', borderRadius: '50%',border: '1px solid #C3D4E9' ,mr: 2}}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <Avatar
                alt="Remy Sharp"
                src="../../public/1.webp"
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
        {/* <Link to={"/cars"}>Cars</Link> */}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default Navbar;