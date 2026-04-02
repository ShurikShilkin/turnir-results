// ========== ДАННЫЕ ПРОШЛОГО ТУРНИРА (Туз весны 2026) - НЕ ИЗМЕНЯЕМ ==========
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

// ========== ДАННЫЕ РЕЙТИНГА - НЕ ИЗМЕНЯЕМ ==========
const ratingBeforeToday = [
    { name: "Михаил Наб", rating: 765, attendance: 10 },
    { name: "Семён Ануфриев", rating: 725, attendance: 17 },
    { name: "Богдан А", rating: 690, attendance: 17 },
    { name: "Шурик Шилкин", rating: 666, attendance: 17 },
    { name: "Robert Юниксфактёр", rating: 582, attendance: 11 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Влад Владшток", rating: 544, attendance: 16 },
    { name: "Максим Spy", rating: 538, attendance: 15 },
    { name: "Jane 007", rating: 523, attendance: 16 },
    { name: "Егор АА 11", rating: 500, attendance: 15 },
    { name: "grooveman", rating: 489, attendance: 10 },
    { name: "Полина Матыцына", rating: 474, attendance: 12 },
    { name: "Михаил Козадой", rating: 457, attendance: 11 },
    { name: "Макар Аве", rating: 440, attendance: 11 },
    { name: "Роман Лод", rating: 423, attendance: 13 },
    { name: "Саша Коч", rating: 413, attendance: 9 },
    { name: "Никита Зейн", rating: 389, attendance: 9 },
    { name: "Настя К", rating: 367, attendance: 8 },
    { name: "Немощь", rating: 338, attendance: 6 },
    { name: "Надя Жб", rating: 326, attendance: 7 },
    { name: "Соня Серж", rating: 321, attendance: 11 },
    { name: "Свидетель", rating: 305, attendance: 7 },
    { name: "Кристина А", rating: 297, attendance: 7 },
    { name: "Влад Сам", rating: 294, attendance: 4 },
    { name: "Ирина Ага", rating: 288, attendance: 4 },
    { name: "Дмитрий Ник", rating: 270, attendance: 6 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Матвей МС", rating: 250, attendance: 5 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Серж", rating: 213, attendance: 5 },
    { name: "Том", rating: 211, attendance: 9 },
    { name: "Даша Хромова", rating: 192, attendance: 6 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Инна М", rating: 154, attendance: 7 },
    { name: "Федор К", rating: 149, attendance: 4 },
    { name: "Николай Ж", rating: 147, attendance: 4 },
    { name: "Леонид П", rating: 137, attendance: 3 },
    { name: "Егор Вино", rating: 125, attendance: 4 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Анна К", rating: 108, attendance: 3 },
    { name: "Евгений Ц", rating: 107, attendance: 3 },
    { name: "Даниил Ершов", rating: 105, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Андрей Морфиус", rating: 98, attendance: 3 },
    { name: "Даша Yellow", rating: 98, attendance: 2 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Искандер", rating: 87, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван 112", rating: 78, attendance: 2 },
    { name: "Владимир Бул", rating: 75, attendance: 3 },
    { name: "Никита Yellow", rating: 71, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Иван Баж", rating: 64, attendance: 3 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Саша Бел", rating: 61, attendance: 2 },
    { name: "Вова Баж", rating: 60, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Андрей Пот", rating: 48, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Андрей Фломастер", rating: 42, attendance: 2 },
    { name: "Инна Шашкина", rating: 42, attendance: 2 },
    { name: "Лиза Арц", rating: 42, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Вадим Зеленин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 },
    { name: "Всеволод Кузнецов", rating: 23, attendance: 1 },
    { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 },
    { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 },
    { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Славяна", rating: 22, attendance: 1 },
    { name: "Ольга Б", rating: 22, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 },
    { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 },
    { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// Добавки за турнир Туза весны 2026 (оставляем для истории, но для новых игр не используются)
const ratingAdditions = [
    { name: "grooveman", addition: 216 },
    { name: "Jane 007", addition: 44 },
    { name: "Robert Юниксфактёр", addition: 62 },
    { name: "Андрей Фломастер", addition: 43 },
    { name: "Богдан А", addition: 132 },
    { name: "Влад Владшток", addition: 33 },
    { name: "Влад Сам", addition: 48 },
    { name: "Даша Yellow", addition: 108 },
    { name: "Егор АА 11", addition: 41 },
    { name: "Егор Вино", addition: 82 },
    { name: "Леонид П", addition: 88 },
    { name: "Лиза Арц", addition: 72 },
    { name: "Макар Аве", addition: 42 },
    { name: "Никита Yellow", addition: 44 },
    { name: "Никита Зейн", addition: 58 },
    { name: "Полина Матыцына", addition: 30 },
    { name: "Роман Лод", addition: 28 },
    { name: "Саша Бел", addition: 54 },
    { name: "Саша Коч", addition: 47 },
    { name: "Семён Ануфриев", addition: 81 },
    { name: "Соня Серж", addition: 51 },
    { name: "Шурик Шилкин", addition: 17 },
    { name: "Ксюша Лис", addition: 60 },
    { name: "Лера Еж", addition: 76 },
    { name: "Максим Б", addition: 52 },
    { name: "Саша Тяжелов", addition: 125 }
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

// Заполнение таблицы результатов ПРОШЛОГО турнира (Туз весны 2026)
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

// ========== РЕЙТИНГ (НЕ ИЗМЕНЯЕМ) ==========
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
        if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        else if (activeTab.id === 'rating') fillRatingTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }

    let foundCount = 0;
    if (activeTab.id === 'previousResults') {
        foundCount = previousTournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
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

    const allPlayers = [
        ...previousTournamentResults.map(p => ({ name: p.name })),
        ...calculateNewRating().map(p => ({ name: p.name }))
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
    } else if (activeTab.id === 'rating') {
        totalPlayers = calculateNewRating().length;
    } else {
        totalPlayers = 0;
        averageStack = 0;
    }

    if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
    if (averageStackElement) averageStackElement.textContent = averageStack;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    fillPreviousResultsTable();
    fillRatingTable();
    setupAutocomplete();

    showTab('rating'); // Стартовая вкладка - Рейтинг

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
