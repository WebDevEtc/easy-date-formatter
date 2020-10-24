// from https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
function daysInFebruary(year: number) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
}

export default function dateToDay(date: Date) {
  const feb = daysInFebruary(date.getFullYear());
  const aggregateMonths = [
    0, // January
    31, // February
    31 + feb, // March
    31 + feb + 31, // April
    31 + feb + 31 + 30, // May
    31 + feb + 31 + 30 + 31, // June
    31 + feb + 31 + 30 + 31 + 30, // July
    31 + feb + 31 + 30 + 31 + 30 + 31, // August
    31 + feb + 31 + 30 + 31 + 30 + 31 + 31, // September
    31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, // October
    31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, // November
    31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30, // December
  ];
  return aggregateMonths[date.getMonth()] + (date.getDate() - 1);
}
