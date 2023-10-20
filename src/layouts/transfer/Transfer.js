import { Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TransferCard from './components/TransferCard/TransferCard'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Transfersuccesscard from './components/TransferSuccessCard/TranferSuccessCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./transfer.css"
import { getAccountdetails } from './services/getAccountdetails';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        color: "black",
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#49a3f1',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#49a3f1',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#49a3f1',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#49a3f1',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};


function Transfer() {
    const [accountDetails, setAccountdetails] = useState({
        customerId: "",
        accountNumber: "",
        balance: 0,
        currency: "",
        transactionLimit: 0
    })
    const [user, setUser] = useState({})
    const [activeStep, setActiveStep] = React.useState(1);
    const [transferResponse, setTransferresponse] = useState({
        senderAccountNumber: "",
        senderName: "",
        amount: 1,
        charges: null,
        dateTime: "",
        transactionID: "",
        beneficiaryAccountNumber: "",
        beneficiaryName: "",
        paymentStatus: "",
        currency: "",
        paymentMethod: "",
        comments: ""
    })
    const [accountNumber, setAccountnumber] = useState(1234232632)
    const [trigger, setTrigger] = useState(false)

    const steps = ['Enter account details', 'Transaction successful'];

    useEffect(() => {
        getAccountdetails(setAccountdetails, setUser, accountNumber)
    }, [triger])

    return (

        <Grid container justifyContent={"center"} alignItems={"center"} flexDirection={"column"} width={"100%"} margin={"auto"} rowSpacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} md={8} sm={12} width={"100%"} >
                <Stack sx={{ width: '100%' }} spacing={4}>
                    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon}>
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                </Stack>
            </Grid>
            {activeStep === 2 &&
                <Grid item xs={9} md={6} sm={8} width={"100%"}>
                    <IconButton onClick={() => { setActiveStep(1) }}>
                        <ArrowBackIcon sx={{ fontSize: 30 }}  ></ArrowBackIcon>
                    </IconButton>
                </Grid>}

            {activeStep === 1 && <Grid item xs={9} md={8} sm={8} width={"100%"}>
                <TransferCard trigger={trigger} accountNumber={accountNumber} setTrigger={setTrigger} setAccountnumber={setAccountnumber} setTransferresponse={setTransferresponse} accountDetails={accountDetails} user={user} setActiveStep={setActiveStep} />
            </Grid>}
            {activeStep === 2 && <Grid item xs={9} md={8} sm={8} width={"100%"}>
                <Transfersuccesscard transferResponse={transferResponse} />
            </Grid>}
        </Grid>

    )
}

export default Transfer