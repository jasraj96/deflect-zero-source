export async function notificationAPI(customerID) {
  const url = `http://172.16.4.94:8085/notification/all/${customerID}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
}