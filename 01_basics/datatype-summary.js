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


//**********************************************************************


// Stack(Primitive),Heap(Non-Primitive)

let myYoutubename = "amitayoutube.com"
let anothername = myYoutubename
anothername="sim12youtube.come"
console.log(anothername);
console.log(myYoutubename)

let userOne = {
   email:"amitabiswal777@gmail.com",
   upi: "user@ybl"
}
let userTwo = userOne

userTwo.email="amita7877@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);




