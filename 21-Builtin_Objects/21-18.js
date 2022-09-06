const x = 1;

function foo() {
  'use strict';

  // strict mode 에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성함
  eval('var x = 2; console.log(x)'); // 2
  console.log('inner x:', x); // 1
}

foo();
console.log('global x:', x);
