import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 500,
    margin: "0px auto",
  };

  const captionStyle = { marginBottom: 35 };
  const fieldStyle = { marginBottom: 10, marginTop: 10 };
  const btnStyle = { marginBottom: 10, marginTop: 10 };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Enter your name");
    } else if (email === "") {
    } else if (password === "") {
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
      localStorage.setItem("number", number);
    }
  };
  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2>Sign Up</h2>
            <Typography varient="caption" style={captionStyle}>
              Please Fill This Form To Create An Account
            </Typography>
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
              label="E-Mail"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              name={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" fullWidth>
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  defaultChecked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  defaultChecked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Phone Number"
              placeholder="Enter Phone Number"
              type="password"
              value={number}
              name={number}
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />

            <TextField
              label="Password"
              placeholder="Enter Your PassWord"
              type="password"
              value={password}
              name={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />

            <Typography>
              Already Have An Account ?
              <NavLink to="/userlogin">Sign In </NavLink>
            </Typography>

            <Button
              type="submit"
              onClick={HandleSubmit}
              color="primary"
              variant="contained"
              style={btnStyle}
              fullWidth
            >
              SIGN UP
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUp;
