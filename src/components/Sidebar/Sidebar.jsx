import React from "react";
import CapacityCheckBoxButton from '../CapacityCheckBoxButton/CapacityCheckBoxButton';
import PriceFliterButton from '../PriceFliterButton/PriceFliterButton';
import TypeSelectedCheckBoxButton from "../TypeSelectedCheckBoxButton/TypeSelectedCheckBoxButton"
import Box from '@mui/material/Box';

export default function Sidebar(){

    return <>
    <Box sx={{ml:2}}>
    <TypeSelectedCheckBoxButton></TypeSelectedCheckBoxButton>
    <CapacityCheckBoxButton></CapacityCheckBoxButton>
    <PriceFliterButton></PriceFliterButton> 
</Box>
</>
}