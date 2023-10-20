import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import DisplayTransactionDetails from "./DisplayTransactionDetails";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { displayDetails } from "services/accounts.service";


function DisplayDetails({ accountNo }) {

  const [accountContent, setAccountContent] = useState({
    customerId: "",
    accountNumber: "",
    balance: 0,
    currency: "INR",
    transactionLimit: 50000,
  });



  // const displayDetails = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://1c89-103-141-55-30.ngrok-free.app/account/get-account?accountNumber=${accountNo}`
  //     );

  //     let data = await response.json();
  //     setAccountContent(data);

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  console.log(accountNo)
  console.log(accountContent.accountNumber);

  useEffect(() => {
    (async () => {
      let data = await displayDetails(accountNo);
      setAccountContent(data)
    })()
  }, [accountNo]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="User Table">
          <TableHead>
            <TableCell>Customer ID</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>CURRENCY</TableCell>
            <TableCell>TRANSACTION LIMIT</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{accountContent.customerId}</TableCell>
              <TableCell>{accountContent.accountNumber}</TableCell>
              <TableCell>{accountContent.balance}</TableCell>
              <TableCell>{accountContent.currency}</TableCell>
              <TableCell>{accountContent.transactionLimit}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <DisplayTransactionDetails accountNo={accountNo} />
    </div>
  );
}

DisplayDetails.propTypes = {
  accountNo: PropTypes.string
}

export default DisplayDetails;
