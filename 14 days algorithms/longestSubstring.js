const lenghtOfLongestSubstring = (s) => {
    let a = 0;
    let b = 0;
    let max = 0;
    let set = new Set();

    while (b < s.length) {
        if (!set.has(s[b])) {
            set.add(s[b]);
            b++;
            max = Math.max(max, b - a);
        } else {
            set.delete(s[a]);
            a++;
        }
    }

    return max;

}

console.log(lenghtOfLongestSubstring("pwwkew"));

