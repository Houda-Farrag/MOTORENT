import styles from "./CarCard.module.css";
// import Button from "../../ui/Button";
import useFetchingCarHook from '../../service/carApiHook'

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
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";

function CarCard({car , LoadingCars}) {
  const navigate = useNavigate()
  return (
      <>
      {LoadingCars && <LoadingIndicator />}
        <div className={styles.slider} key="1">
          <Grid container gap="20px">
            <Grid item>
              <Card
                sx={{
                  maxWidth: "304px",
                  maxHeight: "388px",
                  padding: "10px !important",
                }}
              >
                <CardHeader action={<FavouriteICon />} title={car.category} />
                <Box>
                  <CardMedia
                    component="img"
                    image={car.images[0]?.url}
                    alt="Car image"
                    width="192px"
                    height="100px"
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
                     <Typography>{car.tankCapacity} L</Typography>
                   </Box>
                   <Box display="flex">
                     <AdjustIcon fontSize="small" />
                   <Typography>{car.transmission}</Typography>
                                      </Box>
                <Box display="flex">
                     <PersonIcon fontSize="small" />
                     <Typography>{car.capacity} persons</Typography>
                   </Box>
                 </Stack>
               </CardContent>
               <CardContent>
                 <Stack
                   direction="row"
                   spacing={12}
                   display="flex"
                   alignItems="center"
                 >
                   <Box>
                   L.E<strong>{car.priceForDay}</strong>/day
                   </Box>
                   <Box>
                     <Button variant="contained" onClick={()=> navigate("/rentalInfo")}>Rent</Button>
                   </Box>
                 </Stack>
               </CardContent> 
                <CardActions disableSpacing></CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </>
  );
}

export default CarCard;


