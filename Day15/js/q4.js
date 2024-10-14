//Write a program that gets 5 numbers from a user and prints their max and min.

const num=[];

for(i=0;i<5;i++)
{
    num[i]=prompt("Enter a number");
}

const sorted=num.sort();

console.log("Min is :"+sorted[0])
console.log("Max is :"+sorted[sorted.length-1])


