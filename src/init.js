var pointerX = 0, pointerY = 0;
var oldPointerX = 0, oldPointerY = 0;
var pointerXVel = 0;
var pointerYVel = 0;
var mult = .05;
var baseDist = 30;
var baseTrans = 5;
var velCap = 25;
var danceWidth = $(window).width(), danceHeight = $(window).height();

$( document ).on( "mousemove", function( event ) {
  pointerX = event.pageX;
  pointerY = event.pageY;
});

$(document).ready(function() {
  window.dancers = [];
  window.bubbles = [];

  var velocityCalc = function velocityCalc () {
    setInterval(function() {
      pointerXVel = Math.min((pointerX - oldPointerX), velCap);
      pointerYVel = Math.min((pointerY - oldPointerY), velCap);
      oldPointerX = pointerX;
      oldPointerY = pointerY;
      // console.log(pointerXVel, pointerYVel);
    }, 100);
  }();

  // Bubble Gen
  var bubbleGen = function bubbleGen() {
    var bubCounter = 0;
    setInterval(function() {
      bubCounter++;
      var bubble = new BubbleDancer(
      $(window).height() - 25,
      $('.dancefloor').width() * Math.random(),
      (Math.random() + .5) * 7000,
      bubCounter

    );
      (window.bubbles).push(bubble);

    // console.log('bubble ');
      $('body').append(bubble.$node);
      bubble.$node.attr('id', 'bubble' + bubCounter);
      // console.log();
    }

    , 100);

  }();




  $( 'body' ).on('mouseenter', '.dancer', function(event) {
    // console.log('mouseenter')
    // console.log($(this).offset());
    var objX = $(this).offset().left;
    var objY = $(this).offset().top;
    objX = objX + (baseDist * mult * pointerXVel);
    objY = objY + (baseDist * mult * pointerYVel);

    //dance floor boundaries
    objX = Math.max(objX, 100);
    objX = Math.min(objX, (danceWidth - 0));
    objY = Math.max(objY, 500);
    objY = Math.min(objY, (danceHeight - 200));

    // console.log(danceWidth, danceHeight);

    var styles = {
      top: objY + 'px',
      left: objX + 'px',
      'transition-duration': baseTrans / ((pointerXVel + pointerYVel) / 2) + 's'
    };

    $(this).css(styles);

  });

    // make a dancer with a random position
  var addDancer = function addDancer (dancerMakerFunction, dancerMakerFunctionName, gifClass) {
    var whereToAppend = '.dancefloor';
    var heightOffset = 500;
    var randFactor = 2000;

    if (dancerMakerFunctionName === 'MorphyDancer' || dancerMakerFunctionName === 'RainbowDancer') {
      whereToAppend = '.danceroof';
      heightOffset = 50;
      randFactor = 4000;
    }

    var dancer = new dancerMakerFunction(
      $(whereToAppend).height() * Math.random() + heightOffset,
      $(whereToAppend).width() * Math.random(),
      (Math.random() + .25) * randFactor
    );
    // console.log('dancer obj: ', dancer);
    $(whereToAppend).append(dancer.$node);
    gifClass ? dancer.$node.addClass(gifClass) : null;
    window.dancers.push(dancer);
  };

  $('.addFancyDancer').on('click', function(event) {
    // console.log('click');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log('func name ', dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    addDancer(dancerMakerFunction, dancerMakerFunctionName);
      
    // });

  });


  $('.addDancerButton').on('click', function(event) {
    // console.log('click');
    if ($('.gifselector').length) {
      $('.gifselector').toggle();
    } else {
      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      // console.log('func name ', dancerMakerFunctionName);
      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      var gifChoices = ['buzz','sully','jack','banana']

      gifChoices.forEach(function(gifChoice, i){
        var $gifbutton = $('<span class="gifselector"></span>');
        $gifbutton.attr('id', gifChoice);
        $('.topbar').append($gifbutton);
        console.log($gifbutton)
        var styleSettings = {
          top: '32px',
          left: (i * 125 + 400) + 'px'
        };
        $gifbutton.css(styleSettings);
        $gifbutton.addClass(gifChoice);

      });
    }
  });

  $('body').on('click', '.gifselector', function(event) {
    var gifClass = event.target.id;
    addDancer(window['Dancer'], 'Dancer', gifClass);
    // $('.gifselector').fadeOut(700);
    // console.log(x)
  });


  $('.lineUp').on('click', function(event) {

    // console.log('lineup click');

    var counter = 50;

    window.dancers.forEach( function linerUpper(ele) {
      var styleSettings = {
        top: '65%',
        left: counter + 'px'
      };
      // console.log('linerUpper Running');
      ele.$node.css(styleSettings);
      counter += 50;
    });

  });

  $('.randomMove').on('click', function(event) {
    randMove = !randMove;
  });

});

