let score = 33
console.log(typeof score)//number
console.log(typeof(score))//dono tareeke same hai => number

let score1 = "33"
console.log(typeof score1)//string
let valueInNumber = Number(score1)
console.log(typeof valueInNumber)//number

let score2 = "33abc"
let valueInNumber1 = Number(score2)//string
console.log(typeof valueInNumber1)//number
console.log(valueInNumber1)//NaN

let score3 = null
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2)//number
console.log(valueInNumber2)//0

let score4 = true
let valueInNumber3 = Number(score4)
console.log(typeof valueInNumber3)//number
console.log(valueInNumber3)//1

let score5 = "anushka"
let valueInNumber4 = Number(score5)
console.log(typeof valueInNumber4)//number
console.log(valueInNumber4)//NaN

 // "33" => 33
 // "33abc" => Nan but typeof is number
 // true => 1

let isLoggedin = 1
let booleanisLoggedin = Boolean(isLoggedin)
console.log(booleanisLoggedin);//true

let isLoggedin1 = ""
let booleanisLoggedin1 = Boolean(isLoggedin1)
console.log(booleanisLoggedin1);//false

let isLoggedin2 = "anushka"
let booleanisLoggedin2 = Boolean(isLoggedin2)
console.log(booleanisLoggedin2);//true

// 1=>true
// 0 => false
// "" => false
// "anushka" =>true

let someNum = 33
let stringNum = String(someNum)
console.log(typeof stringNum);//string
console.log(stringNum);//33
