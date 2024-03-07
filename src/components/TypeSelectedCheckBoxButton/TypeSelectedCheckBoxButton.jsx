import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function TypeSelectedCheckBoxButton() {
  const [state, setState] = React.useState({
    Sport: true,
    SUV: false,
    MPV: false,
    Sedan:false,
    Hatchback:false,
    Coupe:false,
   
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Sport, SUV, MPV,Sedan,Coupe,Hatchback } = state;
  const error = [Sport, SUV,MPV,Sedan,Coupe, Hatchback].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 ,color:'#596780',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"20px"
    }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{color:'#90A3BF',font:"Plus Jakarta Sans",lineHeight:'30px',
    fontWeight:600, fontSize:"12px"}}>T Y P E</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Sport} onChange={handleChange} name="Sport" value={Sport} />
            }
            label="Sport(10)"
          />
          <FormControlLabel
            control={
              <Checkbox checked={SUV} onChange={handleChange} name="SUV" value={SUV} />
            }
            label="SUV"
          />
          <FormControlLabel
            control={
              <Checkbox checked={MPV} onChange={handleChange} name="MPV" value={MPV}/>
            }
            label="MPV "
          />
          <FormControlLabel
            control={
              <Checkbox checked={Sedan} onChange={handleChange} name="Sedan" value={Sedan}/>
            }
            label="Sedan "
          />
          <FormControlLabel
            control={
              <Checkbox checked={Hatchback} onChange={handleChange} name="Hatchback" value={Hatchback}/>
            }
            label="Hatchback "
          />
          <FormControlLabel
            control={
              <Checkbox checked={Coupe} onChange={handleChange} name="Coupe" value={Coupe}/>
            }
            label="Coupe "
          />
         
        </FormGroup>
      
      </FormControl>
  
    
    </Box>
  );
}