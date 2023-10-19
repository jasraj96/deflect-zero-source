import React, { useEffect, useState } from "react";
import { getCustomerByID } from "../../data/customerFetchApi";
import { Typography, Paper, List, ListItem, TextField, Button, Grid } from "@mui/material";

export default function Customer() {
  const [dataByID, setDataByID] = useState([]);

  const [search, SetSearch] = useState("");
  const [id, SetId] = useState(null);

  useEffect(() => {
    async function fetchDataByID() {
      try {
        const result = await getCustomerByID(search);
        setDataByID(result);
        console.log(dataByID);
      } catch (e) {
        console.log(e);
      }
    }
    fetchDataByID();
  }, [search]);

  function handleSearch() {
    SetSearch(id);
  }

  return (
    <>
      <Grid
        container
        style={{
          padding: "10px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Id"
          variant="outlined"
          size="small"
          onChange={(e) => {
            SetId(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      <Grid
        container
        style={{
          padding: "10px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {id && (
          <Paper square={false} style={{ width: "70vh", padding: "5%" }} elevation={24}>
            <Typography variant="body1" gutterBottom>
              {dataByID.customerId} : {dataByID.name}
            </Typography>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Account Status :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>{dataByID.accountStatus} </b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Address:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.address}</b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  customerId :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.customerId}</b>
                </Typography>
              </ListItem>
            </List>
            {/* <List>
            <ListItem>
              Customer Address List: {dataByID.customerAddressList}
            </ListItem>
          </List> */}
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Date Of Birth :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.dateOfBirth}</b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Email :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.email}</b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Gender :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.gender}</b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Mobile Number :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.mobileNo}</b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  Occupation :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.occupation}</b>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="subtitle1" gutterBottom>
                  {" "}
                  Nominee :
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <b>{dataByID.nominee}</b>
                </Typography>
              </ListItem>
            </List>
          </Paper>
        )}
      </Grid>
    </>
  );
}
