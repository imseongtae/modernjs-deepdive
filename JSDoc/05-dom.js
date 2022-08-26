// @ts-check

// 태그 이름 input을 인수로 전달하면서 querySelector를 호출하면 HTMLInputElement 타입이 반환되는 것으로 인식한다.
const $input1 = document.querySelector('input');
// HTMLInputElement 타입의 객체에는 value 프로퍼티가 존재하므로 에러가 발생하지 않는디.
$input1.value = 'input-1 hello';

// 클래스 foo를 인수로 전달하면서 querySelector를 호출하면 Element 타입이 반환되는 것으로 인식한다.
const $input2 = document.querySelector('.foo');
// Element 타입의 객체에는 value 프로퍼티가 존재하지 않기 때문에 에러가 발생한디.
$input2.value = 'input-2 hello';
// ~~~~~ Property 'value' does not exist on type 'Element'.ts(2339)

// $input3를 HTMLInputElement 타입으로 타입 단언한다.
/** @type {HTMLInputElement} */
const $input3 = document.querySelector('.foo');
$input3.value = '$input-3 hello';

// $input4를 HTMLInputElement 타입으로 타입 단언한다.
const $input4 = /** @type {HTMLInputElement} */ (
  document.querySelector('.foo')
);
$input4.value = 'input-4 hello';

// $input5를 HTMLInputElement 타입으로 타입 단언한다.
const $input5 = document.querySelector('.foo');
/** @type {HTMLInputElement} */ ($input5).value = 'input-5 hello';
