const getSubStringCount = (str, num) => {
  let count = 0;
  for (let i = 0; i < num; i++) {
    const charAtIndex = str.charAt(i);
    if (charAtIndex === "a") {
      count++;
    }
  }
  return count;
};

function repeatedString(s, n) {
  // Write your code here
  const completeRepeat = Math.floor(n / s.length);
  const partialRepeat = n % s.length;
  const count =
    completeRepeat * getSubStringCount(s, s.length) +
    getSubStringCount(s, partialRepeat);
  console.log(count);
}

repeatedString("aba", 10);
