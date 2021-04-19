loanArray = [];

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



    //total cost

    let totalCost = principal + interestTotal;

    for (let i = 1; i <= months; i++) {
        interestPayment = (remainingBalance * (interestRate / 1200));
        principalPayment = monthlyPayment - interestPayment;
        totalInterest = interestPayment + totalInterest;

        remainingBalance = remainingBalance - principalPayment;

        addToArray(i, monthlyPayment, principalPayment, interestPayment, totalInterest, remainingBalance)
    }


    document.getElementById("monthlyPaymentSummary").innerHTML = "$" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);
    document.getElementById("totalPrincipalSummary").innerHTML = "$" + (Math.round(principal * 100) / 100).toFixed(2);
    document.getElementById("totalInterestSummary").innerHTML = "$" + (Math.round(totalInterest * 100) / 100).toFixed(2);
    document.getElementById("totalCostSummary").innerHTML = "$" + (Math.round(totalCost * 100) / 100).toFixed(2);

    displayData(loanArray);

}

//principal payment and interest payment
function addToArray(month, payment, principalPayment, interest, totalInterest, balance) {
    let obj = {};
    obj["month"] = month;
    obj["payment"] = payment;
    obj["principalPayment"] = principalPayment;
    obj["interest"] = interest;
    obj["totalInterest"] = totalInterest;
    obj["balance"] = balance;

    loanArray.push(obj);

}

//Put data on the page
function displayData(loanArray) {


    const template = document.getElementById("dataTemplate");
    const monthyPaymentsTableResults = document.getElementById("monthyPaymentsTableResults");

    monthyPaymentsTableResults.innerHTML = "";

    for (let i = 0; i < loanArray.length; i++) {
        const dataRow = document.importNode(template.content, true);

        dataRow.getElementById("monthTemplate").textContent = loanArray[i].month;
        dataRow.getElementById("paymentTemplate").textContent = (Math.round(loanArray[i].payment * 100) / 100).toFixed(2);
        dataRow.getElementById("principalTemplate").textContent = (Math.round(loanArray[i].principalPayment * 100) / 100).toFixed(2);
        dataRow.getElementById("interestTemplate").textContent = (Math.round(loanArray[i].interest * 100) / 100).toFixed(2);
        dataRow.getElementById("totalInterestTemplate").textContent = (Math.round(loanArray[i].totalInterest * 100) / 100).toFixed(2);
        dataRow.getElementById("balanceTemplate").textContent = (Math.round(loanArray[i].balance * 100) / 100).toFixed(2);


        monthyPaymentsTableResults.appendChild(dataRow);
    }
}