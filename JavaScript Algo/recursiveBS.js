function binarySearchRecursive(arr,target,left,right){
    if(left>right){
        return -1; //base target
    }
    const mid =Math.floor((left+right)/2);
    if(arr[mid] === target) {
        return mid; //base case
    }else if (arr[mid] < target){
        return binarySearchRecursive(arr,target,mid+1, right);
    }else {
        return binarySearchRecursive(arr,target,left,mid-1);
    }
}
function binarySearch(arr, target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
  }
  
  const array = [1, 2, 5, 7, 9];
  console.log(binarySearch(array, 7));//3
  console.log(binarySearch(array, 4));//-1
//O(logn)

