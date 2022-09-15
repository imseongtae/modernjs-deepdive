function Circle(radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다
  return this.radius * 2;
};

// 인스턴스 생성
const circle = new Circle(20);

console.log('circle.getDiameter():', circle.getDiameter());
