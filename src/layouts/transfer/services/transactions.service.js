export const getTransactions = async (setTransactions) => {
    try {
        const data = await fetch("https://b08f-117-247-179-161.ngrok-free.app/transfer/get-all-transactions",
            {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true",
                },
            })
        data.json().then(transactions => {
            setTransactions(transactions)
        })
    } catch (e) {

    }
}


export const createTransfer = async (transfer, setTransferresponse, setActiveStep) => {
    try {
        const data = await fetch('https://b08f-117-247-179-161.ngrok-free.app/transfer/create-transfer', {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
            },
            body: JSON.stringify(transfer),
        })
        data.json().then(data => {
            setActiveStep(2)
            setTransferresponse(data)
        })
    } catch {

    }

}