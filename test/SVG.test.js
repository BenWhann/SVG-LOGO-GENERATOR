const SVG = require('../lib/SVG.js');

describe('SVG', () => {
    test('When creating a new instance of SVG, text should equal abc', () => {
        const testValue = new SVG('abc', 'red', 'rectangle');
        expect(testValue.text).toBe('abc');
    })

})

describe('SVG', () => {
    test('When creating a new instance of SVG, color should equal blue.', () => {
        const testValue = new SVG('123', 'blue', 'triangle');
        expect(testValue.color).toBe('blue');
    })

})

describe('SVG', () => {
    test('When creating a new instance of SVG, shape should equal circle', () => {
        const testValue = new SVG('do-re-mi', 'yellow', 'circle');
        expect(testValue.shape).toBe('circle');
    })

})