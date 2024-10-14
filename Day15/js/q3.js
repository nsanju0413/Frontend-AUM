//3.Write a program that gets two numbers from a user and print all numbers between them.

let number1=prompt("Enter start number");
let number2=prompt("Enter end number");

if(number1>=number2)
{
    console.log("End Number should be greaterthan the start number");
}
else{
    for(i=number1;i<=number2;i++)
    {
        console.log(i);
    }
}



