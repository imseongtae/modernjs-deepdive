const person = {
  name: 'Ham',
  address: 'Seoul',
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다
console.log(`'toString' in person: ${'toString' in person}`);

/**
 * for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다
 * 하지만 toString과 같은 Object.prototype의 프로퍼티는 열거되지 않는다
 * 이는 toString이 열거할 수 없기 때문인데,
 * Object.prototype.toString 프로퍼티의 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이기 때문이다
 */
for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}

// name : Ham
// address : Seoul

// Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체를 반환한다
// PropertyDescriptorObject는 프로퍼티 어트리뷰트 정보를 담고 있는 객체다
console.log(
  'toString:',
  Object.getOwnPropertyDescriptor(Object.prototype, 'toString'),
);
