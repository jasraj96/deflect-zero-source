
// to create an account number
export const createTheAccount = async (setAccountNo,customerId) => {
    try {
        const response = await fetch(`http://172.16.4.98:8080/account/account-number?customerId=${customerId}`, {
            method: "POST",
        });

        const data = await response.json();
        setAccountNo(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// to display details based on acc no

export const displayDetails = async (setAccountContent,accountNo) => {
    try {
        const response = await fetch(`http://172.16.4.98:8080/account/get-account?accountNumber=${accountNo}`);

        let data = await response.json();
        setAccountContent(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// to display transaction details
export const displayTransaction = async (setTransactions,accountNo) => {
    try {
        const response = await fetch(`http://172.16.4.98:8080/account/get-ledger?accountNumber=${accountNo}`);

        await response.json().then((data) => {
            setTransactions(data);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

//to get beneficiary , sender transfer details

export const transferServiceRequest= async (setTransferData,transferDetails) => {
    try {
      const response = await fetch(
        `http://172.16.4.98:8080/account/get-transaction`,
        {method:"POST",
        headers: {
            "Content-Type":"application/JSON"
        },

        body:JSON.stringify(transferDetails)
    }

      );

      await response.json().then(data =>{
        setTransferData(data)
      })
     


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };