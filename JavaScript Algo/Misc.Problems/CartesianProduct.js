//let a= [1,4]
//let b= [4,5]
//let a * c = [1,4][1,5][4,4],[4,5]...this is known as cartesian product in math 

function cartesianProduct(arr1,arr2){
    const result = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            result.push([arr1[i],arr2[j]])
        }
    }
return result;
}
const arr1 =[1,2]
const arr2 =[3,4,5]
console.log(cartesianProduct(arr1,arr2));
//[ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

//Big_O =>O(mn) --length of two are diff 
//if length are same the Big-O => O(n^2)