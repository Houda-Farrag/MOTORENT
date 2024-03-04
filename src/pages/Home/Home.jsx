import Footer from "../../components/Footer/Footer";
import Location from "../../components/Location/Location";
import Advertise from "../../ui/Advertise";
import CarCard from "../../components/CarCard/CarCard";
import { Box, Grid } from "@mui/material";

import styles from "./Home.module.css";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

function Home() {
  return (
    <Box className={styles.home}>
      <Box>
        <Grid container gap="10px" className={styles.loc}>
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
