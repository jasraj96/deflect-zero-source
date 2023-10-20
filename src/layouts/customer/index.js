import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomerDetails from "./components/customer/ViewCustomer/CustomerDetails";
import Customer from "./components/customer/SearchCustomer/SearchById/CustomerById";
import CustomerByNumber from "./components/customer/SearchCustomer/SearchByNumber/CustomerByNumber";
import PatchAll from "./components/customer/EditCustomer/Edit";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import CustomerProfile from "./components/customer/AddCustomer/AddCustomer";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
export default function index() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    return (
        <>
            <DashboardLayout>
            <DashboardNavbar />
                <TabContext value={value}>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: "divider",
                            display: "flex",
                            flexDirection : "column",
                            justifyContent : "space-evenly"
                        }}
                    >
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            sx={{ display:"flex" , flexDirection: "column" }}
                        >
                            <Tab label="Add Customer" value="1"  />
                            <Tab label="Details" value="2" />
                            <Tab label="Change Email or Number" value="3" />
                            <Tab label="Search By Number" value="4" />
                            <Tab label="Search By ID" value="5"  />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <CustomerProfile />
                    </TabPanel>
                    <TabPanel value="2">
                        <CustomerDetails />
                    </TabPanel>
                    <TabPanel value="3">
                        <PatchAll />
                    </TabPanel>
                    <TabPanel value="4">
                        <CustomerByNumber />
                    </TabPanel>
                    <TabPanel value="5">
                        <Customer />
                    </TabPanel>
                </TabContext>
            </DashboardLayout>
        </>
    );
}
