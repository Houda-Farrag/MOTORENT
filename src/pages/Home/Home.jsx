import Footer from "../../components/Footer/Footer";
import Location from "../../components/Location/Location";
import Advertise from "../../ui/Advertise";
import CarCard from "../../components/CarCard/CarCard";
import { Box, Grid } from "@mui/material";
import LoadingIndicator from "../../ui/LoadingIndicator"
import styles from "./Home.module.css";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import NavBar from "../../components/NavBar/NavBar";
import useUser from "../Auth/useUser";
// import useCars from "../../useCars"
import useFetchingCarHook from "../../service/carApiHook"
function Home() {
  const { data: user, isLoading : LoadingUser } = useUser();
  // const {data : cars , isLoading : LoadingCars} = useCars();
  const {data:car,isLoading:carLoadind,isError:carError} = useFetchingCarHook();
  if(carLoadind){
    return<>
    <><div> isLoading Car</div></>
    </>
  }
  if(car){
  console.log(car)
}
if (carError){
  console.log('error')
}

  return (
      <Box className={styles.home}> 
      {LoadingUser  && (
        <LoadingIndicator />
      )}
        <NavBar user={user} />
        <Box>
          <Grid container gap="15px" className={styles.loc}>
            <Advertise item sm={6} />
            <Advertise item sm={6} />
          </Grid>
        </Box>
        <Grid container className={styles.loc}>
          <Location item sm={5} />
          <SwapHorizOutlinedIcon item sm={2} className={styles.swap} />
          <Location item sm={5} />
        </Grid>
        <CarCard />
        <Footer />
      </Box>
  );
}

export default Home;
