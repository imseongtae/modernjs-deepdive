const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있음

console.log('arr:', arr); // [ 1, 2, 3, x: 10 ]

console.log('\n===== for...in =====');
console.log('for...in 에서는 프로퍼티 x도 함께 출력된다');
// 배열에는 for...in 문 대신 for, for...of, Array.prototype.forEach 메서드 사용을 권장한다
for (const key in arr) {
  console.log(arr[key]); // 1 2 3 10
}

console.log('\n===== for loop statement =====');
console.log('arr.length:', arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3 10
}

console.log('\n===== Array.prototype.forEach =====');
console.log('forEach 메서드는 요소가 아닌 프로퍼티는 제외한다');
arr.forEach(v => console.log(v)); // 1 2 3

console.log('\n===== for...of =====');
// for...of 는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다
for (const value of arr) {
  console.log(value); // 1 2 3
}
