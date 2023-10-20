import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import { Grid } from '@mui/material';
import Transfer from './Transfer';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import Transactions from './components/Transactions/Transactions';
import BasicTable from './components/Transactions/Transactions';




export default function Transfertab() {
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <DashboardLayout>
            <Grid sx={{ width: '100%' }} >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Transfer Amount" value="one" />
                            <Tab label="All Transactions" value="two" />
                        </Tabs>
                    </Box>
                    <TabPanel sx={{ padding: '0px' }} value="one">
                        <Transfer />
                    </TabPanel>
                    <TabPanel sx={{ padding: '0px' }} value="two">
                        <Transactions />
                    </TabPanel>
                </TabContext>

            </Grid>
        </DashboardLayout>

    );
}