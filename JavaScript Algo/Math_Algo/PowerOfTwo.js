//Given positive Intiger'n',determine if the number is power of2 or not

function isPowerofTwo(n){
    if(n < 1) {
        return false;
    }
    while( n > 1 ) {
        if(n%2 !== 0) {
            return false;
        }
        n = n / 2
    }
    return true;
}
console.log(isPowerofTwo(2));
console.log(isPowerofTwo(5));
//O(log(n))

// Execution with n = 2:

// The function is called with n = 2.
// The condition n < 1 is false, so the execution continues.
// Enter the while loop:
// The condition n > 1 is true, as n is equal to 2.
// The condition n % 2 !== 0 is false, as 2 is divisible by 2 with no remainder.
// n is divided by 2, resulting in n = 1.
// The while loop iterates again:
// The condition n > 1 is false, as n is now equal to 1.
// The function returns true.
// The output of console.log(isPowerofTwo(2)) is true.
// Execution with n = 5:

// The function is called with n = 5.
// The condition n < 1 is false, so the execution continues.
// Enter the while loop:
// The condition n > 1 is true, as n is equal to 5.
// The condition n % 2 !== 0 is true, as 5 is not divisible by 2 without a remainder.
// The function returns false.
// The output of console.log(isPowerofTwo(5)) is false.


// function isPowerOfTwo(n) {
//     if (n <= 0) {
//       return false;
//     }  
//     return (n & (n - 1)) === 0;
//   }
//   console.log(isPowerOfTwo(22));

//Big-O= O(1)