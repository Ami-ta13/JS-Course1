// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 33445678877262595858n



// Reference type(Non primitive)

//Array,Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]
 let myObj ={
    name:"amita",
    age:22,
}

const myFunction = function(){
   // console.log("Hello World");
    
}

console.log(typeof bigNumber)//bigint
console.log(typeof outsideTemp);//object
console.log(typeof myFunction);//function

