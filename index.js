'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns value unchaged
 * 
 * @param {String, Object, Array, Number, Boolean} value: the value to return 
 * 
 * @return {String, Object, Array, Number, Boolean} value: any value 
 * 
 * Examples:
 *   identity(5) === 5
 *   identity({a: "b"}) === {a: "b"}
 */
  function identity (value) {
    return value; 
}
module.exports.identity = identity;

/**
 * typeOf: Designed to identify the value's datatype and return as a string
 * 
 * @param {String, Object, Array, Number, Boolean} value: any value to which to 
 * identify
 * 
 * @return {String} returns a string of the datatype
 * 
 * Examples:
 * typeOf(134) -> "number"
 * typeOf("javascript") -> "string"
 * typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    if (typeof(value) === 'string')  {
        return 'string';
        } else if (Array.isArray(value)) {
        return 'array';
         } else if (typeof(value) === "number") {
            return 'number';
         } else if (typeof(value) === "boolean") {
         return 'boolean'; 
        } else if (typeof(value) === 'function') {
            return 'function';
        } else if (typeof(value) === 'undefined') {
            return 'undefined';
        } else if (value === null) {
            return 'null';
        }else if (typeof(value) === 'object') {
            return 'object';
        }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first number of elements in an array based off the 
 * number paramater. If there is no array, it returns an array literal. If there 
 * is no number arguement, it returns just the first element.
 * 
 * @param {Array} array: the array to return the first elements from
 * @param {Number} number: the amount of elements in array to return
 * 
 * @return {String, Object, Array, Number, Boolean} anything: returns the first
 * element(s) in an array based off the number argument. 
 * 
 * first("ponies", 1) -> []
 * first(["a", "b", "c"], "ponies") -> "a"
 * first(["a", "b", "c"], 1) -> "a"
 * first(["a", "b", "c"], 2) -> ["a", "b"]
 */
function first(array, number) {
    var firstElmentsofArr = [];
    if (!Array.isArray(array)) {
        return [];
    }
     else if (typeof(number) !== 'number' || typeof(number) <= 0) {
            return array[0];
    } else {
        for (var i = 0; i < number; i++) {
            if (array[i] !== undefined) {
                firstElmentsofArr.push(array[i]); 
            }
        }
    }
    return firstElmentsofArr; 
}
module.exports.first = first;

/**
 * last: Designed to return the last number of items in an array based off the 
 * number paramater. If there is no array, it returns an array literal. If there 
 * is no number arguement, it returns just the last element.
 * 
 * @param {Array} array: the array to return the last elements from
 * @param {Number} number: the amount of elements in array to return
 * 
 * @return {String, Object, Array, Number, Boolean} returns the last element(s) in
 * an array based off the number argument. 
 * 
 * last("ponies", 1) -> []
 * last(["a", "b", "c"], "ponies") -> "c"
 * last(["a", "b", "c"], 1) -> "c"
 * last(["a", "b", "c"], 2) -> ["c", "c"]
 */
 function last(array, number) {
        if (!Array.isArray(array) || number <= 0) { 
            return [];
        } else if (typeof(number) !== 'number') {
            return array[array.length-1];
        }else if (array.length < number) {
            return array; 
        }else {
            for (var i = array.length-1; i > 0; i--) {
            if (array[i] !== undefined) {
                return array.splice(array.length-number, number);
                }
            }
        }
}
module.exports.last = last;

/**
 * indexOf: Designed to iterate over an array and return the index of the first 
 * occurrance of value argument. If value is not in the array, it returns -1. 
 * 
 * @param {Array} array: the array to which to iterate
 * @param {String, Object, Array, Number, Boolean} value: the value to find index
 * of in array
 * 
 * @return {Number} returns the index position of value in array, or -1 if value
 * does not exist in array
 * 
 * Examples:
 * indexOf(["a","b","c"], "c") -> 2
 * indexOf(["a","b","c"], "d") -> -1
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i; 
        }
    }
        return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Accesses an array to check if the value is in the collection.
 * 
 * @param {Array} array: the array to which to iterate
 * @param {String, Object, Array, Number, Boolean} value: the value to find in array
 * 
 * @return {Boolean} returns true if array contains value argument, false otherwise
 * 
 * Examples:
 * contains([1,"two", 3.14], "two") -> true
 */
 
function contains(array, value) {
        return (indexOf(array, value) >= 0 ? true : false);
}
module.exports.contains = contains;

/**
 * unique: Designed to iterate over an array and return a new array with
 * duplicates removed. 
 * 
 * @param {Array} array: the array to which to iterate
 *
 * @return {Array} returns new array with no duplicated values
 * 
 * Examples:
 * unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */
function unique(array) {
    var uniqueArray = [];
    for (var i = 0; i < array.length; i++){
        if (indexOf(uniqueArray, array[i]) === -1){
        uniqueArray.push(array[i]);
        }
    }
      return uniqueArray; 
}
module.exports.unique = unique;

/**
 * filter: Designed to filter values in an Array that pass a Function test. Will 
 * return a new array with passing values.  
 * 
 * @param {Array} array: the array over which to iterate and test
 * @param {Function} test: The Function to be applied to each value in the 
 * Array. 
 * 
 * @return {Array} returns new array with only passing values
 * 
 * Examples:
 * filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 */
 function filter(array, test) {
    var passingArray = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        //if test is true[]
        if (test(element, i, array) === true) {
            passingArray.push(element); 
        }
    }
    return passingArray; 
}
module.exports.filter = filter;
/**
 * reject: Designed to iterate over an array and return new array of values that 
 * fail the Function test.  Inverse of filter function. 
 * 
 * @param {Array} array: the array over which to iterate and test
 * @param {Function} test: The Function to be applied to each value in the 
 * Array. 
 * 
 * @return {Array} returns new array with only failing values
 * 
 * Examples:
 * reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */
  function reject(array, test) {
   var failingArray = [];
   var passingArray = filter(array, test);
   for (var i = 0; i < array.length; i++) {
        if(contains(passingArray, array[i]) === false)
            failingArray.push(array[i]);
        }
    return failingArray; 
        
}
module.exports.reject = reject;

/**
 * partition: Designed to iterate over an array and return it with a true and 
 * false sub-array. 
 * 
 * @param {Array} array: the array over which to iterate and test
 * @param {Function} test: The Function to be applied to each value in the 
 * Array. 
 * 
 * @return {Array} returns an array of two arrays - one with true values and the 
 * other with false values. 
 * 
 * Examples:
 * partition([1,2,3,4,5], function(element,index,arr){
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 */
function partition(array, test){
   var failingArray = reject(array, test);
   var passingArray = filter(array, test); 
   var partitionArray = [];
   partitionArray.push(passingArray);
   partitionArray.push(failingArray);
   return partitionArray; 
}
module.exports.partition = partition;

/**
 * map: Designed to iterate over an object or array and creates a new array with
 * the results of calling a Function test on every element in the calling collection.
 * 
 * @param {Array or Object} collection: the array or object over which to iterate and test
 * @param {Function} test: The Function to be applied to each value in the object
 * or array. 
 * 
 * @return {Array} returns an array with values modified by the fuction test call
 * 
 * Examples:
 * map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
 
 function map(collection, test) {
    var mapArray = [];
    var result = '';
      each(collection, function(e,i,a){
           result = test(e,i,a);
           mapArray.push(result);
            });
        return mapArray;
}
module.exports.map = map;

/**
 * pluck: Designed to iterate over an array of objects and return the value corresponding
 * to the key argument inside every object
 * 
 * @param {Array} arrayOfObjects: the array containing object elements to iterate over
 * @param {Object Key} key: the key to find in every object
 * 
 * @return {Array} returns array with the value paired to Key in each object. 
 * 
 * Examples:
 * pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
function pluck(arrayOfObjects, key) {
    var newArray = []
    let results = map(arrayOfObjects, function(e){
        return e[key];
    });
    return results; 
}
module.exports.pluck = pluck;

/**
 * every: Designed to iterate over an array or object and apply the 
 * test Function to each value in the collection.
 * 
 * @param {Array or Object} collection: the array or object to iterate over
 * @param {Function} test: the function to applied to element in collection
 * 
 * @return {Boolean} returns true if every element passes the test Funciton, false
 * otherwise or if no test is provided. 
 * 
 * Examples:
 * every([2,4,6], function(e){return e % 2 === 0}) -> true
 * every([1,2,3], function(e){return e % 2 === 0}) -> false
 */
 function every(collection, test) {
 var bool = true;
 if (test) {
   each(collection, function(e,i,c) {
       if (!test(e,i,c)) {
           bool = false;
       }
   });
 } else {
     each(collection, function(element) {
        if (!element){
        bool = false;
        } 
     });
 }
 return bool;
 }
 module.exports.every = every;
 
 /**
 * some: Designed to iterate over an array or object and apply the 
 * test Function to each value in the collection.
 * 
 * @param {Array or Object} collection: the array or object to iterate over
 * @param {Function} test: the function applied to every element in collection
 * 
 * @return {Boolean} returns true if a single element in collection passes the 
 * test Funciton or if no function is provided. Returns false is all elements 
 * fail test Funciton.
 * 
 * Examples:
 * some([1,3,5], function(e){return e % 2 === 0}) -> false
 * some([1,3,5], function(e){return e % 2 === 0}) -> false
 */
function some(collection, test) {
    var bool = false;
    if (test) {
   each(collection, function(e,i,c) {
       if (test(e,i,c)) {
           bool = true;
        } 
   });
    } else {
        each(collection, function(element) {
        if (element){
            bool = true;
        } 
    });
 }
 return bool;
 }
 
 module.exports.some = some;
 
/**
 * reduce: Designed to iterate over an array and reduce it to a single value by
 * passing each element through the test Function, from left-to-right. 
 * 
 * @param {Array} array: the array or object to iterate over
 * @param {Function} test: the function applied to every element in collection
 * @param {Number} seed: Optional. The inital value. If no seed provided, test
 * functions starts at first value in array. 
 * 
 * @return {Number} returns a single value in collection passes the 
 * test Funciton or if no function is provided. Returns false is all elements 
 * fail test Funciton.
 * 
 * Examples:
 * reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return 
 *   previousSum + currentValue }, 0) -> 6
 */
function reduce(array, test, seed) {
   each(array, function(e,i,c){
       if (seed === undefined){
         seed = c[0];
       } 
       else {
        seed = test(seed, e, i);
    }  
   });
      return seed; 
}
 module.exports.reduce = reduce;
 
 /**
 * extend: Designed to combine properties from multiple objects into one. Can be 
 * passed an infinite amount of Object arguments. 
 * 
 * @param {Object} obj1: the object to combine all others into 
 * @param {Objects} ...args: a stand-in for other possible Object arguments
 * 
 * @return {Object} returns a single updated Object that holds all other Object
 * properties
 * 
 * Examples:
 * extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 * extend(data, {a:"two"}); -> data now equals {a:"two"}
 */
 
 function extend(obj1,...args){
   var currentObj = {};
    for (var index = 0; index < args.length; index++) {
        currentObj = args[index];
        each(currentObj, function(e,i,c) {
            obj1[i] = currentObj[i];
        });
    }
    return obj1;
}
 module.exports.extend = extend;