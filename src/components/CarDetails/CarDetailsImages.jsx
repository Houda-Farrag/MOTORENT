import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Stack, Box } from '@mui/material';
// import img1 from '../../assets/2 (1).png'
// import img2 from '../../assets/2 (2).png'

const ImageCars = ({car}) => {
  return (
  <>
 <Card >
  <Grid container >
 
    <Grid  item sm={12} >
    <Stack p={1} borderRadius={8} backgroundColor="#3563E9"><img src={car?.images[0].url} alt="" style={{
            width: '%100',
            height: '100%',
            borderRadius:8
          }} />
          </Stack> 
</Grid>
    
  
    <Grid mt={4}    sm={4} height={"15%"}  item >
    <Stack  p={1} borderRadius={8} ><img src={car?.images[1].url} alt=" " style={{
            width: '100%',
            
            borderRadius:20
          }} />
          </Stack> </Grid>
<Grid  mt={4} sm={4} height={"15%"}   item>
<Stack p={1} borderRadius={8} ><img src={car?.images[2].url} alt="" style={{
            width: '100%',
          
            borderRadius:15
          }} />
          </Stack> 
</Grid>
<Grid sm={4}  mt={4} height={"25%"}    item>
<Stack p={1} borderRadius={8}><img src= {car?.images[0].url} alt="" style={{
            width: '100%',
           
            borderRadius:15,
         
          }} />
          </Stack> 
</Grid>
    </Grid>
    </Card>
  </>
  );
};

export default ImageCars;