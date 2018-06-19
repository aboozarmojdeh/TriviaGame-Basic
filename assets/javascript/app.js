


var questions = [

    {
        question: "1 - Javascript is _ _ _ _  language.",
        choice: ["Programming", "Application", "Scripting", "Literature", "None"],
        answer: "Scripting"
    },

    {
        question: "2 - JavaScript is _ _ _ _ Side Scripting Language.",
        choice: ["Server", "ISP", "Browser", "Machine", "None"],
        answer: "Browser"
    },
    {
        question: "3 - Cost for Using JavaScript in your HTML is $ _ _ _ _ /Year.",
        choice: ["Free", "Ten", "Fifteen", "Five", "Twenty"],
        answer: "Free"
    },
    {
        question: "4-JavaScript Code is written inside file having extension (. _ _ _ _)",
        choice: ["jvs", "javascript", "js", "jsc", "script"],
        answer: "js"
    },
    {
        question: "5- Local Browser used for validations on the Web Pages uses _ _ _ _.",
        choice: ["Java", "CSS", "HTML", "JS", "nodeJS"],
        answer: "JS"
    },
    {
        question: "6- Which of the following Attribute is used to include External JS code inside your HTML Document?",
        choice: ["link", "script", "src", "ext", "jsrc"],
        answer: "src"
    },
    {
        question: "7- Which attribute is used to specifies that the script is executed when the page has finished parsing (only for external scripts)?",
        choice: ["type", "defer", "async", "parse", "call"],
        answer: "defer"
    },

    {
        question: "8- _ _ _ _ attribute is used to specify the character encoding used in an external script file.",
        choice: ["type", "charset", "character", "charsetOf", "none"],
        answer: "charset"
    },

    {
        question: "9- Which was the first browser to support JavaScript ?",
        choice: ["Firefox", "Chrome", "IE", "Netscape", "Opera"],
        answer: "Netscape"
    },

    {
        question: "10-We use _ _ _ _ style comment to prevent showing Java Script as Content in the old browsers.",
        choice: ["JS", "CSS", "HTML", "C", "JAVA"],
        answer: "HTML"
    },
];

var quesBuilder = [];
var inputBuilder = [];
var spanBuilder = [];

var formBuilder = document.createElement("form");


formBuilder.setAttribute('id', "qForm");


for (var i = 1; i < questions.length + 1; i++) {

    quesBuilder[i] = document.createElement("p");
    quesBuilder[i].setAttribute('id', "Q" + i);
    quesBuilder[i].setAttribute('class', "quesText");
    quesBuilder[i].innerHTML = "<br>"+questions[i - 1].question;
    formBuilder.appendChild(quesBuilder[i]);

    for (var j = 1; j < 6; j++) {

        inputBuilder[j] = document.createElement("input");
        inputBuilder[j].setAttribute('id', "inputRadio"+i+j);
        inputBuilder[j].setAttribute('type', "radio");
        inputBuilder[j].setAttribute('name', "q" + i + "choice");
        inputBuilder[j].setAttribute('value', questions[i - 1].choice[j - 1]);
        formBuilder.appendChild(inputBuilder[j]);

        spanBuilder[j] = document.createElement("span");
        spanBuilder[j].setAttribute("id", "q1C1");
        spanBuilder[j].setAttribute('class', "choiceText");
        spanBuilder[j].innerHTML = questions[i - 1].choice[j - 1]+"&emsp;";
        formBuilder.appendChild(spanBuilder[j]);
    }

}

var submitBuilder = document.createElement("input");

submitBuilder.setAttribute("type", "submit");
submitBuilder.setAttribute('id', "submitBtn");
submitBuilder.setAttribute('class', "btn btn-primary");
submitBuilder.setAttribute('value', "I'm Finished!");
submitBuilder.setAttribute('onclick', "check(),stop()");


var breakBuilder = document.createElement("br");

document.getElementsByTagName('article')[0].appendChild(formBuilder);
document.getElementsByTagName('article')[0].appendChild(breakBuilder);
document.getElementsByTagName('article')[0].appendChild(submitBuilder);


var correct = 0;
    var inCorrect = 0;
    var unAnswered = 0;
//-----Functions------
$(".quizPage").hide();
$(".submitPage").hide();


$("#startUpBtn").on("click", function(){

    
    $("#startScreen").hide();


    
    $(".quizPage").show();
    run();
   

});





var number=60;
var numberCounter;


function decrement(){

    number--;
    document.getElementById("counterText").innerHTML=number;


if (number<10){

   
    document.getElementById("counterText").style.color="red";
    document.getElementById("timer").style.color="red";

}


if (number<1){

    stop();
    check();
    document.getElementById("counterText").innerHTML="Time Up!";
    document.getElementById("restartBtn").style.display="block";

}


};



function stop(){
    clearInterval(numberCounter)
};



function run(){
    clearInterval(numberCounter)
    numberCounter=setInterval(decrement,1000);
    
}

function reStart(){
    $(".submitPage").hide();

    $(".quizPage").show();
    document.getElementById("counterText").innerHTML="60 Seconds";
    
    number=60;
    
    uncheck()
    
    
    correct = 0;
    inCorrect = 0;
    unAnswered = 0;
    document.getElementById("correctAnswerscr").innerHTML = correct;
    document.getElementById("unAnsweredscr").innerHTML = unAnswered;
    document.getElementById("incorrectAnswerscr").innerHTML = inCorrect;
    document.getElementById("counterText").style.color="black";
    document.getElementById("timer").style.color="black";
  
    
    run();

}

function uncheck() {
    for (var i = 1; i < questions.length + 1; i++) {
        for (var j = 1; j < 6; j++) {
    document.getElementById("inputRadio"+i+j).checked = false;

}
    }
}



function check() {
    correct = 0;
    inCorrect = 0;
    unAnswered = 0;
    
    $(".quizPage").hide();
$(".submitPage").show();
    
  



///////////////////////////////////////////////////////////////
    var ans1 = document.getElementById("qForm").q1choice.value;
    var ans2 = document.getElementById("qForm").q2choice.value;
    var ans3 = document.getElementById("qForm").q3choice.value;
    var ans4 = document.getElementById("qForm").q4choice.value;
    var ans5 = document.getElementById("qForm").q5choice.value;
    var ans6 = document.getElementById("qForm").q6choice.value;
    var ans7 = document.getElementById("qForm").q7choice.value;
    var ans8 = document.getElementById("qForm").q8choice.value;
    var ans9 = document.getElementById("qForm").q9choice.value;
    var ans10 = document.getElementById("qForm").q10choice.value;

    var ans = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10];

///////////////////////////////////////////////////////////////////
    for (i = 0; i < questions.length; i++) {

        if (ans[i] == questions[i].answer) {
            correct++

            document.getElementById("correctAnswerscr").innerHTML = correct;
        } else if (ans[i] === "") {
            unAnswered++

            document.getElementById("unAnsweredscr").innerHTML = unAnswered;

        } else {
            inCorrect++


            document.getElementById("incorrectAnswerscr").innerHTML = inCorrect;
        }
    }
     
};

