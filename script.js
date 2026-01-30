// Данные результатов предыдущего турнира (Миссис Дейзи Дак Q-2)
const previousTournamentResults = [
    { name: "Семён Ануфриев", place: 1 },
    { name: "Сергей Ман", place: 2 },
    { name: "Михаил Наб", place: 3 },
    { name: "Дмитрий Ник", place: 4 },
    { name: "Robert Юниксфактёр", place: 5 },
    { name: "Кристина А", place: 6 },
    { name: "grooveman", place: 7 },
    { name: "Михаил Козадой", place: 8 },
    { name: "Jane 007", place: 9 },
    { name: "Леонид П", place: 10 },
    { name: "Макар Аве", place: 11 },
    { name: "Влад Владшток", place: 12 },
    { name: "Максим Spy", place: 13 },
    { name: "Egrinderolls", place: 14 },
    { name: "Шурик Шилкин", place: 15 },
    { name: "Роман Лод", place: 16 },
    { name: "Соня Серж", place: 17 },
    { name: "Богдан А", place: 18 },
    { name: "Свидетель", place: 19 },
    { name: "Серж", place: 20 },
    { name: "Миша Скиф", place: 21 },
    { name: "Даня Д", place: 22 },
    { name: "Михаил Т", place: 23 },
    { name: "Настя К", place: 24 },
    { name: "Наташа Бонд", place: 25 },
    { name: "Макс Пиво", place: 26 },
    { name: "Ксения Куд", place: 27 },
    { name: "Разаман Рах", place: 28 },
    { name: "Артемий Мен", place: 29 },
    { name: "Никита Сизов", place: 30 },
    { name: "Родион Шашурин", place: 31 },
    { name: "Роман Егоров", place: 32 },
    { name: "Аня Гам", place: 33 },
    { name: "Родион К", place: 34 },
    { name: "Искандер", place: 35 },
    { name: "Полина Матыцына", place: 36 },
    { name: "Саша Коч", place: 37 },
    { name: "Алина Исм", place: 38 },
    { name: "Дарья Шев", place: 39 },
    { name: "Илья Без", place: 40 },
    { name: "Том", place: 41 },
    { name: "Иван Баж", place: 42 },
    { name: "Никита Зейн", place: 43 },
    { name: "Ирина Ага", place: 44 },
    { name: "Федор К", place: 45 },
    { name: "Влад Голубев", place: 46 },
    { name: "Славяна", place: 47 },
    { name: "Лев Р", place: 48 },
    { name: "Евгений Ц", place: 49 },
    { name: "Вова Баж", place: 50 },
    { name: "Даша Гри", place: 51 },
    { name: "Инна М", place: 52 }
];

// Данные охоты за головами (обновленные)
const huntingPlayers = [
    { name: "Михаил Наб", bounty: 1600 },
    { name: "Богдан А", bounty: 1600 },
    { name: "Robert Юниксфактёр", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "grooveman", bounty: 1000 },
    { name: "Михаил Козадой", bounty: 800 },
    { name: "Сергей Ман", bounty: 600 },
    { name: "Дмитрий Ник", bounty: 600 },
    { name: "Кристина А", bounty: 600 },
    { name: "Лев Р", bounty: 600 },
    { name: "Egrinderolls", bounty: 600 },
    { name: "Семён Ануфриев", bounty: 500 },
    { name: "Иван Баж", bounty: 500 },
    { name: "Максим Spy", bounty: 400 },
    { name: "Jane 007", bounty: 400 },
    { name: "Свидетель", bounty: 400 },
    { name: "Полина Матыцына", bounty: 400 },
    { name: "Роман Егоров", bounty: 400 },
    { name: "Серж", bounty: 400 },
    { name: "Иван Антипов", bounty: 400 },
    { name: "Влад Владшток", bounty: 200 },
    { name: "Никита Зейн", bounty: 200 },
    { name: "Вова Баж", bounty: 200 },
    { name: "Влад Сам", bounty: 200 }
];

// Предыдущий рейтинг (обновленный)
const previousRatingData = [
    { name: "Михаил Наб", rating: 528 },
    { name: "Семён Ануфриев", rating: 485 },
    { name: "Robert Юниксфактёр", rating: 440 },
    { name: "Шурик Шилкин", rating: 368 },
    { name: "grooveman", rating: 333 },
    { name: "Максим Spy", rating: 323 },
    { name: "Jane 007", rating: 300 },
    { name: "Михаил Козадой", rating: 298 },
    { name: "Богдан А", rating: 287 },
    { name: "Свидетель", rating: 266 },
    { name: "Сергей Ман", rating: 237 },
    { name: "Дмитрий Ник", rating: 230 },
    { name: "Кристина А", rating: 225 },
    { name: "Лев Р", rating: 219 },
    { name: "Egrinderolls", rating: 219 },
    { name: "Влад Владшток", rating: 216 },
    { name: "Полина Матыцына", rating: 168 },
    { name: "Никита Зейн", rating: 168 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Серж", rating: 148 },
    { name: "Саша Коч", rating: 139 },
    { name: "Настя К", rating: 134 },
    { name: "Макар Аве", rating: 123 },
    { name: "Леонид П", rating: 116 },
    { name: "Роман Лод", rating: 114 },
    { name: "Даня Д", rating: 101 },
    { name: "Соня Серж", rating: 101 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Наташа Бонд", rating: 93 },
    { name: "Искандер", rating: 87 },
    { name: "Оксана Б", rating: 87 },
    { name: "Михаил Т", rating: 79 },
    { name: "Инна М", rating: 78 },
    { name: "Ксения Куд", rating: 78 },
    { name: "Федор К", rating: 72 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Миша Скиф", rating: 70 },
    { name: "Разаман Рах", rating: 70 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Том", rating: 50 },
    { name: "Иван Антипов", rating: 47 },
    { name: "Соня Кур", rating: 46 },
    { name: "Иван Баж", rating: 41 },
    { name: "Артём 007", rating: 40 },
    { name: "Даша Гри", rating: 40 },
    { name: "Артемий Мен", rating: 35 },
    { name: "Евгений Ц", rating: 35 },
    { name: "Аня Гам", rating: 31 },
    { name: "Никита Сизов", rating: 31 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Вова Баж", rating: 27 },
    { name: "Родион К", rating: 26 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Алина Исм", rating: 22 },
    { name: "Дарья Шев", rating: 22 },
    { name: "Славяна", rating: 22 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Даша Хромова", rating: 18 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 }
];

// Новые добавки рейтинга после первого дня
const newRatingAdditions = [
    { name: "Михаил Наб", addition: 104 },
    { name: "Сергей Ман", addition: 74 },
    { name: "Полина Матыцына", addition: 60 },
    { name: "Иван Антипов", addition: 52 },
    { name: "Саша Коч", addition: 47 },
    { name: "Михаил Козадой", addition: 43 },
    { name: "Надя Жб", addition: 39 },
    { name: "Богдан А", addition: 37 },
    { name: "Роман Лод", addition: 35 },
    { name: "Вова Баж", addition: 33 },
    { name: "Кристина А", addition: 31 },
    { name: "Макар Аве", addition: 30 },
    { name: "Влад Сам", addition: 29 },
    { name: "Артемий Мен", addition: 28 },
    { name: "Egrinderolls", addition: 27 },
    { name: "Даниил Ершов", addition: 26 },
    { name: "Шурик Шилкин", addition: 25 },
    { name: "Инна М", addition: 25 },
    { name: "Семён Ануфриев", addition: 24 },
    { name: "Иван Баж", addition: 23 },
    { name: "Алина Исм", addition: 23 },
    { name: "Никита Зейн", addition: 22 },
    { name: "Jane 007", addition: 22 },
    { name: "Соня Серж", addition: 21 },
    { name: "Влад Владшток", addition: 21 },
    { name: "Николай Ж", addition: 20 },
    { name: "Свидетель", addition: 20 },
    { name: "Том", addition: 20 },
    { name: "Даша Хромова", addition: 19 },
    { name: "Настя К", addition: 19 },
    { name: "Максим Spy", addition: 19 }
];

// Данные дня 1
const day1Players = [
    { number: 1, name: "Михаил Наб", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 17830, result: 18830, comment: "" },
    { number: 2, name: "Сергей Ман", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 11310, result: 12310, comment: "" },
    { number: 3, name: "Полина Матыцына", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 9640, result: 9640, comment: "" },
    { number: 4, name: "Иван Антипов", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 7850, result: 8850, comment: "" },
    { number: 5, name: "Саша Коч", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 7290, result: 8290, comment: "" },
    { number: 6, name: "Михаил Козадой", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4965, result: 5965, comment: "" },
    { number: 7, name: "Надя Жб", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4940, result: 5940, comment: "" },
    { number: 8, name: "Богдан А", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4540, result: 5540, comment: "" },
    { number: 9, name: "Роман Лод", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4485, result: 5485, comment: "" },
    { number: 10, name: "Вова Баж", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4205, result: 5205, comment: "" },
    { number: 11, name: "Кристина А", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4060, result: 5060, comment: "" },
    { number: 12, name: "Макар Аве", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 3935, result: 4935, comment: "" },
    { number: 13, name: "Влад Сам", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 2835, result: 3835, comment: "" },
    { number: 14, name: "Артемий Мен", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 2540, result: 3540, comment: "" },
    { number: 15, name: "Egrinderolls", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1840, result: 2840, comment: "" },
    { number: 16, name: "Даниил Ершов", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1790, result: 2790, comment: "" },
    { number: 17, name: "Шурик Шилкин", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1585, result: 2585, comment: "" },
    { number: 18, name: "Инна М", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1225, result: 2225, comment: "" },
    { number: 19, name: "Семён Ануфриев", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 1735, result: 1735, comment: "" },
    { number: 20, name: "Иван Баж", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 0, result: 1000, comment: "" },
    { number: 21, name: "Алина Исм", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 0, result: 1000, comment: "" },
    { number: 22, name: "Никита Зейн", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 4000, result: 500, comment: "Кредит оплатил" },
    { number: 23, name: "Jane 007", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 250, result: 250, comment: "" },
    { number: 24, name: "Соня Серж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 25, name: "Влад Владшток", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 0, result: 0, comment: "Случайный прощенный" },
    { number: 26, name: "Николай Ж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 27, name: "Свидетель", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 28, name: "Том", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 0, result: 0, comment: "Первый прощённый" },
    { number: 29, name: "Даша Хромова", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 30, name: "Настя К", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 31, name: "Максим Spy", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 3500, result: 0, comment: "Кредит оплатил" }
];

// Данные для остальных дней (пока пустые)
const day2Players = [];
const day3Players = [];
const day4Players = [];

// Функция переключения вкладок
function showTab(tabName) {
    // Проверяем, что tabName валидный
    if (!tabName) {
        tabName = 'day1';
    }
    
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок в основном таббаре
    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    const tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.classList.add('active');
    }
    
    // Активируем соответствующую кнопку в основном таббаре
    if (tabName !== 'rating' && tabName !== 'previousResults' && tabName !== 'hunting') {
        const targetButton = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
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
    if (!phaseElement) return;
    
    switch(tabName) {
        case 'day1':
            phaseElement.textContent = 'День 1 - 29.01.2026';
            break;
        case 'day2':
            phaseElement.textContent = 'День 2 - 5.02.2026';
            break;
        case 'day3':
            phaseElement.textContent = 'День 3 - 12.02.2026';
            break;
        case 'day4':
            phaseElement.textContent = 'День 4 - 19.02.2026';
            break;
        case 'final':
            phaseElement.textContent = 'ФИНАЛ ТУРНИРА - 21.02.2026';
            break;
        case 'hunting':
            phaseElement.textContent = 'Охота за головами';
            break;
        case 'rating':
            phaseElement.textContent = 'Рейтинг';
            break;
        case 'previousResults':
            phaseElement.textContent = 'Результаты турнира Миссис Дейзи Дак Q-2';
            break;
        default:
            phaseElement.textContent = 'Турнир Дональда Дака К-2';
    }
}

// Функция развертывания таблицы на мобильных
function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    const tables = document.querySelectorAll(`#${activeTabId} .tournament-table`);
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
    } else if (activeTabId === 'day4') {
        players = day4Players;
    } else {
        return 0;
    }
    
    if (players.length === 0) return 0;
    const total = players.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / players.length);
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Получение класса для места в таблице результатов
function getPlaceClass(place) {
    if (place === 1) {
        return 'gold-place';
    } else if (place === 2) {
        return 'silver-place';
    } else if (place === 3) {
        return 'bronze-place';
    } else if (place >= 4 && place <= 23) {
        return 'green-place';
    } else {
        return '';
    }
}

// Получение эмодзи для места
function getPlaceEmoji(place) {
    if (place === 1) {
        return '🥇';
    } else if (place === 2) {
        return '🥈';
    } else if (place === 3) {
        return '🥉';
    } else {
        return '';
    }
}

// Заполнение таблицы результатов предыдущего турнира
function fillPreviousResultsTable() {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    previousTournamentResults.forEach((player, index) => {
        const row = document.createElement('tr');
        const placeClass = getPlaceClass(player.place);
        const placeEmoji = getPlaceEmoji(player.place);
        
        row.className = placeClass;
        
        let status = '';
        if (player.place === 1) {
            status = '🏆 Победитель турнира';
        } else if (player.place === 2) {
            status = '🥈 Второе место';
        } else if (player.place === 3) {
            status = '🥉 Третье место';
        } else if (player.place >= 4 && player.place <= 23) {
            status = '✅ Финалист';
        } else {
            status = '⭐ Участник турнира';
        }
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы охоты за головами
function fillHuntingTable() {
    const tableBody = document.getElementById('huntingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    huntingPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="bounty-value">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Расчет нового рейтинга с добавками
function calculateNewRating() {
    const newRating = [];
    
    // Создаем мап предыдущих рейтингов
    const previousRatingMap = new Map();
    previousRatingData.forEach(player => {
        previousRatingMap.set(player.name, player.rating);
    });
    
    // Создаем мап добавок рейтинга
    const ratingAdditionMap = new Map();
    newRatingAdditions.forEach(player => {
        ratingAdditionMap.set(player.name, player.addition);
    });
    
    // Собираем всех уникальных игроков
    const allPlayerNames = new Set([
        ...previousRatingData.map(p => p.name),
        ...newRatingAdditions.map(p => p.name)
    ]);
    
    allPlayerNames.forEach(playerName => {
        // Определяем предыдущий рейтинг (если есть)
        const previousRating = previousRatingMap.get(playerName) || 0;
        
        // Определяем добавку рейтинга (если есть)
        const addition = ratingAdditionMap.get(playerName) || 0;
        const newRatingValue = previousRating + addition;
        
        newRating.push({
            name: playerName,
            previousRating: previousRating,
            change: addition,
            newRating: newRatingValue,
            isNewPlayer: previousRating === 0 && addition > 0
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
                // Поднялся вверх
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'up'
                });
            } else if (change < 0) {
                // Опустился вниз
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'down'
                });
            } else {
                // Остался на том же месте
                positionChanges.set(player.name, {
                    change: 0,
                    type: 'same'
                });
            }
        }
    });
    
    return positionChanges;
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

// Заполнение таблицы Рейтинга
function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRating();
    const positionChanges = calculateRatingPositionChanges();
    
    // Сортируем по убыванию нового рейтинга
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        // Определяем класс для изменения
        let changeClass = "rating-neutral";
        if (player.change > 0) {
            changeClass = "rating-positive";
        } else if (player.change < 0) {
            changeClass = "rating-negative";
        }
        
        const changeSign = player.change > 0 ? "+" : "";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Подсветка первых 19 игроков и Никиты Yellow
        const isTop19 = index < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'rating-highlight';
        }
        
        // Добавляем корону для Никиты Yellow
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
}

// Получение всех игроков для финальной таблицы (ПРОСТАЯ ВЕРСИЯ - ТОЛЬКО ДНИ)
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: player.result,
                day2: 0,
                day3: 0,
                day4: 0,
                total: player.result
            });
        }
    });
    
    // Добавляем игроков из дня 2 (когда будут)
    day2Players.forEach(player => {
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result,
                day3: 0,
                day4: 0,
                total: player.result
            });
        } else {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day2 = player.result;
            existingPlayer.total = existingPlayer.day1 + player.result;
        }
    });
    
    // Добавляем игроков из дня 3 (когда будут)
    day3Players.forEach(player => {
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: player.result,
                day4: 0,
                total: player.result
            });
        } else {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day3 = player.result;
            existingPlayer.total = existingPlayer.day1 + existingPlayer.day2 + player.result;
        }
    });
    
    // Добавляем игроков из дня 4 (когда будут)
    day4Players.forEach(player => {
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: 0,
                day4: player.result,
                total: player.result
            });
        } else {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day4 = player.result;
            existingPlayer.total = existingPlayer.day1 + existingPlayer.day2 + existingPlayer.day3 + player.result;
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Заполнение финальной таблицы (ПРОСТАЯ ВЕРСИЯ - ТОЛЬКО ДНИ)
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const allPlayers = getAllFinalPlayers();
    
    if (allPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Финальная таблица появится после завершения дней турнира
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
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="result-column">${player.day4 !== 0 ? formatNumber(player.day4) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    
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
            <td>${formatNumber(player.credit)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Автодополнение для поиска
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    if (!searchInput || !autocompleteResults) return;
    
    // Собираем все имена игроков
    const allPlayers = [
        ...previousTournamentResults.map(p => ({ name: p.name })),
        ...huntingPlayers.map(p => ({ name: p.name })),
        ...day1Players.map(p => ({ name: p.name })),
        ...calculateNewRating(),
        ...previousRatingData.map(p => ({ name: p.name }))
    ];
    
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        
        const suggestions = playerNames.filter(name => 
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
}

// Функция для подсветки найденного текста
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
}

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    if (searchTerm === '') {
        if (activeTabId === 'day1') {
            fillDay1Table();
        } else if (activeTabId === 'previousResults') {
            fillPreviousResultsTable();
        } else if (activeTabId === 'hunting') {
            fillHuntingTable();
        } else if (activeTabId === 'rating') {
            fillRatingTable();
        } else if (activeTabId === 'final') {
            fillFinalTable();
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
    } else if (activeTabId === 'previousResults') {
        foundPlayers = previousTournamentResults.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillPreviousResultsTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'hunting') {
        foundPlayers = huntingPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillHuntingTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        foundPlayers = newRating.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillRatingTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        foundPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillFinalTableWithSearch(foundPlayers, searchTerm);
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

// Заполнение таблицы дня 1 с поиском
function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: #666;">
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
            <td>${formatNumber(player.credit)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение финальной таблицы с поиском
function fillFinalTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('finalTable');
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
    
    // Находим чиплидера
    const allPlayers = getAllFinalPlayers();
    const chipLeader = allPlayers.length > 0 ? allPlayers[0].name : null;
    
    foundPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const highlightedName = highlightText(player.name, searchTerm);
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="result-column">${player.day4 !== 0 ? formatNumber(player.day4) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы охоты с поиском
function fillHuntingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('huntingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="bounty-value">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы рейтинга с поиском
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
    
    filteredRating.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const changeClass = player.change > 0 ? "rating-positive" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        const originalIndex = sortedRating.findIndex(p => p.name === player.name);
        
        row.innerHTML = `
            <td class="number-column">${originalIndex + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы результатов предыдущего турнира с поиском
function fillPreviousResultsTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        const placeClass = getPlaceClass(player.place);
        const placeEmoji = getPlaceEmoji(player.place);
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.className = 'search-highlight ' + placeClass;
        
        let status = '';
        if (player.place === 1) {
            status = '🏆 Победитель турнира';
        } else if (player.place === 2) {
            status = '🥈 Второе место';
        } else if (player.place === 3) {
            status = '🥉 Третье место';
        } else if (player.place >= 4 && player.place <= 23) {
            status = '✅ Финалист';
        } else {
            status = '⭐ Участник турнира';
        }
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Обновление статистики
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
        if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
        if (averageStackElement) averageStackElement.textContent = averageStack;
    } else if (activeTabId === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
        averageStack = 0;
        if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
        if (averageStackElement) averageStackElement.textContent = averageStack;
    } else if (activeTabId === 'hunting') {
        totalPlayers = huntingPlayers.length;
        averageStack = 0;
        if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
        if (averageStackElement) averageStackElement.textContent = averageStack;
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        totalPlayers = newRating.length;
        averageStack = 0;
        if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
        if (averageStackElement) averageStackElement.textContent = averageStack;
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        totalPlayers = allPlayers.length;
        averageStack = allPlayers.length > 0 ? 
            Math.round(allPlayers.reduce((sum, player) => sum + player.total, 0) / allPlayers.length) : 0;
        if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
        if (averageStackElement) averageStackElement.textContent = averageStack;
    } else {
        totalPlayers = 0;
        averageStack = 0;
        if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
        if (averageStackElement) averageStackElement.textContent = averageStack;
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Заполняем все таблицы
    fillPreviousResultsTable();
    fillHuntingTable();
    fillRatingTable();
    fillDay1Table();
    fillFinalTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    
    // Показываем вкладку День 1 при загрузке
    showTab('day1');
    
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
    
    // Обновляем статистику
    updateStats();
});
