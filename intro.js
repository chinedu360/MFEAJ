//introduction to Javascript


//Comments
//function name(params) {
    
//}

//My name is Mr whoisthboss....
//whenever u see comments in your code you know they explain the javascript code to you!!!!!!!!

//Variable
let x; //we just declared a variable named x...

//values can be assigned to a variable with the = sign
x = 10; //numbers
x = 0.0003 //numbers can be integers or reals
x = "hello world!!" //string of text in qoutation marks
x = 'javascript is awesome!!!' //strings can also use double qoutation marks
x = true; //boolean
x = false; //boolean
x = null; //Null means there is no value
x = undefined; //undefined is anothe special value like Null

//Objects
//javascripts most important datatype is an object
//an object is a collection of name/value pairs
let book = { //objects are enclosed in curly brackets
    topic: "javascript", //the property "topic" has a value of "javascript"
    page: 45, //the property "page" has a value of 45
    isRead: true, //the property "isRead" has a value of true
}//the curly brackkets marks the end of the object

//Accessing the properties of an object
// we can acess the properties of an object with . or []
let obj = book.topic;
let obj2 = book['page']

//creating new properties by assignment
book.author = 'mike tyson'
book['numPages'] = 1099
book.contents = {
    ch01: {
        sec1: "The Book is Mightier than the pen!!!"
    }
}
// console.log(obj)

//conditionally accessing properties with ?.
//console.log(book.contents?.ch01?.sec1)

//github, arrays
let primes = [2, 3, 5, 7]

primes[0]
primes.length
primes[primes.length - 1]

//adding new element in an array
primes[4] = 1000000000000000 //adding a new element in an array by assignment
primes[4] = 121 //altering the existing element in an array
let empty = [] //an array with no element, it ahs a length of 0

//Arrays and objects can hold other arrarys and object.
let points = [
    {x: 0, y: 0}, //an array with 2 element 
    {x: 1, y:1} //where two are objects
];

// console.log(points[0])

let data = {
    trail1: [[1,2], [3,4]],
    trail2: [[2,3], [4,5]],
}

// console.log(data.trail1)
//console.log(empty.length)

// console.log(primes.length)

//operators in javascript
let operators;

operators = 3 + 2
operators = 3 - 2
operators = 3 * 2 
operators = 3 / 2

operators = points[1].x - points[0].x
operators = "3" + "2" //the + sign adds the number while it concatenates a string

// console.log(operators)
//Short hand arithmetic operators
let count = 2;

count++ //increments the variable
count-- //decrements the variable
count += 2 //adds the number 2 and its the same as "count = count + 2"
count *= 4 //multiplies the number 4 its the same as "count = count * 4"
console.log(count)

//Equality and relational operators test whether two values are equal
//unequal. less than, greater than, equal to, etc 
//They all evaluate to true or false

// let a = 2;
// let b = 3;
//The below is a short form of the above.
let a = 2, b = 3

let equality;

equality = a === b; // false: equality
equality = a !== b // true: inequality
equality = a < b // true: less than
equality = a <= b // true: less than or equal
equality = a > b // false: greater than
equality = a >= b // false: greater than or equal
equality = "two" === "three" // false: the two strings are different
equality = "two" > "three" // true: "tw" is alphabetically greater than "th"
equality = false === (a > b) //true: false is equal to false

//logical operators combine or invert a boolean value
equality = (a === 2) && (b === 3) //true: both comparison are true. && is AND
equality = (a > 3) || (b < 3) //false: niether of the comparisons are true. || is OR
equality = !(a === b) //true: inverts a boolen value.

//functions


console.log(equality)

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.
//console.log(typeof(primes))



// console.log(typeof book)
// console.log(x)