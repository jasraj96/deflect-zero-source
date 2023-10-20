import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import BillForm from './components/BillForm';
import BillTransactionDetails from './components/BillTransactionDetails';
import GetBill from './components/GetBill';
import GetBillTransaction from './components/GetBillTransaction';

import Box from '@mui/material/Box';


function Billing(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Billing.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout>
      <Box sx={{ margin: '0 auto' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Bill Form" {...a11yProps(0)} />
            <Tab label="Get Bill" {...a11yProps(1)} />
            <Tab label="Bill Transaction Details" {...a11yProps(2)} />
            <Tab label=" Get Bill Transaction Details" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Billing value={value} index={0}>
          <BillForm />
        </Billing>
        <Billing value={value} index={1}>
          <GetBill />
        </Billing>
        <Billing value={value} index={2}>
          <BillTransactionDetails />
        </Billing>
        <Billing value={value} index={3}>
          <GetBillTransaction />
        </Billing>
      </Box>
    </DashboardLayout>
  );
}