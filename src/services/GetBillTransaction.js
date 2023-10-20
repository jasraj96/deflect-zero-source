export async function getBillsTransaction(billId) {
    const apiUrl = `http://172.16.4.78:8086/bill/transaction/search?billId=${billId}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl);

    const data = await response.json();
    return data;
}
