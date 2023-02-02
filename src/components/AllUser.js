import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const spaceLeft = {
  padding: 20,
  color: "#fff",
  textDecoration: "none",
  fontSize: 25,
  fontWeight: 500,
};
const MenuRang = {
  backgroundColor: "#bd2c0b",
};

const MoveLeftt = {
  padding: "20px 20px",
};

const BlackBg = {
  backgroundColor: "#000",
  width: "90%",
  margin: "30px auto 10px auto",
  padding: "10px 10px",
  color: "#fff",
  fontWeight: 700,
};

const GrayBg = {
  backgroundColor: "#f7f7f7",
  width: "90%",
  padding: "10px 10px",
  margin: "10px auto 30px auto",
};

const RedBg = {
  backgroundColor: "#bd2c0b",
  width: "90%",
  padding: "10px 10px",
  margin: "10px auto",
  color: "#fff",
  fontWeight: 700,
};

const TwoBxes = {
  display: "flex",
  backgroundColor: "#f7f7f7",
  width: "90%",
  padding: "10px 10px",
  margin: "10px auto 30px auto",
};
const ParallelBox = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const MinLength = {
  width: "50%",
};
const TablesBox = {
  width: "90%",
  padding: "10px 10px",
  margin: "30px auto 10px auto",
};

const BoxStyle = {
  border: "1px solid #000",
};
const BGBlack = {
  border: "1px solid #000",
  backgroundColor: "#ccc",
};
const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState();
  const [category, setCategory] = useState();

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
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static" style={MenuRang}>
            <Toolbar>
              <Link to="/" style={spaceLeft}>
                Reprivata
              </Link>

              <Typography style={MoveLeftt}>user.name</Typography>
              <Typography style={MoveLeftt}>
                {" "}
                Fox Ellis Sports and Enterainment Holding company LLC
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={11} style={BlackBg}>
          <Typography variant="h4">Notifications</Typography>
        </Grid>
        <Grid item xs={11} style={GrayBg}>
          <Typography variant="h5"> Welcome ! </Typography>
          <Typography> Welcome ! </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={11} style={RedBg}>
          <Typography variant="h4"> Review </Typography>
        </Grid>
        <Grid item xs={11} style={TwoBxes}>
          <Grid item xs={6}>
            <div style={ParallelBox}>
              <div>Status </div>
              <FormControl style={MinLength}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => {
                    const selectStatus = e.target.value;
                    setStatus(selectStatus);
                  }}
                >
                  <MenuItem value={"on"}>ON</MenuItem>
                  <MenuItem value={"off"}>OFF</MenuItem>
                </Select>
              </FormControl>
              {status}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={ParallelBox}>
              <div>Category </div>
              <FormControl style={MinLength}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value={10}>Front End</MenuItem>
                  <MenuItem value={20}>Back End</MenuItem>
                  <MenuItem value={30}>.NET</MenuItem>
                </Select>
              </FormControl>
              {category}
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={11} style={TablesBox}>
          <Table style={BoxStyle}>
            <TableHead style={BGBlack}>
              <TableRow>
                <TableCell style={BoxStyle}>Status</TableCell>
                <TableCell style={BoxStyle}>id</TableCell>
                <TableCell style={BoxStyle}>Name</TableCell>
                <TableCell style={BoxStyle}>Due By</TableCell>
                <TableCell style={BoxStyle}>Start Date</TableCell>
                <TableCell style={BoxStyle}>Completion Date</TableCell>
                <TableCell style={BoxStyle}>Tasks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={BoxStyle}></TableCell>
                <TableCell style={BoxStyle}>1207</TableCell>
                <TableCell style={BoxStyle}>
                  Decleration Certification
                </TableCell>
                <TableCell style={BoxStyle}>1/14/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>0/1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={BoxStyle}></TableCell>
                <TableCell style={BoxStyle}>1207</TableCell>
                <TableCell style={BoxStyle}>
                  Decleration Certification
                </TableCell>
                <TableCell style={BoxStyle}>1/14/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>0/1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={11} style={TablesBox}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>E-Mail</TableCell>
                <TableCell>Due By</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Completion Date</TableCell>
                <TableCell>Tasks</TableCell>

                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.dueby}</TableCell>
                  <TableCell>{user.pickdate}</TableCell>
                  <TableCell>{user.pickdate}</TableCell>
                  <TableCell>{user.tasks}</TableCell>
                  <TableCell>{user.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllUser;
