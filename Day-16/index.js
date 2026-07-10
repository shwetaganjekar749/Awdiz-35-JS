// DSA Question

// let numbers=[7,4,5,6]


// left < right
// index and element

// 0 < 1  true
// 7 < 4  false




// let numbers=[7,9,5,6]

// left < right
// index and element

// 0 < 1 true
// 7 < 9 true
// 9 - 7 -> 2

// 2 < 3 true
// 5 < 6 true
// 6 - 5 -> 1


// Step 1-print all pairs

 let numbers=[7,9,5,6]

function findMaxDiff(array){
for(let i= 0; i< array.length; i++)
console.log(i,array[i])

}

findMaxDiff(numbers)





let numbers=[7,9,5,6]

function findMaxDiff(array){
for(let i= 0; i< array.length; i++){

console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
 console.log(j,array[j],"j")
}
}
}
findMaxDiff(numbers)


// Outer Loop Iterations
// 1st Iteration
// i = 0 
// i < array.length => 0 < 4  true  (loop executes)
// array[0]  => 7
// Output: 0 7 i


// 2nd Iteration
// i++
// i = 1
// i < array.length => 1 < 4 true (loop executes)
// array[1] => 9
// Output: 1 9 i


// 3rd Iteration
// i++
// i = 2
// i < array.length => 2 < 4 true (loop executes)
// array[2] => 5
// Output: 2 5 i


// 4th Iteration
// i++
// i = 3
// i < array.length => 3 < 4  true (loop executes)
// array[3] => 6
// Output: 3 6 i


// 5th Iteration
// i++
// i = 4
// i < array.length => 4 < 4 false  (Loop Stops)







// Outer Iteration 1
// i = 0
// Selected Element:
// array[0] = 7

// inner loop starts
// j = i + 1
// j = 0 + 1 
// j = 1

// Inner Iteration 1
// j = 1
// j < array.length => 1 < 4  true (loop executes)
// array[1] => 9
// Output:
// 1 9 j

// Compare:
// array[0] = 7
// array[1] = 9
// 7 and 9


// Inner Iteration 2
// j++
// j = 2
// j < array.length => 2 < 4  true (loop executes)
// array[2] = 5
// Output: 2 5 j

// Compare:
// array[0] = 7
// array[2] = 5

// 7 and 5


// Inner Iteration 3
// j++
// j = 3
// j < array.length => 3 < 4   true (loop executes)
// array[3] = 6
// Output: 3 6 j

// Compare:
// array[0] = 7
// array[3] = 6
// 7 and 6

// Inner Iteration 4

// j++
// j = 4
// j < array.length =>  4 < 4  false (loop stop)
// Inner Loop Stops








// Outer Iteration 2

// i++
// i = 1
// i < array.length => 1 < 4 true (loop executes)

// Selected Element:
// array[1] = 9

// Inner Loop Starts

// j = i + 1
// j = 1 + 1
// j = 2


// Inner Iteration 1
// j = 2
// j < array.length
// 2 < 4 =>  true (loop executes)
// array[2] = 5
// Output: 2 5 j

// Compare:
// array[1] = 9
// array[2] = 5
// 9 and 5


// Inner Iteration 2
// j++
// j = 3
// j < array.length => 3 < 4 true (loop executes)
// array[3] = 6
// Output: 3 6 j

// Compare:
// array[1] = 9
// array[3] = 6
// 9 and 6


// Inner Iteration 3
// j++
// j = 4
// j < array.length => 4 < 4 false (loop stops)
// Inner Loop Stops








// Outer Iteration 3
// i++
// i = 2
// i < array.length => 2 < 4 true (loop executes)

// Selected Element:
// array[2] = 5

// Inner Loop Starts

// j = i + 1
// j = 2 + 1
// j = 3


// Inner Iteration 1
// j = 3
// j < array.length => 3 < 4 true (loop executes)
// array[3] = 6
// Output : 3 6 j

// Compare:
// array[2] = 5
// array[3] = 6
// 5 and 6


// Inner Iteration 2
// j++
// j = 4
// j < array.length => 4 < 4 false (loop stops)
// Inner Loop Stops






// Outer Iteration 4
// i++
// i = 3
// i < array.length => 3 < 4 true (loop executes)

// Selected Element:
// array[3] = 6

// Inner Loop Starts
// j = i + 1
// j = 3 + 1
// j = 4


// Inner Iteration 1
// j = 4
// j < array.length => 4 < 4 false (loop does not execute)
// No Comparison
// Inner Loop Stops



let numbers=[7,9,5,6]

function findMaxDiff(array){
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
 console.log(array[i],array[j])
}
}
}
findMaxDiff(numbers)








let numbers=[7,9,5,6]

function findMaxDiff(array){
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
 console.log(i,j,array[i],array[j])
}
}
}
findMaxDiff(numbers)







let numbers=[7,9,5,6]

function findMaxDiff(array){
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
//  console.log(i,j,array[i],array[j]) 

 if(array[i] < array[j]){
 console.log(array[j] - array[i])
      }
    }
  }
}
findMaxDiff(numbers)






let numbers=[7,9,5,6]

function findMaxDiff(array){
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
//  console.log(i,j,array[i],array[j]) 

 if(array[i] < array[j]){
 console.log(array[j], "-" ,array[i], "=" ,array[j]- array[i])
      }
    }
  }
}
findMaxDiff(numbers)







let numbers=[7,9,5,6]

function findMaxDiff(array){
    let maxDiff = -1;
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
//  console.log(i,j,array[i],array[j]) 

 if(array[i] < array[j]){
    let currentDiff = array[j] -array[i];
    if (currentDiff > maxDiff){
        maxDiff = currentDiff;
    }
 console.log(array[j], "-" ,array[i], "=" ,array[j]- array[i])
      }
    }
  }
  return maxDiff;
}

const output = findMaxDiff(numbers);
console.log(output,"output");




let numbers=[7,9,5,6,12]

function findMaxDiff(array){
    let maxDiff = -1;
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
//  console.log(i,j,array[i],array[j]) 

 if(array[i] < array[j]){
    let currentDiff = array[j] -array[i];
    if (currentDiff > maxDiff){
        maxDiff = currentDiff;
    }
 console.log(array[j], "-" ,array[i], "=" ,array[j]- array[i])
      }
    }
  }
  return maxDiff;
}

const output = findMaxDiff(numbers);
console.log(output,"output");








let numbers=[7,9,5,6,12,3,4,23]

function findMaxDiff(array){
    let maxDiff = -1;
for(let i= 0; i< array.length; i++){

// console.log(i,array[i],"i")
for(let j = i + 1 ; j< array.length;j++) {
//  console.log(j,array[j],"j")
//  console.log(i,j,array[i],array[j]) 

 if(array[i] < array[j]){
    let currentDiff = array[j] -array[i];
    if (currentDiff > maxDiff){
        maxDiff = currentDiff;
    }
//  console.log(array[j], "-" ,array[i], "=" ,array[j]- array[i])
      }
    }
  }
  return maxDiff;
}

const output = findMaxDiff(numbers);
console.log(output,"output");








// Debounce

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const searchProduct = debounce((text) => {
  console.log("Loading...", text);
}, 1000);

searchProduct("T");
searchProduct("Ts");
searchProduct("Tsh");
searchProduct("Tshi");
searchProduct("Tshir");
searchProduct("Tshirt");




// scroll

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const currentTime = Date.now();
    console.log(currentTime, "currentTime",lastCall, "lastCall");
    console.log(currentTime - lastCall,"currentTime - lastCall")
    console.log(delay,"delay")
    if (currentTime - lastCall >= delay) {
      lastCall = currentTime;
      fn(...args);
    }
  };
}

const handleScroll = throttle(() => {
    console.log("Api call")
}, 5000);

handleScroll()
handleScroll()
handleScroll()
handleScroll()
window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", handleScroll);