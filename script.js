// ========== ДАННЫЕ ==========

// Результаты Туза Лета 2026
const previousTournamentResults = [
    "Егор АА 11", "Полина Матыцына", "Богдан А", "Роман Лод", "Шурик Шилкин",
    "Макар Аве", "Соня Серж", "Артём SUB", "Саша Бел", "Паша Веля",
    "Влад Сам", "Егор Вино", "Стас ISK", "Серж", "Даша Хромова",
    "Семён Ануфриев", "Ирина Ага", "Саша Коч", "Лиза Арц", "Влад Владшток",
    "Иван Тре", "Кристина А", "Андрей М", "Никита Yellow", "Немощь",
    "Михаил Крю", "Илья Хом", "Jane 007", "Дмитрий Шки", "Саша Тяжелов",
    "Никита Зейн"
];

// Данные 1 дня
const day1Data = [
    { name: "Никита Зейн", entry: 3000, extra: 0, exit: 21285, total: 26285 },
    { name: "Ксюша Лис", entry: 3000, extra: 5000, exit: 23120, total: 23120 },
    { name: "Соня Серж", entry: 3000, extra: 0, exit: 11900, total: 16900 },
    { name: "Jane 007", entry: 3000, extra: 0, exit: 10825, total: 15825 },
    { name: "Кристина А", entry: 3000, extra: 0, exit: 10625, total: 15625 },
    { name: "Богдан А", entry: 3000, extra: 0, exit: 9860, total: 14860 },
    { name: "Шурик Шилкин", entry: 3000, extra: 0, exit: 8850, total: 13850 },
    { name: "Максим Spy", entry: 3000, extra: 0, exit: 8345, total: 13345 },
    { name: "Матвей МС", entry: 3000, extra: 5000, exit: 13155, total: 13155 },
    { name: "Егор АА 11", entry: 3000, extra: 0, exit: 7940, total: 12940 },
    { name: "Дмитрий Ник", entry: 3000, extra: 0, exit: 5785, total: 10785 },
    { name: "Неопознанный утконос", entry: 3000, extra: 5000, exit: 9235, total: 9235 },
    { name: "Михаил Козадой", entry: 3000, extra: 0, exit: 1665, total: 6665 },
    { name: "Даша Хромова", entry: 3000, extra: 0, exit: 1605, total: 6605 },
    { name: "Егор Вино", entry: 3000, extra: 0, exit: 1565, total: 6565 },
    { name: "Полина Матыцына", entry: 3000, extra: 0, exit: 1350, total: 6350 },
    { name: "Вова Гриненко", entry: 3000, extra: 5000, exit: 6325, total: 6325 },
    { name: "Макар Аве", entry: 3000, extra: 0, exit: 1245, total: 6245 },
    { name: "Даниил С", entry: 3000, extra: 0, exit: 930, total: 5930 },
    { name: "Немощь", entry: 3000, extra: 0, exit: 880, total: 5880 },
    { name: "Константин Т", entry: 3000, extra: 0, exit: 645, total: 5645 },
    { name: "Всеволод Кузнецов", entry: 3000, extra: 5000, exit: 5455, total: 5455 },
    { name: "Михаил Наб", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Саша Коч", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Влад Владшток", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Сергей Ман", entry: 3000, extra: 5000, exit: 4315, total: 4315 },
    { name: "Ирина Ага", entry: 3000, extra: 5000, exit: 4160, total: 4160 },
    { name: "Артём SUB", entry: 3000, extra: 5000, exit: 2035, total: 2035 },
    { name: "Том", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Андрей М", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Семён Ануфриев", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Стас ISK", entry: 3000, extra: 5000, exit: 0, total: 0 }
];

// Охота за головами
const huntingData = [
    { name: "Никита Зейн", value: 1900 },
    { name: "Богдан А", value: 1500 },
    { name: "Jane007", value: 1300 },
    { name: "Матвей МС", value: 1300 },
    { name: "Егор АА11", value: 1200 },
    { name: "Шурик Шилкин", value: 1100 },
    { name: "Полина Матыцына", value: 800 },
    { name: "Роман Лод", value: 800 },
    { name: "grooveman", value: 800 },
    { name: "Семён Ануфриев", value: 700 },
    { name: "Макар Аве", value: 600 },
    { name: "Robert Юниксфактёр", value: 600 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Михаил Наб", value: 500 },
    { name: "Максим Spy", value: 400 },
    { name: "Егор Вино", value: 400 },
    { name: "Влад Сам", value: 400 },
    { name: "Немощь", value: 400 },
    { name: "Кристина А", value: 400 },
    { name: "Влад Владшток", value: 300 },
    { name: "Саша Коч", value: 300 }
];

// Рейтинг до 1 дня
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1166, attendance: 32 },
    { name: "Егор АА 11", rating: 1104, attendance: 29 },
    { name: "Семён Ануфриев", rating: 1060, attendance: 28 },
    { name: "Jane 007", rating: 1044, attendance: 28 },
    { name: "Никита Зейн", rating: 993, attendance: 22 },
    { name: "Шурик Шилкин", rating: 951, attendance: 32 },
    { name: "Михаил Наб", rating: 941, attendance: 19 },
    { name: "Полина Матыцына", rating: 813, attendance: 24 },
    { name: "Роман Лод", rating: 770, attendance: 24 },
    { name: "grooveman", rating: 757, attendance: 14 },
    { name: "Макар Аве", rating: 716, attendance: 23 },
    { name: "Влад Владшток", rating: 714, attendance: 31 },
    { name: "Максим Spy", rating: 702, attendance: 27 },
    { name: "Саша Коч", rating: 701, attendance: 20 },
    { name: "Егор Вино", rating: 683, attendance: 18 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Михаил Козадой", rating: 672, attendance: 20 },
    { name: "Немощь", rating: 663, attendance: 16 },
    { name: "Влад Сам", rating: 610, attendance: 11 },
    { name: "Кристина А", rating: 590, attendance: 14 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Соня Серж", rating: 550, attendance: 22 },
    { name: "Даша Хромова", rating: 540, attendance: 17 },
    { name: "Дмитрий Ник", rating: 524, attendance: 13 },
    { name: "Надя Жб", rating: 521, attendance: 14 },
    { name: "Артём SUB", rating: 488, attendance: 8 },
    { name: "Ирина Ага", rating: 483, attendance: 8 },
    { name: "Матвей МС", rating: 464, attendance: 12 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Леонид П", rating: 425, attendance: 7 },
    { name: "Стас ISK", rating: 389, attendance: 12 },
    { name: "Том", rating: 375, attendance: 17 },
    { name: "Андрей Фломастер", rating: 367, attendance: 12 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Лиза Арц", rating: 304, attendance: 5 },
    { name: "Андрей М", rating: 302, attendance: 5 },
    { name: "Евгений Ц", rating: 298, attendance: 8 },
    { name: "Саша Бел", rating: 285, attendance: 5 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Саша Тяжелов", rating: 251, attendance: 4 },
    { name: "Федор К", rating: 242, attendance: 7 },
    { name: "Вова Баж", rating: 235, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Всеволод Кузнецов", rating: 219, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Неопознанный утконос", rating: 206, attendance: 2 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Анна К", rating: 166, attendance: 5 },
    { name: "Мария Павлова", rating: 165, attendance: 3 },
    { name: "Иван Баж", rating: 150, attendance: 4 },
    { name: "Даниил Ершов", rating: 146, attendance: 5 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Ксюша Лис", rating: 117, attendance: 2 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Паша Веля", rating: 93, attendance: 1 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Иван Тре", rating: 89, attendance: 2 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Илья Midas", rating: 75, attendance: 1 },
    { name: "Александр Будда", rating: 70, attendance: 3 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Артём Акулов", rating: 61, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Артур Король", rating: 57, attendance: 1 },
    { name: "Илья Хом", rating: 57, attendance: 1 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Ся Ся", rating: 56, attendance: 1 },
    { name: "Дмитрий Шки", rating: 55, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Аня Жук", rating: 53, attendance: 2 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Даня Гол", rating: 42, attendance: 1 },
    { name: "Николя", rating: 41, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Георгий С", rating: 39, attendance: 1 },
    { name: "Илья Сус", rating: 38, attendance: 1 },
    { name: "ая?", rating: 36, attendance: 1 },
    { name: "Многолапый", rating: 35, attendance: 1 },
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
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Никита Башкин", rating: 25, attendance: 1 },
    { name: "София Например", rating: 24, attendance: 1 },
    { name: "Анастасия Ан", rating: 23, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 },
    { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 },
    { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 },
    { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Ольга Б", rating: 22, attendance: 1 },
    { name: "Света Туся", rating: 22, attendance: 1 },
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
    { name: "Ксюша Пок", rating: 19, attendance: 1 },
    { name: "Лина S", rating: 19, attendance: 1 },
    { name: "Рита Мак", rating: 19, attendance: 1 },
    { name: "Слава П", rating: 19, attendance: 1 },
    { name: "Арт", rating: 18, attendance: 1 },
    { name: "Надя Котик", rating: 18, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Маша Сот", rating: 17, attendance: 1 },
    { name: "Игорь Петр", rating: 16, attendance: 1 },
    { name: "Рашад", rating: 15, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 },
    { name: "Александр Гиг", rating: 13, attendance: 1 }
];

// Добавки после 1 дня
const ratingAdditionsAfterDay1 = [
    { name: "Jane 007", addition: 25 },
    { name: "Андрей М", addition: 24 },
    { name: "Артём SUB", addition: 25 },
    { name: "Богдан А", addition: 0 },
    { name: "Влад Владшток", addition: 0 },
    { name: "Вова Гриненко", addition: 32 },
    { name: "Всеволод Кузнецов", addition: 28 },
    { name: "Даниил С", addition: 30 },
    { name: "Даша Хромова", addition: 9 },
    { name: "Дмитрий Ник", addition: 20 },
    { name: "Егор АА 11", addition: 9 },
    { name: "Егор Вино", addition: 5 },
    { name: "Ирина Ага", addition: 26 },
    { name: "Константин Т", addition: 29 },
    { name: "Кристина А", addition: 39 },
    { name: "Ксюша Лис", addition: 94 },
    { name: "Макар Аве", addition: 0 },
    { name: "Максим Spy", addition: 7 },
    { name: "Матвей МС", addition: 28 },
    { name: "Михаил Козадой", addition: 7 },
    { name: "Михаил Наб", addition: 3 },
    { name: "Немощь", addition: 7 },
    { name: "Неопознанный утконос", addition: 38 },
    { name: "Никита Зейн", addition: 85 },
    { name: "Полина Матыцына", addition: 0 },
    { name: "Саша Коч", addition: 0 },
    { name: "Семён Ануфриев", addition: 0 },
    { name: "Сергей Ман", addition: 26 },
    { name: "Соня Серж", addition: 52 },
    { name: "Стас ISK", addition: 10 },
    { name: "Том", addition: 6 },
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
    
    // На мобиле без развёртывания скрываем колонки с индексами 2-5 (▲▼, Пред. рейтинг, Посещения, +/-)
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
        
        // На мобиле без развёртывания скрываем колонки 2-5 (индексы 2,3,4,5)
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    // Скрываем заголовки на мобиле
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

// Результаты Туза Лета 2026
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
    
    const sortedDay1Data = [...day1Data].sort((a, b) => b.total - a.total);
    
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
    // На мобиле без развёртывания скрываем колонки с индексами 2-3 (Участие, Добор)
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
        row.insertCell(5).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    // Скрываем заголовки на мобиле
    const thead = document.querySelector('#day1TableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 4; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 4; i++) {
            if (headers[i]) headers[i].style.display = '';
        }
    }
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
    
    const totalSum = day1Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day1Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// День 2 - пустое сообщение
function fillDay2Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// Финал - пустое сообщение
function fillFinalTable() {
    document.getElementById('totalPlayers').textContent = 0;
}

// Итоги турнира
function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    
    // Собираем данные из 1 дня
    const results = day1Data.map(p => ({
        name: p.name,
        day1Result: p.exit,
        day2Result: 0,
        extra: p.extra === 0 ? 5000 : 0,
        total: p.exit + 0 + (p.extra === 0 ? 5000 : 0)
    })).sort((a, b) => b.total - a.total);
    
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
    
    const mobile = isMobile();
    const table = document.getElementById('resultsTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    // На мобиле без развёртывания скрываем колонки с индексами 2-4 (1 день, 2 день, Добор)
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item, idx) => {
        const realPosition = results.findIndex(r => r.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.day1Result);
        row.insertCell(3).innerHTML = formatNumber(item.day2Result);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    // Скрываем заголовки на мобиле
    const thead = document.querySelector('#resultsTableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 4; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 4; i++) {
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
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'final') fillFinalTable();
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
        'previousResults': 'Результаты Туза Лета 2026',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 25.06.2026',
        'day2': '2 день - 02.07.2026',
        'final': 'Финал - 04.07.2026',
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
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'final') fillFinalTable();
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
    
    // Перерисовываем активную таблицу после изменения состояния
    if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'rating') fillRatingTable();
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
        if (activeTab && (activeTab.id === 'day1' || activeTab.id === 'rating' || activeTab.id === 'tournamentResults')) {
            if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        }
    });
});
