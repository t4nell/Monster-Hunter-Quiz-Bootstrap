let questions = [
    {
        "question": "Frage: Wie viele Monster gibt es zum Release von Monster Hunter Wilds?",
        "answer_1": "24",
        "answer_2": "12",
        "answer_3": "29",
        "answer_4": "18",
        "right_answer": 3
    },
    {
        "question": "Frage: Wie viele Waffentypen gibt es zum release von Monster Hunter Wilds?",
        "answer_1": "14",
        "answer_2": "12",
        "answer_3": "9",
        "answer_4": "5",
        "right_answer": 1
    }
];

let currentQuestion = 0;

function init() {
    showQuestion()
};


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('next_button').disabled = true;
    document.getElementById('all_questions').innerHTML = questions.length;
    document.getElementById('question_number').innerHTML = currentQuestion +1;
    document.getElementById('question_text').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']
};


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
    };
    document.getElementById('next_button').disabled = false;
};


function nextQuestion() {
    currentQuestion++;
    removeAnswerHighlights();
    showQuestion();
};

function removeAnswerHighlights() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
