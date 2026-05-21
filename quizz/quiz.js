const quiz = [

    {
        question: "Quel est le plus grand félin sauvage d'Europe ?",

        answers: [
            "Le chat sauvage",
            "Le lynx boréal",
            "Le léopard",
            "Le serval"
        ],

        correct: 1
    },

    {
        question: "Le lynx boréal est principalement actif la nuit.",

        answers: [
            "Vrai",
            "Faux"
        ],

        correct: 0
    },

    {
        question: "À quel poids peut atteindre un lynx boréal mâle adulte ?",

        answers: [
            "10-15 kg",
            "20-30 kg",
            "40-50 kg",
            "60-70 kg"
        ],

        correct: 1
    },

    {
        question: "Le lynx boréal vit en meute comme le loup.",

        answers: [
            "Vrai",
            "Faux"
        ],

        correct: 1
    },

    {
        question: "Quelle est la principale menace pour le lynx boréal ?",

        answers: [
            "La pollution lumineuse",
            "La disparition de son habitat",
            "Les tempêtes",
            "Le froid"
        ],

        correct: 1
    }

];



/* VARIABLES */

let currentQuestion = 0;

let score = 0;



/* ELEMENTS HTML */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-btn");

const startScreen =
    document.getElementById("start-screen");

const quizContent =
    document.getElementById("quiz-content");

const startButton =
    document.getElementById("start-btn");



/* COMMENCER LE QUIZ */

startButton.addEventListener("click", ()=>{

    startScreen.style.display = "none";

    quizContent.style.display = "block";

    showQuestion();

});



/* AFFICHER QUESTION */

function showQuestion(){

    answersElement.innerHTML = "";

    nextButton.style.display = "none";



    questionElement.innerText =
        quiz[currentQuestion].question;



    quiz[currentQuestion].answers.forEach((answer, index)=>{

        const button =
            document.createElement("button");



        button.innerText = answer;

        button.classList.add("answer-btn");



        button.addEventListener("click", ()=>{

            const allButtons =
                document.querySelectorAll(".answer-btn");



            allButtons.forEach(btn => {

                btn.disabled = true;

            });



            if(index === quiz[currentQuestion].correct){

                score++;

                button.classList.add("correct");

            }

            else{

                button.classList.add("wrong");



                allButtons[quiz[currentQuestion].correct]
                    .classList.add("correct");

            }



            nextButton.style.display = "inline-block";

        });



        answersElement.appendChild(button);

    });

}



/* QUESTION SUIVANTE */

nextButton.addEventListener("click", ()=>{

    currentQuestion++;



    if(currentQuestion < quiz.length){

        showQuestion();

    }

    else{

        showResult();

    }

});



/* RESULTAT FINAL */

function showResult(){

    quizContent.innerHTML = `

        <div id="result-screen">

            <h1>
                Quiz terminé !
            </h1>

            <h2>
                Votre score : ${score}/${quiz.length}
            </h2>

            <button id="restart-btn">

                Rejouer

            </button>

        </div>

    `;



    document
        .getElementById("restart-btn")
        .addEventListener("click", ()=>{

            location.reload();

        });

}