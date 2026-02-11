//objects can be made thorugh literals and constructor
/*
literal ki trh banega toh singleton nhi banega
aur constructor ki trh banega toh singleton banega
*/
//Constructor method
Object.create

//Object Literals
const mySym = Symbol("key1")
const mySym1 = Symbol("key2")
//how to use symbol as key??
const JsUser = {
    name:"Anushka",
    "full name":"Anushka Gaur",
    mySym:"mykey1",
    [mySym1]:"mykey2",//this is how symbol is used
    age:21,
    location:"Bengaluru",
    email:"anushka@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);//string...symbol nhi
console.log(JsUser[mySym1]);//aise bulate hai symbol ko

JsUser.email = "ahhaha@gmail.com"//value changed
//Object.freeze(JsUser)//ab change nhi ho skta object

//function ko aaram se variable jaise treat krlo
JsUser.greeting = function(){
    console.log("HELLO JS USER");
    
}
console.log(JsUser.greeting());
//HELLO JS USER
//undefined -> iska reason baad mein
console.log(JsUser.greeting);//[Function (anonymous)]
//mtlb function execute nhi hua bas reference aaya hai
