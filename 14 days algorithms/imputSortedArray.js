const twoSum = (numbers, target) => {
  let n  = new Set();

  for (let i = 0; i < numbers.length; i++) {
    let a = target - numbers[i];
    if (n.has(a)) {
      return [numbers.indexOf(a) + 1, i+1];
    }
    n.add(numbers[i]);
  }
  return null;
}

console.log(twoSum([2, 3, 3], 6));