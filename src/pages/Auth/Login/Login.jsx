import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import useLogin from "./useLogin";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
const passwordRegex = /^[A-Z][a-z0-9]{3,}$/gi;

function Login() {
  const { isLoading, login, data } = useLogin();
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
  });
  const { errors } = formState;

  function submit(value) {
    login(value);
    console.log(data);
    console.log(value);
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
      <Stack
        sx={{
          marginBottom: "20px",
        }}
      >
        <TextField
          gutterBottom
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
          gutterBottom
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
            !errors?.password?.message ? "" : errors?.password?.message
          }
        />
      </Stack>

      <Stack>
        <Button type="submit" variant="contained" disabled={isLoading}>
          Login
        </Button>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <Link to={"/forgotPassword"}>Forget Password ?</Link>
        </Box>
      </Stack>
    </Box>
  );
}

export default Login;
