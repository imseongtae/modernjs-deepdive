const circle = {
  radius: 5,
  getDiameter() {
    // this는 메서드를 호출한 객체를 가리킨다
    return 2 * this.radius;
  },
};

// 객체 리터럴 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 circle을 가리킴
console.log('circle.getDiameter():', circle.getDiameter());
