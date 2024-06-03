//обращение к БД
//вытягивание данных
//заполнение массива данными из БД

const questions = [
	{
		question: "Какой долг компании??",
        explanation: "Это все финансовые обязательства, которые организация взяла на себя, но не смогла выполнить",		
		correct: [10], // значение корректное для вопроса
	},
	{
		question: "Какой собственный капитал компании?",
        explanation: "Это разница между активами и обязательствами организации",	
		correct: [10],
	},
	{
		question: "Цена акции?",
        explanation: "Текущая рыночная стоимость актива",	
		correct: [10],
	},
	{
		question: "Количество акций компании?",
        explanation: "Все акции компании в обращении на рынке",	
		correct: [10],
	},
];

const answers = [];

// переменные опросника
let score = 0; // кол-во набранных баллов
const maxScore = questions.length * 5; //
let questionIndex = 0; // текущий вопрос

let userSurname, userName, userPatronymi, userEmail, userPassword; 

let nameCompany = ''; //название компании
let securitiesKind = ''; // вид ценной бумаги
let securitiesCoast = ''; // стоимость бумаги

const positiveAnswer = 'Хороший результат';
const averageAnswer = 'Средний результат';
const negativeAnswer = 'Плохой результат';

// находим элементы
const mainContainer = document.querySelector('main');

//логика работы программы
//clearPage();
//showPageLogUp();
//showPageLogIn();
showPage2Menu();
//showPage3ChoosIndustry();
//showPage4FillOutTheForm();
//showPage5OutputQuestion();
//showPage6Results();

//определение функций

//очистка стартовой старницы
function clearPage(){
	mainContainer.innerHTML = '';
}

//ВЫВОД СТРАНИЦ

//выводим страницу 1.1 регистрации
function showPageLogUp(){
    mainContainer.innerHTML = `
    <div id="page1-1" class="window-with-info-about-page">
        <h2 class="info-on-the-page">Регистрация</h2>

        <section>
            <input type="text" id="userSurname"    placeholder="Фамилия: Иванов">
            <input type="text" id="userName"       placeholder="Имя: Иван">
            <input type="text" id="userPatronymi" placeholder="Отчество: Иванович">
            <input type="text" id="userEmail"      placeholder="Почта: ivanov@mail.ru">
            <input type="text" id="userPassword"   placeholder="Пароль:">
        </section>
        
        <button class="buttons" id="log-up">Регистрация</button>

        <p>
            Уже зарегистрированны? <br>
            Можете <button id="log-in">Войти</button>
            <!--<a href="">ВОЙТИ</a>-->
        </p>
    </div>
    `;

    //если нажали на "Регистрация"
    const logUp = document.getElementById('log-up');
    logUp.addEventListener('click', function() {
        
        // присваиваем введенные значения полей формы
        userSurname = document.getElementById('userSurname').value;
        userName= document.getElementById('userName').value;     
        userPatronymi = document.getElementById('userPatronymi').value;
        userEmail = document.getElementById('userEmail').value;  
        userPassword = document.getElementById('userPassword').value;

        //проверка заполенны ли все поля
        let checkValues = (userSurname.length > 0) 
                            && (userName.length > 0) 
                            && (userPatronymi.length > 0)
                            && (userEmail.length > 0)
                            && (userPassword.length > 0)
        if(!checkValues){
            alert('Поля не заполнены!!!');
        }
        else{
            //проверяем есть ли пользователь с такой же почтой
            let flag = 0;
            for (let i = 0; i < users.length; i++) {
                //введенная почта уже есть в базе или нет? 
                if(users[i]['userEmail'] === userEmail){
                    flag++; // увеличиваем значение, если почта была найдена в БД
                }
            }

            //значение счетчика !=0, то нового пользователя не создают
            if(flag !== 0){
                alert('Пользователь с данной почтой уже зарегистрирован!!!');
                console.log(flag);
                //showPageLogUp();
            }
            else{
                users.push({
                    ["userSurname"]:userSurname,
                    ["userName"]:userName,
                    ["userPatronymi"]:userPatronymi,
                    ["userEmail"]:userEmail,
                    ["userPassword"]:userPassword
                });

                alert('Пользователь зарегистрирован!');

                //clearPage();
                //showPageLogIn();
                console.log(users);
            }
            
        }
    });

    //если нажали на "Войти"
    const logIn = document.getElementById('log-in');
    logIn.addEventListener('click', function() {
        clearPage();
        showPageLogIn();
    });

    //дописать логику к переходу по ссылке сразу к авторизации
}
//выводим страницу 1.2 авторизации
function showPageLogIn(){
    mainContainer.innerHTML = `
    <div id="page1-2" class="window-with-info-about-page">
        <h2 class="info-on-the-page">Войти</h2>

        <section>
            <input type="text" id="userEmail"    placeholder="Почта: ivanov@mail.ru">
            <input type="text" id="userPassword" placeholder="Пароль:">
        </section>
        
        <button class="buttons" id="log-in">Войти</button>

        <p>
            Еще не зарегистрированны? <br>
            Можете <button id="log-up">Зарегистрироваться</button> 
            <!--<a href="">Зарегистрироваться</a>-->
        </p>
    </div>
    `;

    //если нажали на "Войти"
    const logIn = document.getElementById('log-in');
    logIn.addEventListener('click', function() {
        // присваиваем введенные значения полей формы
        userEmail = document.getElementById('userEmail').value;  
        userPassword = document.getElementById('userPassword').value;

        //проверка заполенны ли все поля
        let checkValues = (userEmail.length > 0) && (userPassword.length > 0)

        if(!checkValues){
            alert('Поля не заполнены!!!');
        }
        else{
            let flag = 0;
            for (let i = 0; i < users.length; i++) {
                //введенная почта с паролем из БД совпадают?

                checkEmailAndPassword = (users[i]['userEmail'] === userEmail) 
                                        && (users[i]['userPassword'] === userPassword)

                if(checkEmailAndPassword){
                    flag++; // увеличиваем значение, если почта была найдена в БД
                }
            }

            //значение счетчика !=0, пользователь входит
            if(flag !== 0){
                clearPage()
                showPage2Menu();
            }
            else{
                alert('Почта или пароль не верны!!!');
            }
        }
        
    });

    //если нажали на "Зарегистрироваться"
    const logUp = document.getElementById('log-up');
    logUp.addEventListener('click', function() {
        clearPage();
        showPageLogUp();
    });
}
//выводим страницу 2 - главное меню
function showPage2Menu(){
    mainContainer.innerHTML = `
    <div id="page2" class="window-with-info-about-page">
        <h2 class="info-on-the-page">МЕНЮ</h2>
        <button class="buttons" id="to-select-a-security">Отобрать ценную бумагу</button>
        <button class="buttons" id="papers-that-passed-survey">Бумаги прошедшие опрос</button>
        <button class="buttons" id="database-of-questions">вопросы</button>
        <button class="buttons" id="database-of-multipliers">мультипликаторы</button>
        <button class="buttons" id="backToStart">Выйти из приложения</button>
    </div>
    `;

    //если нажали на "Отобрать ценную бумагу"
    const selectSecurity = document.getElementById('to-select-a-security');
    selectSecurity.addEventListener('click', function() {
        clearPage();
        showPage3ChoosIndustry();
    });

    //если нажали на "Бумаги прошедшие опрос"
    const papersThatPassedSurvey = document.getElementById('papers-that-passed-survey');
    papersThatPassedSurvey.addEventListener('click', function() {
        document.location='./page7-Assets.html';
    });

    //если нажали на "вопросы"
    const databaseQuestions = document.getElementById('database-of-questions');
    databaseQuestions.addEventListener('click', function() {
        // showPage8Questions();
        document.location='./page8-Questions.html';
    });

    //если нажали на "мультипликаторы"
    const databaseMultipliers = document.getElementById('database-of-multipliers');
    databaseMultipliers.addEventListener('click', function() {
        //showPage9Multipliers();
        document.location='./page9-Multipliers.html';
    });

    //если нажали на "Выйти из приложения"
    const backToStart = document.getElementById('backToStart');
    backToStart.addEventListener('click', function() {
        // clearPage();
        // showPageLogUp();
        document.location = '../';
    });
}

//выводим страницу 3 - выбор отрасли
function showPage3ChoosIndustry(){
    mainContainer.innerHTML = `
    <div id="page3" class="window-with-info-about-page">
        <h2 class="info-on-the-page">ОТРАСЛЬ</h2>
        <button class="broken-buttons" id="information-technology">IT</button>
        <button class="broken-buttons" id="telecommunications">Телекоммуникации</button>
        <button class="buttons"        id="oil-and-gas">Нефть и газ</button>
        <button class="broken-buttons" id="metal-mining">Добыча металлов</button>
        <button class="broken-buttons" id="electric-power-industry">Электроэнергетика</button>
        <button class="broken-buttons" id="finance">Финансы</button>
        <button class="buttons"        id="back-in-menu">Назад</button>
    </div>
    `;

    //если нажали на "Нефть и газ"
    const informationTechnology = document.getElementById('oil-and-gas');
    informationTechnology.addEventListener('click', function() {
        clearPage();
        showPage4FillOutTheForm(); 
    });

    //если нажали на "Назад"
    const backInMenu = document.getElementById('back-in-menu');
    backInMenu.addEventListener('click', function() {
        clearPage();
        showPage2Menu();
    });
}

//выводим страницу 4 - Заполнение формы
function showPage4FillOutTheForm(){
    mainContainer.innerHTML = `
    <div id="page4" class="window-with-info-about-page">
        <h2 class="info-on-the-page">ФОРМА</h2>
        <input type="text" id="nameCompany" placeholder="Название компании">
        <input type="text" id="securitiesKind" placeholder="акция/облигация">
        <input type="text" id="securitiesCoast" placeholder="Стоимость $">
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
        let checkValues = (nameCompany.length > 0) 
                            && (securitiesKind.length > 0) 
                            && (securitiesCoast.length > 0)
        if(checkValues){
            clearPage();
            showPage5OutputQuestion();
        }
        else{
            alert('Поля не заполнены!!!');
        }
    });

    //если нажали на "Назад"
    const backInChoosIndustry = document.getElementById('back-in-choos-industry');
    backInChoosIndustry.addEventListener('click', function() {
        clearPage();
        showPage3ChoosIndustry();
    });
}

//выводим страницу 5 - Вывод вопроса
function showPage5OutputQuestion(){
    const mainTemplate = `
    <div id="page5" class="window-with-info-about-page">
        <section class="question-conclusion">
            %question%
        </section>

        <section class="clarification-output">
            %explanation%
        </section>   
        
        <input type="text" class="input-value" id="valueId" placeholder="значение">
        <button class="buttons" id="toAnswer">Ответить</button>
    </div>
    `;
    
    const question = mainTemplate
                                .replace('%question%', questions[questionIndex]['question'])
                                .replace('%explanation%', questions[questionIndex]['explanation']);

    //выводим вопрос
	mainContainer.innerHTML = question;

    //если нажали Ответить
    const toAnswer = document.getElementById('toAnswer');
    toAnswer.addEventListener('click', function() {
        //console.log('нажата Ответить');

        //значение введенное пользователем
        let val = document.getElementById('valueId').value;

        //проверка: введено ли значение
        checkValue = (val.length > 0);

        if (checkValue) {
            //процент расхождения с эталлонным значением мультипликатора
            //let num = Math.abs(100 - (Number(val)*100)/questions[questionIndex]['correct']);

            answers.push(val);
            //console.log(val);
            //console.log(answers);
            nextQuestion();
        } else {
            alert('Поле не заполненно!!!');
        }  
    });
}

//выводим страницу 6 - Рузультат опроса
function showPage6Results(){
    const mainTemplate = `
    <div id="page6" class="window-with-info-about-page">
        <h2 class="info-on-the-page">ИТОГ</h2>
        <span class="results">Компания: %nameCompany%</span>
        <span class="results">Вид бумаги: %securitiesKind%</span>
        <span class="results">Стоимость: %securitiesCoast% $</span>
        <span class="results">Набранный балл: %score%</span>
        <span class="results">Вывод: %message%</span>
        <button class="buttons" id="complete-survey">Завершить опрос</button>
    </div>
    `;

    for (const key in answers) {
        //процент расхождения с эталлонным значением мультипликатора
        let num = Math.abs(100 - (Number(answers[key])*100)/questions[key]['correct']);
        if(num >= 50){
            continue;
        }

        if(num <= 25){
            score +=5;
        }
        
        if(num > 25 && num < 50){
            score +=3;
        }
    }

    let message;

    if(score >= (maxScore * 0.75)){ //>=15
        message = positiveAnswer;
    }
    if(score < (maxScore * 0.75) && score >= (maxScore * 0.5)){ //от 10 до 15 
        message = averageAnswer;
    }
    if(score < (maxScore * 0.50)){ // до 10
        message = negativeAnswer;
    }

    const results = mainTemplate
                                .replace('%nameCompany%', nameCompany)
                                .replace('%securitiesKind%', securitiesKind)
                                .replace('%securitiesCoast%', securitiesCoast)
                                .replace('%score%', score)
                                .replace('%message%', message);

    //выводим вопрос
	mainContainer.innerHTML = results;

    //если нажали на "Завершить опрос"
    const completeSurvey = document.getElementById('complete-survey');
    completeSurvey.addEventListener('click', function() {

        score = 0; // кол-во набранных баллов
        questionIndex = 0; // текущий вопрос
        console.log('questionIndex очищен: ' + questionIndex);

        while (answers.length !=0) {
            answers.pop();
        }
        console.log('массив answers очищен: ' + answers);

        nameCompany = ''; //название компании
        securitiesKind = ''; // вид ценной бумаги
        securitiesCoast = ''; // стоимость бумаги

        clearPage();
        showPage2Menu(); 
    });
}

//вывод всех вопросов
function showPage8Questions(){
    //вопросы
    const questions = [];

    for (let i = 0; i < 14; i++) {
        questions[i] = 'Вопрос ' + (i+1) + '?';
    }

    let questionTemplate = ``;

    for (let i = 0; i < questions.length; i++) {
        questionTemplate +=`
        <li>${questions[i]}</li>
        `
    }
    
    const questionContainer = `
    <div id="page8" class="window-with-info-about-page">

            <h2 class="info-on-the-page">Вопросы</h2>

            <section>
                <ul>
                    ${questionTemplate}
                </ul>
            </section>

            <button class="buttons" id="back-in-menu">Назад</button>
        </div>
    `;
    
    mainContainer.innerHTML = questionContainer;

    //если нажали на "Назад"
    const backInMenu = document.getElementById('back-in-menu');
    backInMenu.addEventListener('click', function() {
        clearPage();
        showPage2Menu();
    });
}

//вывод всех мультипликаторов
function showPage9Multipliers(){
    //вопросы
    const multipliers = [];

    for (let i = 0; i < 14; i++) {
        multipliers[i] = 'Мультипликатор ' + (i+1);
    }

    let multiplierTemplate = ``;

    for (let i = 0; i < multipliers.length; i++) {
        multiplierTemplate +=`
        <li>${multipliers[i]}</li>
        `
    }
    
    const multiplierContainer = `
    <div id="page9" class="window-with-info-about-page">

            <h2 class="info-on-the-page">Мульти-пликаторы</h2>

            <section>
                <ul>
                    ${multiplierTemplate}
                </ul>
            </section>

            <button class="buttons" id="back-in-menu">Назад</button>
        </div>
    `;
    
    mainContainer.innerHTML = multiplierContainer;

    //если нажали на "Назад"
    const backInMenu = document.getElementById('back-in-menu');
    backInMenu.addEventListener('click', function() {
        clearPage();
        showPage2Menu();
    });
}

//ФУНКЦИИ

//переход к следующему вопросу
function nextQuestion(){
    if(questionIndex !== (questions.length - 1)){
		//console.log('это НЕ последний вопрос');
		questionIndex++;
		clearPage();
		showPage5OutputQuestion();
	}else{
		//console.log('был последний вопрос ');
		clearPage();
		showPage6Results();
	}
}