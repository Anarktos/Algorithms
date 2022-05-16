const romanToInt = (str) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];
    
    if (roman[current] < roman[next]) {
      result -= roman[current];
    } else {
      result += roman[current];
    }
  }

  return result;
}