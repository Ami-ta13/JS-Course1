// singleton
// object.create

//object literals

const mySym = Symbol("key1")


const  JsUser = {
    name: "amita",
    "full name": "amita biswal" ,
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "amitabiswal45@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email);

console.log( JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "amita@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "amita@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



