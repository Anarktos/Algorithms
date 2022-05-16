const sumOfNumbers = (numbers, target) => {
    let n = new Set();

    for (let i = 0; i < numbers.length; i++) {
        let a = target - numbers[i];
        if(n.has(a)){
            return [numbers.indexOf(a), i];
        }
        n.add(numbers[i]);
    }
    return null;
}

console.log(sumOfNumbers([2,3,3], 6));