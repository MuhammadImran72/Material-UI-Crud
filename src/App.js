import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import CrudOperation from "./components/CrudOperation";
import Login from "./components/Login";

import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<CrudOperation />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/userregister" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
