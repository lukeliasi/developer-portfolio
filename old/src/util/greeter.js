const today = new Date();
const currentHour = today.getHours();

function greeter() {
  if (currentHour >= 4 && currentHour < 12) {
    return "Good morning!";
  }

  if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon!";
  }

  if (currentHour >= 18 && currentHour <= 23) {
    return "Good evening!";
  }

  // Between 12am and 4am when it doesn't feel right to say "Good morning"!
  return "Hey there!";
}

module.exports = { greeter };
