import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";

const emailRegex = /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/gi;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/gi;

function Register() {
  const { register, getValues, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function submit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Box
      onSubmit={handleSubmit(submit, onError)}
      component="form"
      sx={{
        width: "500px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        border: " 1px solid #eee",
        padding: "30px",
        borderRadius: "5px",
      }}
      autoComplete="off"
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Register
      </Typography>
      <Stack
        direction="row"
        spacing={7}
        sx={{
          marginBottom: "20px",
        }}
      >
        <TextField
          required
          size="small"
          id="firstname"
          label="First Name"
          {...register("firstname", {
            required: "First Name is Required",
            minLength: {
              value: 3,
              message: "At least 3 chars",
            },
          })}
          error={errors?.firstname?.message}
          helperText={
            !errors?.firstname?.message ? "" : errors?.firstname?.message
          }
        />

        <TextField
          required
          size="small"
          id="lastname"
          label="Last Name"
          {...register("lastname", {
            required: "Last Name is Required",
            minLength: {
              value: 3,
              message: "At least 3 chars",
            },
          })}
          error={errors?.lastname?.message}
          helperText={
            !errors?.lastname?.message ? "" : errors?.lastname?.message
          }
        />
      </Stack>
      <Stack
        sx={{
          marginBottom: "20px",
        }}
      >
        <TextField
          required
          size="small"
          id="email"
          label="Email"
          {...register("email", {
            required: "Email is Required",
            validate: (value) =>
              value.toLowerCase().match(emailRegex) ||
              "Please Enter a valid Email",
          })}
          error={errors?.email?.message}
          helperText={!errors?.email?.message ? "" : errors?.email?.message}
        />
      </Stack>
      <Stack
        sx={{
          marginBottom: "20px",
        }}
      >
        <TextField
          required
          size="small"
          id="password"
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is Required",
            validate: (value) =>
              value.toLowerCase().match(passwordRegex) ||
              "Please Enter a valid Password",
          })}
          error={errors?.password?.message}
          helperText={
            !errors?.password?.message ? "" : errors?.password?.message
          }
        />
      </Stack>
      <Stack
        sx={{
          marginBottom: "20px",
        }}
      >
        <TextField
          required
          size="small"
          id="confirmpassword"
          label="Confirm Password"
          type="password"
          {...register("confirmpassword", {
            required: "Password is Required",
            validate: (value) =>
              value === getValues().password || "Passwords do not match",
          })}
          error={errors?.confirmpassword?.message}
          helperText={
            !errors?.confirmpassword?.message
              ? ""
              : errors?.confirmpassword?.message
          }
        />
      </Stack>
      <Stack>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Stack>
    </Box>
  );
}

export default Register;
