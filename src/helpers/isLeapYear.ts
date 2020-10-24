// https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
export default function isLeapYear(date: Date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
