export async function postBillTransaction(billTransactionData) {
    const apiUrl = 'http://172.16.4.78:8086/bill/transaction/initiate-transaction';
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(billTransactionData)
    });

    if (!response.ok) {

        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const textdata = await response.text();

    console.log("response is", textdata);

    // const data = await response.json();
    return JSON.parse(textdata);
}