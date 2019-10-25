const readLineSync=require("readline-sync");
const annualSalary=readLineSync.question("\nAnnual salary: ")
const preTax=.07;
const federalIncomeTax=.157;
const stateIncomeTax=.0447;
const socialSecurityTax=.062;
const medicareTax=.0145;
let biweeklySalary=annualSalary/24;
let preTaxSalary=biweeklySalary*(1-preTax);
const addedTaxes=federalIncomeTax+stateIncomeTax+socialSecurityTax+medicareTax;
const addedTaxes2=1-addedTaxes;
let finalSalary=preTaxSalary*addedTaxes2;
const formatted=finalSalary.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits: 2});
console.log("Your take-home pay each check will be $"+formatted+".");
