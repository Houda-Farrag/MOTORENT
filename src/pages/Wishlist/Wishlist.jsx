import React from "react";
import CarWishList from "../../components/CarWishlist/CarWishlist";
import car1 from "../../assets/2 (2).png"
import { Box, Divider, FormHelperText, Stack, Typography } from "@mui/material";
const Wishlist=()=>{
    // just dummy date for view //
    const car = {
        name: 'Nissan GT-R',
        reviewer: 440,
        image: car1,
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
    return<><Box>
        <Stack m={1}>
      

<Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
    fontSize:"32px",
    fontWeight:700,
    font:"Plus Jakarta Sans",
    fontStyle:"bold",
    }} >

Wish List
</Typography>
<FormHelperText>Prices may change depending on the length of the rental and the price of your rental car.</FormHelperText>
        </Stack>
   <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>
    <Divider></Divider>
    <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>    <Divider></Divider>
    <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>    <Divider></Divider>
    <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>    <Divider></Divider>
    <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>    </Box>
    </>
}
export default Wishlist