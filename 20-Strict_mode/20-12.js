(function () {
  'use strict';

  function foo() {
    console.log('foo');
    console.log(this); // undefined, 원래는 글로벌 객체를 반환함
  }
  foo();

  function Foo() {
    console.log('Foo');
    console.log(this); // Foo
  }
  new Foo();
})();
