const personProto = {
  hobby: 'Development',
};
const person = {
  name: 'Ham',
  address: 'Seoul',
  __proto__: personProto,
};

// console.log(Object.getPrototypeOf(person));
// 객체 자신의 고유 프로퍼티만 열거하기 위해서는 for...in 문을 사용하는 것보다
// Object.keys/values/entries 메서드를 사용하는 것을 권장

// Object.keys 메서드는 객체 자신의 열거 가능한(enumerable) 프로퍼티 키를 배열로 반환
console.log('Object.keys(person):', Object.keys(person));

// Object.values 메서드는 객체 자신의 열거 가능한(enumerable) 프로퍼티 값을 배열로 반환
console.log('Object.values(person):', Object.values(person));

// Object.entries 메서드는 객체 자신의 열거 가능한(enumerable) 프로퍼티 키와 값 쌍의 배열을 배열에 담아 반환
console.log('Object.entries(person):', Object.entries(person));
