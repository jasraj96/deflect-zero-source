import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomerDetails from "./components/customer/CustomerDetails";
import Customer from "./components/customer/Customer";
import CustomerByNumber from "./components/customer/CustomerByNumber";
import PatchAll from "./components/customer/PatchAll";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import CustomerProfile from "./components/customer/CustomerProfile";
export default function index() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <>
      {" "}
      <DashboardLayout>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Add Customer" value="1" style={{ padding: "5vh" }} />
                <Tab label="Details" value="2" style={{ padding: "5vh" }} />
                <Tab label="Change Email or Number" value="3" style={{ padding: "5vh" }} />
                <Tab label="Search By Number" value="4" style={{ padding: "5vh" }} />
                <Tab label="Search By ID" value="5" style={{ padding: "5vh" }} />
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
        </Box>
      </DashboardLayout>
    </>
  );
}
