function isLeapYear(year: number) {
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy400 = year % 400 === 0;
  const divisibleBy100 = year % 100 === 0;

  return divisibleBy400 || (divisibleBy4 && !divisibleBy100);
}

export default isLeapYear;
