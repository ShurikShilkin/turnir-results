// ========== ДАННЫЕ ПРОШЛОГО ТУРНИРА (Дональд Дак К-2) ==========
const previousTournamentResults = [
    { name: "Влад Сам", place: 1, status: "Победитель турнира" },
    { name: "Шурик Шилкин", place: 2, status: "Второе место" },
    { name: "Максим Spy", place: 3, status: "Третье место" },
    { name: "Сергей Ман", place: 4, status: "Финалист" },
    { name: "Михаил Наб", place: 5, status: "Финалист" },
    { name: "Иван Антипов", place: 6, status: "Финалист" },
    { name: "Богдан А", place: 7, status: "Финалист" },
    { name: "Семён Ануфриев", place: 8, status: "Финалист" },
    { name: "Настя К", place: 9, status: "Финалист" },
    { name: "Никита Зейн", place: 10, status: "Финалист" },
    { name: "Макар Аве", place: 11, status: "Финалист" },
    { name: "Даниил Ершов", place: 12, status: "Финалист" },
    { name: "Полина Матыцына", place: 13, status: "Финалист" },
    { name: "Роман Лод", place: 14, status: "Финалист" },
    { name: "Николай Ж", place: 15, status: "Финалист" },
    { name: "Влад Владшток", place: 16, status: "Финалист" },
    { name: "Robert Юниксфактёр", place: 17, status: "Финалист" },
    { name: "Михаил Козадой", place: 18, status: "Финалист" },
    { name: "Jane 007", place: 19, status: "Финалист" },
    { name: "Egrinderolls", place: 20, status: "Финалист" },
    { name: "Саша Коч", place: 21, status: "Финалист" },
    { name: "Саша Токарев", place: 22, status: "Финалист" },
    { name: "Матвей МС", place: 23, status: "Финалист" },
    { name: "Серж", place: 24, status: "Финалист" },
    { name: "Надя Жб", place: 25, status: "Участник турнира" },
    { name: "Соня Серж", place: 26, status: "Участник турнира" },
    { name: "Вика Ц", place: 27, status: "Участник турнира" },
    { name: "Вова Баж", place: 28, status: "Участник турнира" },
    { name: "Кристина А", place: 29, status: "Участник турнира" },
    { name: "Саша Немощь", place: 30, status: "Участник турнира" },
    { name: "Рома АСМР", place: 31, status: "Участник турнира" },
    { name: "Юсиф Халафов", place: 32, status: "Участник турнира" },
    { name: "Саша Бел", place: 33, status: "Участник турнира" },
    { name: "Даша Гри", place: 34, status: "Участник турнира" },
    { name: "Артемий Мен", place: 35, status: "Участник турнира" },
    { name: "grooveman", place: 36, status: "Участник турнира" },
    { name: "Инна М", place: 37, status: "Участник турнира" },
    { name: "Женя К1", place: 38, status: "Участник турнира" },
    { name: "Ксения Куд", place: 39, status: "Участник турнира" },
    { name: "Даша Хромова", place: 40, status: "Участник турнира" },
    { name: "Алина Исм", place: 41, status: "Участник турнира" },
    { name: "Иван Баж", place: 42, status: "Участник турнира" },
    { name: "Владимир Бул", place: 43, status: "Участник турнира" },
    { name: "Зеньята", place: 44, status: "Участник турнира" },
    { name: "Леонид П", place: 45, status: "Участник турнира" },
    { name: "Иван Тре", place: 46, status: "Выбыл" },
    { name: "Том", place: 47, status: "Выбыл" },
    { name: "Жахонгир", place: 48, status: "Выбыл" },
    { name: "Эльджан", place: 49, status: "Выбыл" },
    { name: "Мага Кинжал", place: 50, status: "Выбыл" },
    { name: "Айдын", place: 51, status: "Выбыл" },
    { name: "Свидетель", place: 52, status: "Выбыл" }
];

// ========== ДАННЫЕ ДНЯ 1 (26.02.2026) ==========
const day1Players = [
    { number: 1, name: "Саша Немощь", entry: 1100, rebuy: 0, exit: 13000, result: 11900 },
    { number: 2, name: "Влад Владшток", entry: 1100, rebuy: 0, exit: 11630, result: 10530 },
    { number: 3, name: "Ирина Ага", entry: 1100, rebuy: 0, exit: 9600, result: 8500 },
    { number: 4, name: "Егор Вино", entry: 1100, rebuy: 3000, exit: 8420, result: 4320 },
    { number: 5, name: "Владибир", entry: 1100, rebuy: 0, exit: 4975, result: 3875 },
    { number: 6, name: "Анна К", entry: 1100, rebuy: 0, exit: 4685, result: 3585 },
    { number: 7, name: "Макар Аве", entry: 1100, rebuy: 4000, exit: 8600, result: 3500 },
    { number: 8, name: "Egrinderolls", entry: 1100, rebuy: 2000, exit: 6295, result: 3195 },
    { number: 9, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 3960, result: 2860 },
    { number: 10, name: "Полина Матыцына", entry: 1100, rebuy: 0, exit: 2705, result: 1605 },
    { number: 11, name: "Надя Жб", entry: 1100, rebuy: 2000, exit: 2405, result: -695 },
    { number: 12, name: "Катя Берг", entry: 1100, rebuy: 0, exit: 125, result: -975 },
    { number: 13, name: "Владимир Бул", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 14, name: "Robert Юниксфактёр", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 15, name: "Антон Жму", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 16, name: "Андрей Морфиус", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 17, name: "Серж", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 18, name: "Соня Серж", entry: 1100, rebuy: 3000, exit: 980, result: -3120 },
    { number: 19, name: "Ксения Куд", entry: 1100, rebuy: 4000, exit: 1845, result: -3255 },
    { number: 20, name: "Михаил Наб", entry: 1100, rebuy: 3000, exit: 0, result: -4100 },
    { number: 21, name: "Роман Лод", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 22, name: "Семён Ануфриев", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 23, name: "Jane 007", entry: 1100, rebuy: 5000, exit: 0, result: -6100 },
    { number: 24, name: "Богдан А", entry: 1100, rebuy: 6000, exit: 375, result: -6725 }
];

// ========== НОВЫЕ ДАННЫЕ: Охота за головами ==========
const bountyHunters = [
    { name: "Михаил Наб", bounty: 1000 },
    { name: "Семён Ануфриев", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "Robert Юниксфактёр", bounty: 1000 },
    { name: "Сергей Ман", bounty: 1000 },
    { name: "Максим Spy", bounty: 800 },
    { name: "Jane 007", bounty: 800 },
    { name: "Богдан А", bounty: 800 },
    { name: "Влад Владшток", bounty: 800 },
    { name: "Михаил Козадой", bounty: 800 },
    { name: "Egrinderolls", bounty: 600 },
    { name: "Полина Матыцына", bounty: 600 },
    { name: "grooveman", bounty: 600 },
    { name: "Роман Лод", bounty: 600 },
    { name: "Никита Зейн", bounty: 600 },
    { name: "Макар Аве", bounty: 400 },
    { name: "Настя К", bounty: 400 },
    { name: "Свидетель", bounty: 400 },
    { name: "Иван Антипов", bounty: 400 },
    { name: "Влад Сам", bounty: 400 }
];

// ========== ДАННЫЕ РЕЙТИНГА ДО СЕГОДНЯШНЕЙ ИГРЫ ==========
const ratingBeforeToday = [
    { name: "Михаил Наб", rating: 746, attendance: 9 },
    { name: "Семён Ануфриев", rating: 681, attendance: 13 },
    { name: "Шурик Шилкин", rating: 585, attendance: 13 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Robert Юниксфактёр", rating: 538, attendance: 9 },
    { name: "Максим Spy", rating: 529, attendance: 13 },
    { name: "Jane 007", rating: 514, attendance: 13 },
    { name: "Богдан А", rating: 508, attendance: 13 },
    { name: "Михаил Козадой", rating: 457, attendance: 11 },
    { name: "Влад Владшток", rating: 381, attendance: 12 },
    { name: "grooveman", rating: 379, attendance: 9 },
    { name: "Egrinderolls", rating: 372, attendance: 11 },
    { name: "Никита Зейн", rating: 351, attendance: 7 },
    { name: "Полина Матыцына", rating: 348, attendance: 8 },
    { name: "Роман Лод", rating: 342, attendance: 9 },
    { name: "Макар Аве", rating: 308, attendance: 8 },
    { name: "Настя К", rating: 307, attendance: 6 },
    { name: "Свидетель", rating: 305, attendance: 7 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Влад Сам", rating: 263, attendance: 3 },
    { name: "Кристина А", rating: 256, attendance: 6 },
    { name: "Саша Коч", rating: 250, attendance: 7 },
    { name: "Дмитрий Ник", rating: 230, attendance: 5 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Соня Серж", rating: 201, attendance: 7 },
    { name: "Серж", rating: 190, attendance: 4 },
    { name: "Том", rating: 168, attendance: 7 },
    { name: "Роман Егоров", rating: 157, attendance: 4 },
    { name: "Николай Ж", rating: 147, attendance: 4 },
    { name: "Леонид П", rating: 137, attendance: 3 },
    { name: "Даниил Ершов", rating: 105, attendance: 3 },
    { name: "Инна М", rating: 103, attendance: 5 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Ксения Куд", rating: 100, attendance: 4 },
    { name: "Надя Жб", rating: 99, attendance: 3 },
    { name: "Даша Yellow", rating: 98, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Искандер", rating: 87, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Федор К", rating: 72, attendance: 3 },
    { name: "Никита Yellow", rating: 71, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Иван Баж", rating: 64, attendance: 3 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Даша Хромова", rating: 63, attendance: 3 },
    { name: "Матвей МС", rating: 63, attendance: 2 },
    { name: "Вова Баж", rating: 60, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Саша Немощь", rating: 51, attendance: 2 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Саша Бел", rating: 48, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Зеньята", rating: 40, attendance: 2 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Евгений Ц", rating: 35, attendance: 2 },
    { name: "Рома АСМР", rating: 34, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Анна К", rating: 28, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 },
    { name: "Эльджан", rating: 24, attendance: 1 },
    { name: "Владимир Бул", rating: 23, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 },
    { name: "Всеволод Кузнецов", rating: 23, attendance: 1 },
    { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 },
    { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 },
    { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Славяна", rating: 22, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 },
    { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 },
    { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 },
    { name: "Ирина Ага", rating: 19, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// Добавки за первую игру
const ratingAdditions = [
    { name: "Egrinderolls", addition: 33 },
    { name: "Jane 007", addition: 0 },
    { name: "Robert Юниксфактёр", addition: 30 },
    { name: "Анна К", addition: 60 },
    { name: "Богдан А", addition: 0 },
    { name: "Влад Владшток", addition: 84 },
    { name: "Владимир Бул", addition: 31 },
    { name: "Ирина Ага", addition: 85 },
    { name: "Ксения Куд", addition: 18 },
    { name: "Макар Аве", addition: 29 },
    { name: "Михаил Наб", addition: 19 },
    { name: "Надя Жб", addition: 29 },
    { name: "Полина Матыцына", addition: 46 },
    { name: "Роман Лод", addition: 17 },
    { name: "Саша Немощь", addition: 147 },
    { name: "Семён Ануфриев", addition: 2 },
    { name: "Серж", addition: 23 },
    { name: "Соня Серж", addition: 20 },
    { name: "Шурик Шилкин", addition: 27 },
    { name: "Андрей Морфиус", addition: 24 },
    { name: "Антон Жму", addition: 29 },
    { name: "Владибир", addition: 66 },
    { name: "Егор Вино", addition: 42 },
    { name: "Катя Берг", addition: 42 }
];

// ========== ИТОГОВАЯ ТАБЛИЦА (с колонками по дням) ==========
let tournamentResults = [];

// Инициализация итоговой таблицы на основе первого дня
function initTournamentResults() {
    const resultsMap = new Map();
    
    day1Players.forEach(p => {
        resultsMap.set(p.name, {
            name: p.name,
            day1: p.result,
            day2: null,
            day3: null,
            day4: null,
            total: p.result
        });
    });
    
    tournamentResults = Array.from(resultsMap.values()).sort((a, b) => b.total - a.total);
}

initTournamentResults();

// ========== ОСНОВНЫЕ ФУНКЦИИ ==========

function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));

    const tabElement = document.getElementById(tabName);
    if (tabElement) tabElement.classList.add('active');

    const targetButton = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
    if (targetButton) targetButton.classList.add('active');

    updatePhaseHeader(tabName);
    resetTableExpand();
    document.getElementById('searchInput').value = '';
    searchPlayers();
    updateStats();
}

function updatePhaseHeader(tabName) {
    const phaseElement = document.getElementById('currentPhase');
    if (!phaseElement) return;

    const phases = {
        'day1': 'День 1 - 26.02.2026',
        'day2': 'День 2 - 5.03.2026',
        'day3': 'День 3 - 19.03.2026',
        'day4': 'День 4 - 26.03.2026',
        'bounty': 'Охота за головами',
        'tournamentResults': 'Итоги Межсезонья',
        'rating': 'Рейтинг',
        'previousResults': 'Турнир Дональда Дака К-2'
    };
    phaseElement.textContent = phases[tabName] || 'Межсезонье';
}

function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    const tables = document.querySelectorAll(`#${activeTab.id} .tournament-table`);
    const button = document.querySelector('.expand-button');
    if (!tables.length) return;
    tables.forEach(table => table.classList.toggle('expanded'));
    button.textContent = tables[0].classList.contains('expanded') ? 'Свернуть таблицу' : 'Развернуть таблицу';
    setTimeout(() => window.dispatchEvent(new Event('resize')), 10);
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    document.querySelector('.expand-button').textContent = 'Развернуть таблицу';
}

function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPlaceClass(place) {
    if (place === 1) return 'gold-place';
    if (place === 2) return 'silver-place';
    if (place === 3) return 'bronze-place';
    if (place >= 4 && place <= 24) return 'green-place';
    return '';
}

function getPlaceEmoji(place) {
    if (place === 1) return '🥇';
    if (place === 2) return '🥈';
    if (place === 3) return '🥉';
    return '';
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    day1Players.forEach(player => {
        const row = document.createElement('tr');
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="exit-time">${formatNumber(player.exit)}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение итоговой таблицы
function fillTournamentResultsTable() {
    const tableBody = document.getElementById('tournamentResultsTable');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    
    tournamentResults.forEach((player, index) => {
        const row = document.createElement('tr');
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="${player.day1 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day1 !== null ? formatNumber(player.day1) : '-'}</td>
            <td>${player.day2 !== null ? formatNumber(player.day2) : '-'}</td>
            <td>${player.day3 !== null ? formatNumber(player.day3) : '-'}</td>
            <td>${player.day4 !== null ? formatNumber(player.day4) : '-'}</td>
            <td class="${totalClass}">${formatNumber(player.total)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы результатов ПРОШЛОГО турнира
function fillPreviousResultsTable() {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    previousTournamentResults.forEach((player, index) => {
        const row = document.createElement('tr');
        const placeClass = getPlaceClass(player.place);
        const placeEmoji = getPlaceEmoji(player.place);
        row.className = placeClass;
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${player.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы "Охота за головами"
function fillBountyTable() {
    const tableBody = document.getElementById('bountyTable');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    bountyHunters.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ========== РЕЙТИНГ ==========
function calculateNewRating() {
    const newRating = [];
    const beforeMap = new Map(ratingBeforeToday.map(p => [p.name, { rating: p.rating, attendance: p.attendance }]));
    const additionMap = new Map(ratingAdditions.map(p => [p.name, p.addition]));

    // Сначала добавляем всех игроков из старого рейтинга
    ratingBeforeToday.forEach(player => {
        const addition = additionMap.get(player.name) || 0;
        newRating.push({
            name: player.name,
            previousRating: player.rating,
            attendance: player.attendance + (additionMap.has(player.name) ? 1 : 0),
            change: addition,
            newRating: player.rating + addition
        });
    });

    // Теперь добавляем новичков (которых нет в старом рейтинге, но есть в добавках)
    ratingAdditions.forEach(add => {
        if (!beforeMap.has(add.name)) {
            newRating.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition
            });
        }
    });
    
    return newRating;
}

function calculateRatingPositionChanges() {
    const newRating = calculateNewRating();
    
    // Старый порядок (до игры) на основе ratingBeforeToday
    const oldRatingList = ratingBeforeToday.map(p => ({ name: p.name, rating: p.rating }));
    
    // Сортируем старый рейтинг
    const sortedOldRating = [...oldRatingList].sort((a, b) => b.rating - a.rating);
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);

    const positionChanges = new Map();
    
    // Создаем Set с именами новичков (кого не было в старом рейтинге)
    const oldNames = new Set(ratingBeforeToday.map(p => p.name));

    sortedNewRating.forEach((player, newIndex) => {
        // Если игрока не было в старом рейтинге - это NEW
        if (!oldNames.has(player.name)) {
            positionChanges.set(player.name, { change: 0, type: 'new' });
        } else {
            // Ищем позицию в старом рейтинге
            const oldIndex = sortedOldRating.findIndex(p => p.name === player.name);
            if (oldIndex !== -1) {
                const change = oldIndex - newIndex;
                if (change > 0) {
                    positionChanges.set(player.name, { change: Math.abs(change), type: 'up' });
                } else if (change < 0) {
                    positionChanges.set(player.name, { change: Math.abs(change), type: 'down' });
                } else {
                    positionChanges.set(player.name, { change: 0, type: 'same' });
                }
            }
        }
    });
    
    return positionChanges;
}

function createPositionChangeHTML(changeData) {
    if (!changeData) return '';
    const { change, type } = changeData;
    if (type === 'new') return `<div class="position-change position-new">NEW</div>`;
    let arrow = type === 'up' ? '▲' : (type === 'down' ? '▼' : '→');
    return `<div class="position-change position-${type}"><span class="change-arrow">${arrow}</span>${change}</div>`;
}

function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    tableBody.innerHTML = '';

    const newRating = calculateNewRating();
    const positionChanges = calculateRatingPositionChanges();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);

    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        // Определяем, играл ли игрок в этом туре (есть ли он в ratingAdditions)
        const playedThisTour = ratingAdditions.some(a => a.name === player.name);
        
        // Формируем знак для столбца +/-
        let changeSign = "";
        if (player.change > 0) {
            changeSign = "+";
        } else if (player.change === 0 && playedThisTour) {
            changeSign = "+"; // Только для тех, кто играл и получил 0
        }
        
        const changeClass = player.change > 0 ? "rating-positive" : (player.change < 0 ? "rating-negative" : "rating-neutral");
        const changeHTML = createPositionChangeHTML(positionChanges.get(player.name));

        const isTop19 = index < 19;
        if (isTop19 || player.name === "Никита Yellow") row.className = 'rating-highlight';
        const nameClass = player.name === "Никита Yellow" ? 'player-name rating-crown' : 'player-name';

        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="${nameClass}">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="attendance-value">${player.attendance}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ========== ПОИСК ==========
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;

    if (searchTerm === '') {
        if (activeTab.id === 'day1') fillDay1Table();
        else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        else if (activeTab.id === 'bounty') fillBountyTable();
        else if (activeTab.id === 'rating') fillRatingTable();
        else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }

    let foundCount = 0;
    if (activeTab.id === 'day1') {
        foundCount = day1Players.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'previousResults') {
        foundCount = previousTournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'bounty') {
        foundCount = bountyHunters.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'rating') {
        const newRating = calculateNewRating();
        foundCount = newRating.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'tournamentResults') {
        foundCount = tournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    }

    document.getElementById('resultsCount').textContent = foundCount;
    document.getElementById('searchResults').style.display = 'block';
}

function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    if (!searchInput || !autocompleteResults) return;

    const allPlayers = [
        ...previousTournamentResults.map(p => ({ name: p.name })),
        ...calculateNewRating().map(p => ({ name: p.name })),
        ...bountyHunters.map(p => ({ name: p.name })),
        ...day1Players.map(p => ({ name: p.name }))
    ];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];

    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        const suggestions = playerNames.filter(name => name.toLowerCase().includes(value)).slice(0, 8);
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                const regex = new RegExp(`(${value})`, 'gi');
                item.innerHTML = suggestion.replace(regex, '<span class="autocomplete-highlight">$1</span>');
                item.addEventListener('click', () => {
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

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !autocompleteResults.contains(e.target)) {
            autocompleteResults.style.display = 'none';
        }
    });
}

function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;

    let totalPlayers = 0;
    let averageStack = 0;

    if (activeTab.id === 'day1') {
        totalPlayers = day1Players.length;
        const total = day1Players.reduce((sum, p) => sum + p.result, 0);
        averageStack = Math.round(total / totalPlayers);
    } else if (activeTab.id === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
    } else if (activeTab.id === 'bounty') {
        totalPlayers = bountyHunters.length;
    } else if (activeTab.id === 'rating') {
        totalPlayers = calculateNewRating().length;
    } else if (activeTab.id === 'tournamentResults') {
        totalPlayers = tournamentResults.length;
        const total = tournamentResults.reduce((sum, p) => sum + p.total, 0);
        averageStack = tournamentResults.length > 0 ? Math.round(total / tournamentResults.length) : 0;
    }

    if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
    if (averageStackElement) averageStackElement.textContent = averageStack;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    fillDay1Table();
    fillPreviousResultsTable();
    fillBountyTable();
    fillTournamentResultsTable();
    fillRatingTable();
    setupAutocomplete();

    showTab('day1');

    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');

    if (searchInput) searchInput.addEventListener('input', searchPlayers);
    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            document.getElementById('searchInput').value = '';
            document.getElementById('autocompleteResults').style.display = 'none';
            searchPlayers();
        });
    }

    updateStats();
});
