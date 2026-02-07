const myArr = [0,1,2,3,4,5,true,"anushka"]
const myArr1 = [0,1,2,3,4,5]

//can be diff type elements too
//array is an object
//js arrays are resizable
//array copy operations create shallow copy mtlb reference jayega seedhe
const myArr2 = new Array(0,1,2,3)
//ARRAY METHODS
myArr1.push(6)
myArr1.pop()
myArr1.unshift(9)//first mein aake add hoga
/*[
  9, 0, 1, 2,
  3, 4, 5
]
*/
myArr1.shift()//[ 0, 1, 2, 3, 4, 5 ]
console.log(myArr1.includes(10));//false
console.log(myArr1.indexOf(10));//-1

const newArr = myArr1.join()//string mein krdega array ko
console.log(newArr);//1,2,3,4,5

//slice,splice
console.log("A",myArr1);//ORIGINAL ARRAY
//A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr1.slice(1,3);
console.log(myn1);
//[ 1, 2 ]
console.log("B",myArr1);//SLICED ARRAY
//B [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr1.splice(1,3);
console.log(myn2);
//[ 1, 2, 3 ]
console.log("C",myArr1);//SPLICED ARRAY
//C [ 0, 4, 5 ] 
//SPLICE CHANGES THE OG ARRAY

