// import styles from "./CarCard.module.css";
// // import Button from "../../ui/Button";
// import useFetchingCarHook from '../../service/carApiHook'

// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Typography,
//   Stack,
//   Box,
//   Button,
//   Grid,
// } from "@mui/material";

// import EvStationIcon from "@mui/icons-material/EvStation";
// import AdjustIcon from "@mui/icons-material/Adjust";
// import PersonIcon from "@mui/icons-material/Person";
// import FavouriteICon from "../../ui/FavouriteICon";
// import LoadingIndicator from "../../ui/LoadingIndicator";
// import { useNavigate } from "react-router-dom";

// function CarCard({car , LoadingCars}) {
//   const navigate = useNavigate()
//   return (
//       <>
//       {LoadingCars && <LoadingIndicator />}
//         <div className={styles.slider} key="1">
//           <Grid container gap="20px">
//             <Grid item>
//               <Card
//                 sx={{
//                   maxWidth: "304px",
//                   maxHeight: "388px",
//                   padding: "10px !important",
//                 }}
//               >
//                 <CardHeader action={<FavouriteICon />} title={car.category} />
//                 <Box>
//                   <CardMedia
//                     component="img"
//                     image={car.images[0]?.url}
//                     alt="Car image"
//                     width="192px"
//                     height="100px"
//                     sx={{
//                       marginTop: "15px",
//                       marginBottom: "15px",
//                     }}
//                   />
//                   <Box className={styles.shadow}></Box> 
//                 </Box>
//               <CardContent>
//                 <Stack direction="row" spacing={2} color="#90A3BF">
//                    <Box display="flex">

//                      <EvStationIcon fontSize="small" />
//                      <Typography>{car.tankCapacity} L</Typography>
//                    </Box>
//                    <Box display="flex">
//                      <AdjustIcon fontSize="small" />
//                    <Typography>{car.transmission}</Typography>
//                                       </Box>
//                 <Box display="flex">
//                      <PersonIcon fontSize="small" />
//                      <Typography>{car.capacity} persons</Typography>
//                    </Box>
//                  </Stack>
//                </CardContent>
//                <CardContent>
//                  <Stack
//                    direction="row"
//                    spacing={12}
//                    display="flex"
//                    alignItems="center"
//                  >
//                    <Box>
//                    L.E<strong>{car.priceForDay}</strong>/day
//                    </Box>
//                    <Box>
//                      <Button variant="contained" onClick={()=> navigate("/rentalInfo")}>Rent</Button>
//                    </Box>
//                  </Stack>
//                </CardContent> 
//                 <CardActions disableSpacing></CardActions>
//               </Card>
//             </Grid>
//           </Grid>
//         </div>
//       </>
//   );
// }

// export default CarCard;
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
import { useState } from "react";

function CarCard({car , LoadingCars}) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
console.log(car)
  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  /*const handleClick = () => {
    setIsClicked(true);
    navigate("/rentalInfo");
  };*/

  
  return (
      <>
      {LoadingCars && <LoadingIndicator />}
        <div className={styles.slider} key="1">
          <Grid container gap="20px">
            <Grid item  >
              <Card style={{border:"1px solid #ffffff",borderRadius:"20px" ,width:"100%",height:"100%"}}
                className={`${styles.card} ${isHovered && styles.cardHover} ${isClicked && styles.cardClick}`}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                //onClick={handleClick}
                sx={{
                  maxWidth: "304px",
                  maxHeight: "388px",
                  padding: "10px !important",
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.2)'

                
                }}
              >
                <CardHeader sx={{fontWeight:700,font:
                "Plus Jakarta Sans",fontSize:"20px",
                textTransform: "capitalize",
    
                }} action={<FavouriteICon />} title={car?.brand.brand} />
                <Typography  component={'span'} style={{color:"#90A3BF",
              fontSize:"14px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              ml:2
                }}>{car.category}</Typography>
                <Box sx={{role:'button', cursor:"pointer"}}   >
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
