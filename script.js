// Данные игроков для Дня 1
const day1Players = [
    { number: 1, name: "Robert Юниксфактёр", entry: 1100, rebuy: 0, exit: 9525, win: 8425 },
    { number: 2, name: "Семён Ануфриев", entry: 1100, rebuy: 0, exit: 8935, win: 7835 },
    { number: 3, name: "Михаил Наб", entry: 1100, rebuy: 0, exit: 8605, win: 7505 },
    { number: 4, name: "Роман Егоров", entry: 1100, rebuy: 0, exit: 7540, win: 6440 },
    { number: 5, name: "Саша Коч", entry: 1100, rebuy: 0, exit: 6980, win: 5880 },
    { number: 6, name: "Оксана Б", entry: 1100, rebuy: 0, exit: 5915, win: 4815 },
    { number: 7, name: "Даша Yellow", entry: 1100, rebuy: 0, exit: 4410, win: 3310 },
    { number: 8, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 3305, win: 2205 },
    { number: 9, name: "Jane 007", entry: 1100, rebuy: 1000, exit: 3025, win: 925 },
    { number: 10, name: "Дима Жур", entry: 1100, rebuy: 2000, exit: 3905, win: 805 },
    { number: 11, name: "Руфат Макиато", entry: 1100, rebuy: 5000, exit: 4935, win: -1165 },
    { number: 12, name: "Инна М", entry: 1100, rebuy: 3000, exit: 2680, win: -1420 },
    { number: 13, name: "Михаил Козадой", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 14, name: "Максим Spy", entry: 1100, rebuy: 2000, exit: 810, win: -2290 },
    { number: 15, name: "Всеволод Кузнецов", entry: 1100, rebuy: 2000, exit: 630, win: -2470 },
    { number: 16, name: "Асхат Суханбердин", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 17, name: "Федор К", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 18, name: "Свидетель", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 19, name: "Даша Гри", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 20, name: "Egrinderolls", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 21, name: "Богдан А", entry: 1100, rebuy: 6000, exit: 0, win: -7100 },
    { number: 22, name: "Вова Гриненко", entry: 1100, rebuy: 6000, exit: 0, win: -7100 }
];

// Данные игроков для Дня 2
const day2Players = [
    { number: 1, name: "Лев Р", entry: 1100, rebuy: 0, exit: 31955, win: 30855 },
    { number: 2, name: "Асхат Суханбердин", entry: 1100, rebuy: 2000, exit: 19870, win: 16770 },
    { number: 3, name: "Богдан А", entry: 1100, rebuy: 0, exit: 8215, win: 7115 },
    { number: 4, name: "Серж", entry: 1100, rebuy: 0, exit: 4385, win: 3285 },
    { number: 5, name: "Egrinderolls", entry: 1100, rebuy: 1000, exit: 3850, win: 1750 },
    { number: 6, name: "Полина Матыцына", entry: 1100, rebuy: 2000, exit: 4615, win: 1515 },
    { number: 7, name: "Robert Юниксфактёр", entry: 1100, rebuy: 0, exit: 2610, win: 1510 },
    { number: 8, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 305, win: -795 },
    { number: 9, name: "Никита Зейн", entry: 1100, rebuy: 0, exit: 0, win: -1100 },
    { number: 10, name: "Максим Spy", entry: 1100, rebuy: 4000, exit: 4000, win: -1100 },
    { number: 11, name: "Федор К", entry: 1100, rebuy: 1000, exit: 400, win: -1700 },
    { number: 12, name: "Саша Коч", entry: 1100, rebuy: 1000, exit: 265, win: -1835 },
    { number: 13, name: "Влад Владшток", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 14, name: "Михаил Козадой", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 15, name: "Jane 007", entry: 1100, rebuy: 2000, exit: 10, win: -3090 },
    { number: 16, name: "Эмиль", entry: 1100, rebuy: 2000, exit: 0, win: -3100 },
    { number: 17, name: "Михаил Наб", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 18, name: "Инна М", entry: 1100, rebuy: 5000, exit: 1830, win: -4270 },
    { number: 19, name: "Свидетель", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 20, name: "Александр Исаев", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 21, name: "Даня КДД", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 22, name: "Семён Ануфриев", entry: 1100, rebuy: 6000, exit: 0, win: -7100 },
    { number: 23, name: "Сергей Ман", entry: 1100, rebuy: 8000, exit: 0, win: -9100 }
];

// Данные игроков для День 3
const day3Players = [
    { number: 1, name: "Свидетель", entry: 1100, rebuy: 0, exit: 33055, win: 31955 },
    { number: 2, name: "Михаил Наб", entry: 1100, rebuy: 2000, exit: 11425, win: 8325 },
    { number: 3, name: "Никита Yellow", entry: 1100, rebuy: 1000, exit: 7525, win: 5425 },
    { number: 4, name: "Полина Матыцына", entry: 1100, rebuy: 0, exit: 6290, win: 5190 },
    { number: 5, name: "Михаил Козадой", entry: 1100, rebuy: 0, exit: 5440, win: 4340 },
    { number: 6, name: "Петя Федоров", entry: 1100, rebuy: 1000, exit: 6025, win: 3925 },
    { number: 7, name: "Искандер", entry: 1100, rebuy: 3000, exit: 7565, win: 3465 },
    { number: 8, name: "Роман Егоров", entry: 1100, rebuy: 4000, exit: 8455, win: 3355 },
    { number: 9, name: "Серж", entry: 1100, rebuy: 3000, exit: 5775, win: 1675 },
    { number: 10, name: "Максим Spy", entry: 1100, rebuy: 0, exit: 2470, win: 1370 },
    { number: 11, name: "Кристина А", entry: 1100, rebuy: 2000, exit: 4225, win: 1125 },
    { number: 12, name: "Иван Антипов", entry: 1100, rebuy: 0, exit: 1500, win: 400 },
    { number: 13, name: "Даша Yellow", entry: 1100, rebuy: 0, exit: 1445, win: 345 },
    { number: 14, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 415, win: -685 },
    { number: 15, name: "Лев Р", entry: 1100, rebuy: 0, exit: 0, win: -1100 },
    { number: 16, name: "Артём 007", entry: 1100, rebuy: 0, exit: 0, win: -1100 },
    { number: 17, name: "Гавриил Морозов", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 18, name: "Соня Кур", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 19, name: "Влад Владшток", entry: 1100, rebuy: 2000, exit: 290, win: -2810 },
    { number: 20, name: "Вика Ч", entry: 1100, rebuy: 2000, exit: 0, win: -3100 },
    { number: 21, name: "Михаил Таб", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 22, name: "Саша Коч", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 23, name: "Инна М", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 24, name: "Асхат Суханбердин", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 25, name: "Jane 007", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 26, name: "Евгений Ц", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 27, name: "Богдан А", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 28, name: "Дмитрий Ник", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 29, name: "Семён Ануфриев", entry: 1100, rebuy: 8000, exit: 0, win: -9100 }
];

// Данные игроков для День 4
const day4Players = [
    { number: 1, name: "Михаил Наб", entry: 1100, rebuy: 0, exit: 13635, win: 12535 },
    { number: 2, name: "Никита Зейн", entry: 1100, rebuy: 1000, exit: 11880, win: 9780 },
    { number: 3, name: "Богдан А", entry: 1100, rebuy: 1000, exit: 9890, win: 7790 },
    { number: 4, name: "Jane 007", entry: 1100, rebuy: 0, exit: 8350, win: 7250 },
    { number: 5, name: "Максим Spy", entry: 1100, rebuy: 2000, exit: 7750, win: 4650 },
    { number: 6, name: "Egrinderolls", entry: 1100, rebuy: 0, exit: 5240, win: 4140 },
    { number: 7, name: "Robert Юниксфактёр", entry: 1100, rebuy: 1000, exit: 5350, win: 3250 },
    { number: 8, name: "Михаил Т", entry: 1100, rebuy: 1000, exit: 3170, win: 1070 },
    { number: 9, name: "Оксана Б", entry: 1100, rebuy: 2000, exit: 3505, win: 405 },
    { number: 10, name: "Анна К", entry: 1100, rebuy: 2000, exit: 3160, win: 60 },
    { number: 11, name: "Роман Лод", entry: 1100, rebuy: 4000, exit: 4930, win: -170 },
    { number: 12, name: "Кристина А", entry: 1100, rebuy: 2000, exit: 2340, win: -760 },
    { number: 13, name: "Шурик Шилкин", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 14, name: "Роман Егоров", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 15, name: "Влад Владшток", entry: 1100, rebuy: 2000, exit: 0, win: -3100 },
    { number: 16, name: "Асхат Суханбердин", entry: 1100, rebuy: 2000, exit: 0, win: -3100 },
    { number: 17, name: "Даша Хромова", entry: 1100, rebuy: 4000, exit: 2000, win: -3100 },
    { number: 18, name: "Соня Кур", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 19, name: "Семён Ануфриев", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 20, name: "Лев Р", entry: 1100, rebuy: 8000, exit: 0, win: -9100 },
    { number: 21, name: "Том", entry: 1100, rebuy: 9000, exit: 0, win: -10100 }
];

// Данные для охоты за головами (очищены)
const bountyPlayers = [];

// РЕЙТИНГ ПОСЛЕ ДНЯ 3 (итоговый рейтинг на конец дня 3)
const ratingAfterDay3 = getCurrentRatingAfterDay3();

// НОВЫЕ БАЛЛЫ ЗА ДЕНЬ 4
const day4RatingChanges = [
    { name: "Михаил Наб", change: 137 },
    { name: "Никита Зейн", change: 74 },
    { name: "Богдан А", change: 60 },
    { name: "Jane 007", change: 69 },
    { name: "Максим Spy", change: 40 },
    { name: "Egrinderolls", change: 56 },
    { name: "Robert Юниксфактёр", change: 40 },
    { name: "Михаил Т", change: 37 },
    { name: "Оксана Б", change: 30 },
    { name: "Анна К", change: 28 },
    { name: "Роман Лод", change: 22 },
    { name: "Кристина А", change: 26 },
    { name: "Шурик Шилкин", change: 29 },
    { name: "Роман Егоров", change: 28 },
    { name: "Влад Владшток", change: 23 },
    { name: "Асхат Суханбердин", change: 22 },
    { name: "Даша Хромова", change: 18 },
    { name: "Соня Кур", change: 17 },
    { name: "Семён Ануфриев", change: 15 },
    { name: "Лев Р", change: 13 },
    { name: "Том", change: 12 }
];

// Функция для получения рейтинга после дня 3
function getCurrentRatingAfterDay3() {
    const ratingAfterDay2 = [
        { name: "Robert Юниксфактёр", rating: 195 },
        { name: "Лев Р", rating: 144 },
        { name: "Семён Ануфриев", rating: 114 },
        { name: "Михаил Наб", rating: 101 },
        { name: "Шурик Шилкин", rating: 101 },
        { name: "Богдан А", rating: 97 },
        { name: "Саша Коч", rating: 95 },
        { name: "Асхат Суханбердин", rating: 86 },
        { name: "Роман Егоров", rating: 70 },
        { name: "Серж", rating: 72 },
        { name: "Egrinderolls", rating: 64 },
        { name: "Михаил Козадой", rating: 59 },
        { name: "Оксана Б", rating: 57 },
        { name: "Даша Yellow", rating: 53 },
        { name: "Федор К", rating: 53 },
        { name: "Jane 007", rating: 60 },
        { name: "Максим Spy", rating: 48 },
        { name: "Никита Зейн", rating: 48 },
        { name: "Полина Матыцына", rating: 38 },
        { name: "Инна М", rating: 40 },
        { name: "Дима Жур", rating: 29 },
        { name: "Влад Владшток", rating: 30 },
        { name: "Всеволод Кузнецов", rating: 23 },
        { name: "Эмиль", rating: 23 },
        { name: "Свидетель", rating: 34 },
        { name: "Руфат Макиато", rating: 21 },
        { name: "Даша Гри", rating: 17 },
        { name: "Александр Исаев", rating: 17 },
        { name: "Сергей Ман", rating: 13 },
        { name: "Даня КДД", rating: 15 },
        { name: "Вова Гриненко", rating: 14 }
    ];
    
    const day3RatingChanges = [
        { name: "Свидетель", change: 162 },
        { name: "Михаил Наб", change: 74 },
        { name: "Никита Yellow", change: 71 },
        { name: "Полина Матыцына", change: 81 },
        { name: "Михаил Козадой", change: 72 },
        { name: "Петя Федоров", change: 50 },
        { name: "Искандер", change: 35 },
        { name: "Роман Егоров", change: 30 },
        { name: "Серж", change: 31 },
        { name: "Максим Spy", change: 51 },
        { name: "Кристина А", change: 31 },
        { name: "Иван Антипов", change: 47 },
        { name: "Даша Yellow", change: 45 },
        { name: "Шурик Шилкин", change: 43 },
        { name: "Лев Р", change: 42 },
        { name: "Артём 007", change: 40 },
        { name: "Гавриил Морозов", change: 30 },
        { name: "Соня Кур", change: 29 },
        { name: "Влад Владшток", change: 24 },
        { name: "Вика Ч", change: 23 },
        { name: "Михаил Таб", change: 20 },
        { name: "Саша Коч", change: 20 },
        { name: "Инна М", change: 18 },
        { name: "Асхат Суханбердин", change: 17 },
        { name: "Jane 007", change: 16 },
        { name: "Евгений Ц", change: 16 },
        { name: "Богдан А", change: 15 },
        { name: "Дмитрий Ник", change: 15 },
        { name: "Семён Ануфриев", change: 13 }
    ];
    
    const currentRating = [];
    
    // 1. Берём всех игроков из рейтинга после дня 2
    ratingAfterDay2.forEach(player => {
        // Ищем, играл ли этот игрок в день 3
        const day3Change = day3RatingChanges.find(p => p.name === player.name);
        
        if (day3Change) {
            // Игрок играл в день 3 - добавляем баллы
            currentRating.push({
                name: player.name,
                rating: player.rating + day3Change.change
            });
        } else {
            // Игрок НЕ играл в день 3 - оставляем старый рейтинг
            currentRating.push({
                name: player.name,
                rating: player.rating
            });
        }
    });
    
    // 2. Добавляем новых игроков, которых не было в рейтинге дня 2
    day3RatingChanges.forEach(player => {
        const existsInRating = currentRating.some(p => p.name === player.name);
        if (!existsInRating) {
            // Это новый игрок (впервые в рейтинге)
            currentRating.push({
                name: player.name,
                rating: player.change
            });
        }
    });
    
    return currentRating;
}

// Получение текущего рейтинга (все игроки из рейтинга дня 3 + новые игроки дня 4)
function getCurrentRating() {
    const currentRating = [];
    
    // 1. Берём всех игроков из рейтинга после дня 3
    ratingAfterDay3.forEach(player => {
        // Ищем, играл ли этот игрок в день 4
        const day4Change = day4RatingChanges.find(p => p.name === player.name);
        
        if (day4Change) {
            // Игрок играл в день 4 - добавляем баллы
            currentRating.push({
                name: player.name,
                previousRating: player.rating,
                change: day4Change.change,
                totalRating: player.rating + day4Change.change,
                newPlayer: false
            });
        } else {
            // Игрок НЕ играл в день 4 - оставляем старый рейтинг
            currentRating.push({
                name: player.name,
                previousRating: player.rating,
                change: 0,
                totalRating: player.rating,
                newPlayer: false
            });
        }
    });
    
    // 2. Добавляем новых игроков, которых не было в рейтинге дня 3
    day4RatingChanges.forEach(player => {
        const existsInRating = currentRating.some(p => p.name === player.name);
        if (!existsInRating) {
            // Это новый игрок (впервые в рейтинге)
            currentRating.push({
                name: player.name,
                previousRating: 0,
                change: player.change,
                totalRating: player.change,
                newPlayer: true
            });
        }
    });
    
    return currentRating;
}

// Расчет изменений позиций для рейтинга
function calculateRatingPositionChanges() {
    const changes = new Map();
    
    // Сортируем рейтинг дня 3
    const day3Sorted = [...ratingAfterDay3].sort((a, b) => b.rating - a.rating);
    const previousPositions = new Map();
    day3Sorted.forEach((player, index) => {
        previousPositions.set(player.name, index + 1);
    });
    
    // Получаем текущий рейтинг
    const currentRating = getCurrentRating();
    const currentSorted = [...currentRating].sort((a, b) => b.totalRating - a.totalRating);
    
    currentSorted.forEach((player, newPosition) => {
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
    
    // Активируем соответствующую кнопку
    const targetButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
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
    
    // Обновляем заголовок фазы турнира
    const phaseElement = document.getElementById('currentPhase');
    switch(tabName) {
        case 'day1':
            phaseElement.textContent = 'День 1 - 4.12.2025';
            break;
        case 'day2':
            phaseElement.textContent = 'День 2 - 11.12.2025';
            break;
        case 'day3':
            phaseElement.textContent = 'День 3 - 18.12.2025';
            break;
        case 'day4':
            phaseElement.textContent = 'День 4 - 25.12.2025';
            break;
        case 'summary':
            phaseElement.textContent = 'Итог Межсезонья';
            break;
        case 'bounties':
            phaseElement.textContent = 'Охота за головами';
            break;
        case 'rating':
            phaseElement.textContent = 'Рейтинг';
            break;
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
        specialTabButton.textContent = 'Результаты сателлита 2025';
        phaseElement.textContent = 'Результаты сателлита 2025 - 6.12.2025';
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
    } else if (activeTab === 'day4') {
        players = day4Players;
    } else if (activeTab === 'summary') {
        const allPlayers = getAllPlayersSummary();
        const positiveResults = allPlayers.filter(player => player.total > 0);
        if (positiveResults.length === 0) return 0;
        const totalSum = positiveResults.reduce((sum, player) => sum + player.total, 0);
        return Math.round(totalSum / positiveResults.length);
    } else {
        return 0;
    }
    
    const positiveResults = players.filter(player => player.win > 0);
    if (positiveResults.length === 0) return 0;
    const total = positiveResults.reduce((sum, player) => sum + Number(player.win), 0);
    return Math.round(total / positiveResults.length);
}

// Получение всех игроков для сводной таблицы
function getAllPlayersSummary() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.win,
            day2: 0,
            day3: 0,
            day4: 0,
            total: player.win
        });
    });
    
    // Добавляем/обновляем игроков из дня 2
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day2 = player.win;
            existingPlayer.total += player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.win,
                day3: 0,
                day4: 0,
                total: player.win
            });
        }
    });
    
    // Добавляем/обновляем игроков из дня 3
    day3Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day3 = player.win;
            existingPlayer.total += player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: player.win,
                day4: 0,
                total: player.win
            });
        }
    });
    
    // Добавляем/обновляем игроков из дня 4
    day4Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day4 = player.win;
            existingPlayer.total += player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: 0,
                day4: player.win,
                total: player.win
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Найти чиплидера (игрока с максимальным итогом)
function findChipLeader() {
    const allPlayers = getAllPlayersSummary();
    if (allPlayers.length === 0) return null;
    
    let maxTotal = -Infinity;
    let chipLeader = null;
    
    allPlayers.forEach(player => {
        if (player.total > maxTotal) {
            maxTotal = player.total;
            chipLeader = player.name;
        }
    });
    
    return chipLeader;
}

// Расчет изменений позиций для сводной таблицы
function calculateSummaryPositionChanges() {
    const changes = new Map();
    
    // Получаем позиции после дня 3
    const day3Summary = getAllDay3Summary();
    day3Summary.sort((a, b) => b.total - a.total);
    
    const previousPositions = new Map();
    day3Summary.forEach((player, index) => {
        previousPositions.set(player.name, index + 1);
    });
    
    // Получаем текущие позиции
    const currentSummary = getAllPlayersSummary();
    currentSummary.sort((a, b) => b.total - a.total);
    
    currentSummary.forEach((player, newPosition) => {
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

// Получение только данных после дня 3 для сравнения
function getAllDay3Summary() {
    const day3Summary = [];
    
    const allPlayersMap = new Map();
    
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.win,
            day2: 0,
            day3: 0,
            total: player.win
        });
    });
    
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day2 = player.win;
            existingPlayer.total += player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.win,
                day3: 0,
                total: player.win
            });
        }
    });
    
    day3Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day3 = player.win;
            existingPlayer.total += player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: player.win,
                total: player.win
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
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
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы День 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    day3Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы День 4
function fillDay4Table() {
    const tableBody = document.getElementById('day4Table');
    tableBody.innerHTML = '';
    
    day4Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Итогов
function fillSummaryTable() {
    const tableBody = document.getElementById('summaryTable');
    tableBody.innerHTML = '';
    
    const allPlayers = getAllPlayersSummary();
    const positionChanges = calculateSummaryPositionChanges();
    const chipLeader = findChipLeader();
    
    // Сортируем по убыванию общего итога
    allPlayers.sort((a, b) => b.total - a.total);
    
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
            <td class="result-column">${player.day4 !== 0 ? formatNumber(player.day4) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Охоты за головами
function fillBountiesTable() {
    const tableBody = document.getElementById('bountiesTable');
    tableBody.innerHTML = '';
    
    if (bountyPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center; padding: 40px; color: #666;">
                    Нет данных
                </td>
            </tr>
        `;
        return;
    }
    
    // Сортируем по убыванию бонуса
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    
    sortedBounties.forEach((player) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="player-name">${player.name}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Рейтинга
function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    tableBody.innerHTML = '';
    
    const currentRating = getCurrentRating();
    const positionChanges = calculateRatingPositionChanges();
    
    // Сортируем по убыванию итогового рейтинга
    const sortedRating = [...currentRating].sort((a, b) => b.totalRating - a.totalRating);
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const changeClass = player.change > 0 ? "rating-positive" : player.change < 0 ? "rating-negative" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const changeHTML = createPositionChangeHTML(positionChanges.get(player.name));
        
        // Подсветка топ 20 игроков
        if (index < 20) {
            row.className = 'top-rating';
        }
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.totalRating}</td>
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay2TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay3TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay4TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day4Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillSummaryTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('summaryTable');
    tableBody.innerHTML = '';
    
    const allPlayers = getAllPlayersSummary();
    const filteredPlayers = allPlayers.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    const chipLeader = findChipLeader();
    filteredPlayers.sort((a, b) => b.total - a.total);
    const positionChanges = calculateSummaryPositionChanges();
    
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
            <td class="result-column">${player.day4 !== 0 ? formatNumber(player.day4) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
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

function fillRatingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('ratingTable');
    tableBody.innerHTML = '';
    
    const currentRating = getCurrentRating();
    const sortedRating = [...currentRating].sort((a, b) => b.totalRating - a.totalRating);
    
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
    
    const positionChanges = calculateRatingPositionChanges();
    
    filteredRating.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const changeClass = player.change > 0 ? "rating-positive" : player.change < 0 ? "rating-negative" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeHTML = createPositionChangeHTML(positionChanges.get(player.name));
        
        // Подсветка топ 20 игроков
        if (index < 20) {
            row.className = 'top-rating search-highlight';
        }
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.totalRating}</td>
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
    
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...day4Players, ...bountyPlayers.map(p => ({ name: p.name })), ...ratingAfterDay3];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    const final2025Players = [
        "Никита Yellow", "grooveman", "Семён Ануфриев", "Даша Yellow", 
        "Иван Антипов", "Богдан А", "Владибир", "Артур Король", 
        "Мария Павлова", "Михаил Козадой", "Даня Гол", "Влад Пив", 
        "Иван Чемодан", "Вадим Константинов", "Искандер", "Саша Тяжелов",
        "Шурик Шилкин", "Руф", "Александр Гиг"
    ];
    
    const satellitePlayers = [
        "Ксюша Петрушина", "Вова Гриненко", "Славяна", "Надя Жб",
        "Даня КДД", "Олег Сми", "Ладали", "Egrinderolls"
    ];
    
    playerNames.push(...final2025Players, ...satellitePlayers);
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
        } else if (activeTab === 'day4') {
            fillDay4Table();
        } else if (activeTab === 'summary') {
            fillSummaryTable();
        } else if (activeTab === 'bounties') {
            fillBountiesTable();
        } else if (activeTab === 'rating') {
            fillRatingTable();
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
    } else if (activeTab === 'day4') {
        foundPlayers = day4Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay4TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'summary') {
        const allPlayers = getAllPlayersSummary();
        foundPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillSummaryTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'bounties') {
        foundPlayers = bountyPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillBountiesTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'rating') {
        const currentRating = getCurrentRating();
        foundPlayers = currentRating.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillRatingTableWithSearch(foundPlayers, searchTerm);
    }
    
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
function updateDates() {
    const dateItems = document.querySelectorAll('.date-value');
    if (dateItems[0]) dateItems[0].innerHTML = '-';
    if (dateItems[1]) dateItems[1].textContent = '-';
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
        
        updateDates();
    } else if (activeTab === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'day4') {
        totalPlayers = day4Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'summary') {
        const allPlayers = getAllPlayersSummary();
        totalPlayers = allPlayers.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'rating') {
        const currentRating = getCurrentRating();
        totalPlayers = currentRating.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'final2025') {
        totalPlayers = 19;
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else if (activeTab === 'satellite2025') {
        totalPlayers = 14;
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else {
        totalPlayers = 0;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Межсезонье Декабрь 2025 загружено!');
    
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillDay4Table();
    fillSummaryTable();
    fillBountiesTable();
    fillRatingTable();
    setupAutocomplete();
    
    // Показываем вкладку Итог Межсезонья при загрузке
    showTab('summary');
    
    // Обновляем даты
    updateDates();
    
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
