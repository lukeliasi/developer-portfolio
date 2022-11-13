const startYear = "2014";

const yearsOfExperience = () => {
  // Calculate dynamic # years experience
  const currentTime = new Date().getTime();
  const yearStarted = new Date(startYear).getTime();
  const yearsInIndustry = Math.floor((currentTime - yearStarted) / (1000 * 60 * 60 * 24 * 365));
  return yearsInIndustry.toString();
}

module.exports = { yearsOfExperience };