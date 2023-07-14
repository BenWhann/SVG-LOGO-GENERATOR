

class SVG {
    constructor(text, color, shape) {
        this.text = text;
        this.color = color;
        this.shape = shape;
    };

    get shapefunction() {
        return this.shapes();
    }

    shapes() {
        if (this.shape == 'circle') {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        } else if (this.shape == 'triangle') {
            return `<polygon points="150, 0 295, 180 5, 180" fill="${this.color}" />`
        } else {
            return `<rect x="45" y="10" width="200" height="200" fill="${this.color}"/>`
        }
    };

    get textFunction() {
        return this.logoText();
    }

    logoText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`
    };
};

module.exports = SVG;