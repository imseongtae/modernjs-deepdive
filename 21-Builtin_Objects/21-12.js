console.log('Built-in global property');
// 전역 프로퍼티는 window, global을 생략하고 참조할 수 있다.
console.log('\n===== Infinity =====');
console.log('global.Infinity === Infinity:', global.Infinity === Infinity);

// 양의 무한대
console.log('3 / 0:', 3 / 0);
// 음의 무한대
console.log('-3 / 0:', -3 / 0);
// Infinity 는 숫자값이다
console.log('typeof Infinity:', typeof Infinity);

console.log('\n===== NaN =====');
console.log('window.NaN or global.NaN:', global.NaN);
console.log(`Number('xyz'): ${Number('xyz')}`);
console.log(`1 * 'string': ${1 * 'string'}`);
console.log('typeof NaN:', typeof NaN);
console.log('Number.NaN:', Number.NaN);

console.log('\n===== undefined =====');
console.log('global.undefined:', global.undefined);

var foo;
console.log('foo:', foo);
console.log('typeof undefined:', typeof undefined);
