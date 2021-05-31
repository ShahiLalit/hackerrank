function rotLeft(a, d) {
  // Write your code here
  let newArr = a;
  for (let i = 0; i < d; i++) {
    const firstItem = newArr.shift();
    newArr = newArr.concat(firstItem);
  }
  console.log(newArr);
  return newArr;
}
rotLeft([1, 2, 3, 4, 5], 4);

// Method 2
function rotLeft2(a, d) {
  // Write your code here
  let newArr = [];
  let arrLen = a.length;
  for (let i = 0; i < arrLen; i++) {
    const newIndex = (i + arrLen - d) % arrLen;
    console.log(newIndex);
    newArr[newIndex] = a[i];
  }
  console.log(newArr);
  return newArr;
}
rotLeft2([1, 2, 3, 4, 5], 4);
