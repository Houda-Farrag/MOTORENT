import styles from "./Cars.module.css"
import { Box, Grid, Stack } from "@mui/material"
import Navbar from "../../Compontents/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Location from "../../components/Location/Location"
import CarCard from "../../components/CarCard/CarCard"
import Footer from "../../components/Footer/Footer"

function Cars() {
    return (
        <Box>
            <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9} className={styles.carspage}>
                    <Box sx={{ mt: 2 }}>
                        <Stack direction="row" display="flex" justifyContent="space-between">
                            <Location />
                            <Location />
                        </Stack>
                        <Grid container rowGap={2}>
                        {Array.from({ length: 10 }, (_, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i} >
                                <CarCard />
                            </Grid>
                        ))}
                        </Grid>
                    
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cars
