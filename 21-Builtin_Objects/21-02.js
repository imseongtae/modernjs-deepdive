/** String 생성자 함수에 의해 생성된 String 객체  */
const strObj = new String('Ham');

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype
console.log(
  'strObj.__proto__ === String.prototype:',
  Object.getPrototypeOf(strObj) === String.prototype,
);
