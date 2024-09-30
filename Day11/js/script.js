// let  a=10;
// let b=20;
//
// let c=a+b;
//
// alert("The Value of C is: "+c);


const subtotal= 200;
const taxPercentage = .05;
const taxAmount= subtotal*taxPercentage;
let total=(subtotal+taxAmount).toFixed(2);

console.log("Subtotal = "+subtotal+"\n"+ "Total = "+ total);
