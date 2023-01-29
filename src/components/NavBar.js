import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const spaceLeft = {
    padding: 20,
    color: "#fff",
    textDecoration: "none",
    fontSize: 25,
    fontWeight: 500,
  };
  const MenuRang = {
    backgroundColor: "#bd2c0b",
  };
  const chngePostn = {};
  return (
    <AppBar position="static" style={MenuRang}>
      <Toolbar>
        <Link to="/" style={spaceLeft}>
          Reprivata
        </Link>
        <Link to="/adduser" style={spaceLeft}>
          Add User
        </Link>
        <Link to="/alluser" style={spaceLeft}>
          ALL User
        </Link>
        <Link to="/login" style={spaceLeft}>
          Login
        </Link>

        <Stack direction="row" spacing={2} style={chngePostn}>
          <Button color="inherit"> Logout </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
