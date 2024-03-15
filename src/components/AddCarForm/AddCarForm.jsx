import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Select, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import LocationForm from '../LocationForm/LocationForm';
import DocumentationForm from '../DocumentationForm/DocumentaionForm';

function AddCarForm() {
    const [category , setCategory] = useState("SUV")
    const [transmission , setTransmision] = useState("manual")
    const [step ,setStep] = useState(0);
    const {register , formState , handleSubmit } = useForm({
        mode : "all"
    })

    const [address, setAddress] = useState({
        city: '',
        area: '',
        description: ''
    });


    const {errors} = formState

    function handleBack(){
        if(step < 0) return
        setStep(step => step  - 1)
    }

    function submit(values){
        if(step !==1) return;
        const formData = { ...values, address };
        console.log(formData);
    }

    function onErrors(errors){
        console.log(errors)
    }

    const handleLocationChange = (data) => {
        setAddress(data);
    };

  return (
    <Box onSubmit={handleSubmit(submit , onErrors)} component="form" sx={{
        width : "75%",
        position : "absolute",
        top : "50%",
        left : "50%",
        transform : "Translate(-50% , -50%)",
        border : "1px solid #eee",
        padding : "40px"
    }}>
      <Grid container spacing={1} rowGap={2}
        >
        {step === 0 && 
        <>
        <Grid item xs={12} sm={6}>
          <TextField 
            fullWidth 
            required
            size="small"
            id="model"
            label="Model"
            {...register("model" , {required : "Model is Required"})}
            error = {errors?.model?.message}
            helperText = {
                !errors?.model?.message ? "" : errors?.model?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth
            type='number' 
            required
            size="small"
            id="manufacturingYear"
            label="Year Model"
            {...register("manufacturingYear" , {required : "Year Model is Required"})}
            error = {errors?.manufacturingYear?.message}
            helperText = {
                !errors?.manufacturingYear?.message ? "" : errors?.manufacturingYear?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            type='Brand'
            size="small"
            id="brand"
            label="Brand"
            {...register("brand"  , {required : "Brand is Required"})}
            error = {errors?.brand?.message}
            helperText = {
                !errors?.brand?.message ? "" : errors?.brand?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            type='number'
            size="small"
            id="tankCapacity"
            label="Tank Capacity"
            {...register("tankCapacity" , {required : "Tank Capacity is Required"} )}
            error = {errors?.tankCapacity?.message}
            helperText = {
                !errors?.tankCapacity?.message ? "" : errors?.tankCapacity?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            type='number'
            size="small"
            id="average"
            label="Average KM"
            {...register("average" , {required : "Average is Required"})}
            error = {errors?.average?.message}
            helperText = {
                !errors?.average?.message ? "" : errors?.average?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            type='number'
            size="small"
            id="capacity"
            label="Capacity"
            {...register("capacity" , {required : "Capacity"})}
            error = {errors?.capacity?.message}
            helperText = {
                !errors?.capacity?.message ? "" : errors?.capacity?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            type='number'
            size="small"
            id="priceForDay"
            label="Rate Per Day"
            {...register("priceForDay" , {required : "Rate Per Day is Required"})}
            error = {errors?.priceForDay?.message}
            helperText = {
                !errors?.priceForDay?.message ? "" : errors?.priceForDay?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            type='string'
            size="small"
            id="plateNumber"
            label="Plate Number"
            {...register("plateNumber")}
            error = {errors?.plateNumber?.message}
            helperText = {
                !errors?.plateNumber?.message ? "" : errors?.plateNumber?.message
            }
            />
        </Grid>
        </>
            }
        {step === 1 && 
        <>
        <Grid item xs={12} sm={6}>
        <Select
            fullWidth
            size='small'
            id="category"
            value={category}
            required
            onChange={(e) =>setCategory(e.target.value)}
            {...register("category")}
        >
            <MenuItem value="SUV">SUV</MenuItem>
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="Hatchback">Hatchback</MenuItem>
            <MenuItem value="Coupe">Coupe</MenuItem>
            <MenuItem value="Convertible">Convertible</MenuItem>
            <MenuItem value="Wagon">Wagon</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Select
            fullWidth
            size='small'
            id="transmition"
            value={transmission}
            required
            onChange={(e) =>setTransmision(e.target.value)}
            {...register("transmition")}
        >
            <MenuItem value="manual">manual</MenuItem>
            <MenuItem value="auto">auto</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12}>
            <LocationForm onChange={handleLocationChange}/>
        </Grid>
        <Grid item xs={4}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id={`doc-insurance`}
              type="file"
            />
            <label htmlFor={`doc-insurance`}>
              <Button variant="contained" size="small" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        </>
            }  
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Grid item>
          <Button onClick={handleBack}  variant='contained'>Back</Button>
          </Grid>
          <Grid item> 
          {step === 1 ? <Button type='submit' variant='contained'>Add Car</Button> : 
           <Button onClick={(e) => {
            e.preventDefault()
            return setStep(s => s + 1)
           }} variant='contained'>Next</Button>}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default AddCarForm;


