// ========== ДАННЫЕ ПРОШЛОГО ТУРНИРА ==========
const previousTournamentResults = [
    { name: "grooveman", place: 1, status: "Победитель" }, { name: "Богдан А", place: 2, status: "Участник" },
    { name: "Саша Тяжелов", place: 3, status: "Участник" }, { name: "Даша Yellow", place: 4, status: "Участник" },
    { name: "Семён Ануфриев", place: 5, status: "Участник" }, { name: "Леонид П", place: 6, status: "Участник" },
    { name: "Егор Вино", place: 7, status: "Участник" }, { name: "Лера Еж", place: 8, status: "Участник" },
    { name: "Лиза Арц", place: 9, status: "Участник" }, { name: "Jane 007", place: 10, status: "Участник" },
    { name: "Егор АА 11", place: 11, status: "Участник" }, { name: "Robert Юниксфактёр", place: 12, status: "Участник" },
    { name: "Ксюша Лис", place: 13, status: "Участник" }, { name: "Никита Зейн", place: 14, status: "Участник" },
    { name: "Влад Владшток", place: 15, status: "Участник" }, { name: "Саша Бел", place: 16, status: "Участник" },
    { name: "Максим Б", place: 17, status: "Участник" }, { name: "Соня Серж", place: 18, status: "Участник" },
    { name: "Полина Матыцына", place: 19, status: "Участник" }, { name: "Влад Сам", place: 20, status: "Участник" },
    { name: "Саша Коч", place: 21, status: "Участник" }, { name: "Шурик Шилкин", place: 22, status: "Участник" },
    { name: "Роман Лод", place: 23, status: "Участник" }, { name: "Никита Yellow", place: 24, status: "Участник" },
    { name: "Андрей Фломастер", place: 25, status: "Участник" }, { name: "Макар Аве", place: 26, status: "Участник" }
];

// ========== РЕЗУЛЬТАТЫ ФИНАЛА ==========
const finalResultsData = [
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

// ========== ДЕНЬ 1 ==========
const day1Players = [
    { number: 1, name: "Андрей Мазепа", participation: 3100, start: 2100, rebuy: 1000, price: 3435, exit: 26950, result: 26950 },
    { number: 2, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, price: 3200, exit: 10785, result: 11785 },
    { number: 3, name: "Том", participation: 3100, start: 2100, rebuy: 1000, price: 1650, exit: 11070, result: 11070 },
    { number: 4, name: "Семён Ануфриев", participation: 3100, start: 2100, rebuy: 0, price: 2700, exit: 9295, result: 10295 },
    { number: 5, name: "grooveman", participation: 3100, start: 2100, rebuy: 0, price: 1950, exit: 6885, result: 7885 },
    { number: 6, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 0, price: 1950, exit: 6535, result: 7535 },
    { number: 7, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 4020, result: 5020 },
    { number: 8, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 3275, result: 4275 },
    { number: 9, name: "Вадим Зеленин", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 3010, result: 4010 },
    { number: 10, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, price: 1600, exit: 2975, result: 3975 },
    { number: 11, name: "Алексей Ершов", participation: 3100, start: 2100, rebuy: 0, price: 900, exit: 2120, result: 3120 },
    { number: 12, name: "Инна М", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 2030, result: 3030 },
    { number: 13, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 1000, price: 600, exit: 1700, result: 1700 },
    { number: 14, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 0, price: 500, exit: 200, result: 1200 },
    { number: 15, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 25, result: 1025 },
    { number: 16, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 0, result: 1000 },
    { number: 17, name: "Богдан А", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 200, result: 200 },
    { number: 18, name: "Владимир Бул", participation: 3100, start: 2100, rebuy: 1000, price: 335, exit: 0, result: 0 },
    { number: 19, name: "Влад Владшток", participation: 3100, start: 2100, rebuy: 1000, price: 350, exit: 0, result: 0 },
    { number: 20, name: "Стас Мазепа", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 21, name: "Дмитрий Ник", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 22, name: "Инна Шашкина", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 23, name: "Соня Серж", participation: 3100, start: 2100, rebuy: 1000, price: 250, exit: 0, result: 0 },
    { number: 24, name: "Егор АА 11", participation: 3100, start: 2100, rebuy: 1000, price: 350, exit: 0, result: 0 }
];

// ========== ДЕНЬ 2 ==========
const day2Players = [
    { number: 1, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 0, price: 3050, exit: 13415, result: 14415 },
    { number: 2, name: "Леонид П", participation: 3100, start: 2100, rebuy: 0, price: 1200, exit: 9140, result: 10140 },
    { number: 3, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, price: 3600, exit: 8955, result: 9955 },
    { number: 4, name: "Дмитрий Ник", participation: 3100, start: 2100, rebuy: 0, price: 925, exit: 6605, result: 7605 },
    { number: 5, name: "Jane 007", participation: 3100, start: 2100, rebuy: 0, price: 1800, exit: 6250, result: 7250 },
    { number: 6, name: "Егор Вино", participation: 3100, start: 2100, rebuy: 1000, price: 400, exit: 7065, result: 7065 },
    { number: 7, name: "Иван Грозный", participation: 3100, start: 2100, rebuy: 1000, price: 1225, exit: 6185, result: 6185 },
    { number: 8, name: "Максим Б", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 4710, result: 5710 },
    { number: 9, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 4635, result: 5635 },
    { number: 10, name: "Егор АА 11", participation: 3100, start: 2100, rebuy: 0, price: 350, exit: 3975, result: 4975 },
    { number: 11, name: "Федор К", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 3150, result: 4150 },
    { number: 12, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, price: 1550, exit: 2920, result: 3920 },
    { number: 13, name: "Роман Лод", participation: 3100, start: 2100, rebuy: 0, price: 1500, exit: 2260, result: 3260 },
    { number: 14, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 1920, result: 2920 },
    { number: 15, name: "Богдан А", participation: 3100, start: 2100, rebuy: 1000, price: 400, exit: 2410, result: 2410 },
    { number: 16, name: "Андрей Фломастер", participation: 3100, start: 2100, rebuy: 1000, price: 400, exit: 2235, result: 2235 },
    { number: 17, name: "Юка", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 505, result: 1505 },
    { number: 18, name: "Стас ISK", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 385, result: 1385 },
    { number: 19, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 1000, price: 975, exit: 730, result: 730 },
    { number: 20, name: "Влад Владшток", participation: 3100, start: 2100, rebuy: 1000, price: 350, exit: 0, result: 0 },
    { number: 21, name: "Ирина Ага", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 22, name: "Анна К", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 23, name: "Кристина А", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 24, name: "Немощь", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 25, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 1000, price: 125, exit: 0, result: 0 },
    { number: 26, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 1000, price: 300, exit: 0, result: 0 }
];

// ========== ДЕНЬ 3 ==========
const day3Players = [
    { number: 1, name: "Леонид П", participation: 3100, start: 2100, rebuy: 0, price: 2980, exit: 18505, result: 19505 },
    { number: 2, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 0, price: 1025, exit: 16365, result: 17365 },
    { number: 3, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, price: 2950, exit: 10585, result: 11585 },
    { number: 4, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, price: 4500, exit: 9130, result: 10130 },
    { number: 5, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 0, price: 2090, exit: 8565, result: 9565 },
    { number: 6, name: "Настя К", participation: 3100, start: 2100, rebuy: 0, price: 1800, exit: 7515, result: 8515 },
    { number: 7, name: "Егор АА 11", participation: 3100, start: 2100, rebuy: 0, price: 950, exit: 7255, result: 8255 },
    { number: 8, name: "Андрей Фломастер", participation: 3100, start: 2100, rebuy: 0, price: 865, exit: 5520, result: 6520 },
    { number: 9, name: "Федор К", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 4690, result: 5690 },
    { number: 10, name: "Роман Лод", participation: 3100, start: 2100, rebuy: 0, price: 1500, exit: 4550, result: 5550 },
    { number: 11, name: "Егор Вино", participation: 3100, start: 2100, rebuy: 0, price: 1025, exit: 3835, result: 4835 },
    { number: 12, name: "Богдан А", participation: 3100, start: 2100, rebuy: 0, price: 650, exit: 3765, result: 4765 },
    { number: 13, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 3525, result: 4525 },
    { number: 14, name: "Даша Хромова", participation: 3100, start: 2100, rebuy: 0, price: 1265, exit: 3180, result: 4180 },
    { number: 15, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 0, price: 600, exit: 3060, result: 4060 },
    { number: 16, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 2675, result: 3675 },
    { number: 17, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, price: 3200, exit: 2070, result: 3070 },
    { number: 18, name: "Инна М", participation: 3100, start: 2100, rebuy: 1000, price: 400, exit: 3020, result: 3020 },
    { number: 19, name: "Влад Владшток", participation: 3100, start: 2100, rebuy: 1000, price: 585, exit: 2750, result: 2750 },
    { number: 20, name: "Вадим Зеленин", participation: 3100, start: 2100, rebuy: 1000, price: 400, exit: 1990, result: 1990 },
    { number: 21, name: "Соня Серж", participation: 3100, start: 2100, rebuy: 1000, price: 125, exit: 1845, result: 1845 },
    { number: 22, name: "София Например", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 705, result: 1705 },
    { number: 23, name: "Юка", participation: 3100, start: 2100, rebuy: 0, price: 800, exit: 515, result: 1515 },
    { number: 24, name: "Дмитрий Ник", participation: 3100, start: 2100, rebuy: 1000, price: 790, exit: 1210, result: 1210 },
    { number: 25, name: "Матвей МС", participation: 3100, start: 2100, rebuy: 0, price: 400, exit: 0, result: 1000 },
    { number: 26, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 1000, price: 490, exit: 880, result: 880 },
    { number: 27, name: "Jane 007", participation: 3100, start: 2100, rebuy: 1000, price: 225, exit: 200, result: 200 },
    { number: 28, name: "Владимир Бул", participation: 3100, start: 2100, rebuy: 1000, price: 410, exit: 0, result: 0 },
    { number: 29, name: "Андрей Пот", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 30, name: "Стас ISK", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 31, name: "Свидетель", participation: 3100, start: 2100, rebuy: 1000, price: 325, exit: 0, result: 0 },
    { number: 32, name: "grooveman", participation: 3100, start: 2100, rebuy: 1000, price: 490, exit: 0, result: 0 },
    { number: 33, name: "Николай Ж", participation: 3100, start: 2100, rebuy: 1000, price: 250, exit: 0, result: 0 },
    { number: 34, name: "Максим Б", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 35, name: "Андрей Морфиус", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 0, result: 0 },
    { number: 36, name: "Том", participation: 3100, start: 2100, rebuy: 1000, price: 465, exit: 0, result: 0 },
    { number: 37, name: "Кристина А", participation: 3100, start: 2100, rebuy: 1000, price: 50, exit: 0, result: 0 }
];

// ========== ДЕНЬ 4 ==========
const day4Players = [
    { number: 1, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 1000, price: 3985, exit: 21270, result: 21270 },
    { number: 2, name: "Семён Ануфриев", participation: 3100, start: 2100, rebuy: 1000, price: 2570, exit: 17415, result: 17415 },
    { number: 3, name: "Богдан А", participation: 3100, start: 2100, rebuy: 1000, price: 740, exit: 15830, result: 15830 },
    { number: 4, name: "Кристина А", participation: 3100, start: 2100, rebuy: 0, price: 100, exit: 6045, result: 7045 },
    { number: 5, name: "Стас ISK", participation: 3100, start: 2100, rebuy: 0, price: 1345, exit: 5725, result: 6725 },
    { number: 6, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 0, price: 925, exit: 4080, result: 5080 },
    { number: 7, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, price: 3200, exit: 3890, result: 4890 },
    { number: 8, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, price: 3465, exit: 3220, result: 4220 },
    { number: 9, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 0, price: 2090, exit: 2575, result: 3575 },
    { number: 10, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, price: 4500, exit: 2460, result: 3460 },
    { number: 11, name: "Даша Хромова", participation: 3100, start: 2100, rebuy: 1000, price: 635, exit: 2330, result: 2330 },
    { number: 12, name: "Немощь", participation: 3100, start: 2100, rebuy: 0, price: 495, exit: 1220, result: 2220 },
    { number: 13, name: "Соня Серж", participation: 3100, start: 2100, rebuy: 0, price: 125, exit: 595, result: 1595 },
    { number: 14, name: "Влад Владшток", participation: 3100, start: 2100, rebuy: 1000, price: 295, exit: 1500, result: 1500 },
    { number: 15, name: "Егор Вино", participation: 3100, start: 2100, rebuy: 1000, price: 130, exit: 1470, result: 1470 },
    { number: 16, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 0, price: 3635, exit: 80, result: 1080 },
    { number: 17, name: "Инна М", participation: 3100, start: 2100, rebuy: 1000, price: 200, exit: 655, result: 655 },
    { number: 18, name: "Jane 007", participation: 3100, start: 2100, rebuy: 1000, price: 30, exit: 200, result: 200 },
    { number: 19, name: "Егор АА 11", participation: 3100, start: 2100, rebuy: 1000, price: 240, exit: 0, result: 0 },
    { number: 20, name: "Robert Юниксфактёр", participation: 3100, start: 2100, rebuy: 1000, price: 350, exit: 0, result: 0 },
    { number: 21, name: "Максим Б", participation: 3100, start: 2100, rebuy: 1000, price: 50, exit: 0, result: 0 },
    { number: 22, name: "Матвей МС", participation: 3100, start: 2100, rebuy: 1000, price: 235, exit: 0, result: 0 },
    { number: 23, name: "Иван Грозный", participation: 3100, start: 2100, rebuy: 1000, price: 310, exit: 0, result: 0 },
    { number: 24, name: "Андрей Фломастер", participation: 3100, start: 2100, rebuy: 1000, price: 220, exit: 0, result: 0 }
];

// ========== ОХОТНИЧЬИ ДАННЫЕ ДЛЯ ИТОГОВ ==========
const huntingData = {
    "Максим Spy": 2090, "Полина Матыцына": 925, "Макар Аве": 600, "Дмитрий Ник": 790,
    "Стас Мазепа": 200, "Андрей Мазепа": 3435, "Михаил Козадой": 3465, "Том": 465,
    "Никита Зейн": 3985, "Вадим Зеленин": 400, "Богдан А": 740, "Надя Жб": 800,
    "Саша Коч": 3200, "Егор АА 11": 240, "Владимир Бул": 410, "Инна М": 200,
    "Инна Шашкина": 200, "grooveman": 490, "Алексей Ершов": 900, "Михаил Наб": 3635,
    "Соня Серж": 125, "Влад Владшток": 295, "Семён Ануфриев": 2570, "Шурик Шилкин": 4500,
    "Кристина А": 100, "Федор К": 800, "Юка": 800, "Егор Вино": 130,
    "Jane 007": 30, "Евгений Ц": 800, "Максим Б": 50, "Леонид П": 2980,
    "Андрей Фломастер": 220, "Иван Грозный": 310, "Роман Лод": 1500, "Немощь": 495,
    "Ирина Ага": 200, "Анна К": 200, "Стас ISK": 1345, "Матвей МС": 235,
    "Андрей Морфиус": 200, "Николай Ж": 250, "Настя К": 1800, "София Например": 800,
    "Даша Хромова": 635, "Андрей Пот": 200, "Свидетель": 325, "Robert Юниксфактёр": 350,
    "Ксюша Лис": 200, "Вадим Константинов": 300, "Влад Сам": 200, "Серж": 200
};

// ========== ТРОФЕИ ДЛЯ ИТОГОВ ==========
const trophiesData = {
    "Никита Зейн": 7970, "Шурик Шилкин": 9000, "Леонид П": 2980, "Семён Ануфриев": 2570,
    "Андрей Мазепа": 1720, "Михаил Козадой": 6930, "Михаил Наб": 5455, "Богдан А": 1480,
    "Саша Коч": 4800, "Максим Spy": 4180, "Полина Матыцына": 1850, "Егор АА 11": 480,
    "Надя Жб": 1200, "Егор Вино": 195, "Том": 465, "Федор К": 800, "Роман Лод": 1500,
    "Стас ISK": 2020, "Евгений Ц": 800, "Дмитрий Ник": 1185, "Jane 007": 45, "Настя К": 900,
    "Андрей Фломастер": 330, "grooveman": 490, "Кристина А": 150, "Даша Хромова": 635,
    "Инна М": 300, "Иван Грозный": 310, "Вадим Зеленин": 400, "Макар Аве": 600,
    "Максим Б": 75, "Влад Владшток": 590, "Юка": 800, "Соня Серж": 190,
    "Алексей Ершов": 450, "Немощь": 495, "София Например": 400, "Матвей МС": 235,
    "Владимир Бул": 410, "Robert Юниксфактёр": 175, "Свидетель": 165, "Николай Ж": 125,
    "Стас Мазепа": 100, "Инна Шашкина": 100, "Ирина Ага": 100, "Анна К": 100,
    "Андрей Морфиус": 100, "Андрей Пот": 100, "Ксюша Лис": 200, "Вадим Константинов": 300,
    "Влад Сам": 200, "Серж": 200
};

// ========== НОМИНАЦИИ ДЛЯ ИТОГОВ ==========
const nominationsData = {
    "Никита Зейн": 4000, "Михаил Наб": 3000, "Jane 007": 2000, "Максим Б": 5000
};

// ========== УЧАСТИЕ В ФИНАЛЕ ==========
const finalParticipation = 3000;

// ========== ИТОГИ ==========
let tournamentResults = [];

function initTournamentResults() {
    const resultsMap = new Map();
    
    const allPlayersSet = new Set();
    day1Players.forEach(p => allPlayersSet.add(p.name));
    day2Players.forEach(p => allPlayersSet.add(p.name));
    day3Players.forEach(p => allPlayersSet.add(p.name));
    day4Players.forEach(p => allPlayersSet.add(p.name));
    
    allPlayersSet.forEach(name => {
        const day1 = day1Players.find(p => p.name === name)?.result || 0;
        const day2 = day2Players.find(p => p.name === name)?.result || 0;
        const day3 = day3Players.find(p => p.name === name)?.result || 0;
        const day4 = day4Players.find(p => p.name === name)?.result || 0;
        const qualifying = day1 + day2 + day3 + day4;
        const hunting = huntingData[name] || 0;
        const trophies = trophiesData[name] || 0;
        const nominations = nominationsData[name] || 0;
        const total = qualifying + trophies + finalParticipation + nominations;
        
        resultsMap.set(name, {
            name: name,
            day1: day1 > 0 ? day1 : null,
            day2: day2 > 0 ? day2 : null,
            day3: day3 > 0 ? day3 : null,
            day4: day4 > 0 ? day4 : null,
            qualifying: qualifying,
            hunting: hunting,
            trophies: trophies,
            finalParticipation: finalParticipation,
            nominations: nominations,
            total: total
        });
    });
    
    tournamentResults = Array.from(resultsMap.values()).sort((a, b) => b.total - a.total);
}

function getPositionChangesForResults() {
    const afterThreeDays = [...tournamentResults].sort((a, b) => {
        const sumA = (a.day1 || 0) + (a.day2 || 0) + (a.day3 || 0);
        const sumB = (b.day1 || 0) + (b.day2 || 0) + (b.day3 || 0);
        return sumB - sumA;
    });
    
    const currentSorted = [...tournamentResults].sort((a, b) => b.total - a.total);
    const changes = new Map();
    
    currentSorted.forEach((player, newIdx) => {
        const oldIdx = afterThreeDays.findIndex(p => p.name === player.name);
        if (oldIdx === -1) {
            changes.set(player.name, { change: 0, type: 'new' });
        } else {
            const diff = oldIdx - newIdx;
            if (diff > 0) changes.set(player.name, { change: diff, type: 'up' });
            else if (diff < 0) changes.set(player.name, { change: Math.abs(diff), type: 'down' });
            else changes.set(player.name, { change: 0, type: 'same' });
        }
    });
    return changes;
}

// ========== ОХОТНИЧЬИ НОМИНАЦИИ ==========
const huntingNominations = [
    { number: 1, name: "Михаил Наб", r1: 800, r2: 400, r3: 400, r4: 800, r5: 1400, r6: 400, r7: 400, r8: 700, r9: 650, r10: 515, sum: 6465, count: 10, avg: 645 },
    { number: 2, name: "Семён Ануфриев", r1: 800, r2: 1400, r3: 400, r4: 1265, r5: 465, r6: 260, r7: 950, r8: 700, r9: 60, r10: 0, sum: 6300, count: 9, avg: 700 },
    { number: 3, name: "Андрей Мазепа", r1: 1400, r2: 800, r3: 1000, r4: 400, r5: 1200, r6: 1300, r7: 675, r8: 0, r9: 0, r10: 0, sum: 6775, count: 7, avg: 970 },
    { number: 4, name: "Никита Зейн", r1: 800, r2: 1000, r3: 930, r4: 200, r5: 1400, r6: 4375, r7: 0, r8: 0, r9: 0, r10: 0, sum: 8705, count: 6, avg: 1450 },
    { number: 5, name: "Шурик Шилкин", r1: 1950, r2: 2050, r3: 250, r4: 800, r5: 400, r6: 350, r7: 0, r8: 0, r9: 0, r10: 0, sum: 5800, count: 6, avg: 965 },
    { number: 6, name: "Михаил Козадой", r1: 700, r2: 100, r3: 1800, r4: 900, r5: 1025, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 4525, count: 5, avg: 905 },
    { number: 7, name: "Леонид П", r1: 800, r2: 975, r3: 800, r4: 400, r5: 1250, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 4225, count: 5, avg: 845 },
    { number: 8, name: "Богдан А", r1: 600, r2: 500, r3: 225, r4: 115, r5: 475, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 1915, count: 5, avg: 383 },
    { number: 9, name: "Владимир Бул", r1: 700, r2: 400, r3: 1650, r4: 815, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 3565, count: 4, avg: 890 },
    { number: 10, name: "Иван Грозный", r1: 1200, r2: 800, r3: 500, r4: 400, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 2900, count: 4, avg: 725 },
    { number: 11, name: "Полина Матыцына", r1: 800, r2: 500, r3: 200, r4: 865, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 2365, count: 4, avg: 590 },
    { number: 12, name: "Дмитрий Ник", r1: 800, r2: 250, r3: 400, r4: 645, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 2095, count: 4, avg: 525 },
    { number: 13, name: "Том", r1: 1000, r2: 1500, r3: 200, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 2700, count: 3, avg: 900 },
    { number: 14, name: "Стас ISK", r1: 435, r2: 1225, r3: 615, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 2275, count: 3, avg: 760 },
    { number: 15, name: "Саша Коч", r1: 1600, r2: 2400, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 4000, count: 2, avg: 2000 },
    { number: 16, name: "Максим Spy", r1: 1950, r2: 1625, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 3575, count: 2, avg: 1790 },
    { number: 17, name: "Настя К", r1: 800, r2: 800, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 1600, count: 2, avg: 800 },
    { number: 18, name: "Егор Вино", r1: 800, r2: 450, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 1250, count: 2, avg: 625 },
    { number: 19, name: "Егор АА 11", r1: 800, r2: 400, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 1200, count: 2, avg: 600 },
    { number: 20, name: "Роман Лод", r1: 200, r2: 800, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 1000, count: 2, avg: 500 },
    { number: 21, name: "Матвей МС", r1: 1025, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 1025, count: 1, avg: 1025 },
    { number: 22, name: "Свидетель", r1: 975, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 975, count: 1, avg: 975 },
    { number: 23, name: "Андрей Фломастер", r1: 925, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 925, count: 1, avg: 925 },
    { number: 24, name: "Даша Хромова", r1: 925, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 925, count: 1, avg: 925 },
    { number: 25, name: "Jane 007", r1: 800, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 800, count: 1, avg: 800 },
    { number: 26, name: "grooveman", r1: 700, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 700, count: 1, avg: 700 },
    { number: 27, name: "Немощь", r1: 585, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 585, count: 1, avg: 585 },
    { number: 28, name: "Николай Ж", r1: 400, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 400, count: 1, avg: 400 },
    { number: 29, name: "Алексей Ершов", r1: 200, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 200, count: 1, avg: 200 },
    { number: 30, name: "Кристина А", r1: 100, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, r9: 0, r10: 0, sum: 100, count: 1, avg: 100 }
];

// ========== РЕЙТИНГ (обновленный) ==========
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

// ========== ДОБАВКИ ЗА ФИНАЛ ==========
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

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabs .tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    const targetBtn = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
    if (targetBtn) targetBtn.classList.add('active');
    
    const phases = {
        'finalResults': 'Результаты финала', 'day1': 'День 1 - 2.04.2026', 'day2': 'День 2 - 9.04.2026',
        'day3': 'День 3 - 16.04.2026', 'day4': 'День 4 - 23.04.2026',
        'tournamentResults': 'Итоги Сезона Охоты А-2', 'huntingNominations': 'Охотничьи номинации',
        'rating': 'Рейтинг', 'previousResults': 'Результаты Туза весны 2026'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Сезон Охоты А-2';
    
    resetTableExpand();
    document.getElementById('searchInput').value = '';
    
    if (tabName === 'finalResults') fillFinalResultsTable();
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'day3') fillDay3Table();
    else if (tabName === 'day4') fillDay4Table();
    else if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'tournamentResults') fillTournamentResultsTable();
    else if (tabName === 'huntingNominations') fillHuntingNominationsTable();
    
    updateStats();
}

function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    const tables = document.querySelectorAll(`#${activeTab.id} .tournament-table`);
    if (!tables.length) return;
    tables.forEach(t => t.classList.toggle('expanded'));
    document.querySelector('.expand-button').textContent = tables[0].classList.contains('expanded') ? 'Свернуть таблицу' : 'Развернуть таблицу';
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    document.querySelector('.expand-button').textContent = 'Развернуть таблицу';
}

// ========== ЗАПОЛНЕНИЕ ТАБЛИЦ ==========
function fillFinalResultsTable() {
    const tbody = document.getElementById('finalResultsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    finalResultsData.forEach((p, i) => {
        let rowClass = '';
        if (p.place === 1) rowClass = 'final-gold';
        else if (p.place === 2) rowClass = 'final-silver';
        else if (p.place === 3) rowClass = 'final-bronze';
        else if (p.place >= 4 && p.place <= 25) rowClass = 'final-finalist';
        else rowClass = 'final-participant';
        
        tbody.innerHTML += `<tr class="${rowClass}">
            <td class="number-column">${i+1}</td>
            <td class="player-name">${p.name}</td>
            <td class="place-column">${p.place}</td>
            <td class="place-notes">${p.status}</td>
        </tr>`;
    });
}

function fillDay1Table() {
    const tbody = document.getElementById('day1Table');
    if (!tbody) return;
    tbody.innerHTML = '';
    day1Players.forEach(p => {
        tbody.innerHTML += `<tr>
            <td class="number-column">${p.number}</td>
            <td class="player-name">${p.name}</td>
            <td>${formatNumber(p.participation)}</td>
            <td>${formatNumber(p.start)}</td>
            <td>${formatNumber(p.rebuy)}</td>
            <td>${formatNumber(p.price)}</td>
            <td class="exit-time">${formatNumber(p.exit)}</td>
            <td class="chips-positive">${formatNumber(p.result)}</td>
         </tr>`;
    });
}

function fillDay2Table() {
    const tbody = document.getElementById('day2Table');
    if (!tbody) return;
    tbody.innerHTML = '';
    day2Players.forEach(p => {
        tbody.innerHTML += `<tr>
            <td class="number-column">${p.number}</td>
            <td class="player-name">${p.name}</td>
            <td>${formatNumber(p.participation)}</td>
            <td>${formatNumber(p.start)}</td>
            <td>${formatNumber(p.rebuy)}</td>
            <td>${formatNumber(p.price)}</td>
            <td class="exit-time">${formatNumber(p.exit)}</td>
            <td class="chips-positive">${formatNumber(p.result)}</td>
         </tr>`;
    });
}

function fillDay3Table() {
    const tbody = document.getElementById('day3Table');
    if (!tbody) return;
    tbody.innerHTML = '';
    day3Players.forEach(p => {
        tbody.innerHTML += `<tr>
            <td class="number-column">${p.number}</td>
            <td class="player-name">${p.name}</td>
            <td>${formatNumber(p.participation)}</td>
            <td>${formatNumber(p.start)}</td>
            <td>${formatNumber(p.rebuy)}</td>
            <td>${formatNumber(p.price)}</td>
            <td class="exit-time">${formatNumber(p.exit)}</td>
            <td class="chips-positive">${formatNumber(p.result)}</td>
         </tr>`;
    });
}

function fillDay4Table() {
    const tbody = document.getElementById('day4Table');
    if (!tbody) return;
    tbody.innerHTML = '';
    day4Players.forEach(p => {
        tbody.innerHTML += `<tr>
            <td class="number-column">${p.number}</td>
            <td class="player-name">${p.name}</td>
            <td>${formatNumber(p.participation)}</td>
            <td>${formatNumber(p.start)}</td>
            <td>${formatNumber(p.rebuy)}</td>
            <td>${formatNumber(p.price)}</td>
            <td class="exit-time">${formatNumber(p.exit)}</td>
            <td class="chips-positive">${formatNumber(p.result)}</td>
         </tr>`;
    });
}

function fillPreviousResultsTable() {
    const tbody = document.getElementById('previousResultsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    previousTournamentResults.forEach((p, i) => {
        const placeClass = p.place === 1 ? 'gold-place' : 'green-place';
        tbody.innerHTML += `<tr class="${placeClass}">
            <td class="number-column">${i+1}</td>
            <td class="player-name">${p.name}</td>
            <td class="place-column ${placeClass}">${p.place} ${p.place === 1 ? '🥇' : ''}</td>
            <td class="place-notes">${p.status}</td>
         </tr>`;
    });
}

function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    const changes = getPositionChangesForResults();
    
    tournamentResults.slice(0, 100).forEach((p, i) => {
        const change = changes.get(p.name);
        let changeHtml = '';
        if (change) {
            if (change.type === 'new') changeHtml = '<div class="position-change position-new">NEW</div>';
            else if (change.type === 'up') changeHtml = `<div class="position-change position-up"><span class="change-arrow">▲</span>${change.change}</div>`;
            else if (change.type === 'down') changeHtml = `<div class="position-change position-down"><span class="change-arrow">▼</span>${change.change}</div>`;
            else changeHtml = '<div class="position-change position-same"><span class="change-arrow">→</span>0</div>';
        }
        
        tbody.innerHTML += `<tr>
            <td class="number-column">${i+1}</td>
            <td class="player-name">${p.name}</td>
            <td>${changeHtml}</td>
            <td class="${p.day1 >= 0 ? 'chips-positive' : 'chips-negative'}">${p.day1 !== null ? formatNumber(p.day1) : '-'}</td>
            <td class="${p.day2 >= 0 ? 'chips-positive' : 'chips-negative'}">${p.day2 !== null ? formatNumber(p.day2) : '-'}</td>
            <td class="${p.day3 >= 0 ? 'chips-positive' : 'chips-negative'}">${p.day3 !== null ? formatNumber(p.day3) : '-'}</td>
            <td class="${p.day4 >= 0 ? 'chips-positive' : 'chips-negative'}">${p.day4 !== null ? formatNumber(p.day4) : '-'}</td>
            <td class="chips-positive">${formatNumber(p.qualifying)}</td>
            <td class="chips-positive">${p.hunting > 0 ? formatNumber(p.hunting) : '-'}</td>
            <td class="chips-positive">${p.trophies > 0 ? formatNumber(p.trophies) : '-'}</td>
            <td class="chips-positive">${formatNumber(p.finalParticipation)}</td>
            <td class="chips-positive">${p.nominations > 0 ? formatNumber(p.nominations) : '-'}</td>
            <td class="rating-number">${formatNumber(p.total)}</td>
         </tr>`;
    });
}

function fillHuntingNominationsTable() {
    const tbody = document.getElementById('huntingNominationsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    huntingNominations.forEach((n, idx) => {
        let nameClass = 'player-name';
        let countClass = '';
        let avgClass = '';
        
        if (n.name === "Михаил Наб" || n.name === "Никита Зейн" || n.name === "Jane 007") {
            nameClass = 'player-name hunting-crown';
        }
        if (n.name === "Михаил Наб") {
            countClass = 'hunting-highlight-count';
        }
        if (n.name === "Никита Зейн") {
            avgClass = 'hunting-highlight-avg';
        }
        
        tbody.innerHTML += `<tr>
            <td class="number-column">${n.number}</td>
            <td class="${nameClass}">${n.name}</td>
            <td class="chips-positive">${formatNumber(n.r1)}</td>
            <td class="chips-positive">${n.r2 > 0 ? formatNumber(n.r2) : '-'}</td>
            <td class="chips-positive">${n.r3 > 0 ? formatNumber(n.r3) : '-'}</td>
            <td class="chips-positive">${n.r4 > 0 ? formatNumber(n.r4) : '-'}</td>
            <td class="chips-positive">${n.r5 > 0 ? formatNumber(n.r5) : '-'}</td>
            <td class="chips-positive">${n.r6 > 0 ? formatNumber(n.r6) : '-'}</td>
            <td class="chips-positive">${n.r7 > 0 ? formatNumber(n.r7) : '-'}</td>
            <td class="chips-positive">${n.r8 > 0 ? formatNumber(n.r8) : '-'}</td>
            <td class="chips-positive">${n.r9 > 0 ? formatNumber(n.r9) : '-'}</td>
            <td class="chips-positive">${n.r10 > 0 ? formatNumber(n.r10) : '-'}</td>
            <td class="rating-positive">${formatNumber(n.sum)}</td>
            <td class="attendance-value ${countClass}">${n.count}</td>
            <td class="rating-number ${avgClass}">${formatNumber(n.avg)}</td>
         </tr>`;
    });
}

// ========== РЕЙТИНГ ==========
function calculateNewRating() {
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
    return result;
}

function calculatePositionChanges() {
    const newRating = calculateNewRating();
    const oldSorted = [...ratingBeforeFinal].sort((a, b) => b.rating - a.rating);
    const newSorted = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const changes = new Map();
    const oldNames = new Set(ratingBeforeFinal.map(p => p.name));
    
    newSorted.forEach((player, newIdx) => {
        if (!oldNames.has(player.name)) {
            changes.set(player.name, { change: 0, type: 'new' });
        } else {
            const oldIdx = oldSorted.findIndex(p => p.name === player.name);
            const diff = oldIdx - newIdx;
            if (diff > 0) changes.set(player.name, { change: diff, type: 'up' });
            else if (diff < 0) changes.set(player.name, { change: Math.abs(diff), type: 'down' });
            else changes.set(player.name, { change: 0, type: 'same' });
        }
    });
    return changes;
}

function fillRatingTable() {
    const tbody = document.getElementById('ratingTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    const newRating = calculateNewRating();
    const changes = calculatePositionChanges();
    const sorted = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    sorted.forEach((p, idx) => {
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
        
        const isTop19 = idx < 19;
        const isNikitaYellow = p.name === "Никита Yellow";
        const rowClass = (isTop19 || isNikitaYellow) ? 'rating-highlight' : '';
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        tbody.innerHTML += `<tr class="${rowClass}">
            <td class="number-column">${idx+1}</td>
            <td class="${nameClass}">${p.name}</td>
            <td>${changeHtml}</td>
            <td>${p.previousRating > 0 ? p.previousRating : '-'}</td>
            <td class="attendance-value">${p.attendance}</td>
            <td class="${changeClass}">${changeSign}</td>
            <td class="rating-number">${p.newRating}</td>
         </tr>`;
    });
}

// ========== ПОИСК ==========
function searchPlayers() {
    const term = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (term === '') {
        if (activeTab.id === 'finalResults') fillFinalResultsTable();
        else if (activeTab.id === 'day1') fillDay1Table();
        else if (activeTab.id === 'day2') fillDay2Table();
        else if (activeTab.id === 'day3') fillDay3Table();
        else if (activeTab.id === 'day4') fillDay4Table();
        else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        else if (activeTab.id === 'rating') fillRatingTable();
        else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        else if (activeTab.id === 'huntingNominations') fillHuntingNominationsTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let found = 0;
    if (activeTab.id === 'finalResults') found = finalResultsData.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'day1') found = day1Players.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'day2') found = day2Players.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'day3') found = day3Players.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'day4') found = day4Players.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'previousResults') found = previousTournamentResults.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'rating') found = calculateNewRating().filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'tournamentResults') found = tournamentResults.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'huntingNominations') found = huntingNominations.filter(p => p.name.toLowerCase().includes(term)).length;
    
    document.getElementById('resultsCount').textContent = found;
    document.getElementById('searchResults').style.display = 'block';
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    const allPlayers = [...new Set([
        ...previousTournamentResults.map(p => p.name),
        ...calculateNewRating().map(p => p.name),
        ...finalResultsData.map(p => p.name),
        ...day1Players.map(p => p.name),
        ...day2Players.map(p => p.name),
        ...day3Players.map(p => p.name),
        ...day4Players.map(p => p.name),
        ...huntingNominations.map(p => p.name)
    ])];
    
    input.addEventListener('input', () => {
        const val = input.value.toLowerCase().trim();
        autocomplete.innerHTML = '';
        if (val.length < 2) { autocomplete.style.display = 'none'; return; }
        const suggestions = allPlayers.filter(n => n.toLowerCase().includes(val)).slice(0, 8);
        if (suggestions.length) {
            suggestions.forEach(s => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                div.innerHTML = s.replace(new RegExp(`(${val})`, 'gi'), '<span class="autocomplete-highlight">$1</span>');
                div.onclick = () => { input.value = s; autocomplete.style.display = 'none'; searchPlayers(); };
                autocomplete.appendChild(div);
            });
            autocomplete.style.display = 'block';
        } else autocomplete.style.display = 'none';
    });
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !autocomplete.contains(e.target)) autocomplete.style.display = 'none';
    });
}

function updateStats() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    let total = 0, avg = 0;
    if (activeTab.id === 'finalResults') { total = finalResultsData.length; }
    else if (activeTab.id === 'day1') { total = day1Players.length; avg = Math.round(day1Players.reduce((s, p) => s + p.result, 0) / total); }
    else if (activeTab.id === 'day2') { total = day2Players.length; avg = Math.round(day2Players.reduce((s, p) => s + p.result, 0) / total); }
    else if (activeTab.id === 'day3') { total = day3Players.length; avg = Math.round(day3Players.reduce((s, p) => s + p.result, 0) / total); }
    else if (activeTab.id === 'day4') { total = day4Players.length; avg = Math.round(day4Players.reduce((s, p) => s + p.result, 0) / total); }
    else if (activeTab.id === 'previousResults') total = previousTournamentResults.length;
    else if (activeTab.id === 'rating') total = calculateNewRating().length;
    else if (activeTab.id === 'tournamentResults') { total = tournamentResults.length; avg = Math.round(tournamentResults.reduce((s, p) => s + p.total, 0) / total); }
    else if (activeTab.id === 'huntingNominations') total = huntingNominations.length;
    document.getElementById('totalPlayers').textContent = total;
    document.getElementById('averageStack').textContent = avg;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    initTournamentResults();
    fillFinalResultsTable();
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillDay4Table();
    fillPreviousResultsTable();
    fillTournamentResultsTable();
    fillHuntingNominationsTable();
    fillRatingTable();
    setupAutocomplete();
    showTab('finalResults');
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        searchPlayers();
    });
    updateStats();
});
