import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import img1 from '../../assets/2 (1).png'
import img2 from '../../assets/2 (2).png'

const SportsCar = () => {
  return (
  <>
  <Grid container>
 
    <Grid bgcolor={"#54a6ff"} sm={12} item sx={{border:"1px white",borderRadius:"10px", p:2}}>
<img src={img1} alt=''></img>
</Grid>
    
    <Grid container spacing={2}>
    <Grid bgcolor={"#54a6ff"} sm={4} item sx={{border:"1px white",borderRadius:"10px", p:2}}>
<img src={img1} alt=''></img>
</Grid>
<Grid sm={4} sx={{border:"1px white",borderRadius:"10px"}}item>
<img src={img2} alt=''></img>
</Grid>
<Grid sm={4} sx={{border:"1px white",borderRadius:"10px"}} item>
<img src={img2} alt=''></img>

</Grid>
    </Grid>
  </Grid>
  
  </>
  );
};

export default SportsCar;