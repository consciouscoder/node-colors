
var colorR = process.argv[2]
var colorG = process.argv[3]
var colorB = process.argv[4]

var luminosity = (.2126 * colorR) + (.7152 * colorG) + (.0722 * colorB)

console.log(luminosity)
