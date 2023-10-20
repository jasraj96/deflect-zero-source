export async function postBill(billData) {
    const apiUrl = 'http://172.16.4.78:8086/bill/';
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(billData)
    });

    const data = await response.json();
    return data;
}
