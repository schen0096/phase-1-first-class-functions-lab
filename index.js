// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (dArray) => dArray.slice(0,2)

returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = (dArray) => dArray.slice(2,4)

returnLastTwoDrivers(drivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => (fare) => int * fare

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (dArray, dFunction) => dFunction(dArray)