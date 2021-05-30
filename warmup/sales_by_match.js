function sockMerchant(n, ar) {
  // Write your code here
  let pairs = [];
  let count = 0;
  ar.forEach((sock) => {
    if (pairs.includes(sock)) {
      count++;
      pairs = pairs.filter((pair) => pair !== sock);
    } else {
      pairs.push(sock);
    }
  });
  console.log(count);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
