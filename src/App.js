import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import Login from "./components/Login";

import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar></NavBar> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/alluser" element={<AllUser />} />
            <Route path="/userregister" element={<SignUp />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
