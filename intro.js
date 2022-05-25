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
// console.log(count)

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
// console.log(equality)


//functions
//functions are parameterized blocks of javascript of javascript code that you can define once and invoke over and over again

function plus1(h) { 
    // alert(h)//define a function called "plus1" with a parameter "h"
    return h + 1; //return a value larger than what we passed in
} //functions are enclosed in curly brackets

plus1(4) //the invocation returns 100 + 1

//function are values and can be assigned to variables
let multiplies = function(h) {
    return h * h // compute the functions values
}

// console.log(multiplies(plus1(4))) //

//Arrow functions
const plus2 = h => h + 2
const multiplies2 = h => h * 2

// console.log(plus2(4))
// console.log(multiplies2(plus2(4)))

//when a function is in an object its called a method
let anEmtpyArr = [] //create an empty array

anEmtpyArr.push(10,20,30,40) //adds element to an array
// anEmtpyArr.reverse() //reveerses the element in an array
anEmtpyArr.pop()//removes element in an array

let pointss = [
    {x: 0, y: 0}, //an array with 2 element 
    {x: 1, y:1}, //where two are objects
];
pointss[0]
pointss[1]

points.chinedu = function() { //defining a method to compute the distance btw points   
    let p1 = this[0] //first element of the array we are invoked once
    let p2 = this[1] // second element of the this object
    let a = p2.x - p1.x //difference in the x coordinates
    console.log(p2.x - p1.x)
    let b = p2.y - p1.y //difference in the y coordinates
    return Math.sqrt(a * a + b * b) //Th pythagorean theorem Math.sqrt() computes the square root
} //bodmas

// console.log(points)
// console.log(points.chinedu()) 

//javascript control statement 
//javascript statement includes conditionals and loops
function abs(x) { //this is a function to compute absolute values
    if (x >= 0) { //this is the if statement...
        return x //run this part of the code if the statement is true
    } // this is the end of the if clause...
    else { //the optional else clause runs if 
        return -x //the condition is false
    } 
}

// console.log(abs(10)) //console]

function sum(arr) {
    let sum = 0;

    for (const x of arr) {
        sum += x
    }
    return sum
}

// let arr = [1, 2, 3, 4, 5]
// console.log(sum(arr))

function factorial(n) { //A function that computes factorials

    // console.log(n)
    let product = 1; //start with a product 1

    while(n > 1){ //repeat statement in {} while expression in () is true
        console.log(n)
        product *= n; //this is a short for of multipilication "product = product * n"
        n--; //decrementor and also a shortcut for saying "n = n - 1"
    } //end of the while loop

    return product; //return the product
}
// console.log(factorial(4))

function factorial2(n){ // another version using a different loop
    let i, product = 1 //starting with 1

    for(i = 2; i <= n; i++) {//automatically increase "i" from 2 to "n"
        product *= i //do  this each time. 
    }
    return product // return the factorial
}

// console.log(factorial2(5))

//Object Oriented Programming

class Car {
    constructor(ownersName, carName, color, doors, price, yearOfProd){
        this.ownersName = ownersName;
        this.carName = carName;
        this.color = color;
        this.doors = doors;
        this.price = price;
        this.yearOfProd = yearOfProd;
    }

    carInfo() {
        console.log(this.yearOfProd, this.ownersName)
        alert("My name is " + this.ownersName  + " i have a " + this.carName + " that was made in " + this.yearOfProd + " has" + this.doors + " and a " + this.color + " color" + " and i bought it for " + this.price + " Million Naira")
    }
}

let brandNew = new Car("chinedu", "Toyota corolla", "black", 4, 1.8, 2018)

console.log(brandNew.carInfo())

class Woman {
    constructor(name, age, isMarried, hasJob) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.hasJob = hasJob;
    }

   
    info() {
        // console.log(this.isMarried, this.name)
        console.log(`${this.name} is ${this.age} old, and ${this.isMarried ? 'already married with 3 kids' : 'yet to be married, God bless her soul'} and she ${this.hasJob ? 'has an amazing job' : 'doesn\'t have a job yet, this NYSC thing nah major scam...she still dey find work sha...🥲'}`)
    }
}

let superWoman = new Woman("sophia", 26, true, false)
let jobberWoman = new Woman("sandra", 35, false, true)

console.log(superWoman.info())
console.log(jobberWoman.info())


class PointsOfGeo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y) //Bodmas
    }
}

let geo = new PointsOfGeo(1, 1)


console.log(geo.distance())


// console.log(anEmtpyArr)


//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.
//console.log(typeof(primes))



// console.log(typeof book)
// console.log(x)