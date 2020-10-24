// https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
export default function getWeekNumber(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = Number(new Date(Date.UTC(d.getUTCFullYear(), 0, 1)));
  return Math.ceil(((Number(d) - yearStart) / 86400000 + 1) / 7);
}
