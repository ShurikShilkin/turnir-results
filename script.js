// ========== ДАННЫЕ ==========

// Результаты Турнир Джо Хашема 3-7
const previousTournamentResults = [
    { name: "Саша Тяжелов", place: 1, status: "Победитель 🥇" },
    { name: "Немощь", place: 2, status: "Серебряный призер 🥈" },
    { name: "Михаил Козадой", place: 3, status: "Бронзовый призер 🥉" },
    { name: "Богдан А", place: 4, status: "Участник финала" },
    { name: "Ирина Ага", place: 5, status: "Участник финала" },
    { name: "Шурик Шилкин", place: 6, status: "Участник финала" },
    { name: "Егор АА 11", place: 7, status: "Участник финала" },
    { name: "Егор Вино", place: 8, status: "Участник финала" },
    { name: "Семён Ануфриев", place: 9, status: "Участник финала" },
    { name: "Аня Жук", place: 10, status: "Участник финала" },
    { name: "Полина Матыцына", place: 11, status: "Участник финала" },
    { name: "Макар Аве", place: 12, status: "Участник финала" },
    { name: "Роман Лод", place: 13, status: "Участник финала" },
    { name: "Jane 007", place: 14, status: "Участник финала" },
    { name: "Михаил Наб", place: 15, status: "Участник финала" },
    { name: "Соня Новикова", place: 16, status: "Участник финала" },
    { name: "Серж", place: 17, status: "Участник финала" },
    { name: "Мойша", place: 18, status: "Участник финала" },
    { name: "Артём SUB", place: 19, status: "Участник финала" },
    { name: "Екатерина С", place: 20, status: "Участник финала" },
    { name: "Надя Котик", place: 21, status: "Участник финала" },
    { name: "Лиза Арц", place: 22, status: "Участник финала" },
    { name: "муся", place: 23, status: "Участник турнира" },
    { name: "Кристина А", place: 24, status: "Участник турнира" },
    { name: "Christ", place: 25, status: "Участник турнира" },
    { name: "Свидетель", place: 26, status: "Участник турнира" },
    { name: "Никита Зейн", place: 27, status: "Участник турнира" },
    { name: "Надя И", place: 28, status: "Участник турнира" },
    { name: "Неопознанный утконос", place: 29, status: "Участник турнира" },
    { name: "Саша Коч", place: 30, status: "Участник турнира" },
    { name: "Саша Бел", place: 31, status: "Участник турнира" },
    { name: "Coach krotovski", place: 32, status: "Участник турнира" },
    { name: "Федор К", place: 33, status: "Участник турнира" },
    { name: "Андрей Го", place: 34, status: "Участник турнира" },
    { name: "Петя Пётр", place: 35, status: "Участник турнира" },
    { name: "Евгений Ц", place: 36, status: "Участник турнира" },
    { name: "Соня Серж", place: 37, status: "Участник турнира" },
    { name: "Кирилл Лед", place: 38, status: "Участник турнира" },
    { name: "Ярик 37", place: 39, status: "Участник турнира" },
    { name: "Машик", place: 40, status: "Участник турнира" },
    { name: "Потапыч", place: 41, status: "Участник турнира" },
    { name: "Даша Хромова", place: 42, status: "Участник турнира" },
    { name: "Юстрик", place: 43, status: "Участник турнира" },
    { name: "Мария Павлова", place: 44, status: "Участник турнира" },
    { name: "Матвей Пригожий", place: 45, status: "Участник турнира" },
    { name: "Даша Б", place: 46, status: "Участник турнира" },
    { name: "Вова Гриненко", place: 47, status: "Участник турнира" },
    { name: "Александр Будда", place: 48, status: "Участник турнира" }
];

// Данные 1 дня
const day1Data = [
    { name: "Богдан А", entry: 3800, start: 2100, extra: 0, price: 2000, exit: 20230, total: 21930 },
    { name: "Том", entry: 3800, start: 2100, extra: 0, price: 800, exit: 17460, total: 19160 },
    { name: "Coach krotovski", entry: 3800, start: 2100, extra: 0, price: 1200, exit: 13575, total: 15275 },
    { name: "Аня Жук", entry: 3800, start: 2100, extra: 0, price: 800, exit: 13225, total: 14925 },
    { name: "Полина Матыцына", entry: 3800, start: 2100, extra: 0, price: 1500, exit: 9500, total: 11200 },
    { name: "Даниил Ш", entry: 3800, start: 2100, extra: 0, price: 800, exit: 9020, total: 10720 },
    { name: "Макар Аве", entry: 3800, start: 2100, extra: 0, price: 1000, exit: 8310, total: 10010 },
    { name: "Надя Котик", entry: 3800, start: 2100, extra: 0, price: 800, exit: 8100, total: 9800 },
    { name: "Михаил Козадой", entry: 3800, start: 2100, extra: 1700, price: 1200, exit: 8830, total: 8830 },
    { name: "Соня Серж", entry: 3800, start: 2100, extra: 0, price: 1000, exit: 6495, total: 8195 },
    { name: "Петя Пётр", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 6170, total: 6170 },
    { name: "Даша Хромова", entry: 3800, start: 2100, extra: 0, price: 800, exit: 4340, total: 6040 },
    { name: "Егор Вино", entry: 3800, start: 2100, extra: 0, price: 1000, exit: 3080, total: 4780 },
    { name: "Неопознанный утконос", entry: 3800, start: 2100, extra: 0, price: 800, exit: 1425, total: 3125 },
    { name: "Екатерина С", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 2595, total: 2595 },
    { name: "Шурик Шилкин", entry: 3800, start: 2100, extra: 0, price: 1500, exit: 300, total: 2000 },
    { name: "Вадим Кри", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 1895, total: 1895 },
    { name: "Наташа Бонд", entry: 3800, start: 2100, extra: 0, price: 800, exit: 0, total: 1700 },
    { name: "Надя Жб", entry: 3800, start: 2100, extra: 0, price: 800, exit: 0, total: 1700 },
    { name: "Robert Юниксфактёр", entry: 3800, start: 2100, extra: 0, price: 800, exit: 0, total: 1700 },
    { name: "Егор АА 11", entry: 3800, start: 2100, extra: 1700, price: 1900, exit: 0, total: 0 },
    { name: "Лиза Арц", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Арсений G", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Настя Кудрявая", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Семён Ануфриев", entry: 3800, start: 2100, extra: 1700, price: 1600, exit: 0, total: 0 },
    { name: "Никита Зейн", entry: 3800, start: 2100, extra: 1700, price: 1500, exit: 0, total: 0 },
    { name: "Артём SUB", entry: 3800, start: 2100, extra: 1700, price: 1200, exit: 0, total: 0 },
    { name: "Наташа С", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Макс Гема", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Иван Баж", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Ирина Ага", entry: 3800, start: 2100, extra: 1700, price: 1500, exit: 0, total: 0 },
    { name: "Соня Новикова", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Арзу", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 }
];

// Данные 2 дня (НОВЫЕ ДАННЫЕ)
const day2Data = [
    { name: "Семён Ануфриев", entry: 3800, start: 2100, extra: 0, price: 400, exit: 27240, total: 28940 },
    { name: "Никита Зейн", entry: 3800, start: 2100, extra: 1700, price: 525, exit: 22850, total: 22850 },
    { name: "Богдан А", entry: 3800, start: 2100, extra: 0, price: 3725, exit: 19355, total: 21055 },
    { name: "Евгений Ц", entry: 3800, start: 2100, extra: 0, price: 800, exit: 8680, total: 10380 },
    { name: "Даша Хромова", entry: 3800, start: 2100, extra: 0, price: 1400, exit: 5820, total: 7520 },
    { name: "Полина Матыцына", entry: 3800, start: 2100, extra: 0, price: 3200, exit: 2085, total: 3785 },
    { name: "Серж", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 3650, total: 3650 },
    { name: "Шурик Шилкин", entry: 3800, start: 2100, extra: 0, price: 1500, exit: 1260, total: 2960 },
    { name: "Макар Аве", entry: 3800, start: 2100, extra: 0, price: 1400, exit: 700, total: 2400 },
    { name: "Немощь", entry: 3800, start: 2100, extra: 0, price: 1500, exit: 500, total: 2200 },
    { name: "Неопознанный утконос", entry: 3800, start: 2100, extra: 0, price: 800, exit: 230, total: 1930 },
    { name: "Надя И", entry: 3800, start: 2100, extra: 0, price: 800, exit: 0, total: 1700 },
    { name: "Егор АА 11", entry: 3800, start: 2100, extra: 0, price: 875, exit: 0, total: 1700 },
    { name: "Наташа С", entry: 3800, start: 2100, extra: 1700, price: 200, exit: 1150, total: 1150 },
    { name: "Соня Серж", entry: 3800, start: 2100, extra: 1700, price: 1875, exit: 200, total: 200 },
    { name: "Петя Пётр", entry: 3800, start: 2100, extra: 1700, price: 600, exit: 0, total: 0 },
    { name: "муся", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Настя Кудрявая", entry: 3800, start: 2100, extra: 1700, price: 200, exit: 0, total: 0 },
    { name: "Соня Новикова", entry: 3800, start: 2100, extra: 1700, price: 200, exit: 0, total: 0 },
    { name: "Арзу", entry: 3800, start: 2100, extra: 1700, price: 200, exit: 0, total: 0 },
    { name: "Ирина Ага", entry: 3800, start: 2100, extra: 1700, price: 375, exit: 0, total: 0 },
    { name: "Федор К", entry: 3800, start: 2100, extra: 1700, price: 800, exit: 0, total: 0 },
    { name: "Артём SUB", entry: 3800, start: 2100, extra: 1700, price: 300, exit: 0, total: 0 },
    { name: "Саша Коч", entry: 3800, start: 2100, extra: 1700, price: 1200, exit: 0, total: 0 }
];

// Данные для финала (сумма 1 и 2 дня)
const finalData = [];
const allNames = new Set([...day1Data.map(p => p.name), ...day2Data.map(p => p.name)]);
allNames.forEach(name => {
    const d1 = day1Data.find(p => p.name === name);
    const d2 = day2Data.find(p => p.name === name);
    const day1Result = d1 ? d1.total : 0;
    const day2Result = d2 ? d2.total : 0;
    finalData.push({
        name: name,
        day1Result: day1Result,
        day2Result: day2Result,
        day3Result: 0,
        total: day1Result + day2Result
    });
});

// Охота за головами
const huntingData = [
    { name: "Богдан А", value: 6015 },
    { name: "Семён Ануфриев", value: 4440 },
    { name: "Том", value: 3525 },
    { name: "Полина Матыцына", value: 3200 },
    { name: "Даниил Ш", value: 2800 },
    { name: "Coach krotovski", value: 2600 },
    { name: "Егор Вино", value: 1800 },
    { name: "Даша Хромова", value: 1800 },
    { name: "Jane 007", value: 1800 },
    { name: "Михаил Наб", value: 1700 },
    { name: "Шурик Шилкин", value: 1550 },
    { name: "Роман Лод", value: 1500 },
    { name: "Макар Аве", value: 1400 },
    { name: "Аня Жук", value: 1400 },
    { name: "Никита Зейн", value: 1100 },
    { name: "Евгений Ц", value: 1050 },
    { name: "Кристина А", value: 1000 },
    { name: "grooveman", value: 1000 },
    { name: "Немощь", value: 850 },
    { name: "Неопознанный утконос", value: 800 },
    { name: "Надя Котик", value: 800 },
    { name: "Соня Серж", value: 645 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Надя Жб", value: 500 },
    { name: "Егор АА 11", value: 440 },
    { name: "Наташа Бонд", value: 400 },
    { name: "Екатерина С", value: 400 },
    { name: "Вадим Кри", value: 400 },
    { name: "Robert Юниксфактёр", value: 400 },
    { name: "Серж", value: 400 },
    { name: "Надя И", value: 400 },
    { name: "Саша Коч", value: 300 },
    { name: "Макс Гема", value: 200 },
    { name: "Иван Баж", value: 200 },
    { name: "Лиза Арц", value: 200 },
    { name: "Арсений G", value: 200 },
    { name: "муся", value: 200 },
    { name: "Федор К", value: 200 },
    { name: "Петя Пётр", value: 190 },
    { name: "Наташа С", value: 100 },
    { name: "Ирина Ага", value: 95 },
    { name: "Артём SUB", value: 75 },
    { name: "Соня Новикова", value: 50 },
    { name: "Арзу", value: 50 },
    { name: "Настя Кудрявая", value: 50 },
    { name: "Все остальные", value: 800 }
];

// Особые номинации (выбивания)
const specialNominationsData = [
    { name: "Семён Ануфриев", knock1: 1200, knock2: 800, knock3: 800, knock4: 375, knock5: 200, knock6: 190, knock7: 2375, knock8: 525, knock9: 400, sum: 6865, count: 9, avg: 765 },
    { name: "Том", knock1: 800, knock2: 400, knock3: 1500, knock4: 750, knock5: 800, knock6: 400, knock7: 800, knock8: 0, knock9: 0, sum: 5450, count: 7, avg: 780 },
    { name: "Богдан А", knock1: 800, knock2: 1050, knock3: 400, knock4: 875, knock5: 800, knock6: 1700, knock7: 0, knock8: 0, knock9: 0, sum: 5625, count: 6, avg: 940 },
    { name: "Даниил Ш", knock1: 800, knock2: 400, knock3: 1200, knock4: 800, knock5: 400, knock6: 400, knock7: 0, knock8: 0, knock9: 0, sum: 4000, count: 6, avg: 670 },
    { name: "Соня Серж", knock1: 1750, knock2: 800, knock3: 200, knock4: 100, knock5: 100, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 2950, count: 5, avg: 590 },
    { name: "Coach krotovski", knock1: 1200, knock2: 800, knock3: 800, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 2800, count: 3, avg: 935 },
    { name: "Никита Зейн", knock1: 600, knock2: 1290, knock3: 375, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 2265, count: 3, avg: 755 },
    { name: "Даша Хромова", knock1: 1200, knock2: 600, knock3: 200, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 2000, count: 3, avg: 670 },
    { name: "Полина Матыцына", knock1: 1900, knock2: 1500, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 3400, count: 2, avg: 1700 },
    { name: "Егор Вино", knock1: 800, knock2: 800, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 1600, count: 2, avg: 800 },
    { name: "Егор АА 11", knock1: 800, knock2: 800, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 1600, count: 2, avg: 800 },
    { name: "Аня Жук", knock1: 400, knock2: 800, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 1200, count: 2, avg: 600 },
    { name: "Немощь", knock1: 600, knock2: 400, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 1000, count: 2, avg: 500 },
    { name: "Петя Пётр", knock1: 800, knock2: 150, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 950, count: 2, avg: 475 },
    { name: "Евгений Ц", knock1: 300, knock2: 200, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 500, count: 2, avg: 250 },
    { name: "Макар Аве", knock1: 800, knock2: 0, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 800, count: 1, avg: 800 },
    { name: "Надя Жб", knock1: 400, knock2: 0, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 400, count: 1, avg: 400 },
    { name: "Шурик Шилкин", knock1: 100, knock2: 0, knock3: 0, knock4: 0, knock5: 0, knock6: 0, knock7: 0, knock8: 0, knock9: 0, sum: 100, count: 1, avg: 100 }
];

// Табличка выбываний
const eliminationsData = [
    { name: "Соня Новикова", count: 4 },
    { name: "Арзу", count: 4 },
    { name: "Настя Кудрявая", count: 4 },
    { name: "Артём SUB", count: 4 },
    { name: "Ирина Ага", count: 4 },
    { name: "Петя Пётр", count: 3 },
    { name: "Никита Зейн", count: 3 },
    { name: "Наташа С", count: 3 },
    { name: "Егор АА 11", count: 3 },
    { name: "Макс Гема", count: 2 },
    { name: "Иван Баж", count: 2 },
    { name: "Лиза Арц", count: 2 },
    { name: "Соня Серж", count: 2 },
    { name: "Семён Ануфриев", count: 2 },
    { name: "Арсений G", count: 2 },
    { name: "муся", count: 2 },
    { name: "Саша Коч", count: 2 },
    { name: "Федор К", count: 2 },
    { name: "Михаил Козадой", count: 1 },
    { name: "Наташа Бонд", count: 1 },
    { name: "Надя Жб", count: 1 },
    { name: "Екатерина С", count: 1 },
    { name: "Вадим Кри", count: 1 },
    { name: "Robert Юниксфактёр", count: 1 },
    { name: "Серж", count: 1 },
    { name: "Немощь", count: 1 },
    { name: "Надя И", count: 1 }
];

// Рейтинг до 2 дня
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1569, attendance: 49 },
    { name: "Егор АА 11", rating: 1277, attendance: 41 },
    { name: "Jane 007", rating: 1264, attendance: 41 },
    { name: "Михаил Наб", rating: 1245, attendance: 31 },
    { name: "Семён Ануфриев", rating: 1240, attendance: 39 },
    { name: "Никита Зейн", rating: 1222, attendance: 33 },
    { name: "Шурик Шилкин", rating: 1213, attendance: 49 },
    { name: "Полина Матыцына", rating: 1207, attendance: 39 },
    { name: "Ирина Ага", rating: 1174, attendance: 24 },
    { name: "Роман Лод", rating: 1173, attendance: 35 },
    { name: "Михаил Козадой", rating: 1119, attendance: 36 },
    { name: "Саша Коч", rating: 1063, attendance: 33 },
    { name: "Coach krotovski", rating: 992, attendance: 21 },
    { name: "Артём SUB", rating: 967, attendance: 25 },
    { name: "Немощь", rating: 944, attendance: 21 },
    { name: "Егор Вино", rating: 927, attendance: 34 },
    { name: "Соня Серж", rating: 888, attendance: 35 },
    { name: "Кристина А", rating: 869, attendance: 28 },
    { name: "Макар Аве", rating: 852, attendance: 32 },
    { name: "grooveman", rating: 830, attendance: 17 },
    { name: "муся", rating: 817, attendance: 16 },
    { name: "Лиза Арц", rating: 792, attendance: 14 },
    { name: "Robert Юниксфактёр", rating: 736, attendance: 16 },
    { name: "Максим Spy", rating: 729, attendance: 32 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Даша Хромова", rating: 702, attendance: 27 },
    { name: "Саша Тяжелов", rating: 668, attendance: 8 },
    { name: "Неопознанный утконос", rating: 656, attendance: 14 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Саша Бел", rating: 583, attendance: 10 },
    { name: "Стас ISK", rating: 556, attendance: 18 },
    { name: "Матвей Пригожий", rating: 544, attendance: 17 },
    { name: "Надя Жб", rating: 529, attendance: 15 },
    { name: "Кирилл Лед", rating: 524, attendance: 11 },
    { name: "Том", rating: 501, attendance: 22 },
    { name: "Вова Гриненко", rating: 493, attendance: 11 },
    { name: "Свидетель", rating: 484, attendance: 11 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Вова Баж", rating: 457, attendance: 8 },
    { name: "Леонид П", rating: 450, attendance: 8 },
    { name: "Александр Будда", rating: 442, attendance: 13 },
    { name: "Аня Жук", rating: 425, attendance: 10 },
    { name: "Серж", rating: 409, attendance: 8 },
    { name: "Евгений Ц", rating: 405, attendance: 11 },
    { name: "Ксюша Лис", rating: 405, attendance: 8 },
    { name: "Даниил Ершов", rating: 395, attendance: 10 },
    { name: "Петя Пётр", rating: 387, attendance: 7 },
    { name: "Андрей Фломастер", rating: 373, attendance: 13 },
    { name: "Федор К", rating: 367, attendance: 10 },
    { name: "Петя Федоров", rating: 353, attendance: 5 },
    { name: "Соня Новикова", rating: 342, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Екатерина С", rating: 322, attendance: 7 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Надя Котик", rating: 267, attendance: 8 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Всеволод Кузнецов", rating: 247, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Анна К", rating: 207, attendance: 6 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Иван Баж", rating: 203, attendance: 6 },
    { name: "Мария Павлова", rating: 196, attendance: 4 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Мойша", rating: 167, attendance: 3 },
    { name: "Алёна Ф", rating: 155, attendance: 2 },
    { name: "Надя И", rating: 153, attendance: 4 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Зеньята", rating: 135, attendance: 5 },
    { name: "Наташа Бонд", rating: 130, attendance: 4 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
    { name: "Паша Веля", rating: 93, attendance: 1 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Андрей Го", rating: 81, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Диана Мур", rating: 78, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Илья Midas", rating: 75, attendance: 1 },
    { name: "Christ", rating: 71, attendance: 2 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Даниил Ш", rating: 64, attendance: 1 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Артём Акулов", rating: 61, attendance: 2 },
    { name: "Роман Г", rating: 61, attendance: 1 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Леша Ч", rating: 60, attendance: 1 },
    { name: "Николай Шар", rating: 60, attendance: 1 },
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
    { name: "Радмир Г", rating: 53, attendance: 1 },
    { name: "Катя В", rating: 49, attendance: 1 },
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
    { name: "Вадим Кри", rating: 38, attendance: 1 },
    { name: "Илья Сус", rating: 38, attendance: 1 },
    { name: "ая?", rating: 36, attendance: 1 },
    { name: "Настя Буд", rating: 36, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Машик", rating: 35, attendance: 1 },
    { name: "Многолапый", rating: 35, attendance: 1 },
    { name: "Лера Аракчаа", rating: 34, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Арсений G", rating: 33, attendance: 1 },
    { name: "Настя Кудрявая", rating: 32, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Ярик 37", rating: 31, attendance: 1 },
    { name: "Наташа С", rating: 30, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Даниил С", rating: 30, attendance: 1 },
    { name: "Игорь Гусь", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Макс Гема", rating: 29, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Константин Т", rating: 29, attendance: 1 },
    { name: "Татьяна Gorman", rating: 29, attendance: 1 },
    { name: "Юстрик", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Давид Жуков", rating: 28, attendance: 1 },
    { name: "Даша Б", rating: 28, attendance: 1 },
    { name: "Даша Лев", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Ульяна Ану", rating: 28, attendance: 1 },
    { name: "Арзу", rating: 27, attendance: 1 },
    { name: "Лиза О", rating: 27, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Потапыч", rating: 27, attendance: 1 },
    { name: "Таня Т", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Никита Башкин", rating: 25, attendance: 1 },
    { name: "Глеб Витязь", rating: 24, attendance: 1 },
    { name: "Лера Ким", rating: 24, attendance: 1 },
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

// Добавки после 2 дня
const ratingAdditionsAfterDay2 = [
    { name: "Арзу", addition: 30 },
    { name: "Артём SUB", addition: 0 },
    { name: "Богдан А", addition: 0 },
    { name: "Даша Хромова", addition: 25 },
    { name: "Евгений Ц", addition: 67 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Ирина Ага", addition: 0 },
    { name: "Макар Аве", addition: 0 },
    { name: "муся", addition: 6 },
    { name: "Надя И", addition: 39 },
    { name: "Настя Кудрявая", addition: 32 },
    { name: "Наташа С", addition: 36 },
    { name: "Немощь", addition: 12 },
    { name: "Неопознанный утконос", addition: 9 },
    { name: "Никита Зейн", addition: 28 },
    { name: "Петя Пётр", addition: 34 },
    { name: "Полина Матыцына", addition: 2 },
    { name: "Саша Коч", addition: 0 },
    { name: "Семён Ануфриев", addition: 66 },
    { name: "Серж", addition: 51 },
    { name: "Соня Новикова", addition: 31 },
    { name: "Соня Серж", addition: 0 },
    { name: "Федор К", addition: 29 },
    { name: "Шурик Шилкин", addition: 0 }
];

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
    const additionMap = new Map(ratingAdditionsAfterDay2.map(p => [p.name, p.addition]));
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
            playedInDay2: additionMap.has(p.name)
        });
    });
    
    ratingAdditionsAfterDay2.forEach(add => {
        if (!beforeMap.has(add.name)) {
            result.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition,
                playedInDay2: true
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

// Получить изменения позиций для финала (между после 1 дня и суммой 1+2 дня)
function getFinalPositionChanges() {
    // 1. Результаты после 1 дня
    const afterDay1 = [...day1Data].sort((a, b) => b.total - a.total).map((p, idx) => ({ 
        name: p.name, 
        position: idx + 1, 
        total: p.total 
    }));
    
    // 2. Результаты после 2 дня (сумма 1 + 2 дня)
    const afterDay2Map = new Map();
    
    day1Data.forEach(p => {
        afterDay2Map.set(p.name, p.total);
    });
    
    day2Data.forEach(p => {
        if (afterDay2Map.has(p.name)) {
            afterDay2Map.set(p.name, afterDay2Map.get(p.name) + p.total);
        } else {
            afterDay2Map.set(p.name, p.total);
        }
    });
    
    const afterDay2 = Array.from(afterDay2Map.entries()).map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total)
        .map((p, idx) => ({ name: p.name, position: idx + 1, total: p.total }));
    
    // 3. Сравниваем позиции
    const changes = new Map();
    const allPlayers = new Set([...afterDay1.map(p => p.name), ...afterDay2.map(p => p.name)]);
    
    allPlayers.forEach(playerName => {
        const day1Player = afterDay1.find(p => p.name === playerName);
        const day2Player = afterDay2.find(p => p.name === playerName);
        
        if (!day1Player && day2Player) {
            changes.set(playerName, { type: 'new', change: 0 });
        } else if (day1Player && !day2Player) {
            changes.set(playerName, { type: 'down', change: 999 });
        } else if (day1Player && day2Player) {
            const diff = day1Player.position - day2Player.position;
            if (diff > 0) changes.set(playerName, { type: 'up', change: diff });
            else if (diff < 0) changes.set(playerName, { type: 'down', change: Math.abs(diff) });
            else changes.set(playerName, { type: 'same', change: 0 });
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
        } else if (p.change === 0 && p.playedInDay2 === true) {
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

// Результаты Турнир Джо Хашема 3-7
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
        else if (item.place >= 4 && item.place <= 22) rowClass = 'final-finalist';
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

// Особые номинации (выбивания)
function fillSpecialNominationsTable() {
    const tbody = document.getElementById('specialTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? specialNominationsData 
        : specialNominationsData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const mobile = isMobile();
    const table = document.getElementById('specialTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item, idx) => {
        const realIndex = specialNominationsData.findIndex(h => h.name === item.name);
        const realPosition = realIndex + 1;
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        const rowClass = isSearchMatch ? 'search-highlight' : '';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = item.knock1 ? formatNumber(item.knock1) : '';
        row.insertCell(3).innerHTML = item.knock2 ? formatNumber(item.knock2) : '';
        row.insertCell(4).innerHTML = item.knock3 ? formatNumber(item.knock3) : '';
        row.insertCell(5).innerHTML = item.knock4 ? formatNumber(item.knock4) : '';
        row.insertCell(6).innerHTML = item.knock5 ? formatNumber(item.knock5) : '';
        row.insertCell(7).innerHTML = item.knock6 ? formatNumber(item.knock6) : '';
        row.insertCell(8).innerHTML = item.knock7 ? formatNumber(item.knock7) : '';
        row.insertCell(9).innerHTML = item.knock8 ? formatNumber(item.knock8) : '';
        row.insertCell(10).innerHTML = item.knock9 ? formatNumber(item.knock9) : '';
        row.insertCell(11).innerHTML = formatNumber(item.sum);
        row.insertCell(12).innerHTML = item.count;
        row.insertCell(13).innerHTML = formatNumber(item.avg);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 12; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#specialTableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 12; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 12; i++) {
            if (headers[i]) headers[i].style.display = '';
        }
    }
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// Табличка выбываний
function fillEliminationsTable() {
    const tbody = document.getElementById('eliminationsTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? eliminationsData 
        : eliminationsData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item, idx) => {
        const realIndex = eliminationsData.findIndex(h => h.name === item.name);
        const realPosition = realIndex + 1;
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        const rowClass = isSearchMatch ? 'search-highlight' : '';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = item.count;
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
        row.insertCell(5).innerHTML = formatNumber(item.price);
        row.insertCell(6).innerHTML = formatNumber(item.exit);
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

// День 2
function fillDay2Table() {
    const tbody = document.getElementById('day2Table');
    if (!tbody) return;
    
    const sortedDay2Data = [...day2Data].sort((a, b) => b.total - a.total);
    
    const filteredData = currentSearchTerm === '' 
        ? sortedDay2Data 
        : sortedDay2Data.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    const mobile = isMobile();
    const table = document.getElementById('day2TableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realPosition = sortedDay2Data.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.price);
        row.insertCell(6).innerHTML = formatNumber(item.exit);
        row.insertCell(7).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 6; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#day2TableElement thead');
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
    
    const totalSum = day2Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day2Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// День 3 - пустое сообщение
function fillDay3Table() {
    document.getElementById('totalPlayers').textContent = 0;
}

// Финал
function fillFinalTable() {
    const tbody = document.getElementById('finalTable');
    if (!tbody) return;
    
    const results = [...finalData].sort((a, b) => b.total - a.total);
    const positionChanges = getFinalPositionChanges();
    
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
    const table = document.getElementById('finalTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item, idx) => {
        const realPosition = results.findIndex(r => r.name === item.name) + 1;
        const change = positionChanges.get(item.name);
        
        let changeHtml = '';
        if (change) {
            if (change.type === 'new') changeHtml = '<div class="position-change position-new">NEW</div>';
            else if (change.type === 'up') changeHtml = `<div class="position-change position-up"><span class="change-arrow">▲</span>${change.change}</div>`;
            else if (change.type === 'down' && change.change === 999) changeHtml = '<div class="position-change position-down"><span class="change-arrow">▼</span>?</div>';
            else if (change.type === 'down') changeHtml = `<div class="position-change position-down"><span class="change-arrow">▼</span>${change.change}</div>`;
            else changeHtml = '<div class="position-change position-same"><span class="change-arrow">→</span>0</div>';
        } else {
            changeHtml = '<div class="position-change position-same"><span class="change-arrow">→</span>0</div>';
        }
        
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = changeHtml;
        row.insertCell(3).innerHTML = formatNumber(item.day1Result);
        row.insertCell(4).innerHTML = formatNumber(item.day2Result);
        row.insertCell(5).innerHTML = formatNumber(item.day3Result);
        row.insertCell(6).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    // Скрываем заголовки на мобиле
    const thead = document.querySelector('#finalTableElement thead');
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
    else if (activeTab.id === 'specialNominations') {
        fillSpecialNominationsTable();
        fillEliminationsTable();
    }
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
        ...huntingData.map(p => p.name),
        ...specialNominationsData.map(p => p.name),
        ...eliminationsData.map(p => p.name),
        ...day1Data.map(p => p.name),
        ...day2Data.map(p => p.name)
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
        'previousResults': 'Результаты Турнир Джо Хашема 3-7',
        'huntingNominations': 'Охота за головами',
        'specialNominations': 'Особые номинации',
        'day1': '1 день - 17.09.2026',
        'day2': '2 день - 24.09.2026',
        'day3': '3 день - 01.10.2026',
        'final': 'Финал - 03.10.2026'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Турнир';
    
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    
    resetTableExpand();
    
    if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'huntingNominations') fillHuntingNominationsTable();
    else if (tabName === 'specialNominations') {
        fillSpecialNominationsTable();
        fillEliminationsTable();
    }
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'day3') fillDay3Table();
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
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'final') fillFinalTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'specialNominations') fillSpecialNominationsTable();
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    const button = document.querySelector('.expand-button');
    if (button) button.textContent = 'Развернуть таблицу';
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete();
    showTab('day2');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
    
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && (activeTab.id === 'day1' || activeTab.id === 'day2' || activeTab.id === 'final' || activeTab.id === 'rating' || activeTab.id === 'specialNominations')) {
            if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'day2') fillDay2Table();
            else if (activeTab.id === 'final') fillFinalTable();
            else if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'specialNominations') fillSpecialNominationsTable();
        }
    });
});
