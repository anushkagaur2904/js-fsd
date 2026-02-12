//{} curly braces hi scope hai...objects vala curly brace alag hai
var c =300
//ye hai global scope
if(true){
    let a =10
    const b =20
    var c = 30
    d=15
}// ye hai block scope
//var ko jyada use nhi krna cuz vo scope bound hai hi nhi
console.log(a);//a not defined
console.log(b);//b not defined
console.log(c);//30
console.log(d)//15

//ALAG EXAMPLE
let a=300
if(true){
    let a =10
    const b =20
    console.log(a);//10
    
}
console.log(a);//300

//Windows ke console ka scope alag hai aur node ka scope alag hai


//NESTED SCOPES
function one(){
    const username="Anushka"
    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    console.log(website);//website is not defined
    two()//Anushka
}
one()//website not defined
//nested function mein child function,parent ke variable ko access kr paate hai

if(true){
    const username="Anushka"
    if(username==="Anushka"){
        const website=" youtube"
        console.log(username+website);//Anushka youtube
    }
    console.log(website);//access nhi hoga
}
console.log(username);//nahi hoga access

//+++++++INTERESTING EXAMPLE++++++++++
addOne(5)//6
function addOne(num){
    return num+1
}

addTwo(5)//Cannot access before initialization
const addTwo = function(num){
    return num+2
}//yaha function ko declaration se pehle variable mein hold kr diya
//isi concept ko js hoisting kehte hai
