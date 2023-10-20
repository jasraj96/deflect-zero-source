import React from 'react'
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material'
import PriceChangeIcon from '@mui/icons-material/PriceChange';

function TransferSuccessCard(props) {
    const { transferResponse } = props

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "13px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center", padding: "20px",
                background: `${transferResponse?.paymentStatus === "FAILED" ? "linear-gradient(195deg, #EC407A, #D81B60)" : "linear-gradient(195deg, #66BB6A, #43A047)"}`,
                borderRadius: "13px 13px 0px 0px"
            }}>
                <div>
                    <h5 style={{
                        color: "white",
                        fontSize: "18px"
                    }}>Money Transfer {transferResponse?.paymentStatus === "FAILED" ? "unsuccessful" : "Successful"}</h5>
                    <h4 style={{
                        color: "white",
                        fontSize: "25px"
                    }}>{transferResponse?.amount}</h4>
                    <p id="demo-row-radio-buttons-group-label" style={{
                        fontSize: "13px",
                        margin: "0",
                        color: "white"
                    }}>{transferResponse?.dateTime?.substring(0, 10)}</p>
                </div>
                <div>
                    <IconButton  >
                        <PriceChangeIcon sx={{ fontSize: "100x" }} color='white' ></PriceChangeIcon>
                    </IconButton>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    paddingBottom: "20px"
                }}>
                    <div>
                        <h6>Transfered to</h6>
                        <h6>{transferResponse?.beneficiaryName} - {transferResponse?.beneficiaryAccountNumber}</h6>
                    </div>
                    <div style={{
                        textAlign: "right"
                    }}>
                        <h6>Transaction ID</h6>
                        <h6>{transferResponse?.transactionID}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

TransferSuccessCard.propTypes = {
    transferResponse: PropTypes.object
}

export default TransferSuccessCard