var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
  var rgb = new five.Led.RGB([6, 5, 3]);
  var index = 0;
  var rainbow = ["09FF1A", "666777", "993366", "228844", "A0522D", "F6A6D7", "8F00FF"];

  this.loop(1000, function () {
    rgb.color(rainbow[index++]);
    if (index === rainbow.length) {
      index = 0;
    }
  });
});