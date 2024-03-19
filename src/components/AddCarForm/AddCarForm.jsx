import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Select, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import LocationForm from '../LocationForm/LocationForm';
import useAddCar from '../../pages/Profile/useAddCar';
import LoadingIndicator from '../../ui/LoadingIndicator';
import useCategories from '../../pages/Cars/useCategories';
import useBrands from "../../pages/Cars/useBrands"

function AddCarForm({car = {}}) {
  const {carBrands , isGettingCarBrands} = useBrands()
  const {carCategories , isGettingCategories} = useCategories()
  const { addCar, isCreating } = useAddCar();

  const [category, setCategory] = useState("CONVERTIBLE");
  const [transmission, setTransmision] = useState("manual");
  const [brand , setBrand] = useState("MERCEDES BENZ")
  const [step, setStep] = useState(0);

  const {id : EditId , ...editValues} = car;
  const EditSession = Boolean(EditId);
  const { register, formState, handleSubmit } = useForm({
    mode: "all",
  });
  
console.log(editValues)

/*
  console.log(carCategories)
  console.log(category)
  console.log(transmission)
*/  
  const [location, setLocation] = useState({
    city: '',
    area: '',
    description: ''
  });

  const { errors } = formState;

  function handleBack() {
    if (step < 1) return;
    setStep(step => step - 1);
  }

  async function submit(values) {
    console.log(values)
    if (step !== 1) return;

    const formData = new FormData();
    formData.append('brand', brand);
    formData.append('transmission', transmission);
    formData.append('category', category);

    formData.append('average', values.average);
    formData.append('capacity', values.capacity);
    formData.append('doc-carLicense', values.carLicense[0]);
    formData.append('doc-carInspection', values.carInspection[0]);
    formData.append('doc-insurance', values.insurance[0]);
    for (let i = 0; i < values.images.length; i++) {
      formData.append('images', values.images[i]);
    }
    formData.append('location[city]', location.city);
    formData.append('location[area]', location.area);
    formData.append('location[description]', location.description);
    formData.append('manufacturingYear', values.manufacturingYear);
    formData.append('model', values.model);
    formData.append('plateNumber', values.plateNumber);
    formData.append('priceForDay', values.priceForDay);
    formData.append('tankCapacity', values.tankCapacity);
  

    console.log(formData)
    try {
      await addCar(formData);
    } catch (error) {
      console.log(error);
    }
  }

  function onErrors(errors) {
    console.log(errors);
  }

  const handleLocationChange = (data) => {
    setLocation(data);
  };

  return (
    <>
    {(isCreating || isGettingCategories || isGettingCarBrands) && <LoadingIndicator load={isCreating}/>}
    <Box onSubmit={handleSubmit(submit, onErrors)} component="form">
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
                defaultValue={editValues?.model}
                {...register("model", { required: "Model is Required" })}
                error={errors?.model?.message}
                helperText={
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
                defaultValue={editValues?.manufacturingYear}
                {...register("manufacturingYear", { required: "Year Model is Required" })}
                error={errors?.manufacturingYear?.message}
                helperText={
                  !errors?.manufacturingYear?.message ? "" : errors?.manufacturingYear?.message
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Select
                fullWidth
                size='small'
                id="brand"
                value={brand}
                required
                defaultValue={editValues?.brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                {carBrands?.data.map(b => <MenuItem value={b._id}>{b.brand}</MenuItem>)}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type='number'
                size="small"
                id="tankCapacity"
                defaultValue={editValues?.tankCapacity}
                label="Tank Capacity"
                {...register("tankCapacity", { required: "Tank Capacity is Required" })}
                error={errors?.tankCapacity?.message}
                helperText={
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
                defaultValue={editValues?.average}
                label="Average KM"
                {...register("average", { required: "Average is Required" })}
                error={errors?.average?.message}
                helperText={
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
                defaultValue={editValues?.capacity}
                {...register("capacity", { required: "Capacity" })}
                error={errors?.capacity?.message}
                helperText={
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
                defaultValue={editValues?.priceForDay}
                label="Rate Per Day"
                {...register("priceForDay", { required: "Rate Per Day is Required" })}
                error={errors?.priceForDay?.message}
                helperText={
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
                defaultValue={editValues?.plateNumber}
                label="Plate Number"
                {...register("plateNumber")}
                error={errors?.plateNumber?.message}
                helperText={
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
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={editValues?.category}
              >
                {/* <MenuItem value="CONVERTIBLE">CONVERTIBLE</MenuItem>
                <MenuItem value="COUPE">COUPE</MenuItem>
                <MenuItem value="HATCHBACK">HATCHBACK</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="WAGON">WAGON</MenuItem>
                <MenuItem value="SEDAN">SEDAN</MenuItem> */}
                {carCategories?.data.map(category => <MenuItem value={category} key={category}>{category}</MenuItem>)}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                fullWidth
                size='small'
                id="transmission"
                value={transmission}
                required
                defaultValue={editValues?.transmission}
                onChange={(e) => setTransmision(e.target.value)}
              >
                <MenuItem value="manual">manual</MenuItem>
                <MenuItem value="auto">auto</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <LocationForm onChange={handleLocationChange} car={car}/>
            </Grid>
            <Grid container gap="30px">
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id={`insurance`}
                type="file"
                multiple={false}
                {...register("insurance", { required: "Upload The Insurance Photo" })}
                // defaultValue={editValues.documents.insurance.url}
              />
              <label htmlFor={`insurance`}>
                <Button variant="contained" size="small" component="span">
                  Insurance Photo
                </Button>
              </label>
              <input
                accept="image/jpg"
                style={{ display: 'none' }}
                id="carLicense"
                type="file"
                multiple={false}
                {...register("carLicense", { required: "Upload The CarLicense Photo" })}
                // defaultValue={editValues.documents.carLicense.url}
              />
              <label htmlFor={`carLicense`}>
                <Button variant="contained" size="small" component="span">
                  CarLicense Photo
                </Button>
              </label>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="carInspection"
                type="file"
                multiple={false}
                {...register("carInspection", { required: "Upload The carInspection Photo" })}
                // defaultValue={editValues.documents.carInspection.url}
              />
              <label htmlFor={`carInspection`}>
                <Button variant="contained" size="small" component="span">
                  Incpection Photo
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="images"
                type="file"
                multiple
                {...register("images", { required: "Images are Required" })}
                // defaultValue={editValues.images}
              />
              <label htmlFor={`images`}>
                <Button variant="contained" size="small" component="span">
                  Car Images
                </Button>
              </label>
            </Grid>
          </>
        }
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Grid item>
            <Button onClick={handleBack} variant='contained'>Back</Button>
          </Grid>
          <Grid item>
            {step === 1 ? <Button type='submit' variant='contained'>Add Car</Button> :
              <Button onClick={(e) => {
                e.preventDefault();
                return setStep(s => s + 1);
              }} variant='contained'>Next</Button>}
          </Grid>
        </Box>
      </Grid>
    </Box>
    </>
  );
}

export default AddCarForm;