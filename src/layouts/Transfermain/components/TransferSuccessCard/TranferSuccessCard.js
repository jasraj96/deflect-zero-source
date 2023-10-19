import { Button, FormLabel, IconButton } from '@mui/material'
import React from 'react'
import PriceChangeIcon from '@mui/icons-material/PriceChange';

function Transfersuccesscard({ transferresponse }) {

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "13px" }}>
            <div style={{
                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "20px", background: "#f2f3f7", borderRadius: "13px 13px 0px 0px"
            }}>
                <div>
                    <h3>Money Transfer successful</h3>
                    <h4 style={{ fontSize: "25px" }}>{transferresponse?.amount}</h4>

                    <p id="demo-row-radio-buttons-group-label" style={{ fontSize: "13px", margin: "0", color: "gray" }}>{transferresponse?.dateTime?.substring(0, 10)}</p>

                </div>
                <div>
                    <IconButton  >
                        <PriceChangeIcon sx={{ fontSize: 40 }}  ></PriceChangeIcon>
                    </IconButton>
                </div>

            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", paddingBottom: "20px" }}>
                    <div >
                        <h5>Transfered to</h5>
                        <h5>{transferresponse?.beneficiaryName} - {transferresponse?.beneficiaryAccountNumber}</h5>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <h5>transaction id</h5>
                        <h5>{transferresponse?.transactionID}</h5>
                    </div>
                </div>
                <div>
                    <Button sx={{
                        background: "#9107fa", padding: "12px", '&:hover': {
                            background: "#9107fa",
                        }
                    }} fullWidth variant='contained'>View receipt</Button>
                </div>
            </div>
        </div>
    )
}

export default Transfersuccesscard