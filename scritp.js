let loan = document.getElementById("loan");
let interest = document.getElementById("interest");
let tenure = document.getElementById("tenure");

function calculateEMI() {

    let principal = Number(loan.value);

    let rate = Number(interest.value);

    let years = Number(tenure.value);

    // Monthly interest rate
    let monthlyRate = rate / 12 / 100;

    // Total months
    let months = years * 12;

    // EMI formula
    let emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    // Total amount
    let totalAmount = emi * months;

    // Total interest
    let totalInterest = totalAmount - principal;


    // Show values

    document.getElementById("amount").innerText =
        principal.toLocaleString("en-IN");

    document.getElementById("rate").innerText =
        rate;

    document.getElementById("year").innerText =
        years;

    document.getElementById("emi").innerText =
        Math.round(emi).toLocaleString("en-IN");

    document.getElementById("principal").innerText =
        principal.toLocaleString("en-IN");

    document.getElementById("totalInterest").innerText =
        Math.round(totalInterest).toLocaleString("en-IN");

    document.getElementById("totalAmount").innerText =
        Math.round(totalAmount).toLocaleString("en-IN");
}


// Loan slider
loan.oninput = function() {
    calculateEMI();
};


// Interest slider
interest.oninput = function() {
    calculateEMI();
};


// Tenure slider
tenure.oninput = function() {
    calculateEMI();
};


// Calculate when page loads
calculateEMI();