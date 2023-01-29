import { Typography } from "@mui/material";
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

  const MoveLeftt = {
    padding: "20px 20px",
  };

  return (
    <AppBar position="static" style={MenuRang}>
      <Toolbar>
        <Link to="/" style={spaceLeft}>
          Reprivata
        </Link>

        <Typography style={MoveLeftt}>Welcome , John Doe</Typography>
        <Typography style={MoveLeftt}>
          {" "}
          Fox Ellis Sports and Enterainment Holding company LLC
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
