import React, { useState } from 'react';
import {Typography,  Box, Button, Grid, Avatar, Rating, TextField } from '@mui/material';
import {  deepPurple } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useForm } from 'react-hook-form';
import useUser from "../../Auth/useUser"
import useAddReview from "./useAddReview"
import useGetAllReviews from './useGetAllReviews';
import LoadingIndicator from '../../ui/LoadingIndicator';

const Review = ({carDetails}) => {
  const {data : user, isLoading} = useUser()
  const {register , handleSubmit ,getValues , setValue , reset , formState} = useForm()
  const [rating , setRating] = useState(1);
  const {addReview , creatingReview} = useAddReview()
  const {errors} = formState

  const {data : reviews , isLoading : loadingReviews} = useGetAllReviews(carDetails?._id)
  console.log(carDetails)
  console.log(reviews)

  async function submit(val) {
    const values = {
      car : carDetails?._id,
      review : val.review,
      rating,
    }
    try {
      await addReview(values)
      reset()
    } catch(error) {
      console.log(error)
    }
    
  }

  function onError(errors){
    console.log(errors)
  }

return<>
  {loadingReviews && <LoadingIndicator load={loadingReviews} />}
  <Box sx={{ p: 5,  }} component="form" onSubmit={handleSubmit(submit , onError)}>
      <Box display="inline"  >
        <Typography  variant="body1" component="span" sx={{fontSize:"22px",fontWeight:600,
        font:"Plus Jakarta Sans",color:"#1A202C",}} >
        Reviewes
        </Typography>
        <Button variant="contained"   sx={{fontSize:"16px",fontWeight:600,
        font:"Plus Jakarta Sans",ml:2,color:"#fff", backgroundColor:"#3563E9" ,border:"1px #3563E9 ",borderRadius:"8px", 
        }} >16
        </Button>

        <Grid container display={'flex'}mt={4} >
        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >AF</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>Ahmed Fawzy</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>12-2-224</Typography>
        <Rating name="read-only" value="" readOnly />
        </Grid>
        <Grid item sm={12}>
        <Typography  component="legend" ml={8} fontSize={"16px"} lineHeight={"28px"} fontWeight={400}  color={"#596780"}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </Typography>
        </Grid>
        </Grid>

      </Box>
        <Grid container display={'flex'}  >
        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >{user?.data.firstName.split("")[0]}{user?.data.lastName.split("")[0]}</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>{user?.data.firstName}{" "}{user?.data.lastName}</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>12-2-224</Typography>

        <Rating
        name="rating"
        id = "rating"
        label = "rating"
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
        />

        </Grid>
        <Grid item sm={12}>
        <TextField 
        id="review"
        name="review"
        multiline
        rows={3}
        variant="outlined"
        fullWidth
        sx={{border:"1px #90A3BF",borderRadius:"20px",m:2}}
        placeholder="Type your review here..."
        {...register("review")}
       />
        </Grid>
        <Grid sm={12} item display={"flex"}  flexDirection={'row'} justifyContent={'flex-end'}>
        <Button size="medium" type="submit" sx={{ml:2,mr:2,font:"Plus Jakarta Sans",
            fontWeight:600, backgroundColor:'#3563E9',textTransform:"unset"}} variant="contained" >
            Add Review 
        </Button>
        </Grid>
        <Grid sm={12} item display={"flex"}  flexDirection={'row'} justifyContent={'center'}>
        <Button  sx={{color:"#90A3BF"}} item  variant="text" endIcon={<KeyboardArrowDownIcon/>}>Show more</Button>
        </Grid>
    </Grid>
  </Box>
  </>
}

export default Review