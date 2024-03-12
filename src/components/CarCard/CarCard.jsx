import styles from "./CarCard.module.css";
// import Button from "../../ui/Button";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Stack,
  Box,
  Button,
  Grid,
} from "@mui/material";

import EvStationIcon from "@mui/icons-material/EvStation";
import AdjustIcon from "@mui/icons-material/Adjust";
import PersonIcon from "@mui/icons-material/Person";
import FavouriteICon from "../../ui/FavouriteICon";

// function CarCard(){
//   // const {category , images , tankCapacity , transmission , capacity} = cars.data[0]
//   return (
//     <Card
//     sx={{
//       maxWidth: "304px",
//       maxHeight: "478px",
//       padding: "10px !important",
//     }}
//     className={styles.slider}
//   >
//     <CardHeader action={<FavouriteICon />} title="sedan" />
//     <Box
//       sx={{
//         margin: "30px 0px",
//       }}
//     >
//       <CardMedia
//         component="img"
//         // image={images[0].url}
//         image = './public/car.png'
//         alt="Paella dish"
//         width="100%"
//         height="100%"
//         sx={{
//           marginTop: "15px",
//           marginBottom: "15px",
//         }}
//       />
//        <Box className={styles.shadow}></Box> 
//     </Box>
//     <CardContent>

//       <Box display="flex" justifyContent="space-between" width="100%" color="#90A3BF">
//         <Box display="flex">
//           <EvStationIcon fontSize="small" />
//           <Typography>80 L</Typography>
//         </Box>
//         <Box display="flex">
//           <AdjustIcon fontSize="small" />
//           <Typography>auto</Typography>
//         </Box>
//         <Box display="flex">
//           <PersonIcon fontSize="small" />
//           <Typography>2 persons</Typography>
//         </Box>
//       </Box>
//     </CardContent>
//     <CardContent>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Box>
//           $<strong>99.00</strong>/day
//         </Box>
//         <Box>
//           <Button variant="contained">Rent NOW</Button>
//         </Box>
//       </Box>
//     </CardContent>
//     <CardActions disableSpacing></CardActions>
//   </Card>
//   )
// }

// export default CarCard;


function CarCard() {
  return (
    <div className={styles.slider}>
      <Grid container gap="20px">
        {Array.from({ length: 4 }, (_, i) => (
          <Grid item>
            <Card
              sx={{
                maxWidth: "304px",
                maxHeight: "388px",
                padding: "10px !important",
              }}
            >
              <CardHeader action={<FavouriteICon />} title="Car title" />
              <Box
                sx={{
                  margin: "30px 0px",
                }}
              >
                <CardMedia
                  component="img"
                  image="../public/car.png"
                  alt="Paella dish"
                  width="232px"
                  height="72"
                  sx={{
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                />
                 <Box className={styles.shadow}></Box> 
              </Box>
              <CardContent>
                <Stack direction="row" spacing={2} color="#90A3BF">
                  <Box display="flex">
                    <EvStationIcon fontSize="small" />
                    <Typography>90L</Typography>
                  </Box>
                  <Box display="flex">
                    <AdjustIcon fontSize="small" />
                    <Typography>Manual</Typography>
                  </Box>
                  <Box display="flex">
                    <PersonIcon fontSize="small" />
                    <Typography>2 persons</Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={5}
                  display="flex"
                  alignItems="center"
                >
                  <Box>
                    $<strong>99.00</strong>/day
                  </Box>
                  <Box>
                    <Button variant="contained">Rent Now</Button>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CarCard;


