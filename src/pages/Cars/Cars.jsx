import styles from "./Cars.module.css"
import { Box, Grid, Stack } from "@mui/material"
import Navbar from "../../Compontents/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Location from "../../components/Location/Location"
import CarCard from "../../components/CarCard/CarCard"
import Footer from "../../components/Footer/Footer"

function Cars() {
    return (
        <Box >
        <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={3}>
                <Sidebar />
            </Grid>
            <Grid item xs={9} className={styles.carspage}>
            <Box sx={
                {
                    mt:2
                }
            }>
                <Stack direction="row" display="flex" justifyContent="space-between">
                    <Location />
                    <Location />
                </Stack>
            </Box>
            </Grid>
            <Grid container>
            {Array.from({length: 10} , (_ , i) => (
                <Grid item xs={4}>
                    <CarCard key={i}/>
                </Grid>
            ))}
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Footer />
        </Grid>
        </Box>
    )
}

export default Cars
