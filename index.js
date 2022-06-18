// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function minCost(wells, pipes) {
  const edges = [...pipes];
  wells.forEach((well, index) => edges.push([0, index + 1, well]));
  edges.sort((a, b) => a[2] - b[2]);
  let minCost = 0;
  let flag = true;
  wells = [1, ...wells];
  edges.forEach((edge) => {
    const [a, b, c] = edge;
    if (wells[a] || wells[b]) {
      minCost += c;
      wells[a] = 0;
      wells[b] = 0;
      console.log(a, b, c);
    }
  });
  return minCost;
}

const result = minCost(
  [1, 2, 2, 3, 2],
  [
    [1, 2, 1],
    [2, 3, 1],
    [4, 5, 7],
  ]
);

console.log(result);
