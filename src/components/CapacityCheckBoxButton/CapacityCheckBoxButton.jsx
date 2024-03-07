import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CapacityCheckBoxButton() {
  const [state, setState] = React.useState({
    twoPerson: true,
    fourPerson: false,
    sixPerson: false,
    eightOrMore:false,
    
   
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { twoPerson, fourPerson, sixPerson,eightOrMore } = state;
  const error = [twoPerson, fourPerson,sixPerson,eightOrMore].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 ,color:'#596780',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"20px "
    }}component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{color:'#90A3BF',font:"Plus Jakarta Sans",lineHeight:'30px',
    fontWeight:600, fontSize:"12px"}}>C A P A C I T Y</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={twoPerson} onChange={handleChange} name="twoPerson" value={twoPerson} />
            }
            label="2 Person"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fourPerson} onChange={handleChange} name="fourPerson" value={fourPerson} />
            }
            label="4 Person"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sixPerson} onChange={handleChange} name="sixPerson" value={sixPerson}/>
            }
            label="6 Person "
          />
          <FormControlLabel
            control={
              <Checkbox checked={eightOrMore} onChange={handleChange} name="eightOrMore" value={eightOrMore}/>
            }
            label="8 Or More "
          />
        
         
        </FormGroup>
      
      </FormControl>
  
    
    </Box>
  );
}