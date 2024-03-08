import React from "react";
import CapacityCheckBoxButton from '../CapacityCheckBoxButton/CapacityCheckBoxButton';
import PriceFliterButton from '../PriceFliterButton/PriceFliterButton';
import TypeSelectedCheckBoxButton from "../TypeSelectedCheckBoxButton/TypeSelectedCheckBoxButton"
import Box from '@mui/material/Box';
import styles from "./Sidebar.module.css"

export default function Sidebar(){
    return (
    <Box sx={{ml:2}} className={styles.sidebar}>
    <TypeSelectedCheckBoxButton></TypeSelectedCheckBoxButton>
    <CapacityCheckBoxButton></CapacityCheckBoxButton>
    <PriceFliterButton></PriceFliterButton> 
    </Box>
        )
}