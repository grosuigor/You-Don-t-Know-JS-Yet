"use strict";

/*
Therange(..)functiontakesanumberasitsfirstargument,representing the first number in a desired range of numbers.Thesecondargumentisalsoanumberrepresentingtheendofthe desired range (inclusive). If the second argument is omit-ted, then another function should be returned that expectsthat argument.You Don’t Know JS Yet: Get Started
*/

function range(start,end) {
  const inner = function(end2) {
    const arr = []
    for (let i = start; i <= end2; i++) {
      arr.push(i)
    }
    return arr
  }
  if (end === undefined) {
    return inner
  }
  return inner(end)
}
console.log(range(3,3));// [3]
console.log(range(3,8));// [3,4,5,6,7,8]
console.log(range(3,0));// []

var start3=range(3);
var start4=range(4);
console.log(start3(3));// [3]
console.log(start3(8));// [3,4,5,6,7,8]
console.log(start3(0));// []
console.log(start4(6));// [4,5,6]