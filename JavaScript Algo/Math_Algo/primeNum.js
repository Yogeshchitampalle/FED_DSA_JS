//given n numbers determined if the number is prime or not 
//Prime number is a natural number greater than 1 that is not a product of two smaller natural number

//isPrime(5) = true( 1*5 or 5*1)
//isPrime(3) = false( 1*4 or 2*2 or 4 *1)

function isPrime(n){
    if(n<=1){
        return false;
    }
// for(let i=2; i<n;i++){
        for(let i=2; i<=Math.sqrt(n); i++){ 
//The sqrt() function specifically calculates the square root of a given number.
        if(n%i === 0){
            return false
        }
    }
return true;
}

// console.log(isPrime(1));//false
// console.log(isPrime(2));//true
// console.log(isPrime(3));//true
// console.log(isPrime(4));//false
console.log(isPrime(5));//true
//Big O => O(sqrt(n))

// Let's walk through the step-by-step execution of the isPrime function for the given input n = 5.

// Variable Initialization:

// n is assigned the value 5.
// Check for n <= 1:

// The condition 5 <= 1 is false, so the execution continues.
// Loop Execution:

// Iteration 1:
// i is assigned the value 2.
// The condition 2 < 5 is true, so the loop body is executed.
// The condition 5 % 2 === 0 is false, as 5 is not divisible by 2.

// Iteration 2:
// i is assigned the value 3.
// The condition 3 < 5 is true, so the loop body is executed.
// The condition 5 % 3 === 0 is false, as 5 is not divisible by 3.
// Loop Termination:

// The loop terminates as i becomes 5, which is equal to n.
// Return the Result:

// Since the loop did not find any divisors of n, the statement return true is reached.
// Output:

// The function call console.log(isPrime(5)) outputs true.
