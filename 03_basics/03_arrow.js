const user ={
    username: "Amita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function one(){
//     let username= "Amita"
//     console.log(this.username);
    
// }
// one()

// const one = function(){
//     let username= "Amita"
//      console.log(this.username);
    
// }


const one = () => {
     let username = "Amita"
     console.log(this);
}

//one()

 //const addTwo = (num1,num2) => num1 + num2

 //const addTwo = (num1,num2) => (num1 + num2)

 const addTwo =( num1,num2) => ({username: "Amita"})
 
 console.log(addTwo(3,4));

 // const myArray =[2,5,7,4,9]
 //myArray.forEach()
 
