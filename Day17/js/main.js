function test(number=5)
{
    for(var i=0;i<number;i++)
    {
        console.log(i);
    }
}


test();

const getPI=(places=15) => Number(Math.PI.toFixed(places));

console.log(getPI());
console.log(getPI(4));






//A function with two parameters  that have default values

function toPlaces(num, places = 2, type = "round") {
    num = num * (10 ** places);
    if (type === "floor") {
        num = Math.floor(num);
    } else if (type === "ceil") {
        num = Math.ceil(num);
    } else {
        num = Math.round(num);
    }
    return num / (10 ** places);
}


const num1 = toPlaces(5.22873); // num1 is 5.23
const num2 = toPlaces(5.22873, 4); // num2 is 5.2287
const num3 = toPlaces(5.22873, 4, "ceil");
// num3 is 5.2288
const num4 = toPlaces(5.22873, "floor");
// num4 is NaN
const num5 = toPlaces(5.22873, undefined, "floor");
// num5 is 5.22

for(let i=0; i<5; i++)
{
    console.log("Number "+i+" is = ");
}

