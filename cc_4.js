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

//TASK 4: DO...WHILE LOOP - CUSTOMER SURVEY

//Declare variable with initial value
let responses = 0

//Use do...while loop to collect responses
do {
    console.log(`Response Count: ${responses}`);
    responses++;
} while (responses <= 3);

//TASK 5 - FOR...IN LOOP - EMPLOYEE INFORMATION

//Declare object containing employee details
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

//Use for...in loop to iterate through object properties
for (let property in employee) {
   
    //Log each property and value to the console using template literal
    console.log(`${property}: ${employee[property]}`);
};

