// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let first;
let second;
let third;
let fourth;

let guessOne="";
let guessTwo="";
let guessThree="";
let guessFour="";

let numbersCorrect=0;
let numbersInPlace=0;

// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    first=Math.floor(Math.random()*10);
    let randomNumber1= first.toString();
    
    second=Math.floor(Math.random()*10);
    let randomNumber2= second.toString();
    
    third=Math.floor(Math.random()*10);
    let randomNumber3= third.toString();
    
    fourth=Math.floor(Math.random()*10);
    let randomNumber4= fourth.toString();


    $("#verify").click(function () {
        guessOne = $("#number1").val();
        guessTwo = $("#number2").val();
        guessThree = $("#number3").val();
        guessFour =  $("#number4").val();
        $("#userChoice").text(guessOne + guessTwo + guessThree + guessFour);
        
        if (guessOne===randomNumber1) {
            
        };
    
        if (guessTwo===randomNumber2) {
            
        };
    
        if (guessThree===randomNumber3) {
            
        };
    
        if (guessFour===randomNumber4) {
            
        };
    
    });
    
});