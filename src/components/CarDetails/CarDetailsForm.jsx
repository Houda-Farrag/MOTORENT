import React from 'react';
import { Rating, Typography, Button ,Box, Grid} from '@mui/material';
import FilledFavHeart from '../FilledFavHeart/FilledFavHeart'
const CarDetailsForm = ({ car }) => {
  

  return<>
<Box sx={{p:3,borderRadius:10,backgroundColor:"#ffffff"}}>
<Grid container spacing={2}>
<Grid item xs={6} sm={8}>
<Typography variant="h5" component="h2" gutterBottom sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            lineHeight:"48px"
            }}>
            {car.name}
          </Typography>
          <Rating name="read-only" value={car.reviewer} readOnly />
          <Typography variant="body1" color="textSecondary">
            {`${car.reviewer}+ reviewer(s)`}
          </Typography>
</Grid>
<Grid item xs={6} sm={4} sx={{display:"flex",justifyContent:"flex-end"}}>
<FilledFavHeart/>
</Grid>
<Grid item sm={12}>
<Typography sx={{color:"#596780",font:"Plus Jakarta Sans",fontSize:"20px",lineHeight:"40px"}}>
  {car.discripstion}
</Typography>
</Grid>
<Grid container sx={{m:2}} spacing={2}>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
              Type Car
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car.TypeCar}
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
              Capacity
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car.capacity}
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Gasoline
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car.Gasoline}
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Streening
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car.Streening}
              </Typography>
</Grid>
</Grid>
<Grid item sm={8}>
<Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"28px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
          lineHeight:"35.5px"
            }} >
{car.priceAferDiscount.subtotal}<span style={{color:"#90A3BF",font:"Plus Jakarta Sans",fontSize:"16px"}}>/days</span>`
     <h5 style={{fontWeight:600,font:"Plus Jakarta Sans",color:"#90A3BF",fontSize:"20px", textDecoration: 'line-through' }}>{car.priceBerforeDiscount.subtotal}</h5>
      </Typography>
</Grid>
<Grid item sm={4}>
  <Button size='large' variant="contained" sx={{p:2,
    bgcolor:"#3563E9",
    fontSize:"16px",
    fontWeight:700,
    font:"Plus Jakarta Sans"
    }} >Rent Now</Button>
</Grid>

</Grid>

</Box>

  </>

};

export default CarDetailsForm;