/**
 * 전달받은 인수가 유한수인지 확ㅇ니하고 그 결과를 반환한다
 * @param {number} - 검사 대상값
 * @return {boolean} 유한수 여부 확인 결과
 */

console.log('===== 인수가 유한수이면 true를 반환함 =====');
console.log('isFinite(0):', isFinite(0));
console.log('isFinite(2e64):', isFinite(2e64));
console.log('isFinite(10):', isFinite('10')); // '10' -> 10
console.log('isFinite(null):', isFinite(null)); // null -> 0

console.log(
  '\n===== 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환 =====',
);
console.log('isFinite(Infinity):', isFinite(Infinity));
console.log('isFinite(-Infinity):', isFinite(-Infinity));

console.log('\n===== 인수가 NaN으로 평가되는 값이라면 false를 반환 =====');
console.log('isFinite(NaN):', isFinite(NaN));
console.log('isFinite("Hello"):', isFinite('Hello'));
console.log('isFinite("2015/12/12"):', isFinite('2015/12/12'));
