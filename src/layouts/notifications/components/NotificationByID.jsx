import React, { useEffect, useState } from "react";
import { notificationAPI } from "../../../services/notificationAPI";
import AddNotification from "./AddNotification";
import { Grid, TextField, Button, Box } from "@mui/material";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment/moment";

const NotificationID = () => {
    const [notification, setNotification] = useState(null);
    const [customerID, setCustomerID] = useState(null);
    // -----------------------------------------------------------------------------

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#42a5f0",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    // -----------------------------------------------------------------------------
    async function fetchApiData(customerID) {
        await notificationAPI(customerID)
            .then((response) => {
                setNotification(response);
            })
            .catch((e) => console.log("error"));
    }

    const handleCustomerIDChange = (e) => {
        setCustomerID(e.target.value);
    };

    const handleButtonClick = async (e) => {
        fetchApiData(customerID);
    };

    useEffect(() => {
        fetchApiData("");
    }, []);

    return (
        <>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                <Box mb={3}>
                    <h2>Search a Notification</h2>
                </Box>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                    <Box display="flex" justifyContent="flex-end">
                        <TextField
                            id=""
                            label="Customer ID"
                            variant="outlined"
                            size="small"
                            sx={{ marginRight: 1 }}
                            value={customerID}
                            onChange={handleCustomerIDChange}
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" justifyContent="flex-start" maxWidth="150px">
                        <Button variant="contained" onClick={handleButtonClick} fullWidth>
                            Search
                        </Button>
                    </Box>
                </Grid>
                <AddNotification />
            </Grid>
            {notification ? (
                <Grid container>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell width={100}>Notification ID</StyledTableCell>
                                        <StyledTableCell align="right">Type</StyledTableCell>
                                        <StyledTableCell align="right" width={100}>
                                            Customer ID
                                        </StyledTableCell>
                                        <StyledTableCell align="right">Date</StyledTableCell>
                                        <StyledTableCell align="center">Email</StyledTableCell>
                                        <StyledTableCell align="right">Number</StyledTableCell>
                                        <StyledTableCell align="center" width={400}>
                                            Details
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {notification.map((row) => (
                                        <StyledTableRow
                                            key={row.notificationID}
                                            sx={{
                                                "&:last-child td, &:last-child th": { border: 0 },
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.notificationID}
                                            </TableCell>
                                            <TableCell align="right">{row.templateID}</TableCell>
                                            <TableCell align="right">{row.customerID}</TableCell>
                                            <TableCell align="right">
                                                {moment(row.dateTime).format("YYYY-MM-DD h:mm a")}
                                            </TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="right">{row.mobileNumber}</TableCell>
                                            <TableCell align="left">{row.text}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default NotificationID;
