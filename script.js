// Данные игроков дня 1
const day1Players = [
    { number: 1, name: "Настя К", entry: 4100, start: 2100, rebuy: 0, exit: 17955, result: 19955 },
    { number: 2, name: "Максим Spy", entry: 4100, start: 2100, rebuy: 0, exit: 12980, result: 14980 },
    { number: 3, name: "Макс Пиво", entry: 4100, start: 2100, rebuy: 0, exit: 11495, result: 13495 },
    { number: 4, name: "Наташа Бонд", entry: 4100, start: 2100, rebuy: 0, exit: 10120, result: 12120 },
    { number: 5, name: "Robert Юниксфактёр", entry: 4100, start: 2100, rebuy: 2000, exit: 10025, result: 10025 },
    { number: 6, name: "Дмитрий Ник", entry: 4100, start: 2100, rebuy: 2000, exit: 9915, result: 9915 },
    { number: 7, name: "Сергей Ман", entry: 4100, start: 2100, rebuy: 0, exit: 6350, result: 8350 },
    { number: 8, name: "Влад Владшток", entry: 4100, start: 2100, rebuy: 0, exit: 3330, result: 5330 },
    { number: 9, name: "Шурик Шилкин", entry: 4100, start: 2100, rebuy: 0, exit: 2815, result: 4815 },
    { number: 10, name: "Ксения Куд", entry: 4100, start: 2100, rebuy: 2000, exit: 4445, result: 4445 },
    { number: 11, name: "Родион Шашурин", entry: 4100, start: 2100, rebuy: 0, exit: 2400, result: 4400 },
    { number: 12, name: "Роман Егоров", entry: 4100, start: 2100, rebuy: 2000, exit: 4170, result: 4170 },
    { number: 13, name: "Богдан А", entry: 4100, start: 2100, rebuy: 2000, exit: 3760, result: 3760 },
    { number: 14, name: "Родион К", entry: 4100, start: 2100, rebuy: 0, exit: 145, result: 2145 },
    { number: 15, name: "Искандер", entry: 4100, start: 2100, rebuy: 2000, exit: 2140, result: 2140 },
    { number: 16, name: "Jane 007", entry: 4100, start: 2100, rebuy: 0, exit: 125, result: 2125 },
    { number: 17, name: "Саша Коч", entry: 4100, start: 2100, rebuy: 0, exit: 0, result: 2000 },
    { number: 18, name: "Михаил Козадой", entry: 4100, start: 2100, rebuy: 2000, exit: 1900, result: 1900 },
    { number: 19, name: "Илья Без", entry: 4100, start: 2100, rebuy: 2000, exit: 130, result: 130 },
    { number: 20, name: "Славяна", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 21, name: "Семён Ануфриев", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 22, name: "Egrinderolls", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 23, name: "Даня Д", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 24, name: "Влад Голубев", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 25, name: "Полина Матыцына", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 26, name: "Том", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 27, name: "Федор К", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 28, name: "Ирина Ага", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 }
];

// Данные игроков дня 2
const day2Players = [
    { number: 1, name: "grooveman", entry: 4100, start: 2100, rebuy: 0, exit: 26605, result: 28605 },
    { number: 2, name: "Семён Ануфриев", entry: 4100, start: 2100, rebuy: 0, exit: 17635, result: 19635 },
    { number: 3, name: "Шурик Шилкин", entry: 4100, start: 2100, rebuy: 0, exit: 14195, result: 16195 },
    { number: 4, name: "Леонид П", entry: 4100, start: 2100, rebuy: 2000, exit: 15880, result: 15880 },
    { number: 5, name: "Михаил Козадой", entry: 4100, start: 2100, rebuy: 0, exit: 12590, result: 14590 },
    { number: 6, name: "Дмитрий Ник", entry: 4100, start: 2100, rebuy: 0, exit: 8025, result: 10025 },
    { number: 7, name: "Максим Spy", entry: 4100, start: 2100, rebuy: 0, exit: 6535, result: 8535 },
    { number: 8, name: "Даня Д", entry: 4100, start: 2100, rebuy: 2000, exit: 6495, result: 6495 },
    { number: 9, name: "Настя К", entry: 4100, start: 2100, rebuy: 0, exit: 3880, result: 5880 },
    { number: 10, name: "Макар Аве", entry: 4100, start: 2100, rebuy: 0, exit: 2395, result: 4395 },
    { number: 11, name: "Аня Гам", entry: 4100, start: 2100, rebuy: 0, exit: 1885, result: 3885 },
    { number: 12, name: "Robert Юниксфактёр", entry: 4100, start: 2100, rebuy: 2000, exit: 3620, result: 3620 },
    { number: 13, name: "Полина Матыцына", entry: 4100, start: 2100, rebuy: 0, exit: 0, result: 2000 },
    { number: 14, name: "Кристина А", entry: 4100, start: 2100, rebuy: 2000, exit: 1360, result: 1360 },
    { number: 15, name: "Вова Баж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 16, name: "Искандер", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 17, name: "Jane 007", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 18, name: "Никита Зейн", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 19, name: "Наташа Бонд", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 20, name: "Свидетель", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 21, name: "Даша Гри", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 22, name: "Влад Владшток", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 23, name: "Иван Баж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 24, name: "Ксения Куд", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 25, name: "Роман Лод", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 26, name: "Инна М", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 27, name: "Сергей Ман", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 28, name: "Лев Р", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 29, name: "Соня Серж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 30, name: "Евгений Ц", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 31, name: "Богдан А", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 }
];

// Данные игроков дня 3
const day3Players = [
    { number: 1, name: "Михаил Наб", entry: 4100, start: 2100, rebuy: 0, exit: 19430, result: 16430 },
    { number: 2, name: "Разаман Рах", entry: 4100, start: 2100, rebuy: 2000, exit: 11265, result: 11265 },
    { number: 3, name: "Кристина А", entry: 4100, start: 2100, rebuy: 0, exit: 7540, result: 9540 },
    { number: 4, name: "Шурик Шилкин", entry: 4100, start: 2100, rebuy: 0, exit: 6470, result: 8470 },
    { number: 5, name: "Семён Ануфриев", entry: 4100, start: 2100, rebuy: 2000, exit: 7785, result: 7785 },
    { number: 6, name: "Robert Юниксфактёр", entry: 4100, start: 2100, rebuy: 0, exit: 4645, result: 6645 },
    { number: 7, name: "Jane 007", entry: 4100, start: 2100, rebuy: 0, exit: 4095, result: 6095 },
    { number: 8, name: "Артемий Мен", entry: 4100, start: 2100, rebuy: 0, exit: 4070, result: 6070 },
    { number: 9, name: "Соня Серж", entry: 4100, start: 2100, rebuy: 2000, exit: 5650, result: 5650 },
    { number: 10, name: "Никита Сизов", entry: 4100, start: 2100, rebuy: 0, exit: 3525, result: 5525 },
    { number: 11, name: "Дмитрий Ник", entry: 4100, start: 2100, rebuy: 2000, exit: 4855, result: 4855 },
    { number: 12, name: "grooveman", entry: 4100, start: 2100, rebuy: 0, exit: 2515, result: 4515 },
    { number: 13, name: "Ксения Куд", entry: 4100, start: 2100, rebuy: 0, exit: 2095, result: 4095 },
    { number: 14, name: "Миша Скиф", entry: 4100, start: 2100, rebuy: 2000, exit: 3580, result: 3580 },
    { number: 15, name: "Михаил Козадой", entry: 4100, start: 2100, rebuy: 0, exit: 1510, result: 3510 },
    { number: 16, name: "Egrinderolls", entry: 4100, start: 2100, rebuy: 2000, exit: 3420, result: 3420 },
    { number: 17, name: "Сергей Ман", entry: 4100, start: 2100, rebuy: 0, exit: 1415, result: 3415 },
    { number: 18, name: "Влад Владшток", entry: 4100, start: 2100, rebuy: 0, exit: 960, result: 2960 },
    { number: 19, name: "Дарья Шев", entry: 4100, start: 2100, rebuy: 0, exit: 0, result: 2000 },
    { number: 20, name: "Алиса Исм", entry: 4100, start: 2100, rebuy: 0, exit: 0, result: 2000 },
    { number: 21, name: "Никита Зейн", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 22, name: "Богдан А", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 23, name: "Роман Лод", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 24, name: "Наташа Бонд", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 25, name: "Том", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 26, name: "Максим Spy", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 27, name: "Иван Баж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 }
];

// Данные для блайндов
const blindsData = [
    { number: 1, start: "17-00", end: "17-25", sb: 5, bb: 10, ante: 10 },
    { number: 2, start: "17-25", end: "17-50", sb: 10, bb: 20, ante: 20 },
    { number: 3, start: "18-00", end: "18-15", sb: 20, bb: 40, ante: 40 },
    { number: 4, start: "18-15", end: "18-30", sb: 35, bb: 70, ante: 70 },
    { number: 5, start: "18-30", end: "18-50", sb: 50, bb: 100, ante: 100 },
    { number: 6, start: "19-00", end: "19-15", sb: 75, bb: 150, ante: 150 },
    { number: 7, start: "19-15", end: "19-30", sb: 100, bb: 200, ante: 200 },
    { number: 8, start: "19-30", end: "19-50", sb: 150, bb: 300, ante: 300 },
    { number: 9, start: "20-00", end: "20-15", sb: 200, bb: 400, ante: 400 },
    { number: 10, start: "20-15", end: "20-30", sb: 300, bb: 600, ante: 600 },
    { number: 11, start: "20-30", end: "20-50", sb: 400, bb: 800, ante: 800 },
    { number: 12, start: "21-00", end: "21-15", sb: 600, bb: 1200, ante: 1200 },
    { number: 13, start: "21-15", end: "21-30", sb: 800, bb: 1600, ante: 1600 },
    { number: 14, start: "21-30", end: "21-50", sb: 1100, bb: 2200, ante: 2200 },
    { number: 15, start: "22-00", end: "22-15", sb: 1500, bb: 3000, ante: 3000 },
    { number: 16, start: "22-15", end: "22-30", sb: 2000, bb: 4000, ante: 4000 },
    { number: 17, start: "22-30", end: "22-50", sb: 3000, bb: 6000, ante: 6000 },
    { number: 18, start: "23-00", end: "23-15", sb: 4000, bb: 8000, ante: 8000 },
    { number: 19, start: "23-15", end: "23-30", sb: 5000, bb: 10000, ante: 10000 },
    { number: 20, start: "23-30", end: "23-45", sb: 6000, bb: 12000, ante: 12000 },
    { number: 21, start: "23-45", end: "0-00", sb: 7500, bb: 15000, ante: 15000 },
    { number: 22, start: "0-00", end: "0-10", sb: 9000, bb: 18000, ante: 18000 },
    { number: 23, start: "0-10", end: "0-20", sb: 10500, bb: 21000, ante: 21000 },
    { number: 24, start: "0-20", end: "0-30", sb: 12500, bb: 25000, ante: 25000 }
];

// Данные верности
const loyaltyData = [
    { name: "Шурик Шилкин", loyalty: 3000 },
    { name: "Семён Ануфриев", loyalty: 3000 },
    { name: "Дмитрий Ник", loyalty: 3000 },
    { name: "Максим Spy", loyalty: 3000 },
    { name: "Михаил Козадой", loyalty: 3000 },
    { name: "Robert Юниксфактёр", loyalty: 3000 },
    { name: "Наташа Бонд", loyalty: 3000 },
    { name: "Сергей Ман", loyalty: 3000 },
    { name: "Jane 007", loyalty: 3000 },
    { name: "Ксения Куд", loyalty: 3000 },
    { name: "Влад Владшток", loyalty: 3000 },
    { name: "Богдан А", loyalty: 3000 }
];

// Данные охоты
const huntingData = [
    { name: "Шурик Шилкин", hunting: 1000 },
    { name: "Михаил Козадой", hunting: 650 },
    { name: "Максим Spy", hunting: 600 },
    { name: "Jane 007", hunting: 400 },
    { name: "Семён Ануфриев", hunting: 350 },
    { name: "Robert Юниксфактёр", hunting: 250 },
    { name: "Влад Владшток", hunting: 200 },
    { name: "Богдан А", hunting: 100 }
];

// Предыдущий рейтинг (текущий после дня 2)
const previousRatingData = [
    { name: "Михаил Наб", rating: 312 },
    { name: "Robert Юниксфактёр", rating: 309 },
    { name: "Максим Spy", rating: 248 },
    { name: "Шурик Шилкин", rating: 266 },
    { name: "Лев Р", rating: 219 },
    { name: "Богдан А", rating: 218 },
    { name: "Свидетель", rating: 219 },
    { name: "Jane 007", rating: 195 },
    { name: "Семён Ануфриев", rating: 238 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Михаил Козадой", rating: 201 },
    { name: "Egrinderolls", rating: 141 },
    { name: "Полина Матыцына", rating: 168 },
    { name: "Саша Коч", rating: 139 },
    { name: "grooveman", rating: 229 },
    { name: "Никита Зейн", rating: 147 },
    { name: "Влад Владшток", rating: 134 },
    { name: "Серж", rating: 103 },
    { name: "Настя К", rating: 134 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Оксана Б", rating: 87 },
    { name: "Федор К", rating: 72 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Искандер", rating: 87 },
    { name: "Инна М", rating: 78 },
    { name: "Кристина А", rating: 85 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Дмитрий Ник", rating: 98 },
    { name: "Сергей Ман", rating: 70 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Наташа Бонд", rating: 73 },
    { name: "Иван Антипов", rating: 47 },
    { name: "Соня Кур", rating: 46 },
    { name: "Артём 007", rating: 40 },
    { name: "Михаил Т", rating: 37 },
    { name: "Ксения Куд", rating: 52 },
    { name: "Том", rating: 31 },
    { name: "Иван Баж", rating: 22 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Родион К", rating: 26 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Роман Лод", rating: 43 },
    { name: "Славяна", rating: 22 },
    { name: "Даня Д", rating: 58 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Даша Хромова", rating: 18 },
    { name: "Даша Гри", rating: 40 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Евгений Ц", rating: 35 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 },
    { name: "Леонид П", rating: 52 },
    { name: "Макар Аве", rating: 33 },
    { name: "Аня Гам", rating: 31 },
    { name: "Вова Баж", rating: 27 },
    { name: "Соня Серж", rating: 19 }
];

// Рейтинг изменения за день 3
const day3RatingChanges = [
    { name: "Михаил Наб", change: 97 },
    { name: "Разаман Рах", change: 69 },
    { name: "Кристина А", change: 56 },
    { name: "Шурик Шилкин", change: 49 },
    { name: "Семён Ануфриев", change: 43 },
    { name: "Robert Юниксфактёр", change: 40 },
    { name: "Jane 007", change: 37 },
    { name: "Артемий Мен", change: 34 },
    { name: "Соня Серж", change: 32 },
    { name: "Никита Сизов", change: 31 },
    { name: "Дмитрий Ник", change: 29 },
    { name: "grooveman", change: 28 },
    { name: "Ксения Куд", change: 27 },
    { name: "Миша Скиф", change: 26 },
    { name: "Михаил Козадой", change: 25 },
    { name: "Egrinderolls", change: 24 },
    { name: "Сергей Ман", change: 24 },
    { name: "Влад Владшток", change: 23 },
    { name: "Дарья Шев", change: 22 },
    { name: "Алиса Исм", change: 22 },
    { name: "Никита Зейн", change: 21 },
    { name: "Богдан А", change: 21 },
    { name: "Роман Лод", change: 20 },
    { name: "Наташа Бонд", change: 20 },
    { name: "Том", change: 19 },
    { name: "Максим Spy", change: 19 },
    { name: "Иван Баж", change: 19 }
];

// Функция переключения вкладок
function showTab(tabName) {
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок в основном таббаре
    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    document.getElementById(tabName).classList.add('active');
    
    // Активируем соответствующую кнопку в основном таббаре (если это не рейтинг)
    if (tabName !== 'rating') {
        const targetButton = document.querySelector(`.tabs .tab-button[onclick="showTab('${tabName}')"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    }
    
    // Обновляем заголовок фазы турнира
    updatePhaseHeader(tabName);
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
    
    // Обновляем статистику
    updateStats();
}

// Обновление заголовка фазы турнира
function updatePhaseHeader(tabName) {
    const phaseElement = document.getElementById('currentPhase');
    switch(tabName) {
        case 'day1':
            phaseElement.textContent = 'День 1 - 8.01.2026';
            break;
        case 'day2':
            phaseElement.textContent = 'День 2 - 15.01.2026';
            break;
        case 'day3':
            phaseElement.textContent = 'День 3 - 22.01.2026';
            break;
        case 'final':
            phaseElement.textContent = 'ФИНАЛ ТУРНИРА - 24.01.2026';
            break;
        case 'blinds':
            phaseElement.textContent = 'Уровни блайндов';
            break;
        case 'rating':
            phaseElement.textContent = 'Рейтинг';
            break;
        default:
            phaseElement.textContent = 'Турнир Миссис Дейзи Дак Q-2';
    }
}

// Функция развертывания таблицы на мобильных
function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active').id;
    const tables = document.querySelectorAll(`#${activeTab} .tournament-table`);
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => {
        table.classList.toggle('expanded');
    });
    
    if (tables[0] && tables[0].classList.contains('expanded')) {
        button.textContent = 'Свернуть таблицу';
    } else {
        button.textContent = 'Развернуть таблицу';
    }
}

// Сброс развертывания таблицы
function resetTableExpand() {
    const tables = document.querySelectorAll('.tournament-table');
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => {
        table.classList.remove('expanded');
    });
    
    button.textContent = 'Развернуть таблицу';
}

// Быстрая анимация счетчиков
function animateCounter(element, finalValue, duration = 500) {
    if (!element) return;
    
    let start = 0;
    const increment = finalValue / (duration / 5);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
            
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 5);
}

// Расчет среднего стека для активного дня
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return 0;
    
    const activeTabId = activeTab.id;
    let players;
    
    if (activeTabId === 'day1') {
        players = day1Players;
    } else if (activeTabId === 'day2') {
        players = day2Players;
    } else if (activeTabId === 'day3') {
        players = day3Players;
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        const positiveResults = allPlayers.filter(player => player.total > 0);
        if (positiveResults.length === 0) return 0;
        const totalSum = positiveResults.reduce((sum, player) => sum + player.total, 0);
        return Math.round(totalSum / positiveResults.length);
    } else {
        return 0;
    }
    
    if (players.length === 0) return 0;
    const total = players.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / players.length);
}

// Получение всех игроков для финальной таблицы
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из всех дней
    [...day1Players, ...day2Players, ...day3Players].forEach(player => {
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: 0,
                qualifying: 0,
                loyalty: 0,
                hunting: 0,
                finalBonus: 3000, // Добавляем финальный бонус 3000 для всех
                total: 0
            });
        }
    });
    
    // Обновляем результаты дней
    day1Players.forEach(player => {
        const existingPlayer = allPlayersMap.get(player.name);
        existingPlayer.day1 = player.result;
        existingPlayer.qualifying += player.result;
    });
    
    day2Players.forEach(player => {
        const existingPlayer = allPlayersMap.get(player.name);
        existingPlayer.day2 = player.result;
        existingPlayer.qualifying += player.result;
    });
    
    day3Players.forEach(player => {
        const existingPlayer = allPlayersMap.get(player.name);
        existingPlayer.day3 = player.result;
        existingPlayer.qualifying += player.result;
    });
    
    // Добавляем верность
    loyaltyData.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.loyalty = player.loyalty;
        }
    });
    
    // Добавляем охоту
    huntingData.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.hunting = player.hunting;
        }
    });
    
    // Рассчитываем итог (добавляем финальный бонус 3000)
    allPlayersMap.forEach(player => {
        player.total = player.qualifying + player.loyalty + player.hunting + player.finalBonus;
    });
    
    return Array.from(allPlayersMap.values());
}

// Получаем рейтинг ТОЛЬКО после дней 1-2 (для сравнения в финальной таблице)
function getPreviousFinalRating() {
    const allPlayersMap = new Map();
    
    // Только игроки дней 1-2
    [...day1Players, ...day2Players].forEach(player => {
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: 0,
                qualifying: 0,
                loyalty: 0,
                hunting: 0,
                finalBonus: 3000, // Добавляем финальный бонус 3000
                total: 0
            });
        }
    });
    
    // Обновляем результаты дней 1-2
    day1Players.forEach(player => {
        const existingPlayer = allPlayersMap.get(player.name);
        existingPlayer.day1 = player.result;
        existingPlayer.qualifying += player.result;
    });
    
    day2Players.forEach(player => {
        const existingPlayer = allPlayersMap.get(player.name);
        existingPlayer.day2 = player.result;
        existingPlayer.qualifying += player.result;
    });
    
    // Рассчитываем итог (только отборочные + финальный бонус для дней 1-2)
    allPlayersMap.forEach(player => {
        player.total = player.qualifying + player.finalBonus;
    });
    
    return Array.from(allPlayersMap.values());
}

// Расчет изменений позиций для финальной таблицы
function calculateFinalPositionChanges() {
    // Текущий рейтинг (дни 1-3 + верность + охота + финальный бонус)
    const currentPlayers = getAllFinalPlayers();
    // Рейтинг только после дней 1-2
    const previousPlayers = getPreviousFinalRating();
    
    // Сортируем оба списка по убыванию total
    const sortedCurrent = [...currentPlayers].sort((a, b) => b.total - a.total);
    const sortedPrevious = [...previousPlayers].sort((a, b) => b.total - a.total);
    
    const positionChanges = new Map();
    
    // Для каждого игрока в текущем рейтинге
    sortedCurrent.forEach((player, currentIndex) => {
        const playerName = player.name;
        
        // Ищем игрока в рейтинге после дней 1-2
        const previousIndex = sortedPrevious.findIndex(p => p.name === playerName);
        
        if (previousIndex !== -1) {
            // Игрок был в днях 1-2 - сравниваем позиции
            const change = previousIndex - currentIndex;
            
            if (change > 0) {
                // Поднялся вверх
                positionChanges.set(playerName, {
                    change: Math.abs(change),
                    type: 'up'
                });
            } else if (change < 0) {
                // Опустился вниз
                positionChanges.set(playerName, {
                    change: Math.abs(change),
                    type: 'down'
                });
            } else {
                // Остался на том же месте
                positionChanges.set(playerName, {
                    change: 0,
                    type: 'same'
                });
            }
        } else {
            // Новый игрок (не было в днях 1-2)
            positionChanges.set(playerName, {
                change: 0,
                type: 'new'
            });
        }
    });
    
    return positionChanges;
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Создание HTML для изменения позиции
function createPositionChangeHTML(changeData) {
    if (!changeData) return '';
    
    const { change, type } = changeData;
    
    let html = '';
    let arrow = '';
    let text = '';
    
    switch (type) {
        case 'up':
            arrow = '▲';
            text = `${change}`;
            break;
        case 'down':
            arrow = '▼';
            text = `${change}`;
            break;
        case 'same':
            arrow = '→';
            text = '0';
            break;
        case 'new':
            arrow = '';
            text = 'NEW';
            break;
    }
    
    if (type === 'new') {
        return `<div class="position-change position-${type}">${text}</div>`;
    } else {
        return `<div class="position-change position-${type}">
            <span class="change-arrow">${arrow}</span>${text}
        </div>`;
    }
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) {
        console.error('Элемент day1Table не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица дня 1 заполнена:', day1Players.length, 'игроков');
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) {
        console.error('Элемент day2Table не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    day2Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица дня 2 заполнена:', day2Players.length, 'игроков');
}

// Заполнение таблицы Дня 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    if (!tableBody) {
        console.error('Элемент day3Table не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    day3Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица дня 3 заполнена:', day3Players.length, 'игроков');
}

// Заполнение таблицы Блайндов
function fillBlindsTable() {
    const tableBody = document.getElementById('blindsTable');
    if (!tableBody) {
        console.error('Элемент blindsTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    blindsData.forEach((level) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="number-column">${level.number}</td>
            <td>${level.start}</td>
            <td>${level.end}</td>
            <td class="chips-positive">${formatNumber(level.sb)}</td>
            <td class="chips-positive">${formatNumber(level.bb)}</td>
            <td class="chips-positive">${formatNumber(level.ante)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица блайндов заполнена:', blindsData.length, 'уровней');
}

// Заполнение финальной таблицы
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) {
        console.error('Элемент finalTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    const allPlayers = getAllFinalPlayers();
    const positionChanges = calculateFinalPositionChanges();
    
    if (allPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="11" style="text-align: center; padding: 40px; color: #666;">
                    Данные появятся после завершения дней турнира
                </td>
            </tr>
        `;
        return;
    }
    
    // Сортируем по убыванию общего итога
    allPlayers.sort((a, b) => b.total - a.total);
    
    // Находим чиплидера
    const chipLeader = allPlayers.length > 0 ? allPlayers[0].name : null;
    
    allPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${changeHTML}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="chips-positive">${formatNumber(player.qualifying)}</td>
            <td class="chips-positive">${player.loyalty !== 0 ? formatNumber(player.loyalty) : '-'}</td>
            <td class="chips-positive">${player.hunting !== 0 ? formatNumber(player.hunting) : '-'}</td>
            <td class="chips-positive">${formatNumber(player.finalBonus)}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Финальная таблица заполнена:', allPlayers.length, 'игроков');
}

// Расчет нового рейтинга (после дня 3)
function calculateNewRating() {
    const newRating = [];
    
    // Создаем мап предыдущих рейтингов
    const previousRatingMap = new Map();
    previousRatingData.forEach(player => {
        previousRatingMap.set(player.name, player.rating);
    });
    
    // Создаем мап изменений рейтинга за день 3
    const ratingChangeMap = new Map();
    day3RatingChanges.forEach(player => {
        ratingChangeMap.set(player.name, player.change);
    });
    
    // Собираем всех уникальных игроков из обоих списков
    const allPlayersSet = new Set();
    previousRatingData.forEach(player => allPlayersSet.add(player.name));
    day3RatingChanges.forEach(player => allPlayersSet.add(player.name));
    
    const allPlayers = Array.from(allPlayersSet);
    
    allPlayers.forEach(playerName => {
        // Определяем предыдущий рейтинг
        const previousRating = previousRatingMap.get(playerName) || 0;
        
        // Определяем изменение рейтинга
        const change = ratingChangeMap.get(playerName) || 0;
        const newRatingValue = previousRating + change;
        
        newRating.push({
            name: playerName,
            previousRating: previousRating,
            change: change,
            newRating: newRatingValue,
            isNewPlayer: change > 0 && previousRating === 0
        });
    });
    
    return newRating;
}

// Расчет изменений позиций в рейтинге
function calculateRatingPositionChanges() {
    const newRating = calculateNewRating();
    
    // Сортируем предыдущий рейтинг
    const sortedPreviousRating = [...previousRatingData].sort((a, b) => b.rating - a.rating);
    
    // Сортируем новый рейтинг
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    const positionChanges = new Map();
    
    sortedNewRating.forEach((player, newIndex) => {
        // Проверяем, был ли игрок в предыдущем рейтинге
        const oldIndex = sortedPreviousRating.findIndex(p => p.name === player.name);
        
        if (oldIndex === -1) {
            // Новый игрок
            positionChanges.set(player.name, {
                change: 0,
                type: 'new'
            });
        } else {
            const change = oldIndex - newIndex;
            if (change > 0) {
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'up'
                });
            } else if (change < 0) {
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'down'
                });
            } else {
                positionChanges.set(player.name, {
                    change: 0,
                    type: 'same'
                });
            }
        }
    });
    
    return positionChanges;
}

// Заполнение таблицы Рейтинга
function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) {
        console.error('Элемент ratingTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRating();
    const positionChanges = calculateRatingPositionChanges();
    
    // Сортируем по убыванию нового рейтинга
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const changeClass = player.change > 0 ? "rating-positive" : player.change < 0 ? "rating-negative" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Подсветка топ 19 игроков и Никита Yellow
        const isTop19 = index < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'top-rating';
        }
        
        // Добавляем корону для Никита Yellow
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="${nameClass}">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица рейтинга заполнена:', newRating.length, 'игроков');
}

// Функции для заполнения таблиц с поиском
function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay2TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay3TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day3Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillFinalTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const allPlayers = getAllFinalPlayers();
    const filteredPlayers = allPlayers.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="11" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    // Сортируем и находим чиплидера
    filteredPlayers.sort((a, b) => b.total - a.total);
    const allSortedPlayers = getAllFinalPlayers().sort((a, b) => b.total - a.total);
    const chipLeader = allSortedPlayers.length > 0 ? allSortedPlayers[0].name : null;
    const positionChanges = calculateFinalPositionChanges();
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="chips-positive">${formatNumber(player.qualifying)}</td>
            <td class="chips-positive">${player.loyalty !== 0 ? formatNumber(player.loyalty) : '-'}</td>
            <td class="chips-positive">${player.hunting !== 0 ? formatNumber(player.hunting) : '-'}</td>
            <td class="chips-positive">${formatNumber(player.finalBonus)}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillRatingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRating();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const positionChanges = calculateRatingPositionChanges();
    
    const filteredRating = sortedRating.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredRating.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredRating.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const changeClass = player.change > 0 ? "rating-positive" : player.change < 0 ? "rating-negative" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Подсветка топ 19 игроков и Никита Yellow
        const originalIndex = sortedRating.findIndex(p => p.name === player.name);
        const isTop19 = originalIndex < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'top-rating search-highlight';
        }
        
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${originalIndex + 1}</td>
            <td class="${nameClass}">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функция для подсветки найденного текста
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
}

// Автодополнение для поиска в основном интерфейсе
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    if (!searchInput || !autocompleteResults) {
        console.error('Элементы поиска не найдены!');
        return;
    }
    
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...loyaltyData.map(p => ({ name: p.name })), ...huntingData.map(p => ({ name: p.name })), ...calculateNewRating()];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    const uniquePlayerNames = [...new Set(playerNames)];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        
        const suggestions = uniquePlayerNames.filter(name => 
            name.toLowerCase().includes(value)
        ).slice(0, 8);
        
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                
                const regex = new RegExp(`(${value})`, 'gi');
                const highlighted = suggestion.replace(regex, '<span class="autocomplete-highlight">$1</span>');
                
                item.innerHTML = highlighted;
                item.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    autocompleteResults.style.display = 'none';
                    searchPlayers();
                });
                
                autocompleteResults.appendChild(item);
            });
            
            autocompleteResults.style.display = 'block';
        } else {
            autocompleteResults.style.display = 'none';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !autocompleteResults.contains(e.target)) {
            autocompleteResults.style.display = 'none';
        }
    });
    
    searchInput.addEventListener('keydown', function(e) {
        const items = autocompleteResults.querySelectorAll('.autocomplete-item');
        let activeItem = autocompleteResults.querySelector('.autocomplete-item.active');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (!activeItem) {
                items[0]?.classList.add('active');
            } else {
                activeItem.classList.remove('active');
                const next = activeItem.nextElementSibling || items[0];
                next.classList.add('active');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!activeItem) {
                items[items.length - 1]?.classList.add('active');
            } else {
                activeItem.classList.remove('active');
                const prev = activeItem.previousElementSibling || items[items.length - 1];
                prev.classList.add('active');
            }
        } else if (e.key === 'Enter') {
            if (activeItem) {
                e.preventDefault();
                searchInput.value = activeItem.textContent;
                autocompleteResults.style.display = 'none';
                searchPlayers();
            }
        }
    });
}

// Поиск игроков в основном интерфейсе
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    if (searchTerm === '') {
        if (activeTabId === 'day1') {
            fillDay1Table();
        } else if (activeTabId === 'day2') {
            fillDay2Table();
        } else if (activeTabId === 'day3') {
            fillDay3Table();
        } else if (activeTabId === 'final') {
            fillFinalTable();
        } else if (activeTabId === 'blinds') {
            fillBlindsTable();
        } else if (activeTabId === 'rating') {
            fillRatingTable();
        }
        
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
        return;
    }
    
    let foundPlayers = [];
    
    if (activeTabId === 'day1') {
        foundPlayers = day1Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay1TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'day2') {
        foundPlayers = day2Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay2TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'day3') {
        foundPlayers = day3Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay3TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        foundPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillFinalTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        foundPlayers = newRating.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillRatingTableWithSearch(foundPlayers, searchTerm);
    }
    
    const resultsCount = document.getElementById('resultsCount');
    const searchResults = document.getElementById('searchResults');
    
    if (foundPlayers.length > 0) {
        if (resultsCount) resultsCount.textContent = foundPlayers.length;
        if (searchResults) searchResults.style.display = 'block';
    } else {
        if (searchResults) {
            searchResults.style.display = 'block';
            if (resultsCount) resultsCount.textContent = '0';
        }
    }
}

// Обновление статистики при переключении вкладок
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const activeTab = document.querySelector('.tab-content.active');
    
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    let totalPlayers, averageStack;
    
    if (activeTabId === 'day1') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        totalPlayers = allPlayers.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'blinds') {
        totalPlayers = 0;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        totalPlayers = newRating.length;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else {
        totalPlayers = 0;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнир Миссис Дейзи Дак Q-2 загружен!');
    
    // Заполняем все таблицы
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillFinalTable();
    fillBlindsTable();
    fillRatingTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    
    // Показываем вкладку ФИНАЛ при загрузке
    showTab('final');
    
    // Настраиваем поиск
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', searchPlayers);
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            document.getElementById('searchInput').value = '';
            const autocompleteResults = document.getElementById('autocompleteResults');
            if (autocompleteResults) {
                autocompleteResults.style.display = 'none';
            }
            searchPlayers();
        });
    }
    
    // Обновляем статистику при переключении вкладок
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', updateStats);
    });
    
    // Скрываем автодополнение при скролле
    window.addEventListener('scroll', function() {
        const autocompleteResults = document.getElementById('autocompleteResults');
        if (autocompleteResults) {
            autocompleteResults.style.display = 'none';
        }
    });
});
