import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import { AddUsers } from "../service/api";

const MainOuter = {
  width: "50%",
  margin: "5% auto",
};
const SpaceInputs = {
  marginTop: 10,
  marginBottom: 10,
};

const intialValues = {
  name: "",
  startdate: "",
  number: "",
  password: "",
};

const AddUser = () => {
  const [users, setUser] = useState(intialValues);

  const onChangingValues = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const addUserDetails = async () => {
    await AddUsers(users);
  };

  return (
    <FormGroup style={MainOuter}>
      <FormControl style={SpaceInputs}>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={(e) => onChangingValues(e)} />
      </FormControl>

      <FormControl style={SpaceInputs}>
        <InputLabel>Start-Date</InputLabel>
        <Input name="email" onChange={(e) => onChangingValues(e)} />
      </FormControl>

      <FormControl style={SpaceInputs}>
        <InputLabel>Phone Number</InputLabel>
        <Input name="number" onChange={(e) => onChangingValues(e)} />
      </FormControl>

      <FormControl style={SpaceInputs}>
        <InputLabel>Password</InputLabel>
        <Input name="password" onChange={(e) => onChangingValues(e)} />
      </FormControl>
      <FormControl style={SpaceInputs}>
        <Button onClick={() => addUserDetails()} variant="contained">
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddUser;
