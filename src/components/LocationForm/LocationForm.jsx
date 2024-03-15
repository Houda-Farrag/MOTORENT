import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const LocationForm = ({onChange}) => {
  const [address, setAddress] = useState({
    city: '',
    area: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevState => ({
        ...prevState,
        [name]: value
    }));
    onChange(address);
};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{marginBottom : "15px"}}
        fullWidth
        size='small'
        label="City"
        name="city"
        value={address.city}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        sx={{marginBottom : "15px"}}
        size='small'
        label="Area"
        name="area"
        value={address.area}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        size='small'
        label="Description"
        name="description"
        value={address.description}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <Box mt={2}>
      </Box>
    </form>
  );
};

export default LocationForm;
