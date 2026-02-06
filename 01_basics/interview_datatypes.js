/*
data types 2 types => primitive and non primitive/reference type
ye division is basis pe hai ki kis trh se data ko memory mein rkhte hai aur kis trh se access krte hai
*/

/*
primitive : call by value mtlb inki copy di jaati hai jab call krte hai
String,Number,Boolean,null(empty),undefined(variable aur memory space declared hai pr value nhi pta kaunsi hai),Symbol, BigInt
*/

/*
Reference (Non primitive) => call by reference
Arrays,objects,functions
*/

/*
avaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id===id2);//false cuz unique hai dono

// +++++++++++++++++++++++++

//memory of two types => stack(primitve datatypes mein) and heap(non primitive mein)

let myYtname = "hello"
let anotherName = myYtname
anotherName = "bye"
console.log(myYtname);
console.log(anotherName)

let userOne = {
    email:"anushka@google.com",
    upi:"@yaml"
}
let userTwo = userOne
userTwo.email = "anushka@hotmail.com"
console.log(userOne.email);
console.log(userTwo.email);

