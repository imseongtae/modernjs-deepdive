const x = 1;

function foo() {
  // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정함
  eval('var x = 2;');
  console.log('inner x:', x);
}

foo();
console.log('global x:', x);
