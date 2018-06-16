
var questions = [{
            ques: "10. When the first qualifying game for 2018 World Cup took place?",
            ans:["10 March 2015", "12 March 2015", "14 April 2015", "19 May 2015"],
            name: "Q10",
            correct: "12 March 2015",
            divClass: ".Q10"
        },
        {
            ques: "9. How many teams has been qualified for Fifa World Cup 2018?",
            ans: ["22", "32", "42", "40"],
            name: "Q9",
            correct: "32",
            divClass: ".Q9"
        },
        {
            ques: "8. There are how many host cities of Fifa World Cup 2018?", 
            ans: ["10", "11", "12", "13"],
            name: "Q8",
            correct: "11",
            divClass: ".Q8"
        },
        {
            ques: "7. There are how many groups in Fifa World Cup 2018 championships?", 
            ans: ["16", "8", "10", "12"],
            name: "Q7",
            correct: "8",
            divClass: ".Q7"
        },
        {
            ques: "6. There are how many teams in a group in FIFA World Cup 2018 championships?", 
            ans: ["6", "8", "4", "10"],
            name: "Q6",
            correct: "4",
            divClass: ".Q6"
        },
        {
            ques: "5. How many times the FIFA World Cup held so far till 2018?", 
            ans: ["18", "19", "20", "21"],
            name: "Q5",
            correct: "19",
            divClass: ".Q5"
        },
        {
            ques: "4. What is the venue of Fifa World cup 2018 final championship?", 
            ans: ["Luzhniki Stadium", "Krestovsky Stadium", "Kaliningrad Stadium", "Central Stadium"],
            name: "Q4",
            correct: "Luzhniki Stadium",
            divClass: ".Q4"
        },
        {
            ques: "3. What are the two countries first ever appearing in FIFA World Cup 2018?", 
            ans: ["Morocco and Peru", "Panama and Iceland", "Serbia and Poland", "Senegal and Tunisia"],
            name: "Q3",
            correct: "Panama and Iceland",
            divClass: ".Q3"
        },
        {
            ques: "2. How many matches will be played in FIFA World Cup 2018 Championships?", 
            ans: ["54", "60", "40", "64"],
            name: "Q2",
            correct: "64",
            divClass: ".Q2"
        },
        {
            ques: "1. What is the host team of FIFA World Cup 2018?", 
            ans: ["Spain", "Germany", "Russia National Football Team", "Portugal"],
            name: "Q1",
            correct: "Russia National Football Team",
            divClass: ".Q1"
        }
    ]

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
        for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}

var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
};

var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    countdown();
    $('.container').fadeOut(500);
    $('#answerScreen').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);

});