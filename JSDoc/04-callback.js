// @ts-check

/**
 * TypeScript syntax를 사용하는 방법
 * @typedef { (data: string, index?: number) => boolean } Predicate1
 */

/**
 * Closure syntax를 사용하는 방법
 * @typedef { function(string, number=): boolean } Predicate2
 */

/**
 * JSDoc syntax를 사용하는 방법
 * @callback Predicate3
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */

/** @type {Predicate3} */
const ok = s => !(s.length % 2);

console.log('test:', ok('test')); // !0 => true
console.log('Pages:', ok('Pages')); // !1 => false
