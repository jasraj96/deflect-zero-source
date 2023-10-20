import React, { useEffect, useState } from "react";
import { getFilteredData } from "services/customer.service";
import { Grid, TableContainer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
export default function CustomerDetails() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getFilteredData();
                setData(result);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);
    const column = [
        { id: 1, field: "customerId", headerName: "CustomerId", width: 190 },
        { id: 2, field: "name", headerName: "Name", width: 190 },
        { id: 3, field: "dateOfBirth", headerName: "Date Of Birth", width: 190 },
        { id: 4, field: "gender", headerName: "Gender", width: 190 },
        { id: 5, field: "email", headerName: "Email", width: 190 },
        { id: 6, field: "mobileNo", headerName: "Mobile Number", width: 190 },
        { id: 7, field: "address", headerName: "Address", width: 190 },
        { id: 8, field: "accountStatus", headerName: "Account Status", width: 190 },
        { id: 9, field: "occupation", headerName: "Occupation", width: 190 },
        { id: 10, field: "nominee", headerName: "Nominee", width: 190 },
    ];
    const rows = data.map((element) => ({
        id: element.customerId,
        customerId: element.customerId,
        name: element.name,
        dateOfBirth: element.dateOfBirth,
        gender: element.gender,
        email: element.email,
        mobileNo: element.mobileNo,
        address: element.address,
        accountStatus: element.accountStatus,
        occupation: element.occupation,
        nominee: element.nominee,
    }));

    return (
        <>
            <Grid container display="flex" justifyContent="center">
                <DataGrid
                    display="flex"
                    justifyContent="center"
                    rows={rows}
                    columns={column}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 9 },
                        },
                    }}
                />
            </Grid>
        </>
    );
}
