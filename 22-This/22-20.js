function getThisBinding() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 함수의 this에 바인딩함
console.log('getThisBinding.apply(thisArg, [1, 2, 3]):');
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));

console.log('\n===== divider =====\n');
console.log('getThisBinding.call(thisArg, 1, 2, 3):');
console.log(getThisBinding.call(thisArg, 1, 2, 3));
