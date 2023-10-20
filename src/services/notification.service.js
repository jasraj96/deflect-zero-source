export async function addNewNotification(templateData) {
    const requestOption = {
        method: "POST",
        headers: { 
         "Content-type": "application/json",
         "ngrok-skip-browser-warning": "true"
         },
        body: JSON.stringify(templateData),
        redirect: "follow",
    };
    const res = await fetch("https://d741-103-141-55-30.ngrok-free.app/notification/create", requestOption);
    console.log(res);
}

export async function notificationAPI(customerID) {
    const url = `https://d741-103-141-55-30.ngrok-free.app/notification/all/${customerID}`;
    const result = await fetch(url,{
        headers: {
            accept:"application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
    });
    const data = await result.json();
    return data;
}
