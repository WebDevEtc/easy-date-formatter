import dateToDay from "../dateToDay";

test("dateToDay expected day count", () => {
  expect(dateToDay(new Date("2020-01-01"))).toBe(0);
  expect(dateToDay(new Date("2020-01-02"))).toBe(1);
  expect(dateToDay(new Date("2020-01-31"))).toBe(30);
  expect(dateToDay(new Date("2020-02-01"))).toBe(31);
  expect(dateToDay(new Date("2020-02-28"))).toBe(58);
  expect(dateToDay(new Date("2020-02-29"))).toBe(59);
  expect(dateToDay(new Date("2020-03-01"))).toBe(60);
});
