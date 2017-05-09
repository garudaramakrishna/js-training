Array.prototype.square = function() {
    return this.map(function(num) {
        return Math.pow(num,2);
    });
}

Array.prototype.cube = function() {
    return this.map(function(num) {
        return Math.pow(num,3);
    });
}

Array.prototype.sum = function() {
    return this.reduce(function(num1, num2) {
        return num1 + num2;
    }, 0);
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}

Array.prototype.even = function() {
    return this.filter(function(num) {
        return num % 2 === 0
    });
}

Array.prototype.odd = function() {
    return this.filter(function(num) {
        return num % 2 !== 0
    });
}
/*https://www.codewars.com/kata/array-helpers/train/javascript/5911ca045d7b5833ce00002a*/
