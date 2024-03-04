import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";

const emailRegex = /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/gi;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/gi;

function Login() {
  const { register, handleSubmit, formState } = useForm();
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
        Login
      </Typography>
      <Stack>
        <TextField
          gutterBottom
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
          gutterBottom
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
      <Stack>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </Box>
  );
}

export default Login;
