/**
 * Longest Balanced Parity Subarray
 *
 * See problem.md for the full statement.
 */

function longestBalancedParitySubarray(nums: number[], k: number): number {
  // TODO: implement
  const n = nums.length;
  let even = 0;
  let odd = 0;
  let diff = 0;
  return diff; // placeholder, remove me
}

function runSelfChecks(): void {
  const cases: { nums: number[]; k: number; expected: number }[] = [
    { nums: [1, 2, 3, 4, 5], k: 1, expected: 5 },
    { nums: [2, 4, 6, 1, 3], k: 0, expected: 4 },
    { nums: [2, 4, 6, 8], k: 2, expected: 2 },
    { nums: [7], k: 5, expected: 1 },
    { nums: [2, 4, 6, 8], k: 0, expected: 0 },
  ];

  let allPassed = true;
  cases.forEach((c, i) => {
    const actual = longestBalancedParitySubarray([...c.nums], c.k);
    const status = actual === c.expected ? "PASS" : "FAIL";
    if (status === "FAIL") allPassed = false;
    console.log(
      `Case ${i + 1}: ${status} (nums=${JSON.stringify(c.nums)}, k=${c.k} -> got ${actual}, expected ${c.expected})`
    );
  });

  console.log(allPassed ? "All cases passed." : "Some cases failed.");
}

runSelfChecks();
