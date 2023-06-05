//Serch algorithm:-Search algorithms are techniques used to find a specific item or element within a collection of data.

//1.Linear serach:-Linear search is the simplest search algorithm that 
//sequentially checks each element of a collection until a match is found 

// function linearSearch(arr,target){
//     for (let i=0; i<arr.length; i++){
//     if(arr[i]===target){
//         return i;
//     }
//   }
// //   return "number is not in array";
// return -1;
// }
// const array = [5,2,9,1,7,4];
// console.log(linearSearch(array,4));//5    //Big-O = O(n)
// console.log(linearSearch(array,6));//-1

//2.Binary Search:- it's work only in sortes array 
//Sort if not or use liniear search
//Find Middle element of an array
//if target < middle then BS left half of the array
// if target > middle then BS Right half of the array

function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
 
    while (leftIndex <= rightIndex) {
        const mid =Math.floor((leftIndex+rightIndex)/2);
        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] < target){
            leftIndex = mid +1;
        } else {
            rightIndex = mid -1;
        }
    }
return -1;
}
//sorting array
function sortArray(arr){
    return arr.sort((a,b)=>a-b)
}
 const array = [1,2,5,7,8,9];
 console.log(binarySearch(array,8));
//O(logn)
const array1 = [5, 2, 9, 1, 7];
const sortedArray = sortArray(array1);
console.log(binarySearch(sortedArray,8));










