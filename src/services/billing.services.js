export async function getBills(billerId, billId) {
    const apiUrl = `https://82bd-103-141-55-30.ngrok-free.app/bill/?billerId=${billerId}&billId=${billId}`;

    const response = await fetch(apiUrl, {
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
    });

    const data = await response.json();
    return data;
}

export async function getBillsTransaction(billId) {
    const apiUrl = `https://82bd-103-141-55-30.ngrok-free.app/bill/transaction/search?billId=${billId}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
    });
    const data = await response.json();
    return data;
}

export async function postBill(billData) {
    const apiUrl = 'https://82bd-103-141-55-30.ngrok-free.app/bill/';
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(billData)
    });

    const data = await response.json();
    return data;
}

export async function postBillTransaction(billTransactionData) {
    const apiUrl = 'https://82bd-103-141-55-30.ngrok-free.app/bill/transaction/initiate-transaction';
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {

            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(billTransactionData)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const textdata = await response.text();
    console.log("response is", textdata);
    return JSON.parse(textdata);
}

