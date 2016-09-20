var MorphyDancer = function MorphyDancer(top, left, timeBetweenSteps) {
  RainbowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('morphyDancer');
};

MorphyDancer.prototype = Object.create(RainbowDancer.prototype);
MorphyDancer.prototype.constructor = MorphyDancer;
MorphyDancer.prototype.oldStep = this.prototype.step;

MorphyDancer.prototype.step = function step() {
  var _this = this;
  _this.danceMove();
  this.oldStep();
  _this.oldStep();
};

MorphyDancer.prototype.danceMove = function danceMove() {
  console.log('morphy dance');
  var corners = [];
  for (var i = 0; i < 4; i++) {
    console.log(1);
    corners.push(this.randomNumber(0, 50));
  }

  var styleSettings = {
    'border-radius': corners[0] + '% ' + corners[1] + '% ' + corners[2] + '% ' + corners[3] + '%'
  };

  this.$node.css(styleSettings);

};

