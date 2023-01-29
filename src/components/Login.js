// import React, { useState } from "react";
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
// import { NavLink } from "react-router-dom";
const paperStyle = {
  padding: 20,
  height: "80vh",
  width: 500,
  margin: "0px auto",
};
const Login = () => {
  const fieldStyle = { marginBottom: 20 };
  const btnStyle = { marginBottom: 10, marginTop: 10 };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2> Login In</h2>
        </Grid>
        <form>
          <TextField
            label="E-Mail Address"
            placeholder="Enter Your E-Mail"
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="standard"
            style={fieldStyle}
          />
          <TextField
            label="Password "
            placeholder="Enter Your PassWord"
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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
            fullWidth
            style={btnStyle}
          >
            SIGN IN
          </Button>

          <Typography>
            Do You Have Account ?
            <Link href="#">
              {/* <NavLink to="/profile"> Sign Up </NavLink> */}
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login();
