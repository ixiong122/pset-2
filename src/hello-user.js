const readlineSync = require("readline-sync");
const firstName=readlineSync.question("Hi, what's your name?\n");
console.log("\nHello, "+ firstName + "!");
