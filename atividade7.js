
var input = require("fs").readfilesync("stdin", "utf8");

var [B] = input.split(" ").map(item => parseFloat(item));
var PI = 3.14159;

var areaQuadrado = B * B;

console.log("QUADRADO: " + areaQuadrado.toFixed(3));