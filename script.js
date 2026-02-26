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

// ========== НОВЫЕ ДАННЫЕ: Охота за головами ==========
const bountyHunters = [
    { name: "Михаил Наб", bounty: 1000 },
    { name: "Семён Ануфриев", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "Сергей Ман", bounty: 1000 },
    { name: "Robert Юниксфактёр", bounty: 1000 },
    { name: "Максим Spy", bounty: 800 },
    { name: "Jane 007", bounty: 800 },
    { name: "Богдан А", bounty: 800 },
    { name: "Михаил Козадой", bounty: 800 },
    { name: "Влад Владшток", bounty: 800 },
    { name: "grooveman", bounty: 600 },
    { name: "Egrinderolls", bounty: 600 },
    { name: "Никита Зейн", bounty: 600 },
    { name: "Полина Матыцына", bounty: 600 },
    { name: "Роман Лод", bounty: 600 },
    { name: "Макар Аве", bounty: 400 },
    { name: "Настя К", bounty: 400 },
    { name: "Свидетель", bounty: 400 },
    { name: "Иван Антипов", bounty: 400 },
    { name: "Влад Сам", bounty: 400 }
];

// ========== ДАННЫЕ РЕЙТИНГА ==========
const ratingAdditionsFinal = [
    { name: "Egrinderolls", addition: 46 }, { name: "Jane 007", addition: 32 }, { name: "Robert Юниксфактёр", addition: 50 },
    { name: "Богдан А", addition: 65 }, { name: "Влад Владшток", addition: 52 }, { name: "Влад Сам", addition: 208 },
    { name: "Даниил Ершов", addition: 60 }, { name: "Иван Антипов", addition: 85 }, { name: "Макар Аве", addition: 63 },
    { name: "Максим Spy", addition: 101 }, { name: "Матвей МС", addition: 43 }, { name: "Михаил Козадой", addition: 49 },
    { name: "Михаил Наб", addition: 93 }, { name: "Настя К", addition: 69 }, { name: "Никита Зейн", addition: 66 },
    { name: "Николай Ж", addition: 54 }, { name: "Полина Матыцына", addition: 58 }, { name: "Роман Лод", addition: 56 },
    { name: "Саша Коч", addition: 45 }, { name: "Семён Ануфриев", addition: 60 }, { name: "Сергей Ман", addition: 104 },
    { name: "Серж", addition: 42 }, { name: "Шурик Шилкин", addition: 126 }, { name: "Саша Токарев", addition: 44 }
];

const previousRating = [
    { name: "Михаил Наб", rating: 653 }, { name: "Семён Ануфриев", rating: 621 }, { name: "Robert Юниксфактёр", rating: 488 },
    { name: "Шурик Шилкин", rating: 459 }, { name: "Jane 007", rating: 482 }, { name: "Максим Spy", rating: 428 },
    { name: "Богдан А", rating: 443 }, { name: "Михаил Козадой", rating: 408 }, { name: "Сергей Ман", rating: 452 },
    { name: "grooveman", rating: 379 }, { name: "Свидетель", rating: 305 }, { name: "Egrinderolls", rating: 326 },
    { name: "Влад Владшток", rating: 329 }, { name: "Никита Зейн", rating: 285 }, { name: "Полина Матыцына", rating: 290 },
    { name: "Роман Лод", rating: 286 }, { name: "Кристина А", rating: 256 }, { name: "Дмитрий Ник", rating: 230 },
    { name: "Настя К", rating: 238 }, { name: "Лев Р", rating: 219 }, { name: "Макар Аве", rating: 245 },
    { name: "Саша Коч", rating: 205 }, { name: "Иван Антипов", rating: 182 }, { name: "Соня Серж", rating: 201 },
    { name: "Роман Егоров", rating: 157 }, { name: "Том", rating: 168 }, { name: "Серж", rating: 148 },
    { name: "Леонид П", rating: 137 }, { name: "Инна М", rating: 103 }, { name: "Даня Д", rating: 101 },
    { name: "Даша Yellow", rating: 98 }, { name: "Наташа Бонд", rating: 93 }, { name: "Николай Ж", rating: 93 },
    { name: "Искандер", rating: 87 }, { name: "Оксана Б", rating: 87 }, { name: "Михаил Т", rating: 79 },
    { name: "Ксения Куд", rating: 100 }, { name: "Федор К", rating: 72 }, { name: "Никита Yellow", rating: 71 },
    { name: "Миша Скиф", rating: 70 }, { name: "Разаман Рах", rating: 70 }, { name: "Надя Жб", rating: 99 },
    { name: "Иван Баж", rating: 64 }, { name: "Артемий Мен", rating: 63 }, { name: "Даша Хромова", rating: 63 },
    { name: "Вова Баж", rating: 60 }, { name: "Макс Пиво", rating: 57 }, { name: "Петя Федоров", rating: 50 },
    { name: "Соня Кур", rating: 46 }, { name: "Алина Исм", rating: 45 }, { name: "Даша Гри", rating: 40 },
    { name: "Артём 007", rating: 40 }, { name: "Вика Ц", rating: 35 }, { name: "Евгений Ц", rating: 35 },
    { name: "Рома АСМР", rating: 34 }, { name: "Юсиф Халафов", rating: 32 }, { name: "Аня Гам", rating: 31 },
    { name: "Никита Сизов", rating: 31 }, { name: "Гавриил Морозов", rating: 30 }, { name: "Родион Шашурин", rating: 30 },
    { name: "Влад Сам", rating: 55 }, { name: "Дима Жур", rating: 29 }, { name: "Анна К", rating: 28 },
    { name: "Даниил Ершов", rating: 45 }, { name: "Родион К", rating: 26 }, { name: "Эльджан", rating: 24 },
    { name: "Вика Ч", rating: 23 }, { name: "Владимир Бул", rating: 23 }, { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 }, { name: "Мага Кинжал", rating: 23 }, { name: "Эмиль", rating: 23 },
    { name: "Саша Немощь", rating: 51 }, { name: "Дарья Шев", rating: 22 }, { name: "Славяна", rating: 22 },
    { name: "Жахонгир", rating: 21 }, { name: "Руфат Макиато", rating: 21 }, { name: "Айдын", rating: 20 },
    { name: "Влад Голубев", rating: 20 }, { name: "Матвей МС", rating: 20 }, { name: "Михаил Таб", rating: 20 },
    { name: "Зеньята", rating: 40 }, { name: "Ирина Ага", rating: 19 }, { name: "Александр Исаев", rating: 17 },
    { name: "Даня КДД", rating: 15 }, { name: "Вова Гриненко", rating: 14 }, { name: "Саша Токарев", rating: 0 },
    { name: "Женя К1", rating:22 }, { name: "Саша Бел", rating:48 }, { name: "Иван Тре", rating:25 }
];

let ratingAttendance = [
    { name: "Михаил Наб", attendance: 8 }, { name: "Семён Ануфриев", attendance: 12 }, { name: "Robert Юниксфактёр", attendance: 8 },
    { name: "Jane 007", attendance: 12 }, { name: "Шурик Шилкин", attendance: 12 }, { name: "Сергей Ман", attendance: 9 },
    { name: "Богдан А", attendance: 12 }, { name: "Максим Spy", attendance: 12 }, { name: "Михаил Козадой", attendance: 10 },
    { name: "grooveman", attendance: 9 }, { name: "Влад Владшток", attendance: 11 }, { name: "Egrinderolls", attendance: 10 },
    { name: "Свидетель", attendance: 7 }, { name: "Полина Матыцына", attendance: 7 }, { name: "Роман Лод", attendance: 8 },
    { name: "Никита Зейн", attendance: 6 }, { name: "Кристина А", attendance: 6 }, { name: "Макар Аве", attendance: 7 },
    { name: "Настя К", attendance: 5 }, { name: "Дмитрий Ник", attendance: 5 }, { name: "Лев Р", attendance: 4 },
    { name: "Саша Коч", attendance: 6 }, { name: "Соня Серж", attendance: 7 }, { name: "Иван Антипов", attendance: 4 },
    { name: "Том", attendance: 7 }, { name: "Роман Егоров", attendance: 4 }, { name: "Серж", attendance: 3 },
    { name: "Леонид П", attendance: 3 }, { name: "Инна М", attendance: 5 }, { name: "Даня Д", attendance: 3 },
    { name: "Ксения Куд", attendance: 4 }, { name: "Надя Жб", attendance: 3 }, { name: "Даша Yellow", attendance: 2 },
    { name: "Наташа Бонд", attendance: 3 }, { name: "Николай Ж", attendance: 3 }, { name: "Искандер", attendance: 3 },
    { name: "Оксана Б", attendance: 2 }, { name: "Михаил Т", attendance: 2 }, { name: "Федор К", attendance: 3 },
    { name: "Никита Yellow", attendance: 1 }, { name: "Миша Скиф", attendance: 2 }, { name: "Разаман Рах", attendance: 1 },
    { name: "Иван Баж", attendance: 3 }, { name: "Артемий Мен", attendance: 2 }, { name: "Даша Хромова", attendance: 3 },
    { name: "Даша Гри", attendance: 3 }, { name: "Вова Баж", attendance: 2 }, { name: "Макс Пиво", attendance: 1 },
    { name: "Влад Сам", attendance: 2 }, { name: "Саша Немощь", attendance: 2 }, { name: "Петя Федоров", attendance: 1 },
    { name: "Саша Бел", attendance: 1 }, { name: "Соня Кур", attendance: 2 }, { name: "Даниил Ершов", attendance: 2 },
    { name: "Алина Исм", attendance: 2 }, { name: "Зеньята", attendance: 2 }, { name: "Артём 007", attendance: 1 },
    { name: "Вика Ц", attendance: 1 }, { name: "Евгений Ц", attendance: 2 }, { name: "Рома АСМР", attendance: 1 },
    { name: "Юсиф Халафов", attendance: 1 }, { name: "Аня Гам", attendance: 1 }, { name: "Никита Сизов", attendance: 1 },
    { name: "Гавриил Морозов", attendance: 1 }, { name: "Родион Шашурин", attendance: 1 }, { name: "Дима Жур", attendance: 1 },
    { name: "Анна К", attendance: 1 }, { name: "Родион К", attendance: 1 }, { name: "Иван Тре", attendance: 1 },
    { name: "Эльджан", attendance: 1 }, { name: "Вика Ч", attendance: 1 }, { name: "Владимир Бул", attendance: 1 },
    { name: "Всеволод Кузнецов", attendance: 1 }, { name: "Илья Без", attendance: 1 }, { name: "Мага Кинжал", attendance: 1 },
    { name: "Эмиль", attendance: 1 }, { name: "Дарья Шев", attendance: 1 }, { name: "Славяна", attendance: 1 },
    { name: "Женя К1", attendance: 1 }, { name: "Жахонгир", attendance: 1 }, { name: "Руфат Макиато", attendance: 1 },
    { name: "Айдын", attendance: 1 }, { name: "Влад Голубев", attendance: 1 }, { name: "Матвей МС", attendance: 1 },
    { name: "Михаил Таб", attendance: 1 }, { name: "Ирина Ага", attendance: 1 }, { name: "Александр Исаев", attendance: 1 },
    { name: "Даня КДД", attendance: 1 }, { name: "Вова Гриненко", attendance: 1 }, { name: "Саша Токарев", attendance: 0 }
];

// Обновление посещений на основе добавок рейтинга
function updateAttendanceFromAdditions() {
    const additionsNames = new Set(ratingAdditionsFinal.map(item => item.name));
    ratingAttendance = ratingAttendance.map(player => {
        if (additionsNames.has(player.name)) {
            return { ...player, attendance: player.attendance + 1 };
        }
        return player;
    });
}
updateAttendanceFromAdditions();

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
    // При смене вкладки сбрасываем поиск и обновляем статистику
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

// Заполнение таблицы результатов ПРОШЛОГО турнира (Дональд Дак)
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
    const previousRatingMap = new Map(previousRating.map(p => [p.name, p.rating]));
    const additionMap = new Map(ratingAdditionsFinal.map(p => [p.name, p.addition]));
    const allPlayerNames = new Set([...previousRating.map(p => p.name), ...ratingAdditionsFinal.map(p => p.name)]);
    allPlayerNames.forEach(playerName => {
        const previousRatingValue = previousRatingMap.get(playerName) || 0;
        const addition = additionMap.get(playerName) || 0;
        newRating.push({ name: playerName, previousRating: previousRatingValue, change: addition, newRating: previousRatingValue + addition });
    });
    return newRating;
}

function calculateRatingPositionChanges() {
    const newRating = calculateNewRating();
    const sortedPreviousRating = [...previousRating].sort((a, b) => b.rating - a.rating);
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const positionChanges = new Map();
    sortedNewRating.forEach((player, newIndex) => {
        const oldIndex = sortedPreviousRating.findIndex(p => p.name === player.name);
        if (oldIndex === -1) positionChanges.set(player.name, { change: 0, type: 'new' });
        else {
            const change = oldIndex - newIndex;
            if (change > 0) positionChanges.set(player.name, { change: Math.abs(change), type: 'up' });
            else if (change < 0) positionChanges.set(player.name, { change: Math.abs(change), type: 'down' });
            else positionChanges.set(player.name, { change: 0, type: 'same' });
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
    const attendanceMap = new Map(ratingAttendance.map(item => [item.name, item.attendance]));
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        const changeClass = player.change > 0 ? "rating-positive" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const changeHTML = createPositionChangeHTML(positionChanges.get(player.name));
        const attendance = attendanceMap.get(player.name) || 0;
        const isTop19 = index < 19;
        if (isTop19 || player.name === "Никита Yellow") row.className = 'rating-highlight';
        const nameClass = player.name === "Никита Yellow" ? 'player-name rating-crown' : 'player-name';
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="${nameClass}">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="attendance-value">${attendance}</td>
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

    // Если поиск пуст, перезаполняем таблицы в зависимости от вкладки
    if (searchTerm === '') {
        if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        else if (activeTab.id === 'bounty') fillBountyTable();
        else if (activeTab.id === 'rating') fillRatingTable();
        // Для игровых дней (day1-day4) и Итогов ничего не делаем, там заглушки
        document.getElementById('searchResults').style.display = 'none';
        return;
    }

    // Упрощенная логика поиска (показывает количество найденных, но не меняет таблицы, кроме рейтинга и охоты)
    let foundCount = 0;
    if (activeTab.id === 'previousResults') {
        foundCount = previousTournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'bounty') {
        foundCount = bountyHunters.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'rating') {
        const newRating = calculateNewRating();
        foundCount = newRating.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    }

    document.getElementById('resultsCount').textContent = foundCount;
    document.getElementById('searchResults').style.display = 'block';
}

function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    if (!searchInput || !autocompleteResults) return;

    // Собираем всех игроков из рейтинга и прошлого турнира для автодополнения
    const allPlayers = [
        ...previousTournamentResults.map(p => ({ name: p.name })),
        ...calculateNewRating().map(p => ({ name: p.name })),
        ...bountyHunters.map(p => ({ name: p.name }))
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

    if (activeTab.id === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
    } else if (activeTab.id === 'bounty') {
        totalPlayers = bountyHunters.length;
    } else if (activeTab.id === 'rating') {
        totalPlayers = calculateNewRating().length;
    } else {
        // Для пустых дней оставляем 0
        totalPlayers = 0;
    }

    if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
    if (averageStackElement) averageStackElement.textContent = averageStack;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    fillPreviousResultsTable();
    fillBountyTable();
    fillRatingTable();
    setupAutocomplete();

    // Показываем вкладку "Охота за головами" по умолчанию (как самую информативную в межсезонье)
    showTab('bounty');

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
