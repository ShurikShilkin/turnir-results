// Данные игроков для Дня 1
const day1Players = [
    { number: 1, name: "Вася Е", participation: 3100, start: 2100, rebuy: 0, exit: 14485, result: 15485 },
    { number: 2, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 0, exit: 12000, result: 13000 },
    { number: 3, name: "Вова Гриненко", participation: 3100, start: 2100, rebuy: 0, exit: 11040, result: 12040 },
    { number: 4, name: "Анна К", participation: 3100, start: 2100, rebuy: 0, exit: 10640, result: 11640 },
    { number: 5, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 0, exit: 9275, result: 10275 },
    { number: 6, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, exit: 6740, result: 7740 },
    { number: 7, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 2000, exit: 7175, result: 6175 },
    { number: 8, name: "Славяна", participation: 3100, start: 2100, rebuy: 0, exit: 4215, result: 5215 },
    { number: 9, name: "Владимир Vladecbeer", participation: 3100, start: 2100, rebuy: 0, exit: 3735, result: 4735 },
    { number: 10, name: "Свидетель", participation: 3100, start: 2100, rebuy: 0, exit: 3575, result: 4575 },
    { number: 11, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 0, exit: 1490, result: 2490 },
    { number: 12, name: "Марина Ермакова", participation: 3100, start: 2100, rebuy: 0, exit: 660, result: 1660 },
    { number: 13, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 300, result: 1300 },
    { number: 14, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 2000, exit: 2270, result: 1270 },
    { number: 15, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 16, name: "Саша Бел", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 17, name: "Светлана Иванова", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 18, name: "Асхат Суханбердин", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 19, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 20, name: "Макс Ник", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 21, name: "Даня КДД", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 22, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 23, name: "Николай Роз", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 24, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 25, name: "Александр Будда", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 26, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 27, name: "Инна М", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Данные игроков для Дня 2
const day2Players = [
    { number: 1, name: "Александр Будда", participation: 3100, start: 2100, rebuy: 0, exit: 27840, result: 28840 },
    { number: 2, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 0, exit: 8055, result: 9055 },
    { number: 3, name: "Вова Гриненко", participation: 3100, start: 2100, rebuy: 0, exit: 7935, result: 8935 },
    { number: 4, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 0, exit: 6365, result: 7365 },
    { number: 5, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 0, exit: 5925, result: 6925 },
    { number: 6, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, exit: 5545, result: 6545 },
    { number: 7, name: "Саша Бел", participation: 3100, start: 2100, rebuy: 0, exit: 5335, result: 6335 },
    { number: 8, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 5000, result: 6000 },
    { number: 9, name: "Даша Хромова", participation: 3100, start: 2100, rebuy: 0, exit: 2415, result: 3415 },
    { number: 10, name: "Саша Тяжелов", participation: 3100, start: 2100, rebuy: 0, exit: 2275, result: 3275 },
    { number: 11, name: "Вася Е", participation: 3100, start: 2100, rebuy: 0, exit: 1930, result: 2930 },
    { number: 12, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 2000, exit: 3665, result: 2665 },
    { number: 13, name: "Инна М", participation: 3100, start: 2100, rebuy: 0, exit: 1625, result: 2625 },
    { number: 14, name: "Владимир Vladecbeer", participation: 3100, start: 2100, rebuy: 2000, exit: 3565, result: 2565 },
    { number: 15, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 0, exit: 1215, result: 2215 },
    { number: 16, name: "Федор К", participation: 3100, start: 2100, rebuy: 2000, exit: 2210, result: 1210 },
    { number: 17, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 18, name: "Асхат Суханбердин", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 19, name: "Оксана Б", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 20, name: "Даша Гри", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 21, name: "Свидетель", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 22, name: "Славяна", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 23, name: "Egrinderolls", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 24, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 25, name: "Роман Егоров", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 26, name: "Том", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 27, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Данные игроков для Дня 3
const day3Players = [
    { number: 1, name: "Всеволод Кузнецов", participation: 3100, start: 2100, rebuy: 0, exit: 13770, result: 14770 },
    { number: 2, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 0, exit: 8250, result: 9250 },
    { number: 3, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 0, exit: 7330, result: 8330 },
    { number: 4, name: "Egrinderolls", participation: 3100, start: 2100, rebuy: 2000, exit: 7095, result: 6095 },
    { number: 5, name: "Дмитрий Ник", participation: 3100, start: 2100, rebuy: 0, exit: 4240, result: 5240 },
    { number: 6, name: "Саша Бел", participation: 3100, start: 2100, rebuy: 0, exit: 4125, result: 5125 },
    { number: 7, name: "Вова Баж", participation: 3100, start: 2100, rebuy: 0, exit: 3540, result: 4540 },
    { number: 8, name: "Саша Тяжелов", participation: 3100, start: 2100, rebuy: 0, exit: 3465, result: 4465 },
    { number: 9, name: "Асхат Суханбердин", participation: 3100, start: 2100, rebuy: 2000, exit: 5390, result: 4390 },
    { number: 10, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 0, exit: 3130, result: 4130 },
    { number: 11, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, exit: 2805, result: 3805 },
    { number: 12, name: "Вася Е", participation: 3100, start: 2100, rebuy: 0, exit: 2420, result: 3420 },
    { number: 13, name: "Инна М", participation: 3100, start: 2100, rebuy: 0, exit: 2415, result: 3415 },
    { number: 14, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 0, exit: 2030, result: 3030 },
    { number: 15, name: "Федор К", participation: 3100, start: 2100, rebuy: 0, exit: 1345, result: 2345 },
    { number: 16, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 17, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 18, name: "Jane2007", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 19, name: "Владимир Vladecbeer", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 20, name: "Свидетель", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 21, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 22, name: "Том", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 23, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Данные бонусов для финала
const playerBonuses = {
    "Александр Будда": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Вася Е": { finalParticipation: 2000, hungry: 3000, bounty: 600 },
    "Богдан Анц": { finalParticipation: 2000, hungry: 3000, bounty: 900 },
    "Вова Гриненко": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Макар Аве": { finalParticipation: 2000, hungry: 3000, bounty: 0 },
    "Иван Антипов": { finalParticipation: 2000, hungry: 3000, bounty: 150 },
    "Евгений Ц": { finalParticipation: 2000, hungry: 3000, bounty: 0 },
    "Саша Бел": { finalParticipation: 2000, hungry: 3000, bounty: 75 },
    "Всеволод Кузнецов": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Саша Коч": { finalParticipation: 2000, hungry: 3000, bounty: 300 },
    "Шурик Шилкин": { finalParticipation: 2000, hungry: 3000, bounty: 825 },
    "Анна К": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Михаил Наб": { finalParticipation: 2000, hungry: 3000, bounty: 0 },
    "Владимир Vladecbeer": { finalParticipation: 2000, hungry: 3000, bounty: 0 },
    "Сергей Ман": { finalParticipation: 2000, hungry: 3000, bounty: 0 },
    "Инна М": { finalParticipation: 2000, hungry: 3000, bounty: 0 },
    "Саша Тяжелов": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Михаил Козадой": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Свидетель": { finalParticipation: 2000, hungry: 3000, bounty: 225 },
    "Асхат Суханбердин": { finalParticipation: 2000, hungry: 3000, bounty: 225 },
    "Полина Матыцына": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Дмитрий Ник": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Egrinderolls": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Вова Баж": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Славяна": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Федор К": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Даша Хромова": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Марина Ермакова": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Никита Зейн": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "НОВЫЙ ИГРОК": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Николай Роз": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Макс Ник": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Светлана Иванова": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Даня КДД": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Даша Гри": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Роман Егоров": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Оксана Б": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Jane2007": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Максим Spy": { finalParticipation: 2000, hungry: 0, bounty: 0 },
    "Том": { finalParticipation: 2000, hungry: 0, bounty: 0 }
};

// Обновленные данные для Охоты за головами
const bountyPlayers = [
    { name: "Александр Будда", bounty: 2550 },
    { name: "Александр Гиг", bounty: 1200 },
    { name: "Мария Павлова", bounty: 1200 },
    { name: "Даша Yellow", bounty: 1200 },
    { name: "Михаил Козадой", bounty: 1200 },
    { name: "Вадим Константинов", bounty: 1200 },
    { name: "Руф", bounty: 1200 },
    { name: "Влад Пив", bounty: 1200 },
    { name: "Артур Король", bounty: 1200 },
    { name: "Даня Гол", bounty: 1200 },
    { name: "Никита Yellow", bounty: 1200 },
    { name: "Семён Ануфриев", bounty: 1200 },
    { name: "Вова Гриненко", bounty: 1200 },
    { name: "Egrinderolls", bounty: 975 },
    { name: "Богдан Анц", bounty: 900 },
    { name: "Шурик Шилкин", bounty: 825 },
    { name: "Всеволод Кузнецов", bounty: 825 },
    { name: "Жан Балацкий", bounty: 600 },
    { name: "Иван Чемодан", bounty: 600 },
    { name: "Олег Сми", bounty: 600 },
    { name: "Саша Тяжелов", bounty: 600 },
    { name: "Ксюша Петрушина", bounty: 600 },
    { name: "Дмитрий Ник", bounty: 600 },
    { name: "Андрей Ф", bounty: 600 },
    { name: "Ладали", bounty: 600 },
    { name: "Искандер", bounty: 600 },
    { name: "Надя Жб", bounty: 600 },
    { name: "Константин Сидорин", bounty: 600 },
    { name: "Андрей Джип", bounty: 600 },
    { name: "Вася Е", bounty: 600 },
    { name: "Даша Гри", bounty: 300 },
    { name: "Славяна", bounty: 300 },
    { name: "Саша Коч", bounty: 300 },
    { name: "Даня КДД", bounty: 300 },
    { name: "Никита Зейн", bounty: 300 },
    { name: "Свидетель", bounty: 225 },
    { name: "Асхат Суханбердин", bounty: 225 },
    { name: "Иван Антипов", bounty: 150 },
    { name: "Вова Баж", bounty: 150 },
    { name: "Саша Бел", bounty: 75 }
];

// Данные блайндов
const blindsData = [
    { number: 1, startTime: "17-00", endTime: "17-25", sb: 5, bb: 10, ante: 10 },
    { number: 2, startTime: "17-25", endTime: "17-50", sb: 10, bb: 20, ante: 20 },
    { number: 3, startTime: "18-00", endTime: "18-15", sb: 15, bb: 30, ante: 30 },
    { number: 4, startTime: "18-15", endTime: "18-30", sb: 20, bb: 40, ante: 40 },
    { number: 5, startTime: "18-30", endTime: "18-50", sb: 35, bb: 70, ante: 70 },
    { number: 6, startTime: "19-00", endTime: "19-15", sb: 50, bb: 100, ante: 100 },
    { number: 7, startTime: "19-15", endTime: "19-30", sb: 75, bb: 150, ante: 150 },
    { number: 8, startTime: "19-30", endTime: "19-50", sb: 100, bb: 200, ante: 200 },
    { number: 9, startTime: "20-00", endTime: "20-15", sb: 150, bb: 300, ante: 300 },
    { number: 10, startTime: "20-15", endTime: "20-30", sb: 200, bb: 400, ante: 400 },
    { number: 11, startTime: "20-30", endTime: "20-50", sb: 300, bb: 600, ante: 600 },
    { number: 12, startTime: "21-00", endTime: "21-15", sb: 400, bb: 800, ante: 800 },
    { number: 13, startTime: "21-15", endTime: "21-30", sb: 500, bb: 1000, ante: 1000 },
    { number: 14, startTime: "21-30", endTime: "21-50", sb: 700, bb: 1400, ante: 1400 },
    { number: 15, startTime: "22-00", endTime: "22-15", sb: 1000, bb: 2000, ante: 2000 },
    { number: 16, startTime: "22-15", endTime: "22-30", sb: 1500, bb: 3000, ante: 3000 },
    { number: 17, startTime: "22-30", endTime: "22-50", sb: 2000, bb: 4000, ante: 4000 },
    { number: 18, startTime: "23-00", endTime: "23-15", sb: 2500, bb: 5000, ante: 5000 },
    { number: 19, startTime: "23-15", endTime: "23-30", sb: 3000, bb: 6000, ante: 6000 },
    { number: 20, startTime: "23-30", endTime: "23-45", sb: 4000, bb: 8000, ante: 8000 },
    { number: 21, startTime: "23-45", endTime: "0-00", sb: 5000, bb: 10000, ante: 10000 },
    { number: 22, startTime: "0-00", endTime: "0-10", sb: 6000, bb: 12000, ante: 12000 },
    { number: 23, startTime: "0-10", endTime: "0-20", sb: 7500, bb: 15000, ante: 15000 },
    { number: 24, startTime: "0-20", endTime: "0-30", sb: 9000, bb: 18000, ante: 18000 }
];

// Функция переключения вкладок
function showTab(tabName) {
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    document.getElementById(tabName).classList.add('active');
    
    // Обновляем интерфейс в зависимости от типа вкладки
    if (tabName === 'final2025' || tabName === 'satellite2025') {
        showSpecialInterface(tabName);
    } else {
        showMainInterface(tabName);
    }
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
    
    // Обновляем статистику
    updateStats();
}

// Показать основной интерфейс (дни турнира)
function showMainInterface(tabName) {
    document.getElementById('mainTabs').style.display = 'flex';
    document.getElementById('specialTabs').style.display = 'none';
    document.getElementById('mainStats').style.display = 'grid';
    document.getElementById('specialStats').style.display = 'none';
    
    // Активируем соответствующую кнопку в основных вкладках
    const tabButtons = document.querySelectorAll('#mainTabs .tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    const targetButton = document.querySelector(`#mainTabs .tab-button[onclick="showTab('${tabName}')"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Обновляем заголовок фазы турнира
    const phaseElement = document.getElementById('currentPhase');
    if (tabName === 'day1') {
        phaseElement.textContent = 'День 1 - 13.11.2025';
    } else if (tabName === 'day2') {
        phaseElement.textContent = 'День 2 - 20.11.2025';
    } else if (tabName === 'day3') {
        phaseElement.textContent = 'День 3 - 27.11.2025';
    } else if (tabName === 'final') {
        phaseElement.textContent = 'Финал - 29.11.2025';
    } else if (tabName === 'bounties') {
        phaseElement.textContent = 'Охота за головами';
    } else if (tabName === 'blinds') {
        phaseElement.textContent = 'Структура блайндов';
    }
}

// Показать специальный интерфейс (ФИНАЛ ФИНАЛИСТОВ или САТЕЛЛИТ)
function showSpecialInterface(tabName) {
    document.getElementById('mainTabs').style.display = 'none';
    document.getElementById('specialTabs').style.display = 'flex';
    document.getElementById('mainStats').style.display = 'none';
    document.getElementById('specialStats').style.display = 'grid';
    
    // Обновляем текст специальной вкладки
    const specialTabButton = document.getElementById('specialTabButton');
    const phaseElement = document.getElementById('currentPhase');
    
    if (tabName === 'final2025') {
        specialTabButton.textContent = 'ФИНАЛ ФИНАЛИСТОВ 2025';
        phaseElement.textContent = 'ФИНАЛ ФИНАЛИСТОВ 2025 - 20.12.2025';
    } else if (tabName === 'satellite2025') {
        specialTabButton.textContent = 'САТЕЛЛИТ 2025';
        phaseElement.textContent = 'САТЕЛЛИТ 2025 - 6.12.2025';
    }
    
    // Показываем кнопку "Назад к турниру"
    document.querySelector('.back-button').style.display = 'block';
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

// Расчет среднего стека для активного дня (только положительные значения)
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active').id;
    let players;
    
    if (activeTab === 'day1') {
        players = day1Players;
    } else if (activeTab === 'day2') {
        players = day2Players;
    } else if (activeTab === 'day3') {
        players = day3Players;
    } else if (activeTab === 'final') {
        // Для финала считаем среднее от полного итога
        const finalPlayers = getAllFinalPlayers();
        const positiveResults = finalPlayers.filter(player => {
            const total = (player.day1 + player.day2 + player.day3) + 
                         (player.finalParticipation || 0) + 
                         (player.hungry || 0) + 
                         (player.bounty || 0);
            return total > 0;
        });
        if (positiveResults.length === 0) return 0;
        const totalSum = positiveResults.reduce((sum, player) => {
            return sum + (player.day1 + player.day2 + player.day3) + 
                   (player.finalParticipation || 0) + 
                   (player.hungry || 0) + 
                   (player.bounty || 0);
        }, 0);
        return Math.round(totalSum / positiveResults.length);
    } else if (activeTab === 'bounties' || activeTab === 'final2025' || activeTab === 'satellite2025' || activeTab === 'blinds') {
        return 0;
    } else {
        return 0;
    }
    
    const positiveResults = players.filter(player => player.result > 0);
    if (positiveResults.length === 0) return 0;
    const total = positiveResults.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / positiveResults.length);
}

// Получение всех игроков для финала (объединение дней) - ИСПРАВЛЕННАЯ ВЕРСИЯ
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0,
            finalParticipation: 0,
            hungry: 0,
            bounty: 0
        });
    });
    
    // Обновляем/добавляем игроков из дня 2
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day2 = player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result,
                day3: 0,
                finalParticipation: 0,
                hungry: 0,
                bounty: 0
            });
        }
    });
    
    // Обновляем/добавляем игроков из дня 3
    day3Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day3 = player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: player.result,
                finalParticipation: 0,
                hungry: 0,
                bounty: 0
            });
        }
    });
    
    // Добавляем бонусы - ИСПРАВЛЕННАЯ ЧАСТЬ
    Object.keys(playerBonuses).forEach(playerName => {
        if (allPlayersMap.has(playerName)) {
            const bonus = playerBonuses[playerName];
            allPlayersMap.get(playerName).finalParticipation = bonus.finalParticipation;
            allPlayersMap.get(playerName).hungry = bonus.hungry;
            allPlayersMap.get(playerName).bounty = bonus.bounty;
        } else {
            // Если игрока нет в предыдущих днях, но есть в бонусах - добавляем его
            const bonus = playerBonuses[playerName];
            allPlayersMap.set(playerName, {
                name: playerName,
                day1: 0,
                day2: 0,
                day3: 0,
                finalParticipation: bonus.finalParticipation,
                hungry: bonus.hungry,
                bounty: bonus.bounty
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Получение всех игроков до третьего дня (День 1 + День 2)
function getAllPlayersBeforeDay3() {
    const allPlayersMap = new Map();
    
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0
        });
    });
    
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day2 = player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result,
                day3: 0
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Расчет изменений позиций для Финала (относительно итогов Дня 1+День 2)
function calculateFinalPositionChanges() {
    const changes = new Map();
    
    const previousPositions = new Map();
    const playersBeforeDay3 = getAllPlayersBeforeDay3();
    
    playersBeforeDay3.sort((a, b) => (b.day1 + b.day2) - (a.day1 + a.day2));
    
    playersBeforeDay3.forEach((player, index) => {
        previousPositions.set(player.name, index + 1);
    });
    
    const finalPlayers = getAllFinalPlayers();
    finalPlayers.sort((a, b) => {
        const totalA = (a.day1 + a.day2 + a.day3) + (a.finalParticipation || 0) + (a.hungry || 0) + (a.bounty || 0);
        const totalB = (b.day1 + b.day2 + b.day3) + (b.finalParticipation || 0) + (b.hungry || 0) + (b.bounty || 0);
        return totalB - totalA;
    });
    
    finalPlayers.forEach((player, newPosition) => {
        const oldPosition = previousPositions.get(player.name);
        
        if (oldPosition) {
            const change = oldPosition - (newPosition + 1);
            changes.set(player.name, {
                change: Math.abs(change),
                type: change > 0 ? 'up' : change < 0 ? 'down' : 'same'
            });
        } else {
            changes.set(player.name, {
                change: null,
                type: 'new'
            });
        }
    });
    
    return changes;
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Создание HTML для стрелки изменения позиции
function createPositionChangeHTML(changeData) {
    if (!changeData) return '';
    
    const { change, type } = changeData;
    
    let html = '';
    let arrow = '';
    let text = '';
    
    switch (type) {
        case 'up':
            arrow = '↑';
            text = `+${change}`;
            break;
        case 'down':
            arrow = '↓';
            text = `-${change}`;
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

// Функция для получения бонусных данных игрока
function getPlayerBonusData(playerName) {
    return playerBonuses[playerName] || { finalParticipation: 0, hungry: 0, bounty: 0 };
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    day2Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    day3Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Финала
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    tableBody.innerHTML = '';
    
    const finalPlayers = getAllFinalPlayers();
    const positionChanges = calculateFinalPositionChanges();
    
    // Сортируем по убыванию общего итога
    finalPlayers.sort((a, b) => {
        const totalA = (a.day1 + a.day2 + a.day3) + (a.finalParticipation || 0) + (a.hungry || 0) + (a.bounty || 0);
        const totalB = (b.day1 + b.day2 + b.day3) + (b.finalParticipation || 0) + (b.hungry || 0) + (b.bounty || 0);
        return totalB - totalA;
    });
    
    // Присваиваем новые номера для финала
    finalPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        const qualifyingTotal = player.day1 + player.day2 + player.day3;
        const finalTotal = qualifyingTotal + (player.finalParticipation || 0) + (player.hungry || 0) + (player.bounty || 0);
        const changeData = positionChanges.get(player.name);
        const totalClass = finalTotal >= 0 ? "final-total positive" : "final-total negative";
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="result-column">${formatNumber(qualifyingTotal)}</td>
            <td class="chips-positive">${player.finalParticipation ? formatNumber(player.finalParticipation) : '-'}</td>
            <td class="chips-positive">${player.hungry ? formatNumber(player.hungry) : '-'}</td>
            <td class="chips-positive">${player.bounty ? formatNumber(player.bounty) : '-'}</td>
            <td class="${totalClass}">${formatNumber(finalTotal)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Охоты за головами
function fillBountiesTable() {
    const tableBody = document.getElementById('bountiesTable');
    tableBody.innerHTML = '';
    
    // Сортируем по убыванию бонуса
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    
    sortedBounties.forEach((player, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="player-name">${player.name}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функция для заполнения таблицы блайндов
function fillBlindsTable() {
    const tableBody = document.getElementById('blindsTable');
    tableBody.innerHTML = '';
    
    blindsData.forEach((level) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="number-column">${level.number}</td>
            <td>${level.startTime}</td>
            <td>${level.endTime}</td>
            <td class="chips-positive">${formatNumber(level.sb)}</td>
            <td class="chips-positive">${formatNumber(level.bb)}</td>
            <td class="chips-positive">${formatNumber(level.ante)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функции для заполнения таблиц с поиском

function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
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
            <td>${formatNumber(player.participation)}</td>
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
    tableBody.innerHTML = '';
    
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
            <td>${formatNumber(player.participation)}</td>
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
    tableBody.innerHTML = '';
    
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
            <td>${formatNumber(player.participation)}</td>
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
    tableBody.innerHTML = '';
    
    const allFinalPlayers = getAllFinalPlayers();
    const positionChanges = calculateFinalPositionChanges();
    
    allFinalPlayers.sort((a, b) => {
        const totalA = (a.day1 + a.day2 + a.day3) + (a.finalParticipation || 0) + (a.hungry || 0) + (a.bounty || 0);
        const totalB = (b.day1 + b.day2 + b.day3) + (b.finalParticipation || 0) + (b.hungry || 0) + (b.bounty || 0);
        return totalB - totalA;
    });
    
    const filteredPlayers = allFinalPlayers.filter(player => 
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
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const qualifyingTotal = player.day1 + player.day2 + player.day3;
        const finalTotal = qualifyingTotal + (player.finalParticipation || 0) + (player.hungry || 0) + (player.bounty || 0);
        const changeData = positionChanges.get(player.name);
        const totalClass = finalTotal >= 0 ? "final-total positive" : "final-total negative";
        
        const originalPosition = allFinalPlayers.findIndex(p => p.name === player.name) + 1;
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${originalPosition}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="result-column">${formatNumber(qualifyingTotal)}</td>
            <td class="chips-positive">${player.finalParticipation ? formatNumber(player.finalParticipation) : '-'}</td>
            <td class="chips-positive">${player.hungry ? formatNumber(player.hungry) : '-'}</td>
            <td class="chips-positive">${player.bounty ? formatNumber(player.bounty) : '-'}</td>
            <td class="${totalClass}">${formatNumber(finalTotal)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillBountiesTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('bountiesTable');
    tableBody.innerHTML = '';
    
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    const filteredBounties = sortedBounties.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredBounties.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredBounties.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="player-name">${highlightedName}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
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

// Автодополнение для поиска
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...bountyPlayers.map(p => ({ name: p.name }))];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    const final2025Players = [
        "Александр Гиг", "Мария Павлова", "Даша Yellow", "Михаил Козадой", 
        "Вадим Константинов", "Руф", "Влад Пив", "Артур Король", 
        "Шурик Шилкин", "Даня Гол", "Никита Yellow", "Богдан Анц", "Семён Ануфриев"
    ];
    
    const satellitePlayers = [
        "Жан Балацкий", "Иван Чемодан", "Иван Антипов", "Олег Сми", 
        "Egrinderolls", "Саша Тяжелов", "Асхат Суханбердин", 
        "Саша Коч", "Ксюша Петрушина", "Дмитрий Ник", "Андрей Ф", 
        "Ладали", "Даша Гри", "Искандер", "Вова Гриненко", 
        "Даня КДД", "Надя Жб", "Константин Сидорин", "Славяна", "Андрей Джип"
    ];
    
    playerNames.push(...final2025Players, ...satellitePlayers, ...Object.keys(playerBonuses));
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

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active').id;
    
    if (searchTerm === '') {
        if (activeTab === 'day1') {
            fillDay1Table();
        } else if (activeTab === 'day2') {
            fillDay2Table();
        } else if (activeTab === 'day3') {
            fillDay3Table();
        } else if (activeTab === 'final') {
            fillFinalTable();
        } else if (activeTab === 'bounties') {
            fillBountiesTable();
        } else if (activeTab === 'blinds') {
            fillBlindsTable();
        }
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let foundPlayers = [];
    
    if (activeTab === 'day1') {
        foundPlayers = day1Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay1TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day2') {
        foundPlayers = day2Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay2TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day3') {
        foundPlayers = day3Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay3TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'final') {
        const allFinalPlayers = getAllFinalPlayers();
        foundPlayers = allFinalPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillFinalTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'bounties') {
        foundPlayers = bountyPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillBountiesTableWithSearch(foundPlayers, searchTerm);
    }
    // Для блайндов поиск не применяется
    
    const resultsCount = document.getElementById('resultsCount');
    const searchResults = document.getElementById('searchResults');
    
    if (foundPlayers.length > 0) {
        resultsCount.textContent = foundPlayers.length;
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = '0';
    }
}

// Функция для обновления дат в статистике
function updateDates(nextGame, finalDate) {
    const dateItems = document.querySelectorAll('.date-value');
    if (dateItems[0]) dateItems[0].innerHTML = nextGame;
    if (dateItems[1]) dateItems[1].textContent = finalDate;
}

// Обновление статистики при переключении вкладок
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const specialTotalPlayersElement = document.getElementById('specialTotalPlayers');
    const activeTab = document.querySelector('.tab-content.active').id;
    
    let totalPlayers, averageStack;
    
    if (activeTab === 'day1') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    } else if (activeTab === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    } else if (activeTab === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    } else if (activeTab === 'final') {
        const finalPlayers = getAllFinalPlayers();
        totalPlayers = finalPlayers.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    } else if (activeTab === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    } else if (activeTab === 'blinds') {
        totalPlayers = blindsData.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    } else if (activeTab === 'final2025') {
        totalPlayers = 13;
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else if (activeTab === 'satellite2025') {
        totalPlayers = 20;
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else {
        totalPlayers = 0;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('29.11.2025', '29.11.2025');
    }
}

// Функция для отладки - показать всех игроков финала в консоли
function debugFinalPlayers() {
    const finalPlayers = getAllFinalPlayers();
    console.log('Все игроки финала:', finalPlayers);
    console.log('Количество игроков:', finalPlayers.length);
    
    // Сортируем по убыванию общего итога для проверки
    const sortedPlayers = finalPlayers.sort((a, b) => {
        const totalA = (a.day1 + a.day2 + a.day3) + (a.finalParticipation || 0) + (a.hungry || 0) + (a.bounty || 0);
        const totalB = (b.day1 + b.day2 + b.day3) + (b.finalParticipation || 0) + (b.hungry || 0) + (b.bounty || 0);
        return totalB - totalA;
    });
    
    console.log('Топ-5 игроков:');
    sortedPlayers.slice(0, 5).forEach((player, index) => {
        const total = (player.day1 + player.day2 + player.day3) + (player.finalParticipation || 0) + (player.hungry || 0) + (player.bounty || 0);
        console.log(`${index + 1}. ${player.name}: ${total} (Д1:${player.day1}, Д2:${player.day2}, Д3:${player.day3}, Участие:${player.finalParticipation}, Голод:${player.hungry}, Бонус:${player.bounty})`);
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнир Тощего Джека J-2 загружен!');
    
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillFinalTable();
    fillBountiesTable();
    fillBlindsTable();
    setupAutocomplete();
    
    // Отладочная информация
    debugFinalPlayers();
    
    // Показываем вкладку Финал при загрузке
    showTab('final');
    
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    
    document.getElementById('clearSearch').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        searchPlayers();
    });
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', updateStats);
    });
    
    window.addEventListener('scroll', function() {
        document.getElementById('autocompleteResults').style.display = 'none';
    });
});
