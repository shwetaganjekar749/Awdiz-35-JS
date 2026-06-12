/* Data types:-

1.String
2.Number
3.Boolean
4.Null
5.Undefined
*/

// 1.String //

let name = "Shweta Ganjekar";
let email = "shweta@gmial.com";
let password = "pass@6745";

console.log(name, "name");
console.log(email, "email");
console.log(password, "password");

console.log(typeof name);
console.log(typeof email);
console.log(typeof password);

// 2.Number //

let age = 26;
console.log(age, "age");
console.log(typeof age);

const phone_Number = "6754367890";
console.log(phone_Number, "phone_Number");
console.log(typeof phone_Number);

// 3.Boolean //

const value_1 = false;
const value_2 = true;
console.log(value_1, "value_1");
console.log(typeof value_1);

// 4.4.Null //

var userName;
console.log(userName, "userName");
console.log(typeof userName);

var userData = null;
console.log(userData, "userData");
console.log(typeof userData);

// 5.Undefined //

let a = 10;
console.log(a, "a");
let b = a;
console.log(b, "b");
b = 20;
console.log(a, "a");
console.log(b, "b");

// Arithmetic Operators //

console.log(10 + 5); // Addition
console.log(5 - 10); // Subtraction
console.log(10 * 5); // Multiplication
console.log(30 / 2); // Division
//             6
// console.log(30 % 2); 0

//            ___  17- Quotient
//         2 /  34
//              34
//               0  - remainder - %

//               1 - odd
//               0 - even

console.log(10 % 2); // 0 - even
console.log(11 % 2); // 1 - odd
console.log(12 % 2); // 0 - even
console.log(13 % 2); // 1 - odd
console.log(14 % 2); // 0 - even
console.log(15 % 2); // 1 - odd

var number1 = 10;
var number2 = "10";
// it check only data not data type
console.log(number1 == number2); // 15

// // it check data and data type both
console.log(number1 === number2); // false

var left = 10;
var right = 20;

console.log(left < right);
console.log(left > right);
console.log(left == right);
console.log(left <= right);
console.log(left >= right);
console.log(left != right);