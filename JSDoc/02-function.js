// @ts-check

/**
 * 두 수의 합을 구한다 - TypeScript syntax를 사용하는 방법
 * @type { (a: number, b: number) => number}
 */
const add = (a, b) => a + b;
console.log('add():', add(1, '2'));

/**
 * 두 수의 곱을 구한다 - Closure syntax를 사용하는 방법
 * @type { function(number, number): number }
 */
const multiply = (a, b) => a * b;

/**
 * 두 수의 차를 구한다 - JSDoc syntax를 활용하는 방법
 * @param {number} a - the first thing
 * @param {number} b - ths second thing
 * @returns {number}
 */
const subtract = (a, b) => a - b;
console.log(subtract(1, 2));

// Parameters may be declared in a variety of syntactic forms
/**
 * @todo To Do
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @return {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4) {
  // TODO
  return '';
}
