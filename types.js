//In javascript we hav the primitive types and object types.

// Primitive types
// 1. Numbers 
// 2. strings
// 3. boolens
// 4. null
// 5. undefined
// 6. symbols

//Examples of primitive types
let sentence = "Obi is a boy!"
let bool = true;

// console.log(typeof(bool))

// Object types
// so anything thats not a number, string, boolean, null, undefined or symbols is an object type!

//The set object
//Map objects
//The RegEx object for matching
//The Error object


let obj = {
    name: "chinedu"
};

let arr = [12, 50, 40, 70, 60, 90, 80, 100];

let sortedArr = arr.sort(function(a, b) {return a - b}) //(a, b) => a - b

// console.log(sortedArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// console.log(fruits)


//Arithmetics in javaScripts
//  Math Object
let random = Math.random() * 100 //* 6 // pseudo random number "x" where 0 <= x < 1.0
// console.log(random)
let round = Math.ceil(random) //round up to an interger
Math.round(.7) //1.0: round to the nearest integer
Math.sqrt(3) //3**0.5: the square root of 3
Math.floor(.7) //0.0: round down to an integer

let div = document.getElementsByClassName("random")
div[0].innerHTML = round
// console.log(round)

//The Date Object
let time = new Date()

let ms = time.toISOString() //converts to string in standard format
let year = time.getFullYear() //gets the year
let month = time.getMonth() //gets the month
let day = time.getDate() //gets the day

// console.log(day) //s

// `obi is a boy ${day.getFullYear()}
// "hello" + day.getFullYear() + "thank for being an amazing year so far"
