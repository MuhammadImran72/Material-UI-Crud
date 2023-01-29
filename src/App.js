import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import CrudOperation from "./components/CrudOperation";

import NavBar from "./components/NavBar";
import Signin from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<CrudOperation />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
