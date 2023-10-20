import React, { useEffect, useState } from "react";
import { getCustomerByID } from "services/customer.service";
import { Typography, Paper, List, ListItem, TextField, Button, Grid } from "@mui/material";
import MDButton from "components/MDButton";

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
                    gap: "1em",
                }}
            >
                <Grid>
                    <TextField
                        id="outlined-basic"
                        label="ID"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                            SetId(e.target.value);
                        }}
                    />
                </Grid>
                <Grid>
                    <MDButton variant="contained" color="secondary" onClick={handleSearch}>
                        Search
                    </MDButton>
                </Grid>
            </Grid>
            <Grid
                container
                style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {search && (
                    <Paper square={false} style={{ padding: "10vh" }} elevation={24}>
                        <Typography variant="body1" justifyContent="center" gutterBottom>
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
                                    Customer ID :
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
