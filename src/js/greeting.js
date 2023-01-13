/**
 * Return a greeting message depending on what time of the day it is
 */
const today = new Date();
const currentHour = today.getHours();

export function greeting() {
  // 4am - 12pm
  if (currentHour >= 4 && currentHour < 12) {
    return "Good morning!";
  }

  // 12pm - 6pm
  if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon!";
  }

  // 6pm - 11pm
  if (currentHour >= 18 && currentHour <= 23) {
    return "Good evening!";
  }

  // Between 12am and 4am when it doesn't feel right to say "Good morning"!
  return "Hey there!";
}