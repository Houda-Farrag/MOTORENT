import Footer from "../../components/Footer/Footer";
import Location from "../../components/Location/Location";
import Advertise from "../../ui/Advertise";
import CarCard from "../../components/CarCard/CarCard";
import { Box, Grid } from "@mui/material";
import styles from "./Home.module.css";

function Home() {
  return (
    <Box className={styles.home}>
      <Box>
        <Grid container gap="10px">
          <Advertise item />
          <Advertise item />
        </Grid>
      </Box>
      <Location />
      <CarCard />
      <Footer />
    </Box>
  );
}

export default Home;
