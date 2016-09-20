describe('dance', function() {
  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });


  it('should call step at least once per second', function() {
    sinon.spy(dancer, 'step');
    expect(dancer.step.callCount).to.be.equal(0);
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
    clock.tick(timeBetweenSteps);

    expect(dancer.step.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(dancer.step.callCount).to.be.equal(2);
  });
});


describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
});


describe('rainbowDancer', function() {

  var rainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change color', function() {
    sinon.spy(rainbowDancer.$node, 'css');
    rainbowDancer.step();
    expect(rainbowDancer.$node.css.called).to.be.true;
  });
});

describe('morphyDancer', function() {

  var morphyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    morphyDancer = new MorphyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(morphyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change color', function() {
    sinon.spy(morphyDancer.$node, 'css');
    morphyDancer.step();
    expect(morphyDancer.$node.css.called).to.be.true;
  });
});
