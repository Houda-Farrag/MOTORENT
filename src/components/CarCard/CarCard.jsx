import styles from "./CarCard.module.css";

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
  IconButton,
} from "@mui/material";

import EvStationIcon from "@mui/icons-material/EvStation";
import AdjustIcon from "@mui/icons-material/Adjust";
import PersonIcon from "@mui/icons-material/Person";
import FavouriteICon from "../../ui/FavouriteICon";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function CarCard({car , LoadingCars}) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  return (
      <>
      {LoadingCars && <LoadingIndicator />}
        <div className={styles.slider} key="1">
          <Grid container gap="20px">
            <Grid item  >
              <Card style={{border:"1px solid #ffffff",borderRadius:"20px"}}
                className={`${styles.card} ${isHovered && styles.cardHover} ${isClicked && styles.cardClick}`}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                sx={{
                  maxWidth: "304px",
                  maxHeight: "388px",
                  padding: "10px !important",
                }}
              >
                <CardHeader sx={{fontWeight:700,font:
                "Plus Jakarta Sans",fontSize:"20px",
                textTransform: "capitalize",
    
                }} action={
                  
                  <IconButton >
                <FavouriteICon  />
                  </IconButton>
                } title={car?.brand.brand} />
                <Typography  component={'span'} style={{color:"#90A3BF",
              fontSize:"14px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              ml:2
                }}>{car.category}</Typography>
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
                   spacing={10}
                   display="flex"
                   alignItems="center"
                   className={styles.priceAction}
                 >
                   <Box>
                    <Typography component={'span'} 
                    sx={{fontSize:'20px',
                    fontWeight:700,
                  font:"Plus Jakarta Sans"
                  }}
                    >EGP{car.priceForDay}/</Typography>day
                   </Box>
                   <Box>
                     <Button variant="contained" onClick={()=> navigate("/rentalInfo" , {state : {car}})}>Rent</Button>
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

