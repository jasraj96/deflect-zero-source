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
export default function index() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Details" value="1" />
              <Tab label="Details By ID" value="2" />
              <Tab label="Details By Number" value="3" />
              <Tab label="Change Id or Number" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CustomerDetails />
          </TabPanel>
          <TabPanel value="2">
            <Customer />
          </TabPanel>
          <TabPanel value="3">
            <CustomerByNumber />
          </TabPanel>
          <TabPanel value="4">
            <PatchAll />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
