import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { useSignup } from "./Auth/useSignup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
const passwordRegex = /^[A-Z][a-z0-9]{3,}$/gi;

function Register() {
  const { signup, isLoading } = useSignup();
  const { register, getValues, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  function submit(values) {
    signup(values);
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
          id="firstName"
          label="First Name"
          {...register("firstName", {
            required: "First Name is Required",
            minLength: {
              value: 3,
              message: "At least 3 chars",
            },
          })}
          error={errors?.firstName?.message}
          helperText={
            !errors?.firstName?.message ? "" : errors?.firstName?.message
          }
        />

        <TextField
          required
          size="small"
          id="lastName"
          label="Last Name"
          {...register("lastName", {
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
            pattern: {
              value: emailRegex,
              message: "Please Enter a Valid Email",
            },
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
            pattern: {
              value: passwordRegex,
              message: "Please Enter a Valid Password",
            },
          })}
          error={errors?.password?.message}
          helperText={
            !errors?.password?.message
              ? "Password should start with Capital Letter and by max 8 chars"
              : errors?.password?.message
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
          id="passwordConfirm"
          label="Confirm Password"
          type="password"
          {...register("passwordConfirm", {
            required: "Password is Required",
            validate: (value) =>
              value === getValues().password || "Passwords do not match",
          })}
          error={errors?.passwordConfirm?.message}
          helperText={
            !errors?.passwordConfirm?.message
              ? ""
              : errors?.passwordConfirm?.message
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
          id="address"
          label="address"
          type="text"
          {...register("address", {
            required: "address is Required",
          })}
          error={errors?.address?.message}
          helperText={!errors?.address?.message ? "" : errors?.address?.message}
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
          id="phone"
          label="phone"
          type="text"
          {...register("phone", {
            required: "phone is Required",
          })}
          error={errors?.phone?.message}
          helperText={!errors?.phone?.message ? "" : errors?.phone?.message}
        />
      </Stack>
      <Stack>
        <Button type="submit" variant="contained" disabled={isLoading}>
          Register
        </Button>
      </Stack>
    </Box>
  );
}

export default Register;
