function maxOrders(orders: number[][]): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[][], number][] = [
  ["example 1", [[3, 5], [2, 6], [4, 7]], 2],
  ["example 2", [[5, 5], [4, 6], [2, 6], [1, 8]], 3],
  ["example 3", [[2, 2], [2, 2], [2, 4]], 2],
  ["edge: bake time exceeds deadline", [[6, 5]], 0],
  ["edge: identical tight orders", [[1, 1], [1, 1], [1, 1]], 1],
  ["edge: unsorted input, swap needed", [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]], 3],
  ["edge: maximum values", [[1000000000, 1000000000], [1000000000, 1000000000], [999999999, 1000000000]], 1],
];

for (const [name, orders, expected] of cases) {
  const actual = maxOrders(orders.map((o) => [...o]));
  const ok = actual === expected;
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
