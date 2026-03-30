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
    { number: 1, name: "Немощь", entry: 1100, rebuy: 0, exit: 13000, result: 11900 },
    { number: 2, name: "Влад Владшток", entry: 1100, rebuy: 0, exit: 11630, result: 10530 },
    { number: 3, name: "Ирина Ага", entry: 1100, rebuy: 0, exit: 9600, result: 8500 },
    { number: 4, name: "Егор Вино", entry: 1100, rebuy: 3000, exit: 8420, result: 4320 },
    { number: 5, name: "Владибир", entry: 1100, rebuy: 0, exit: 4975, result: 3875 },
    { number: 6, name: "Анна К", entry: 1100, rebuy: 0, exit: 4685, result: 3585 },
    { number: 7, name: "Макар Аве", entry: 1100, rebuy: 4000, exit: 8600, result: 3500 },
    { number: 8, name: "Егор АА 11", entry: 1100, rebuy: 2000, exit: 6295, result: 3195 },
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

// ========== ДАННЫЕ ДНЯ 2 ==========
const day2Players = [
    { number: 1, name: "Богдан А", entry: 1100, rebuy: 2000, exit: 29275, result: 26175 },
    { number: 2, name: "Семён Ануфриев", entry: 1100, rebuy: 5000, exit: 27850, result: 21750 },
    { number: 3, name: "Немощь", entry: 1100, rebuy: 0, exit: 9430, result: 8330 },
    { number: 4, name: "Надя Жб", entry: 1100, rebuy: 0, exit: 7795, result: 6695 },
    { number: 5, name: "Матвей МС", entry: 1100, rebuy: 1000, exit: 7875, result: 5775 },
    { number: 6, name: "Влад Владшток", entry: 1100, rebuy: 0, exit: 5745, result: 4645 },
    { number: 7, name: "Дмитрий Ник", entry: 1100, rebuy: 2000, exit: 6650, result: 3550 },
    { number: 8, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 2280, result: 1180 },
    { number: 9, name: "Настя К", entry: 1100, rebuy: 1000, exit: 3265, result: 1165 },
    { number: 10, name: "Соня Серж", entry: 1100, rebuy: 3000, exit: 5060, result: 960 },
    { number: 11, name: "Ирина Ага", entry: 1100, rebuy: 0, exit: 0, result: -1100 },
    { number: 12, name: "Рома АСМР", entry: 1100, rebuy: 0, exit: 0, result: -1100 },
    { number: 13, name: "Зеньята", entry: 1100, rebuy: 1000, exit: 865, result: -1235 },
    { number: 14, name: "Даша Хромова", entry: 1100, rebuy: 1000, exit: 500, result: -1600 },
    { number: 15, name: "Вова Ф", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 16, name: "Jane 007", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 17, name: "Наташа Т", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 18, name: "Эльджан", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 19, name: "Полина Матыцына", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 20, name: "Нюта-кун", entry: 1100, rebuy: 3000, exit: 1475, result: -2625 },
    { number: 21, name: "Егор АА 11", entry: 1100, rebuy: 3000, exit: 440, result: -3660 },
    { number: 22, name: "Анна К", entry: 1100, rebuy: 3000, exit: 0, result: -4100 },
    { number: 23, name: "Андрей Морфиус", entry: 1100, rebuy: 3000, exit: 0, result: -4100 },
    { number: 24, name: "Инна Шашкина", entry: 1100, rebuy: 3000, exit: 0, result: -4100 },
    { number: 25, name: "Саша Коч", entry: 1100, rebuy: 3000, exit: 0, result: -4100 },
    { number: 26, name: "Катя Берг", entry: 1100, rebuy: 4000, exit: 1000, result: -4100 },
    { number: 27, name: "Роман Лод", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 28, name: "Никита Зейн", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 29, name: "Том", entry: 1100, rebuy: 6000, exit: 0, result: -7100 },
    { number: 30, name: "Егор Вино", entry: 1100, rebuy: 8000, exit: 0, result: -9100 }
];

// ========== ДАННЫЕ ДНЯ 3 ==========
const day3Players = [
    { number: 1, name: "Богдан А", entry: 1100, rebuy: 1000, exit: 20385, result: 18285 },
    { number: 2, name: "Егор АА 11", entry: 1100, rebuy: 0, exit: 11120, result: 10020 },
    { number: 3, name: "Нюта-кун", entry: 1100, rebuy: 1000, exit: 10540, result: 8440 },
    { number: 4, name: "Надя Жб", entry: 1100, rebuy: 0, exit: 8900, result: 7800 },
    { number: 5, name: "Матвей МС", entry: 1100, rebuy: 0, exit: 3380, result: 2280 },
    { number: 6, name: "Соня Серж", entry: 1100, rebuy: 3000, exit: 6335, result: 2235 },
    { number: 7, name: "Егор Вино", entry: 1100, rebuy: 1000, exit: 3490, result: 1390 },
    { number: 8, name: "Даша Хромова", entry: 1100, rebuy: 0, exit: 1985, result: 885 },
    { number: 9, name: "Андрей Пот", entry: 1100, rebuy: 0, exit: 620, result: -480 },
    { number: 10, name: "Шурик Шилкин", entry: 1100, rebuy: 2000, exit: 2315, result: -785 },
    { number: 11, name: "Макар Аве", entry: 1100, rebuy: 0, exit: 200, result: -900 },
    { number: 12, name: "Иван 112", entry: 1100, rebuy: 2000, exit: 1945, result: -1155 },
    { number: 13, name: "Немощь", entry: 1100, rebuy: 2000, exit: 1300, result: -1800 },
    { number: 14, name: "Инна М", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 15, name: "Владибир", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 16, name: "Полина Матыцына", entry: 1100, rebuy: 2000, exit: 755, result: -2345 },
    { number: 17, name: "Никита Зейн", entry: 1100, rebuy: 2000, exit: 695, result: -2405 },
    { number: 18, name: "Семён Ануфриев", entry: 1100, rebuy: 8000, exit: 6335, result: -2765 },
    { number: 19, name: "Владимир Бул", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 20, name: "Андрей Фломастер", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 21, name: "Влад Владшток", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 22, name: "Максим Spy", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 23, name: "Роман Лод", entry: 1100, rebuy: 8000, exit: 200, result: -8900 }
];

// ========== ДАННЫЕ ДНЯ 4 (НОВЫЕ) ==========
const day4Players = [
    { number: 1, name: "Саша Коч", entry: 1100, rebuy: 1000, exit: 21265, result: 19165 },
    { number: 2, name: "Ирина Ага", entry: 1100, rebuy: 0, exit: 17480, result: 16380 },
    { number: 3, name: "grooveman", entry: 1100, rebuy: 0, exit: 16025, result: 14925 },
    { number: 4, name: "Андрей Морфиус", entry: 1100, rebuy: 3000, exit: 13825, result: 9725 },
    { number: 5, name: "Влад Владшток", entry: 1100, rebuy: 2000, exit: 11825, result: 8725 },
    { number: 6, name: "Федор К", entry: 1100, rebuy: 0, exit: 6930, result: 5830 },
    { number: 7, name: "Евгений Ц", entry: 1100, rebuy: 0, exit: 6460, result: 5360 },
    { number: 8, name: "Матвей МС", entry: 1100, rebuy: 0, exit: 5215, result: 4115 },
    { number: 9, name: "Соня Серж", entry: 1100, rebuy: 3000, exit: 5895, result: 1795 },
    { number: 10, name: "Макар Аве", entry: 1100, rebuy: 0, exit: 2440, result: 1340 },
    { number: 11, name: "Надя Жб", entry: 1100, rebuy: 1000, exit: 3305, result: 1205 },
    { number: 12, name: "Егор АА 11", entry: 1100, rebuy: 4000, exit: 5675, result: 575 },
    { number: 13, name: "Ярослав Кол", entry: 1100, rebuy: 2000, exit: 3625, result: 525 },
    { number: 14, name: "Иван 112", entry: 1100, rebuy: 0, exit: 1535, result: 435 },
    { number: 15, name: "Мойша", entry: 1100, rebuy: 0, exit: 1305, result: 205 },
    { number: 16, name: "Роман Лод", entry: 1100, rebuy: 0, exit: 1075, result: -25 },
    { number: 17, name: "Вадим Зеленин", entry: 1100, rebuy: 2000, exit: 3025, result: -75 },
    { number: 18, name: "Даша Хромова", entry: 1100, rebuy: 0, exit: 460, result: -640 },
    { number: 19, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 0, result: -1100 },
    { number: 20, name: "Лиза Жиг", entry: 1100, rebuy: 0, exit: 0, result: -1100 },
    { number: 21, name: "Кристина А", entry: 1100, rebuy: 0, exit: 0, result: -1100 },
    { number: 22, name: "Влад Сам", entry: 1100, rebuy: 1000, exit: 200, result: -1900 },
    { number: 23, name: "Зеньята", entry: 1100, rebuy: 2000, exit: 1050, result: -2050 },
    { number: 24, name: "Егор Вино", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 25, name: "Том", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 26, name: "Максим Spy", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 27, name: "Полина Матыцына", entry: 1100, rebuy: 1000, exit: 0, result: -2100 },
    { number: 28, name: "Инна Шашкина", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 29, name: "Денис Чир", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 30, name: "Ольга Б", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 31, name: "Роман Егоров", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 32, name: "Инна М", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 33, name: "Андрей Фломастер", entry: 1100, rebuy: 2000, exit: 0, result: -3100 },
    { number: 34, name: "Немощь", entry: 1100, rebuy: 3000, exit: 385, result: -3715 },
    { number: 35, name: "Настя К", entry: 1100, rebuy: 3000, exit: 0, result: -4100 },
    { number: 36, name: "Богдан А", entry: 1100, rebuy: 4000, exit: 0, result: -5100 },
    { number: 37, name: "Jane 007", entry: 1100, rebuy: 10000, exit: 4200, result: -6900 },
    { number: 38, name: "Robert Юниксфактёр", entry: 1100, rebuy: 6000, exit: 0, result: -7100 },
    { number: 39, name: "Семён Ануфриев", entry: 1100, rebuy: 7000, exit: 0, result: -8100 },
    { number: 40, name: "Саша Бел", entry: 1100, rebuy: 7000, exit: 0, result: -8100 }
];

// ========== ИТОГОВАЯ ТАБЛИЦА (с колонками по дням) ==========
let tournamentResults = [];

// Инициализация итоговой таблицы (включая день 4)
function initTournamentResults() {
    const resultsMap = new Map();
    
    // Добавляем день 1
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
    
    // Добавляем/обновляем день 2
    day2Players.forEach(p => {
        if (resultsMap.has(p.name)) {
            const player = resultsMap.get(p.name);
            player.day2 = p.result;
            player.total = (player.day1 || 0) + p.result;
        } else {
            resultsMap.set(p.name, {
                name: p.name,
                day1: null,
                day2: p.result,
                day3: null,
                day4: null,
                total: p.result
            });
        }
    });
    
    // Добавляем/обновляем день 3
    day3Players.forEach(p => {
        if (resultsMap.has(p.name)) {
            const player = resultsMap.get(p.name);
            player.day3 = p.result;
            player.total = (player.day1 || 0) + (player.day2 || 0) + p.result;
        } else {
            resultsMap.set(p.name, {
                name: p.name,
                day1: null,
                day2: null,
                day3: p.result,
                day4: null,
                total: p.result
            });
        }
    });
    
    // Добавляем/обновляем день 4
    day4Players.forEach(p => {
        if (resultsMap.has(p.name)) {
            const player = resultsMap.get(p.name);
            player.day4 = p.result;
            player.total = (player.day1 || 0) + (player.day2 || 0) + (player.day3 || 0) + p.result;
        } else {
            resultsMap.set(p.name, {
                name: p.name,
                day1: null,
                day2: null,
                day3: null,
                day4: p.result,
                total: p.result
            });
        }
    });
    
    tournamentResults = Array.from(resultsMap.values()).sort((a, b) => b.total - a.total);
}

initTournamentResults();

// ========== ДАННЫЕ РЕЙТИНГА (ОБНОВЛЕНЫ) ==========
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

// Добавки за турнир Туза весны 2026
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
        'day1': 'День 1 - 26.02.2026',
        'day2': 'День 2 - 5.03.2026',
        'day3': 'День 3 - 19.03.2026',
        'day4': 'День 4 - 26.03.2026',
        'tournamentResults': 'Итоги Межсезонья',
        'rating': 'Рейтинг',
        'previousResults': 'Результаты Туза весны 2026'
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
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="exit-time">${formatNumber(player.exit)}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    day2Players.forEach(player => {
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

// Заполнение таблицы Дня 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    day3Players.forEach(player => {
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

// Заполнение таблицы Дня 4
function fillDay4Table() {
    const tableBody = document.getElementById('day4Table');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    day4Players.forEach(player => {
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
            <td class="${player.day2 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day2 !== null ? formatNumber(player.day2) : '-'}</td>
            <td class="${player.day3 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day3 !== null ? formatNumber(player.day3) : '-'}</td>
            <td class="${player.day4 >= 0 ? 'chips-positive' : 'chips-negative'}">${player.day4 !== null ? formatNumber(player.day4) : '-'}</td>
            <td class="${totalClass}">${formatNumber(player.total)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы результатов ПРОШЛОГО турнира (Туз весны 2026)
function fillPreviousResultsTable() {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    previousTournamentResults.forEach((player, index) => {
        const row = document.createElement('tr');
        // Только для первого места - золотой цвет и медалька
        // Для всех остальных - зеленый цвет
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

    // Сначала добавляем всех игроков из старого рейтинга
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

    // Добавляем новичков (кого нет в старом рейтинге, но есть в добавках)
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
        
        // Определяем, играл ли игрок в этом туре
        const playedThisTour = ratingAdditions.some(a => a.name === player.name);
        
        // Формируем знак для столбца +/-
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
        else if (activeTab.id === 'day2') fillDay2Table();
        else if (activeTab.id === 'day3') fillDay3Table();
        else if (activeTab.id === 'day4') fillDay4Table();
        else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        else if (activeTab.id === 'rating') fillRatingTable();
        else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }

    let foundCount = 0;
    if (activeTab.id === 'day1') {
        foundCount = day1Players.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'day2') {
        foundCount = day2Players.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'day3') {
        foundCount = day3Players.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'day4') {
        foundCount = day4Players.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
    } else if (activeTab.id === 'previousResults') {
        foundCount = previousTournamentResults.filter(p => p.name.toLowerCase().includes(searchTerm)).length;
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
        ...day1Players.map(p => ({ name: p.name })),
        ...day2Players.map(p => ({ name: p.name })),
        ...day3Players.map(p => ({ name: p.name })),
        ...day4Players.map(p => ({ name: p.name }))
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
    } else if (activeTab.id === 'day2') {
        totalPlayers = day2Players.length;
        const total = day2Players.reduce((sum, p) => sum + p.result, 0);
        averageStack = Math.round(total / totalPlayers);
    } else if (activeTab.id === 'day3') {
        totalPlayers = day3Players.length;
        const total = day3Players.reduce((sum, p) => sum + p.result, 0);
        averageStack = Math.round(total / totalPlayers);
    } else if (activeTab.id === 'day4') {
        totalPlayers = day4Players.length;
        const total = day4Players.reduce((sum, p) => sum + p.result, 0);
        averageStack = Math.round(total / totalPlayers);
    } else if (activeTab.id === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
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
    fillDay2Table();
    fillDay3Table();
    fillDay4Table();
    fillPreviousResultsTable();
    fillTournamentResultsTable();
    fillRatingTable();
    setupAutocomplete();

    showTab('previousResults'); // Начальная вкладка - Результаты Туза весны 2026

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
