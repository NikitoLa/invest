//обращение к БД
//вытягивание данных
//заполнение массива данными из БД

//тестовый массив с вопросами
const arrQuestions = ["Вопрос 1?", "Вопрос 2?", "Вопрос 3?", "Вопрос 4?"];

//тестовый массив с пояснениями
const arrExplanation = ["Пояснение 1", "Пояснение 2", "Пояснение 3", "Пояснение 4"];

//массив со всем (json)
const questions = [
	{
		question: "Вопрос 1?",
        explanation: "Пояснение 1",		
		correct: [10], // значение корректное для вопроса
	},
	{
		question: "Вопрос 2?",
        explanation: "Пояснение 2",	
		correct: [10],
	},
	{
		question: "Вопрос 3?",
        explanation: "Пояснение 3",	
		correct: [10],
	},
	{
		question: "Вопрос 4?",
        explanation: "Пояснение 4",	
		correct: [10],
	},
];

// переменные опросника
let questionIndex = 0; // текущий вопрос

let nameCompany = ''; //название компании
let securitiesKind = ''; // вид ценной бумаги
let securitiesCoast = ''; // стоимость бумаги

const arrAnswer = []; // массив для записи ответов на вопросы

// находим элементы
const mainContainer = document.querySelector('main'); //поле с выводом основного контента

//логика работы программы
clearPage()
showPage4FillOutTheForm();
//showPage5OutputQuestion();


//определение функций

//очистка стартовой старницы
function clearPage(){
	mainContainer.innerHTML = '';
}

//выводим страницу 4 - Заполнение формы
function showPage4FillOutTheForm(){
    mainContainer.innerHTML = `
    <div id="page4" class="window-with-info-about-page">
        <h2 class="info-on-the-page">ЗАПОЛНИТЕ ФОРМУ</h2>

        <section class="complection-form">
            <span>Название компании:</span>
            <input type="text" class="inputs" id="nameCompany" placeholder="Название">
        </section>
        
        <section class="complection-form">
            <span>Вид ценной бумаги:</span>
            <input type="text" class="inputs" id="securitiesKind" placeholder="акция/облигация">
        </section>
            
        <section class="complection-form">
            <span>Cтоимость бумаги:</span>
            <input type="text" class="inputs" id="securitiesCoast" placeholder="$">
        </section>

        <button class="buttons" id="the-survey">Перейти к опросу</button>
        <button class="buttons" id="back-in-choos-industry">Назад</button>
    </div>
    `;

    //если нажали на "Перейти к опросу"
    const theSurvey = document.getElementById('the-survey');
    theSurvey.addEventListener('click', function() {

        // присваиваем введенные значения полей формы
        nameCompany = document.getElementById('nameCompany').value;
        securitiesKind = document.getElementById('securitiesKind').value;
        securitiesCoast = document.getElementById('securitiesCoast').value;

        //проверка заполенны ли все поля
        //let checkValues = (nameCompany.length > 0) 
        //                    && (securitiesKind.length > 0) 
        //                    && (securitiesCoast.length > 0)
        //if(checkValues){
        //    clearPage();
        //    showPage5OutputQuestion();
        //}
        //else{
        //    alert('Поля не заполнены!!!');
        //}

        showPage5OutputQuestion();
    });
    
    //если нажали на "Назад"
    //const backInChoosIndustry = document.getElementById('back-in-choos-industry');
    //backInChoosIndustry.addEventListener('click', function() {
    //    clearPage();
    //    showPage3ChoosIndustry();
    //});
}

//выводим страницу 5 - Вывод вопроса
function showPage5OutputQuestion(){

    const mainTemplate = `
    <div id="page5" class="window-with-info-about-page">
        <p class="question-conclusion">
            %question%
        </p>

        <p class="clarification-output">%explanation%</p>          
        <input type="text" class="input-value" id="valueId" placeholder="значение">

        <button class="buttons" id="toAnswer">Ответить</button>
    </div>
    `;

    const question = mainTemplate
                                //.replace('%question%', questions[questionIndex]['question'])
                                //.replace('%explanation%', questions[questionIndex]['explanation']);
                                .replace('%question%', arrQuestions[questionIndex])
                                .replace('%explanation%', arrExplanation[questionIndex]);

    //выводим вопрос
	mainContainer.innerHTML = question;

    //если нажали Ответить
    const toAnswer = document.getElementById('toAnswer');
    toAnswer.addEventListener('click', function() {
        //console.log('нажата Ответить');

        //присваивание переменной введенное значение
        let val = document.getElementById('valueId').value;
        arrAnswer.push(val);
        console.log("В массиве: " + arrAnswer);

        nextQuestion();
    });

}

////переход к следующему вопросу
function nextQuestion(){
    if(questionIndex !== (questions.length - 1)){
		//console.log('это НЕ последний вопрос');
		questionIndex++;
		clearPage();
		showPage5OutputQuestion();
	}else{
		//console.log('был последний вопрос ');
		clearPage();
        //showPage6Results();
		alert('Вопросы закончились');
        
        //очистка массива с ответами
        while(arrAnswer.length !== 0){
            arrAnswer.pop();
        }
        console.log(arrAnswer);

        //очистка значения текущего вопроса
        questionIndex = 0;

        //переход к началу опроса просто для тестов
        showPage4FillOutTheForm();
	}
}