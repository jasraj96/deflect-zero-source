
export const getTransactions = async (setTransactions) => {
    try {
        const data = await fetch("http://172.16.4.79:8000/transfer/get-all-transactions")
        await data.json().then(transactions => {
            setTransactions(transactions)
        })
    } catch (e) {

    }
}