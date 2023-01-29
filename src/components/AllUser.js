import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  <Typography>hello</Typography>;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>E-Mail</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell>Password</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.number}</TableCell>
            <TableCell>{user.password}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUser;
