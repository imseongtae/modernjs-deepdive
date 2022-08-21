function deepFrozen(target) {
  // 객체가 아니거나 동결된 객체는 무시하고
  // 객체이고 동결되지 않은 객체만 동결한다
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    /**
     * 모든 프로퍼티를 순회하며 재귀적으로 동결한다
     * Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다
     * forEach 메서드는 배열을 순회하며 배열의 각 요소에 대해 콜백 함수를 실행한다
     */
    Object.keys(target).forEach(key => deepFrozen(target[key]));
  }
  return target;
}

const person = {
  name: 'Ham',
  address: { city: 'Seoul' },
};

// 깊은 객체 동결
deepFrozen(person);

console.log('isFrozen:', Object.isFrozen(person));
console.log('isDeepFrozen:', Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log('person:', person); // person: { name: 'Ham', address: { city: 'Seoul' } }
