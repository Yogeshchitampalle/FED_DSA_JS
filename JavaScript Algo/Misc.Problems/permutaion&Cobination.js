const permutations = (arr) => {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const remainingPermutations = permutations(remaining);
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push([current, ...remainingPermutations[j]]);
    }
  }

  return result;
};

const combinations = (arr, r) => {
  if (r === 1) {
    return arr.map((item) => [item]);
  }

  const result = [];
  arr.forEach((item, index) => {
    const remaining = arr.slice(index + 1);
    const remainingCombinations = combinations(remaining, r - 1);
    remainingCombinations.forEach((combination) => {
      result.push([item, ...combination]);
    });
  });

  return result;
};

// Example usage
const numbers = [1, 2, 3];
const permutationResult = permutations(numbers);
const combinationResult = combinations(numbers, 2);

console.log("Permutations:", permutationResult);
console.log("Combinations:", combinationResult);

//Permutations: [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ]
// ]
// Combinations: [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
