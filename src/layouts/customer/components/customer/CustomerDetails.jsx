import React, { useEffect, useState } from "react";
import { getFilteredData } from "../../data/customerFetchApi";
import { Grid } from "@mui/material";
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
    { id: 2, field: "name", headerName: "name", width: 190 },
    { id: 3, field: "dateOfBirth", headerName: "dateOfBirth", width: 190 },
    { id: 4, field: "gender", headerName: "gender", width: 190 },
    { id: 5, field: "email", headerName: "email", width: 190 },
    { id: 6, field: "mobileNo", headerName: "mobileNo", width: 190 },
    { id: 7, field: "address", headerName: "address", width: 190 },
    { id: 8, field: "accountStatus", headerName: "accountStatus", width: 190 },
    { id: 9, field: "occupation", headerName: "occupation", width: 190 },
    { id: 10, field: "nominee", headerName: "nominee", width: 190 },
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
      <Grid
        container
        paddingLeft="30vh"
        paddingRight="5vh"
        gap={6}
        display="flex"
        justifyContent="center"
      >
        <DataGrid
          gap={6}
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
