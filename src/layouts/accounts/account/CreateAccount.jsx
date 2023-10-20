import React, {  useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';



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
        <div style={{ borderRadius:"30px", backgroundColor:"white",height:"200px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <h2 style={{textAlign:"center"}}>Enter Customer ID</h2>
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={1} columns={16} justifyContent={"center"} >
        <Grid item xs={12}>
        <TextField fullWidth id="outlined-required"  label="customerID" name='customerId' variant="outlined" value={customerId} onChange={(e) =>setCustomerId(e.target.value)}/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} justifyContent={"center"}>
        
        <Grid item xs={12}>
        <Button style={{color:"white"}} fullWidth variant="contained" onClick={createTheAccount}>SUBMIT</Button>
        </Grid>
      </Grid>
    </Box>
        </div>
      </Grid>
      <Grid 
       container
       spacing={2}
       display={"flex"}
       flexDirection={"column"}
       margin={"auto"}
       maxWidth={"400px"}>
       <div style={{paddingTop:"30px"}}>
        {accountNo && <h3 style={{textAlign:"center"}}>Your Account Number is :{accountNo}</h3>}
       </div>
      </Grid>
    </div>
  );
}
export default CreateAccount;
