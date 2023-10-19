import React, {  useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DisplayDetails from "./DisplayDetails";


function CreateAccount() {

  const [customerId, setCustomerId] = useState("");
  const [accountNo, setAccountNo] = useState("");
  

  const createTheAccount = async () => {
    try {
      const response = await fetch(
        `http://172.16.4.98:8080/account/account-number?customerId=${customerId}`,
        { method: "POST" }
      );

      const data = await response.json();
      setAccountNo(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 console.log(customerId)
  return (
    <div>
      <Grid
        container
        spacing={2}
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
        maxWidth={"400px"}
      >
        <Grid item xs={12}>
          <h2>Enter Customer ID</h2>
          <TextField
            required
            id="outlined-required"
            label="Required"
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={createTheAccount}>
            View Account Details
          </Button>
          {accountNo && <DisplayDetails accountNo={accountNo} />}
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateAccount;
