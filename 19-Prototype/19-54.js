// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체 생성
const obj = Object.create(null);
obj.a = 1;

console.log('obj.__proto__ === null:', Object.getPrototypeOf(obj) === null);

// console.log(`obj.hasOwnProperty('a'): ${obj.hasOwnProperty('a')}`);
// TypeError: obj.hasOwnProperty is not a function

// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다
// 왜냐하면 Object.create를 통해 프로토타입 체인의 종점에 위치하는 객체를 생성할 수 있기 때문
// 프로토타입 체인의 종점에 위치하는 객체는 Object.prototype의 빌트인 메서드를 사용할 수 없음
console.log(
  `Object.prototype.hasOwnProperty.call(obj, 'a'): ${Object.prototype.hasOwnProperty.call(
    obj,
    'a',
  )}`,
);
