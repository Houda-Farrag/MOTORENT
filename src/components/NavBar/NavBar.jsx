import { Box, Button } from "@mui/material";
import { logout } from "../../service/userApi";

function NavBar({ data }) {
  const { firstName, email, phone } = data.data;
  const token = localStorage.getItem("token");

  async function handleLogout(token) {
    try {
      console.log("/////////", token);
      const response = await logout(token);
      localStorage.removeItem("token");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      Hello <strong>{firstName}</strong> your emal address is{" "}
      <strong>{email}</strong> and mobile number is <strong>{phone}</strong>
      <Button onClick={() => handleLogout(token)}>Logout</Button>
    </Box>
  );
}

export default NavBar;
