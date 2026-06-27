// Question 1 – Function with Parameters

// Create a function named multiply that takes two numbers as parameters and returns their multiplication.
// Example Output:
// multiply(5, 4); // 20  

function multiply(num1, num2){

return num1 * num2;
}

console.log(5*4);

// Question 2 – Function with Return
// Create a function findSquare that accepts a number and returns its square.
// Example Output:
// findSquare(6); // 36

function findSquare(num){
    return num*num
}

console.log(findSquare(6));

// Question 3 – Global Scope
// Create a global variable score = 50.
// Create a function increaseScore() that increases the score by 10.

let score = 50;

function increaseScore() {
    score += 10;
}

increaseScore();
increaseScore();
increaseScore();

console.log(score);


// Question 4 – Block Scope
// Predict the output of the following code. If there is an error, explain why.

if (true) {
    let city = "Mumbai";
    console.log(city);
}

// console.log(city);

// Error:
// ReferenceError: city is not defined
// Because 'let' is block scoped.


// Question 5 – Nested Functions
// Create the following structure:

// function college() {
//     let department = "Computer";

//     function student() {
//         console.log(department);
//     }

//     student();
// }

// college();

function college() {
    let department = "Computer";

    function student() {
        let name = "Sandhya";
        console.log(department);
        console.log(name);
    }

    student();
}

college();


// Question 6 – Simple Closure
// Create a function named greeting().
// Declare a variable message = "Welcome to JavaScript" inside it.
// Return another function.
// The returned function should print the message.
// Call the returned function.

function greeting() {
    let message = "Welcome to JavaScript";

    return function () {
        console.log(message);
    };
}

const greet = greeting();
greet();


// Question 7 – Counter using Closure

// Create a function createCounter() that:

// Starts the counter from 100.
// Every time the returned function is called, increase the counter by 5.
// Print the updated value.
// Example Output:
// 105
// 110
// 115
// 120

function createCounter() {
    let counter = 100;

    return function () {
        counter += 5;
        console.log(counter);
    };
}

const counter = createCounter();

counter();
counter();
counter();
counter();


// Question 8 – Wallet using Closure
// Question 8 – Wallet using Closure

// Create a function wallet().
// Initial balance should be 5000.
// Return a function that accepts an amount.
// Deduct the amount from the balance.
// Print the remaining balance after every withdrawal.

// Example:

// wallet(1000);
// wallet(500);
// wallet(700);
// Question 8 – Wallet using Closure

function wallet() {
    let balance = 5000;

    return function (amount) {
        balance -= amount;
        console.log("Remaining Balance:", balance);
    };
}

const myWallet = wallet();

myWallet(1000);
myWallet(500);
myWallet(700);


// Question 9 – Password Checker using Closure

// Create a function createLogin().

// Inside it:

// Store a password "javascript123" in a private variable.
// Return an object containing:
// checkPassword(password)
// passwordLength(password)
// Question 9 – Password Checker using Closure


function createLogin() {
    let password = "javascript123";

    return {
        checkPassword(userPassword) {
            if (userPassword === password) {
                console.log("Login Successful");
            } else {
                console.log("Wrong Password");
            }
        },

        passwordLength() {
            console.log(password.length);
        }
    };
}

const login = createLogin();

login.checkPassword("javascript123");
login.checkPassword("hello123");

login.passwordLength();


// Question 10 – Independent Counters
// Create a function createCounter().
// Counter starts from 0.
// Return a function that increments and returns the counter.
// Create two counters:
// const counter1 = createCounter();
// const counter2 = createCounter();
// Call them as follows:
// counter1();
// counter1();
// counter2();
// counter1();
// counter2();
// Print all outputs and observe that both counters maintain separate values.
// Question 10 – Independent Counters

function createCounter2() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter2();
const counter2 = createCounter2();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());