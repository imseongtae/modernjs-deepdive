const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다
console.log('x.toString(2):', x.toString(2));
// '1111'을 2진수로 해석하고 그결과를 10진수 정수로 반환한다
console.log('parseInt(x.toString(2), 2):', parseInt(x.toString(2), 2));

console.log('\n10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다');
console.log('x.toString(8):', x.toString(8));
// 문자열 '17'을 8진수로 해석하고 그결과를 10진수 정수로 반환한다
console.log('parseInt(x.toString(8), 8):', parseInt(x.toString(8), 8));

console.log('\n10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다');
console.log('x.toString(16):', x.toString(16)); // -> 'f'
// 문자열 'f'을 16진수로 해석하고 그결과를 10진수 정수로 반환한다
console.log('parseInt(x.toString(16), 16):', parseInt(x.toString(16), 16));

console.log('\n숫자값을 문자열로 변환한다');
console.log('x.toString():', x.toString()); // -> '15'
// 문자열 '15'를 10진수로 해석하고 그결과를 10진수 정수로 반환한다
console.log('parseInt(x.toString()):', parseInt(x.toString()));
