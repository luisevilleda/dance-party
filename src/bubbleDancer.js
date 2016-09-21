var BubbleDancer = function BubbleDancer(top, left, timeBetweenSteps, bubCounter) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bubble');
  this.timeBetweenSteps = timeBetweenSteps;
  this.bubCounter = bubCounter;
  this.left = left;
  this.top = top;
};

BubbleDancer.prototype = Object.create(Dancer.prototype);
BubbleDancer.prototype.constructor = BubbleDancer;
BubbleDancer.prototype.colorStep = RainbowDancer.prototype.danceMove;
BubbleDancer.prototype.oldStep = Dancer.prototype.step;

BubbleDancer.prototype.step = function step() {
  this.oldStep();
  this.colorStep();
  this.danceMove();
  this.kill();
};

BubbleDancer.prototype.danceMove = function danceMove(transTime) {
  var randHeight = danceHeight * Math.random();
  var randOpac = Math.random();
  // console.log('bbl dance', this.timeBetweenSteps, randHeight)
  var styleSettings = {
    top: randHeight + 'px',
    //transition-time: top time/velY +'s', left time/velX +'s'
    'transition-duration': transTime + 's',
    opacity: randOpac
  };
  this.$node.css(styleSettings);
};

BubbleDancer.prototype.kill = function kill() {
  var randOpac = Math.random();

  setTimeout(function() {
    var styleSettings = {
      width: '20px',
      height: '20px',
      left: this.left + '- 10px',
      top: this.top + '- 10px',
      'transition-duration': '.1s',
      // opacity: randOpac
    };
    this.$node.css(styleSettings);
    $('#bubble' + this.bubCounter).fadeOut(100);
    setTimeout(function() {
      $('#bubble' + this.bubCounter).remove();
    }.bind(this), 500);
  }.bind(this), this.timeBetweenSteps + 2500);
};