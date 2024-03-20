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
import useCars from "../Cars/useCars"
import useGetTopFiveExpensive from "../Cars/useGetTopFiveExpensive";

function Home() {
  const { data: user, isLoading : LoadingUser } = useUser();
  const {data:cars , isLoading : LoadingCars} = useCars();
  const {data : topFiveExpensiveCars , isLoading : GettingTopFiveExpensive} = useGetTopFiveExpensive();
  console.log(topFiveExpensiveCars)

  return (
      <Box className={styles.home}> 
      {(LoadingUser || LoadingCars)  && (
        <LoadingIndicator load={LoadingCars}/>
      )}
        <NavBar cars={cars} user={user} />
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
        <Grid container>
          {cars?.data.map(car => 
            <Grid item xs={12} ms={6} md={4} lg={3}>
                 <CarCard  car={car} LoadingCars={LoadingCars} key={car.id}/>
            </Grid>
            )}
        </Grid>
        <Footer />
      </Box>
  );
}

export default Home;
