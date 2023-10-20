import React, { useState } from "react";
import { patchNumber } from "layouts/customer/services/customerApi";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import MDButton from "components/MDButton";
export default function PatchNumber() {
    const [data, setData] = useState({
        customerId: "",
        mobileNo: "",
    });
    const [response, SetResponse] = useState("");
    const [open, setOpen] = useState(false);

    const handleValues = async (e) => {
        setData((previous) => ({
            ...previous,
            [e.target.name]: e.target.value,
        }));
        console.log(data);
    };
    const handleClose = () => {
        setOpen(false);
    };

    async function patchData() {
        const response = await patchNumber(data);
        SetResponse(response);
        setOpen(true);
    }

    return (
        <div>
            <Typography variant="h4">Change Number</Typography>
            <Grid
                container
                style={{
                    padding: "10px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid
                    xs={12}
                    style={{
                        padding: "10px",
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Id"
                        variant="outlined"
                        size="small"
                        onChange={handleValues}
                        name="customerId"
                    />
                </Grid>
                <Grid
                    xs={12}
                    style={{
                        padding: "10px",
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Mobile-Number"
                        variant="outlined"
                        size="small"
                        name="mobileNo"
                        onChange={handleValues}
                    />
                </Grid>
                <Grid
                    xs={12}
                    style={{
                        padding: "10px",
                    }}
                >
                    <MDButton variant="contained" color="secondary" onClick={patchData}>
                        Change
                    </MDButton>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title" color="secondary">
                    {response}
                </DialogTitle>
                {response === "successfully changed" && (
                    <DialogContent>
                        <DialogContentText style={{ color: "grey" }}>
                            Mobile Number has been changed to {data.mobileNo}
                        </DialogContentText>
                    </DialogContent>
                )}
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
