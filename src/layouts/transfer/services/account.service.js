

export const getAccountdetails = async (setAccountdetails, setUser, accountNumber) => {
    try {
        const data = await fetch(`https://1c89-103-141-55-30.ngrok-free.app/account/get-account?accountNumber=${accountNumber}`, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
            },
        })
        data.json().then(accountdetails => {
            setAccountdetails(accountdetails)
            getUser(accountdetails, setUser)
        })
    } catch (e) {

    }

}
export const getUser = async (accountDetails, setUser) => {
    try {
        const user = await fetch(`https://4a4d-103-141-55-30.ngrok-free.app/customer-profile/customer?customerId=${accountDetails.customerId}`,
            {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true",
                },
            })
        user.json().then(data => {
            setUser(data)
        })
    } catch (e) {
    }
}