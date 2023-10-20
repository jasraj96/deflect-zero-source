import { TableCell, TableRow, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function DisplayTransactionDetails(accountNo) {
    const [transactions, setTransactions] = useState([]);

    const displayTransaction = async () => {
        try {
            const response = await fetch(`https://1c89-103-141-55-30.ngrok-free.app/account/get-ledger?accountNumber=${accountNo}`);

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
                    <div>
                        {transactions.map((data, index) => {
                            return (
                                <TableRow key={index} style={{ textAlign: "center", width: "30%" }}>
                                    <TableCell style={{ textAlign: "left", padding: "5px" }}>
                                        <div>
                                            <h5>{data.accountNumber}</h5>
                                            <h5 style={{ color: "gray", fontWeight: "400" }}>{data.transactionId}</h5>
                                            <h5 style={{ color: "gray", fontWeight: "400" }}>{data.transactionType}</h5>
                                        </div>{" "}
                                    </TableCell>
                                    <TableCell style={{ padding: "5px", fontWeight: "600" }}>${data.amount}</TableCell>
                                    <TableCell
                                        style={{
                                            padding: "5px",
                                            fontWeight: "600",
                                            color: `${data.paymentStatus === "SUCCESS" ? "green" : "red"}`,
                                        }}
                                    >
                                        {data.date}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <Typography>No transactions to show</Typography>
                    </div>
                )}
            </table>
        </div>
    );
}

export default DisplayTransactionDetails;
