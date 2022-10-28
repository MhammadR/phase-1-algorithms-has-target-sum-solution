function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(array[i]);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  O{n} linear
*/

/* 
  Add your pseudocode here

  Create a set to keep track of all the numbers we iterated through
  Iterate through the array of numbers
    Identify a complement number where its addition with the number result in the target number
    Check if any number in our set matches the complement number
        return true
    Save the current number in the set
  return false
*/

/*
  Add written explanation of your solution here

  I need to create a function hasTargetSum that checks if two numbers in an array adds up to a target number.
  For instance if the array is [1, 2, 3] and the target is 5, I know that the sum of 2 and 3 is 5, so I need to return true. While for the same array, if the target is 6, there are no pair of numbers in the array that sums up to 6, so I should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 5, 15, 4, 6, 7], 12));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 4], 8));
}

module.exports = hasTargetSum;
