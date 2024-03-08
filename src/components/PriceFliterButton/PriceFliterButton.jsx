import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function PriceFliterButton () {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <Box sx={{ width: "90%" }}>
        <Typography sx={{color:'#90A3BF',font:"Plus Jakarta Sans",lineHeight:'30px',
    fontWeight:600, fontSize:"12px"}}>
P R I C E
        </Typography>
     
      <Slider
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        sx={{height:10,color:"#3563E9"}}
       
      />
 
      
        <Typography
          variant="h5"
          sx={{ m: 1 ,color:'#596780',font:"Plus Jakarta Sans",
    fontWeight:400, fontSize:"20px",lineHeight:"30px"
    }}>Max.$100.00
        </Typography>
      
    </Box>
  );
}