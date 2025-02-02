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

//TASK 6: FOR...OF LOOP - PRODUCT LISTINGS

//Declare array containing products names
let products = ["Taro", "Brown Sugar", "Lychee", "Mango"]

//Use for...of loop to display each item
for (let product of products) {
    
    //Log each product name to the console using template literal
    console.log(`Product: ${product}`);
};

//TASK 7: FOREACH() METHOD - ORDER PROCESSING

//Declara array containing three orders IDs
orders = [9221, 4923, 6745]

//Use forEach method to display each ID
orders.forEach(order => {

    //Log each order ID to the console using template literal
    console.log(`Order ID: ${order}`)
});

//TASK 8: FUNCTION DECLARATION - TAX CALCULATION

//Declare function that calculates tax using an amount and tax rate
function calculateTax(amount, rate) {
    return amount * rate;
}

//Log function results to the console using template literal
console.log(`Tax Amount: $${calculateTax(9000, 0.05)}`);

//TASK 9: FUNCTION APPLICATIONS - DISCOUNT APPLICATION

//Declare function that calculates discounted amount using price and discount percentage
function applyDiscount(price, discountRate) {
    return price * (1 - discountRate); //Substract discount rate from 1 to find discounted price
}

//Log function results to the console using template literal
console.log(`Price after Discount: $${applyDiscount(1000, 0.2)}`)

//TASK 10: ARROW FUNCTIONS - LOYALTY POINTS

//Assign conversion rate
const conversionRate = 0.1

//Declare function that calculates loyalty points earned using purchase amount
calculatePoints = (purchaseAmount) => purchaseAmount * conversionRate;

//Log function results to the console using template literal
console.log(`Loyalty Points Earned: ${calculatePoints(300)}`)