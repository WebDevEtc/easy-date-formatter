// https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
export default function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
