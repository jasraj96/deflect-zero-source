export async function getCustomerByID(customerId) {
  const apiUrl = `http://172.16.4.87:8083/customer-profile/customer?customerId=${customerId}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
export async function getCustomerByMobileNo(customerNumber) {
  const apiUrl = `http://172.16.4.87:8083/customer-profile/customer/customer-mobile?mobileNo=${customerNumber}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
export async function patchEmail(data) {
  const apiUrl = `http://172.16.4.87:8083/customer-profile/customer/email`;
  const response = await fetch(apiUrl, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });
  console.log(response);
  if (response.ok) {
    return "successfully changed";
  } else {
    return `Error in changing,status code -${response.status}`;
  }
}
export async function patchNumber(data) {
  const apiUrl = `http://172.16.4.87:8083/customer-profile/customer/mobile`;
  const response = await fetch(apiUrl, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
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
  const apiUrl = `http://172.16.4.87:8083/customer-profile/customer/query`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

export async function postCustomer(customer) {
  const apiUrl = `http://172.16.4.87:8083//customer-profile/customer`;
  // ?accountStatus=${accountStatus}&address=${address}&customerId=${customerId}&dateOFBirth=${dateOfBirth}&documentId=${documentId}&email=${email}&gender=${gender}&idNo=${idNo}&mobilNo=${mobileNo}&name=${name}&nominee=${nominee}&occupation=${occupation}
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
