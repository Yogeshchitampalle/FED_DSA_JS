//1.Fibonacci Sequence :-

function Fibonacci(n){
    const fib =[0,1]
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
return fib;
}
console.log(Fibonacci(8))//[ 0, 1 ]

// //fun contain one for loop O(n) 


// function fibonacciSeries(num){
//     const series = [0,1];
//     for(let i=2; i<num;i++ ){
//     series[i] = series[i-1] + series[i-2];
//     }
//     return series;
// }
// console.log(fibonacciSeries(5))//[ 0, 1, 1 ]

// fibonacciSeries function has a time complexity of O(n) and  
//space complexity of O(n) 
//This means that the execution time and the amount of memory required by 
//the function grow linearly with the input size

// Let's Go through the step-by-step execution of the fibonacciSeries function for the given input num = 5.

// Variable Initialization:

// num is assigned the value 5.
// series is initialized with the array [0, 1], representing the first two numbers of the Fibonacci series.
// Loop Execution:

// Iteration 1:
// i is assigned the value 2.
// series[2] is updated: series[2] = series[1] + series[0] -> series[2] = 1 + 0 -> series[2] = 1.
// Iteration 2:
// i is assigned the value 3.
// series[3] is updated: series[3] = series[2] + series[1] -> series[3] = 1 + 1 -> series[3] = 2.
// Iteration 3:
// i is assigned the value 4.
// series[4] is updated: series[4] = series[3] + series[2] -> series[4] = 2 + 1 -> series[4] = 3.
// Loop Termination:

// The loop terminates as i becomes 5, which is equal to num.
// Return the Result:

// The series array, [0, 1, 1, 2, 3], is returned by the function.
// Output:

// The function call console.log(fibonacciSeries(5)) outputs [0, 1, 1, 2, 3].


