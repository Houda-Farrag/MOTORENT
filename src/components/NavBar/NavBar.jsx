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
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CardMedia, Divider } from '@mui/material';



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

function Navbar({ user = {}, cars = [] }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(5); // Number of notifications
  const navigate = useNavigate()
  //?-----------------------
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const filteredSearchCars = cars?.data?.filter((car) =>
    car.model.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
    car.brand.brand.toLowerCase().startsWith(searchQuery.toLowerCase())
  ) || [];

  const handleSearch = (e) => {
    console.log(e.target.value, "event")
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value !== '');
  }

  const handleSearchCarClick = (car) => {
    navigate(`/carDetails`, { state: { car } });
    setShowSearchResults(false);
    setSearchQuery('');
  }

  //?-------------------------
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

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
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>

          <Typography
            onClick={()=>navigate("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,color:"#3563E9",
            fontSize:"32px",
            fontWeight:700,
            cursor : "pointer",
            font:"Plus Jakarta Sans",
            mr:10,
            ml:2
        }}
          >
            MOTORENT
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', position: 'relative' }}>
            <Search sx={{ flex: 1, maxWidth: '100%', display: 'flex', alignItems: 'center', mr: 2, ml: 2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Write something here"
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
                onChange={handleSearch}
                value={searchQuery}
                sx={{ color: 'black' }}

              />
            </Search>
            {/* ************************************* */}
            <Box
              sx={{
                position: 'absolute',
                backgroundColor: 'white',
                width: 'calc(100% - 5%)',
                overflowY: 'scroll',
                cursor: 'pointer',
                top: '100%',
                left: '50%',
                marginTop: '5px',
                transform: 'translateX(-50%)',
                zIndex: '2',
                maxHeight: '300px',
              }}
            >
              {searchQuery &&
                filteredSearchCars.map((car) => (
                  <>
                    <Button
                      key={car._id}
                      onClick={() => handleSearchCarClick(car)}
                      style={{
                        width: '100%',
                        height: '100%',
                        padding: "5px",
                        marginTop: '5px',
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        display: 'flex'
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={car?.images[0].url}
                        alt="carImg"
                        style={{ width: '25%', maxHeight: '80px' }}
                      />

                      <Typography variant="subtitle1" fontWeight="bold" marginX="auto">
                        {car?.brand?.brand}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" marginX='auto'>
                        {car?.model}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" marginX="auto" >
                        ${car?.priceForDay}
                      </Typography>
                    </Button>
                    <Divider />
                  </>
                ))}
            </Box>

          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            <IconButton
              size="large"
              aria-label="wishlist"
              color="inherit"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
            >
              <FavoriteIcon />
            </IconButton>
          <IconButton
              size="large"
              aria-label="wishlist"
              color="inherit"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9',mr: 2 }}
              onClick={()=> navigate("/cars") }
            >
              <FilterAltIcon />
            </IconButton> 
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
              aria-controls="notifications-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <Badge badgeContent={notifications} color="error">
                <NotificationsIcon sx={{ "&:hover": { color: "#FBB917" }, "&:click": { color: "#FBB917" } }} />
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
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => navigate("/user")}
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
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

    </Box>
  );
}

export default Navbar;