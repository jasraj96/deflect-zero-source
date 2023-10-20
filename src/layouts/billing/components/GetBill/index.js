import { getBills } from "services/getBills";
import { useState } from "react";
import { Button, Typography, Paper, Dialog, DialogTitle, Table, TableContainer, TableCell, DialogContent, TableHead, TableRow, TableBody, DialogActions } from '@mui/material';
import Grid from "@mui/system/Unstable_Grid/Grid";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
function GetBill() {


  const [billId, setBillId] = useState('')
  const [billerId, setBillerId] = useState('')
  const [bill, setBill] = useState([])
  const [open, setOpen] = useState(false)


  const handleBillIdChange = (e) => {
    setBillId(e.target.value)
  }
  const handleBillerIdChange = (e) => {
    setBillerId(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getBills(billerId, billId).then((data) => {

      setBill(data)

    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const { billId: bill1, billerId: biller, billTotalAmount, serviceName, serviceType, billDueDate, billIssueDate } = bill

  console.log(bill)
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}> */}
        <Typography variant="h4" gutterBottom>GET BILL</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="billerId"
                label="Biller ID"
                variant="outlined"
                value={billerId}
                onChange={handleBillerIdChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="billId"
                label="Bill ID"
                variant="outlined"
                value={billId}
                onChange={handleBillIdChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button sx={{
          maxWidth: '27%',
          marginTop: '2rem',
          color: 'white'
        }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth>
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
                  <TableCell>Bill Total Amount</TableCell>
                  <TableCell>Service Name</TableCell>
                  <TableCell>Service Type</TableCell>
                  <TableCell> Bill Due Date</TableCell>
                  <TableCell> Bill Issue Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{bill1}</TableCell>
                  <TableCell>{biller}</TableCell>
                  <TableCell>{billTotalAmount}</TableCell>
                  <TableCell>{serviceName}</TableCell>
                  <TableCell>{serviceType}</TableCell>
                  <TableCell>{billDueDate}</TableCell>
                  <TableCell>{billIssueDate}</TableCell>
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

export default GetBill;
