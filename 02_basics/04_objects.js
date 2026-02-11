//constructor yaani ki singleton
const tinderUser = new Object()//ye singleton
console.log(tinderUser);//{}

const tinderUser1 = {}//ye singleton nhi
console.log(tinderUser1);//{}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "sodne@gmail.com",
    fullname:{
        userfullname:{
            firstname:"A",
            lastname:"C"
        }
    }
}
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {obj1,obj2}
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//{} acts as target
const obj5 = Object.assign(obj1,obj2)
console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//isme target hai obj1

const obj6 = {...obj1, ...obj2}//spread operator widely used

//database se data mostly array of objects aata hai
const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
]
users[1].email
console.log(Object.keys(tinderUser));//array milegi output mein
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
//[ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser));//har ek key-value pair ko array bana diya hai
//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

//++++++OBJECT DE-STRUCTURE AND JSON API+++++++++++
const course = {
    courseName:"js-fsd",
    price:"999",
    courseInstructor:"Hitesh"
}
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor:instructor}=course
console.log(instructor);
//{} dikhe mtlb de structuring
//arrays bhi de structure hoti hai
//APIs in json format and can be array format too