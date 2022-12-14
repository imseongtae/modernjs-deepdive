function Foo() {}

// Prptotype Method
// this를 참조하지 않는 프토토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다
Foo.prototype.x = function () {
  console.log('this를 참조하지 않는 prptotype method');
};

const foo = new Foo();
// 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다
foo.x();

// Static Method
Foo.x = function () {
  console.log('this를 참조하지 않는 static method');
};

// 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다
Foo.x();
