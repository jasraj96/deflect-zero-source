import React from "react";
import NotificationID from "./NotificationByID";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// index.js is the entry point

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
