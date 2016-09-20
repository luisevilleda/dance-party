var MorphyDancer = function MorphyDancer(top, left, timeBetweenSteps) {
  RainbowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('morphyDancer');
};

MorphyDancer.prototype = Object.create(RainbowDancer.prototype);
MorphyDancer.prototype.constructor = MorphyDancer;
MorphyDancer.prototype.addStep = RainbowDancer.prototype.danceMove;
MorphyDancer.prototype.oldStep = Dancer.prototype.step;

MorphyDancer.prototype.step = function step() {
  var _this = this;
  _this.danceMove();
  _this.addStep();
  // this.oldStep();
  _this.oldStep();
  _this.randomMove();
};

MorphyDancer.prototype.randomMove = function randomMove() {
  var left = Dancer.prototype.randomNumber(100, $(window).width() - 100);
  var top = Dancer.prototype.randomNumber(100, $(window).height() - 500);
  this.setPosition(top, left);
};

MorphyDancer.prototype.danceMove = function danceMove() {
  // console.log('morphy dance');
  var corners = [];
  for (var i = 0; i < 4; i++) {
    corners.push(this.randomNumber(0, 50));
  }

  var styleSettings = {
    'border-radius': corners[0] + '% ' + corners[1] + '% ' + corners[2] + '% ' + corners[3] + '%'
  };

  this.$node.css(styleSettings);

};

