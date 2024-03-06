import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";

const passwordRegex = /^[A-Z][a-z0-9]{3,}$/gi;

function ResetPassword() {
  const { register, handleSubmit, getValues, formState } = useForm({
    mode: "all",
  });
  const { errors } = formState;

  function submit(value) {}

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
        Create New Password
      </Typography>
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
        <TextField required type="text" id="code" label="code" />
      </Stack>
      <Stack>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default ResetPassword;
