

export const getAccountdetails = async (setAccountdetails, setUser, accountNumber) => {
    try {
        const data = await fetch(`http://172.16.4.98:8080/account/get-account?accountNumber=${accountNumber}`)
        data.json().then(accountdetails => {
            setAccountdetails(accountdetails)
            getUser(accountdetails, setUser)
        })
    } catch (e) {

    }

}
export const getUser = async (accountDetails, setUser) => {
    try {
        const user = await fetch(`http://172.16.4.87:8083/customer-profile/customer?customerId=${accountDetails.customerId}`)
        user.json().then(data => {
            setUser(data)
        })
    } catch (e) {
    }
}