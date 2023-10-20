import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DisplayDetails from "./DisplayDetails";

function GetAccount() {
    const [accountNumber, setAccountNumber] = useState(0);
    const [handleclick, setHandleClick] = useState(false);

    const handleClick = () => {
        setHandleClick(true);
    }


    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Enter Account Number</h2>
            <Box sx={{ flexGrow: 1 }}>
                <TextField
                    fullWidth
                    id="outlined-required"
                    label="account number"
                    name="customerId"
                    variant="outlined"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleClick}
                >
                    SUBMIT
                </Button>
                {handleclick && <DisplayDetails accountNo={accountNumber} />}
            </Box>
        </div>
    );
}

export default GetAccount;
