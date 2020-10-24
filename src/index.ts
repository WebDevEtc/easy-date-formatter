import dateToDay from "./helpers/dateToDay";
import getWeekNumber from "./helpers/getWeekNumber";
import daysInMonth from "./helpers/daysInMonth";
import isLeapYear from "./helpers/isLeapYear";

const formatChar = (date: Date) => (char: string): string | number => {
  //     d	Day of the month, 2 digits with leading zeros	01 to 31
  if (char === "d") {
    return String(date.getDate()).padStart(2, "0");
  }
  // D	A textual representation of a day, three letters	Mon through Sun
  if (char === "D") {
    return date.toLocaleDateString(undefined, { weekday: "short" });
  }
  // j	Day of the month without leading zeros	1 to 31
  if (char === "j") {
    return date.getDate();
  }
  // l (lowercase 'L')	A full textual representation of the day of the week	Sunday through Saturday
  if (char === "l") {
    return date.toLocaleDateString(undefined, { weekday: "long" });
  }
  // N	ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)	1 (for Monday) through 7 (for Sunday)
  if (char === "N") {
    return date.getDay() === 0 ? 7 : date.getDay();
  }
  //     S	English ordinal suffix for the day of the month, 2 characters	st, nd, rd or th. Works well with j
  if (char === "S") {
    switch (date.getDate() % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  //     w	Numeric representation of the day of the week	0 (for Sunday) through 6 (for Saturday)
  if (char === "w") {
    return date.getDay();
  }
  //     z	The day of the year (starting from 0)	0 through 365
  if (char === "z") {
    return dateToDay(date);
  }
  //     W	ISO-8601 week number of year, weeks starting on Monday	Example: 42 (the 42nd week in the year)
  if (char === "W") {
    return getWeekNumber(date);
  }
  //     F	A full textual representation of a month, such as January or March	January through December
  if (char === "F") {
    return date.toLocaleDateString(undefined, { month: "long" });
  }
  // m	Numeric representation of a month, with leading zeros	01 through 12
  if (char === "m") {
    return String(date.getMonth() + 1);
  }
  // M	A short textual representation of a month, three letters	Jan through Dec
  if (char === "M") {
    return date.toLocaleDateString(undefined, { month: "short" });
  }
  // n	Numeric representation of a month, without leading zeros	1 through 12
  if (char === "n") {
    return date.getMonth() + 1;
  }
  // t	Number of days in the given month	28 through 31
  if (char === "t") {
    return daysInMonth(date);
  }
  //     L	Whether it's a leap year	1 if it is a leap year, 0 otherwise.
  if (char === "L") {
    return isLeapYear(date) ? 1 : 0;
  }
  // o	ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead. (added in PHP 5.1.0)	Examples: 1999 or 2003
  if (char === "o") {
    throw new Error("o is unsupported");
  }
  // Y	A full numeric representation of a year, 4 digits	Examples: 1999 or 2003
  if (char === "Y") {
    return String(date.getFullYear());
  }
  // y	A two digit representation of a year	Examples: 99 or 03
  if (char === "y") {
    return String(date.getFullYear()).substr(2);
  }
  // a	Lowercase Ante meridiem and Post meridiem	am or pm
  // A	Uppercase Ante meridiem and Post meridiem	AM or PM
  if (char === "a" || char === "A") {
    const meridiem = date.getHours() < 12 ? "am" : "pm";
    return char === "a" ? meridiem : meridiem.toUpperCase();
  }

  // B	Swatch Internet time	000 through 999
  if (char === "B") {
    throw new Error("B is not supported");
  }
  // g	12-hour format of an hour without leading zeros	1 through 12
  if (char === "g") {
    return date
      .toLocaleString(undefined, { hour: "numeric", hour12: true })
      .substr(0, 2);
  }
  // G	24-hour format of an hour without leading zeros	0 through 23
  if (char === "G") {
    const G = date.toLocaleString(undefined, { hour: "numeric" }).substr(0, 2);

    if (G === "12") {
      return "0";
    }

    return G;
  }
  // h	12-hour format of an hour with leading zeros	01 through 12
  if (char === "H") {
    return date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  }
  // H	24-hour format of an hour with leading zeros	00 through 23
  if (char === "h") {
    // https://gist.github.com/micah1701/4120120
    const hour = date.getHours() === 0 ? 12 : date.getHours();
    const hour2 = hour > 12 ? hour - 12 : hour;
    return hour2 < 10 ? "0" + hour2 : hour2;
  }
  // i	Minutes with leading zeros	00 to 59
  if (char === "i") {
    return date
      .toLocaleString(undefined, { minute: "numeric" })
      .padStart(2, "0");
  }
  // s	Seconds with leading zeros	00 through 59
  if (char === "s") {
    return date
      .toLocaleString(undefined, { second: "numeric" })
      .padStart(2, "0");
  }
  // u	Microseconds (added in PHP 5.2.2). Note that date() will always generate 000000 since it takes an integer parameter, whereas DateTime::format() does support microseconds if DateTime was created with microseconds.	Example: 654321
  if (char === "u") {
    throw new Error("u is unsupported");
  }
  // v	Milliseconds (added in PHP 7.0.0). Same note applies as for u.	Example: 654
  if (char === "v") {
    return String(date.getMilliseconds()).padStart(3, "0");
  }
  //     e	Timezone identifier (added in PHP 5.1.0)	Examples: UTC, GMT, Atlantic/Azores
  if (char === "e") {
    throw new Error("e is unsupported");
  }
  // I (capital i)	Whether or not the date is in daylight saving time	1 if Daylight Saving Time, 0 otherwise.
  if (char === "I") {
    throw new Error("I is not supported");
  }
  //     O	Difference to Greenwich time (GMT) without colon between hours and minutes	Example: +0200
  if (char === "O") {
    throw new Error("O is unsupported");
  }
  // P	Difference to Greenwich time (GMT) with colon between hours and minutes (added in PHP 5.1.3)	Example: +02:00
  if (char === "P") {
    throw new Error("P is unsupported");
  }
  // T	Timezone abbreviation	Examples: EST, MDT ...
  if (char === "T") {
    throw new Error("T is unsupported");
  }
  // Z	Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.	-43200 through 50400
  if (char === "Z") {
    throw new Error("Z is unsupported");
  }
  //     c	ISO 8601 date (added in PHP 5)	2004-02-12T15:19:21+00:00
  if (char === "c") {
    throw new Error("c is unsupported");
  }
  // r	» RFC 2822 formatted date	Example: Thu, 21 Dec 2000 16:01:07 +0200
  if (char === "r") {
    throw new Error("r is unsupported");
  }
  // U	Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)	See also time()
  if (char === "U") {
    return Math.round(date.getTime() / 1000);
  }

  return char;
};

export function dateFormatter(format: string, date: Date = new Date()): string {
  const chars = format.match(/(\\)*./g);
  if (!chars) {
    return "";
  }

  return chars.map(formatChar(date)).join("") ?? "";
}
