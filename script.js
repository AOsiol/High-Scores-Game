// var startbtn = document.querySelector("start");
// var timeDisplay = document.querySelector("timeDisplay");
// var totalScores = document.querySelector("totalScores");
var currentQuestion = 0;
var timer = getElementById("timer");
var time = timer.text();



// // press start button to start alerts with questions and timer
document.getElementById("startBtn").addEventListener("click", function () {
    appendQuestion(questions[currentQuestion]);
    // show timer
    startTheTimer();
});




// // button to view stored high scores
// totalScores = addEventListener("click", function() {



// });






// // timer, starts at 60 sec, counts down and skips 10 sec with each question answered incorrectly


var startTheTimer = function() {
    timer.text(time);

    var counter = setInterval(function() {

        time = time - 1;
        timer.text(time);
    })
    // }, 1000);

};





// // questions start once "start" is clicked. Brought up in random, one correct answer, three incorrect.
var questions = [
    {
        question: "What does CSS stand for?",
        options: {
            "Cats Standing Still",
            "Computer Sending Signals",
            "Cascading Simple Sheets"
        },
        correctAnswer: "Cascading Style Sheets"
    },

    {
        question: "What is a tag in HTML?",
        options: {
            "A function",
            "Identifies the action of HTML",
            "Gives a name to the line of code"
        },
        correctAnswer: "Defines how browser will format and display"
    },

    {
        question: "JavaScript commonly interacts with what programming languages?",
        options: {
            "French and Russian",
            "C++ and Java",
            "jQuery and Java"
        },
        correctAnswer: "HTML and CSS"
    },

    {
        question: "What is the syntax for writing a function?",
        options: {
             "var = function",
             "name function(code to execute){parameter1, parameter2}",
             "function(parameter1, parameter2) name"
        },
        correctAnswer: "function name(parameter1, parameter2){code to execute}"
    },

    {
        question: "JavaScript has been described as...",
        option: {
            "light or dark roast.",
            "giving design to HTML.",
            "keeping the computer from crashing."
        },
        correctAnswer: "code that animates a website."
    },
]

var appendQuestion = function(anyquiz) {
    rows.first().empty();
    rows.last().empty();
}
// When correctAnswer is clicked


    
// When option




// end of game stops timer, adds score to list or scores