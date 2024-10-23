// function test(number=5)
// {
//     for(var i=0;i<number;i++)
//     {
//         console.log(i);
//     }
// }
//
//
// test();


const getPI=(places=15) =>
    console.log(Number(Math.PI.toFixed(places)));

const pi=getPI();
const pi2=getPI(4);