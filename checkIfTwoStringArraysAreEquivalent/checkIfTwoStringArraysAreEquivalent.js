const checkIfTwoStringArraysAreEquivalent = (word1, word2) => {
    return word1.reduce((a, b) => {
        return a + b
    }) === word2.reduce((a, b) => {
        return a + b
    })
}


console.log(checkIfTwoStringArraysAreEquivalent(['a', 'bc'], ['a', 'bc']))
module.exports = checkIfTwoStringArraysAreEquivalent