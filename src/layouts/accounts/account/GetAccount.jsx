import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DisplayDetails from "./DisplayDetails";

function GetAccount() {
    const [accountNumber, setAccountNumber] = useState(0);
    const[handleclick,setHandleClick] = useState(false);

   const handleClick=()=>{
    setHandleClick(true);
   }


    return (
        <>
            <Grid container spacing={2} display={"flex"} flexDirection={"column"} margin={"auto"} maxWidth={"400px"} >
                <div
                    style={{
                        borderRadius: "30px",
                        backgroundColor: "white",
                        height: "160px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <h2 style={{ textAlign: "center" }}>Enter Account Number</h2>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={8} columns={16} justifyContent={"center"}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="account number"
                                    name="customerId"
                                    variant="outlined"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid  mt={0.1}container spacing={2} columns={16} justifyContent={"center"}>
                            <Grid item xs={12}>
                                <Button
                                    style={{ color: "white" }}
                                    fullWidth
                                    variant="contained"
                                    onClick={handleClick}
                                >
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Grid>
            {handleclick && <DisplayDetails accountNo={accountNumber}/>}
        </>
    );
}

export default GetAccount;
