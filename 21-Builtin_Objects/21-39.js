/* eslint-disable no-undef */
var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20; // window.y = 20;
  console.log('x + y:', x + y);
}
foo(); // 30

console.log('\n===== divider =====\n');

console.log('window.x:', window.x); // 10
console.log('window.y:', window.y); // 20

delete window.x; // 전역 변수는 삭제되지 않는다.
delete window.y; // 프로퍼티는 삭제된다.

console.log('window.x:', window.x); // 10
console.log('window.y:', window.y); // undefined
