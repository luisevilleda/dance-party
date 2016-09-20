var RainbowDancer = function RainbowDancer(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rainbowDancer');
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.oldStep = Dancer.prototype.step;

RainbowDancer.prototype.step = function step() {
  this.danceMove();
  this.oldStep();
};

RainbowDancer.prototype.danceMove = function danceMove() {
  var red = this.randomNumber(0, 255);
  var blue = this.randomNumber(0, 255);
  var green = this.randomNumber(0, 255);

  var styleSettings = {
    'border-color': 'rgb(' + red + ',' + green + ',' + blue + ')'
  };

  this.$node.css(styleSettings);
};