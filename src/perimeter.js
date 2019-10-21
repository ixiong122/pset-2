const readLineSync=require("readline-sync");

const width=readLineSync.question("Width: ");
const length=readLineSync.question("Length: ");
const perimeter=((width*2)+(length*2));
const conversionFactor=2.54;
const convertedPerimeter=(perimeter*conversionFactor);
const formatted=convertedPerimeter.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});
console.log("\nA(n) "+width+"-by-"+length+"-inch sheet of paper has a perimeter of "+formatted+ " centimeter(s).");
