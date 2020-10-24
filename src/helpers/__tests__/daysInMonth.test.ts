import daysInMonth from "../daysInMonth";

test("daysInMonth returns expected value", () => {
  expect(daysInMonth(new Date("2020-01-01"))).toBe(31);
  expect(daysInMonth(new Date("2020-02-01"))).toBe(29);
  expect(daysInMonth(new Date("2020-03-01"))).toBe(31);
  expect(daysInMonth(new Date("2020-04-01"))).toBe(30);
  expect(daysInMonth(new Date("2020-05-01"))).toBe(31);
  expect(daysInMonth(new Date("2020-06-01"))).toBe(30);
  expect(daysInMonth(new Date("2020-07-01"))).toBe(31);
  expect(daysInMonth(new Date("2020-08-01"))).toBe(31);
  expect(daysInMonth(new Date("2020-09-01"))).toBe(30);
  expect(daysInMonth(new Date("2020-10-01"))).toBe(31);
  expect(daysInMonth(new Date("2020-11-01"))).toBe(30);
  expect(daysInMonth(new Date("2020-12-01"))).toBe(31);

  expect(daysInMonth(new Date("2021-02-01"))).toBe(28);
});
