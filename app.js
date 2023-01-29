"use strict";
exports.__esModule = true;
var btn = document.querySelector('.btn');
var inputFirst = document.getElementById('num1');
var inputSecond = document.querySelector('#num2');
//INFO base function added for different count arguments
function add() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (acc, item) {
        return (acc += item);
    }, 0);
}
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
btn.addEventListener('click', function () {
    console.log(add(+inputFirst.value, +inputSecond.value));
});
