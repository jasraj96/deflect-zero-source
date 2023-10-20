//fetch
export async function getCustomerByID(customerId) {
    const apiUrl = `https://6e31-103-141-55-30.ngrok-free.app/customer-profile/customer?customerId=${customerId}`;
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
export async function getCustomerByMobileNo(customerNumber) {
    const apiUrl = `https://6e31-103-141-55-30.ngrok-free.app/customer-profile/customer/customer-mobile?mobileNo=${customerNumber}`;
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
//patch
export async function patchEmail(data) {
    const apiUrl = `https://6e31-103-141-55-30.ngrok-free.app/customer-profile/customer/email`;
    const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },

        body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
        return "successfully changed";
    } else {
        return `Error in changing,status code -${response.status}`;
    }
}
//patch
export async function patchNumber(data) {
    const apiUrl = `https://6e31-103-141-55-30.ngrok-free.app/customer-profile/customer/mobile`;
    const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },

        body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
        return "successfully changed";
    } else {
        return `Error in changing,status code -${response.status}`;
    }
}
export async function getFilteredData() {
    const apiUrl = `https://6e31-103-141-55-30.ngrok-free.app/customer-profile/customer/query`;
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
//post
export async function postCustomer(customer) {
    const apiUrl = `https://6e31-103-141-55-30.ngrok-free.app/customer-profile/customer`;
    // ?accountStatus=${accountStatus}&address=${address}&customerId=${customerId}&dateOFBirth=${dateOfBirth}&documentId=${documentId}&email=${email}&gender=${gender}&idNo=${idNo}&mobilNo=${mobileNo}&name=${name}&nominee=${nominee}&occupation=${occupation}
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(customer),
    });
    console.log(response);
    if (response.ok) {
        return "Successfully Created";
    } else {
        return `Error in adding,status code -${response.status}`;
    }
}
