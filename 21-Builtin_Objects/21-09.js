// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다
console.log(`global.parseInt('F', 16):${global.parseInt('F', 16)}`);

// window.parseInt는 parseInt로 호출할 수 있다
console.log(`parseInt('F', 16):${parseInt('F', 16)}`);

console.log('global.parseInt === parseInt:', global.parseInt === parseInt);
