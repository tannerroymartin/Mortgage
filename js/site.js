function calculate() {

    //User inputs
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let term = parseFloat(document.getElementById("term").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    //calculations from user

    let principal = parseFloat(loanAmount);

    //turn years into mnths for formulas

    let months = term * 12

    //initial declarations
    let interest = 0;
    let totalInterest = 0;
    let remainingBalance = 0;
    let principalPayment = 0;
    let monthlyPayment = (principal) * (interestRate / 1200) / (1 - Math.pow((1 + interestRate / 1200), (-months)));
    let interestPayment = 0;

    //interest

    let interestTotal = principal * interestRate / 1200;
    interest = principal * interestRate / 1200;

    //balance
    let balance = principal;
    remainingBalance = balance - principalPayment;
    let loanArray = [];
    for (let i = 1; i <= months; i++) {
        interestPayment = (remainingBalance * (interestRate / 1200));
        principalPayment = monthlyPayment - interestPayment;
        totalInterest = interestPayment + totalInterest;
        totalCost = principal + totalInterest;

        remainingBalance = remainingBalance - principalPayment;

        let obj = addToArray(i, monthlyPayment, principalPayment, interestPayment, totalInterest, remainingBalance)
        loanArray.push(obj);
    }


    document.getElementById("monthlyPaymentSummary").innerHTML = monthlyPayment.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    document.getElementById("totalPrincipalSummary").innerHTML = principal.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    document.getElementById("totalInterestSummary").innerHTML = totalInterest.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    document.getElementById("totalCostSummary").innerHTML = totalCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })



    displayData(loanArray);

}


function addToArray(month, payment, principalPayment, interest, totalInterest, balance) {
    let obj = {};
    obj["month"] = month;
    obj["payment"] = payment;
    obj["principalPayment"] = principalPayment;
    obj["interest"] = interest;
    obj["totalInterest"] = totalInterest;
    obj["balance"] = balance;


    return obj;
}

//Put data on the page
function displayData(loanArray) {


    const template = document.getElementById("dataTemplate");
    const monthyPaymentsTableResults = document.getElementById("monthyPaymentsTableResults");

    monthyPaymentsTableResults.innerHTML = "";

    for (let i = 0; i < loanArray.length; i++) {
        const dataRow = document.importNode(template.content, true);

        dataRow.getElementById("monthTemplate").textContent = loanArray[i].month;
        dataRow.getElementById("paymentTemplate").textContent = loanArray[i].payment.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        dataRow.getElementById("principalTemplate").textContent = loanArray[i].principalPayment.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        dataRow.getElementById("interestTemplate").textContent = loanArray[i].interest.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        dataRow.getElementById("totalInterestTemplate").textContent = loanArray[i].totalInterest.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        dataRow.getElementById("balanceTemplate").textContent = loanArray[i].balance.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });



        monthyPaymentsTableResults.appendChild(dataRow);
    }
}