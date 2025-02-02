//TASK 1: IF STATEMENTS - CUSTOMER DISCOUNTS

//Declare variable with a numerical value
let purchaseAmount = 200;

//Use if statement to apply 15% off discount if amount > $100
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85;
}

//Log final amount to console using template literal
console.log(`Final amount after discount: $${finalAmount}`)