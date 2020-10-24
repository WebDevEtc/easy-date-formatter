import isLeapYear from "../isLeapYear";

test("isLeapYear expected result", () => {
  expect(isLeapYear(new Date("2020"))).toBe(true);
  expect(isLeapYear(new Date("2021"))).toBe(false);
  expect(isLeapYear(new Date("2000"))).toBe(true);
  expect(isLeapYear(new Date("2001"))).toBe(false);
  expect(isLeapYear(new Date("2004"))).toBe(true);
  expect(isLeapYear(new Date("2400"))).toBe(true);
});
