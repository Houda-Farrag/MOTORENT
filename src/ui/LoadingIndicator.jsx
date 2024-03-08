import { Box, CircularProgress } from "@mui/material";

function LoadingIndicator() {
  return (
    <Box 
      position="absolute"
      top="50%"
      left="48.5%"
      transform="translate(-50%, -50%)"
      zIndex={5}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default LoadingIndicator;
