function countWords(str) {
    var inputString = str.trim();
    return inputString ? inputString.split(/\s+/).length : 0;
}
/* https://www.codewars.com/kata/word-count/train/javascript/590854f330e4f52cdd000028 */
