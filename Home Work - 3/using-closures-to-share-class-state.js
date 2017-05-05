// Let's make a Cat constructor!
 var sum = 0, count = 0;
 var Cat = function (name, weight) { 

if (typeof name == 'undefined' || typeof weight == 'undefined') {
         throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);
     }
  this.name = name;
  this.weight = weight;
  sum += this.weight;
 };

Object.defineProperty(Cat, "sum", {
     get: function () {
         return sum;
     },
     set: function () {
         sum = sum + cat.weight;
     }
 });


 Object.defineProperty(Cat, "averageWeight", {
     get: function () {
         return function () {
             return count ? sum / count : 0;
         };
     }
 });
