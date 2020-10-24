import getWeekNumber from "../getWeekNumber";

test("getWeekNumber expected result", () => {
  expect(getWeekNumber(new Date("2020-01-01"))).toBe(1);
  expect(getWeekNumber(new Date("2020-01-05"))).toBe(1);
  expect(getWeekNumber(new Date("2020-01-06"))).toBe(2);
  expect(getWeekNumber(new Date("2020-02-28"))).toBe(9);
});
