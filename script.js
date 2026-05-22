// ========== ДАННЫЕ ==========

// Результаты ВЭЛЬЮ БЕТА 3/4 (финальные результаты)
const previousTournamentResults = [
    "Jane 007", "Егор АА 11", "Шурик Шилкин", "Егор Вино", "Богдан А",
    "Михаил Козадой", "Макар Аве", "Даша Хромова", "Полина Матыцына", "Семён Ануфриев",
    "Илья Ерёмин", "Максим Spy", "Саша Коч", "Влад Владшток", "Любовь Т",
    "Мария Павлова", "Миша Нестер", "Немощь", "Том", "Андрей Фломастер",
    "Роман Лод", "Стас ISK", "Артём SUB", "Саша Тяжелов", "Никита Зейн",
    "Вадим Константинов", "Дмитрий Ник", "Михаил Наб", "Влад Сам", "Иван Сидоров",
    "Вова Баж", "Настя К", "SvetLana M", "Инна М", "Наташа Алекс",
    "Анастасия Ильина", "Лика Ясева", "Никита Башкин", "Евгений Ц", "Федор К",
    "Андрей Морфиус", "Даниил Ершов", "Матвей МС", "Всеволод Кузнецов", "Данил Г",
    "Даниил Глухов", "Иван Жуйков", "Андрей Пот", "Соня Серж", "Леонид П"
];

// Данные 1 дня
const day1Data = [
    { name: "Никита Зейн", entry: 1100, extra: 2000, exit: 23945, win: 20845 },
    { name: "Андрей М", entry: 1100, extra: 0, exit: 13205, win: 12105 },
    { name: "Лиза Арц", entry: 1100, extra: 2000, exit: 8675, win: 5575 },
    { name: "Евгений Ц", entry: 1100, extra: 0, exit: 6425, win: 5325 },
    { name: "Илья Midas", entry: 1100, extra: 0, exit: 6125, win: 5025 },
    { name: "Богдан А", entry: 1100, extra: 0, exit: 5970, win: 4870 },
    { name: "Jane 007", entry: 1100, extra: 2000, exit: 7850, win: 4750 },
    { name: "Анна К", entry: 1100, extra: 2000, exit: 5895, win: 2795 },
    { name: "Ся Ся", entry: 1100, extra: 0, exit: 3495, win: 2395 },
    { name: "Артём Акулов", entry: 1100, extra: 2000, exit: 5120, win: 2020 },
    { name: "Макар Аве", entry: 1100, extra: 0, exit: 1515, win: 415 },
    { name: "Иван 112", entry: 1100, extra: 1000, exit: 2465, win: 365 },
    { name: "Влад Сам", entry: 1100, extra: 3000, exit: 3700, win: -400 },
    { name: "Катя М", entry: 1100, extra: 0, exit: 275, win: -825 },
    { name: "Шурик Шилкин", entry: 1100, extra: 0, exit: 0, win: -1100 },
    { name: "Роман Лод", entry: 1100, extra: 5000, exit: 5005, win: -1095 },
    { name: "Николя", entry: 1100, extra: 0, exit: 0, win: -1100 },
    { name: "Артём SUB", entry: 1100, extra: 2000, exit: 1445, win: -1655 },
    { name: "Даша Хромова", entry: 1100, extra: 4000, exit: 3240, win: -1860 },
    { name: "Соня Серж", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Влад Владшток", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Максим Spy", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Михаил Наб", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Том", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Немощь", entry: 1100, extra: 2000, exit: 755, win: -2345 },
    { name: "Лина S", entry: 1100, extra: 3000, exit: 460, win: -3640 },
    { name: "Арт", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Надя Жб", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Стас ISK", entry: 1100, extra: 6000, exit: 0, win: -7100 },
    { name: "Александр Гиг", entry: 1100, extra: 7000, exit: 0, win: -8100 },
    { name: "Егор Вино", entry: 1100, extra: 12000, exit: 935, win: -12165 }
];

// Охота за головами
const huntingData = [
    { name: "Семён Ануфриев", value: 1500 },
    { name: "Богдан А", value: 1400 },
    { name: "Михаил Наб", value: 1300 },
    { name: "Никита Зейн", value: 1200 },
    { name: "Jane 007", value: 1100 },
    { name: "Шурик Шилкин", value: 1000 },
    { name: "grooveman", value: 800 },
    { name: "Егор АА 11", value: 800 },
    { name: "Влад Владшток", value: 800 },
    { name: "Robert Юниксфактёр", value: 800 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Максим Spy", value: 600 },
    { name: "Саша Коч", value: 600 },
    { name: "Полина Матыцына", value: 600 },
    { name: "Макар Аве", value: 600 },
    { name: "Егор Вино", value: 400 },
    { name: "Роман Лод", value: 400 },
    { name: "Сергей Ман", value: 400 },
    { name: "Немощь", value: 400 },
    { name: "Кристина А", value: 400 }
];

// Рейтинг до 1 дня межсезонки
const ratingBeforeFinal = [
    { name: "Семён Ануфриев", rating: 1032, attendance: 25 },
    { name: "Богдан А", rating: 961, attendance: 27 },
    { name: "Михаил Наб", rating: 937, attendance: 17 },
    { name: "Шурик Шилкин", rating: 849, attendance: 27 },
    { name: "Jane 007", rating: 847, attendance: 24 },
    { name: "Никита Зейн", rating: 777, attendance: 18 },
    { name: "grooveman", rating: 749, attendance: 13 },
    { name: "Егор АА 11", rating: 724, attendance: 25 },
    { name: "Влад Владшток", rating: 683, attendance: 26 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Михаил Козадой", rating: 672, attendance: 20 },
    { name: "Максим Spy", rating: 660, attendance: 24 },
    { name: "Саша Коч", rating: 643, attendance: 17 },
    { name: "Полина Матыцына", rating: 639, attendance: 21 },
    { name: "Макар Аве", rating: 607, attendance: 19 },
    { name: "Егор Вино", rating: 575, attendance: 13 },
    { name: "Роман Лод", rating: 564, attendance: 19 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Немощь", rating: 527, attendance: 11 },
    { name: "Кристина А", rating: 504, attendance: 11 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Влад Сам", rating: 459, attendance: 8 },
    { name: "Дмитрий Ник", rating: 431, attendance: 11 },
    { name: "Леонид П", rating: 425, attendance: 7 },
    { name: "Соня Серж", rating: 420, attendance: 18 },
    { name: "Надя Жб", rating: 418, attendance: 10 },
    { name: "Даша Хромова", rating: 417, attendance: 12 },
    { name: "Матвей МС", rating: 400, attendance: 10 },
    { name: "Том", rating: 368, attendance: 15 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Ирина Ага", rating: 309, attendance: 5 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Андрей Фломастер", rating: 303, attendance: 10 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Стас ISK", rating: 265, attendance: 8 },
    { name: "Серж", rating: 260, attendance: 6 },
    { name: "Федор К", rating: 242, attendance: 7 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Саша Тяжелов", rating: 197, attendance: 3 },
    { name: "Евгений Ц", rating: 194, attendance: 6 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Николай Ж", rating: 167, attendance: 5 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Даниил Ершов", rating: 130, attendance: 4 },
    { name: "Анна К", rating: 128, attendance: 4 },
    { name: "Вова Баж", rating: 122, attendance: 3 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Ксюша Лис", rating: 117, attendance: 2 },
    { name: "Никита Yellow", rating: 115, attendance: 2 },
    { name: "Саша Бел", rating: 115, attendance: 3 },
    { name: "Лиза Арц", rating: 114, attendance: 2 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Артём SUB", rating: 91, attendance: 3 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Искандер", rating: 87, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван 112", rating: 78, attendance: 2 },
    { name: "Мария Павлова", rating: 77, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Иван Баж", rating: 64, attendance: 3 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Всеволод Кузнецов", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 },
    { name: "Никита Башкин", rating: 25, attendance: 1 },
    { name: "София Например", rating: 24, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 },
    { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 },
    { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 },
    { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Ольга Б", rating: 22, attendance: 1 },
    { name: "Славяна", rating: 22, attendance: 1 },
    { name: "Даниил Глухов", rating: 21, attendance: 1 },
    { name: "Данил Г", rating: 21, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 },
    { name: "Иван Жуйков", rating: 21, attendance: 1 },
    { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 },
    { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 },
    { name: "Стас Мазепа", rating: 20, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// Добавки после 1 дня
const ratingAdditionsAfterDay1 = [
    { name: "Jane 007", addition: 4 },
    { name: "Александр Гиг", addition: 13 },
    { name: "Андрей М", addition: 118 },
    { name: "Анна К", addition: 38 },
    { name: "Арт", addition: 18 },
    { name: "Артём SUB", addition: 25 },
    { name: "Артём Акулов", addition: 34 },
    { name: "Богдан А", addition: 26 },
    { name: "Влад Владшток", addition: 0 },
    { name: "Влад Сам", addition: 27 },
    { name: "Даша Хромова", addition: 2 },
    { name: "Евгений Ц", addition: 84 },
    { name: "Егор Вино", addition: 0 },
    { name: "Иван 112", addition: 37 },
    { name: "Илья Midas", addition: 75 },
    { name: "Катя М", addition: 45 },
    { name: "Лиза Арц", addition: 62 },
    { name: "Лина S", addition: 19 },
    { name: "Макар Аве", addition: 20 },
    { name: "Максим Spy", addition: 0 },
    { name: "Михаил Наб", addition: 4 },
    { name: "Надя Жб", addition: 18 },
    { name: "Немощь", addition: 22 },
    { name: "Никита Зейн", addition: 86 },
    { name: "Николя", addition: 41 },
    { name: "Роман Лод", addition: 0 },
    { name: "Соня Серж", addition: 7 },
    { name: "Стас ISK", addition: 14 },
    { name: "Ся Ся", addition: 56 },
    { name: "Том", addition: 7 },
    { name: "Шурик Шилкин", addition: 0 }
];

// Множество игроков, которые участвовали в 1 дне
const day1PlayersSet = new Set(ratingAdditionsAfterDay1.map(p => p.name));

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentSearchTerm = '';

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Получить данные рейтинга с добавками
function getRatingData() {
    const beforeMap = new Map(ratingBeforeFinal.map(p => [p.name, { rating: p.rating, attendance: p.attendance }]));
    const additionMap = new Map(ratingAdditionsAfterDay1.map(p => [p.name, p.addition]));
    const result = [];
    
    ratingBeforeFinal.forEach(p => {
        const add = additionMap.get(p.name) || 0;
        const newAttendance = p.attendance + (additionMap.has(p.name) ? 1 : 0);
        result.push({
            name: p.name,
            previousRating: p.rating,
            attendance: newAttendance,
            change: add,
            newRating: p.rating + add,
            playedInDay1: additionMap.has(p.name)
        });
    });
    
    ratingAdditionsAfterDay1.forEach(add => {
        if (!beforeMap.has(add.name)) {
            result.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition,
                playedInDay1: true
            });
        }
    });
    
    return result.sort((a, b) => b.newRating - a.newRating);
}

// Получить изменения позиций для рейтинга
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

function isMobile() {
    return window.innerWidth <= 768;
}

// ========== ОТРИСОВКА ТАБЛИЦ ==========

// Рейтинг
function fillRatingTable() {
    const tbody = document.getElementById('ratingTable');
    if (!tbody) return;
    
    const allData = getRatingData();
    const changes = getPositionChanges();
    const mobile = isMobile();
    const table = document.getElementById('ratingTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    
    const hideExtraColumns = mobile && !isExpanded;
    
    const filteredData = currentSearchTerm === '' 
        ? allData 
        : allData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
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
        } else if (p.change === 0 && p.playedInDay1 === true) {
            changeSign = '+0';
            changeClass = 'rating-neutral';
        } else if (p.change === 0) {
            changeSign = '0';
            changeClass = 'rating-neutral';
        } else {
            changeSign = `${p.change}`;
            changeClass = 'rating-negative';
        }
        
        const isTop19 = realPosition <= 19;
        const isNikitaYellow = p.name === "Никита Yellow";
        let rowClass = '';
        if (isTop19 || isNikitaYellow) rowClass = 'rating-highlight';
        
        const displayName = isNikitaYellow ? `${p.name} 👑` : p.name;
        
        const isSearchMatch = currentSearchTerm !== '' && p.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = displayName;
        row.insertCell(2).innerHTML = changeHtml;
        row.insertCell(3).innerHTML = p.previousRating > 0 ? p.previousRating : '-';
        row.insertCell(4).innerHTML = p.attendance;
        row.insertCell(5).innerHTML = changeSign;
        row.insertCell(6).innerHTML = p.newRating;
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#ratingTableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) {
            if (headers[i]) headers[i].style.display = '';
        }
    }
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// Результаты ВЭЛЬЮ БЕТА 3/4
function fillPreviousResultsTable() {
    const tbody = document.getElementById('previousResultsTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? previousTournamentResults 
        : previousTournamentResults.filter(name => name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    tbody.innerHTML = '';
    
    filteredData.forEach((name, idx) => {
        const realPosition = previousTournamentResults.findIndex(n => n === name) + 1;
        let status = '';
        let rowClass = '';
        
        if (realPosition === 1) {
            status = "Победитель 🥇";
            rowClass = 'final-gold';
        } else if (realPosition === 2) {
            status = "Серебряный призер 🥈";
            rowClass = 'final-silver';
        } else if (realPosition === 3) {
            status = "Бронзовый призер 🥉";
            rowClass = 'final-bronze';
        } else if (realPosition >= 4 && realPosition <= 26) {
            status = "Участник финала";
            rowClass = 'final-finalist';
        } else {
            status = "Участник турнира";
            rowClass = 'final-participant';
        }
        
        const isSearchMatch = currentSearchTerm !== '' && name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = realPosition;
        row.insertCell(3).innerHTML = status;
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
    
    filteredData.forEach((item, idx) => {
        const realIndex = huntingData.findIndex(h => h.name === item.name);
        const realPosition = realIndex + 1;
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        const rowClass = isSearchMatch ? 'search-highlight' : '';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.value);
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// День 1
function fillDay1Table() {
    const tbody = document.getElementById('day1Table');
    if (!tbody) return;
    
    const sortedDay1Data = [...day1Data].sort((a, b) => b.win - a.win);
    
    const filteredData = currentSearchTerm === '' 
        ? sortedDay1Data 
        : sortedDay1Data.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    const mobile = isMobile();
    const table = document.getElementById('day1TableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realPosition = sortedDay1Data.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.extra);
        row.insertCell(4).innerHTML = formatNumber(item.exit);
        row.insertCell(5).innerHTML = formatNumber(item.win);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
    
    const totalSum = day1Data.reduce((sum, p) => sum + p.win, 0);
    const avgStack = Math.round(totalSum / day1Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Итоги турнира
function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    
    // Собираем всех игроков из 1 дня
    const allPlayersMap = new Map();
    
    day1Data.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1Result: player.win,
            day2Result: 0,
            day3Result: 0,
            day4Result: 0
        });
    });
    
    const results = Array.from(allPlayersMap.values()).map(p => ({
        ...p,
        total: p.day1Result + p.day2Result + p.day3Result + p.day4Result
    })).sort((a, b) => b.total - a.total);
    
    // Средний стек по столбцу "Результат"
    const totalSumResult = results.reduce((sum, p) => sum + p.total, 0);
    const avgResult = Math.round(totalSumResult / results.length);
    document.getElementById('averageStack').textContent = formatNumber(avgResult);
    
    const filteredData = currentSearchTerm === '' 
        ? results 
        : results.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    tbody.innerHTML = '';
    
    const mobile = isMobile();
    const table = document.getElementById('resultsTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    filteredData.forEach((item, idx) => {
        const realPosition = results.findIndex(r => r.name === item.name) + 1;
        
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = '—';
        row.insertCell(3).innerHTML = formatNumber(item.day1Result);
        row.insertCell(4).innerHTML = formatNumber(item.day2Result);
        row.insertCell(5).innerHTML = formatNumber(item.day3Result);
        row.insertCell(6).innerHTML = formatNumber(item.day4Result);
        row.insertCell(7).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 6; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const headers = document.querySelectorAll('#resultsTableElement th');
    if (hideExtraColumns) {
        for (let i = 2; i <= 6; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else {
        for (let i = 2; i <= 6; i++) {
            if (headers[i]) headers[i].style.display = '';
        }
    }
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// ========== ПОИСК ==========

function performSearch() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'huntingNominations') fillHuntingNominationsTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    
    const ratingData = getRatingData();
    const allPlayers = [...new Set([
        ...previousTournamentResults,
        ...ratingData.map(p => p.name),
        ...huntingData.map(p => p.name),
        ...day1Data.map(p => p.name)
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
        'previousResults': 'Результаты ВЭЛЬЮ БЕТА 3/4',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 21.05.2026',
        'day2': '2 день - 28.05.2026',
        'day3': '3 день - 4.06.2026',
        'day4': '4 день - 11.06.2026',
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
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'tournamentResults') fillTournamentResultsTable();
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
    
    if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    const button = document.querySelector('.expand-button');
    if (button) button.textContent = 'Развернуть таблицу';
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete();
    showTab('day1');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
    
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && (activeTab.id === 'rating' || activeTab.id === 'day1' || activeTab.id === 'tournamentResults')) {
            if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        }
    });
});
