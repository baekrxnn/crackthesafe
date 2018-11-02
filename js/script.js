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
            numbersInPlace+1
        } else if((guessTwo===randomNumber1)
                ||(guessTwo===randomNumber3)
                ||(guessTwo===randomNumber4)) {
                    numbersInPlace+1;
            }
    
        if (guessTwo===randomNumber2) {
            numbersInPlace+1
        } else if((guessTwo===randomNumber1)
                ||(guessTwo===randomNumber3)
                ||(guessTwo===randomNumber4)) {
                    numbersInPlace+1;
            }
    
        if (guessThree===randomNumber3) {
            numbersInPlace+1
        } else if((guessThree===randomNumber1)
                ||(guessThree===randomNumber2)
                ||(guessThree===randomNumber4)) {
                    numbersInPlace+1
            }
    
        if (guessFour===randomNumber4) {
            numbersInPlace+1;
        } else if((guessFour===randomNumber1)
                ||(guessFour===randomNumber2)
                ||(guessFour===randomNumber3)) {
                    numbersInPlace+1;
            }
        $("#results_inplace").text("Numbers in place: " + numbersInPlace);
        $("#results_correct").text("Numbers correct: " +numbersCorrect);
        
        if (numbersInPlace === 4){
            alert("You've won!");
        }
    
    console.log(guessOne);
    console.log(randomNumber1);

        
    });
        $("#results_inplace").text("Numbers in place: " + numbersInPlace);
        $("#results_correct").text("Numbers correct: " +numbersCorrect);
        
        if (numbersInPlace === 4){
            alert("You've won!");
        }
    
    console.log(guessOne);
    console.log(randomNumber1);
});