// Optional Chaining
var myData = {address :{city :"Vashi"}}

console.log(myData?.address)




// Nullish Coalescing Operator

var data=null;

var result=data??"Hi";
console.log(result,"result")






// Event Loop

console.log("start");

setTimeout(()=>{
    console.log("Timeout 1");  
},1000);

Promise.resolve().then(()=>{
    console.log("promise")
});

setTimeout(()=>{
    console.log("Timeout 5");  
},5000);

console.log("End");







// DSA Question

// Check if String is Palindrome or not

var palindromeStr ="abba";
var notpalindromeStr ="abwxba";


let str ="abcdwsdcba"

// first index a == a last index true
// second index b == b  second last index true
// third index c == c  third last index true
// fourth index d == d  fourth last index true
// fifth index w == s  fifth last index false


// if(str[0] == str[str.length-1]){ a == a
//     true
// }


// if(str[1] == str[str.length-2]) { b == b
//     true
// }


// if(str[2] == str[str.length-3]) { c == 
//     true
// }


// if(str[3] == str[str.length-4]) { d == d
//     true
// }


// if(str[4] == str[str.length-5]) { w == s
//     false
// }






// if(str[0] == str[str.length-1 - 0]){ a == a
//     true
// }


// if(str[1] == str[str.length-1 - 1]) { b == b
//     true
// }


// if(str[2] == str[str.length-1 -2]) { c == 
//     true
// }


// if(str[3] == str[str.length-1 -3]) { d == d
//     true
// }


// if(str[4] == str[str.length-1 -4]) { w == s
//     false
// }



// if(str[i] ==str[str.length-1-i]) {
// }



function  checkStrlsPalindrome(str){

for(let i=0; i<str.length;i++){
    console.log(i);
}

if(str[i] ==str[str.length-1-i]) {
 }



}

checkStrlsPalindrome("abcdwsdcba");





function  checkStrlsPalindrome(str){

for(let i=0; i<str.length;i++){
    // console.log(i);
    console.log(str[i],str[str.length-1-i])
}

// if(str[i] ==str[str.length-1-i]) {
//  }



}

checkStrlsPalindrome("abcdwsdcba");





function  checkStrlsPalindrome(str){

let middleIndex = (str.length - 1) / 2;

    for (let i = 0; i < middleIndex; i++) {
// console.log(i);
        console.log(str[i], str[str.length - 1 - i]);

// if(str[i] ==str[str.length-1-i]) {
//  }


    }
}

checkStrlsPalindrome("abcdwsdcba");







function  checkStrlsPalindrome(str){

let middleIndex = (str.length - 1) / 2;

    for (let i = 0; i < middleIndex; i++) {
// console.log(i);
        console.log(str[i], str[str.length - 1 - i]);

// if(str[i] ==str[str.length-1-i]) {
//  }


    }
}

checkStrlsPalindrome("abcdwhsdcba");









function  checkStrlsPalindrome(str){

let middleIndex = (str.length - 1) / 2;

    for (let i = 0; i < middleIndex; i++) {
// console.log(i);
        console.log(str[i], str[str.length - 1 - i]);

// if(str[i] ==str[str.length-1-i]) {
//  }


    }
}

checkStrlsPalindrome("abcdw34sdcba");






//  palindrome 
function checkStrIsPalindrome(str) {

    let middleIndex = Math.floor(str.length / 2);

    for (let i = 0; i < middleIndex; i++) {
// console.log(i);
        
        console.log(str[i], str[str.length - 1 - i]);

        if (str[i] != str[str.length - 1 - i]) {
            return "Not a palindrome";
        }
    }

    return "Its a palindrome";
}

const result = checkStrIsPalindrome("abba");
console.log(result,"result");





// Not a palindrome 
function checkStrIsPalindrome(str) {

    let middleIndex = Math.floor(str.length / 2);

    for (let i = 0; i < middleIndex; i++) {
// console.log(i);
        
        console.log(str[i], str[str.length - 1 - i]);

        if (str[i] != str[str.length - 1 - i]) {
            return "Not a palindrome";
        }
    }

    return "Its a palindrome";
}

const result = checkStrIsPalindrome("abccda");
console.log(result,"result");