import React from "react";
import '../account/card.css';
import TransferServiceRequest from "./TransferServiceRequest";


function Card(transferData) {

  return (
    <div style={{ marginTop: "100px" }}>
      <div >
        <h3 style={{ textAlign: "center" }}>Transfer Details</h3>

        <table style={{ width: "100%", tableLayout: "fixed" }}>

          <tr style={{ textAlign: "center", width: "30%" }}>
            <td style={{ textAlign: "left", padding: "5px" }}>
              <div className="cardParent">
                <div className="card">
                  <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{ color: "black" }}>Beneficiary Account Number : </strong> {transferData.beneficiaryAccountNumber}</h5>
                  <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{ color: "black" }}>Beneficiary Balance : </strong>{transferData.beneficiaryBalance}</h5>
                  <h5 style={{ color: "gray", fontWeight: "400" }}> <strong style={{ color: "black" }}>Holder Account Number : </strong>{transferData.holderAccountNumber}</h5>
                  <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{ color: "black" }}>Holder Balance : </strong>{transferData.holderBalance}</h5>
                  <h5 style={{ color: "gray", fontWeight: "400" }}> <strong style={{ color: "black" }}>Transaction Type : </strong>{transferData.holderAccountNumber}</h5>

                  <h5 style={{ color: "gray", fontWeight: "400" }}><strong style={{ color: "black" }}>Transfer ID : </strong>{transferData.holderBalance}</h5>
                </div>
              </div> </td>

          </tr>
        </table>
      </div>
    </div>
  );
}

export default Card;
