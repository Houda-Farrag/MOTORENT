import { Box, Button } from "@mui/material";
import styles from "./Advertise.module.css";

function Advertise() {
  return (
    <Box className={styles.adv}>
      <Box className={styles.text}>
        <h2 className={styles.header}>The Best Platform for Car Rental</h2>
      </Box>
      <h5>
        Ease of doing Car Rental safely and reliebly , Of course at low price
      </h5>
      <Box className={styles.button}>
        <Button variant="contained">Rental Car</Button>
      </Box>
      <img src="../../public/car.png" alt="car1" className={styles.image} />
    </Box>
  );
}

export default Advertise;
