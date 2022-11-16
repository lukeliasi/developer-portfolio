export const differenceInYears = (year1: Date, year2: Date) => {
  const diff = ((year2.getTime () - year1.getTime ()) / 1000) / (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
}