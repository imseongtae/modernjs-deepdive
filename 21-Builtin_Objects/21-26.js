/**
 * 전달받은 문자열 인수를 정수로 해석하여 반환한다
 * @param {string} string - 변환 대상 값
 * @param {number} [radix] - 진법을 나타내는 기수(2 ~ 36, 기본값 10)
 * return {number} 변환 결과
 *
 * parseInt(string, radix);
 */

console.log('두 번째 인수로 진법을 나타내는 기수를 전달할 수 있다.');

// '10'을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log('parseInt("10"):', parseInt('10'));

// '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log('parseInt("10", 2):', parseInt('10', 2));

// '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log('parseInt("10", 8):', parseInt('10', 8));

// '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log('parseInt("10", 16):', parseInt('10', 16));
