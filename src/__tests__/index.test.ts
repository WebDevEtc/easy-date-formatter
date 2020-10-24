import { dateFormatter } from "../index";
import MockDate from "mockdate";

beforeAll(() => MockDate.set("2020-12-31 00:00:00"));

describe("easy-date-formatter", () => {
  test.each([
    {
      date: new Date("2020-10-01"),
      expected: "st",
    },
    {
      date: new Date("2020-10-02"),
      expected: "nd",
    },
    {
      date: new Date("2020-10-03"),
      expected: "rd",
    },
    {
      date: new Date("2020-10-04"),
      expected: "th",
    },
  ])("english ordinal suffix", testEnglishOrdinalSuffix);

  test.each(["B", "o", "Z", "T", "P", "O", "e", "c", "u", "r", "c", "I"])(
    'format "%s" throws an error',
    unsupportedThrowsError
  );

  test.each`
    input      | expected
    ${""}      | ${""}
    ${"Y-m-d"} | ${"2020-12-31"}
    ${"d"}     | ${"31"}
    ${"D"}     | ${"Thu"}
    ${"j"}     | ${"31"}
    ${"l"}     | ${"Thursday"}
    ${"N"}     | ${"4"}
    ${"S"}     | ${"st"}
    ${"w"}     | ${"4"}
    ${"z"}     | ${"365"}
    ${"W"}     | ${"53"}
    ${"F"}     | ${"December"}
    ${"M"}     | ${"Dec"}
    ${"m"}     | ${"12"}
    ${"n"}     | ${"12"}
    ${"t"}     | ${"31"}
    ${"L"}     | ${"1"}
    ${"Y"}     | ${"2020"}
    ${"y"}     | ${"20"}
    ${"a"}     | ${"am"}
    ${"A"}     | ${"AM"}
    ${"g"}     | ${"12"}
    ${"G"}     | ${"0"}
    ${"h"}     | ${"12"}
    ${"H"}     | ${"00"}
    ${"i"}     | ${"00"}
    ${"s"}     | ${"00"}
    ${"v"}     | ${"000"}
    ${"U"}     | ${"1609372800"}
  `('format "$input" should return "$expected"', expectedFormatYmd);
});

function expectedFormatYmd({
  input,
  expected,
}: {
  input: string;
  expected: string;
}): void {
  const formattedDate = dateFormatter(input, new Date());

  expect(formattedDate).toBe(expected);
}

function testEnglishOrdinalSuffix({
  date,
  expected,
}: {
  date: Date;
  expected: string;
}): void {
  expect(dateFormatter("S", date)).toBe(expected);
}

function unsupportedThrowsError(char: string): void {
  expect(() => dateFormatter(char)).toThrowError();
}
