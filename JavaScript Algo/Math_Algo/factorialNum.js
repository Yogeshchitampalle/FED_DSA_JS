//Find factorial of the given int num=4

function factorial(num){
let res =1;
for(let i=2; i<=num; i++){
    res = res * i;
}
return res;
}

console.log(factorial(0));//1
console.log(factorial(2));//2
console.log(factorial(4));//24 
//Big O = O(n)

// Let's go through the step-by-step execution of the factorial function for the given input num = 4.

// Variable Initialization:

// num is assigned the value 4.
// result is initialized with 1.
// Loop Execution: 

// Iteration 1:
// i is assigned the value 1.
// result is updated: result = result * i -> result = 1 * 1 -> result = 1.
// Iteration 2:
// i is assigned the value 2.
// result is updated: result = result * i -> result = 1 * 2 -> result = 2.
// Iteration 3:
// i is assigned the value 3.
// result is updated: result = result * i -> result = 2 * 3 -> result = 6.
// Iteration 4:
// i is assigned the value 4.
// result is updated: result = result * i -> result = 6 * 4 -> result = 24.
// Loop Termination:

// The loop terminates as i becomes 5, which is greater than num.
// Return the Result:

// The final value of result is 24, which is returned by the function.
// Output:

// The function call console.log(factorial(num)) outputs 24.