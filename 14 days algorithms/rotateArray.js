const rotate = (nums, k) => {
    const len = nums.length;
    k = k % len;
    if (k === 0) {
        return nums;
    }
    const temp = nums.splice(len - k, k);
    nums.unshift(...temp);
    return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
