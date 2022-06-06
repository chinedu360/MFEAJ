// let str = "Toochukwu"

//METHOD 1
// function reverseStr(str) {
//     console.log(str)
//     let reversedStr;

//     let spliStr = str.split("")

//     reversedStr = spliStr.reverse()

//     return reversedStr.join(" ")
//     // return reversedStr
//     // console.log(spliStr)
//     //["h", "e", "l", "l", "o"]
// }

//Hello world
//dlrow olleh





let str = "Toochukwu"

 function reverseStr(str) {
     let reversedStr = ''; 
    //  let i = str.length - 1

     //this is how u reverse a string backwards
     for (let i = str.length - 1; i >= 0; i--) {
        //  console.log(str[i])
         reversedStr = reversedStr + str[i]
         //reversedStr += str[i]
     }
     return reversedStr
}

// console.log(reverseStr(str))

// u
// uw
// uwk
// uwku
// uwkuh
// uwkuhc
// uwkuhco
// uwkuhcoo
// uwkuhcoot


// As a software engineer, you'll often be asked to optimize programs. One of the easiest ways to do so is by the introduction of an additional data structure.

// Here's another classic problem along the same vein. We're provided a string like the following: "{[])}" that is inclusive of the following symbols:

// parentheses '()'
// brackets '[]', and
// curly braces '{}'.
// Can you write a function that will check if the symbol pairings in the string follow these below conditions?


// They are correctly ordered, meaning opening braces/symbols should come first. //{[(
// They contain the correct pairings, so every opening brace has a closing one. //}])
// They are both of the same kind in a pair, so an opening parenthesis does not close with a closing curly brace.
// For example, () is valid. (( is not. Similarly, {{[]}} is valid. [[}} is not.

// Constraints
// Length of the string <= 100000
// The string will only consist of characters like [,],{,},(,)
// Expected time complexity : O(n)
// Expected space complexity : O(n)

function validateSymbol(str) {
    console.log(str)
    let obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let bag = []
    for( let i = 0; i < str.length; i++){
        // console.log(str[i])
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            bag.push(str[i]);
            // console.log(bag)
        } else {
            if (bag[bag.length - 1] === obj[str[i]] ) {
                bag.pop()
            } else return false;
        }
        console.log(bag)
    }
    return bag.length === 0 ? true : false
}

//[]
//{{}}
//() 

let stri = '{[()]}'
let fn = validateSymbol(stri)

console.log(fn)

