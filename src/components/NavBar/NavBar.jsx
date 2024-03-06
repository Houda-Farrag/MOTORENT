import { Box } from "@mui/material";

function NavBar({ data }) {
  const { firstName, email, phone } = data.data;
  return (
    <Box>
      Hello <strong>{firstName}</strong> your emal address is{" "}
      <strong>{email}</strong> and mobile number is <strong>{phone}</strong>
    </Box>
  );
}

export default NavBar;
