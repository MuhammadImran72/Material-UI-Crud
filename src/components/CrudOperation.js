import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CrudOperation = () => {
  const ParallelBox = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
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

  return (
    <div>
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
                <InputLabel id="demo-simple-select-label">All</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={ParallelBox}>
              <div>Category </div>
              <FormControl style={MinLength}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
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
                <TableCell style={BoxStyle}>1/14/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>0/1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={BoxStyle}></TableCell>
                <TableCell style={BoxStyle}>1207</TableCell>
                <TableCell style={BoxStyle}>1/14/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>5/12/2023</TableCell>
                <TableCell style={BoxStyle}>0/1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};
export default CrudOperation;
