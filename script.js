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

// Данные 1 дня
const day1Data = [
    { name: "Макар Аве", participation: 3100, start: 2100, extra: 0, exit: 10650, win: 11650, finalParticipation: 1000, dealer: 400, finalChips: 6400, total: 7800 },
    { name: "Егор Вино", participation: 3100, start: 2100, extra: 0, exit: 13975, win: 14975, finalParticipation: 1000, dealer: 0, finalChips: 6600, total: 7600 },
    { name: "Влад Сам", participation: 3100, start: 2100, extra: 0, exit: 9785, win: 10785, finalParticipation: 1000, dealer: 300, finalChips: 6200, total: 7500 },
    { name: "Семён Ануфриев", participation: 3100, start: 2100, extra: 3000, exit: 24995, win: 22995, finalParticipation: 1000, dealer: 300, finalChips: 6800, total: 7100 },
    { name: "SvetLana M", participation: 3100, start: 2100, extra: 0, exit: 8495, win: 9495, finalParticipation: 1000, dealer: 0, finalChips: 6000, total: 7000 },
    { name: "Том", participation: 3100, start: 2100, extra: 0, exit: 7630, win: 8630, finalParticipation: 1000, dealer: 0, finalChips: 5800, total: 6800 },
    { name: "Матвей МС", participation: 3100, start: 2100, extra: 0, exit: 6205, win: 7205, finalParticipation: 1000, dealer: 0, finalChips: 5600, total: 6600 },
    { name: "Стас ISK", participation: 3100, start: 2100, extra: 0, exit: 6040, win: 7040, finalParticipation: 1000, dealer: 0, finalChips: 5400, total: 6400 },
    { name: "Даша Хромова", participation: 4100, start: 3100, extra: 0, exit: 4835, win: 5835, finalParticipation: 1000, dealer: 0, finalChips: 5200, total: 6200 },
    { name: "Дмитрий Ник", participation: 3100, start: 2100, extra: 0, exit: 3755, win: 4755, finalParticipation: 1000, dealer: 0, finalChips: 5000, total: 6000 },
    { name: "Настя К", participation: 3100, start: 2100, extra: 0, exit: 2695, win: 3695, finalParticipation: 1000, dealer: 0, finalChips: 4800, total: 5800 },
    { name: "Михаил Наб", participation: 3100, start: 2100, extra: 0, exit: 2375, win: 3375, finalParticipation: 1000, dealer: 0, finalChips: 4600, total: 5600 },
    { name: "Инна М", participation: 3100, start: 2100, extra: 1000, exit: 2755, win: 2755, finalParticipation: 1000, dealer: 0, finalChips: 4400, total: 5400 },
    { name: "Наташа Алекс", participation: 3100, start: 2100, extra: 0, exit: 920, win: 1920, finalParticipation: 1000, dealer: 0, finalChips: 4200, total: 5200 },
    { name: "Максим Spy", participation: 3100, start: 2100, extra: 0, exit: 490, win: 1490, finalParticipation: 1000, dealer: 300, finalChips: 3800, total: 5100 },
    { name: "Михаил Козадой", participation: 3100, start: 2100, extra: 0, exit: 710, win: 1710, finalParticipation: 1000, dealer: 0, finalChips: 4000, total: 5000 },
    { name: "Jane 007", participation: 3100, start: 2100, extra: 0, exit: 200, win: 1200, finalParticipation: 1000, dealer: 400, finalChips: 3400, total: 4800 },
    { name: "Шурик Шилкин", participation: 3100, start: 2100, extra: 0, exit: 200, win: 1200, finalParticipation: 1000, dealer: 200, finalChips: 3200, total: 4400 },
    { name: "Любовь Т", participation: 3100, start: 2100, extra: 0, exit: 120, win: 1120, finalParticipation: 1000, dealer: 0, finalChips: 2800, total: 3800 },
    { name: "Даниил Ершов", participation: 3100, start: 2100, extra: 3000, exit: 3215, win: 1215, finalParticipation: 1000, dealer: 0, finalChips: 3600, total: 3600 },
    { name: "Соня Серж", participation: 3100, start: 2100, extra: 0, exit: 0, win: 1000, finalParticipation: 1000, dealer: 0, finalChips: 2600, total: 3600 },
    { name: "Егор АА 11", participation: 3100, start: 2100, extra: 1000, exit: 865, win: 865, finalParticipation: 1000, dealer: 0, finalChips: 2200, total: 3200 },
    { name: "Андрей Фломастер", participation: 3100, start: 2100, extra: 3000, exit: 3185, win: 1185, finalParticipation: 1000, dealer: 0, finalChips: 3000, total: 3000 },
    { name: "Данил Г", participation: 3100, start: 2100, extra: 3000, exit: 2955, win: 955, finalParticipation: 1000, dealer: 0, finalChips: 2400, total: 2400 },
    { name: "Саша Коч", participation: 3100, start: 2100, extra: 2000, exit: 0, win: -1000, finalParticipation: 1000, dealer: 0, finalChips: 1800, total: 2300 },
    { name: "Андрей Пот", participation: 3100, start: 2100, extra: 3000, exit: 1850, win: -150, finalParticipation: 1000, dealer: 0, finalChips: 2000, total: 2000 },
    { name: "Влад Владшток", participation: 3100, start: 2100, extra: 2500, exit: 0, win: -1500, finalParticipation: 1000, dealer: 0, finalChips: 1600, total: 1850 },
    { name: "Богдан А", participation: 3100, start: 2100, extra: 3000, exit: 200, win: -1800, finalParticipation: 1000, dealer: 400, finalChips: 1400, total: 1800 },
    { name: "Никита Зейн", participation: 3100, start: 2100, extra: 3000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1200, total: 1200 },
    { name: "Леонид П", participation: 3100, start: 2100, extra: 3000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1000, total: 1000 }
];

// Новая охота за головами
const huntingData = [
    { name: "Семён Ануфриев", value: 1900 },
    { name: "Михаил Наб", value: 1900 },
    { name: "Макар Аве", value: 1000 },
    { name: "grooveman", value: 800 },
    { name: "Robert Юниксфактёр", value: 800 },
    { name: "Михаил Козадой", value: 800 },
    { name: "Богдан А", value: 700 },
    { name: "Jane 007", value: 700 },
    { name: "Максим Spy", value: 600 },
    { name: "Полина Матыцына", value: 600 },
    { name: "Сергей Ман", value: 600 },
    { name: "Шурик Шилкин", value: 500 },
    { name: "Никита Зейн", value: 500 },
    { name: "Том", value: 500 },
    { name: "SvetLana M", value: 500 },
    { name: "Влад Владшток", value: 400 },
    { name: "Саша Коч", value: 400 },
    { name: "Роман Лод", value: 400 },
    { name: "Кристина А", value: 400 },
    { name: "Надя Жб", value: 400 },
    { name: "Егор АА 11", value: 300 },
    { name: "Егор Вино", value: 300 },
    { name: "Соня Серж", value: 200 }
];

// Новый рейтинг до финала (обновленный)
const ratingBeforeFinal = [
    { name: "Семён Ануфриев", rating: 931, attendance: 21 },
    { name: "Михаил Наб", rating: 926, attendance: 14 },
    { name: "Богдан А", rating: 901, attendance: 23 },
    { name: "Шурик Шилкин", rating: 770, attendance: 23 },
    { name: "Никита Зейн", rating: 756, attendance: 15 },
    { name: "grooveman", rating: 749, attendance: 13 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Михаил Козадой", rating: 613, attendance: 16 },
    { name: "Влад Владшток", rating: 606, attendance: 22 },
    { name: "Саша Коч", rating: 603, attendance: 14 },
    { name: "Егор АА 11", rating: 599, attendance: 21 },
    { name: "Максим Spy", rating: 592, attendance: 20 },
    { name: "Полина Матыцына", rating: 591, attendance: 18 },
    { name: "Jane 007", rating: 585, attendance: 20 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Роман Лод", rating: 528, attendance: 17 },
    { name: "Макар Аве", rating: 524, attendance: 15 },
    { name: "Кристина А", rating: 504, attendance: 11 },
    { name: "Соня Серж", rating: 418, attendance: 16 },
    { name: "Надя Жб", rating: 418, attendance: 10 },
    { name: "Настя К", rating: 413, attendance: 9 },
    { name: "Леонид П", rating: 406, attendance: 6 },
    { name: "Влад Сам", rating: 385, attendance: 6 },
    { name: "Немощь", rating: 383, attendance: 8 },
    { name: "Егор Вино", rating: 365, attendance: 9 },
    { name: "Дмитрий Ник", rating: 361, attendance: 9 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Ирина Ага", rating: 309, attendance: 5 },
    { name: "Матвей МС", rating: 293, attendance: 7 },
    { name: "Том", rating: 283, attendance: 11 },
    { name: "Инна М", rating: 278, attendance: 11 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Серж", rating: 260, attendance: 6 },
    { name: "Даша Хромова", rating: 250, attendance: 8 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Федор К", rating: 216, attendance: 6 },
    { name: "Андрей Фломастер", rating: 212, attendance: 7 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Евгений Ц", rating: 167, attendance: 5 },
    { name: "Николай Ж", rating: 167, attendance: 5 },
    { name: "Стас ISK", rating: 130, attendance: 4 },
    { name: "Анна К", rating: 128, attendance: 4 },
    { name: "Саша Тяжелов", rating: 125, attendance: 1 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Ксюша Лис", rating: 117, attendance: 2 },
    { name: "Андрей Морфиус", rating: 117, attendance: 4 },
    { name: "Никита Yellow", rating: 115, attendance: 2 },
    { name: "Саша Бел", rating: 115, attendance: 3 },
    { name: "Лиза Арц", rating: 114, attendance: 2 },
    { name: "Даниил Ершов", rating: 105, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Искандер", rating: 87, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван 112", rating: 78, attendance: 2 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Андрей Пот", rating: 69, attendance: 2 },
    { name: "Иван Баж", rating: 64, attendance: 3 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Вова Баж", rating: 60, attendance: 2 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Вадим Константинов", rating: 51, attendance: 1 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
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
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 },
    { name: "София Например", rating: 24, attendance: 1 },
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
    { name: "Стас Мазепа", rating: 20, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// Добавки после 1 дня
const ratingAdditionsAfterDay1 = [
    { name: "Jane 007", addition: 0 },
    { name: "Андрей Пот", addition: 20 },
    { name: "Андрей Фломастер", addition: 23 },
    { name: "Богдан А", addition: 0 },
    { name: "Влад Владшток", addition: 0 },
    { name: "Влад Сам", addition: 51 },
    { name: "Даниил Ершов", addition: 25 },
    { name: "Даша Хромова", addition: 34 },
    { name: "Дмитрий Ник", addition: 32 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Егор Вино", addition: 72 },
    { name: "Инна М", addition: 28 },
    { name: "Леонид П", addition: 19 },
    { name: "Макар Аве", addition: 30 },
    { name: "Максим Spy", addition: 0 },
    { name: "Матвей МС", addition: 39 },
    { name: "Михаил Козадой", addition: 0 },
    { name: "Михаил Наб", addition: 9 },
    { name: "Настя К", addition: 31 },
    { name: "Никита Зейн", addition: 0 },
    { name: "Саша Коч", addition: 0 },
    { name: "Семён Ануфриев", addition: 77 },
    { name: "Соня Серж", addition: 2 },
    { name: "Стас ISK", addition: 36 },
    { name: "Том", addition: 42 },
    { name: "Шурик Шилкин", addition: 0 },
    { name: "SvetLana M", addition: 46 },
    { name: "Данил Г", addition: 21 },
    { name: "Любовь Т", addition: 22 },
    { name: "Наташа Алекс", addition: 27 }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentSearchTerm = '';

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatNumber(num) {
    if (!num && num !== 0) return '0';
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

// День 1 - С СОРТИРОВКОЙ ПО ВЫИГРЫШУ
function fillDay1Table() {
    const tbody = document.getElementById('day1Table');
    if (!tbody) return;
    
    // СОРТИРУЕМ ПО ВЫИГРЫШУ (ПО УБЫВАНИЮ)
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
        row.insertCell(2).innerHTML = formatNumber(item.participation);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);
        row.insertCell(6).innerHTML = formatNumber(item.win);
        row.insertCell(7).innerHTML = formatNumber(item.finalParticipation);
        row.insertCell(8).innerHTML = formatNumber(item.dealer);
        row.insertCell(9).innerHTML = formatNumber(item.finalChips);
        row.insertCell(10).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 9; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
    
    // Средний стек
    const totalSum = day1Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day1Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Итоги турнира
function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    
    const results = day1Data.map(day1 => ({
        name: day1.name,
        day1Result: day1.total,
        day2Result: 0,
        day3Result: 0,
        total: day1.total
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
        row.insertCell(5).innerHTML = formatNumber(item.total);
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
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = p.name;
        row.insertCell(2).innerHTML = p.place;
        row.insertCell(3).innerHTML = p.status;
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
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.value);
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
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    
    const ratingData = getRatingData();
    const allPlayers = [...new Set([
        ...previousTournamentResults.map(p => p.name),
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
        if (activeTab && (activeTab.id === 'rating' || activeTab.id === 'day1')) {
            if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'day1') fillDay1Table();
        }
    });
});
