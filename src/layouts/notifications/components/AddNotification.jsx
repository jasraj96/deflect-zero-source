import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { addNewNotification } from "../../../services/addNewNotification";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Divider, Paper } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
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
    // function handleNewNotificationAmount(e) {
    //   setNotificationAmount((prevState) => {
    //     return { ...prevState, valueMap: e.target.value };
    //   });
    //   setTemplateData((prevState=>{
    //     return {...prevState, ...notificationAmount}
    //   }))
    //   console.log(templateData);
    // }

    const handleClickOpen = () => {
        setOpen((prevState) => {
            return !prevState;
        });
    };

    const handleSave = (e) => {
        addNewNotification(templateData);
        setOpen(false);
        console.log(templateData);
    };

    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 6 }} onClick={handleClickOpen}>
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
                        <Button autoFocus color="inherit" onClick={handleSave}>
                            SUBMIT
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid display="flex" alignItems="center" justifyContent="center">
                    <Paper elevation={5} sx={{ padding: 10 }}>
                        <List>
                            <ListItem sx={{ marginBottom: 2 }}>
                                <h3>Enter Details</h3>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    name="customerID"
                                    label="Customer ID"
                                    id="outlined-size-small"
                                    size="large"
                                    onChange={handleNewNotification}
                                    value={templateData.customerID}
                                />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <Select
                                    sx={{ padding: 1.5 }}
                                    name="templateID"
                                    value={templateData.templateID}
                                    label="TemplateId"
                                    onChange={handleNewNotification}
                                >
                                    <MenuItem value={"CREDIT"}>CREDIT</MenuItem>
                                    <MenuItem value={"DEBIT"}>DEBIT</MenuItem>
                                </Select>
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <TextField
                                    type="number"
                                    label="Amount"
                                    id="outlined-size-small"
                                    size="large"
                                    onChange={handleNewNotification}
                                    name="valueMap"
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Dialog>
        </div>
    );
};

export default AddNotification;
