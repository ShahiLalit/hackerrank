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
