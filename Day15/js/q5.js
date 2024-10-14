//5.Get exactly 3 numbers between -4 and 10 from a user. Keep asking until exactly 3 numbers are entered. Then, return their average.

const nums=[];

while (nums.length<3)
{
    let n=parseInt(prompt("Enter a number between -4 and 10;"));
    if(n<=-4||n>=10)
    {
        console.log("number should be between -4 and 10")
    }
    else{
        nums.push(n)
    }
}

let sum=0;

for(i=0;i<nums.length;i++)
{
    sum+=nums[i];
}

console.log("Average = "+(sum/nums.length))

