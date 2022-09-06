// 완전한 URI
const uri = 'http://example.com?name=홍길동&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 인수로 전달받아 이스케이프처리를 위해 인코딩한다
const enc = encodeURI(uri);
console.log('enc:', enc);

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다
const dec = decodeURI(enc);
console.log('dec:', dec);
