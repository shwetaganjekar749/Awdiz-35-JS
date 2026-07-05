// Async and Await

// Example 1: Fetch API using Promise (.then())

async  function getProductsFromFakestoreapi(){
try{
fetch('https://fakestoreapi.com/products')
.then((response) =>  response.json())
.then((data) => console.log(data));




// Example 2: Fetch API using Async/Await

const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();
console.log(data,"data");
}catch(error){
    console.log(error);
}

}

getProductsFromFakestoreapi();











// Example 3
// Create Greeting using String Concatenation

let user = "Awdiz";

let greeting = "Hello user" + ' ' +user;

console.log(greeting,"greeting");



// Example 4
// Create Greeting using Template Literal

let user = "Awdiz";

let greeting = `Hello ${user}!`;

console.log(greeting,"greeting");



// Example 5
// Display Greeting with Multiple Variables

let user = "Awdiz";
let message = "welcome to Awdiz";
let greeting = `Hello ${user}! ${message}`;

console.log(greeting,"greeting");



// Example 6
// Display Dynamic Greeting for Different Users
let user = "Virat";
let message = "welcome to Awdiz";
let greeting = `Hello ${user}! ${message}`;

console.log(greeting,"greeting");






// Example 7

// Access Object Property
// Object (Dot Notation)

const userData ={
    name :"Virat",
    age:34,
    address:{city:"Delhi",state:"Delhi"}
                

};
console.log(userData.name,"name");




// Example 8
// Object Destructuring
// Extract only one property (age) from the object.

const userData ={
    name :"Virat",
    age:34,
    address:{city:"Delhi",state:"Delhi"}
                

};
const{age} = userData;
console.log(age,"age");



// Example 9
// Object Destructuring
// Extract multiple properties (age and name) at the same time.
const userData ={
    name :"Virat",
    age:34,
    address:{city:"Delhi",state:"Delhi"}
                

};
const{age,name} = userData;
console.log(age,"age");
console.log(name,"name");




// Example 10
// Object Destructuring (Alias/Renaming)
// Rename Property while Destructuring
const userData ={
    name :"Virat",
    age:34,
    address:{city:"Delhi",state:"Delhi"}
                

};
const{age,name:nickname} = userData;
console.log(age,"age");
console.log(nickname,"nickname");






// Example 11
// Nested Object (Dot Notation)

const userData ={
    name :"Virat",
    age:34,
    address:{city:"Delhi",state:"Delhi"}
                

};
console.log(userData.address.city,"city");




// Example 12
// // Array Destructuring
// Extract Array Elements
const users = ["virat","Rohit","Dhoni","Shami","Bumrah"];
const[a,b,c,d,e]=users;
console.log(a,"a");




// Example 13
// Array Destructuring
// Extract Array Elements with Meaningful Variable Names
const users = ["virat","Rohit","Dhoni","Shami","Bumrah"];

const[player1,player2,player3,player4,player5]=users;

console.log(player1,"player1");



// Example 14
// Spread Operator (Array Copy)

const array = [1,2,3];
const newArray = [...array];
console.log(newArray,"newArray");






// Merge  Two Arrays

const array = [1,2,3];
const newArray = [...array];
console.log(newArray,"newArray");



const array2 =[4,5,6];

const mergeArray =[...array,...array2];

console.log(mergeArray,"mergeArray");








// Spread Operator
// Add Elements to an Array

const array = [1,2,3];
const newArray = [...array,7,8,9];
console.log(newArray,"newArray");


// Merge Two Arrays
const array2 =[4,5,6];

const mergeArray =[...array,...array2];

console.log(mergeArray,"mergeArray");


// Copy and Extend an Object
const myobj={name:"virat"};
const newobj = {...myobj,age:34};
console.log(newobj,"newobj");









// Rest operator
// Calculate Sum of Numbers using Rest Operator and Reduce Method

function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0);
}
const result = sum(1,2,3,4,5);
console.log(result,"result");










// default parameters



// Function with Parameter

 function greet(name){
    console.log(`Hello ${name}`);
 }

greet("Virat");




// Function with Default Parameter

 function greet(name = "Guest"){
    console.log(`Hello ${name}`);
 }

greet();



// Function with Multiple Default Parameters

 function greet(name = "Guest",age=34){
    console.log(`Hello ${name}, you are ${age} years old`);
 }

greet();