import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

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
  const [dueby, setDueDates] = useState("");
  const [pickdate, setDates] = useState(null);
  const [tasks, setTasks] = useState("");

  const navigate = useNavigate();

  // function DatePick() {
  //   return pickdate;
  // }

  // console.log(pickdate);

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please Enter Your Values";

    if (name === null || name === "") {
      isproceed = false;
      errormessage += "usernamessssSSSS";
    }

    if (email === null || email === "") {
      isproceed = false;
      errormessage += "E-Mail";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    }
    return isproceed;
  };
  const HandleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    let users = { name, email, password, dueby, pickdate, tasks };
    if (IsValidate()) {
      // console.log(users);
      fetch("http://localhost:3002/users", {
        method: "POST",

        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(users),
      })
        .then((res) => {
          toast.success("Register Sucessfully");

          navigate("/");
        })
        .catch((err) => {
          toast.error("Failed : " + err.message);
        });
    }
  };
  return (
    <div>
      <Grid container spacing={2}>
        <ToastContainer></ToastContainer>
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

            <TextField
              type="date"
              value={dueby}
              name={dueby}
              onChange={(e) => setDueDates(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />
            <Typography>Start Date</Typography>
            <TextField
              type="date"
              value={pickdate}
              name={pickdate}
              onChange={(e) => setDates(e.target.value)}
              fullWidth
              variant="standard"
              style={fieldStyle}
            />

            <TextField
              label="Task"
              placeholder="Enter Your Tasks"
              type="number"
              value={tasks}
              name={tasks}
              onChange={(e) => setTasks(e.target.value)}
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
