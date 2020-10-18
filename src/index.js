module.exports = function check(str, bracketsConfig) {
    let strBrackets = bracketsConfig.map((element) => element.join(''));

    for (let i = 0; i < strBrackets.length; i++) {
        if (str.includes(strBrackets[i]) == true) {
            str = str.replace(strBrackets[i], '');
            i = -1;
        }
    }
    return Object.is(str, '');
}