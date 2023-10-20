import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateAccount from './account/CreateAccount';
import TransferServiceRequest from './account/TransferServiceRequest';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import GetAccount from './account/GetAccount';



function Main(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    // {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Main.propTypes = {
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
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="CREATE ACCOUNT " {...a11yProps(0)} />
            <Tab label="GET ACCOUNT " {...a11yProps(1)} />
            <Tab label="TRANSFER DETAILS" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Main value={value} index={0}>
          <CreateAccount />
        </Main>
        <Main value={value} index={1}>
          <GetAccount />
        </Main>
        <Main value={value} index={2}>
          <TransferServiceRequest />
        </Main>

      </Box>
    </DashboardLayout>
  );
}
