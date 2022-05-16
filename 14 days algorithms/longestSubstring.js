const lenghtOfLongestSubstring = (s) => {
    let sub = [];
    for (let i = 0; i < s.length; i++){
        if (sub.indexOf(s[i]) !== -1) {
            sub.splice(0, sub.indexOf(s[i]) + 1);
        }
        sub.push(s[i]);
    }
    return sub.length;
}

console.log(lenghtOfLongestSubstring('abcabcbb'));

