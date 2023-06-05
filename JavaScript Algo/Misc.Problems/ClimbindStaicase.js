//Given a staircase of'n' steps, count the number of distinct ways to climb to the top.
//You can either climb 1 step or 2 steps at a time.
// n=1, --->(1)
//n=2,---> (1,1) & (2)
//n=3 --> (1,1,1)(1,2)&(2,1)
//n=4 --->(1,1,1,1)(1,1,2)(1,2,1)(2,1,1) & (2,2)

function climbingStaircase(n){
    const noOfWays = [1,2] 
    for(let i=2; i<n; i++){
        noOfWays[i] =noOfWays[i-1] + noOfWays[i-2]
    }

    return noOfWays[n-1]

}

console.log(climbingStaircase(1));//1
console.log(climbingStaircase(2));//2
console.log(climbingStaircase(3));//3
console.log(climbingStaircase(4));//5
console.log(climbingStaircase(5));//8
