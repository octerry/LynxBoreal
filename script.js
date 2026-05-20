let currentQuestion = 0;
let score = 0;
function showQuestion() {

    const questionElement =
        document.getElementById("question");

    const answersElement =
        document.getElementById("answers");

    questionElement.innerText =
        quiz[currentQuestion].question;

    answersElement.innerHTML = "";

    quiz[currentQuestion].answers.forEach((answer, index)=>{

        const button =
            document.createElement("button");

        button.innerText = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click", ()=>{

            if(index === quiz[currentQuestion].correct){
                score++;
                button.classList.add("correct");
            } else {
                button.classList.add("wrong");
            }

        });

        answersElement.appendChild(button);

    });

}const nextBtn =
    document.getElementById("next-btn");

nextBtn.addEventListener("click", ()=>{

    currentQuestion++;

    if(currentQuestion < quiz.length){
        showQuestion();
    } else {
        showResult();
    }

});function showResult(){

    const container =
        document.getElementById("quiz-container");

    container.innerHTML = `
        <h1>Quiz terminé !</h1>

        <h2>
            Votre score : ${score}/${quiz.length}
        </h2>
    `;
}