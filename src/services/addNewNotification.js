export async function addNewNotification(templateData){
    //SBA852
    // var data = {
    //     customerID:"SBA852",
    //     templateID:"CREDIT",
    //     valueMap:{
    //         AMOUNT:"400"
    //     }
    // }
    const requestOption = {
        method:"POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(templateData) ,
        redirect: 'follow'
    }
    console.log(templateData);
    const res = await fetch('http://172.16.4.94:8085/notification/create',requestOption);
     console.log(res);
    console.log(JSON.stringify(templateData));
    // console.log(templateData);
}