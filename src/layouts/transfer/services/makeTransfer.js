
export const makeTransfer = async (transfer, setTransferresponse, setActiveStep) => {
    const data = await fetch('http://172.16.4.79:8000/transfer/create-transfer', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transfer),
    })
    data.json().then(data => {
        setActiveStep(2)
        setTransferresponse(data)
    })
}