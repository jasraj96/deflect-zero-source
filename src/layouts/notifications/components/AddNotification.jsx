import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { addNewNotification } from "../../../services/addNewNotification";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Paper, Snackbar, Alert, InputLabel, FormControl } from "@mui/material";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MuiAlert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />; // important for snackbar
    });
});
const AddNotification = () => {
    const [open, setOpen] = useState(false);
    const [templateData, setTemplateData] = useState({
        customerID: "",
        templateID: "CREDIT",
        valueMap: {
            AMOUNT: "",
        },
    });

    function handleNewNotification(e) {
        setTemplateData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value, valueMap: { AMOUNT: e.target.value } };
        });
        console.log(templateData);
    }

    function handleClickClose() {
        setOpen(false);
    }
    // snackbar
    const [openSnack, setOpenSnack] = React.useState(false);

    const handleSnackClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenSnack(false);
    };

    //snackbar end
    const handleClickOpen = () => {
        setOpen((prevState) => {
            return !prevState;
        });
    };

    const handleSave = (e) => {
        addNewNotification(templateData);
        setOpen(false);
        console.log(templateData);
        setOpenSnack(true);
    };
    return (
        <div>
            <Snackbar open={openSnack} autoHideDuration={2000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="info" sx={{ width: "100%" }}>
                    Request has been submited!
                </Alert>
            </Snackbar>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }} onClick={handleClickOpen}>
                Add New Notification
            </Button>
            <Dialog fullScreen open={open} onClose={handleClickOpen} TransitionComponent={Transition}>
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add a New Notification
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid display="flex" alignItems="center" justifyContent="center">
                    <Paper elevation={5} sx={{ padding: 10 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} textAlign="center">
                                <MDTypography color="info" fontWeight="bold">
                                    ENTER THE DETAILS
                                </MDTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="customerID"
                                    label="Customer ID"
                                    id="outlined-size-small"
                                    size="large"
                                    onChange={handleNewNotification}
                                    value={templateData.customerID}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Amount"
                                    id="outlined-size-small"
                                    size="large"
                                    onChange={handleNewNotification}
                                    name="valueMap"
                                    value={templateData.valueMap.AMOUNT}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        sx={{ padding: 1.5 }}
                                        name="templateID"
                                        value={templateData.templateID}
                                        label="Type"
                                        onChange={handleNewNotification}
                                    >
                                        <MenuItem value={"CREDIT"}>CREDIT</MenuItem>
                                        <MenuItem value={"DEBIT"}>DEBIT</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <MDButton variant="contained" color="success" onClick={handleSave} fullWidth>
                                    Add
                                </MDButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Dialog>
        </div>
    );
};

export default AddNotification;
