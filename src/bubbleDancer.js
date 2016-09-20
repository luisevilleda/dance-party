var BubbleDancer = function BubbleDancer(top, left, timeBetweenSteps, bubCounter) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bubble');
  this.timeBetweenSteps = timeBetweenSteps;
  this.bubCounter = bubCounter;
};

BubbleDancer.prototype = Object.create(Dancer.prototype);
BubbleDancer.prototype.constructor = BubbleDancer;

BubbleDancer.prototype.oldStep = Dancer.prototype.step;

BubbleDancer.prototype.step = function step() {
  this.oldStep();
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
    'transition-duration':  '3s',
    opacity: randOpac
  };
  this.$node.css(styleSettings);
};

BubbleDancer.prototype.kill = function kill() {
  // console.log('kill:' (window.bubbles).length);

  // // this.bubCounter;
  // if (window.bubbles.length > 10) {
  //   // var bub = (window.bubbles).shift();
  //   // console.log('kill:', bub);
  //   this.remove();
  // }
  setTimeout(function() {
    
    // console.log('inside kill', $('bubble' + this.bubCounter))
    // var element = document.getElementById('bubble' + this.bubCounter);
    $('#bubble' + this.bubCounter).remove();
  }.bind(this), this.timeBetweenSteps + 2500);
};