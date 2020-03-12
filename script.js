// var startbtn = document.querySelector("start");
// var timeDisplay = document.querySelector("timeDisplay");
// var totalScores = document.querySelector("totalScores");

const initialQuizTimeSec = 60;
const timerElementId ="timer";
var currentQuestion = 0;

var initializeTimer = function() {
    var timer = document.getElementById(timerElementId);
    timer.innerHTML = initialQuizTimeSec;
}
var updateTimer = function() {
    var timer = document.getElementById(timerElementId);
    var timeVal = parseInt(timer.innerHTML,10);
    if (timeVal > 0) {
        timer.innerHTML = --timeVal;
    }
};
initializeTimer();


// // press start button to start alerts with questions and timer
document.getElementById("startBtn").addEventListener("click", function() {
    var intervalRef = setInterval(updateTimer, 1000);   
});

// // questions start once "start" is clicked. Brought up in random, one correct answer, three incorrect.




    // var questions = [
    //     {
    //         question: "What does CSS stand for?",
    //         options: [
    //             "Cats Standing Still",
    //             "Computer Sending Signals",
    //             "Cascading Simple Sheets",
    //             "Cascading Style Sheets"
    //         ],
    //         correctAnswerIdx: 
    //     },
    
    //     {
    //         question: "What is a tag in HTML?",
    //         options: [
    //             "A function",
    //             "Identifies the action of HTML",
    //             "Gives a name to the line of code"
    //         ],
    //         correctAnswer: "Defines how browser will format and display"
    //     },
    
    //     {
    //         question: "JavaScript commonly interacts with what programming languages?",
    //         options: [
    //             "French and Russian",
    //             "C++ and Java",
    //             "jQuery and Java"
    //         ],
    //         correctAnswer: "HTML and CSS"
    //     },
    
    //     {
    //         question: "What is the syntax for writing a function?",
    //         options: [
    //              "var = function",
    //              "name function(code to execute){parameter1, parameter2}",
    //              "function(parameter1, parameter2) name"
    //         ],
    //         correctAnswer: "function name(parameter1, parameter2){code to execute}"
    //     },
    
    //     {
    //         question: "JavaScript has been described as...",
    //         option: [
    //             "light or dark roast.",
    //             "giving design to HTML.",
    //             "keeping the computer from crashing."
    //         ],
    //         correctAnswer: "code that animates a website."
    //     },
    // ]
 

// When correctAnswer is clicked
// if(correctAnswer.addEventListener){
//         for( i = 0; i < )
// }






// // button to view stored high scores
// totalScores = addEventListener("click", function() {



// });






// // timer, starts at 60 sec, counts down and skips 10 sec with each question answered incorrectly








// end of game stops timer, adds score to list or scores