const person = {
  name: 'Ham',
  foo(callback) {
    // 일반 함수로 호출된 콜백 함수
    // setTimeout(callback, 200);

    // bind 메서드로 callback 함수 내부의 this 바인딩 전달
    setTimeout(callback.bind(this), 200);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`);
  // 일반 함수로 호출된 콜백 함수내부의 this.name은 브라우저 환경에서 window.name과 같다
  // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ' '이다.
  // Node.js 환경에서 this.name은 undefined
});
