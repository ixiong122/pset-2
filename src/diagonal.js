const readLineSync=require("readline-sync");

const width=readLineSync.question("Width: ");
const length=readLineSync.question("Length: ");
const diagonal=Math.hypot(width, length);
const formatted=diagonal.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});
console.log("\nA(n) "+width+"-by-"+length+"-inch sheet of paper has a diagnol of "+formatted+ " inch(es).");
