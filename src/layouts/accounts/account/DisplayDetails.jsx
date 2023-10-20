import React, { useEffect, useState } from "react";
import DisplayTransactionDetails from "./DisplayTransactionDetails";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";


function DisplayDetails( accountNo ) {
  const [accountContent, setAccountContent] = useState({
    customerId: "",
    accountNumber: "",
    balance: 0,
    currency: "INR",
    transactionLimit: 50000,
  });

 

  const displayDetails = async () => {
    try {
      const response = await fetch(
        `http://172.16.4.98:8080/account/get-account?accountNumber=${accountNo}`
      );

      let data = await response.json();
      setAccountContent(data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(accountNo)
  console.log(accountContent.accountNumber);
  
  useEffect(() => {
    displayDetails();
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

export default DisplayDetails;
