import React, { useState } from "react";
import { patchEmail } from "../../data/customerFetchApi";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
export default function Patch() {
  const [data, setData] = useState({
    customerId: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const [response, SetResponse] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleValues = async (e) => {
    setData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
    console.log(data);
  };

  async function patchData() {
    const response = await patchEmail(data);
    console.log(response);
    SetResponse(response);
    setOpen(true);
  }

  return (
    <div>
      <Typography variant="h4">Change Email ID</Typography>
      <Grid
        container
        style={{
          padding: "10px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          xs={12}
          style={{
            padding: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            size="small"
            onChange={handleValues}
            name="customerId"
          />
        </Grid>
        <Grid
          xs={12}
          style={{
            padding: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email-ID"
            variant="outlined"
            size="small"
            name="email"
            onChange={handleValues}
          />
        </Grid>
        <Grid
          xs={12}
          style={{
            padding: "10px",
          }}
        >
          <Button variant="contained" onClick={patchData}>
            Change
          </Button>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{response}</DialogTitle>
        {response === "successfully changed" && (
          <DialogContent>
            <DialogContentText>Email has been changed to {data.email}</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
