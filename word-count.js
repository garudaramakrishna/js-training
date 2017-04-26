function countWords(str) {
    var inputString = str.trim(); 
    return inputString == '' ? 0 : inputString.split(/\s+/).length;
}
