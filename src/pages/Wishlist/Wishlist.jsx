import CarWishList from "../../components/CarWishlist/CarWishlist";
import { Box, Button, Divider, FormHelperText, Stack, Typography } from "@mui/material";
import useUser from "../Auth/useUser";
import LoadingIndicator from "../../ui/LoadingIndicator";
import useClearWishList from "./useClearWishList";

const Wishlist=()=>{
    const {data : user, isLoading} = useUser()
    const {clearWishList , clearingWishList} = useClearWishList();
    async function handleClearWishlist(){
      try {
        await clearWishList()
      } catch(error) {
        console.log(error)
      }
    }
    return (
      <>
        {clearingWishList && <LoadingIndicator load={clearingWishList} />}
      <Box>
        <Stack m={1}>
      
      {isLoading && <LoadingIndicator load={isLoading}/>}
    <Typography variant="h5" noWrap component="div" sx={{color:"#1A202C",
    fontSize:"32px",
    fontWeight:700,
    font:"Plus Jakarta Sans",
    fontStyle:"bold",
    }} >
      Wish List
      </Typography>
    <FormHelperText>Prices may change depending on the length of the rental and the price of your rental car.</FormHelperText>
        </Stack>
     {user?.data?.wishlist.map(car => 
          <>
          <Stack mt={2}> <CarWishList  car={car}></CarWishList></Stack>
          <Divider></Divider>
          </>
      )}
      {
        user?.data?.wishlist.length > 0 &&
        <Box sx={{width : "fitContent" , m : "10px auto"}}>
      <Button variant='contained' onClick={handleClearWishlist} >Clear WishList</Button>
      </Box>   
      }
    </Box>
    </>
)
}
export default Wishlist