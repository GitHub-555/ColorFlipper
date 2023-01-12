var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$(".btn").click(function () {
  var hexColor = "#";
  for (var i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  $("body").css("backgroundColor", hexColor);
  $(".color").text(hexColor);
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
