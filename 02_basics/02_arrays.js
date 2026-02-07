const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//arrays merge nhi hui balki dusri array ek data banke aayi hai
console.log(marvel_heros[3][1]);//flash
const new_heros = marvel_heros.concat(dc_heros)
console.log(new_heros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator is mostly used
const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray1 = array1.flat(Infinity)
console.log(realArray1);
//brackets ke andr depth likhni hai ..infinity mtlb jitni depth ho utni krlo
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/
console.log(Array.isArray("Anushka"));//false
console.log(Array.from("Anushka"));
/*
[
  'A', 'n', 'u',
  's', 'h', 'k',
  'a'
]
*/
console.log(Array.from({name:"Anushka"}));//[] btana pdhega ki kiska array banana hai, key ka ya value ka

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//[100,200,300]

