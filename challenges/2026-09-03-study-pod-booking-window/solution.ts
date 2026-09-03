function maxBookings(bookings: number[][]): number {
  // TODO: implement
  return 0;
}

type Case = [number[][], number];

const tests: Case[] = [
  [[[1, 3], [2, 4], [3, 5]], 2],
  [[[0, 1], [1, 2], [2, 3], [3, 4]], 4],
  [[[5, 10], [0, 2], [3, 6], [6, 8], [8, 9]], 4],
  [[[2, 5]], 1], // extra: single booking
  [[[1, 10], [1, 2], [1, 3]], 1], // extra: same start, only one fits
];

for (const [bookings, expected] of tests) {
  const got = maxBookings(bookings);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(
    `${status} bookings=${JSON.stringify(bookings)} expected=${expected} got=${got}`
  );
}
