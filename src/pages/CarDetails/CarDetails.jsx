import React from "react";
import { Container, Typography, Box, Stack, Grid } from '@mui/material';

import ImageCars from "../../components/CarDetails/CarDetailsImages";
import CarDetailsForm from "../../components/CarDetails/CarDetailsForm";
import Review from "../../components/Reviews/Reviews";
const CarDetails=()=>{
    const car = {
        name: 'Nissan GT-R',
        reviewer: 440,
        image: "car1",
        priceAferDiscount: {
          subtotal: 80,
          tax: 0,
      
        },
        priceBerforeDiscount:{
          subtotal: 100,
        },
        TypeCar:"Sport",
        capacity:'2 Person',
        Streening:"Manual",
        Gasoline:"70L",
        discripstion:"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving"
      }
    return<>
<Stack mt={2}  justifyContent={"center"} alignItems={"center"} display={"grid"}   >
    <Grid container spacing={2} >
<Grid item     sm={6}><Box display={"flex"} justifyContent={"center"} ><ImageCars></ImageCars></Box></Grid>
<Grid item     sm={6}><Box display={"flex"} justifyContent={"center" } height={"100%"}><CarDetailsForm car={car} ></CarDetailsForm></Box></Grid>

<Grid item sm={12} boxShadow={3} borderRadius={8} mt={4} >
<Review></Review>
</Grid>
</Grid>
</Stack>

    </>
}
export default CarDetails