function addTwoNumbers(number1,number2){//ye hai parameters
    console.log(number1+number2)
}
addTwoNumbers();//NaN cuz no arguement given
addTwoNumbers(3,4)//7
addTwoNumbers(3,"4")//34
addTwoNumbers(3,"a")//3a
addTwoNumbers(3,null)//3

const result = addTwoNumbers(3,5)
console.log("Result" ,result)//Result: undefined cuz function ne kuch return hi nhi kiya

function addTwoNumbers(number1,number2){//ye hai parameters
    let result = number1+number2
    return result
}
const result1 = addTwoNumbers(3,5)
console.log("Result" ,result1)//Result:8

function addTwoNumbers(number1,number2){//ye hai parameters
    let result = number1+number2
    return result
    console.log("Anushka")//unreachable code
}
const result2 = addTwoNumbers(3,5)
console.log("Result" ,result2)//Result: 8

function loginUserMessage(username){
    return  `${username} just logged in`
}
loginUserMessage("Anushka")//kuch print nhi hoga cuz console log nhi kiya
console.log(loginUserMessage("Anushka"))
console.log(loginUserMessage())//undefined just logged in
console.log(loginUserMessage(""))// just logged in
/*
if("") false value 
if(undefined) false value
if(!username) mtlb if(username === undefined)
*/

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))//200

function calculateCartPrice(...num1){//yaha pe ... hai rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500))//[200,400,500]

function calculateCartPrice(val1,val2,...num1){//yaha pe ... hai rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))//[500,2000]

const user = {
    username:"Anushka",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject({
    username:"sam",
    price:399
})
handleObject(user)

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}