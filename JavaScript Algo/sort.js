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

function insertionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
const array = [5, 3, 8, 4, 2];
console.log(insertionSort(array));
