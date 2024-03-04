import styles from "./Location.module.css";

import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";

function Location() {
  return (
    <form className={styles.form}>
      <FormControl>
        <RadioGroup name="location" aria-labelledby="pickup">
          <FormControlLabel
            control={<Radio />}
            label="Pick-Up"
            value="pickup"
          />
        </RadioGroup>
        <Stack direction="row" spacing={10}>
          <Box
            sx={{
              width: {
                lg: "120px",
                sm: "50px",
              },
            }}
          >
            {/* <Typography variant="body1" gutterBottom>
              Location
            </Typography> */}
            <TextField
              size="small"
              label="Select..."
              variant="standard"
              select
              fullWidth
            >
              <MenuItem value="AL">Alexanderia</MenuItem>
              <MenuItem value="Ca">Cairo</MenuItem>
              <MenuItem value="BS">Beni-Sweif</MenuItem>
            </TextField>
          </Box>
          <Box
            sx={{
              width: {
                lg: "120px",
                sm: "50px",
              },
            }}
          >
            {/* <Typography variant="body1" gutterBottom>
              Date
            </Typography> */}
            <TextField
              size="small"
              label="Date"
              select
              fullWidth
              variant="standard"
            >
              <MenuItem value="june">June</MenuItem>
              <MenuItem value="july">July</MenuItem>
              <MenuItem value="aug">August</MenuItem>
            </TextField>
          </Box>
          <Box
            sx={{
              width: {
                lg: "120px",
                sm: "50px",
              },
            }}
          >
            {/* <Typography variant="body1" gutterBottom>
              Time
            </Typography> */}
            <TextField
              size="small"
              label="Time"
              select
              fullWidth
              variant="standard"
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </TextField>
          </Box>
        </Stack>
      </FormControl>
    </form>
  );
}

export default Location;
