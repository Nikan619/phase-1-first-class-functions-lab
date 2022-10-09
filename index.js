const array = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let number;
function createFareMultiplier(fare) {
  return function multiplier(number) {
    return fare * number;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, callBackFunction) {
  return callBackFunction(array);
}
