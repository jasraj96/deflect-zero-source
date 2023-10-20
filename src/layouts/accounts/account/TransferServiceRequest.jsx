import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from './Card';
import { transferServiceRequest } from '../service/Api';

function TransferServiceRequest() {
  

    const[transferDetails,setTransferDetails] = useState({
        amount : 0,
        receiverAccountNumber: "",
        senderAccountNumber:"",
        transferId:"",
    })

    const[transferData,setTransferData] = useState({
      amount :"0",
      
    })

    const handleChange = (e) => {
        setTransferDetails((prevState) =>{
          return {...prevState,[e.target.name] : e.target.name==="amount" ? parseFloat( e.target.value) : e.target.value};
         })
      };

    // const transferServiceRequest= async () => {
    //     try {
    //       const response = await fetch(
    //         `http://172.16.4.98:8080/account/get-transaction`,
    //         {method:"POST",
    //         headers: {
    //             "Content-Type":"application/JSON"
    //         },

    //         body:JSON.stringify(transferDetails)
    //     }

    //       );
    
    //       await response.json().then(data =>{
    //         setTransferData(data)
    //       })
         
    
    
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
console.log(transferDetails)

  return (
    <div style={{ borderRadius:"30px", backgroundColor:"white",height:"200px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
  <h2 style={{ textAlign:"center",msrginBottom:"10px"}}>Enter Details</h2>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={16} justifyContent={"center"} >
        <Grid item xs={6}>
        <TextField fullWidth id="outlined-basic"  label="amount" name='amount' variant="outlined" value={transferDetails.amount} onChange={handleChange}/>
        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth id="outlined-basic" label="receiver account" name='receiverAccountNumber' variant="outlined" value={transferDetails.receiverAccountNumber} onChange={handleChange}/>
        </Grid>
        <Grid item xs={6}>
        <TextField  fullWidth id="outlined-basic" label="sender account" name='senderAccountNumber' variant="outlined" value={transferDetails.senderAccountNumber} onChange={handleChange}/>
        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth id="outlined-basic" label="transferId" name='transferId' variant="outlined" value={transferDetails.transferId} onChange={handleChange}/>
        </Grid>
        <Grid item xs={6}>
        <Button style={{color:"white"}} fullWidth variant="contained" onClick={() =>{transferServiceRequest(setTransferData,transferDetails)}}>SUBMIT</Button>
        </Grid>
      </Grid>
    </Box>
     {transferData.beneficiaryAccountNumber && <Card transferData={transferData}/>}
    </div>
  )
}

export default TransferServiceRequest