export async function createTheAccount(customerId) {
    const response = await fetch(
        `https://1c89-103-141-55-30.ngrok-free.app/account/account-number?customerId=${customerId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    const data = await response.json();
    return data;
}

export const displayDetails = async (accountNo, setAccountContent) => {
    try {
        const response = await fetch(
            `https://1c89-103-141-55-30.ngrok-free.app/account/get-account?accountNumber=${accountNo}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true",
                },
            }
        );

        let data = await response.json();
        setAccountContent(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const displayTransaction = async (accountNo, setTransactions) => {
    try {
        const response = await fetch(
            `https://1c89-103-141-55-30.ngrok-free.app/account/get-ledger?accountNumber=${accountNo}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true",
                },
            }
        );

        await response.json().then((data) => {
            setTransactions(data);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const transferServiceRequest = async (transferDetails) => {
    try {
        const response = await fetch(`https://1c89-103-141-55-30.ngrok-free.app/account/get-transaction`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },

            body: JSON.stringify(transferDetails),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
