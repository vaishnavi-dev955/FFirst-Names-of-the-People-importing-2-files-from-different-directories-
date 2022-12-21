let peopleNames = require("../country/state/city/index.js");
let getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
console.log(getPeopleInCity);
