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

// Данные 2 дня
const day2Data = [
    { name: "Петя Федоров", entry: 3000, extra: 5000, exit: 47120, total: 47120 },
    { name: "Михаил Козадой", entry: 3000, extra: 5000, exit: 28680, total: 28680 },
    { name: "Дмитрий Ник", entry: 3000, extra: 0, exit: 11200, total: 16200 },
    { name: "Влад Сам", entry: 3000, extra: 0, exit: 10840, total: 15840 },
    { name: "Семён Ануфриев", entry: 3000, extra: 0, exit: 15005, total: 15005 },
    { name: "Влад Пив", entry: 3000, extra: 0, exit: 7480, total: 12480 },
    { name: "Богдан А", entry: 3000, extra: 0, exit: 7325, total: 12325 },
    { name: "Аня Жук", entry: 3000, extra: 0, exit: 6645, total: 11645 },
    { name: "Лиза Арц", entry: 3000, extra: 0, exit: 6010, total: 11010 },
    { name: "Даша Хромова", entry: 3000, extra: 0, exit: 5460, total: 10460 },
    { name: "Вова Гриненко", entry: 3000, extra: 5000, exit: 10330, total: 10330 },
    { name: "Макар Аве", entry: 3000, extra: 0, exit: 5195, total: 10195 },
    { name: "Даниил Ершов", entry: 3000, extra: 0, exit: 4625, total: 9625 },
    { name: "Соня Серж", entry: 3000, extra: 5000, exit: 8950, total: 8950 },
    { name: "Артём SUB", entry: 3000, extra: 2035, exit: 8785, total: 8785 },
    { name: "Саша Коч", entry: 3000, extra: 0, exit: 3625, total: 8625 },
    { name: "Немощь", entry: 3000, extra: 0, exit: 2370, total: 7370 },
    { name: "Полина Матыцына", entry: 3000, extra: 0, exit: 2295, total: 7295 },
    { name: "Максим Spy", entry: 3000, extra: 5000, exit: 7040, total: 7040 },
    { name: "Ирина Ага", entry: 3000, extra: 4160, exit: 5505, total: 5505 },
    { name: "Шурик Шилкин", entry: 3000, extra: 0, exit: 300, total: 5300 },
    { name: "Никита Зейн", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Игорь Гусь", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Егор АА 11", entry: 3000, extra: 7940, exit: 0, total: 5000 },
    { name: "Татьяна Gorman", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Даша Лев", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Иван Тре", entry: 3000, extra: 0, exit: 0, total: 5000 },
    { name: "Стас Мазепа", entry: 3000, extra: 5000, exit: 3620, total: 3620 },
    { name: "Кристина А", entry: 3000, extra: 5000, exit: 2990, total: 2990 },
    { name: "Саша Бел", entry: 3000, extra: 5000, exit: 55, total: 55 },
    { name: "Стас ISK", entry: 3000, extra: 0, exit: 0, total: 0 },
    { name: "Неопознанный утконос", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Сергей Ман", entry: 3000, extra: 4315, exit: 0, total: 0 },
    { name: "Александр Будда", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Надя Котик", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Кирилл Лед", entry: 3000, extra: 5000, exit: 0, total: 0 },
    { name: "Андрей М", entry: 3000, extra: 0, exit: 0, total: 0 },
    { name: "Роман Лод", entry: 3000, extra: 5000, exit: 0, total: 0 }
];

// Данные финала
const finalData = [
    { name: "Петя Федоров", qualifying: 47120, startFinal: 3500, doyleBook: 0, total: 50620 },
    { name: "Михаил Козадой", qualifying: 30345, startFinal: 3500, doyleBook: 1250, total: 35095 },
    { name: "Никита Зейн", qualifying: 26285, startFinal: 3500, doyleBook: 950, total: 30735 },
    { name: "Богдан А", qualifying: 22185, startFinal: 3500, doyleBook: 1700, total: 27385 },
    { name: "Ксюша Лис", qualifying: 23120, startFinal: 3500, doyleBook: 0, total: 26620 },
    { name: "Дмитрий Ник", qualifying: 21985, startFinal: 3500, doyleBook: 0, total: 25485 },
    { name: "Соня Серж", qualifying: 20850, startFinal: 3500, doyleBook: 0, total: 24350 },
    { name: "Влад Сам", qualifying: 15840, startFinal: 3500, doyleBook: 0, total: 19340 },
    { name: "Jane 007", qualifying: 15825, startFinal: 3500, doyleBook: 0, total: 19325 },
    { name: "Семён Ануфриев", qualifying: 15005, startFinal: 3500, doyleBook: 700, total: 19205 },
    { name: "Максим Spy", qualifying: 15385, startFinal: 3500, doyleBook: 200, total: 19085 },
    { name: "Шурик Шилкин", qualifying: 14150, startFinal: 3500, doyleBook: 550, total: 18200 },
    { name: "Кристина А", qualifying: 13615, startFinal: 3500, doyleBook: 500, total: 17615 },
    { name: "Матвей МС", qualifying: 13155, startFinal: 3500, doyleBook: 0, total: 16655 },
    { name: "Влад Пив", qualifying: 12480, startFinal: 3500, doyleBook: 0, total: 15980 },
    { name: "Даша Хромова", qualifying: 12065, startFinal: 3500, doyleBook: 0, total: 15565 },
    { name: "Макар Аве", qualifying: 11440, startFinal: 3500, doyleBook: 600, total: 15540 },
    { name: "Вова Гриненко", qualifying: 11655, startFinal: 3500, doyleBook: 0, total: 15155 },
    { name: "Аня Жук", qualifying: 11645, startFinal: 3500, doyleBook: 0, total: 15145 },
    { name: "Лиза Арц", qualifying: 11010, startFinal: 3500, doyleBook: 0, total: 14510 },
    { name: "Даниил Ершов", qualifying: 9625, startFinal: 3500, doyleBook: 0, total: 13125 },
    { name: "Полина Матыцына", qualifying: 8645, startFinal: 3500, doyleBook: 800, total: 12945 },
    { name: "Саша Коч", qualifying: 8625, startFinal: 3500, doyleBook: 300, total: 12425 },
    { name: "Артём SUB", qualifying: 8785, startFinal: 3500, doyleBook: 0, total: 12285 },
    { name: "Немощь", qualifying: 8250, startFinal: 3500, doyleBook: 400, total: 12150 },
    { name: "Егор Вино", qualifying: 6565, startFinal: 3500, doyleBook: 0, total: 10065 },
    { name: "Даниил С", qualifying: 5930, startFinal: 3500, doyleBook: 0, total: 9430 },
    { name: "Константин Т", qualifying: 5645, startFinal: 3500, doyleBook: 0, total: 9145 },
    { name: "Егор АА 11", qualifying: 5000, startFinal: 3500, doyleBook: 600, total: 9100 },
    { name: "Ирина Ага", qualifying: 5505, startFinal: 3500, doyleBook: 0, total: 9005 },
    { name: "Всеволод Кузнецов", qualifying: 5455, startFinal: 3500, doyleBook: 0, total: 8955 },
    { name: "Михаил Наб", qualifying: 5000, startFinal: 3500, doyleBook: 0, total: 8500 },
    { name: "Влад Владшток", qualifying: 5000, startFinal: 3500, doyleBook: 0, total: 8500 },
    { name: "Игорь Гусь", qualifying: 5000, startFinal: 3500, doyleBook: 0, total: 8500 },
    { name: "Иван Тре", qualifying: 5000, startFinal: 3500, doyleBook: 0, total: 8500 },
    { name: "Татьяна Gorman", qualifying: 5000, startFinal: 3500, doyleBook: 0, total: 8500 },
    { name: "Даша Лев", qualifying: 5000, startFinal: 3500, doyleBook: 0, total: 8500 },
    { name: "Неопознанный утконос", qualifying: 4235, startFinal: 3500, doyleBook: 0, total: 7735 },
    { name: "Стас Мазепа", qualifying: 3620, startFinal: 3500, doyleBook: 0, total: 7120 },
    { name: "Саша Бел", qualifying: 55, startFinal: 3500, doyleBook: 0, total: 3555 },
    { name: "Том", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Андрей М", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Стас ISK", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Сергей Ман", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Кирилл Лед", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Роман Лод", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Александр Будда", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 },
    { name: "Надя Котик", qualifying: 0, startFinal: 3500, doyleBook: 0, total: 3500 }
];

// Данные для вкладки Блайнды и Анте
const blindsData = [
    { level: 1, timeStart: "17-00", timeEnd: "17-25", sb: 5, bb: 10, ante: 10 },
    { level: 2, timeStart: "17-25", timeEnd: "17-50", sb: 10, bb: 20, ante: 20 },
    { level: 3, timeStart: "18-00", timeEnd: "18-15", sb: 15, bb: 30, ante: 30 },
    { level: 4, timeStart: "18-15", timeEnd: "18-30", sb: 25, bb: 50, ante: 50 },
    { level: 5, timeStart: "18-30", timeEnd: "18-50", sb: 35, bb: 70, ante: 70 },
    { level: 6, timeStart: "19-00", timeEnd: "19-15", sb: 50, bb: 100, ante: 100 },
    { level: 7, timeStart: "19-15", timeEnd: "19-30", sb: 75, bb: 150, ante: 150 },
    { level: 8, timeStart: "19-30", timeEnd: "19-50", sb: 100, bb: 200, ante: 200 },
    { level: 9, timeStart: "20-00", timeEnd: "20-15", sb: 150, bb: 300, ante: 300 },
    { level: 10, timeStart: "20-15", timeEnd: "20-30", sb: 200, bb: 400, ante: 400 },
    { level: 11, timeStart: "20-30", timeEnd: "20-50", sb: 300, bb: 600, ante: 600 },
    { level: 12, timeStart: "21-00", timeEnd: "21-15", sb: 400, bb: 800, ante: 800 },
    { level: 13, timeStart: "21-15", timeEnd: "21-30", sb: 600, bb: 1200, ante: 1200 },
    { level: 14, timeStart: "21-30", timeEnd: "21-50", sb: 800, bb: 1600, ante: 1600 },
    { level: 15, timeStart: "22-00", timeEnd: "22-15", sb: 1000, bb: 2000, ante: 2000 },
    { level: 16, timeStart: "22-15", timeEnd: "22-30", sb: 1500, bb: 3000, ante: 3000 },
    { level: 17, timeStart: "22-30", timeEnd: "22-50", sb: 2000, bb: 4000, ante: 4000 },
    { level: 18, timeStart: "23-00", timeEnd: "23-15", sb: 3000, bb: 6000, ante: 6000 },
    { level: 19, timeStart: "23-15", timeEnd: "23-30", sb: 4000, bb: 8000, ante: 8000 },
    { level: 20, timeStart: "23-30", timeEnd: "23-45", sb: 5000, bb: 10000, ante: 10000 },
    { level: 21, timeStart: "23-45", timeEnd: "0-00", sb: 6000, bb: 12000, ante: 12000 },
    { level: 22, timeStart: "0-00", timeEnd: "0-10", sb: 7000, bb: 15000, ante: 15000 },
    { level: 23, timeStart: "0-10", timeEnd: "0-20", sb: 9000, bb: 18000, ante: 18000 },
    { level: 24, timeStart: "0-20", timeEnd: "0-30", sb: 11000, bb: 22000, ante: 22000 }
];

// Рейтинг до финала
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1166, attendance: 33 },
    { name: "Егор АА 11", rating: 1113, attendance: 30 },
    { name: "Никита Зейн", rating: 1078, attendance: 23 },
    { name: "Jane 007", rating: 1069, attendance: 29 },
    { name: "Семён Ануфриев", rating: 1060, attendance: 29 },
    { name: "Шурик Шилкин", rating: 951, attendance: 33 },
    { name: "Михаил Наб", rating: 944, attendance: 20 },
    { name: "Полина Матыцына", rating: 813, attendance: 25 },
    { name: "Роман Лод", rating: 770, attendance: 24 },
    { name: "grooveman", rating: 757, attendance: 14 },
    { name: "Макар Аве", rating: 716, attendance: 24 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Максим Spy", rating: 709, attendance: 28 },
    { name: "Саша Коч", rating: 701, attendance: 21 },
    { name: "Егор Вино", rating: 688, attendance: 19 },
    { name: "Михаил Козадой", rating: 679, attendance: 21 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Немощь", rating: 670, attendance: 17 },
    { name: "Кристина А", rating: 629, attendance: 15 },
    { name: "Влад Сам", rating: 610, attendance: 11 },
    { name: "Соня Серж", rating: 602, attendance: 23 },
    { name: "Сергей Ман", rating: 582, attendance: 11 },
    { name: "Даша Хромова", rating: 549, attendance: 18 },
    { name: "Дмитрий Ник", rating: 544, attendance: 14 },
    { name: "Надя Жб", rating: 521, attendance: 14 },
    { name: "Артём SUB", rating: 513, attendance: 9 },
    { name: "Ирина Ага", rating: 509, attendance: 9 },
    { name: "Матвей МС", rating: 492, attendance: 13 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Леонид П", rating: 425, attendance: 7 },
    { name: "Стас ISK", rating: 399, attendance: 13 },
    { name: "Том", rating: 381, attendance: 18 },
    { name: "Андрей Фломастер", rating: 367, attendance: 12 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Андрей М", rating: 326, attendance: 6 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Лиза Арц", rating: 304, attendance: 5 },
    { name: "Евгений Ц", rating: 298, attendance: 8 },
    { name: "Саша Бел", rating: 285, attendance: 5 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Саша Тяжелов", rating: 251, attendance: 4 },
    { name: "Всеволод Кузнецов", rating: 247, attendance: 5 },
    { name: "Неопознанный утконос", rating: 244, attendance: 3 },
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
    { name: "Иван Баж", rating: 150, attendance: 4 },
    { name: "Даниил Ершов", rating: 146, attendance: 5 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
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
    { name: "Вова Гриненко", rating: 46, attendance: 2 },
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
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Многолапый", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Даниил С", rating: 30, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Константин Т", rating: 29, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
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
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Рашад", rating: 15, attendance: 1 },
    { name: "Александр Гиг", rating: 13, attendance: 1 }
];

// Добавки после 2 дня (для финала)
const ratingAdditionsAfterFinal = [
    { name: "Александр Будда", addition: 25 },
    { name: "Андрей М", addition: 24 },
    { name: "Аня Жук", addition: 51 },
    { name: "Артём SUB", addition: 37 },
    { name: "Богдан А", addition: 0 },
    { name: "Влад Пив", addition: 59 },
    { name: "Влад Сам", addition: 72 },
    { name: "Вова Гриненко", addition: 44 },
    { name: "Даниил Ершов", addition: 40 },
    { name: "Даша Лев", addition: 28 },
    { name: "Даша Хромова", addition: 18 },
    { name: "Дмитрий Ник", addition: 60 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Иван Тре", addition: 28 },
    { name: "Игорь Гусь", addition: 30 },
    { name: "Ирина Ага", addition: 32 },
    { name: "Кирилл Лед", addition: 24 },
    { name: "Кристина А", addition: 1 },
    { name: "Лиза Арц", addition: 48 },
    { name: "Макар Аве", addition: 9 },
    { name: "Максим Spy", addition: 0 },
    { name: "Михаил Козадой", addition: 70 },
    { name: "Надя Котик", addition: 24 },
    { name: "Немощь", addition: 11 },
    { name: "Неопознанный утконос", addition: 26 },
    { name: "Никита Зейн", addition: 0 },
    { name: "Петя Федоров", addition: 145 },
    { name: "Полина Матыцына", addition: 0 },
    { name: "Роман Лод", addition: 0 },
    { name: "Саша Бел", addition: 26 },
    { name: "Саша Коч", addition: 4 },
    { name: "Семён Ануфриев", addition: 8 },
    { name: "Сергей Ман", addition: 25 },
    { name: "Соня Серж", addition: 11 },
    { name: "Стас ISK", addition: 12 },
    { name: "Стас Мазепа", addition: 27 },
    { name: "Татьяна Gorman", addition: 29 },
    { name: "Шурик Шилкин", addition: 0 }
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

// Блайнды и Анте
function fillBlindsTable() {
    const tbody = document.getElementById('blindsTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? blindsData 
        : blindsData.filter(p => p.level.toString().includes(currentSearchTerm));
    
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
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = item.level;
        row.insertCell(1).innerHTML = item.timeStart;
        row.insertCell(2).innerHTML = item.timeEnd;
        row.insertCell(3).innerHTML = item.sb;
        row.insertCell(4).innerHTML = item.bb;
        row.insertCell(5).innerHTML = item.ante;
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
        row.insertCell(3).innerHTML = formatNumber(item.extra);
        row.insertCell(4).innerHTML = formatNumber(item.exit);
        row.insertCell(5).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
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
        row.insertCell(3).innerHTML = formatNumber(item.extra);
        row.insertCell(4).innerHTML = formatNumber(item.exit);
        row.insertCell(5).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#day2TableElement thead');
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
    
    const totalSum = day2Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day2Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Финал
function fillFinalTable() {
    const tbody = document.getElementById('finalTable');
    if (!tbody) return;
    
    const sortedFinalData = [...finalData].sort((a, b) => b.total - a.total);
    
    const filteredData = currentSearchTerm === '' 
        ? sortedFinalData 
        : sortedFinalData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
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
    
    filteredData.forEach((item) => {
        const realPosition = sortedFinalData.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.qualifying);
        row.insertCell(3).innerHTML = formatNumber(item.startFinal);
        row.insertCell(4).innerHTML = formatNumber(item.doyleBook);
        row.insertCell(5).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#finalTableElement thead');
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
    
    const totalSum = finalData.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / finalData.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// ========== ПОИСК ==========

function performSearch() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'blindsAntes') fillBlindsTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'final') fillFinalTable();
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    
    const ratingData = getRatingData();
    const allPlayers = [...new Set([
        ...previousTournamentResults,
        ...ratingData.map(p => p.name),
        ...day1Data.map(p => p.name),
        ...day2Data.map(p => p.name),
        ...finalData.map(p => p.name)
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
        'blindsAntes': 'Блайнды и Анте',
        'day1': '1 день - 25.06.2026',
        'day2': '2 день - 02.07.2026',
        'final': 'Финал - 04.07.2026'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Турнир';
    
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    
    resetTableExpand();
    
    if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'blindsAntes') fillBlindsTable();
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
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
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    const button = document.querySelector('.expand-button');
    if (button) button.textContent = 'Развернуть таблицу';
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete();
    showTab('final');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
    
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && (activeTab.id === 'day1' || activeTab.id === 'day2' || activeTab.id === 'final' || activeTab.id === 'rating')) {
            if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'day2') fillDay2Table();
            else if (activeTab.id === 'final') fillFinalTable();
            else if (activeTab.id === 'rating') fillRatingTable();
        }
    });
});
