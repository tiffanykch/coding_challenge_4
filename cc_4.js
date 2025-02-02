//TASK 1: IF STATEMENTS - CUSTOMER DISCOUNTS

//Declare variable with a numerical value
let purchaseAmount = 200;

//Use if statement to apply 15% off discount if amount > $100
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85;
}

//Log final amount to console using template literal
console.log(`Final amount after discount: $${finalAmount}`)

//TASK 2: FOR LOOP - SALES REPORT

//Declare array containing five sales figures
let sales = [200, 2100, 75, 90, 450]

//Use for loop to access calculate total sales
for (sale in sales) {
    totalSales = 0;
    totalSales += sale;   
}

//Log total sales value to the console
console.log("Total Sales: $" + totalSales)