//The Euclidean algorithm is an efficient method for finding the greatest common divisor (GCD) of two numbers.
//It is based on the principle that the GCD of two numbers is the same as the GCD of their remainders when divided by each other.

function gcd(a,b){
    if( b===0){
        return a;
    }
    return gcd(b, a % b);
}
const num1 = 48;
const num2 = 18;
let result = gcd(num1,num2);
console.log("the gcd of",num1, "&", num2, "is:",result)