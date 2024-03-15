import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Collapse from '@mui/material/Collapse';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import GarageIcon from '@mui/icons-material/Garage';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { useNavigate } from "react-router-dom";
const SiderBarUser=(drawerWidth)=>{
    const [open, setOpen] = React.useState(true);
   const navigate= useNavigate()
    const handleClick = () => {
        setOpen(!open);
      };
    return<>
     <Drawer
        sx={{
          width:`${drawerWidth}%`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
        <ListItemButton sx={{color:"#3563E9"}} onClick={()=>{
        navigate("./Home")
      }}>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton sx={{color:"#3563E9"}}>
        <ListItemIcon>
          <Person2Icon/>
        </ListItemIcon>
        <ListItemText primary="Profile Details" />
      </ListItemButton>

      <ListItemButton sx={{color:"#3563E9"}}>
        <ListItemIcon>
          <GarageIcon/>
        </ListItemIcon>
        <ListItemText primary="Rented Cars" />
      </ListItemButton>
 <ListItemButton sx={{color:"#3563E9"}}>
        <ListItemIcon>
          <NoCrashIcon/>
        </ListItemIcon>
        <ListItemText primary="Add Car To rent" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={{color:"#3563E9"}}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, color:"#3563E9"}}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send Message" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4,color:"#3563E9" }}>
            <ListItemIcon>
              <MarkEmailUnreadIcon />
            </ListItemIcon>
            <ListItemText primary="Recivied Messages" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton sx={{color:"#3563E9"}} onClick={()=>{
        navigate("./login")
      }}>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
        <ListItemText primary=" Log out" />
      </ListItemButton>
    </List>
       
      </Drawer>
    
    </>
}
export default SiderBarUser;