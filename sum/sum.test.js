const sum = require('./sum');
// const expect = require("jest");
test('1+1',()=> {
    expect(sum(1,2)).toBe(3)
})