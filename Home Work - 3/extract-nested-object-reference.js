// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    var object = this;
    var array = string.split(".");
    array.forEach(function(elem) {
        if (object) {
            object = object[elem];
        }
    });
    return object;
}
/*https://www.codewars.com/kata/extract-nested-object-reference/train/javascript/590b3baa00a9ceca9900001c*/
