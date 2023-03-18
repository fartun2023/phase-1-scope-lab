// Declare global variable customerName
var customerName = "bob";
const leastFavoriteCustomer = "Dave";

// Function to uppercase customerName
function upperCaseCustomerName() {
    // customerName = customerName.toUpperCase();
    customerName = customerName.toUpperCase();
    
}

// Function to set global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}


// Function to overwrite global variable bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    bestCustomer = `maybe bob` ;
}

// // Declare constant leastFavoriteCustomer

// Function to attempt to change constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // Attempt to assign a new value to leastFavoriteCustomer (which is a constant)
  leastFavoriteCustomer = "Mike";
  // This will throw a TypeError: Assignment to constant variable.
}
