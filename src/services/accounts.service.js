export async function createAccount(customerId) {
    const response = await fetch(
        `https://1c89-103-141-55-30.ngrok-free.app/account/account-number?customerId=${customerId}`,
        { method: "POST" }
    );
    const data = await response.json();
    return data;
}
