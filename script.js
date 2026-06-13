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

// Данные 2 дня
const day2Data = [
    { name: "Артём SUB", entry: 1100, extra: 0, exit: 16680, win: 15580 },
    { name: "Иван Баж", entry: 1100, extra: 2000, exit: 11925, win: 8825 },
    { name: "Богдан А", entry: 1100, extra: 0, exit: 9655, win: 8555 },
    { name: "Рафаэль", entry: 1100, extra: 0, exit: 8310, win: 7210 },
    { name: "Роман Лод", entry: 1100, extra: 1000, exit: 8575, win: 6475 },
    { name: "Соня Серж", entry: 1100, extra: 1000, exit: 8240, win: 6140 },
    { name: "Андрей М", entry: 1100, extra: 0, exit: 7205, win: 6105 },
    { name: "Никита Зейн", entry: 1100, extra: 0, exit: 6490, win: 5390 },
    { name: "Максим Spy", entry: 1100, extra: 2000, exit: 7410, win: 4310 },
    { name: "Лиза Арц", entry: 1100, extra: 0, exit: 4595, win: 3495 },
    { name: "Артур Король", entry: 1100, extra: 0, exit: 4555, win: 3455 },
    { name: "Кристина А", entry: 1100, extra: 1000, exit: 5340, win: 3240 },
    { name: "Николай Ж", entry: 1100, extra: 1000, exit: 4245, win: 2145 },
    { name: "Вова Баж", entry: 1100, extra: 0, exit: 2755, win: 1655 },
    { name: "Егор АА 11", entry: 1100, extra: 3000, exit: 5750, win: 1650 },
    { name: "Семён Ануфриев", entry: 1100, extra: 4000, exit: 5990, win: 890 },
    { name: "Влад Сам", entry: 1100, extra: 1000, exit: 2705, win: 605 },
    { name: "Шурик Шилкин", entry: 1100, extra: 0, exit: 1675, win: 575 },
    { name: "Надя Жб", entry: 1100, extra: 1000, exit: 2175, win: 75 },
    { name: "Даня Гол", entry: 1100, extra: 0, exit: 1050, win: -50 },
    { name: "Макар Аве", entry: 1100, extra: 2000, exit: 2480, win: -620 },
    { name: "Jane 007", entry: 1100, extra: 0, exit: 0, win: -1100 },
    { name: "Даша Хромова", entry: 1100, extra: 3000, exit: 2365, win: -1735 },
    { name: "Саша Коч", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Яна Кат", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Паша Н", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Андрей Фломастер", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Влад Владшток", entry: 1100, extra: 3000, exit: 1185, win: -2915 },
    { name: "Немощь", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Света Туся", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Полина Матыцына", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Катя М", entry: 1100, extra: 4000, exit: 1485, win: -3615 },
    { name: "Ксюша Пок", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Рита Мак", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Александр Будда", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Маша Сот", entry: 1100, extra: 4000, exit: 740, win: -4360 },
    { name: "Егор Вино", entry: 1100, extra: 8000, exit: 4710, win: -4390 },
    { name: "Матвей МС", entry: 1100, extra: 4000, exit: 500, win: -4600 },
    { name: "Михаил Наб", entry: 1100, extra: 4000, exit: 0, win: -5100 },
    { name: "Даниил Ершов", entry: 1100, extra: 4000, exit: 0, win: -5100 },
    { name: "Искандер", entry: 1100, extra: 5000, exit: 910, win: -5190 },
    { name: "Стас ISK", entry: 1100, extra: 7000, exit: 0, win: -8100 }
];

// Данные 3 дня
const day3Data = [
    { name: "Jane 007", entry: 1100, extra: 0, exit: 27485, win: 26385 },
    { name: "Искандер", entry: 1100, extra: 0, exit: 16190, win: 15090 },
    { name: "Всеволод Кузнецов", entry: 1100, extra: 0, exit: 10040, win: 8940 },
    { name: "Артём SUB", entry: 1100, extra: 3000, exit: 12255, win: 8155 },
    { name: "Дмитрий Ник", entry: 1100, extra: 1000, exit: 9305, win: 7205 },
    { name: "Мария Павлова", entry: 1100, extra: 0, exit: 7055, win: 5955 },
    { name: "Ирина Ага", entry: 1100, extra: 0, exit: 6290, win: 5190 },
    { name: "Роман Лод", entry: 1100, extra: 0, exit: 5175, win: 4075 },
    { name: "Саша Бел", entry: 1100, extra: 0, exit: 4780, win: 3680 },
    { name: "Богдан А", entry: 1100, extra: 3000, exit: 7435, win: 3335 },
    { name: "Шурик Шилкин", entry: 1100, extra: 0, exit: 4105, win: 3005 },
    { name: "Вова Баж", entry: 1100, extra: 0, exit: 3970, win: 2870 },
    { name: "Егор Вино", entry: 1100, extra: 4000, exit: 7255, win: 2155 },
    { name: "Макар Аве", entry: 1100, extra: 4000, exit: 7075, win: 1975 },
    { name: "Надя Жб", entry: 1100, extra: 2000, exit: 4660, win: 1560 },
    { name: "Саша Коч", entry: 1100, extra: 1000, exit: 3025, win: 925 },
    { name: "Даша Хромова", entry: 1100, extra: 1000, exit: 2630, win: 530 },
    { name: "Неопознанный утконос", entry: 1100, extra: 0, exit: 405, win: -695 },
    { name: "Илья Сус", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Немощь", entry: 1100, extra: 2000, exit: 960, win: -2140 },
    { name: "Егор АА 11", entry: 1100, extra: 2000, exit: 480, win: -2620 },
    { name: "Аня Жук", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Аня Бью", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Никита Караксик", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "grooveman", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Влад Владшток", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Кристина А", entry: 1100, extra: 8000, exit: 4930, win: -4170 },
    { name: "Соня Серж", entry: 1100, extra: 4000, exit: 0, win: -5100 },
    { name: "Надя Котик", entry: 1100, extra: 7000, exit: 2795, win: -5305 },
    { name: "Слава П", entry: 1100, extra: 5000, exit: 0, win: -6100 },
    { name: "Андрей М", entry: 1100, extra: 5000, exit: 0, win: -6100 },
    { name: "Александр Будда", entry: 1100, extra: 5000, exit: 0, win: -6100 },
    { name: "Том", entry: 1100, extra: 7000, exit: 0, win: -8100 },
    { name: "Игорь Петр", entry: 1100, extra: 7000, exit: 0, win: -8100 },
    { name: "Стас ISK", entry: 1100, extra: 8000, exit: 0, win: -9100 },
    { name: "Семён Ануфриев", entry: 1100, extra: 10000, exit: 0, win: -11100 }
];

// Данные 4 дня
const day4Data = [
    { name: "Неопознанный утконос", entry: 1100, extra: 1000, exit: 15360, win: 13260 },
    { name: "Егор АА 11", entry: 1100, extra: 0, exit: 12740, win: 11640 },
    { name: "Нарек Сель", entry: 1100, extra: 0, exit: 12130, win: 11030 },
    { name: "Никита Зейн", entry: 1100, extra: 0, exit: 9100, win: 8000 },
    { name: "Аня Бью", entry: 1100, extra: 1000, exit: 7025, win: 4925 },
    { name: "Немощь", entry: 1100, extra: 0, exit: 5885, win: 4785 },
    { name: "Надя Жб", entry: 1100, extra: 1000, exit: 6380, win: 4280 },
    { name: "Максим Spy", entry: 1100, extra: 0, exit: 4180, win: 3080 },
    { name: "Георгий С", entry: 1100, extra: 3000, exit: 7160, win: 3060 },
    { name: "Даша Хромова", entry: 1100, extra: 0, exit: 3560, win: 2460 },
    { name: "Андрей М", entry: 1100, extra: 4000, exit: 7280, win: 2180 },
    { name: "Егор Вино", entry: 1100, extra: 0, exit: 2365, win: 1265 },
    { name: "ая?", entry: 1100, extra: 2000, exit: 3980, win: 880 },
    { name: "Влад Владшток", entry: 1100, extra: 1000, exit: 2500, win: 400 },
    { name: "Шурик Шилкин", entry: 1100, extra: 0, exit: 980, win: -120 },
    { name: "Александр Будда", entry: 1100, extra: 2000, exit: 2975, win: -125 },
    { name: "Всеволод Кузнецов", entry: 1100, extra: 0, exit: 970, win: -130 },
    { name: "Матвей МС", entry: 1100, extra: 0, exit: 860, win: -240 },
    { name: "Андрей Фломастер", entry: 1100, extra: 1000, exit: 650, win: -1450 },
    { name: "Многолапый", entry: 1100, extra: 1000, exit: 40, win: -2060 },
    { name: "Дмитрий Ник", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Аня Жук", entry: 1100, extra: 4000, exit: 2375, win: -2725 },
    { name: "Артём Акулов", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Полина Матыцына", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Иван О", entry: 1100, extra: 2000, exit: 0, win: -3100 },
    { name: "Анастасия Ан", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Ирина Ага", entry: 1100, extra: 4000, exit: 405, win: -4695 },
    { name: "Евгений Ц", entry: 1100, extra: 4000, exit: 0, win: -5100 },
    { name: "Роман Лод", entry: 1100, extra: 4000, exit: 0, win: -5100 },
    { name: "Артём SUB", entry: 1100, extra: 8000, exit: 0, win: -9100 },
    { name: "Рашад", entry: 1100, extra: 8000, exit: 0, win: -9100 },
    { name: "Богдан А", entry: 1100, extra: 11000, exit: 0, win: -12100 }
];

// Охота за головами
const huntingData = [
    { name: "Богдан А", value: 1500 },
    { name: "Семён Ануфриев", value: 1400 },
    { name: "Jane 007", value: 1300 },
    { name: "Егор АА 11", value: 1200 },
    { name: "Шурик Шилкин", value: 1100 },
    { name: "Михаил Наб", value: 1000 },
    { name: "Никита Зейн", value: 800 },
    { name: "Полина Матыцына", value: 800 },
    { name: "Роман Лод", value: 800 },
    { name: "grooveman", value: 800 },
    { name: "Макар Аве", value: 600 },
    { name: "Влад Владшток", value: 600 },
    { name: "Саша Коч", value: 600 },
    { name: "Robert Юниксфактёр", value: 600 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Максим Spy", value: 400 },
    { name: "Егор Вино", value: 400 },
    { name: "Влад Сам", value: 400 },
    { name: "Немощь", value: 400 },
    { name: "Кристина А", value: 400 }
];

// Рейтинг до 4 дня
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1166, attendance: 31 },
    { name: "Семён Ануфриев", rating: 1060, attendance: 28 },
    { name: "Jane 007", rating: 1044, attendance: 28 },
    { name: "Егор АА 11", rating: 990, attendance: 28 },
    { name: "Шурик Шилкин", rating: 948, attendance: 31 },
    { name: "Михаил Наб", rating: 941, attendance: 19 },
    { name: "Никита Зейн", rating: 934, attendance: 21 },
    { name: "Полина Матыцына", rating: 813, attendance: 23 },
    { name: "Роман Лод", rating: 770, attendance: 23 },
    { name: "grooveman", rating: 757, attendance: 14 },
    { name: "Макар Аве", rating: 716, attendance: 23 },
    { name: "Влад Владшток", rating: 714, attendance: 30 },
    { name: "Саша Коч", rating: 701, attendance: 20 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Михаил Козадой", rating: 672, attendance: 20 },
    { name: "Максим Spy", rating: 669, attendance: 26 },
    { name: "Егор Вино", rating: 648, attendance: 17 },
    { name: "Влад Сам", rating: 610, attendance: 11 },
    { name: "Немощь", rating: 602, attendance: 15 },
    { name: "Кристина А", rating: 590, attendance: 14 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Соня Серж", rating: 550, attendance: 22 },
    { name: "Дмитрий Ник", rating: 505, attendance: 12 },
    { name: "Даша Хромова", rating: 498, attendance: 16 },
    { name: "Надя Жб", rating: 487, attendance: 13 },
    { name: "Артём SUB", rating: 472, attendance: 7 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Ирина Ага", rating: 462, attendance: 7 },
    { name: "Леонид П", rating: 425, attendance: 7 },
    { name: "Матвей МС", rating: 416, attendance: 11 },
    { name: "Стас ISK", rating: 389, attendance: 12 },
    { name: "Том", rating: 375, attendance: 17 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Андрей Фломастер", rating: 331, attendance: 11 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Лиза Арц", rating: 304, attendance: 5 },
    { name: "Саша Бел", rating: 285, attendance: 5 },
    { name: "Евгений Ц", rating: 278, attendance: 7 },
    { name: "Андрей М", rating: 270, attendance: 4 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Саша Тяжелов", rating: 251, attendance: 4 },
    { name: "Федор К", rating: 242, attendance: 7 },
    { name: "Вова Баж", rating: 235, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Всеволод Кузнецов", rating: 170, attendance: 3 },
    { name: "Анна К", rating: 166, attendance: 5 },
    { name: "Мария Павлова", rating: 165, attendance: 3 },
    { name: "Иван Баж", rating: 150, attendance: 4 },
    { name: "Даниил Ершов", rating: 146, attendance: 5 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Ксюша Лис", rating: 117, attendance: 2 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
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
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Илья Хом", rating: 57, attendance: 1 },
    { name: "Артур Король", rating: 57, attendance: 1 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Ся Ся", rating: 56, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Дмитрий Шки", rating: 55, attendance: 1 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Неопознанный утконос", rating: 51, attendance: 1 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Даня Гол", rating: 42, attendance: 1 },
    { name: "Николя", rating: 41, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Илья Сус", rating: 38, attendance: 1 },
    { name: "Александр Будда", rating: 37, attendance: 2 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Артём Акулов", rating: 34, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Аня Жук", rating: 30, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Аня Бью", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
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
    { name: "Вова Гриненко", rating: 14, attendance: 1 },
    { name: "Александр Гиг", rating: 13, attendance: 1 }
];

// Добавки после 4 дня
const ratingAdditionsAfterDay4 = [
    { name: "Александр Будда", addition: 33 },
    { name: "Анастасия Ан", addition: 23 },
    { name: "Андрей М", addition: 32 },
    { name: "Андрей Фломастер", addition: 36 },
    { name: "Аня Бью", addition: 69 },
    { name: "Аня Жук", addition: 23 },
    { name: "Артём SUB", addition: 16 },
    { name: "Артём Акулов", addition: 27 },
    { name: "ая?", addition: 36 },
    { name: "Богдан А", addition: 0 },
    { name: "Влад Владшток", addition: 0 },
    { name: "Всеволод Кузнецов", addition: 49 },
    { name: "Георгий С", addition: 39 },
    { name: "Даша Хромова", addition: 42 },
    { name: "Дмитрий Ник", addition: 19 },
    { name: "Евгений Ц", addition: 20 },
    { name: "Егор АА 11", addition: 114 },
    { name: "Егор Вино", addition: 35 },
    { name: "Иван О", addition: 26 },
    { name: "Ирина Ага", addition: 21 },
    { name: "Максим Spy", addition: 33 },
    { name: "Матвей МС", addition: 48 },
    { name: "Многолапый", addition: 35 },
    { name: "Надя Жб", addition: 34 },
    { name: "Нарек Сель", addition: 118 },
    { name: "Немощь", addition: 61 },
    { name: "Неопознанный утконос", addition: 155 },
    { name: "Никита Зейн", addition: 59 },
    { name: "Полина Матыцына", addition: 0 },
    { name: "Рашад", addition: 15 },
    { name: "Роман Лод", addition: 0 },
    { name: "Шурик Шилкин", addition: 3 }
];

// Множество игроков, которые участвовали в 4 дне
const day4PlayersSet = new Set(ratingAdditionsAfterDay4.map(p => p.name));

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
    const additionMap = new Map(ratingAdditionsAfterDay4.map(p => [p.name, p.addition]));
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
            playedInDay4: additionMap.has(p.name)
        });
    });
    
    ratingAdditionsAfterDay4.forEach(add => {
        if (!beforeMap.has(add.name)) {
            result.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition,
                playedInDay4: true
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

// Получить изменения позиций для итоговой таблицы (между после 3 дня и после 4 дня)
function getTournamentPositionChanges() {
    // Результаты после 3 дня (сумма 1 + 2 + 3 дня)
    const afterDay3Map = new Map();
    
    day1Data.forEach(p => { afterDay3Map.set(p.name, p.win); });
    day2Data.forEach(p => {
        if (afterDay3Map.has(p.name)) afterDay3Map.set(p.name, afterDay3Map.get(p.name) + p.win);
        else afterDay3Map.set(p.name, p.win);
    });
    day3Data.forEach(p => {
        if (afterDay3Map.has(p.name)) afterDay3Map.set(p.name, afterDay3Map.get(p.name) + p.win);
        else afterDay3Map.set(p.name, p.win);
    });
    
    const afterDay3 = Array.from(afterDay3Map.entries()).map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total)
        .map((p, idx) => ({ name: p.name, position: idx + 1, total: p.total }));
    
    // Результаты после 4 дня (сумма 1 + 2 + 3 + 4 дня)
    const afterDay4Map = new Map();
    
    day1Data.forEach(p => { afterDay4Map.set(p.name, p.win); });
    day2Data.forEach(p => {
        if (afterDay4Map.has(p.name)) afterDay4Map.set(p.name, afterDay4Map.get(p.name) + p.win);
        else afterDay4Map.set(p.name, p.win);
    });
    day3Data.forEach(p => {
        if (afterDay4Map.has(p.name)) afterDay4Map.set(p.name, afterDay4Map.get(p.name) + p.win);
        else afterDay4Map.set(p.name, p.win);
    });
    day4Data.forEach(p => {
        if (afterDay4Map.has(p.name)) afterDay4Map.set(p.name, afterDay4Map.get(p.name) + p.win);
        else afterDay4Map.set(p.name, p.win);
    });
    
    const afterDay4 = Array.from(afterDay4Map.entries()).map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total)
        .map((p, idx) => ({ name: p.name, position: idx + 1, total: p.total }));
    
    const changes = new Map();
    const allPlayers = new Set([...afterDay3.map(p => p.name), ...afterDay4.map(p => p.name)]);
    
    allPlayers.forEach(playerName => {
        const day3Player = afterDay3.find(p => p.name === playerName);
        const day4Player = afterDay4.find(p => p.name === playerName);
        
        if (!day3Player && day4Player) {
            changes.set(playerName, { type: 'new', change: 0 });
        } else if (day3Player && !day4Player) {
            changes.set(playerName, { type: 'down', change: 999 });
        } else if (day3Player && day4Player) {
            const diff = day3Player.position - day4Player.position;
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
        } else if (p.change === 0 && p.playedInDay4 === true) {
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

// День 2
function fillDay2Table() {
    const tbody = document.getElementById('day2Table');
    if (!tbody) return;
    
    const sortedDay2Data = [...day2Data].sort((a, b) => b.win - a.win);
    
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
        row.insertCell(5).innerHTML = formatNumber(item.win);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 4; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
    
    const totalSum = day2Data.reduce((sum, p) => sum + p.win, 0);
    const avgStack = Math.round(totalSum / day2Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// День 3
function fillDay3Table() {
    const tbody = document.getElementById('day3Table');
    if (!tbody) return;
    
    const sortedDay3Data = [...day3Data].sort((a, b) => b.win - a.win);
    
    const filteredData = currentSearchTerm === '' 
        ? sortedDay3Data 
        : sortedDay3Data.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    const mobile = isMobile();
    const table = document.getElementById('day3TableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realPosition = sortedDay3Data.findIndex(d => d.name === item.name) + 1;
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
    
    const totalSum = day3Data.reduce((sum, p) => sum + p.win, 0);
    const avgStack = Math.round(totalSum / day3Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// День 4
function fillDay4Table() {
    const tbody = document.getElementById('day4Table');
    if (!tbody) return;
    
    const sortedDay4Data = [...day4Data].sort((a, b) => b.win - a.win);
    
    const filteredData = currentSearchTerm === '' 
        ? sortedDay4Data 
        : sortedDay4Data.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }
    
    const mobile = isMobile();
    const table = document.getElementById('day4TableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realPosition = sortedDay4Data.findIndex(d => d.name === item.name) + 1;
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
    
    const totalSum = day4Data.reduce((sum, p) => sum + p.win, 0);
    const avgStack = Math.round(totalSum / day4Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Итоги турнира (с 4 днями)
function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    
    // Собираем всех игроков из всех дней
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
    
    day2Data.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day2Result = player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1Result: 0,
                day2Result: player.win,
                day3Result: 0,
                day4Result: 0
            });
        }
    });
    
    day3Data.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day3Result = player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1Result: 0,
                day2Result: 0,
                day3Result: player.win,
                day4Result: 0
            });
        }
    });
    
    day4Data.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day4Result = player.win;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1Result: 0,
                day2Result: 0,
                day3Result: 0,
                day4Result: player.win
            });
        }
    });
    
    const results = Array.from(allPlayersMap.values()).map(p => ({
        ...p,
        total: p.day1Result + p.day2Result + p.day3Result + p.day4Result
    })).sort((a, b) => b.total - a.total);
    
    // Средний стек по столбцу "Результат"
    const totalSumResult = results.reduce((sum, p) => sum + p.total, 0);
    const avgResult = Math.round(totalSumResult / results.length);
    document.getElementById('averageStack').textContent = formatNumber(avgResult);
    
    const positionChanges = getTournamentPositionChanges();
    
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
        
        // Выделяем первое место золотым цветом
        let rowClass = '';
        if (realPosition === 1) {
            rowClass = 'tournament-winner';
        }
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        // Для первого места добавляем медальку к имени
        const displayName = realPosition === 1 ? `🥇 ${item.name}` : item.name;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = displayName;
        row.insertCell(2).innerHTML = changeHtml;
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
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'day3') fillDay3Table();
    else if (activeTab.id === 'day4') fillDay4Table();
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
        ...day1Data.map(p => p.name),
        ...day2Data.map(p => p.name),
        ...day3Data.map(p => p.name),
        ...day4Data.map(p => p.name)
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
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'day3') fillDay3Table();
    else if (tabName === 'day4') fillDay4Table();
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
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'day3') fillDay3Table();
    else if (activeTab.id === 'day4') fillDay4Table();
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
    showTab('tournamentResults');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
    
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && (activeTab.id === 'rating' || activeTab.id === 'day1' || activeTab.id === 'day2' || activeTab.id === 'day3' || activeTab.id === 'day4' || activeTab.id === 'tournamentResults' || activeTab.id === 'previousResults')) {
            if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'day2') fillDay2Table();
            else if (activeTab.id === 'day3') fillDay3Table();
            else if (activeTab.id === 'day4') fillDay4Table();
            else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
            else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        }
    });
});
