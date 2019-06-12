/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Object Binding - The value of "this" is the window or console Object.
* 2. Implicit Binding - this is the object when calling functions using dot notation
* 3. New Binding - this refers to the instance of an object that is created with new and the constructor function's name
* 4. Explicit Binding - happens when this is called explicitly with .call and .apply
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this)
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const nikema = {
  name: "Nikema",
  job: "mom",
  work: function(){
    return `${this.name} is doing her ${this.job} job` 
  } 
}
console.log(nikema.work())

// Principle 3

// code example for New Binding
function Polygon(sides, name = 'polygon') {
  this.sides = sides
  this.name = name
  this.howManySides = function() {
    return `This ${this.name} has ${this.sides} sides`
  }
}
const triangle = new Polygon(3)
const square = new Polygon(4, 'square')
console.log(triangle.howManySides())

// Principle 4

// code example for Explicit Binding
console.log(triangle.howManySides.call(square))