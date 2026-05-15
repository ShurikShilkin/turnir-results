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

// Данные 2 дня
const day2Data = [
    { name: "Jane 007", participation: 3100, start: 2100, extra: 0, exit: 31320, win: 32320, finalParticipation: 1000, dealer: 200, finalChips: 6200, total: 7400 },
    { name: "Немощь", participation: 3100, start: 2100, extra: 3000, exit: 22765, win: 20765, finalParticipation: 1000, dealer: 0, finalChips: 6000, total: 6000 },
    { name: "Влад Владшток", participation: 3100, start: 2100, extra: 0, exit: 13040, win: 14040, finalParticipation: 1000, dealer: 0, finalChips: 5800, total: 6800 },
    { name: "Матвей МС", participation: 3100, start: 2100, extra: 1000, exit: 6710, win: 6710, finalParticipation: 1000, dealer: 0, finalChips: 5600, total: 6600 },
    { name: "Максим Spy", participation: 3100, start: 2100, extra: 0, exit: 5270, win: 6270, finalParticipation: 1000, dealer: 400, finalChips: 5400, total: 6800 },
    { name: "Семён Ануфриев", participation: 3100, start: 2100, extra: 3200, exit: 8445, win: 6245, finalParticipation: 1000, dealer: 400, finalChips: 5200, total: 5500 },
    { name: "Любовь Т", participation: 3100, start: 2100, extra: 1000, exit: 5900, win: 5900, finalParticipation: 1000, dealer: 0, finalChips: 5000, total: 6000 },
    { name: "Полина Матыцына", participation: 3100, start: 2100, extra: 0, exit: 4505, win: 5505, finalParticipation: 1000, dealer: 0, finalChips: 4800, total: 5800 },
    { name: "Стас ISK", participation: 3100, start: 2100, extra: 3000, exit: 7175, win: 5175, finalParticipation: 1000, dealer: 0, finalChips: 4600, total: 4600 },
    { name: "Миша Нестер", participation: 3100, start: 2100, extra: 3000, exit: 6335, win: 4335, finalParticipation: 1000, dealer: 0, finalChips: 4400, total: 4400 },
    { name: "Шурик Шилкин", participation: 3100, start: 2100, extra: 0, exit: 2980, win: 3980, finalParticipation: 1000, dealer: 200, finalChips: 4200, total: 5400 },
    { name: "Макар Аве", participation: 3100, start: 2100, extra: 0, exit: 2830, win: 3830, finalParticipation: 1000, dealer: 0, finalChips: 4000, total: 5000 },
    { name: "Евгений Ц", participation: 3100, start: 2100, extra: 1000, exit: 3545, win: 3545, finalParticipation: 1000, dealer: 0, finalChips: 3800, total: 4800 },
    { name: "Федор К", participation: 3100, start: 2100, extra: 0, exit: 545, win: 1545, finalParticipation: 1000, dealer: 0, finalChips: 3600, total: 4600 },
    { name: "Михаил Наб", participation: 3100, start: 2100, extra: 0, exit: 315, win: 1315, finalParticipation: 1000, dealer: 0, finalChips: 3400, total: 4400 },
    { name: "Богдан А", participation: 3100, start: 2100, extra: 0, exit: 275, win: 1275, finalParticipation: 1000, dealer: 400, finalChips: 3200, total: 4600 },
    { name: "Егор АА 11", participation: 3100, start: 2100, extra: 0, exit: 0, win: 1000, finalParticipation: 1000, dealer: 0, finalChips: 3000, total: 4000 },
    { name: "Влад Сам", participation: 3100, start: 2100, extra: 0, exit: 0, win: 1000, finalParticipation: 1000, dealer: 200, finalChips: 2800, total: 4000 },
    { name: "Михаил Козадой", participation: 3100, start: 2100, extra: 3000, exit: 2610, win: 610, finalParticipation: 1000, dealer: 0, finalChips: 2600, total: 2600 },
    { name: "Всеволод Кузнецов", participation: 3100, start: 2100, extra: 1000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 2400, total: 3400 },
    { name: "Даша Хромова", participation: 3100, start: 2100, extra: 1000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 2200, total: 3200 },
    { name: "Егор Вино", participation: 3100, start: 2100, extra: 3000, exit: 1915, win: -85, finalParticipation: 1000, dealer: 0, finalChips: 2000, total: 2000 },
    { name: "Настя К", participation: 3100, start: 2100, extra: 3000, exit: 1220, win: -780, finalParticipation: 1000, dealer: 0, finalChips: 1800, total: 1800 },
    { name: "Саша Коч", participation: 3100, start: 2100, extra: 2000, exit: 0, win: -1000, finalParticipation: 1000, dealer: 0, finalChips: 1600, total: 2100 },
    { name: "Никита Зейн", participation: 3100, start: 2100, extra: 3000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1400, total: 1400 },
    { name: "Артём SUB", participation: 3100, start: 2100, extra: 3000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1200, total: 1200 },
    { name: "Том", participation: 3100, start: 2100, extra: 16600, exit: 0, win: -15600, finalParticipation: 1000, dealer: 0, finalChips: 1000, total: -5800 }
];

// Данные 3 дня
const day3Data = [
    { name: "Любовь Т", participation: 3100, start: 2100, extra: 0, exit: 15630, win: 16630, finalParticipation: 1000, dealer: 0, finalChips: 7400, total: 8400 },
    { name: "Иван Сидоров", participation: 3100, start: 2100, extra: 0, exit: 15270, win: 16270, finalParticipation: 1000, dealer: 0, finalChips: 7200, total: 8200 },
    { name: "Вова Баж", participation: 3100, start: 2100, extra: 0, exit: 14060, win: 15060, finalParticipation: 1000, dealer: 0, finalChips: 7000, total: 8000 },
    { name: "Максим Spy", participation: 3100, start: 2100, extra: 0, exit: 12955, win: 13955, finalParticipation: 1000, dealer: 200, finalChips: 6800, total: 8000 },
    { name: "Влад Владшток", participation: 3100, start: 2100, extra: 0, exit: 11550, win: 12550, finalParticipation: 1000, dealer: 0, finalChips: 6600, total: 7600 },
    { name: "Шурик Шилкин", participation: 3100, start: 2100, extra: 0, exit: 10980, win: 11980, finalParticipation: 1000, dealer: 100, finalChips: 6400, total: 7500 },
    { name: "Jane 007", participation: 3100, start: 2100, extra: 1000, exit: 11135, win: 11135, finalParticipation: 1000, dealer: 200, finalChips: 6200, total: 7400 },
    { name: "Дмитрий Ник", participation: 3100, start: 2100, extra: 0, exit: 9300, win: 10300, finalParticipation: 1000, dealer: 100, finalChips: 6000, total: 7100 },
    { name: "Даша Хромова", participation: 3100, start: 2100, extra: 0, exit: 8250, win: 9250, finalParticipation: 1000, dealer: 0, finalChips: 5800, total: 6800 },
    { name: "Полина Матыцына", participation: 3100, start: 2100, extra: 0, exit: 6385, win: 7385, finalParticipation: 1000, dealer: 0, finalChips: 5600, total: 6600 },
    { name: "Роман Лод", participation: 3100, start: 2100, extra: 3000, exit: 7945, win: 5945, finalParticipation: 1000, dealer: 0, finalChips: 5400, total: 5400 },
    { name: "Лика Ясева", participation: 3100, start: 2100, extra: 3000, exit: 7400, win: 5400, finalParticipation: 1000, dealer: 0, finalChips: 5200, total: 5200 },
    { name: "Семён Ануфриев", participation: 3100, start: 2100, extra: 5000, exit: 9325, win: 5325, finalParticipation: 1000, dealer: 300, finalChips: 5000, total: 4300 },
    { name: "Макар Аве", participation: 3100, start: 2100, extra: 0, exit: 3070, win: 4070, finalParticipation: 1000, dealer: 400, finalChips: 4800, total: 6200 },
    { name: "Саша Тяжелов", participation: 3100, start: 2100, extra: 0, exit: 3035, win: 4035, finalParticipation: 1000, dealer: 0, finalChips: 4600, total: 5600 },
    { name: "Артём SUB", participation: 3100, start: 2100, extra: 0, exit: 2880, win: 3880, finalParticipation: 1000, dealer: 0, finalChips: 4400, total: 5400 },
    { name: "Анастасия Ильина", participation: 3100, start: 2100, extra: 0, exit: 1560, win: 2560, finalParticipation: 1000, dealer: 0, finalChips: 4200, total: 5200 },
    { name: "Никита Башкин", participation: 3100, start: 2100, extra: 1000, exit: 2480, win: 2480, finalParticipation: 1000, dealer: 100, finalChips: 4000, total: 5100 },
    { name: "Егор АА 11", participation: 3100, start: 2100, extra: 9000, exit: 10425, win: 2425, finalParticipation: 1000, dealer: 0, finalChips: 3800, total: 800 },
    { name: "Немощь", participation: 3100, start: 2100, extra: 5000, exit: 4500, win: 500, finalParticipation: 1000, dealer: 0, finalChips: 3600, total: 2600 },
    { name: "Мария Павлова", participation: 3100, start: 2100, extra: 1000, exit: 335, win: 335, finalParticipation: 1000, dealer: 100, finalChips: 3400, total: 4500 },
    { name: "Богдан А", participation: 3100, start: 2100, extra: 1000, exit: 305, win: 305, finalParticipation: 1000, dealer: 0, finalChips: 3200, total: 4200 },
    { name: "Егор Вино", participation: 3100, start: 2100, extra: 1000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 3000, total: 4000 },
    { name: "Андрей Морфиус", participation: 3100, start: 2100, extra: 1000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 2800, total: 3800 },
    { name: "Стас ISK", participation: 3100, start: 2100, extra: 2500, exit: 1370, win: -130, finalParticipation: 1000, dealer: 0, finalChips: 2600, total: 2850 },
    { name: "Даниил Глухов", participation: 3100, start: 2100, extra: 3000, exit: 1420, win: -580, finalParticipation: 1000, dealer: 0, finalChips: 2400, total: 2400 },
    { name: "Иван Жуйков", participation: 3100, start: 2100, extra: 3000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 2200, total: 2200 },
    { name: "Михаил Козадой", participation: 3100, start: 2100, extra: 5000, exit: 1725, win: -2275, finalParticipation: 1000, dealer: 0, finalChips: 2000, total: 1000 },
    { name: "Андрей Фломастер", participation: 3100, start: 2100, extra: 4500, exit: 0, win: -3500, finalParticipation: 1000, dealer: 0, finalChips: 1800, total: 1050 },
    { name: "Соня Серж", participation: 3100, start: 2100, extra: 10200, exit: 5380, win: -3820, finalParticipation: 1000, dealer: 0, finalChips: 1600, total: -2000 },
    { name: "Том", participation: 3100, start: 2100, extra: 5000, exit: 0, win: -4000, finalParticipation: 1000, dealer: 0, finalChips: 1400, total: 400 },
    { name: "Михаил Наб", participation: 3100, start: 2100, extra: 7000, exit: 0, win: -6000, finalParticipation: 1000, dealer: 0, finalChips: 1200, total: -800 },
    { name: "Матвей МС", participation: 3100, start: 2100, extra: 29400, exit: 15680, win: -12720, finalParticipation: 1000, dealer: 0, finalChips: 1000, total: -12200 }
];

// Данные для итоговой таблицы (Ожидаемое Вэлью, Участие в финале, Дистанция решает)
const tournamentExtras = {
    "Максим Spy": { expectedValue: 1750, finalParticipation: 3000, distanceDecides: 2000 },
    "Jane 007": { expectedValue: 750, finalParticipation: 3000, distanceDecides: 2000 },
    "Макар Аве": { expectedValue: 1000, finalParticipation: 3000, distanceDecides: 2000 },
    "Любовь Т": { expectedValue: 1200, finalParticipation: 3000, distanceDecides: 2000 },
    "Шурик Шилкин": { expectedValue: 500, finalParticipation: 3000, distanceDecides: 2000 },
    "Семён Ануфриев": { expectedValue: 550, finalParticipation: 3000, distanceDecides: 2000 },
    "Влад Владшток": { expectedValue: 400, finalParticipation: 3000, distanceDecides: 2000 },
    "Даша Хромова": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 2000 },
    "Стас ISK": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 2000 },
    "Егор Вино": { expectedValue: 75, finalParticipation: 3000, distanceDecides: 2000 },
    "Дмитрий Ник": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Богдан А": { expectedValue: 450, finalParticipation: 3000, distanceDecides: 2000 },
    "Полина Матыцына": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Михаил Наб": { expectedValue: 950, finalParticipation: 3000, distanceDecides: 2000 },
    "Влад Сам": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Егор АА 11": { expectedValue: 1175, finalParticipation: 3000, distanceDecides: 2000 },
    "Михаил Козадой": { expectedValue: 400, finalParticipation: 3000, distanceDecides: 2000 },
    "Немощь": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Иван Сидоров": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Вова Баж": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Настя К": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "SvetLana M": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Артём SUB": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Саша Тяжелов": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Инна М": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Роман Лод": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Наташа Алекс": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Анастасия Ильина": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Лика Ясева": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Никита Башкин": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Евгений Ц": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Федор К": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Мария Павлова": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Саша Коч": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Миша Нестер": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Том": { expectedValue: 925, finalParticipation: 3000, distanceDecides: 2000 },
    "Андрей Фломастер": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Андрей Морфиус": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Даниил Ершов": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Матвей МС": { expectedValue: 500, finalParticipation: 3000, distanceDecides: 2000 },
    "Всеволод Кузнецов": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Никита Зейн": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Данил Г": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Даниил Глухов": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Иван Жуйков": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Андрей Пот": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Соня Серж": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 },
    "Леонид П": { expectedValue: 0, finalParticipation: 3000, distanceDecides: 0 }
};

// Данные для вкладки Блайнды и Анте
const blindsData = [
    { level: 1, timeStart: "17-00", timeEnd: "17-25", sb: 5, bb: 10, ante: 10 },
    { level: 2, timeStart: "17-25", timeEnd: "17-50", sb: 10, bb: 20, ante: 20 },
    { level: 3, timeStart: "18-00", timeEnd: "18-15", sb: 15, bb: 30, ante: 30 },
    { level: 4, timeStart: "18-15", timeEnd: "18-30", sb: 20, bb: 40, ante: 40 },
    { level: 5, timeStart: "18-30", timeEnd: "18-50", sb: 35, bb: 70, ante: 70 },
    { level: 6, timeStart: "19-00", timeEnd: "19-15", sb: 50, bb: 100, ante: 100 },
    { level: 7, timeStart: "19-15", timeEnd: "19-30", sb: 75, bb: 150, ante: 150 },
    { level: 8, timeStart: "19-30", timeEnd: "19-50", sb: 100, bb: 200, ante: 200 },
    { level: 9, timeStart: "20-00", timeEnd: "20-15", sb: 150, bb: 300, ante: 300 },
    { level: 10, timeStart: "20-15", timeEnd: "20-30", sb: 200, bb: 400, ante: 400 },
    { level: 11, timeStart: "20-30", timeEnd: "20-50", sb: 300, bb: 600, ante: 600 },
    { level: 12, timeStart: "21-00", timeEnd: "21-15", sb: 400, bb: 800, ante: 800 },
    { level: 13, timeStart: "21-15", timeEnd: "21-30", sb: 500, bb: 1000, ante: 1000 },
    { level: 14, timeStart: "21-30", timeEnd: "21-50", sb: 700, bb: 1400, ante: 1400 },
    { level: 15, timeStart: "22-00", timeEnd: "22-15", sb: 1000, bb: 2000, ante: 2000 },
    { level: 16, timeStart: "22-15", timeEnd: "22-30", sb: 1500, bb: 3000, ante: 3000 },
    { level: 17, timeStart: "22-30", timeEnd: "22-50", sb: 2000, bb: 4000, ante: 4000 },
    { level: 18, timeStart: "23-00", timeEnd: "23-15", sb: 2500, bb: 5000, ante: 5000 },
    { level: 19, timeStart: "23-15", timeEnd: "23-30", sb: 3000, bb: 6000, ante: 6000 },
    { level: 20, timeStart: "23-30", timeEnd: "23-45", sb: 3500, bb: 7000, ante: 7000 },
    { level: 21, timeStart: "23-45", timeEnd: "0-00", sb: 4000, bb: 8000, ante: 8000 },
    { level: 22, timeStart: "0-00", timeEnd: "0-10", sb: 5000, bb: 10000, ante: 10000 },
    { level: 23, timeStart: "0-10", timeEnd: "0-20", sb: 6000, bb: 12000, ante: 12000 },
    { level: 24, timeStart: "0-20", timeEnd: "0-30", sb: 7500, bb: 15000, ante: 15000 }
];

// Рейтинг после 2 дня (обновлённый)
const ratingBeforeFinal = [
    { name: "Семён Ануфриев", rating: 1008, attendance: 23 },
    { name: "Михаил Наб", rating: 937, attendance: 16 },
    { name: "Богдан А", rating: 901, attendance: 25 },
    { name: "Шурик Шилкин", rating: 770, attendance: 25 },
    { name: "Никита Зейн", rating: 756, attendance: 17 },
    { name: "grooveman", rating: 749, attendance: 13 },
    { name: "Robert Юниксфактёр", rating: 675, attendance: 14 },
    { name: "Jane 007", rating: 657, attendance: 22 },
    { name: "Влад Владшток", rating: 636, attendance: 24 },
    { name: "Михаил Козадой", rating: 613, attendance: 18 },
    { name: "Максим Spy", rating: 605, attendance: 22 },
    { name: "Саша Коч", rating: 603, attendance: 16 },
    { name: "Егор АА 11", rating: 599, attendance: 23 },
    { name: "Полина Матыцына", rating: 596, attendance: 19 },
    { name: "Сергей Ман", rating: 556, attendance: 10 },
    { name: "Макар Аве", rating: 554, attendance: 17 },
    { name: "Роман Лод", rating: 528, attendance: 17 },
    { name: "Кристина А", rating: 504, attendance: 11 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Влад Сам", rating: 459, attendance: 8 },
    { name: "Егор Вино", rating: 458, attendance: 11 },
    { name: "Немощь", rating: 452, attendance: 9 },
    { name: "Леонид П", rating: 425, attendance: 7 },
    { name: "Соня Серж", rating: 420, attendance: 17 },
    { name: "Надя Жб", rating: 418, attendance: 10 },
    { name: "Дмитрий Ник", rating: 393, attendance: 10 },
    { name: "Матвей МС", rating: 381, attendance: 9 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Том", rating: 332, attendance: 13 },
    { name: "Свидетель", rating: 325, attendance: 8 },
    { name: "Ирина Ага", rating: 309, attendance: 5 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Даша Хромова", rating: 305, attendance: 10 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Серж", rating: 260, attendance: 6 },
    { name: "Федор К", rating: 242, attendance: 7 },
    { name: "Андрей Фломастер", rating: 235, attendance: 8 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Стас ISK", rating: 198, attendance: 6 },
    { name: "Евгений Ц", rating: 194, attendance: 6 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Николай Ж", rating: 167, attendance: 5 },
    { name: "Даниил Ершов", rating: 130, attendance: 4 },
    { name: "Анна К", rating: 128, attendance: 4 },
    { name: "Саша Тяжелов", rating: 125, attendance: 1 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Андрей Морфиус", rating: 117, attendance: 4 },
    { name: "Ксюша Лис", rating: 117, attendance: 2 },
    { name: "Саша Бел", rating: 115, attendance: 3 },
    { name: "Никита Yellow", rating: 115, attendance: 2 },
    { name: "Лиза Арц", rating: 114, attendance: 2 },
    { name: "Зеньята", rating: 101, attendance: 4 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
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
    { name: "Иван Баж", rating: 64, attendance: 3 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Вова Баж", rating: 60, attendance: 2 },
    { name: "Любовь Т", rating: 59, attendance: 2 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Вадим Константинов", rating: 51, attendance: 1 },
    { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Всеволод Кузнецов", rating: 45, attendance: 2 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Миша Нестер", rating: 31, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Иван Тре", rating: 25, attendance: 1 },
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
    { name: "Данил Г", rating: 21, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 },
    { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 },
    { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 },
    { name: "Стас Мазепа", rating: 20, attendance: 1 },
    { name: "Артём SUB", rating: 19, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// Добавки после 3 дня
const ratingAdditionsAfterDay3 = [
    { name: "Jane 007", addition: 10 },
    { name: "Анастасия Ильина", addition: 26 },
    { name: "Андрей Морфиус", addition: 22 },
    { name: "Андрей Фломастер", addition: 20 },
    { name: "Артём SUB", addition: 27 },
    { name: "Богдан А", addition: 0 },
    { name: "Влад Владшток", addition: 19 },
    { name: "Вова Баж", addition: 62 },
    { name: "Даниил Глухов", addition: 21 },
    { name: "Даша Хромова", addition: 36 },
    { name: "Дмитрий Ник", addition: 38 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Егор Вино", addition: 22 },
    { name: "Иван Жуйков", addition: 21 },
    { name: "Иван Сидоров", addition: 76 },
    { name: "Лика Ясева", addition: 31 },
    { name: "Любовь Т", addition: 107 },
    { name: "Макар Аве", addition: 0 },
    { name: "Максим Spy", addition: 24 },
    { name: "Мария Павлова", addition: 23 },
    { name: "Матвей МС", addition: 19 },
    { name: "Михаил Козадой", addition: 0 },
    { name: "Михаил Наб", addition: 0 },
    { name: "Немощь", addition: 24 },
    { name: "Никита Башкин", addition: 25 },
    { name: "Полина Матыцына", addition: 5 },
    { name: "Роман Лод", addition: 11 },
    { name: "Саша Тяжелов", addition: 28 },
    { name: "Семён Ануфриев", addition: 0 },
    { name: "Соня Серж", addition: 0 },
    { name: "Стас ISK", addition: 21 },
    { name: "Том", addition: 5 },
    { name: "Шурик Шилкин", addition: 0 }
];

// Множество игроков, которые участвовали в 3 дне
const day3PlayersSet = new Set(ratingAdditionsAfterDay3.map(p => p.name));

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
    const additionMap = new Map(ratingAdditionsAfterDay3.map(p => [p.name, p.addition]));
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
            playedInDay3: additionMap.has(p.name)
        });
    });
    
    ratingAdditionsAfterDay3.forEach(add => {
        if (!beforeMap.has(add.name)) {
            result.push({
                name: add.name,
                previousRating: 0,
                attendance: 1,
                change: add.addition,
                newRating: add.addition,
                playedInDay3: true
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

// Получить изменения позиций для итоговой таблицы (между результатом после 2 дня и итогом после 3 дня)
function getTournamentPositionChanges() {
    // 1. Результаты после 2 дня (сумма 1 + 2 дня)
    const afterDay2Map = new Map();
    day1Data.forEach(p => { afterDay2Map.set(p.name, p.total); });
    day2Data.forEach(p => {
        if (afterDay2Map.has(p.name)) afterDay2Map.set(p.name, afterDay2Map.get(p.name) + p.total);
        else afterDay2Map.set(p.name, p.total);
    });
    
    const afterDay2 = Array.from(afterDay2Map.entries()).map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total)
        .map((p, idx) => ({ name: p.name, position: idx + 1, total: p.total }));
    
    // 2. Результаты после 3 дня (сумма 1 + 2 + 3 дня)
    const afterDay3Map = new Map();
    day1Data.forEach(p => { afterDay3Map.set(p.name, p.total); });
    day2Data.forEach(p => {
        if (afterDay3Map.has(p.name)) afterDay3Map.set(p.name, afterDay3Map.get(p.name) + p.total);
        else afterDay3Map.set(p.name, p.total);
    });
    day3Data.forEach(p => {
        if (afterDay3Map.has(p.name)) afterDay3Map.set(p.name, afterDay3Map.get(p.name) + p.total);
        else afterDay3Map.set(p.name, p.total);
    });
    
    const afterDay3 = Array.from(afterDay3Map.entries()).map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total)
        .map((p, idx) => ({ name: p.name, position: idx + 1, total: p.total }));
    
    // 3. Сравниваем позиции
    const changes = new Map();
    const allPlayers = new Set([...afterDay2.map(p => p.name), ...afterDay3.map(p => p.name)]);
    
    allPlayers.forEach(playerName => {
        const day2Player = afterDay2.find(p => p.name === playerName);
        const day3Player = afterDay3.find(p => p.name === playerName);
        
        if (!day2Player && day3Player) {
            changes.set(playerName, { type: 'new', change: 0 });
        } else if (day2Player && !day3Player) {
            changes.set(playerName, { type: 'down', change: 999 });
        } else if (day2Player && day3Player) {
            const diff = day2Player.position - day3Player.position;
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
        } else if (p.change === 0 && p.playedInDay3 === true) {
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
    
    const totalSum = day1Data.reduce((sum, p) => sum + p.total, 0);
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
    
    const totalSum = day2Data.reduce((sum, p) => sum + p.total, 0);
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
    
    const totalSum = day3Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day3Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
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

// Итоги турнира
function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    
    // Собираем всех игроков из всех дней
    const allPlayersMap = new Map();
    
    day1Data.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1Result: player.total,
            day2Result: 0,
            day3Result: 0
        });
    });
    
    day2Data.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day2Result = player.total;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1Result: 0,
                day2Result: player.total,
                day3Result: 0
            });
        }
    });
    
    day3Data.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day3Result = player.total;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1Result: 0,
                day2Result: 0,
                day3Result: player.total
            });
        }
    });
    
    const results = Array.from(allPlayersMap.values()).map(p => {
        const sumResult = p.day1Result + p.day2Result + p.day3Result;
        const extras = tournamentExtras[p.name] || { expectedValue: 0, finalParticipation: 0, distanceDecides: 0 };
        const totalItog = sumResult + extras.expectedValue + extras.finalParticipation + extras.distanceDecides;
        
        return {
            name: p.name,
            day1Result: p.day1Result,
            day2Result: p.day2Result,
            day3Result: p.day3Result,
            result: sumResult,
            expectedValue: extras.expectedValue,
            finalParticipation: extras.finalParticipation,
            distanceDecides: extras.distanceDecides,
            total: totalItog
        };
    }).sort((a, b) => b.total - a.total);
    
    // Средний стек по итоговому результату (столбец "Результат")
    const totalSumItog = results.reduce((sum, p) => sum + p.total, 0);
const avgItog = Math.round(totalSumItog / results.length);
document.getElementById('averageStack').textContent = formatNumber(avgItog);
    
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
    
    filteredData.forEach((item) => {
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
        row.insertCell(6).innerHTML = formatNumber(item.result);
        row.insertCell(7).innerHTML = formatNumber(item.expectedValue);
        row.insertCell(8).innerHTML = formatNumber(item.finalParticipation);
        row.insertCell(9).innerHTML = formatNumber(item.distanceDecides);
        row.insertCell(10).innerHTML = formatNumber(item.total);
        
        // На мобиле без развёртывания скрываем колонки с 3 по 9 (индексы 3-9)
        // оставляем видимыми: № (0), Имя (1), Итог (10)
        if (hideExtraColumns) {
            for (let i = 3; i <= 9; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    // Скрытие/показ заголовков таблицы на мобиле
    const headers = document.querySelectorAll('#resultsTableElement th');
    if (hideExtraColumns) {
        for (let i = 3; i <= 9; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else {
        for (let i = 2; i <= 9; i++) {
            if (headers[i]) headers[i].style.display = '';
        }
    }
    
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

// ========== ПОИСК ==========

function performSearch() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'blindsAntes') fillBlindsTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'day3') fillDay3Table();
    else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    
    const ratingData = getRatingData();
    const allPlayers = [...new Set([
        ...previousTournamentResults.map(p => p.name),
        ...ratingData.map(p => p.name),
        ...day1Data.map(p => p.name),
        ...day2Data.map(p => p.name),
        ...day3Data.map(p => p.name),
        ...Object.keys(tournamentExtras)
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
        'blindsAntes': 'Блайнды и Анте',
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
    else if (tabName === 'blindsAntes') fillBlindsTable();
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'day3') fillDay3Table();
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
        if (activeTab && (activeTab.id === 'rating' || activeTab.id === 'day1' || activeTab.id === 'day2' || activeTab.id === 'day3' || activeTab.id === 'tournamentResults')) {
            if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'day2') fillDay2Table();
            else if (activeTab.id === 'day3') fillDay3Table();
            else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        }
    });
});
