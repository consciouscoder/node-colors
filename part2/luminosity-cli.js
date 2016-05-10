var colorR = process.argv[2]
var colorG = process.argv[3]
var colorB = process.argv[4]

var luminosity = require("./colorutil.js")

console.log(luminosity.getLum(colorR, colorG, colorB))