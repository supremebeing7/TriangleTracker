describe('Triangle', function() {
  describe('type', function() {
    it('categorizes it as equilateral if all sides are equal', function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 4;
      testTriangle.sideB = 4;
      testTriangle.sideC = 4;
      testTriangle.type().should.equal("equilateral");
    });

    it('caterogizes it as an isosceles if two side are the same', function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 5;
      testTriangle.sideB = 5;
      testTriangle.sideC = 3;
      testTriangle.type().should.equal("isosceles");
    });

    it('categorizes it as a scalene triangle if no two sides are equal', function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 2;
      testTriangle.sideB = 3;
      testTriangle.sideC = 4;
      testTriangle.type().should.equal("scalene");
    });
  });

  describe('invalid', function() {
    it('returns true if it is an invalid triangle', function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 88;
      testTriangle.sideB = 150;
      testTriangle.sideC = 5;
      testTriangle.invalid().should.equal(true);
    });
  });
});
