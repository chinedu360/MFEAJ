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

console.log(reverseStr(str))

// u
// uw
// uwk
// uwku
// uwkuh
// uwkuhc
// uwkuhco
// uwkuhcoo
// uwkuhcoot