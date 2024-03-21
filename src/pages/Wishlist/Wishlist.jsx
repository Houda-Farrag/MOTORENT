import React, { useEffect, useState } from "react";
import CarWishList from "../../components/CarWishlist/CarWishlist";
import car1 from "../../assets/2 (2).png"
import { Box, Divider, FormHelperText, Stack, Typography } from "@mui/material";
import useUser from "../Auth/useUser";
import { getCarById } from "../../service/carApi";




const Wishlist=()=>{
    const {data : user, isLoading} = useUser()
    const carsIds = user?.data.wishlist
    const [cars, setCars] = useState([]);
    useEffect(() => {
      async function getCarsInWishList() {
          if (!carsIds) return;
          try {
              const carPromises = carsIds.map(async (id) => {
                  const res = await getCarById(id);
                  return res;
              });
              const carsData = await Promise.all(carPromises);
              setCars(carsData);
          } catch (error) {
              console.log(error);
          }
      }
      getCarsInWishList();
      console.log(cars) 
  }, [carsIds]);


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
     {/* {cars.map(car => 
          <>
          <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>
          <Divider></Divider>
          </>
      )}    */}
    </Box>
    </>
}
export default Wishlist