import React, { useState } from "react";
import { patchNumber } from "../../data/customerFetchApi";
import { Button, Grid, TextField, Typography } from "@mui/material";
export default function PatchNumber() {
  const [data, setData] = useState({
    customerId: "",
    mobileNo: "",
  });

  const handleValues = async (e) => {
    setData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
    console.log(data);
  };

  async function patchData() {
    await patchNumber(data);
  }

  return (
    <div>
      <Typography variant="h4">Change Number</Typography>
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
            label="Mobile-Number"
            variant="outlined"
            size="small"
            name="mobileNo"
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
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
