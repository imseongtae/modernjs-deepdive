/* eslint-disable no-undef */

// 전역 변수 x는 호이스팅이 발생한다
console.log('x:', x);

// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않음
// console.log('y:', y);
console.log('y ->', 'ReferenceError: y is not defined');

var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 10;
}

foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다
console.log('x + y:', x + y);
