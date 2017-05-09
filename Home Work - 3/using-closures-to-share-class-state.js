 var sum = 0,
     count = [];

 var Cat = function(name, weight) {

     if (typeof name == 'undefined' || typeof weight == 'undefined') {

         throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);

     }
     count.push(this);

     this.name = name;

     this._weight = weight;

     sum += this._weight;

     Object.defineProperty(this, "weight", {

         get: function() {

             return this._weight;

         },

         set: function(newWeight) {

             sum = sum - this._weight + newWeight;

             this._weight = newWeight;

         }

     });

 };

 Object.defineProperty(Cat, "averageWeight", {

     get: function() {

         return function() {

             return count ? sum / count.length : 0;

         };

     }

 });
 /*https://www.codewars.com/kata/using-closures-to-share-class-state/train/javascript/590c2fdc751b37692600016a*/
