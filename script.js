// ========== ДАННЫЕ ==========

// Результаты Турнира Билли Джонсона 3-5
const previousTournamentResults = [
    "Богдан А", "Семён Ануфриев", "Никита Зейн", "Саша Коч", "Лиза Арц",
    "Даша Хромова", "Петя Федоров", "Влад Сам", "Михаил Козадой", "Егор АА 11",
    "Шурик Шилкин", "Полина Матыцына", "Jane 007", "Ирина Ага", "Кристина А",
    "Егор Вино", "Соня Серж", "Вова Гриненко", "Даниил Ершов", "Неопознанный утконос",
    "Максим Spy", "Леша Ч", "Артём SUB", "Сергей Ман", "Роман Лод",
    "Макар Аве", "Андрей М", "Стас ISK", "Ксюша Лис", "Дмитрий Ник",
    "Матвей МС", "Влад Пив", "Аня Жук", "Немощь", "Даниил С",
    "Константин Т", "Всеволод Кузнецов", "Михаил Наб", "Влад Владшток", "Игорь Гусь",
    "Иван Тре", "Татьяна Gorman", "Даша Лев", "Стас Мазепа", "Саша Бел",
    "Том", "Кирилл Лед", "Александр Будда", "Надя Котик"
];

// Данные 1 дня
const day1Data = [
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 0, exit: 28010, fund: 4000, total: 34010 },
    { name: "Лиза Арц", entry: 4100, start: 2100, extra: 0, exit: 17140, fund: 4000, total: 23140 },
    { name: "Вова Баж", entry: 4100, start: 2100, extra: 0, exit: 9965, fund: 4000, total: 15965 },
    { name: "Кристина А", entry: 4100, start: 2100, extra: 0, exit: 9615, fund: 4000, total: 15615 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 0, exit: 8585, fund: 4000, total: 14585 },
    { name: "Семён Ануфриев", entry: 4100, start: 2100, extra: 2000, exit: 12505, fund: 2000, total: 14505 },
    { name: "Федор К", entry: 4100, start: 2100, extra: 0, exit: 7900, fund: 4000, total: 13900 },
    { name: "Стас ISK", entry: 4100, start: 2100, extra: 2000, exit: 9830, fund: 2000, total: 11830 },
    { name: "Евгений Ц", entry: 4100, start: 2100, extra: 0, exit: 2920, fund: 4000, total: 8920 },
    { name: "Даниил Ершов", entry: 4100, start: 2100, extra: 0, exit: 1945, fund: 4000, total: 7945 },
    { name: "Шурик Шилкин", entry: 4100, start: 2100, extra: 0, exit: 1940, fund: 4000, total: 7940 },
    { name: "Вова Гриненко", entry: 4100, start: 2100, extra: 2000, exit: 3460, fund: 2000, total: 5460 },
    { name: "Егор Вино", entry: 4100, start: 2100, extra: 2000, exit: 2000, fund: 2000, total: 4000 },
    { name: "Даша Хромова", entry: 4100, start: 2100, extra: 2000, exit: 1510, fund: 2000, total: 3510 },
    { name: "Дмитрий Ник", entry: 4100, start: 2100, extra: 2000, exit: 675, fund: 2000, total: 2675 },
    { name: "Соня Серж", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "grooveman", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Максим Spy", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Jane 007", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Свидетель", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "муся", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Ирина Ага", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Александр Будда", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Том", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Леонид П", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Coach krotovski", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Саша Коч", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Полина Матыцына", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 },
    { name: "Петя Федоров", entry: 4100, start: 2100, extra: 2000, exit: 0, fund: 0, total: 0 }
];

// Охота за головами
const huntingData = [
    { name: "Богдан А", value: 1500 },
    { name: "Никита Зейн", value: 1300 },
    { name: "Егор АА 11", value: 1200 },
    { name: "Кирилл Лед", value: 1150 },
    { name: "Семён Ануфриев", value: 1000 },
    { name: "Шурик Шилкин", value: 1000 },
    { name: "Михаил Наб", value: 800 },
    { name: "Михаил Козадой", value: 800 },
    { name: "Вова Гриненко", value: 700 },
    { name: "Роман Лод", value: 600 },
    { name: "Макар Аве", value: 600 },
    { name: "Егор Вино", value: 600 },
    { name: "Кристина А", value: 600 },
    { name: "Jane 007", value: 550 },
    { name: "Полина Матыцына", value: 400 },
    { name: "Саша Коч", value: 400 },
    { name: "Влад Владшток", value: 400 },
    { name: "Немощь", value: 400 },
    { name: "Robert Юниксфактёр", value: 400 },
    { name: "Том", value: 400 },
    { name: "Coach krotovski", value: 300 },
    { name: "grooveman", value: 300 },
    { name: "Максим Spy", value: 300 },
    { name: "Лиза Арц", value: 300 },
    { name: "Свидетель", value: 300 }
];

// Рейтинг до 1 дня
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1391, attendance: 35 },
    { name: "Семён Ануфриев", rating: 1201, attendance: 31 },
    { name: "Никита Зейн", rating: 1187, attendance: 25 },
    { name: "Егор АА 11", rating: 1160, attendance: 32 },
    { name: "Jane 007", rating: 1104, attendance: 30 },
    { name: "Шурик Шилкин", rating: 984, attendance: 35 },
    { name: "Михаил Наб", rating: 944, attendance: 20 },
    { name: "Полина Матыцына", rating: 857, attendance: 27 },
    { name: "Саша Коч", rating: 810, attendance: 23 },
    { name: "Михаил Козадой", rating: 809, attendance: 23 },
    { name: "Роман Лод", rating: 791, attendance: 26 },
    { name: "Coach krotovski", rating: 758, attendance: 13 },
    { name: "grooveman", rating: 757, attendance: 14 },
    { name: "Макар Аве", rating: 744, attendance: 26 },
    { name: "Максим Spy", rating: 729, attendance: 30 },
    { name: "Егор Вино", rating: 727, attendance: 20 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Немощь", rating: 681, attendance: 18 },
    { name: "Кристина А", rating: 675, attendance: 17 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Соня Серж", rating: 651, attendance: 25 },
    { name: "Даша Хромова", rating: 651, attendance: 20 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Ирина Ага", rating: 616, attendance: 11 },
    { name: "Артём SUB", rating: 608, attendance: 11 },
    { name: "Дмитрий Ник", rating: 604, attendance: 15 },
    { name: "Надя Жб", rating: 521, attendance: 14 },
    { name: "Матвей МС", rating: 492, attendance: 13 },
    { name: "Лиза Арц", rating: 477, attendance: 7 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Стас ISK", rating: 449, attendance: 15 },
    { name: "Леонид П", rating: 425, attendance: 7 },
    { name: "муся", rating: 404, attendance: 8 },
    { name: "Том", rating: 381, attendance: 18 },
    { name: "Андрей Фломастер", rating: 367, attendance: 12 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Неопознанный утконос", rating: 333, attendance: 5 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Саша Бел", rating: 311, attendance: 6 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Петя Федоров", rating: 301, attendance: 3 },
    { name: "Евгений Ц", rating: 298, attendance: 8 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Саша Тяжелов", rating: 251, attendance: 4 },
    { name: "Даниил Ершов", rating: 250, attendance: 7 },
    { name: "Всеволод Кузнецов", rating: 247, attendance: 5 },
    { name: "Федор К", rating: 242, attendance: 7 },
    { name: "Вова Баж", rating: 235, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Ксюша Лис", rating: 211, attendance: 3 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Анна К", rating: 166, attendance: 5 },
    { name: "Мария Павлова", rating: 165, attendance: 3 },
    { name: "Вова Гриненко", rating: 156, attendance: 4 },
    { name: "Иван Баж", rating: 150, attendance: 4 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Аня Жук", rating: 104, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Александр Будда", rating: 95, attendance: 4 },
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
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Стас Мазепа", rating: 47, attendance: 2 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Надя Котик", rating: 42, attendance: 2 },
    { name: "Даня Гол", rating: 42, attendance: 1 },
    { name: "Николя", rating: 41, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Георгий С", rating: 39, attendance: 1 },
    { name: "Илья Сус", rating: 38, attendance: 1 },
    { name: "ая?", rating: 36, attendance: 1 },
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
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Даша Лев", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Никита Башкин", rating: 25, attendance: 1 },
    { name: "Кирилл Лед", rating: 24, attendance: 1 },
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
    { name: "Арт", rating: 18, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Маша Сот", rating: 17, attendance: 1 },
    { name: "Игорь Петр", rating: 16, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Рашад", rating: 15, attendance: 1 },
    { name: "Александр Гиг", rating: 13, attendance: 1 }
];

// Добавки после 1 дня
const ratingAdditionsAfterDay1 = [
    { name: "Coach krotovski", addition: 0 },
    { name: "grooveman", addition: 11 },
    { name: "Jane 007", addition: 0 },
    { name: "Александр Будда", addition: 26 },
    { name: "Артём SUB", addition: 30 },
    { name: "Богдан А", addition: 0 },
    { name: "Вова Баж", addition: 74 },
    { name: "Вова Гриненко", addition: 37 },
    { name: "Даниил Ершов", addition: 41 },
    { name: "Даша Хромова", addition: 1 },
    { name: "Дмитрий Ник", addition: 3 },
    { name: "Евгений Ц", addition: 43 },
    { name: "Егор Вино", addition: 2 },
    { name: "Ирина Ага", addition: 27 },
    { name: "Кирилл Лед", addition: 128 },
    { name: "Кристина А", addition: 36 },
    { name: "Леонид П", addition: 25 },
    { name: "Лиза Арц", addition: 91 },
    { name: "Максим Spy", addition: 0 },
    { name: "муся", addition: 27 },
    { name: "Петя Федоров", addition: 23 },
    { name: "Полина Матыцына", addition: 0 },
    { name: "Саша Коч", addition: 0 },
    { name: "Свидетель", addition: 28 },
    { name: "Семён Ануфриев", addition: 0 },
    { name: "Соня Серж", addition: 0 },
    { name: "Стас ISK", addition: 24 },
    { name: "Том", addition: 7 },
    { name: "Федор К", addition: 49 },
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

// Результаты Турнира Билли Джонсона 3-5
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
        } else if (realPosition >= 4 && realPosition <= 28) {
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
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realPosition = sortedDay1Data.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);
        row.insertCell(6).innerHTML = formatNumber(item.fund);
        row.insertCell(7).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 6; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#day1TableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 6; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 6; i++) {
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

// День 3 - пустое сообщение
function fillDay3Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// День 4 - пустое сообщение
function fillDay4Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// Финал
function fillFinalTable() {
    const tbody = document.getElementById('finalTable');
    if (!tbody) return;
    
    // Собираем данные из 1 дня
    const results = day1Data.map(p => ({
        name: p.name,
        day1Result: p.total,
        day2Result: 0,
        day3Result: 0,
        day4Result: 0,
        total: p.total + 0 + 0 + 0
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
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item, idx) => {
        const realPosition = results.findIndex(r => r.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.day1Result);
        row.insertCell(3).innerHTML = formatNumber(item.day2Result);
        row.insertCell(4).innerHTML = formatNumber(item.day3Result);
        row.insertCell(5).innerHTML = formatNumber(item.day4Result);
        row.insertCell(6).innerHTML = formatNumber(item.total);
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
    
    const totalSum = results.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / results.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
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
    else if (activeTab.id === 'day4') fillDay4Table();
    else if (activeTab.id === 'final') fillFinalTable();
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
        'previousResults': 'Результаты Турнира Билли Джонсона 3-5',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 09.07.2026',
        'day2': '2 день - 16.07.2026',
        'day3': '3 день - 23.07.2026',
        'day4': '4 день - 30.07.2026',
        'final': 'Финал - 01.08.2026'
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
    else if (tabName === 'day4') fillDay4Table();
    else if (tabName === 'final') fillFinalTable();
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
    
    if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'rating') fillRatingTable();
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
        if (activeTab && (activeTab.id === 'day1' || activeTab.id === 'rating')) {
            if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'rating') fillRatingTable();
        }
    });
});
