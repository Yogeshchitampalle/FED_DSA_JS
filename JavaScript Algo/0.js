
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

//console.log("The sum of numbers between 1 and 100 is:", sum);
//The sum of numbers between 1 and 100 is: 5050

function sumNumbersBetween(a,b){
 let sum =0;
   for (let i=a; i<=b; i++){
    sum += i;
   }
   return sum;
}
console.log(sumNumbersBetween(1,5)) //O(n)-Linear 