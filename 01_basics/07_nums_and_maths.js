const score = 400
console.log(score);//400

const score1 = new Number(100)
console.log(score1);//[Number: 100]

console.log(score.toString());
//ab iske pass additional properties aa skti hai

const bal = 101
console.log(bal.toFixed(2));//101.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));//returns a string 23.9

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));//124

const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3));//1.12e+3
//priority decimal se pehle mil rhi

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000
console.log(hundreds.toLocaleString());//1,000,000

// +++++++++MATHS+++++++++++++
//math library di hui hai...ye bhi ek object hai 
console.log(Math.abs(-4));//4
console.log(Math.round(4.3));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.6))//4
console.log(Math.random());//value between 0 and 1(decimal bhi aa skti hai)

const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min);
//+1 isliye ki 0 na aaye
//+min isliye ki 10 min value rhe