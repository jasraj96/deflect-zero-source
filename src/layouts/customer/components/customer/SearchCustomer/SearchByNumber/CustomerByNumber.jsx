import React, { useEffect, useState } from "react";
import { getCustomerByMobileNo } from "services/customer.service";
import { Typography, Paper, List, ListItem, TextField, Button, Grid } from "@mui/material";
import MDButton from "components/MDButton";
export default function CustomerByNumber() {
    const [dataByNumber, setDataByNumber] = useState([]);
    const [searchNumber, SetSearchNumber] = useState("");
    const [number, SetNumber] = useState(null);
    useEffect(() => {
        async function fetchDataByNumber() {
            try {
                const result = await getCustomerByMobileNo(searchNumber);

                setDataByNumber(result);
            } catch (e) {
                console.log(e);
            }
        }
        fetchDataByNumber();
    }, [searchNumber]);

    function handleNumberSearch() {
        SetSearchNumber(number);
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
                        label="Number"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                            SetNumber(e.target.value);
                        }}
                    />
                </Grid>
                <Grid>
                    <MDButton variant="contained" color="secondary" onClick={handleNumberSearch}>
                        Search
                    </MDButton>
                </Grid>
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
                {searchNumber && (
                    <Paper square={false} style={{ padding: "10vh" }} elevation={24}>
                        <Typography variant="body1" gutterBottom>
                            {dataByNumber.customerId} : {dataByNumber.name}
                        </Typography>
                        <List>
                            <ListItem>
                                Account Status : <b>{dataByNumber.accountStatus} </b>{" "}
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                Address: <b>{dataByNumber.address}</b>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                customerId : <b>{dataByNumber.customerId}</b>
                            </ListItem>
                        </List>
                        {/* <List>
            <ListItem>
              Customer Address List: {dataByID.customerAddressList}
            </ListItem>
          </List> */}
                        <List>
                            <ListItem>
                                Date Of Birth : <b>{dataByNumber.dateOfBirth}</b>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                Email : <b>{dataByNumber.email}</b>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                Gender : <b>{dataByNumber.gender}</b>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                Mobile Number : <b>{dataByNumber.mobileNo}</b>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                Occupation : <b>{dataByNumber.occupation}</b>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                Nominee : <b>{dataByNumber.nominee}</b>
                            </ListItem>
                        </List>
                    </Paper>
                )}
            </Grid>
        </>
    );
}
