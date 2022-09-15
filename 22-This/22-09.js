// var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티
// const는 전역 프로퍼티가 아님
var value = 1;
console.log('global value:', value);

const obj = {
  value: 100,
  foo() {
    console.log('foo method this:', this);
    console.log('foo method this.value:', this.value);

    function bar() {
      console.log('bar function this:', this);
      console.log('bar function this.value:', this.value);
    }

    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출하면 중첩 함수 내부의 this에는 전역객체가 바인딩됨
    // bar.call(this);
    // bar.apply(this);
    // bar.bind(this)();
    bar();
  },
};

obj.foo();
