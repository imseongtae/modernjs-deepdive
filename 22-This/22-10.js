// eslint-disable-next-line no-unused-vars
var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this:", this);

    // setTimeout(function () {
    //   console.log("callback's this:", this); // window
    //   console.log("callback's this.value:", this.value);
    // }, 200);

    // 메서드 내부 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법은
    // 1. const that = this;
    // 2. 화살표 함수 사용
    // setTimeout(() => {
    //   // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킴
    //   console.log("callback's this:", this);
    //   console.log("callback's this.value:", this.value);
    // }, 200);

    // 3. 명시적으로 this 바인딩
    setTimeout(
      function () {
        console.log("callback's this:", this);
        console.log("callback's this.value:", this.value);
      }.bind(this),
      200,
    );
  },
};

obj.foo();
