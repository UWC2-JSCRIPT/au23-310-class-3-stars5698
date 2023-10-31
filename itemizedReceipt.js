// Donna Quach, JavaScript 310B, Autumn 2023
// Class 3 Exercises 

// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const itemOne =  { descr: 'Burrito', price: 5.99 }; 
const itemTwo =  { descr: 'Chips & Salsa', price: 2.99 };
const itemThree = { descr: 'Sprite', price: 1.99 }; 

// Check
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97

let totalPrice = 0; // Before obtaining total

function logItem (item) {
  console.log(`${item.descr} - $${item.price}`);  // Display item name and its price 
  totalPrice += item.price; // Obtain price of item that was just logged and add to total
  return totalPrice; 
}

const logReceipt = (...items) => {
  items.forEach(logItem); // Get price of each item and calculate total price 
  return console.log(`Total - $${totalPrice}`);  // Display total price 
}


logReceipt(itemOne, itemTwo, itemThree); // Generate itemized receipt for items 

console.log('\n'); // To separate the EC question from the above 


/*****************************************************************************************************************************
  The code below is for the EXTRA CREDIT portion of this exercise!!! It includes the subtotal, taxes, and grand total. 
*****************************************************************************************************************************/

// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a subtotal price, tax, and a grand total.

const itemOneEC =  { descr: 'Burrito', price: 5.99 }; 
const itemTwoEC =  { descr: 'Chips & Salsa', price: 2.99 };
const itemThreeEC = { descr: 'Sprite', price: 1.99 }; 

// Check
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Subtotal - $10.97
// Tax (9.5%) - $1.04
// Total - $12.01 

let subtotalPriceEC = 0; // Before obtaining subtotal
let salestaxEC = 0; // Before calculating sales tax based on a rate of 9.5% 
const salestaxRate = 0.095 // Local sales tax rate 

function logItemEC (itemEC) {
  console.log(`${itemEC.descr} - $${itemEC.price}`);  // Display item name and its price 
  subtotalPriceEC += itemEC.price; // Obtain price of item that was just logged and add to subtotal
  return subtotalPriceEC; 
}

const logReceiptEC = (...items) => {
  let grandTotal = 0; // Before obtaining grand total 
  items.forEach(logItemEC); // Get price of each item and calculate subtotal 
  salestaxEC = (subtotalPriceEC * salestaxRate).toFixed(2); // Calculate total sales tax and round to nearest penny
  grandTotal = (subtotalPriceEC + Number.parseFloat(salestaxEC)).toFixed(2); // Calculate grand total to nearest penny. Must parse salestaxEC first to calculate grand total because toFixed() returns a string
  return console.log(`Subtotal - $${subtotalPriceEC}\nTax (9.5%) - $${salestaxEC}\nGrand Total - $${grandTotal}`);  // Display sales tax and grand total
}


logReceiptEC(itemOneEC, itemTwoEC, itemThreeEC); // Generate itemized receipt for items including tax and grand total 