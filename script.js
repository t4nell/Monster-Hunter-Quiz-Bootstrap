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
    },
    {
        "question": "Frage: Als was werden die Wächter-Monster im Monsterlexikon kategorisiert?",
        "answer_1": "Reliktwesen",
        "answer_2": "Waffe",
        "answer_3": "Wächter",
        "answer_4": "Konstrukt",
        "right_answer": 4
    },
    {
        "question": "Frage: Wie viele Apex-Prädatoren gibt es in Monster Hunter Wilds?",
        "answer_1": "4",
        "answer_2": "5",
        "answer_3": "6",
        "answer_4": "7",
        "right_answer": 1
    },
    {
        "question": "Frage: Als was wird Gore Magala kategorisiert?",
        "answer_1": "Drachenältester",
        "answer_2": "Semi-Ältester",
        "answer_3": "Flugwyvern",
        "answer_4": "Sonderkategorie",
        "right_answer": 2
    },
    {
        "question": "Frage: Welches Element macht beim Chatacabra an keinem Körperteil Zusatzschaden?",
        "answer_1": "Feuer",
        "answer_2": "Wasser",
        "answer_3": "Eis",
        "answer_4": "Drache",
        "right_answer": 4
    },
    {
        "question": "Frage: Wodurch kannst du bei Rathalos vergiftet werden?",
        "answer_1": "Kopf",
        "answer_2": "Schwanz",
        "answer_3": "Krallen",
        "answer_4": "Flügel",
        "right_answer": 3
    },
    {
        "question": "Frage: Welchen Trick konnte man bei Gypceros benutzen, um die Flash-Attacke zu kontern?",
        "answer_1": "Die Angel ausrüsten",
        "answer_2": "Einen Trank trinken",
        "answer_3": "Mit dem Fernrohr in die Flash schauen",
        "answer_4": "Einen Grill platzieren und sich hinsetzen",
        "right_answer": 3
    },
    {
        "question": "Frage: Wie oft kann man den Schwanz beim Hirabami brechen?",
        "answer_1": "1",
        "answer_2": "3",
        "answer_3": "5",
        "answer_4": "7",
        "right_answer": 3
    },
    {
        "question": "Frage: Welches kleine Monster tritt nicht in der Windebene auf?",
        "answer_1": "Vespoid",
        "answer_2": "Gajios",
        "answer_3": "Bulaqchi",
        "answer_4": "Talioth",
        "right_answer": 1
    },
];


let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('./assets/audio/good-boy-male-voice-praise-352699.mp3');
let AUDIO_fail = new Audio('./assets/audio/aww-cute-reaction-6208.mp3');
let AUDIO_GAME_OVER = new Audio('./assets/audio/game-over-deep-male-voice-clip-352695.mp3');
let AUDIO_WIN_2 = new Audio('./assets/audio/congratulations-deep-voice-172193.mp3');
let AUDIO_WIN_1 = new Audio('./assets/audio/winning-218995.mp3');


function init() {
    showQuestion()
};


function showQuestion() {
    if (isQuizComplete()) {
        displayEndScreen();
    }else {
        updateProgress();
        updateNextQuestion();  
    };
};


function isQuizComplete() {
    return currentQuestion >= questions.length;
};


function updateNextQuestion() {
    
    let question = questions[currentQuestion];
    document.getElementById('next_button').disabled = true;
    document.getElementById('all_questions').innerHTML = questions.length;
    document.getElementById('question_number').innerHTML = currentQuestion + 1;
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
};


function updateProgress() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-number').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
};


function displayEndScreen() {
    document.getElementById('end_screen').style = '';
    document.getElementById('question_body').style = 'display: none';
    document.getElementById('question_img').style = 'display: none';
    document.getElementById('progress-number-container').style = `display: none`;
    document.getElementById('progress-bar-container').style = `display: none`;
    document.getElementById('amount_of_questions').innerHTML = questions.length;
    document.getElementById('amount_of_right_questions').innerHTML = rightQuestions;
    if (rightQuestions === questions.length) {
        AUDIO_WIN_1.addEventListener('ended', function() {
            AUDIO_WIN_2.play();
        });
        AUDIO_WIN_1.play();
    } else {
        AUDIO_GAME_OVER.play();
    }
};


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (isAnswerCorrect(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success')
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        AUDIO_fail.play();
    };
    document.getElementById('next_button').disabled = false;
};


function isAnswerCorrect(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
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
};


function restartGame() {
    document.getElementById('end_screen').style = 'display: none';
    document.getElementById('question_body').style = 'display: block';
    document.getElementById('question_img').style = 'display: block';
    document.getElementById('progress-number-container').style = 'display: block; width: 100%; height: 20px; text-align: center';
    document.getElementById('progress-bar-container').style = 'display: block; margin-top: 4px;';
    document.getElementById('progress-bar').style = 'display: block; height: 100%';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
};