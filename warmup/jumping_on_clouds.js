function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;
  let index = 0;
  while (index < c.length - 1) {
    console.log("index -> ", index, " | ", "jumps -> ", jumps);
    if (c[index + 2] === 0) {
      index += 2;
    } else {
      index += 1;
    }
    jumps++;
    console.log("index -> ", index, " | ", "jumps -> ", jumps);
  }
  console.log(jumps);
  return jumps;
}

jumpingOnClouds([0, 0, 1, 0, 1, 0, 0, 1, 0]);
