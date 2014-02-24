var Triangle = {
  invalid: function() {
    var triangleArray = [this.sideA, this.sideB, this.sideC].sort(function(a,b) {
      return a-b;
    });
    console.log(parseInt(triangleArray[1]));
    if (parseInt(triangleArray[0]) + parseInt(triangleArray[1]) < parseInt(triangleArray[2])) {
      return true;
    }
  },

  type: function () {
    if (this.sideA === this.sideB && this.sideB === this.sideC && this.sideA === this.sideC) {
      return "equilateral";
    } else if (this.sideB === this.sideC || this.sideA === this.sideB || this.sideC === this.sideA) {
      return "isosceles";
    } else if (this.sideB !== this.sideC && this.sideA !== this.sideB && this.sideC !== this.sideA) {
      return "scalene";
    }
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();

    var inputSideA = $("input#side-a").val();
    var inputSideB = $("input#side-b").val();
    var inputSideC = $("input#side-c").val();
    var newTriangle = Object.create(Triangle);
    newTriangle.sideA = inputSideA;
    newTriangle.sideB = inputSideB;
    newTriangle.sideC = inputSideC;

    if (newTriangle.invalid() === true) {
      alert("Enter a valid triangle!");
    } else if (newTriangle.type() === "equilateral") {
      $("ul#equilateral").append("<li>" + newTriangle.sideA + " " + newTriangle.sideB + " " + newTriangle.sideC + "</li>");
    } else if (newTriangle.type() === "isosceles") {
      $("ul#isosceles").append("<li>" + newTriangle.sideA + " " + newTriangle.sideB + " " + newTriangle.sideC + "</li>");
    } else if (newTriangle.type() === "scalene") {
      $("ul#scalene").append("<li>" + newTriangle.sideA + " " + newTriangle.sideB + " " + newTriangle.sideC + "</li>");
    }
    

    this.reset();
  });
});

