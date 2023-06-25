//create question here
function Quiz(question){
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionByIndex = function(){
 return this.question[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(answer){

    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.question.length;
}


function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function (choice){
 return this.answer === choice;
}

let question = [
    new Question("Which of the following can be used to call a JavaScript Code Snippet",["Function","Preprocessor","Triggering Event","RMI"],"Function"),
    new Question("Which built-in method combines the text of two strings and returns a new string",["append()","concat()","attach()","None of these"],"concat()"),
    new Question("Javascript is an ",["Object Oriented","Object based","Procedural"],"Object Oriented"),
    new Question("Which is used for connect to DataBase",["PHP","HTML","JS","ALL"],"PHP"),
    new Question("How can a datatype be declared to be a constant type",["const","var","let","constant"],"const")
 ];

function loadQuestions(){
    if(quiz.isEnded()){
        showScores();
    } else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().text;

        //show options
        var choices = quiz.getQuestionByIndex().choices;
        for(let i =0; i<choices.length; i++){
            var choice = document.getElementById("choice" + i);
            choice.innerHTML = choices[i];
            handleOptionButton("btn"+i,choices[i]);
        }

        showProgress();
    }
}

function showScores(){
    var gameOverHtml = "<h1>Results</h1>";
    gameOverHtml+= "<h2 id='score'> Your Scores:  " + quiz.score + " . And Percentage is: " + (quiz.score/question.length*100) + "%" + "</h2>";
      var element = document.getElementById("quiz");
      element.innerHTML = gameOverHtml;
}

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.question.length;
}

function handleOptionButton(id,choice){
   let button = document.getElementById(id);
    button.onclick = function(){
       quiz.checkOptionWithAnswer(choice);
       loadQuestions();
   }

  }


 //create Quiz
 var quiz = new Quiz(question);

 //LoadingQuestions
 loadQuestions();