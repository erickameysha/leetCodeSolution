var countCharacters = function (words, chars) {

    return words.reduce((sum, word) => {
        let chartsArray = chars.split('')
        let isValid = false
        for (let i = 0; i < word.length; i++) {
            let index = chartsArray.indexOf(word.charAt(i))
            if (index !== -1) {
                chartsArray.splice(index, 1);

                isValid = true;
            } else {
                isValid = false
                break
            }
        }
        sum = isValid ? sum += word.length : sum
        return sum
    }, 0)
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"))