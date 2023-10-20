import React, { useState } from "react";
import {
    Grid,
    Box,
    TextField,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Paper,
    DialogContent,
    DialogContentText,
    Dialog,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { postCustomer } from "services/customer.service";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

const CustomerProfile = () => {
    const [customer, setCustomer] = useState([
        {
            accountStatus: "",
            address: "",
            // customerAdressList: {
            //     addressTypeEnum: "",
            //     country: "",
            //     district: "",
            //     lane1: "",
            //     lane2: "",
            //     postalCode: "",
            //     state: ""
            // },
            customerId: "",
            dateOfBirth: "",
            documentId: "",
            email: "",
            gender: "",
            idNo: "",
            mobileNo: "",
            name: "",
            nominee: "",
            occupation: "",
        },
    ]);
    const [open, setOpen] = useState(false);
    const [response, SetResponse] = useState("");

    const [error, setError] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = () => {
        setOpen(false);
    };

    function handleChange(e) {
        setCustomer((previous) => ({
            ...previous,
            [e.target.name]: e.target.value,
        }));
        console.log(customer, "sdhvbsvs");
    }
    const handleSubmit = async () => {
        console.log(customer, "new customer");

        if (
            customer.name === undefined ||
            customer.address === undefined ||
            // customer.country === undefined ||
            // customer.state === undefined ||
            // customer.district === undefined ||
            // customer.lane1 === undefined ||
            // customer.lane2 === undefined ||
            // customer.postalCode === undefined ||
            customer.documentID === undefined ||
            customer.idNo === undefined ||
            customer.email === undefined ||
            customer.mobileNo === undefined ||
            customer.nominee === undefined ||
            customer.occupation === undefined
        ) {
            setError(true);
            console.log("error");
        } else {
            const response = await postCustomer(customer);
            console.log(customer, "new customer");
            setError(false);
            SetResponse(response);

            setOpen(true);
        }
    };

    // const handleAdress = (e) => {
    //     setCustomer((previous) => ({
    //         ...previous, addressTypeEnum: {
    //             [e.target.name]: e.target.value,

    //         }
    //     }))
    // }

    const errorStyling = {
        float: "right",
        margin: 0,
        color: "red",
        fontSize: "11px",
    };

    return (
        <Box
            sx={{
                margin: {
                    lg: "0px 250px",
                    md: "0px 180px",
                    sm: "0px 100px",
                },
            }}
        >
            <div>
                <form className="form">
                    <MDTypography fontSize={30}>Fill your Details</MDTypography>
                    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} margin={2}>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Enter your name"
                                name="name"
                                error={(error && customer.name === undefined) || ""}
                                variant="outlined"
                            />
                            {error && customer.name === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Enter your address"
                                name="address"
                                error={error && customer.address === undefined}
                                variant="outlined"
                            />
                            {error && customer.address === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
                                <Select
                                    style={{ height: "45px" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select your account status"
                                    name="accountStatus"
                                    error={error && customer.accountStatus === undefined}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="active">Active</MenuItem>
                                    <MenuItem value="inactive">Inactive</MenuItem>
                                </Select>
                            </FormControl>
                            {error && customer.accountStatus === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>

                        {/* <Grid item xs={6} md={4} lg={3}>
                            <TextField style={{ width: "100%" }}
                                required
                                onChange={handleAdress}
                                id="outlined-basic"
                                label="Country"
                                name='country'
                                error={error && customer.country === undefined}
                                variant="outlined"
                            />
                            {error && customer.country === undefined ? <p style={errorStyling}> This field is required</p> : ''}
                        </Grid> */}

                        {/* <Grid item xs={6} md={4} lg={3}>
                            <TextField style={{ width: "100%" }}
                                required

                                onChange={handleAdress}
                                id="outlined-basic"
                                label="State"
                                name='state'
                                error={error && customer.state === undefined}
                                variant="outlined"
                            />
                            {error && customer.state === undefined ? <p style={errorStyling}> This field is required</p> : ''}
                        </Grid> */}
                        {/* <Grid item xs={6} md={4} lg={3}>
                            <TextField style={{ width: "100%" }}
                                required
                                onChange={handleAdress}
                                id="outlined-basic"
                                label="District"
                                name='district'
                                error={error && customer.district === undefined}
                                variant="outlined"
                            />
                            {error && customer.district === undefined ? <p style={errorStyling}> This field is required</p> : ''}
                        </Grid> */}
                        {/* <Grid item xs={6} md={4} lg={3}>
                            <TextField style={{ width: "100%" }}
                                required
                                onChange={handleAdress}
                                id="outlined-basic"
                                label="Lane 1"
                                name='lane1'
                                error={error && customer.lane1 === undefined}
                                variant="outlined"
                            />
                            {error && customer.lane1 === undefined ? <p style={errorStyling}> This field is required</p> : ''}
                        </Grid> */}
                        {/* <Grid item xs={6} md={4} lg={3}>
                            <TextField style={{ width: "100%" }}
                                required
                                onChange={handleAdress}
                                id="outlined-basic"
                                label="Lane 2"
                                name='lane2'
                                error={error && customer.lane2 === undefined}
                                variant="outlined"
                            />
                            {error && customer.lane2 === undefined ? <p style={errorStyling}> This field is required</p> : ''}
                        </Grid> */}
                        {/* <Grid item xs={6} md={4} lg={3}>
                            <TextField style={{ width: "100%" }}
                                required
                                onChange={handleAdress}
                                id="outlined-basic"
                                label="Postal Code"
                                name='postalCode'
                                error={error && customer.postalCode === undefined}
                                variant="outlined"
                            />
                            {error && customer.postalCode === undefined ? <p style={errorStyling}> This field is required</p> : ''}
                        </Grid> */}
                        <Grid item xs={6} md={6} lg={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    style={{ height: "45px" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Gender"
                                    name="gender"
                                    error={error && customer.gender === undefined}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            {error && customer.gender === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>

                        <Grid item xs={6} md={4} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Date of birth"
                                name="dateOfBirth"
                                error={error && customer.dateOfBirth === undefined}
                                variant="outlined"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                            />
                            {error && customer.dateOfBirth === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Document ID"
                                name="documentID"
                                error={error && customer.documentID === undefined}
                                variant="outlined"
                            />
                            {error && customer.documentID === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>

                        <Grid item xs={6} sm={6} md={4} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="ID No"
                                name="idNo"
                                error={error && customer.idNo === undefined}
                                variant="outlined"
                            />
                            {error && customer.idNo === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Email"
                                name="email"
                                error={error && customer.email === undefined}
                                variant="outlined"
                            />
                            {error && customer.email === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Mobile Number"
                                name="mobileNo"
                                error={error && customer.mobileNo === undefined}
                                variant="outlined"
                                inputProps={{
                                    maxLength: 10,
                                    pattern: "^[0-9]{10}$",
                                }}
                            />
                            {error && customer.mobileNo === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Nominee"
                                name="nominee"
                                error={error && customer.nominee === undefined}
                                variant="outlined"
                            />
                            {error && customer.nominee === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                onChange={handleChange}
                                id="outlined-basic"
                                label="Occupation"
                                name="occupation"
                                error={error && customer.occupation === undefined}
                                variant="outlined"
                            />
                            {error && customer.occupation === undefined ? (
                                <p style={errorStyling}> This field is required</p>
                            ) : (
                                ""
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDButton variant="contained" color="secondary" onClick={handleSubmit}>
                                Submit
                            </MDButton>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title" color="secondary">
                    {response}
                </DialogTitle>
                {response === "successfully changed" && (
                    <DialogContent>
                        <DialogContentText>Successfully Created</DialogContentText>
                    </DialogContent>
                )}
                <DialogActions>
                    <MDButton variant="contained" color="secondary" onClick={handleClose} autoFocus>
                        Ok
                    </MDButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CustomerProfile;
