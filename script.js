// ========== ДАННЫЕ ==========

// Результаты прошлого турнира
const previousTournamentResults = [
    { name: "Максим Б", place: 1, status: "Победитель 🥇" },
    { name: "Никита Зейн", place: 2, status: "Серебряный призер 🥈" },
    { name: "Кристина А", place: 3, status: "Бронзовый призер 🥉" },
    { name: "Михаил Козадой", place: 4, status: "Участник финала" },
    { name: "Шурик Шилкин", place: 5, status: "Участник финала" },
    { name: "Полина Матыцына", place: 6, status: "Участник финала" },
    { name: "Семён Ануфриев", place: 7, status: "Участник финала" },
    { name: "Богдан А", place: 8, status: "Участник финала" },
    { name: "Роман Лод", place: 9, status: "Участник финала" },
    { name: "Макар Аве", place: 10, status: "Участник финала" },
    { name: "Егор АА 11", place: 11, status: "Участник финала" },
    { name: "Егор Вино", place: 12, status: "Участник финала" },
    { name: "Михаил Наб", place: 13, status: "Участник финала" },
    { name: "Ксюша Лис", place: 14, status: "Участник финала" },
    { name: "Соня Серж", place: 15, status: "Участник финала" },
    { name: "Саша Коч", place: 16, status: "Участник финала" },
    { name: "Вадим Константинов", place: 17, status: "Участник финала" },
    { name: "Влад Владшток", place: 18, status: "Участник финала" },
    { name: "Инна М", place: 19, status: "Участник финала" },
    { name: "Серж", place: 20, status: "Участник финала" },
    { name: "Стас ISK", place: 21, status: "Участник финала" },
    { name: "Robert Юниксфактёр", place: 22, status: "Участник финала" },
    { name: "Андрей Фломастер", place: 23, status: "Участник финала" },
    { name: "Влад Сам", place: 24, status: "Участник финала" },
    { name: "Максим Spy", place: 25, status: "Участник финала" },
    { name: "Леонид П", place: 26, status: "Участник турнира" },
    { name: "Андрей Мазепа", place: 27, status: "Участник турнира" },
    { name: "Надя Жб", place: 28, status: "Участник турнира" },
    { name: "Том", place: 29, status: "Участник турнира" },
    { name: "Федор К", place: 30, status: "Участник турнира" },
    { name: "Евгений Ц", place: 31, status: "Участник турнира" },
    { name: "Дмитрий Ник", place: 32, status: "Участник турнира" },
    { name: "Jane 007", place: 33, status: "Участник турнира" },
    { name: "Настя К", place: 34, status: "Участник турнира" },
    { name: "grooveman", place: 35, status: "Участник турнира" },
    { name: "Даша Хромова", place: 36, status: "Участник турнира" },
    { name: "Иван Грозный", place: 37, status: "Участник турнира" },
    { name: "Вадим Зеленин", place: 38, status: "Участник турнира" },
    { name: "Юка", place: 39, status: "Участник турнира" },
    { name: "Алексей Ершов", place: 40, status: "Участник турнира" },
    { name: "Немощь", place: 41, status: "Участник турнира" },
    { name: "София Например", place: 42, status: "Участник турнира" },
    { name: "Матвей МС", place: 43, status: "Участник турнира" },
    { name: "Владимир Бул", place: 44, status: "Участник турнира" },
    { name: "Свидетель", place: 45, status: "Участник турнира" },
    { name: "Николай Ж", place: 46, status: "Участник турнира" },
    { name: "Стас Мазепа", place: 47, status: "Участник турнира" },
    { name: "Инна Шашкина", place: 48, status: "Участник турнира" },
    { name: "Ирина Ага", place: 49, status: "Участник турнира" },
    { name: "Анна К", place: 50, status: "Участник турнира" },
    { name: "Андрей Морфиус", place: 51, status: "Участник турнира" },
    { name: "Андрей Пот", place: 52, status: "Участник турнира" }
];

// Охота за головами
const huntingData = [
    { name: "Семён Ануфриев", value: 1000 },
    { name: "Михаил Наб", value: 1000 },
    { name: "Богдан А", value: 1000 },
    { name: "Шурик Шилкин", value: 1000 },
    { name: "Никита Зейн", value: 1000 },
    { name: "grooveman", value: 800 },
    { name: "Robert Юниксфактёр", value: 800 },
    { name: "Михаил Козадой", value: 800 },
    { name: "Влад Владшток", value: 800 },
    { name: "Саша Коч", value: 800 },
    { name: "Егор АА 11", value: 600 },
    { name: "Максим Spy", value: 600 },
    { name: "Полина Матыцына", value: 600 },
    { name: "Jane 007", value: 600 },
    { name: "Сергей Ман", value: 600 },
    { name: "Роман Лод", value: 400 },
    { name: "Макар Аве", value: 400 },
    { name: "Кристина А", value: 400 },
    { name: "Надя Жб", value: 400 },
    { name: "Соня Серж", value: 400 }
];

// Рейтинг до финала (все 120+ игроков)
const ratingBeforeFinal = [
    { name: "Михаил Наб", rating: 887, attendance: 13 }, { name: "Семён Ануфриев", rating: 875, attendance: 20 },
    { name: "Богдан А", rating: 859, attendance: 22 }, { name: "grooveman", rating: 749, attendance: 13 },
    { name: "Шурик Шилкин", rating: 719, attendance: 22 }, { name: "Robert Юниксфактёр", rating: 650, attendance: 13 },
    { name: "Никита Зейн", rating: 627, attendance: 14 }, { name: "Jane 007", rating: 585, attendance: 20 },
    { name: "Влад Владшток", rating: 580, attendance: 21 }, { name: "Максим Spy", rating: 578, attendance: 19 },
    { name: "Саша Коч", rating: 569, attendance: 13 }, { name: "Егор АА 11", rating: 563, attendance: 20 },
    { name: "Сергей Ман", rating: 556, attendance: 10 }, { name: "Михаил Козадой", rating: 535, attendance: 15 },
    { name: "Полина Матыцына", rating: 532, attendance: 17 }, { name: "Макар Аве", rating: 486, attendance: 14 },
    { name: "Роман Лод", rating: 477, attendance: 16 }, { name: "Надя Жб", rating: 418, attendance: 10 },
    { name: "Настя К", rating: 413, attendance: 9 }, { name: "Леонид П", rating: 406, attendance: 6 },
    { name: "Немощь", rating: 383, attendance: 8 }, { name: "Соня Серж", rating: 383, attendance: 15 },
    { name: "Кристина А", rating: 382, attendance: 10 }, { name: "Дмитрий Ник", rating: 361, attendance: 9 },
    { name: "Влад Сам", rating: 342, attendance: 5 }, { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Ирина Ага", rating: 309, attendance: 5 }, { name: "Егор Вино", rating: 304, attendance: 8 },
    { name: "Матвей МС", rating: 293, attendance: 7 }, { name: "Том", rating: 283, attendance: 11 },
    { name: "Иван Антипов", rating: 267, attendance: 5 }, { name: "Даша Хромова", rating: 250, attendance: 8 },
    { name: "Инна М", rating: 229, attendance: 10 }, { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Федор К", rating: 216, attendance: 6 }, { name: "Серж", rating: 213, attendance: 5 },
    { name: "Даша Yellow", rating: 206, attendance: 3 }, { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Андрей Фломастер", rating: 168, attendance: 6 }, { name: "Евгений Ц", rating: 167, attendance: 5 },
    { name: "Николай Ж", rating: 167, attendance: 5 }, { name: "Анна К", rating: 128, attendance: 4 },
    { name: "Максим Б", rating: 126, attendance: 4 }, { name: "Саша Тяжелов", rating: 125, attendance: 1 },
    { name: "Владимир Бул", rating: 119, attendance: 5 }, { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Андрей Морфиус", rating: 117, attendance: 4 }, { name: "Никита Yellow", rating: 115, attendance: 2 },
    { name: "Саша Бел", rating: 115, attendance: 3 }, { name: "Лиза Арц", rating: 114, attendance: 2 },
    { name: "Даниил Ершов", rating: 105, attendance: 3 }, { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 }, { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 }, { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Искандер", rating: 87, attendance: 3 }, { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 }, { name: "Стас ISK", rating: 84, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 }, { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 }, { name: "Иван 112", rating: 78, attendance: 2 },
    { name: "Лера Еж", rating: 76, attendance: 1 }, { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 }, { name: "Андрей Пот", rating: 69, attendance: 2 },
    { name: "Иван Баж", rating: 64, attendance: 3 }, { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 }, { name: "Вова Баж", rating: 60, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 }, { name: "Ксюша Лис", rating: 60, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 }, { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 }, { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Петя Федоров", rating: 50, attendance: 1 }, { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Юка", rating: 47, attendance: 2 }, { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 }, { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 }, { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 }, { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 }, { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 }, { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 }, { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 }, { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 }, { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 }, { name: "София Например", rating: 24, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 }, { name: "Всеволод Кузнецов", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 }, { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 }, { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 }, { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Ольга Б", rating: 22, attendance: 1 }, { name: "Славяна", rating: 22, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 }, { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 }, { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 }, { name: "Стас Мазепа", rating: 20, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 }, { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }, { name: "Вадим Константинов", rating: 0, attendance: 0 }
];

// Добавки за финал
const ratingAdditionsFinal = [
    { name: "Robert Юниксфактёр", addition: 25 }, { name: "Андрей Фломастер", addition: 44 },
    { name: "Богдан А", addition: 42 }, { name: "Влад Владшток", addition: 26 },
    { name: "Влад Сам", addition: 43 }, { name: "Егор АА 11", addition: 36 },
    { name: "Егор Вино", addition: 61 }, { name: "Инна М", addition: 49 },
    { name: "Кристина А", addition: 122 }, { name: "Ксюша Лис", addition: 57 },
    { name: "Макар Аве", addition: 38 }, { name: "Максим Spy", addition: 14 },
    { name: "Максим Б", addition: 212 }, { name: "Михаил Козадой", addition: 78 },
    { name: "Михаил Наб", addition: 39 }, { name: "Никита Зейн", addition: 129 },
    { name: "Полина Матыцына", addition: 59 }, { name: "Роман Лод", addition: 51 },
    { name: "Саша Коч", addition: 34 }, { name: "Семён Ануфриев", addition: 56 },
    { name: "Серж", addition: 47 }, { name: "Соня Серж", addition: 35 },
    { name: "Стас ISK", addition: 46 }, { name: "Шурик Шилкин", addition: 51 },
    { name: "Вадим Константинов", addition: 51 }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentSearchTerm = '';

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatNumber(num) {
    if (!num && num !== 0) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Получить данные рейтинга (уже отсортированы)
function getRatingData() {
    const beforeMap = new Map(ratingBeforeFinal.map(p => [p.name, { rating: p.rating, attendance: p.attendance }]));
    const additionMap = new Map(ratingAdditionsFinal.map(p => [p.name, p.addition]));
    const result = [];
    
    ratingBeforeFinal.forEach(p => {
        const add = additionMap.get(p.name) || 0;
        result.push({
            name: p.name,
            previousRating: p.rating,
            attendance: p.attendance + (additionMap.has(p.name) ? 1 : 0),
            change: add,
            newRating: p.rating + add
        });
    });
    
    ratingAdditionsFinal.forEach(add => {
        if (!beforeMap.has(add.name)) {
            result.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition
            });
        }
    });
    
    return result.sort((a, b) => b.newRating - a.newRating);
}

// Получить изменения позиций
function getPositionChanges() {
    const newRating = getRatingData();
    const oldSorted = [...ratingBeforeFinal].sort((a, b) => b.rating - a.rating);
    const changes = new Map();
    const oldNames = new Set(ratingBeforeFinal.map(p => p.name));
    
    newRating.forEach((player, newIdx) => {
        if (!oldNames.has(player.name)) {
            changes.set(player.name, { type: 'new', change: 0 });
        } else {
            const oldIdx = oldSorted.findIndex(p => p.name === player.name);
            const diff = oldIdx - newIdx;
            if (diff > 0) changes.set(player.name, { type: 'up', change: diff });
            else if (diff < 0) changes.set(player.name, { type: 'down', change: Math.abs(diff) });
            else changes.set(player.name, { type: 'same', change: 0 });
        }
    });
    return changes;
}

// ========== ОТРИСОВКА ТАБЛИЦ ==========

// Рейтинг
function fillRatingTable() {
    const tbody = document.getElementById('ratingTable');
    if (!tbody) return;
    
    const allData = getRatingData();
    const changes = getPositionChanges();
    
    // Фильтруем по поиску
    const filteredData = currentSearchTerm === '' 
        ? allData 
        : allData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    // Обновляем счетчик
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    tbody.innerHTML = '';
    
    filteredData.forEach((p) => {
        // Находим реальный порядковый номер в общем рейтинге
        const realIndex = allData.findIndex(item => item.name === p.name);
        const realPosition = realIndex + 1;
        
        const change = changes.get(p.name);
        let changeHtml = '';
        if (change) {
            if (change.type === 'new') changeHtml = '<div class="position-change position-new">NEW</div>';
            else if (change.type === 'up') changeHtml = `<div class="position-change position-up"><span class="change-arrow">▲</span>${change.change}</div>`;
            else if (change.type === 'down') changeHtml = `<div class="position-change position-down"><span class="change-arrow">▼</span>${change.change}</div>`;
            else changeHtml = '<div class="position-change position-same"><span class="change-arrow">→</span>0</div>';
        }
        
        let changeSign = '';
        let changeClass = 'rating-neutral';
        if (p.change > 0) {
            changeSign = `+${p.change}`;
            changeClass = 'rating-positive';
        } else if (p.change === 0) {
            changeSign = '0';
        } else {
            changeSign = `${p.change}`;
            changeClass = 'rating-negative';
        }
        
        // Выделение топ-19 и Никиты Yellow (по реальной позиции)
        const isTop19 = realPosition <= 19;
        const isNikitaYellow = p.name === "Никита Yellow";
        let rowClass = '';
        if (isTop19 || isNikitaYellow) rowClass = 'rating-highlight';
        
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        // Подсветка поиска
        const isSearchMatch = currentSearchTerm !== '' && p.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        // ИСПРАВЛЕНО: добавлен класс mobile-hide к скрываемым колонкам
        row.insertCell(0).innerHTML = `<td class="number-column">${realPosition}</td>`;
        row.insertCell(1).innerHTML = `<td class="${nameClass}">${p.name}</td>`;
        row.insertCell(2).innerHTML = `<td class="extra-col mobile-hide">${changeHtml}</td>`;
        row.insertCell(3).innerHTML = `<td class="extra-col mobile-hide">${p.previousRating > 0 ? p.previousRating : '-'}</td>`;
        row.insertCell(4).innerHTML = `<td class="extra-col mobile-hide attendance-value">${p.attendance}</td>`;
        row.insertCell(5).innerHTML = `<td class="extra-col mobile-hide ${changeClass}">${changeSign}</td>`;
        row.insertCell(6).innerHTML = `<td class="rating-number">${p.newRating}</td>`;
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// Прошлый турнир
function fillPreviousResultsTable() {
    const tbody = document.getElementById('previousResultsTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? previousTournamentResults 
        : previousTournamentResults.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    tbody.innerHTML = '';
    
    filteredData.forEach((p) => {
        const realIndex = previousTournamentResults.findIndex(item => item.name === p.name);
        const realPosition = realIndex + 1;
        
        let rowClass = '';
        if (p.place === 1) rowClass = 'final-gold';
        else if (p.place === 2) rowClass = 'final-silver';
        else if (p.place === 3) rowClass = 'final-bronze';
        else if (p.place >= 4 && p.place <= 25) rowClass = 'final-finalist';
        else rowClass = 'final-participant';
        
        const isSearchMatch = currentSearchTerm !== '' && p.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = `<td class="number-column">${realPosition}</td>`;
        row.insertCell(1).innerHTML = `<td class="player-name">${p.name}</td>`;
        row.insertCell(2).innerHTML = `<td class="place-column">${p.place}</td>`;
        row.insertCell(3).innerHTML = `<td class="place-notes">${p.status}</td>`;
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// Охота за головами
function fillHuntingNominationsTable() {
    const tbody = document.getElementById('huntingNominationsTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? huntingData 
        : huntingData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realIndex = huntingData.findIndex(h => h.name === item.name);
        const realPosition = realIndex + 1;
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        const rowClass = isSearchMatch ? 'search-highlight' : '';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = `<td class="number-column">${realPosition}</td>`;
        row.insertCell(1).innerHTML = `<td class="player-name">${item.name}</td>`;
        row.insertCell(2).innerHTML = `<td class="chips-positive">${formatNumber(item.value)}</td>`;
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// ========== ПОИСК ==========

function performSearch() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'huntingNominations') fillHuntingNominationsTable();
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    
    const ratingData = getRatingData();
    const allPlayers = [...new Set([
        ...previousTournamentResults.map(p => p.name),
        ...ratingData.map(p => p.name),
        ...huntingData.map(p => p.name)
    ])];
    
    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        currentSearchTerm = val;
        autocomplete.innerHTML = '';
        
        if (val.length < 1) {
            autocomplete.style.display = 'none';
            performSearch();
            return;
        }
        
        const suggestions = allPlayers.filter(n => n.toLowerCase().includes(val)).slice(0, 8);
        if (suggestions.length) {
            suggestions.forEach(s => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                const regex = new RegExp(`(${val})`, 'gi');
                div.innerHTML = s.replace(regex, '<span class="autocomplete-highlight">$1</span>');
                div.onclick = () => {
                    input.value = s;
                    currentSearchTerm = s.toLowerCase();
                    autocomplete.style.display = 'none';
                    performSearch();
                };
                autocomplete.appendChild(div);
            });
            autocomplete.style.display = 'block';
        } else {
            autocomplete.style.display = 'none';
        }
        
        performSearch();
    });
    
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !autocomplete.contains(e.target)) {
            autocomplete.style.display = 'none';
        }
    });
}

// ========== ВКЛАДКИ ==========

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabs .tab-button').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    const targetBtn = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
    if (targetBtn) targetBtn.classList.add('active');
    
    const phases = {
        'rating': 'Рейтинг',
        'previousResults': 'Результаты Сезона Охоты А-2',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 30.04.2026',
        'day2': '2 день - 7.05.2026',
        'day3': '3 день - 14.05.2026',
        'tournamentResults': 'Итоги'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Турнир';
    
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    
    resetTableExpand();
    
    if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'huntingNominations') fillHuntingNominationsTable();
}

// ========== РАЗВЕРТЫВАНИЕ ТАБЛИЦЫ ==========

function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const table = activeTab.querySelector('.tournament-table');
    if (!table) return;
    
    table.classList.toggle('expanded');
    const button = document.querySelector('.expand-button');
    button.textContent = table.classList.contains('expanded') ? 'Свернуть таблицу' : 'Развернуть таблицу';
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    const button = document.querySelector('.expand-button');
    if (button) button.textContent = 'Развернуть таблицу';
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete();
    showTab('rating');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
});
