import React, { useState } from 'react';
import { Grid, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

function AddCarForm() {
    const [step ,setStep] = useState(0);
    const {register , formState , handleSubmit } = useForm({
        mode : "all"
    })
    const {errors} = formState

    function submit(values){
        console.log(values)
    }

    function onErrors(errors){
        console.log(errors)
    }

  return (
    <Box onSubmit={handleSubmit(submit , onErrors)} sx={{
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
            {...register("model" , {
                required : "Model is Required",
                validate : (value) => typeof value === "string" || "Model Should be String"
            })}
            error = {errors?.model?.message}
            helperText = {
                !errors?.model?.message ? "" : errors?.model?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            size="small"
            id="manufacturingYear"
            label="Year Model"
            {...register("manufacturingYear" , {
                required : "Manufacturing Year is Required",
                validate : (value) => typeof value === "number" || "Manufacturing Year Should be Number"
            })}
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
            size="small"
            id="brand"
            label="Brand"
            {...register("brand" , {
                required : "Brand is Required",
                validate : (value) => typeof value === "string" || "Brand Should be String"
            })}
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
            size="small"
            id="tankCapacity"
            label="Tank Capacity"
            {...register("tankCapacity" , {
                required : "Tank Capacity is Required",
                validate : (value) => typeof value === "number" || "Tank Capacity Should be Number"
            })}
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
            size="small"
            id="average"
            label="Average KM"
            {...register("average" , {
                required : "Average is Required",
                validate : (value) => typeof value === "number" || "Average Should be Number"
            })}
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
            size="small"
            id="capacity"
            label="Capacity"
            {...register("capacity" , {
                required : "Capacity is Required",
                validate : (value) => typeof value === "number" || "Capacity Should be Number"
            })}
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
            size="small"
            id="priceForDay"
            label="Rate Per Day"
            {...register("priceForDay" , {
                required : "Rate is Required",
                validate : (value) => typeof value === "number" || "Rate Should be Number"
            })}
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
            size="small"
            id="plateNumber"
            label="Plate Number"
            {...register("plateNumber" , {
                required : "Plate Number is Required",
                validate : (value) => typeof value === "string" || "Plate Number Should be String"
            })}
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
          <TextField 
            fullWidth 
            required
            size="small"
            id="model"
            label="Model"
            {...register("model" , {
                required : "Model is Required",
                validate : (value) => typeof value === "string" || "Model Should be String"
            })}
            error = {errors?.model?.message}
            helperText = {
                !errors?.model?.message ? "" : errors?.model?.message
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
            fullWidth 
            required
            size="small"
            id="manufacturingYear"
            label="Year Model"
            {...register("manufacturingYear" , {
                required : "Manufacturing Year is Required",
                validate : (value) => typeof value === "number" || "Manufacturing Year Should be Number"
            })}
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
            size="small"
            id="brand"
            label="Brand"
            {...register("brand" , {
                required : "Brand is Required",
                validate : (value) => typeof value === "string" || "Brand Should be String"
            })}
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
            size="small"
            id="tankCapacity"
            label="Tank Capacity"
            {...register("tankCapacity" , {
                required : "Tank Capacity is Required",
                validate : (value) => typeof value === "number" || "Tank Capacity Should be Number"
            })}
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
            size="small"
            id="average"
            label="Average KM"
            {...register("average" , {
                required : "Average is Required",
                validate : (value) => typeof value === "number" || "Average Should be Number"
            })}
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
            size="small"
            id="capacity"
            label="Capacity"
            {...register("capacity" , {
                required : "Capacity is Required",
                validate : (value) => typeof value === "number" || "Capacity Should be Number"
            })}
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
            size="small"
            id="priceForDay"
            label="Rate Per Day"
            {...register("priceForDay" , {
                required : "Rate is Required",
                validate : (value) => typeof value === "number" || "Rate Should be Number"
            })}
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
            size="small"
            id="plateNumber"
            label="Plate Number"
            {...register("plateNumber" , {
                required : "Plate Number is Required",
                validate : (value) => typeof value === "string" || "Plate Number Should be String"
            })}
            error = {errors?.plateNumber?.message}
            helperText = {
                !errors?.plateNumber?.message ? "" : errors?.plateNumber?.message
            }
            />
        </Grid>
        </>
            }         

        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Grid item>
        <Button onClick={() => setStep(s => s - 1)} variant='contained'>Back</Button>
        {/* <Button type='submit' variant='contained'>Add Car</Button> */}
        </Grid>
        <Grid item> 
        <Button onClick={() => setStep(s => s + 1)} variant='contained'>Next</Button>
        {/* <Button type='submit' variant='contained'>Add Car</Button> */}
        </Grid>
        </Box>    
      </Grid>
    </Box>
  );
}

export default AddCarForm;


