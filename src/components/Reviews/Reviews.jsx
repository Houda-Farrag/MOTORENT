import React from 'react';
import { Card, Typography,  Box, Button, Grid, Avatar, Rating, TextField } from '@mui/material';
import {  deepPurple } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Review = () => {
const [value, setValue] = React.useState(2);

return<>
  <Card sx={{ p: 5,  }}>
   <Box display="inline"  >
    <Typography  variant="body1" component="span" sx={{fontSize:"22px",fontWeight:600,
    font:"Plus Jakarta Sans",color:"#1A202C",}} >
    Reviewes
    </Typography>
    <Button variant="contained"   sx={{fontSize:"16px",fontWeight:600,
    font:"Plus Jakarta Sans",ml:2,color:"#fff", backgroundColor:"#3563E9" ,border:"1px #3563E9 ",borderRadius:"8px", 
    }} >16
    </Button>
    </Box>
    <Grid container display={'flex'}mt={4} >

        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >AF</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>Ahmed Fawzy</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>12-2-224</Typography>
<Rating name="read-only" value={value} readOnly />
        </Grid>
        <Grid item sm={12}>
        <Typography  component="legend" ml={8} fontSize={"16px"} lineHeight={"28px"} fontWeight={400}  color={"#596780"}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
         </Typography>

        </Grid>

    </Grid>
    <Grid container display={'flex'}  >

        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >AF</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>Ahmed Fawzy</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>12-2-224</Typography>
<Rating name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} />
        </Grid>
        <Grid item sm={12}>
        <TextField 
      id="comment"
      multiline
      rows={3}
      variant="outlined"
      fullWidth
      sx={{border:"1px #90A3BF",borderRadius:"20px",m:2}}
      placeholder="Type your comment here..."
    
    />
        </Grid>
        <Grid sm={12} item display={"flex"}  flexDirection={'row'} justifyContent={'flex-end'}>
        <Button   size="medium" sx={{ml:2,mr:2,font:"Plus Jakarta Sans",
      fontWeight:600, backgroundColor:'#3563E9',textTransform:"unset"}} type="submit" variant="contained" >
           Add Review 
            </Button>
        </Grid>
        <Grid sm={12} item display={"flex"}  flexDirection={'row'} justifyContent={'center'}>
        <Button  sx={{color:"#90A3BF"}} item  variant="text" endIcon={<KeyboardArrowDownIcon/>}>Show more</Button>
        
        </Grid>
    </Grid>
   
  </Card>
  </>
}

export default Review