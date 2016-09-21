// Creates and returns a new dancer object that can step
var randMove = false;
var Dancer = function(top, left, timeBetweenSteps) {
  // console.log('NEW INSTANCE');
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.step = function step() {
  // console.log('dancer step');
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (randMove) {
    this.randomMove();
  }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function setPosition(top, left, transTime) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  transTime = transTime || 4;
  var styleSettings = {
    top: top,
    left: left,
    'z-index': top,
    //transition-time: top time/velY +'s', left time/velX +'s'
    'transition-duration': transTime + 's'

  };
  this.$node.css(styleSettings);
};
// console.log($(window).width());

Dancer.prototype.randomMove = function randomMove() {
  var left = Dancer.prototype.randomNumber(100, $(window).width() - 100);
  var top = Dancer.prototype.randomNumber(100, $(window).height() - 100);
  this.setPosition(top, left);
};

Dancer.prototype.randomNumber = function randomNumber(lowerLimit, upperLimit) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
};

// Dancer.prototype.lineUp = function lineUp() {
//   var counter = 20;

//   window.dancers.forEach( function linerUpper() {
//     var styleSettings = {
//       top: '50px',
//       left: counter + 'px'
//     };
//     console.log('linerUpper Running')
//     this.$node.css(styleSettings);
//     counter += 20;
//   }.bind(this));

// };