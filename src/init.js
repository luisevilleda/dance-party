$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     console.log('click');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log('func name ', dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log('dancer obj: ', dancer);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $('.lineUp').on('click', function(event) {

    console.log('lineup click');

    var counter = 50;

    window.dancers.forEach( function linerUpper(ele) {
      var styleSettings = {
        top: '65%',
        left: counter + 'px'
      };
      console.log('linerUpper Running');
      ele.$node.css(styleSettings);
      counter += 50;
    });


    // var lineMakerFunctionName = $(this).data('line-maker-function-name');
    // console.log('func name ', lineMakerFunctionName);
    // // get the maker function for the kind of dancer we're supposed to make
    // var lineMakerFunction = window[lineMakerFunctionName];
    // this.lineMakerFunctionName();
    // // make a dancer with a random position


  });
});

