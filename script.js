const questions = [
    {
        question: "Kurš no šiem ir tradicionāls Latvijas ēdiens?",
        answers: ["Pelmeņi", "Sklandrausis", "Plovs", "Borščs"],
        correct: 1
    },
    {
        question: "Kurš ir labākais rajons Rīgā?",
        answers: ["Iļģuciems", "Mežparks", "Purvciems :)", "Ziepniekkalns"],
        correct: 2
    },
	{
        question: "Kur atrodas Brīvības piemineklis ",
        answers: ["Mārupē", "Daugavpilī", "Jelgavā", "Rīgā"],
        correct: 3
    },
	{
        question: "Kurā komandā spēlē K.Porziņģis?",
        answers: ["Boston Celtics", "Dallas Mavericks", "New York Knicks", "Washington Wizards"],
        correct: 0
    },
	{
        question: "Kurš šobrīd ir Latvijas prezidents?",
        answers: ["Edgars Rinkēvičs", "Krišjānis Kariņš", "Egils Levits", "Kārlis Ulmanis"],
        correct: 0
    },
	{
        question: "Jūrmalas šosejas maksimālais braukšanas ātrums?",
        answers: ["70km/h", "90km/h", "100km/h", "110km/h"],
        correct: 3
    },
	{
        question: "Kurā gadā Latvija pievienojās ES?",
        answers: ["2006", "2004", "2005", "2003"],
        correct: 1
    },
	{
        question: "Kā sauc Latvijas pretterorisma vienību?",
        answers: ["Sigma", "Ligma", "Omega", "Delta"],
        correct: 2
    },
	{
        question: "Kā sauc Latvijas garāko upi?",
        answers: ["Daugava", "Ogre", "Lielupe", "Gauja"],
        correct: 3
    },
	{
        question: "Kurš veikals atrodas netālu no RTK?",
        answers: ["LIDL", "Maxima", "Rimi", "Lats"],
        correct: 1
    },
];

let currentQuestionIndex = 0;
let score = 0;
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    showQuestion();
}
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.onclick = () => selectAnswer(index);
    });
}
function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}
function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultElement.textContent = `Jūsu rezultāts: ${score} no ${questions.length}`;
}
restartButton.addEventListener('click', () => {
    location.reload();
});
startQuiz();
