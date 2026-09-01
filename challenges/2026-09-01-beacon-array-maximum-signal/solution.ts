function maxBeaconSignal(beacons: number[]): number {
  // TODO: implement
  return -1;
}

function runSelfChecks(): void {
  const cases: [string, number[], number][] = [
    ["example 1", [3, 10, 5, 25, 2, 8], 31],
    ["example 2", [6, 6, 6], 6],
    ["example 3", [42], 42],
    ["edge: zeros mixed in don't help", [0, 0, 5], 5],
    ["edge: disjoint bits XOR to the OR of all", [1, 2, 4, 8], 15],
  ];

  for (const [name, beacons, expected] of cases) {
    const actual = maxBeaconSignal(beacons);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
