import { useState } from "react";
//component imports
import Notifications from "./Notifications";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function NotificationsFunctions() {
    const [successSB, setSuccessSB] = useState(false);
    const [infoSB, setInfoSB] = useState(false);
    const [warningSB, setWarningSB] = useState(false);
    const [errorSB, setErrorSB] = useState(false);

    const openSuccessSB = () => setSuccessSB(true);
    const closeSuccessSB = () => setSuccessSB(false);
    const openInfoSB = () => setInfoSB(true);
    const closeInfoSB = () => setInfoSB(false);

    const openWarningSB = () => setWarningSB(true);
    const closeWarningSB = () => setWarningSB(false);
    const openErrorSB = () => setErrorSB(true);
    const closeErrorSB = () => setErrorSB(false);

    const alertContent = (name) => (
        <MDTypography variant="body2" color="white">
            A simple {name} alert with{" "}
            <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
                an example link
            </MDTypography>
            . Give it a click if you like.
        </MDTypography>
    );

    const renderSuccessSB = (
        <MDSnackbar
            color="success"
            icon="check"
            title="Success"
            content="Success"
            dateTime="11 mins ago"
            open={successSB}
            onClose={closeSuccessSB}
            close={closeSuccessSB}
            bgWhite
        />
    );

    const renderErrorSB = (
        <MDSnackbar
            color="error"
            icon="warning"
            title="Material Dashboard"
            content="Hello, world! This is a notification message"
            dateTime="11 mins ago"
            open={errorSB}
            onClose={closeErrorSB}
            close={closeErrorSB}
            bgWhite
        />
    );

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Notifications/>
        </DashboardLayout>
    );
}

export default NotificationsFunctions;
