const readLineSync=require("readline-sync");
const hourlyWage=Number(readLineSync.question("Hourly Wage: "));
const monday=Number(readLineSync.question("\nMonday: "));
const tuesday=Number(readLineSync.question("Tuesday: "));
const wednesday=Number(readLineSync.question("Wednesday: "));
const thursday=Number(readLineSync.question("Thursday: "));
const friday=Number(readLineSync.question("Friday: "));
const saturday=Number(readLineSync.question("Saturday: "));
const sunday=Number(readLineSync.question("Sunday: "));
const weeklyWage=(hourlyWage*(monday+tuesday+wednesday+thursday+friday+saturday+sunday));
const formatted=weeklyWage.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2} );
console.log("\nYou'll make $"+formatted+ " this week.");
