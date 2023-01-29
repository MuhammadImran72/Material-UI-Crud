import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 500,
    margin: "0px auto",
  };

  const fieldStyle = { marginBottom: 20 };
  const btnStyle = { marginBottom: 10, marginTop: 10 };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const userEmail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@gmail.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "12345";

  const HandleSubmit = (e) => {
    e.preventDeafult();
    if (email === userEmail && password === userPassword) {
      alert("Login Sucessfully ");
      naviagte("/adduser");
    } else {
      alert("Invlaid Email Or Password");
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2> LogIn</h2>
        </Grid>
        <form>
          <TextField
            label="E-Mail Address"
            placeholder="Enter Your E-Mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            label="Password "
            placeholder="Enter Your PassWord"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="standard"
            style={fieldStyle}
          />
          <FormControlLabel
            control={<Checkbox name="checkeddB" color="primary" />}
            label="Remember Me"
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={HandleSubmit}
            fullWidth
            style={btnStyle}
          >
            SIGN IN
          </Button>

          <Typography>
            Do You Have Account ?
            <Link href="#">
              <NavLink to="/userregister"> Sign Up </NavLink>
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
