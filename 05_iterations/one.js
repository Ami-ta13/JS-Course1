// for

for (let index = 0; index < 10 ; index++) {
    const element = index;
    if(element == 5){
        // console.log(" 5 is best number");
        
    }
    // console.log(element);
    
    
}
// console.log(element);

for (let index = 0; index <=10; index++) {
    // console.log(`outer loop value: ${index}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${index}`);
        // console.log(index + '*' + j + '=' + index*j);
        
        
        
        
    }
    
}
 let myArray = ["flash", "batman","superman"]
  // console.log(myArray.length);
  
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
    
}