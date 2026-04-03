// ========== ДАННЫЕ ПРОШЛОГО ТУРНИРА (Туз весны 2026) ==========
const previousTournamentResults = [
    { name: "grooveman", place: 1, status: "Победитель" },
    { name: "Богдан А", place: 2, status: "Участник" },
    { name: "Саша Тяжелов", place: 3, status: "Участник" },
    { name: "Даша Yellow", place: 4, status: "Участник" },
    { name: "Семён Ануфриев", place: 5, status: "Участник" },
    { name: "Леонид П", place: 6, status: "Участник" },
    { name: "Егор Вино", place: 7, status: "Участник" },
    { name: "Лера Еж", place: 8, status: "Участник" },
    { name: "Лиза Арц", place: 9, status: "Участник" },
    { name: "Jane 007", place: 10, status: "Участник" },
    { name: "Егор АА 11", place: 11, status: "Участник" },
    { name: "Robert Юниксфактёр", place: 12, status: "Участник" },
    { name: "Ксюша Лис", place: 13, status: "Участник" },
    { name: "Никита Зейн", place: 14, status: "Участник" },
    { name: "Влад Владшток", place: 15, status: "Участник" },
    { name: "Саша Бел", place: 16, status: "Участник" },
    { name: "Максим Б", place: 17, status: "Участник" },
    { name: "Соня Серж", place: 18, status: "Участник" },
    { name: "Полина Матыцына", place: 19, status: "Участник" },
    { name: "Влад Сам", place: 20, status: "Участник" },
    { name: "Саша Коч", place: 21, status: "Участник" },
    { name: "Шурик Шилкин", place: 22, status: "Участник" },
    { name: "Роман Лод", place: 23, status: "Участник" },
    { name: "Никита Yellow", place: 24, status: "Участник" },
    { name: "Андрей Фломастер", place: 25, status: "Участник" },
    { name: "Макар Аве", place: 26, status: "Участник" }
];

// ========== ДАННЫЕ ДНЯ 1 ==========
const day1Players = [
    { number: 1, name: "Андрей Мазепа", participation: 3100, start: 2100, rebuy: 1000, price: 3435, exit: 26950, result: 26950 },
    { number: 2, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, price: 3200, exit: 10785, result: 11785 },
    { number: 3, name: "Том", participation: 3100, start: 2100, rebuy: 1000, price: 1650, exit: 11070, result: 11070 },
    { number: 4, name: "Семён Ануфриев", participation: 3100, start: 2100, rebuy: 0, price: 2700, exit: 9295, result: 10295 },
    { number: 5, name: "grooveman", participation: 3100, start: 2100, rebuy: 0, price: 1950, exit: 6885, result: 7885 },
    { number: 6, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 0, price: 1950, exit: 6535, result: 7535 },
    { number: 7, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 4020, result: 5020 },
    { number: 8, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 3275, result: 4275 },
    { number: 9, name: "Вадим Зеленин", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 3010, result: 4010 },
    { number: 10, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, price: 1600, exit: 2975, result: 3975 },
    { number: 11, name: "Алексей Ершов", participation: 3100, start: 2100, rebuy: 0, price: 900, exit: 2120, result: 3120 },
    { number: 12, name: "Инна М", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 2030, result: 3030 },
    { number: 13, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 1000, price: 600, exit: 1700, result: 1700 },
    { number: 14, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 0, price: 500, exit: 200, result: 1200 },
    { number: 15, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 25, result: 1025 },
    { number: 16, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 0, result: 1000 },
    { number: 17, name: "Богдан А", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 200, result: 200 },
    { number: 18, name: "Владимир Бул", participation: 3100, start: 2100, rebuy: 1000, price: 335, exit: 0, result: 0 },
    { number: 19, name: "Влад Владшток", participation: 3100, start: 2100, rebuy: 1000, price: 350, exit: 0, result: 0 },
    { number: 20, name: "Стас Мазепа", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 21, name: "Дмитрий Ник", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 22, name: "Инна Шашкина", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 23, name: "Соня Серж", participation: 3100, start: 2100, rebuy: 1000, price: 250, exit: 0, result: 0 },
    { number: 24, name: "Егор АА 11", participation: 3100, start: 2100, rebuy: 1000, price: 350, exit: 0, result: 0 }
];

// ========== ДАННЫЕ ОХОТНИЧЬИХ НОМИНАЦИЙ ==========
const huntingNominations = [
    { number: 1, name: "Андрей Мазепа", reward1: 1400, reward2: 800, reward3: 1000, reward4: 400, reward5: 1200, reward6: 1300, reward7: 675, sum: 6775, count: 7, average: 970 },
    { number: 2, name: "Саша Коч", reward1: 1600, reward2: 2400, reward3: 0, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 4000, count: 2, average: 2000 },
    { number: 3, name: "Том", reward1: 1000, reward2: 1500, reward3: 0, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 2500, count: 2, average: 1250 },
    { number: 4, name: "Семён Ануфриев", reward1: 800, reward2: 1400, reward3: 0, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 2200, count: 2, average: 1100 },
    { number: 5, name: "Михаил Наб", reward1: 800, reward2: 400, reward3: 400, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 1600, count: 3, average: 535 },
    { number: 6, name: "Полина Матыцына", reward1: 800, reward2: 500, reward3: 200, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 1500, count: 3, average: 500 },
    { number: 7, name: "Владимир Бул", reward1: 700, reward2: 400, reward3: 0, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 1100, count: 2, average: 550 },
    { number: 8, name: "grooveman", reward1: 700, reward2: 0, reward3: 0, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 700, count: 1, average: 700 },
    { number: 9, name: "Алексей Ершов", reward1: 200, reward2: 0, reward3: 0, reward4: 0, reward5: 0, reward6: 0, reward7: 0, sum: 200, count: 1, average: 200 }
];

// ========== ИТОГОВАЯ ТАБЛИЦА ==========
let tournamentResults = [];

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

// ========== ДАННЫЕ РЕЙТИНГА ==========
const ratingBeforeToday = [
    { name: "Богдан А", rating: 822, attendance: 18 },
    { name: "Семён Ануфриев", rating: 806, attendance: 18 },
    { name: "Михаил Наб", rating: 765, attendance: 10 },
    { name: "grooveman", rating: 705, attendance: 11 },
    { name: "Шурик Шилкин", rating: 683, attendance: 18 },
    { name: "Robert Юниксфактёр", rating: 644, attendance: 12 },
    { name: "Влад Владшток", rating: 577, attendance: 17 },
    { name: "Jane 007", rating: 567, attendance: 17 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Егор АА 11", rating: 541, attendance: 16 },
    { name: "Максим Spy", rating: 538, attendance: 15 },
    { name: "Полина Матыцына", rating: 504, attendance: 13 },
    { name: "Макар Аве", rating: 482, attendance: 12 },
    { name: "Саша Коч", rating: 460, attendance: 10 },
    { name: "Михаил Козадой", rating: 457, attendance: 11 },
    { name: "Роман Лод", rating: 451, attendance: 14 },
    { name: "Никита Зейн", rating: 447, attendance: 10 },
    { name: "Соня Серж", rating: 372, attendance: 12 },
    { name: "Настя К", rating: 367, attendance: 8 },
    { name: "Влад Сам", rating: 342, attendance: 5 },
    { name: "Немощь", rating: 338, attendance: 6 },
    { name: "Надя Жб", rating: 326, attendance: 7 },
    { name: "Свидетель", rating: 305, attendance: 7 },
    { name: "Кристина А", rating: 297, attendance: 7 },
    { name: "Ирина Ага", rating: 288, attendance: 4 },
    { name: "Дмитрий Ник", rating: 270, attendance: 6 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Матвей МС", rating: 250, attendance: 5 },
    { name: "Леонид П", rating: 225, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Серж", rating: 213, attendance: 5 },
    { name: "Том", rating: 211, attendance: 9 },
    { name: "Егор Вино", rating: 207, attendance: 5 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Даша Хромова", rating: 192, attendance: 6 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Инна М", rating: 154, attendance: 7 },
    { name: "Федор К", rating: 149, attendance: 4 },
    { name: "Николай Ж", rating: 147, attendance: 4 },
    { name: "Саша Тяжелов", rating: 125, attendance: 1 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Никита Yellow", rating: 115, attendance: 2 },
    { name: "Саша Бел", rating: 115, attendance: 3 },
    { name: "Лиза Арц", rating: 114, attendance: 2 },
    { name: "Анна К", rating: 108, attendance: 3 },
    { name: "Евгений Ц", rating: 107, attendance: 3 },
    { name: "Даниил Ершов", rating: 105, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Андрей Морфиус", rating: 98, attendance: 3 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Искандер", rating: 87, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Андрей Фломастер", rating: 85, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван 112", rating: 78, attendance: 2 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Владимир Бул", rating: 75, attendance: 3 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Иван Баж", rating: 64, attendance: 3 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Вова Баж", rating: 60, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Ксюша Лис", rating: 60, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Максим Б", rating: 52, attendance: 1 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Андрей Пот", rating: 48, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Инна Шашкина", rating: 42, attendance: 2 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Вадим Зеленин", rating: 30, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 },
    { name: "Всеволод Кузнецов", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 },
    { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 },
    { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 },
    { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Ольга Б", rating: 22, attendance: 1 },
    { name: "Славяна", rating: 22, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 },
    { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 },
    { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// Добавки за первый день
const ratingAdditions = [
    { name: "grooveman", addition: 41 },
    { name: "Богдан А", addition: 0 },
    { name: "Вадим Зеленин", addition: 31 },
    { name: "Влад Владшток", addition: 0 },
    { name: "Владимир Бул", addition: 22 },
    { name: "Дмитрий Ник", addition: 20 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Инна М", addition: 26 },
    { name: "Инна Шашкина", addition: 20 },
    { name: "Макар Аве", addition: 0 },
    { name: "Максим Spy", addition: 8 },
    { name: "Михаил Козадой", addition: 24 },
    { name: "Михаил Наб", addition: 23 },
    { name: "Надя Жб", addition: 35 },
    { name: "Никита Зейн", addition: 24 },
    { name: "Полина Матыцына", addition: 14 },
    { name: "Саша Коч", addition: 65 },
    { name: "Семён Ануфриев", addition: 26 },
    { name: "Соня Серж", addition: 0 },
    { name: "Том", addition: 53 },
    { name: "Шурик Шилкин", addition: 0 },
    { name: "Алексей Ершов", addition: 28 },
    { name: "Андрей Мазепа", addition: 92 },
    { name: "Стас Мазепа", addition: 20 }
];

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
        'day1': 'День 1 - 2.04.2026',
        'day2': 'День 2 - 9.04.2026',
        'day3': 'День 3 - 16.04.2026',
        'day4': 'День 4 - 23.04.2026',
        'tournamentResults': 'Итоги Сезона Охоты А-2',
        'huntingNominations': 'Охотничьи номинации',
        'rating': 'Рейтинг',
        'previousResults': 'Результаты Туза весны 2026'
    };
    phaseElement.textContent = phases[tabName] || 'Сезон Охоты А-2';
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
    return 'green-place';
}

function getPlaceEmoji(place) {
    if (place === 1) return '🥇';
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
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.price)}</td>
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
            <td class="${player.day2 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day2 !== null ? formatNumber(player.day2) : '-'}</td>
            <td class="${player.day3 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day3 !== null ? formatNumber(player.day3) : '-'}</td>
            <td class="${player.day4 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day4 !== null ? formatNumber(player.day4) : '-'}</td>
            <td class="${totalClass}">${formatNumber(player.total)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы охотничьих номинаций
function fillHuntingNominationsTable() {
    const tableBody = document.getElementById('huntingNominationsTable');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    huntingNominations.forEach(nomination => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="number-column">${nomination.number}</td>
            <td class="player-name">${nomination.name}</td>
            <td class="chips-positive">${formatNumber(nomination.reward1)}</td>
            <td class="chips-positive">${nomination.reward2 > 0 ? formatNumber(nomination.reward2) : '-'}</td>
            <td class="chips-positive">${nomination.reward3 > 0 ? formatNumber(nomination.reward3) : '-'}</td>
            <td class="chips-positive">${nomination.reward4 > 0 ? formatNumber(nomination.reward4) : '-'}</td>
            <td class="chips-positive">${nomination.reward5 > 0 ? formatNumber(nomination.reward5) : '-'}</td>
            <td class="chips-positive">${nomination.reward6 > 0 ? formatNumber(nomination.reward6) : '-'}</td>
            <td class="chips-positive">${nomination.reward7 > 0 ? formatNumber(nomination.reward7) : '-'}</td>
            <td class="rating-positive">${formatNumber(nomination.sum)}</td>
            <td class="attendance-value">${nomination.count}</td>
            <td class="rating-number">${formatNumber(nomination.average)}</td>
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
        let placeClass = '';
        let placeEmoji = '';
        
        if (player.place === 1) {
            placeClass = 'gold-place';
            placeEmoji = '🥇';
        } else {
            placeClass = 'green-place';
            placeEmoji = '';
        }
        
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

// ========== РЕЙТИНГ ==========
function calculateNewRating() {
    const newRating = [];
    const beforeMap = new Map(ratingBeforeToday.map(p => [p.name, { rating: p.rating, attendance: p.attendance }]));
    const additionMap = new Map(ratingAdditions.map(p => [p.name, p.addition]));

    ratingBeforeToday.forEach(player => {
        const addition = additionMap.get(player.name) || 0;
        const newAttendance = player.attendance + (additionMap.has(player.name) ? 1 : 0);
        newRating.push({
            name: player.name,
            previousRating: player.rating,
            attendance: newAttendance,
            change: addition,
            newRating: player.rating + addition
        });
    });

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
    const oldRatingList = ratingBeforeToday.map(p => ({ name: p.name, rating: p.rating }));
    const sortedOldRating = [...oldRatingList].sort((a, b) => b.rating - a.rating);
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const positionChanges = new Map();
    const oldNames = new Set(ratingBeforeToday.map(p => p.name));

    sortedNewRating.forEach((player, newIndex) => {
        if (!oldNames.has(player.name)) {
            positionChanges.set(player.name, { change: 0, type: 'new' });
        } else {
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
        const playedThisTour = ratingAdditions.some(a => a.name === player.name);
        
        let changeSign = "";
        if (player.change > 0) {
            changeSign = "+";
        } else if (player.change === 0 && playedThisTour) {
            changeSign = "+0";
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
        else if (activeTab.id === 'rating') fillRatingTable();
        else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        else if (activeTab.id === 'huntingNominations') fillHuntingNominationsTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }

    let foundCount = 0;
    if (activeTab.id === 'day1') {
        foundCount = day1Players.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'previousResults') {
        foundCount = previousTournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'rating') {
        const newRating = calculateNewRating();
        foundCount = newRating.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'tournamentResults') {
        foundCount = tournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'huntingNominations') {
        foundCount = huntingNominations.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
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
        ...day1Players.map(p => ({ name: p.name })),
        ...huntingNominations.map(p => ({ name: p.name }))
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
    } else if (activeTab.id === 'rating') {
        totalPlayers = calculateNewRating().length;
    } else if (activeTab.id === 'tournamentResults') {
        totalPlayers = tournamentResults.length;
        const total = tournamentResults.reduce((sum, p) => sum + (p.total || 0), 0);
        averageStack = tournamentResults.length > 0 ? Math.round(total / tournamentResults.length) : 0;
    } else if (activeTab.id === 'huntingNominations') {
        totalPlayers = huntingNominations.length;
    } else {
        totalPlayers = 0;
        averageStack = 0;
    }

    if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
    if (averageStackElement) averageStackElement.textContent = averageStack;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    fillDay1Table();
    fillPreviousResultsTable();
    fillTournamentResultsTable();
    fillHuntingNominationsTable();
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
