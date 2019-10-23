const readLineSync=require("readline-sync");

const students = Number(readLineSync.question("Students: "));
const teachers = Number(readLineSync.question("Teachers: "));
const busCapacity = Number(readLineSync.question("Bus Capacity: "));
let numberofBuses= Number((students+teachers)/(busCapacity));
let absoluteBuses=Math.ceil(numberofBuses);
let remaining=((students+teachers) % busCapacity);
console.log("\n"+absoluteBuses+" bus(es) is (are) needed, with "+remaining+" passenger(s) on the last bus." );
