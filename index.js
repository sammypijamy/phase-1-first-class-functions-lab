let array = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (array){
let newArray = array.slice(0,2)
return newArray
};

let newArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnLastTwoDrivers = function (newArray){
let copyOfNewArray = newArray.slice(2,4)
return copyOfNewArray
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
return function (fare) { return fare * multiplier}
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(array, returnFirstTwoDrivers) { 
    return returnFirstTwoDrivers(array)
}
