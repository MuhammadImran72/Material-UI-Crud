import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const LoginOuterBox = {
    margin: "0 auto",
    padding: "20px 20px",
  };

  const paperStyle = {
    padding: 20,

    margin: "0px auto",
  };
  const fieldStyle = { marginBottom: 20 };
  const btnStyle = { marginBottom: 10, marginTop: 10 };

  const [name, setName] = useState("");
  const [password, passwordupdate] = useState("");
  const naviagte = useNavigate();

  const ProcedLogin = (e) => {
    e.preventDefault();
    if (validation()) {
      fetch("http://localhost:3002/users" + name)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.success("Login Successfully");
            naviagte("/alluser");
          } else {
            if (resp.password === password) {
              toast.success("Login Successfully");
              naviagte("/alluser");
            } else {
              toast.error("Please Enter Correct Password For Login ");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Falied Due To :" + err.message);
        });
    }
  };

  const validation = () => {
    let result = true;
    if (name === "" || name === null) {
      result = false;
      toast.warning("Please Enter User Name");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter User Password");
    }
    return result;
  };

  return (
    <Grid container spacing={2}>
      <ToastContainer></ToastContainer>
      <Grid item xs={4} style={LoginOuterBox}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2> LogIn</h2>
          </Grid>
          <form>
            <TextField
              label="Name"
              placeholder="Enter Your  Name"
              type="Text"
              value={name}
              name={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />
            <TextField
              label="Password "
              placeholder="Enter Your PassWord"
              type="password"
              name={password}
              value={password}
              onChange={(e) => passwordupdate(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={ProcedLogin}
              fullWidth
              style={btnStyle}
            >
              LogIn
            </Button>

            <Typography>
              Do You Have Account ?
              <Link href="#">
                <NavLink to="/userregister"> Sign Up </NavLink>
              </Link>
            </Typography>
          </form>
        </Paper>{" "}
      </Grid>
    </Grid>
  );
};

export default Login;
