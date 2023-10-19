import { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, FormControl } from '@mui/material';
import { postBillTransaction } from 'services/PostBillTransaction';
function BillTransactionDetails() {

  const [billId, setBillId] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [billerId, setBillerId] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [customerAccountNumber, setCustomerAccountNumber] = useState('')
  async function handleSubmit(event) {
    event.preventDefault();

    console.log('Bill ID:', billId);
    console.log('Biller ID:', billerId);
    console.log('Service Name:', serviceName);
    console.log('Service Type:', serviceType);
    console.log("totalAmount", totalAmount)
    console.log('customeraccountnumber', customerAccountNumber)

    const billTransactionData = {
      billId,
      billerId,
      customerAccountNumber,
      serviceName,
      serviceType,
      totalAmount,
    };

    try {
      const response = await postBillTransaction(billTransactionData);
      console.log(response);

    } catch (error) {
      console.log(error);

    }
  }
  return (<div>
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          TRANSACTION DETAILS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="billId"
                label="Bill ID"
                variant="outlined"
                value={billId}
                onChange={(event) => setBillId(event.target.value)}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                type="number"
                id="billTotalAmount"
                label="Bill Total Amount"
                variant="outlined"
                value={totalAmount}
                onChange={(event) => setTotalAmount(event.target.value)}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="billerId"
                label="Biller ID"
                variant="outlined"
                value={billerId}
                onChange={(event) => setBillerId(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="serviceName"
                label="Service Name"
                variant="outlined"
                value={serviceName}
                onChange={(event) => setServiceName(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="serviceType"
                label="Service Type"
                variant="outlined"
                value={serviceType}
                onChange={(event) => setServiceType(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="customerAccountNumber"
                label="Customer Account Number"
                variant="outlined"
                value={customerAccountNumber}
                onChange={(event) => setCustomerAccountNumber(event.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid>
          <Button sx={{
            maxWidth: '27%',
            marginTop: '2rem'
          }}
            type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>

      </Paper>
    </form>
  </div>
  );
}

export default BillTransactionDetails;
