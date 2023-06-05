// function recursiveFibonacci(n){
//     //base case
//     if(n<2){
//         return n;
//     }
//     return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
// }
// console.log(recursiveFibonacci(8));

//O(2^n)terible for febonacci problem 

//Factorial recursive 
function recursivefactorial(n){
    // base case 
   if(n === 0) {
    return 1;
   }
  return n * recursivefactorial(n-1);
  //n!=n*(n-1)! logic
}
console.log(recursivefactorial(4));
//Big O = O(n)