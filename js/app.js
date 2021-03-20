// Select all elements of interest

const loanAmt = document.getElementById("loanAmt");
const rateOfInt = document.getElementById("rateOfInt");
const repayMonths = document.getElementById("repayMonths");

// Display Input
const monthlyPay = document.getElementById("monthlyPay");
const totalPay = document.getElementById("totalPay");
const totalIntPay = document.getElementById("totalIntPay");

// Call Button
const btn = document.getElementById("btn");

// Add event handler
btn.addEventListener("click", compute);


function compute(){
    let principal = parseFloat((loanAmt.value).replace(/[^\w\s]/gi, ''));
    let interest = parseFloat(rateOfInt.value)/100/12; 
    let numberOfMonths = parseFloat((repayMonths.value).replace(/[^\w\s]/gi, ''));

    // Monthly Payments
    // (amount*interest(1+interest)^numberOfMonths)/(1+interest)^numberOfMonths-1
    var temp = Math.pow(1 + interest, numberOfMonths);
    var monthlyPayment = (principal * temp * interest)/(temp - 1);

    // Display Output while also validating
    if(!isFinite(monthlyPayment)){
        monthlyPay.value = "";
        totalPay.value = "";
        totalIntPay.value = "";
    
    } else {
        monthlyPay.value = monthlyPayment.toFixed(2);
        totalPay.value = (monthlyPayment * numberOfMonths).toFixed(2);
        totalIntPay.value = ((monthlyPayment * numberOfMonths) - principal).toFixed(2);
    }

}