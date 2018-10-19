// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var first
var second
var third
var fourth


// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    first=Math.floor(Math.random()*10);
    
});


$("#verify").click(function () {
    var numOne = $("#number1").val();
    var numTwo = $("#number2").val();
    var numThree = $("#number3").val();
    var numFour =  $("#number4").val();
    $("#userChoice").text(numOne + numTwo + numThree + numFour);
});
    

