var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  // console.log(5);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function step() {
  // call the old version of step at the beginning of any call to this new version of step
  this.danceMove();
  // console.log(3);
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
};

BlinkyDancer.prototype.danceMove = function danceMove() {
  this.$node.toggle();
  console.log('blinky dancer dance move');
};

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;