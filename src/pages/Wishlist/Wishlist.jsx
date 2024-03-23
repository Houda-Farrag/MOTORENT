import CarWishList from "../../components/CarWishlist/CarWishlist";
import { Accordion, AccordionSummary, Box, Button, Card, Divider, FormHelperText, Grid, Stack, Typography } from "@mui/material";
import useUser from "../Auth/useUser";
import LoadingIndicator from "../../ui/LoadingIndicator";
import useClearWishList from "./useClearWishList";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from '@mui/icons-material/Favorite';


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
       <Navbar></Navbar>
        {clearingWishList && <LoadingIndicator load={clearingWishList} />}
        <Box p={5} display={'flex'} justifyContent={'center'}>
        <Card sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.2)', 
       width:'75%' ,borderRadius:"10px" }}>
        <div>
       
        {isLoading && <LoadingIndicator load={isLoading}/>}
        <Box sx={{width:'100%'}}  >
          <Accordion
            disableGutters
            className="accordion-container"
            defaultExpanded
            sx={{ border: "none !important" ,ml:3}}
          >
            <AccordionSummary
              className="accordion-summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Box className="accordion-header">
                <FavoriteIcon sx={{color:"#3563E9"}}></FavoriteIcon>
                <Typography variant="h6" fontSize="20px" fontWeight={700} color="primary">Wish List</Typography>
              </Box>
            </AccordionSummary>
            {user?.data?.wishlist.map(car => 
               <CarWishList  car={car}></CarWishList>)}
          </Accordion>
          {
        user?.data?.wishlist.length > 0 &&
        <Box sx={{width : "fitContent" , ml : "20px ",mb:'20px',mt:'10px'}}>
      <Button variant='contained'  sx={{textTransform:'unset',backgroundColor:'red'}} onClick={handleClearWishlist} >Clear WishList</Button>
      </Box>   
      }
      </Box>
    
    
    </div>
    </Card>
    </Box>
    <Footer></Footer>


    </>
)
}
export default Wishlist

