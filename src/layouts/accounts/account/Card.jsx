import React from "react";


function Card({transferData}) {

  return (
    <div>
        <h3>Transfer Details</h3>
     <table style={{ width: "100%", tableLayout: "fixed" }}>
                
                        <tr style={{ textAlign: "center", width: "30%" }}>
                            <td style={{ textAlign: "left", padding: "5px" }}>
                                <div>
                                    <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{color:"black"}}>Beneficiary Account Number : </strong>{transferData.beneficiaryAccountNumber}</h5>
                                    <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{color:"black"}}>Beneficiary Balance : </strong>{transferData.beneficiaryBalance}</h5>
                                </div> </td>
                                <td style={{ textAlign: "left", padding: "5px" }}>
                                <div>
                                    <h5 style={{ color: "gray", fontWeight: "400" }}> <strong style={{color:"black"}}>Holder Account Number : </strong>{transferData.holderAccountNumber}</h5>
                                    <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{color:"black"}}>Holder Balance : </strong>{transferData.holderBalance}</h5>
                                </div> </td>
                            <td style={{ padding: "5px", fontWeight: "600" }}>{transferData.transactionType}</td>
                            <td style={{ padding: "5px", fontWeight: "600" }}>{transferData.transferId}</td>
                           
                        </tr>
                    
      
            </table>
    </div>
  );
}

export default Card;
