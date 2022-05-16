


const palindrome = (num) => {
    return num.toString().split('').reverse().join('') === num.toString();
}


console.log(palindrome(123));