const personPrototype = { hobby1: 'Football' };
Object.defineProperty(personPrototype, 'hobby2', {
  value: 'Game',
  enumerable: false,
});

const person = {
  name: 'Ham',
  address: 'Seoul',
  __proto__: personPrototype,
};

for (const key in person) {
  console.log(key, ':', person[key]);
}
/**
 * [[Enumerable]]이 false인 프로퍼티는 순회하지 않음
 * name : Ham
 * address : Seoul
 * hobby1 : Football
 */

console.log('============ divider ============');
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10,
};

for (const key in obj) {
  console.log(key, ':', obj[key]);
}

// for ... in문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않음
