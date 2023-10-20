import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeTransfer } from 'layouts/transfer/services/makeTransfer';

function TransferCard(props) {
  const { accountDetails, user, setTransferresponse, setActiveStep, setAccountnumber, accountNumber, setTrigger, trigger } = props
  const [transfer, setTransfer] = useState({
    amount: 0,
    beneficiaryAccountNumber: "",
    comments: "",
    currency: "CHF",
    paymentMethod: "IMPS",
    senderAccountNumber: "1234232632"
  })

  const handleChange = (e) => {
    setTransfer((prevState) => {
      return { ...prevState, [e.target.name]: e.target.name === "amount" ? parseFloat(e.target.value) : e.target.value }
    })
  }

  useEffect(() => {
    setTransfer((prevState) => {
      return { ...prevState, senderAccountNumber: accountNumber }
    })
  }, [trigger])


  return (
    <Grid
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "start",
        padding: "20px",
        borderRadius: "13px",
        height: "max-content",
        backgroundColor: 'white',
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h5>Enter Transaction Details</h5>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <TextField
          onChange={(e) => { setAccountnumber(e.target.value) }}
          value={accountNumber} name='accountnumber'
          fullWidth id="outlined-basic"
          label="Sender Bank account number"
          variant="outlined" />
        <Button
          onClick={() => { setTriger((prevState) => !prevState) }}
          fullWidth
          variant="contained" >
          SUBMIT
        </Button>
        <h6 style={{
          fontSize: "15px"
        }}>Transfer from</h6>
        <div style={{
          background: "#e6e4e1",
          borderRadius: "5px",
          padding: "8px",
          fontSize: "13px"
        }}>
          <span>{accountDetails?.accountNumber} - {user.name}</span>
        </div>
        <div style={{
          background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
          borderRadius: "5px",
          padding: "8px"
        }}>
          <span style={{
            color: "white",
            fontSize: "13px"
          }}>Total available amount is ${accountDetails?.balance}</span>
        </div>
      </div>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <h6 style={{
          fontSize: "15px"
        }}>Transfer to</h6>

        <FormControl onChange={handleChange}>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            style={{ fontSize: "13px" }}>Payment Method</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              name='paymentMethod'
              value="IMPS"
              control={<Radio />} label="IMPS" />
            <FormControlLabel
              name='paymentMethod'
              value="NTFS"
              control={<Radio />}
              label="NTFS" />

          </RadioGroup>
        </FormControl>
        <TextField
          onChange={handleChange}
          name="beneficiaryAccountNumber"
          value={transfer?.beneficiaryAccountNumber}
          fullWidth
          id="outlined-basic"
          label="Bank account number"
          variant="outlined" />
      </div>
      <FormControl
        fullWidth
        onChange={handleChange}>
        <InputLabel
          htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          name='amount'
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl>
      <TextField
        onChange={handleChange}
        name="comments"
        value={transfer.comments}
        fullWidth
        id="outlined-basic"
        label="Remarks(optional)"
        variant="outlined" />
      <Button
        onClick={() => { makeTransfer(transfer, setTransferresponse, setActiveStep) }}
        fullWidth variant="contained"
        endIcon={<ArrowForwardIcon />}>
        Transfer Amount
      </Button>
    </Grid >
  )
}

TransferCard.propTypes = {
  accountDetails: PropTypes.object,
  user: PropTypes.object,
  setTransferresponse: PropTypes.func,
  setActiveStep: PropTypes.func,
  setAccountnumber: PropTypes.func,
  accountNumber: PropTypes.number,
  setTrigger: PropTypes.func,
  trigger: PropTypes.bool
}

export default TransferCard