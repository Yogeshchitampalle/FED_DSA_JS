function knapsack(weights, values, capacity) {
    const n = weights.length;
  
    // Create a 2D array to store the maximum values
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= capacity; j++) {
        if (weights[i - 1] > j) {
          // If the current item's weight exceeds the capacity, skip it
          dp[i][j] = dp[i - 1][j];
        } else {
          // Take the maximum value between including the current item and excluding it
          dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
        }
      }
    }
  
    // Trace back to find the selected items
    const selectedItems = [];
    let i = n;
    let j = capacity;
    while (i > 0 && j > 0) {
      if (dp[i][j] !== dp[i - 1][j]) {
        selectedItems.push(i - 1);
        j -= weights[i - 1];
      }
      i--;
    }
  
    return {
      maxValue: dp[n][capacity],
      selectedItems: selectedItems.reverse(),
    };
  }
  
  // Example usage
  const weights = [2, 3, 4, 5];
  const values = [3, 4, 5, 6];
  const capacity = 8;
  const knapsackResult = knapsack(weights, values, capacity);
  
  console.log("Maximum Value:", knapsackResult.maxValue);
  console.log("Selected Items:", knapsackResult.selectedItems);
  