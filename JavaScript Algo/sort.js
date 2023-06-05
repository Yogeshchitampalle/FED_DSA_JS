//SORT Array Methods:-are used to , sorting refers to the process of arranging
//elements in a specific order.

//1.0 Bubble sort works by repeatedly swapping adjacent elements,
// if they are in the wrong order.
// time complexity of O(n^2)

// function bubbleSort(arr){
//     const len = arr.length;
//     for(let i=0; i<len-1; i++){
//         for(let j=0; j<len-1; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// const array =[5,3,8,4,2,8,9,4,-1,0]
// console.log(bubbleSort(array))

//2.0 Insertion Sort:-Insertion sort is a simple sorting algorithm that builds
// the final sorted array one element at a time
//worst-case time complexity of O(n^2)

// function insertionSort(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j++;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
// const array = [5, 3, 8, 4, 2];
// console.log(insertionSort(array));

//0.3 Qick Sort:- follows recursion
//QuickSort is a popular sorting algorithm that follows the divide-and-conquer
//approach to sort an array or list of elements.
//pivot:- last,first,random,median
//  ---small element --> pivot <--greater element--
//repetaed until came in sorted array

//here we sellect last element as pivot

//Big-O worst case -O(n^2) ---if array is already sorted
//ave case ->(nlogn)

// function quickSort(arr){
//   //base case
//   if(arr.length <2) {
//     return arr;
//   }
//   let pivot = arr[arr.length -1];
//   let left = [];
//   let right = [];
//   for(let i=0; i<arr.length-1; i--){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
// return [...quickSort(left), pivot ,...quickSort(right)]
// }
// const arr = [8,20,-2,4,-6]
// console.log(quickSort(arr));

//4.Merge Sort:-

//Merge Sort is a popular sorting algorithm that follows the divide-and-conquer approach.

//The algorithm guarantees a time complexity of O(n log n) making it efficient for large data sets.

//Here's a step-by-step explanation of the Merge Sort algorithm:

//1.Divide:The input array is divided into two equal (or almost equal) halves until each sub-array contains only one element or is empty.

//2.Recursive Sorting: The algorithm recursively applies the Merge Sort on each sub-array, sorting them individually
//This step continues until all sub-arrays are sorted.

//3.Merge: The sorted sub-arrays are then merged together to create a single sorted array.
//This merging process compares the elements from both sub-arrays and combines them in the correct order.

//4.Combine:Finally, the merged sub-arrays are combined, and the sortedArr is the fully sorted array.

function mergeSort(arr) {
  // Base case: If the array length is less than or equal to 1,
  // it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
//The slice() method in JavaScript is used to extract a portion of an array
// and returns a new array containing the selected elements.
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // Merge the sorted halves
  return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];

  // Compare elements from both halves and merge them in the correct order
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
      
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [9, 8, 7, 6, 1, 2, 3, 4,5,-1];
console.log(mergeSort(arr)); 
//[-1, 1, 2, 3, 4,5, 6, 7, 8, 9]
