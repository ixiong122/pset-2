const readLineSync=require("readline-sync");

const hw = Number(readLineSync.question("\nEnter three homework grades.\n"));
const hw1 = Number(readLineSync.question(""));
const hw2 = Number(readLineSync.question(""));
const quiz= Number(readLineSync.question("\nEnter three quiz grades.\n"));
const quiz1= Number(readLineSync.question(""));
const quiz2= Number(readLineSync.question(""));
const test= Number(readLineSync.question("\nEnter three test grades.\n"));
const test1= Number(readLineSync.question(""));
const test2=Number(readLineSync.question(""));
let hwAverage = Number((hw + hw1 + hw2) / (3));
let quizAverage=Number((quiz + quiz1 + quiz2 )/ (3));
let testAverage=Number((test + test1 + test2 )/ (3));
let finalGrade=Number((hwAverage*0.15) + (quizAverage*0.35) + (testAverage*0.5));
const formatted=finalGrade.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2} );
console.log("\nYour marking period grade is "+formatted+"%.");
