//FORM for User input
// let loanAmount = parseInt(document.getElementById("loanAmount").value);
// let term = parseInt(document.getElementById("term").value);
// let interestRate = parseInt(document.getElementById("interestRate").value);
// let totalCost = ((document.getElementById("loanAmount")) * (document.getElementById("term")) * (document.getElementById("interestRate")));
// let monthlyPaymentSummary = (loanAmount) * (interestRate / 1200) / (1 - Math.pow((1 + interestRate / 1200), (-term)));



function calculate() {
    //grab numbers from user and put them into summary table
    let loanAmount = parseInt(document.getElementById("loanAmount").value);
    let term = parseInt(document.getElementById("term").value);
    let interestRate = parseInt(document.getElementById("interestRate").value);
    let totalCost = ((document.getElementById("loanAmount")) * (document.getElementById("term")) * (document.getElementById("interestRate")));
    let monthlyPaymentSummary = (loanAmount) * (interestRate / 1200) / (1 - Math.pow((1 + interestRate / 1200), (-term)));

    document.getElementById("monthlyPaymentSummary").monthlyPaymentSummary;
}