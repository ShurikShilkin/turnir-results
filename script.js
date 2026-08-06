// ========== ДАННЫЕ ==========

// Результаты Турнир Джимми Саммерфилда 3-6
const previousTournamentResults = [
    { name: "Роман Лод", place: 1, status: "Победитель 🥇" },
    { name: "Саша Коч", place: 2, status: "Серебряный призер 🥈" },
    { name: "Полина Матыцына", place: 3, status: "Бронзовый призер 🥉" },
    { name: "Пётр С", place: 4, status: "Участник финала" },
    { name: "Вова Гриненко", place: 5, status: "Участник финала" },
    { name: "Jane007", place: 6, status: "Участник финала" },
    { name: "Шурик Шилкин", place: 7, status: "Участник финала" },
    { name: "Кирилл Лед", place: 8, status: "Участник финала" },
    { name: "Михаил Наб", place: 9, status: "Участник финала" },
    { name: "Ирина Ага", place: 10, status: "Участник финала" },
    { name: "Кристина А", place: 11, status: "Участник финала" },
    { name: "Богдан А", place: 12, status: "Участник финала" },
    { name: "Михаил Козадой", place: 13, status: "Участник финала" },
    { name: "Даша Хромова", place: 14, status: "Участник финала" },
    { name: "Неопознанный утконос", place: 15, status: "Участник финала" },
    { name: "Стас ISK", place: 16, status: "Участник финала" },
    { name: "Даниил Ершов", place: 17, status: "Участник финала" },
    { name: "Соня Серж", place: 18, status: "Участник финала" },
    { name: "Никита Зейн", place: 19, status: "Участник финала" },
    { name: "Роман Г", place: 20, status: "Участник финала" },
    { name: "Николай Шар", place: 21, status: "Участник финала" },
    { name: "Coach krotovski", place: 22, status: "Участник финала" },
    { name: "Артём SUB", place: 23, status: "Участник финала" },
    { name: "Егор Вино", place: 24, status: "Участник финала" },
    { name: "Ксюша Лис", place: 25, status: "Участник финала" },
    { name: "Александр Будда", place: 26, status: "Участник финала" },
    { name: "Радмир Г", place: 27, status: "Участник финала" },
    { name: "Алёна Ф", place: 28, status: "Участник турнира" },
    { name: "Лиза Арц", place: 29, status: "Участник турнира" },
    { name: "Вова Баж", place: 30, status: "Участник турнира" },
    { name: "Федор К", place: 31, status: "Участник турнира" },
    { name: "Семён Ануфриев", place: 32, status: "Участник турнира" },
    { name: "Катя В", place: 33, status: "Участник турнира" },
    { name: "Надя И", place: 34, status: "Участник турнира" },
    { name: "Евгений Ц", place: 35, status: "Участник турнира" },
    { name: "Аня Жук", place: 36, status: "Участник турнира" },
    { name: "Настя Буд", place: 37, status: "Участник турнира" },
    { name: "Матвей Пригожий", place: 38, status: "Участник турнира" },
    { name: "Зеньята", place: 39, status: "Участник турнира" },
    { name: "Дмитрий Ник", place: 40, status: "Участник турнира" },
    { name: "Ульяна Ану", place: 41, status: "Участник турнира" },
    { name: "Петя Федоров", place: 42, status: "Участник турнира" },
    { name: "Егор АА11", place: 43, status: "Участник турнира" },
    { name: "Том", place: 44, status: "Участник турнира" },
    { name: "Леонид П", place: 45, status: "Участник турнира" },
    { name: "муся", place: 46, status: "Участник турнира" },
    { name: "Максим Spy", place: 47, status: "Участник турнира" },
    { name: "grooveman", place: 48, status: "Участник турнира" },
    { name: "Свидетель", place: 49, status: "Участник турнира" },
    { name: "Андрей Фломастер", place: 50, status: "Участник турнира" },
    { name: "Арт", place: 51, status: "Участник турнира" },
    { name: "Надя Котик", place: 52, status: "Участник турнира" },
    { name: "Глеб Витязь", place: 53, status: "Участник турнира" },
    { name: "Лиза О", place: 54, status: "Участник турнира" },
    { name: "Лера Ким", place: 55, status: "Участник турнира" }
];

// Охота за головами
const huntingData = [
    { name: "Богдан А", value: 1500 },
    { name: "Никита Зейн", value: 1400 },
    { name: "Семён Ануфриев", value: 1300 },
    { name: "Jane007", value: 1200 },
    { name: "Егор АА11", value: 1100 },
    { name: "Роман Лод", value: 1000 },
    { name: "Михаил Наб", value: 800 },
    { name: "Шурик Шилкин", value: 800 },
    { name: "Полина Матыцына", value: 800 },
    { name: "Саша Коч", value: 800 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Егор Вино", value: 600 },
    { name: "Coach krotovski", value: 600 },
    { name: "Кристина А", value: 600 },
    { name: "grooveman", value: 600 },
    { name: "Ирина Ага", value: 400 },
    { name: "Макар Аве", value: 400 },
    { name: "Максим Spy", value: 400 },
    { name: "Влад Владшток", value: 400 },
    { name: "Артём SUB", value: 400 }
];

// Рейтинг до финала
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1391, attendance: 39 },
    { name: "Никита Зейн", rating: 1210, attendance: 27 },
    { name: "Семён Ануфриев", rating: 1201, attendance: 34 },
    { name: "Егор АА 11", rating: 1160, attendance: 34 },
    { name: "Jane 007", rating: 1104, attendance: 33 },
    { name: "Михаил Наб", rating: 991, attendance: 23 },
    { name: "Шурик Шилкин", rating: 984, attendance: 39 },
    { name: "Михаил Козадой", rating: 895, attendance: 26 },
    { name: "Полина Матыцына", rating: 881, attendance: 31 },
    { name: "Роман Лод", rating: 865, attendance: 29 },
    { name: "Саша Коч", rating: 840, attendance: 27 },
    { name: "Егор Вино", rating: 824, attendance: 24 },
    { name: "Coach krotovski", rating: 773, attendance: 15 },
    { name: "grooveman", rating: 768, attendance: 15 },
    { name: "Макар Аве", rating: 744, attendance: 26 },
    { name: "Максим Spy", rating: 729, attendance: 31 },
    { name: "Кристина А", rating: 719, attendance: 21 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Ирина Ага", rating: 700, attendance: 14 },
    { name: "Немощь", rating: 681, attendance: 18 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Артём SUB", rating: 663, attendance: 15 },
    { name: "Даша Хромова", rating: 652, attendance: 23 },
    { name: "Соня Серж", rating: 651, attendance: 29 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Лиза Арц", rating: 598, attendance: 9 },
    { name: "Надя Жб", rating: 521, attendance: 14 },
    { name: "Стас ISK", rating: 509, attendance: 17 },
    { name: "Матвей Пригожий", rating: 504, attendance: 14 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Леонид П", rating: 450, attendance: 8 },
    { name: "муся", rating: 431, attendance: 9 },
    { name: "Том", rating: 388, attendance: 19 },
    { name: "Андрей Фломастер", rating: 373, attendance: 13 },
    { name: "Неопознанный утконос", rating: 362, attendance: 6 },
    { name: "Свидетель", rating: 353, attendance: 9 },
    { name: "Петя Федоров", rating: 353, attendance: 5 },
    { name: "Вова Баж", rating: 350, attendance: 7 },
    { name: "Евгений Ц", rating: 341, attendance: 9 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Саша Бел", rating: 311, attendance: 6 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Ксюша Лис", rating: 295, attendance: 6 },
    { name: "Даниил Ершов", rating: 291, attendance: 8 },
    { name: "Федор К", rating: 291, attendance: 8 },
    { name: "Вова Гриненко", rating: 284, attendance: 7 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Кирилл Лед", rating: 257, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Саша Тяжелов", rating: 251, attendance: 4 },
    { name: "Всеволод Кузнецов", rating: 247, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Анна К", rating: 166, attendance: 5 },
    { name: "Мария Павлова", rating: 165, attendance: 3 },
    { name: "Алёна Ф", rating: 155, attendance: 2 },
    { name: "Иван Баж", rating: 150, attendance: 4 },
    { name: "Александр Будда", rating: 149, attendance: 6 },
    { name: "Аня Жук", rating: 142, attendance: 4 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Зеньята", rating: 135, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Пётр С", rating: 117, attendance: 2 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
    { name: "Паша Веля", rating: 93, attendance: 1 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Илья Midas", rating: 75, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Надя Котик", rating: 67, attendance: 3 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Артём Акулов", rating: 61, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Леша Ч", rating: 60, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Влад Пив", rating: 59, attendance: 1 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Артур Король", rating: 57, attendance: 1 },
    { name: "Илья Хом", rating: 57, attendance: 1 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Ся Ся", rating: 56, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Дмитрий Шки", rating: 55, attendance: 1 },
    { name: "Надя И", rating: 54, attendance: 1 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Катя В", rating: 49, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Стас Мазепа", rating: 47, attendance: 2 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Арт", rating: 42, attendance: 2 },
    { name: "Даня Гол", rating: 42, attendance: 1 },
    { name: "Николя", rating: 41, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Георгий С", rating: 39, attendance: 1 },
    { name: "Илья Сус", rating: 38, attendance: 1 },
    { name: "ая?", rating: 36, attendance: 1 },
    { name: "Настя Буд", rating: 36, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Многолапый", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Даниил С", rating: 30, attendance: 1 },
    { name: "Игорь Гусь", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Константин Т", rating: 29, attendance: 1 },
    { name: "Татьяна Gorman", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Ульяна Ану", rating: 28, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Даша Лев", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Лиза О", rating: 27, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Никита Башкин", rating: 25, attendance: 1 },
    { name: "Лера Ким", rating: 24, attendance: 1 },
    { name: "Глеб Витязь", rating: 24, attendance: 1 },
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
    { name: "Ксюша Пок", rating: 19, attendance: 1 },
    { name: "Лина S", rating: 19, attendance: 1 },
    { name: "Рита Мак", rating: 19, attendance: 1 },
    { name: "Слава П", rating: 19, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Маша Сот", rating: 17, attendance: 1 },
    { name: "Игорь Петр", rating: 16, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Рашад", rating: 15, attendance: 1 },
    { name: "Александр Гиг", rating: 13, attendance: 1 }
];

// Добавки после финала
const ratingAdditionsAfterFinal = [
    { name: "Coach krotovski", addition: 32 },
    { name: "Jane 007", addition: 64 },
    { name: "Александр Будда", addition: 54 },
    { name: "Артём SUB", addition: 32 },
    { name: "Богдан А", addition: 19 },
    { name: "Вова Гриненко", addition: 123 },
    { name: "Даниил Ершов", addition: 67 },
    { name: "Даша Хромова", addition: 39 },
    { name: "Егор Вино", addition: 17 },
    { name: "Ирина Ага", addition: 66 },
    { name: "Кирилл Лед", addition: 97 },
    { name: "Кристина А", addition: 50 },
    { name: "Ксюша Лис", addition: 55 },
    { name: "Михаил Козадой", addition: 34 },
    { name: "Михаил Наб", addition: 62 },
    { name: "Неопознанный утконос", addition: 71 },
    { name: "Никита Зейн", addition: 0 },
    { name: "Николай Шар", addition: 60 },
    { name: "Пётр С", addition: 137 },
    { name: "Полина Матыцына", addition: 120 },
    { name: "Радмир Г", addition: 53 },
    { name: "Роман Г", addition: 61 },
    { name: "Роман Лод", addition: 228 },
    { name: "Саша Коч", addition: 149 },
    { name: "Соня Серж", addition: 32 },
    { name: "Стас ISK", addition: 47 },
    { name: "Шурик Шилкин", addition: 51 }
];

// Множество игроков, которые участвовали в финале
const finalPlayersSet = new Set(ratingAdditionsAfterFinal.map(p => p.name));

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
    const additionMap = new Map(ratingAdditionsAfterFinal.map(p => [p.name, p.addition]));
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
            playedInFinal: additionMap.has(p.name)
        });
    });
    
    ratingAdditionsAfterFinal.forEach(add => {
        if (!beforeMap.has(add.name)) {
            result.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition,
                playedInFinal: true
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
        } else if (p.change === 0 && p.playedInFinal === true) {
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

// Результаты Турнир Джимми Саммерфилда 3-6
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
    
    filteredData.forEach((item) => {
        let rowClass = '';
        if (item.place === 1) rowClass = 'final-gold';
        else if (item.place === 2) rowClass = 'final-silver';
        else if (item.place === 3) rowClass = 'final-bronze';
        else if (item.place >= 4 && item.place <= 27) rowClass = 'final-finalist';
        else rowClass = 'final-participant';
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = item.place;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = item.place;
        row.insertCell(3).innerHTML = item.status;
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

// День 1 - пустое сообщение
function fillDay1Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// День 2 - пустое сообщение
function fillDay2Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// День 3 - пустое сообщение
function fillDay3Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// Финал - пустое сообщение
function fillFinalTable() {
    document.getElementById('totalPlayers').textContent = 0;
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
    else if (activeTab.id === 'day3') fillDay3Table();
    else if (activeTab.id === 'final') fillFinalTable();
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
        'previousResults': 'Результаты Турнир Джимми Саммерфилда 3-6',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 06.08.2026',
        'day2': '2 день - 13.08.2026',
        'day3': '3 день - 20.08.2026',
        'final': 'Финал - 22.08.2026'
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
    else if (tabName === 'day3') fillDay3Table();
    else if (tabName === 'final') fillFinalTable();
}

// ========== РАЗВЕРТЫВАНИЕ ТАБЛИЦЫ ==========

function toggleTableExpand() {
    // Функция не делает ничего, так как таблиц с данными нет
}

function resetTableExpand() {
    // Функция не делает ничего
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
