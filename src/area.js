const readLineSync=require("readline-sync");

const width=readLineSync.question("Width: ");
const length=readLineSync.question("Length: ");
const area=(width*length);
const conversionFactor=645.16;
const convertedArea=(area*conversionFactor);
const formatted=convertedArea.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits: 2});
console.log("\nA(n) "+width+"-by-"+length+"-inch sheet of paper has an area of "+formatted+" square millimeter(s).");
