import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Stack, Grid } from '@mui/material';
import Sidebar from "../../components/Sidebar/Sidebar";

import ImageCars from "../../components/CarDetails/CarDetailsImages";
import CarDetailsForm from "../../components/CarDetails/CarDetailsForm";
import Review from "../../components/Reviews/Reviews";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import TopFiveCheapestCars from "../../components/TopFiveCheapestCars/TopFiveCheapestCars";
import TopFiveCars from "../../components/TopFiveCars/TopFiveCars";
import TopFiveExpensiveCars from "../../components/TopFiveExpensiveCars/TopFiveExpensiveCars";
import Footer from "../../components/Footer/Footer";
import useCars from "../Cars/useCars";
const CarDetails = () => {
  const location = useLocation();
  const { car: carDetails } = location?.state || {};
  console.log(carDetails,"from car details")
  // const { } = carDetails;
const {length,setLenght}=useState(0)

/////////////------------------------sidebar functions---------------/////////////

  return <>
  <Grid container>
<Grid item sm={12}><Navbar></Navbar></Grid>
<Grid item sm={2}>hjhjkhjkhjkh</Grid>
<Grid item sm={10}>
  <Grid container>
    <Stack mt={2}  height={'85vh'}display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>

    <Grid item sm={5}><Box height={'100%' } width={'100%'} display={"flex"} justifyContent={"center"} >
  <ImageCars car={carDetails}></ImageCars  ></Box></Grid>
  <Grid item xs={12} sm={5}><Box display={"flex"} justifyContent={"center"} width={'100%'}  height={"100%"}>
          <CarDetailsForm   car={carDetails} ></CarDetailsForm></Box></Grid>
    </Stack>
 
          <Grid item sm={12} boxShadow={3} borderRadius={8} mt={2} >
          <Review carDetails={carDetails}></Review>
        </Grid>
        <Grid sm={12}>

<TopFiveCars ></TopFiveCars>
        </Grid>
        <Grid sm={12}>

<TopFiveExpensiveCars ></TopFiveExpensiveCars>
        </Grid>
        </Grid>
        </Grid>
        <Grid item sm={12}>
<Footer></Footer>
        </Grid>
  </Grid>

    {/* <Stack mt={2} justifyContent={"center"} alignItems={"center"} display={"grid"}   >
      <Grid container spacing={2} >
        <Grid item sm={6}><Box height={'100%'} display={"flex"} justifyContent={"center"} >
          <ImageCars car={carDetails}></ImageCars  ></Box></Grid>
        <Grid item sm={6}><Box display={"flex"} justifyContent={"center"} height={"100%"}>
          <CarDetailsForm  car={carDetails} ></CarDetailsForm></Box></Grid>

        <Grid item sm={12} boxShadow={3} borderRadius={8} mt={4} >
          <Review></Review>
        </Grid>
      </Grid>
    </Stack> */}

  </>
}
export default CarDetails