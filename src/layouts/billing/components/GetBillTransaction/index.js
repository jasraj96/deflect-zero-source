import { useState } from "react";
import { getBillsTransaction } from "services/billing.services";
import { Grid, TextField, FormControl, Typography, Paper } from "@mui/material"
import { Button, Dialog, DialogTitle, Table, TableContainer, TableCell, DialogContent, TableHead, TableRow, TableBody, DialogActions } from '@mui/material';

function GetBillTransaction() {
  const [billId, setBillId] = useState("");
  const [bill, setBill] = useState([]);
  const [open, setOpen] = useState(false);

  const handleBillIdChange = (e) => {
    setBillId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBillsTransaction(billId).then((data) => {
      setBill(data);
      console.log(bill);
      setOpen(true);
    });
  };

  console.log(bill);
  const handleClose = () => {
    setOpen(false);
  };

  const {
    billId: bill1,
    billerId: biller,
    totalAmount,
    serviceName,
    serviceType: serviceTypee,
    transactionId,
    paymentStatus,
    billerAccountNumber,
  } = bill;

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}> */}
        <Typography variant="h4" gutterBottom>
          GET BILL DETAILS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                onChange={handleBillIdChange}
                type="text"
                label="Bill Id"
                variant="outlined"
                value={billId}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          sx={{
            maxWidth: "27%",
            marginTop: "2rem",
          }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
        {/* </Paper> */}
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Bill Details</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Bill ID</TableCell>
                  <TableCell>Biller ID</TableCell>
                  <TableCell> Total Amount</TableCell>

                  <TableCell>Service Name</TableCell>
                  <TableCell>Service Type</TableCell>
                  <TableCell>Transaction Id</TableCell>
                  <TableCell>Biller Account Number</TableCell>
                  <TableCell>Payment Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{bill1}</TableCell>
                  <TableCell>{biller}</TableCell>
                  <TableCell>{totalAmount}</TableCell>

                  <TableCell>{serviceName}</TableCell>
                  <TableCell>{serviceTypee}</TableCell>
                  <TableCell>{transactionId}</TableCell>
                  <TableCell>{billerAccountNumber}</TableCell>

                  <TableCell>{paymentStatus}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default GetBillTransaction;
