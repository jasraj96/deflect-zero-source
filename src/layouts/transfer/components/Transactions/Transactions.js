import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';;
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';




export default function Transactions({ accountdetails }) {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [transactions, setTransactions] = useState([
        {
            beneficiaryName: "John Doe",
            beneficiaryAccountNumber: "123456789",
            amount: "$100.00",
            paymentStatus: "SUCCESS"
        },
        {
            beneficiaryName: "Jane Smith",
            beneficiaryAccountNumber: "987654321",
            amount: "$50.50",
            paymentStatus: "FAILURE"
        },
        {
            beneficiaryName: "Bob Johnson",
            beneficiaryAccountNumber: "555555555",
            amount: "$75.25",
            paymentStatus: "SUCCESS"
        }
        // Add more fake transactions as needed
    ])
    useEffect(() => {
        const getTransactions = async () => {
            try {
                const data = await fetch("http://172.16.4.79:8000/transfer/get-all-transactions")
                await data.json().then(transactions => {
                    setTransactions(transactions)
                })
            } catch (e) {

            }
        }
        getTransactions()
    }, [accountdetails])
    console.log(transactions)
    return (
        <Grid container md={12} flexDirection={"column"} >
            <Grid item md={12} marginTop={"20px"} >
                {/* <Grid container md={12} alignItems={"center"} gap={3} justifyContent={"center"}>
                    <Grid item md={3}>
                        <TextField fullWidth id="outlined-basic" label="Bank account number" variant="outlined" />
                    </Grid>
                    <Grid item md={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <DatePicker
                                sx={{ width: "100%" }}
                                label="Controlled picker"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />

                        </LocalizationProvider>
                    </Grid>
                    <Grid item md={3}>
                        <Button fullWidth variant='contained'>SUBMIT</Button>
                    </Grid>

                </Grid> */}
            </Grid>
            <Grid item>
                <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow sx={{ background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))", color: "white" }}>
                                <TableCell>Beneficiary Name</TableCell>
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
                                    <TableCell scope="row">
                                        {element.beneficiaryName}
                                    </TableCell>
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