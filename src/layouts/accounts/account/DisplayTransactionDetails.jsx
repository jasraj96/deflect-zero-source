import { TableCell, TableRow, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function DisplayTransactionDetails({ accountNo }) {
  const [transactions, setTransactions] = useState([]);

  const displayTransaction = async () => {
    try {
      const response = await fetch(
        `http://172.16.4.98:8080/account/get-ledger?accountNumber=${accountNo}`
      );

      await response.json().then((data) => {
        setTransactions(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(accountNo);

  useEffect(() => {
    displayTransaction();
  }, [accountNo]);

  return (
    <div>
      <table style={{ width: "100%", tableLayout: "fixed" }}>
        {transactions && transactions.length > 0 ? (
          <>
            {transactions.map((data) => {
              return (
                <TableRow style={{ textAlign: "center", width: "30%" }}>
                  <TableCell style={{ textAlign: "left", padding: "5px" }}>
                    <div>
                      <h5>{data.accountNumber}</h5>
                      <h5 style={{ color: "gray", fontWeight: "400" }}>
                        {data.transactionId}
                      </h5>
                      <h5 style={{ color: "gray", fontWeight: "400" }}>
                        {data.transactionType}
                      </h5>
                    </div>{" "}
                  </TableCell>
                  <TableCell style={{ padding: "5px", fontWeight: "600" }}>
                    ${data.amount}
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "5px",
                      fontWeight: "600",
                      color: `${
                        data.paymentStatus === "SUCCESS" ? "green" : "red"
                      }`,
                    }}
                  >
                    {data.date}
                  </TableCell>
                </TableRow>
              );
            })}
          </>
        ) : (
          <>
            <Typography>No transactions to show</Typography>
          </>
        )}
      </table>
    </div>
  );
}

export default DisplayTransactionDetails;
