import Footer from "../../components/Footer/Footer";
import Location from "../../components/Location/Location";
import Advertise from "../../ui/Advertise";
import CarCard from "../../components/CarCard/CarCard";
import { Box, CircularProgress, Grid } from "@mui/material";
import styles from "./Home.module.css";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import NavBar from "../../components/NavBar/NavBar";
import useUser from "../Auth/useUser";

function Home() {
  // const token = localStorage.getItem("token");
  const { data: user, isLoading } = useUser();

  return (
    <Box>
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={5}
          color="#000"
          opacity="0.5" // Set the desired opacity
        >
          <CircularProgress color="primary" />
        </Box>
      )}
      <Box className={styles.home}>
        {(user || !isLoading) && <NavBar user={user} />}
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
    </Box>
  );
}

export default Home;
