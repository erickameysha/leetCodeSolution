const checkIfTwoStringArraysAreEquivalent = require("./checkIfTwoStringArraysAreEquivalent");


test('should be abc',()=> {
    expect(checkIfTwoStringArraysAreEquivalent(["ab", "c"],["a", "bc"])).toBe(true)
})
test('should be false',()=> {
    expect(checkIfTwoStringArraysAreEquivalent(["a", "cb"], ["ab", "c"])).toBe(false)
})
test('should be true',()=> {
    expect(checkIfTwoStringArraysAreEquivalent(["abc", "d", "defg"],["abcddefg"])).toBe(true)
})