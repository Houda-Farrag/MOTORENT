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
    
  
{car.images.map((image,index) => (
        <Grid key={index} mt={4} sm={4} height={"15%"} item>
          <Stack  p={1} borderRadius={8}>
            <img
              src={image.url}
              alt={`Car Image ${index + 1}`}
              style={{
                width:'100%',
                borderRadius: index === 0 ? 15 : 20,              
              }}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
    </Card>
  </>
  );
};

export default ImageCars;