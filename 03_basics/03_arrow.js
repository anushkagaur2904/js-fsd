const user ={
    username:"anushka",
    price:999,
    welcomeMessage: function(){//method
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//whenever u want to refer current context, write this keyword
//uss scope ke andr jitne bhi variables hai unko access krne ke liye
user.welcomeMessage()
/*
anushka, welcome to website
{
  username: 'anushka',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username="sam"//context changed
user.welcomeMessage()
/*
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
console.log(this);//{}
/* 
node environment ke andr this refer kr rha hai ek empty object ko cuz global ke andr context hi nhi hai
PAR
browser kr andr alag output hai Window object
yaani browser ke andr global object hai window object 
*/

function chai(){
    let username="anushka"
    console.log(this);//badha sa kuch output
    console.log(this.username);//undefined
}
chai()
//this keyword bas object ke andr kaam krta hai,function ke andr nhi

const chai = function(){
    let username="anushka"
    console.log(this);//badha sa kuch output
    console.log(this.username);//undefined
}
chai()

//++++++++++ARROW FUNCTION++++++++++

const chai = () => {
    let username="anushka"
    console.log(this);//{}
    console.log(this.username);//undefined
}
chai()

const addTwo = (num1,num2) => {
    return num1+num2
}//explicit return 

const addThree = (num1,num2) => num1+num2 //implicit return
const addFour = (num1,num2) => (num1+num2)
//{} curly braces mein return likho
//() mein return ki need nhi

//how to return objects using arrow function
const obj = (num1,num2) => {username:"Anushka"}
console.log(obj(3,4));//undefined

const obj1 = (num1,num2) => ({username:"Anushka"})
console.log(obj1(3,4));//{username:'Anushka'}

