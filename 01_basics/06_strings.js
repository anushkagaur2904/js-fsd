//2 ways to initialize string
const myName = "Anushka"
const name1 = new String("Anushka")
console.log(name1)//[String: 'Anushka']

console.log(myName[0]);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('u'));

const newString = myName.substring(0,3)
console.log(newString);//anu
//substring mein negative values de skte hai pr vo obey nhi krega...normie answer hi dega

const anotherString = myName.slice(3,-1)//negative values bhi de skte hai
console.log(anotherString);//shk
/*
A   N  U  S  H  K  A
0   1  2  3  4  5  6
-7 -6 -5 -4 -3 -2 -1
*/

const newStringOne = "      anushka     "
console.log(newStringOne.trim());//anushka
//trim works on whitespace and /n

const url = "anushka@%20gmail.com"
console.log(url.replace('%20','-'))//anushka@-gmail.com
console.log(url.includes('anushka'));//true

const newName = "anushka-gaur-20"
console.log(newName.split('-'));
//output mein array aajayega
//[ 'anushka', 'gaur', '20' ]

