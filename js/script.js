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

    let count=0;

    $("#verify").click(function () {
        guessOne = $("#number1").val();
        guessTwo = $("#number2").val();
        guessThree = $("#number3").val();
        guessFour =  $("#number4").val();
        $("#userChoice").text(guessOne + guessTwo + guessThree + guessFour);
        
        if ((guessOne==="")||(guessTwo==="")||(guessThree==="")||(guessFour==="")) {
            alert("Please complete all inputs");
        } else {
            count++;
        $("#counter").text("Number of Guesses: "+count);
        }
        
        
        numbersCorrect=0;
        numbersInPlace=0;
        
        if (guessOne===randomNumber1) {
            numbersInPlace++;
            numbersCorrect++;
        } else if((guessOne===randomNumber2)
                ||(guessOne===randomNumber3)
                ||(guessOne===randomNumber4)) {
                    numbersCorrect++;
        }
    
        if (guessTwo===randomNumber2) {
            numbersInPlace++;
            numbersCorrect++;
        } else if((guessTwo===randomNumber1)
                ||(guessTwo===randomNumber3)
                ||(guessTwo===randomNumber4)) {
                    numbersCorrect++;
        }
    
        if (guessThree===randomNumber3) {
            numbersInPlace++;
            numbersCorrect++;
        } else if((guessThree===randomNumber1)
                ||(guessThree===randomNumber2)
                ||(guessThree===randomNumber4)) {
                    numbersCorrect++;
        }
    
        if (guessFour===randomNumber4) {
            numbersInPlace++;
            numbersCorrect++;
        } else if((guessFour===randomNumber1)
                ||(guessFour===randomNumber2)
                ||(guessFour===randomNumber3)) {
                    numbersCorrect++;
        }
        
        console.log(numbersCorrect);
        console.log(numbersInPlace);
        
        $("#results_inplace").text("Numbers in place: " + numbersInPlace);
        $("#results_correct").text("Numbers correct: " +numbersCorrect);
        
        if (numbersInPlace === 4){
            alert("You've won!");
        }
    
    console.log(guessOne);
    console.log(randomNumber1);

        
    });

});