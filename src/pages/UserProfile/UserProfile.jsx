import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';


const UserProfile = () => {
  const drawerWidth = 25;
  return (
     <>
      <CssBaseline />
      <Stack sx={{ width: { sm: `calc(100% - ${drawerWidth}%)` }, ml: `${drawerWidth+20}px` }}>
{/* <Navbar></Navbar> */}
{/* <UserSendMessageForm></UserSendMessageForm> */}
{/* <RentedCars></RentedCars> */}
      </Stack>
      {/* <SideBarUserProfile DrawerWidth={drawerWidth} /> */}
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Box sx={{ backgroundColor: '#fff', borderRadius: '10px', flex: '1' }}>
          <Outlet></Outlet>
        </Box>
      </Stack>
      </>
  );
};

export default UserProfile;