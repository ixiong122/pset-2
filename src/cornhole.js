const length=48;
const width=24
const diameter=6;
const radius=diameter/2;
const circleArea=((Math.pow(radius,2))*Math.PI);
let surfaceArea=((length*width)-(circleArea));
const formatted=surfaceArea.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});
console.log("The surface area of a standard Cornhole board is "+formatted + " square inch(es).");
