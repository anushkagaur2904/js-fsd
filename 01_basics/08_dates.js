//DATES IS AN OBJECT
let myDate = new Date()
console.log(myDate);
//2026-02-07T08:42:02.009Z
console.log(myDate.toString());
//Sat Feb 07 2026 14:12:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
//Sat Feb 07 2026
console.log(myDate.toLocaleString());
//2/7/2026, 2:12:02 PM

//create own date
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toString());
//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());
//1/23/2023, 5:03:00 AM
let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()//abhi ki date 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//miliseconds mein value milti hai 
//hotel app,booking app banane ke kaam aati hai

//convert ms to seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());//0 mtlb january
console.log(newDate.getDay());//1 mtlb monday

//`${}` ye hai string interpolation

newDate.toLocaleString('default',{
    weekday:"long"
})