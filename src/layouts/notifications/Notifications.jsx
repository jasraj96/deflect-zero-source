import React from "react";
import NotificationID from "./components/NotificationID";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddNotification from "./components/AddNotification";
const Notifications = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
                <NotificationID />
            </Grid>
        </Box>
    );
};

export default Notifications;
