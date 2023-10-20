
import { useState } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import { postBill } from 'services/PostBills';
const BillForm = () => {
  const [billDueDate, setBillDueDate] = useState('');
  const [billId, setBillId] = useState('');
  const [billIssueDate, setBillIssueDate] = useState('');
  const [billTotalAmount, setBillTotalAmount] = useState('');
  const [billerId, setBillerId] = useState('');
  const [commissionAmount, setCommissionAmount] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceType, setServiceType] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('Bill Due Date:', billDueDate);
    console.log('Bill ID:', billId);
    console.log('Bill Issue Date:', billIssueDate);
    console.log('Bill Total Amount:', billTotalAmount);
    console.log('Biller ID:', billerId);
    console.log('Commission Amount:', commissionAmount);
    console.log('Service Name:', serviceName);
    console.log('Service Type:', serviceType);

    const billData = {
      billDueDate,
      billId,
      billIssueDate,
      billTotalAmount,
      billerId,
      commissionAmount,
      serviceName,
      serviceType
    };

    try {
      const response = await postBill(billData);
      console.log(response);

    } catch (error) {
      console.error(error);

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <Paper elevation={3} sx={{ padding: '4rem', maxWidth: '60vw', margin: '0 auto', textAlign: 'center' }}> */}
        <Typography variant="h4" gutterBottom>CREATE BILL</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="billDueDate"
              label="Bill Due Date"
              variant="outlined"
              value={billDueDate}
              onChange={(event) => setBillDueDate(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="billId"
              label="Bill ID"
              variant="outlined"
              value={billId}
              onChange={(event) => setBillId(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="billIssueDate"
              label="Bill Issue Date"
              variant="outlined"
              value={billIssueDate}
              onChange={(event) => setBillIssueDate(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              id="billTotalAmount"
              label="Bill Total Amount"
              variant="outlined"
              value={billTotalAmount}
              onChange={(event) => setBillTotalAmount(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="billerId"
              label="Biller ID"
              variant="outlined"
              value={billerId}
              onChange={(event) => setBillerId(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              id="commissionAmount"
              label="Commission Amount"
              variant="outlined"
              value={commissionAmount}
              onChange={(event) => setCommissionAmount(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="serviceName"
              label="Service Name"
              variant="outlined"
              value={serviceName}
              onChange={(event) => setServiceName(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="serviceType"
              label="Service Type"
              variant="outlined"
              value={serviceType}
              onChange={(event) => setServiceType(event.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button sx={{
          color: "white",
          maxWidth: '27%',
          marginTop: '2rem'
        }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth>
          Submit
        </Button>
        {/* </Paper> */}
      </form>
    </div>
  );
}

export default BillForm;


