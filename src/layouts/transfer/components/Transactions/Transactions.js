import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { getTransactions } from 'layouts/transfer/services/getTransactions';


export default function Transactions() {
    const [transactions, setTransactions] = useState([
        {
            beneficiaryName: "John Doe",
            beneficiaryAccountNumber: "123456789",
            amount: "$100.00",
            paymentStatus: "SUCCESS"
        },
    ])
    useEffect(() => {
        getTransactions(setTransactions)
    }, [])

    return (
        <Grid container md={12} flexDirection={"column"} >
            <Grid item md={12} marginTop={"20px"} >
            </Grid>
            <Grid item>
                <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow sx={{ background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))", color: "white" }}>
                                <TableCell>Beneficiary Name</TableCell>
                                <TableCell>Sender Name</TableCell>
                                <TableCell>Sender Account Number</TableCell>
                                <TableCell align="right">Beneficiary Account Number</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Payment Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((element, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{element?.senderName}</TableCell>
                                    <TableCell align="right">{element?.senderAccountNumber}</TableCell>
                                    <TableCell scope="row">{element.beneficiaryName} </TableCell>
                                    <TableCell align="right">{element?.beneficiaryAccountNumber}</TableCell>
                                    <TableCell align="right">{element?.amount}</TableCell>
                                    <TableCell align="right" sx={{ color: `${element?.paymentStatus === "SUCCESS" ? "green" : "red"}`, fontWeight: "400" }}>{element.paymentStatus}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>

    );
}

Transactions.propTypes = {
    accountDetails: PropTypes.object
}