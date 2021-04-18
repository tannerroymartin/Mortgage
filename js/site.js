//FORM for User input
// let loanAmount = parseInt(document.getElementById("loanAmount").value);
// let term = parseInt(document.getElementById("term").value);
// let interestRate = parseInt(document.getElementById("interestRate").value);
// let totalCost = ((document.getElementById("loanAmount")) * (document.getElementById("term")) * (document.getElementById("interestRate")));
// let monthlyPaymentSummary = (loanAmount) * (interestRate / 1200) / (1 - Math.pow((1 + interestRate / 1200), (-term)));

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

    //monthly payment

    let monthlyPayment = (principal) * (interestRate / 1200) / (1 - Math.pow((1 + interestRate / 1200), (-months)));

    //interest

    let interestTotal = principal * interestRate / 1200;


    //total cost

    let totalCost = principal + interestTotal;


    document.getElementById("monthlyPaymentSummary").innerHTML = "$" + (Math.round(monthlyPayment * 100) / 100).toFixed(2); //This is working
    document.getElementById("totalPrincipalSummary").innerHTML = "$" + (Math.round(principal * 100) / 100).toFixed(2); //This is working
    document.getElementById("totalInterestSummary").innerHTML = "$" + (Math.round(interestTotal * 100) / 100).toFixed(2); //
    document.getElementById("totalCostSummary").innerHTML = "$" + (Math.round(totalCost * 100) / 100).toFixed(2); //This is working

}

//principal payment and interest payment
function loanArray(month, payment, principal, interest, totalInterest, balance) {
    let obj = {};
    obj["month"] = month;
    obj["payment"] = payment;
    obj["principal"] = principal;
    obj["interest"] = interest;
    obj["balance"] = balance;

    loanArray.push(obj);

}

function displayData(loanArray) {

    let principalTemplate = monthlyPayment - interestTotal;
    let interestTemplate = balance * interestRate / 1200;

    //balance
    let balance = principal;
    let remainingBalance = balance - principalTemplate;

    const template = document.getElementById("dataTemplate");
    const monthyPaymentsTableResults = document.getElementById("monthyPaymentsTableResults");

    monthyPaymentsTableResults.innerHTML = "";

    for (let i = 0; i < loanArray.length; i++) {
        const dataRow = document.importNode(template.contentEditable, true);

        dataRow.getElementById("monthTemplate").textContent = loanArray[i].months;
        dataRow.getElementById("paymentTemplate").textContent = (Math.round(loanArray[i].payment * 100) / 100).toFixed(2);
        dataRow.getElementById("interestTemplate").textContent = (Math.round(loanArray[i].principal * 100) / 100).toFixed(2);
        dataRow.getElementById("totalInterestTemplate").textContent = (Math.round(loanArray[i].interest * 100) / 100).toFixed(2);
        dataRow.getElementById("balanceTemplate").textContent = (Math.round(loanArray[i].balance * 100) / 100).toFixed(2);

        monthyPaymentsTableResults.appendChild(dataRow);
    }
}