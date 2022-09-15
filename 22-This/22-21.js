function convertArgsToArray() {
  console.log(arguments);

  console.log('\n===== divider =====\n');

  // const arr = Array.from(arguments);
  // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성함
  const arr = Array.prototype.slice.call(arguments);
  arr.forEach(item => {
    console.log(item);
  });
  return arr;
}

console.log('convertArgsToArray(1, 2, 3):', convertArgsToArray(1, 2, 3));
