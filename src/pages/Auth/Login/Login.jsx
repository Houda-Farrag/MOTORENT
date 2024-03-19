import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
import { login } from "../../../service/userApi";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingIndicator from "../../../ui/LoadingIndicator";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/
  
function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
  });
  const { errors } = formState;
  async function submit(values) {
    try {
      setIsLoading(true);
      const response = await login(values);
      toast.success("You logged in successfully");
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {isLoading && <LoadingIndicator load={isLoading}/>}
        <Box onSubmit={handleSubmit(submit, onError)} component="form">
          <Typography variant="h4" textAlign="center" gutterBottom>
            Login
          </Typography>
          <Stack sx={{ marginBottom: "20px" }}>
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
          <Stack sx={{ marginBottom: "20px" }}>
            <TextField
              gutterBottom
              required
              size="small"
              id="password"
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is Required",
                // pattern: {
                //   value: passwordRegex,
                //   message: "Please Enter a Valid Password",
                // },
              })}
            />
          </Stack>
          <Stack>
            <Button type="submit" variant="contained" disabled={isLoading}>
              Login
            </Button>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <Link to={"/forgotPassword"}>Forget Password ?</Link>
              <Link to={"/register"}>Do not have an account?</Link>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
