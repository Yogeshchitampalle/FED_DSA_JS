//The spread syntax (...) is a feature in JavaScript that allows an 
//iterable (such as an array or a string) to be expanded into individual elements. 
//It can be used in several contexts, 
//including function calls, array literals, and object literals.

//1. function Calls :-The spread syntax can be used to pass elements of an array as individual arguments to a function. 

// const numbers = [1,2,3];
// console.log(...numbers);//1 2 3

//2.Array Literal :-The spread syntax can be used to create a new array
// by merging existing arrays or adding new elements

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7];

// const  combineArray = [...arr1, ...arr2, 8,9,10]
// console.log(combineArray);
//[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

//3.Object Literals:-While primarily used with arrays, the spread syntax can also be used 
//with object literals to create new objects or merge existing ones.
//However, starting from ECMAScript 2018, 
//object spread syntax ({...}) is introduced specifically for object literals
  
// const obj1 = {Novel1: "Mahabharath"};
// const obj2 = {Novel2: "Ramayana" };

// const mergeObj = {...obj1, ...obj2, Ditector:"Shree Vishnu"}

// console.log(mergeObj);

//{ Novel1: 'Mahabharath', Novel2: 'Ramayana', Ditector: 'Shree Vishnu' }