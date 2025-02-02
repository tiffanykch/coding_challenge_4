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

//Declare totalSales variable outside of loop
totalSales = 0;

//Use for loop to access calculate total sales
for (sale of sales) {
    totalSales += sale;   
}

//Log total sales value to the console
console.log(`Total Sales: $${totalSales}`)

//TASK 3: WHILE LOOP - INVENTORY DEPLETION

//Declare variable with initial value
let stock = 10

//Use while loop to decrease value until 0
while (stock > -1) {

    //Log each decrement to the console
    console.log(`Stock Count: ${stock}`);

    //Decrease stock by 1
    stock--;
}
