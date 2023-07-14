// Will be used to create SVG file
const SVG = require('./SVG.js');

function generateSVG(res) {
    const svg = new SVG(res.text, res.color, res.shape);

    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${svg.shapefunction}

${svg.textFunction}

</svg>`
}



module.exports = generateSVG;