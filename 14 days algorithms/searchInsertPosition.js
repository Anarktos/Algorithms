const searchInsert = (nums, target) => {
  if (nums.indexOf(target) === -1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target && i === 0) return 0;
      if (nums[i] < target && nums.indexOf(nums[i]) === nums.length - 1) return i + 1;
      if (nums[i] < target && nums[i + 1] > target) return i + 1;
    }
  }
  return nums.indexOf(target);
}

console.log(searchInsert([1,3,5,6], 7));