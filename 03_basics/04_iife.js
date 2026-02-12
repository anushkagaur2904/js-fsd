//Immediately Invoked Function Expression
/* 
Reasons => 
1. global scope se pollution nhi chahiye toh alag scope bana lete hai
2. immediately execute krna
*/

function chai(){
    console.log(`DB CONNECTED`);    
}
chai()//DB CONNECTED

(function chai(){
    console.log(`DB CONNECTED`);    
})()//DB CONNECTED

//first () hai function ki definition, dusra () hai execution call

( ()=> {
    console.log(DB CONNECTED TWO);
    
} )()//error

( function aurcode() {//named IIFEE
    console.log(DB CONNECTED TWO);
    
} )()//error
//IIFE ko pta nhi hota ki context kaha rokna hai toh ; lagao

( (name)=> {//unnamed IIFE
    console.log(DB CONNECTED TWO ${name});
    
} )('Anushka');