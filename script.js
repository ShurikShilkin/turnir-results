// ========== ДАННЫЕ ==========

// Результаты Турнира Six Seven 6-7
const previousTournamentResults = [
    { name: "Ирина Ага", place: 1, status: "Победитель 🥇" },
    { name: "Полина Матыцына", place: 2, status: "Серебряный призер 🥈" },
    { name: "Артём SUB", place: 3, status: "Бронзовый призер 🥉" },
    { name: "Шурик Шилкин", place: 4, status: "Участник финала" },
    { name: "Соня Серж", place: 5, status: "Участник финала" },
    { name: "Михаил Козадой", place: 6, status: "Участник финала" },
    { name: "муся", place: 7, status: "Участник финала" },
    { name: "Саша Бел", place: 8, status: "Участник финала" },
    { name: "Лиза Арц", place: 9, status: "Участник финала" },
    { name: "Егор АА 11", place: 10, status: "Участник финала" },
    { name: "Соня Новикова", place: 11, status: "Участник финала" },
    { name: "Никита Зейн", place: 12, status: "Участник финала" },
    { name: "Роман Лод", place: 13, status: "Участник финала" },
    { name: "Кристина А", place: 14, status: "Участник финала" },
    { name: "Александр Будда", place: 15, status: "Участник финала" },
    { name: "Coach krotovski", place: 16, status: "Участник финала" },
    { name: "Jane 007", place: 17, status: "Участник финала" },
    { name: "Макар Аве", place: 18, status: "Участник финала" },
    { name: "Саша Коч", place: 19, status: "Участник финала" },
    { name: "Неопознанный утконос", place: 20, status: "Участник финала" },
    { name: "Екатерина С", place: 21, status: "Участник финала" },
    { name: "Кирилл Лед", place: 22, status: "Участник финала" },
    { name: "Богдан А", place: 23, status: "Участник финала" },
    { name: "Ксюша Лис", place: 24, status: "Участник финала" },
    { name: "Диана Мур", place: 25, status: "Участник финала" },
    { name: "Егор Вино", place: 26, status: "Участник финала" },
    { name: "Вова Баж", place: 27, status: "Участник турнира" },
    { name: "grooveman", place: 28, status: "Участник турнира" },
    { name: "Robert Юниксфактёр", place: 29, status: "Участник турнира" },
    { name: "Матвей Пригожий", place: 30, status: "Участник турнира" },
    { name: "Анна К", place: 31, status: "Участник турнира" },
    { name: "Даниил Ершов", place: 32, status: "Участник турнира" },
    { name: "Михаил Наб", place: 33, status: "Участник турнира" },
    { name: "Надя И", place: 34, status: "Участник турнира" },
    { name: "Федор К", place: 35, status: "Участник турнира" },
    { name: "Лера Аракчаа", place: 36, status: "Участник турнира" },
    { name: "Том", place: 37, status: "Участник турнира" },
    { name: "Даша Хромова", place: 38, status: "Участник турнира" },
    { name: "Максим Spy", place: 39, status: "Участник турнира" },
    { name: "Семён Ануфриев", place: 40, status: "Участник турнира" },
    { name: "Иван Баж", place: 41, status: "Участник турнира" },
    { name: "Давид Жуков", place: 42, status: "Участник турнира" },
    { name: "Таня Т", place: 43, status: "Участник турнира" },
    { name: "Вова Гриненко", place: 44, status: "Участник турнира" },
    { name: "Надя Котик", place: 45, status: "Участник турнира" },
    { name: "Аня Жук", place: 46, status: "Участник турнира" },
    { name: "Евгений Ц", place: 47, status: "Участник турнира" }
];

// Данные 1 дня
const day1Data = [
    { name: "Михаил Наб", entry: 4100, start: 2100, extra: 0, exit: 23020, win: 25020, finalParticipation: 1000, dealer: 500, finalChips: 6800, total: 8300 },
    { name: "Саша Коч", entry: 4100, start: 2100, extra: 0, exit: 19140, win: 21140, finalParticipation: 1000, dealer: 0, finalChips: 6600, total: 7600 },
    { name: "Jane 007", entry: 4100, start: 2100, extra: 0, exit: 13575, win: 15575, finalParticipation: 1000, dealer: 500, finalChips: 6400, total: 7900 },
    { name: "муся", entry: 4100, start: 2100, extra: 0, exit: 10215, win: 12215, finalParticipation: 1000, dealer: 0, finalChips: 6200, total: 7200 },
    { name: "Coach krotovski", entry: 4100, start: 2100, extra: 0, exit: 9435, win: 11435, finalParticipation: 1000, dealer: 100, finalChips: 6000, total: 7100 },
    { name: "Ирина Ага", entry: 4100, start: 2100, extra: 4000, exit: 10635, win: 8635, finalParticipation: 1000, dealer: 0, finalChips: 5800, total: 5800 },
    { name: "Шурик Шилкин", entry: 4100, start: 2100, extra: 0, exit: 5680, win: 7680, finalParticipation: 1000, dealer: 100, finalChips: 5600, total: 6700 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 2000, exit: 7645, win: 7645, finalParticipation: 1000, dealer: 300, finalChips: 5400, total: 6700 },
    { name: "Егор Вино", entry: 4100, start: 2100, extra: 2000, exit: 7390, win: 7390, finalParticipation: 1000, dealer: 300, finalChips: 5200, total: 6500 },
    { name: "Федор К", entry: 4100, start: 2100, extra: 0, exit: 5310, win: 7310, finalParticipation: 1000, dealer: 0, finalChips: 5000, total: 6000 },
    { name: "Евгений Ц", entry: 4100, start: 2100, extra: 0, exit: 4065, win: 6065, finalParticipation: 1000, dealer: 0, finalChips: 4800, total: 5800 },
    { name: "Александр Будда", entry: 4100, start: 2100, extra: 2000, exit: 6010, win: 6010, finalParticipation: 1000, dealer: 0, finalChips: 4600, total: 5600 },
    { name: "Егор АА 11", entry: 4100, start: 2100, extra: 4000, exit: 7685, win: 5685, finalParticipation: 1000, dealer: 0, finalChips: 4400, total: 4400 },
    { name: "Саша Тяжелов", entry: 4100, start: 2100, extra: 0, exit: 1375, win: 3375, finalParticipation: 1000, dealer: 0, finalChips: 4200, total: 5200 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 0, exit: 255, win: 2255, finalParticipation: 1000, dealer: 0, finalChips: 4000, total: 5000 },
    { name: "Макар Аве", entry: 4100, start: 2100, extra: 0, exit: 200, win: 2200, finalParticipation: 1000, dealer: 400, finalChips: 3800, total: 5200 },
    { name: "Ярик 37", entry: 4100, start: 2100, extra: 0, exit: 20, win: 2020, finalParticipation: 1000, dealer: 0, finalChips: 3600, total: 4600 },
    { name: "Надя И", entry: 4100, start: 2100, extra: 0, exit: 0, win: 2000, finalParticipation: 1000, dealer: 0, finalChips: 3400, total: 4400 },
    { name: "Christ", entry: 4100, start: 2100, extra: 0, exit: 0, win: 2000, finalParticipation: 1000, dealer: 0, finalChips: 3200, total: 4200 },
    { name: "Никита Зейн", entry: 4100, start: 2100, extra: 2000, exit: 11, win: 11, finalParticipation: 1000, dealer: 0, finalChips: 3000, total: 4000 },
    { name: "Лиза Арц", entry: 4100, start: 2100, extra: 2000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 2800, total: 3800 },
    { name: "Потапыч", entry: 4100, start: 2100, extra: 2000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 2600, total: 3600 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 4000, exit: 1100, win: -900, finalParticipation: 1000, dealer: 100, finalChips: 2400, total: 2500 },
    { name: "Семён Ануфриев", entry: 4100, start: 2100, extra: 3000, exit: 0, win: -1000, finalParticipation: 1000, dealer: 0, finalChips: 2200, total: 2700 },
    { name: "Аня Жук", entry: 4100, start: 2100, extra: 4000, exit: 695, win: -1305, finalParticipation: 1000, dealer: 0, finalChips: 2000, total: 2000 },
    { name: "Свидетель", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1800, total: 1800 },
    { name: "Петя Пётр", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1600, total: 1600 },
    { name: "Надя Котик", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1400, total: 1400 },
    { name: "Соня Новикова", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1200, total: 1200 },
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1000, total: 1000 }
];

// Данные 2 дня
const day2Data = [
    { name: "Михаил Наб", entry: 4100, start: 2100, extra: 0, exit: 72820, win: 74820, finalParticipation: 1000, dealer: 400, finalChips: 6800, total: 8200 },
    { name: "Свидетель", entry: 4100, start: 2100, extra: 2000, exit: 20105, win: 20105, finalParticipation: 1000, dealer: 0, finalChips: 6600, total: 7600 },
    { name: "Кристина А", entry: 4100, start: 2100, extra: 0, exit: 13185, win: 15185, finalParticipation: 1000, dealer: 0, finalChips: 6400, total: 7400 },
    { name: "Семён Ануфриев", entry: 4100, start: 2100, extra: 2000, exit: 12720, win: 12720, finalParticipation: 1000, dealer: 200, finalChips: 6200, total: 7400 },
    { name: "Макар Аве", entry: 4100, start: 2100, extra: 0, exit: 8600, win: 10600, finalParticipation: 1000, dealer: 300, finalChips: 6000, total: 7300 },
    { name: "Шурик Шилкин", entry: 4100, start: 2100, extra: 0, exit: 8380, win: 10380, finalParticipation: 1000, dealer: 400, finalChips: 5800, total: 7200 },
    { name: "Егор Вино", entry: 4100, start: 2100, extra: 2000, exit: 10350, win: 10350, finalParticipation: 1000, dealer: 200, finalChips: 5600, total: 6800 },
    { name: "Ирина Ага", entry: 4100, start: 2100, extra: 2000, exit: 7850, win: 7850, finalParticipation: 1000, dealer: 0, finalChips: 5400, total: 6400 },
    { name: "Соня Новикова", entry: 4100, start: 2100, extra: 0, exit: 3855, win: 5855, finalParticipation: 1000, dealer: 0, finalChips: 5200, total: 6200 },
    { name: "Саша Тяжелов", entry: 4100, start: 2100, extra: 0, exit: 3330, win: 5330, finalParticipation: 1000, dealer: 0, finalChips: 5000, total: 6000 },
    { name: "Екатерина С", entry: 4100, start: 2100, extra: 0, exit: 2765, win: 4765, finalParticipation: 1000, dealer: 0, finalChips: 4800, total: 5800 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 2000, exit: 3910, win: 3910, finalParticipation: 1000, dealer: 200, finalChips: 4600, total: 5800 },
    { name: "Christ", entry: 4100, start: 2100, extra: 0, exit: 1255, win: 3255, finalParticipation: 1000, dealer: 0, finalChips: 4400, total: 5400 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 2000, exit: 2025, win: 2025, finalParticipation: 1000, dealer: 500, finalChips: 4200, total: 5700 },
    { name: "муся", entry: 4100, start: 2100, extra: 0, exit: 0, win: 2000, finalParticipation: 1000, dealer: 0, finalChips: 4000, total: 5000 },
    { name: "Андрей Го", entry: 4100, start: 2100, extra: 2000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 3800, total: 4800 },
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 2000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 3600, total: 4600 },
    { name: "Надя И", entry: 4100, start: 2100, extra: 2000, exit: 0, win: 0, finalParticipation: 1000, dealer: 0, finalChips: 3400, total: 4400 },
    { name: "Немощь", entry: 4100, start: 2100, extra: 4000, exit: 490, win: -1510, finalParticipation: 1000, dealer: 100, finalChips: 3200, total: 3300 },
    { name: "Даша Хромова", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 3000, total: 3000 },
    { name: "Неопознанный утконос", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 2800, total: 2800 },
    { name: "Петя Пётр", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 2600, total: 2600 },
    { name: "Мария Павлова", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 2400, total: 2400 },
    { name: "Надя Котик", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 2200, total: 2200 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 300, finalChips: 2000, total: 2300 },
    { name: "Матвей Пригожий", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 0, finalChips: 1800, total: 1800 },
    { name: "Вова Гриненко", entry: 4100, start: 2100, extra: 4000, exit: 0, win: -2000, finalParticipation: 1000, dealer: 200, finalChips: 1600, total: 1800 },
    { name: "Аня Жук", entry: 4100, start: 2100, extra: 8000, exit: 0, win: -6000, finalParticipation: 1000, dealer: 0, finalChips: 1400, total: -600 },
    { name: "Егор АА 11", entry: 4100, start: 2100, extra: 10000, exit: 0, win: -8000, finalParticipation: 1000, dealer: 0, finalChips: 1200, total: -1800 },
    { name: "Александр Будда", entry: 4100, start: 2100, extra: 15200, exit: 0, win: -13200, finalParticipation: 1000, dealer: 0, finalChips: 1000, total: -4600 }
];

// Данные для финала (с учетом 1 и 2 дня) - ИСПРАВЛЕНЫ (удален дубликат Егор АА 11)
const finalData = [
    { name: "Михаил Наб", day1Result: 8300, day2Result: 8200, day3Result: 0, total: 16500 },
    { name: "Свидетель", day1Result: 1800, day2Result: 7600, day3Result: 0, total: 9400 },
    { name: "Кристина А", day1Result: 0, day2Result: 7400, day3Result: 0, total: 7400 },
    { name: "Семён Ануфриев", day1Result: 2700, day2Result: 7400, day3Result: 0, total: 10100 },
    { name: "Макар Аве", day1Result: 5200, day2Result: 7300, day3Result: 0, total: 12500 },
    { name: "Шурик Шилкин", day1Result: 6700, day2Result: 7200, day3Result: 0, total: 13900 },
    { name: "Егор Вино", day1Result: 6500, day2Result: 6800, day3Result: 0, total: 13300 },
    { name: "Ирина Ага", day1Result: 5800, day2Result: 6400, day3Result: 0, total: 12200 },
    { name: "Соня Новикова", day1Result: 1200, day2Result: 6200, day3Result: 0, total: 7400 },
    { name: "Саша Тяжелов", day1Result: 5200, day2Result: 6000, day3Result: 0, total: 11200 },
    { name: "Екатерина С", day1Result: 0, day2Result: 5800, day3Result: 0, total: 5800 },
    { name: "Богдан А", day1Result: 5000, day2Result: 5800, day3Result: 0, total: 10800 },
    { name: "Christ", day1Result: 4200, day2Result: 5400, day3Result: 0, total: 9600 },
    { name: "Артём SUB", day1Result: 6700, day2Result: 5700, day3Result: 0, total: 12400 },
    { name: "муся", day1Result: 7200, day2Result: 5000, day3Result: 0, total: 12200 },
    { name: "Андрей Го", day1Result: 0, day2Result: 4800, day3Result: 0, total: 4800 },
    { name: "Кирилл Лед", day1Result: 1000, day2Result: 4600, day3Result: 0, total: 5600 },
    { name: "Надя И", day1Result: 4400, day2Result: 4400, day3Result: 0, total: 8800 },
    { name: "Немощь", day1Result: 0, day2Result: 3300, day3Result: 0, total: 3300 },
    { name: "Даша Хромова", day1Result: 0, day2Result: 3000, day3Result: 0, total: 3000 },
    { name: "Неопознанный утконос", day1Result: 0, day2Result: 2800, day3Result: 0, total: 2800 },
    { name: "Петя Пётр", day1Result: 1600, day2Result: 2600, day3Result: 0, total: 4200 },
    { name: "Мария Павлова", day1Result: 0, day2Result: 2400, day3Result: 0, total: 2400 },
    { name: "Надя Котик", day1Result: 1400, day2Result: 2200, day3Result: 0, total: 3600 },
    { name: "Михаил Козадой", day1Result: 2500, day2Result: 2300, day3Result: 0, total: 4800 },
    { name: "Матвей Пригожий", day1Result: 0, day2Result: 1800, day3Result: 0, total: 1800 },
    { name: "Вова Гриненко", day1Result: 0, day2Result: 1800, day3Result: 0, total: 1800 },
    { name: "Аня Жук", day1Result: 2000, day2Result: -600, day3Result: 0, total: 1400 },
    { name: "Егор АА 11", day1Result: 4400, day2Result: -1800, day3Result: 0, total: 2600 },
    { name: "Александр Будда", day1Result: 5600, day2Result: -4600, day3Result: 0, total: 1000 },
    { name: "Саша Коч", day1Result: 7600, day2Result: 0, day3Result: 0, total: 7600 },
    { name: "Jane 007", day1Result: 7900, day2Result: 0, day3Result: 0, total: 7900 },
    { name: "Coach krotovski", day1Result: 7100, day2Result: 0, day3Result: 0, total: 7100 },
    { name: "Федор К", day1Result: 6000, day2Result: 0, day3Result: 0, total: 6000 },
    { name: "Евгений Ц", day1Result: 5800, day2Result: 0, day3Result: 0, total: 5800 },
    { name: "Ярик 37", day1Result: 4600, day2Result: 0, day3Result: 0, total: 4600 },
    { name: "Никита Зейн", day1Result: 4000, day2Result: 0, day3Result: 0, total: 4000 },
    { name: "Лиза Арц", day1Result: 3800, day2Result: 0, day3Result: 0, total: 3800 },
    { name: "Потапыч", day1Result: 3600, day2Result: 0, day3Result: 0, total: 3600 }
];

// Охота за головами
const huntingData = [
    { name: "Михаил Наб", value: 2600 },
    { name: "Jane007", value: 2100 },
    { name: "Артём SUB", value: 1300 },
    { name: "Coach krotovski", value: 1200 },
    { name: "Роман Лод", value: 1000 },
    { name: "Полина Матыцына", value: 800 },
    { name: "Шурик Шилкин", value: 800 },
    { name: "Богдан А", value: 750 },
    { name: "Александр Будда", value: 750 },
    { name: "Свидетель", value: 750 },
    { name: "Никита Зейн", value: 650 },
    { name: "Саша Коч", value: 600 },
    { name: "Соня Серж", value: 600 },
    { name: "grooveman", value: 400 },
    { name: "Кристина А", value: 400 },
    { name: "Robert Юниксфактёр", value: 400 },
    { name: "Егор АА11", value: 300 },
    { name: "Егор Вино", value: 300 },
    { name: "Семён Ануфриев", value: 275 },
    { name: "Матвей Пригожий", value: 275 },
    { name: "Ирина Ага", value: 200 },
    { name: "Макар Аве", value: 200 },
    { name: "Надя И", value: 200 },
    { name: "Федор К", value: 200 },
    { name: "Михаил Козадой", value: 150 },
    { name: "муся", value: 150 },
    { name: "Соня Новикова", value: 150 }
];

// Рейтинг до 2 дня
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1410, attendance: 45 },
    { name: "Jane 007", rating: 1253, attendance: 39 },
    { name: "Никита Зейн", rating: 1222, attendance: 31 },
    { name: "Егор АА 11", rating: 1202, attendance: 37 },
    { name: "Семён Ануфриев", rating: 1201, attendance: 36 },
    { name: "Михаил Наб", rating: 1149, attendance: 28 },
    { name: "Роман Лод", rating: 1149, attendance: 33 },
    { name: "Полина Матыцына", rating: 1146, attendance: 36 },
    { name: "Шурик Шилкин", rating: 1117, attendance: 45 },
    { name: "Ирина Ага", rating: 1080, attendance: 20 },
    { name: "Саша Коч", rating: 1063, attendance: 33 },
    { name: "Михаил Козадой", rating: 1001, attendance: 32 },
    { name: "Coach krotovski", rating: 944, attendance: 20 },
    { name: "Артём SUB", rating: 929, attendance: 21 },
    { name: "Соня Серж", rating: 871, attendance: 33 },
    { name: "Егор Вино", rating: 854, attendance: 30 },
    { name: "grooveman", rating: 830, attendance: 17 },
    { name: "Кристина А", rating: 817, attendance: 26 },
    { name: "Макар Аве", rating: 766, attendance: 28 },
    { name: "Лиза Арц", rating: 754, attendance: 12 },
    { name: "Robert Юниксфактёр", rating: 731, attendance: 15 },
    { name: "Максим Spy", rating: 729, attendance: 32 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Даша Хромова", rating: 691, attendance: 25 },
    { name: "Немощь", rating: 681, attendance: 18 },
    { name: "муся", rating: 677, attendance: 14 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Неопознанный утконос", rating: 598, attendance: 11 },
    { name: "Стас ISK", rating: 556, attendance: 18 },
    { name: "Матвей Пригожий", rating: 538, attendance: 16 },
    { name: "Надя Жб", rating: 521, attendance: 14 },
    { name: "Саша Бел", rating: 508, attendance: 9 },
    { name: "Кирилл Лед", rating: 488, attendance: 10 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Вова Баж", rating: 457, attendance: 8 },
    { name: "Леонид П", rating: 450, attendance: 8 },
    { name: "Вова Гриненко", rating: 436, attendance: 9 },
    { name: "Александр Будда", rating: 433, attendance: 12 },
    { name: "Том", rating: 410, attendance: 21 },
    { name: "Евгений Ц", rating: 405, attendance: 11 },
    { name: "Ксюша Лис", rating: 405, attendance: 8 },
    { name: "Даниил Ершов", rating: 395, attendance: 10 },
    { name: "Свидетель", rating: 378, attendance: 10 },
    { name: "Андрей Фломастер", rating: 373, attendance: 13 },
    { name: "Федор К", rating: 367, attendance: 10 },
    { name: "Петя Федоров", rating: 353, attendance: 5 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Саша Тяжелов", rating: 285, attendance: 5 },
    { name: "Петя Пётр", rating: 279, attendance: 4 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Всеволод Кузнецов", rating: 247, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Анна К", rating: 207, attendance: 6 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Аня Жук", rating: 193, attendance: 6 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Иван Баж", rating: 174, attendance: 5 },
    { name: "Мария Павлова", rating: 165, attendance: 3 },
    { name: "Соня Новикова", rating: 161, attendance: 3 },
    { name: "Алёна Ф", rating: 155, attendance: 2 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Екатерина С", rating: 139, attendance: 3 },
    { name: "Зеньята", rating: 135, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Надя И", rating: 118, attendance: 3 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Надя Котик", rating: 117, attendance: 5 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Паша Веля", rating: 93, attendance: 1 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Диана Мур", rating: 78, attendance: 2 },
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
    { name: "Роман Г", rating: 61, attendance: 1 },
    { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Леша Ч", rating: 60, attendance: 1 },
    { name: "Николай Шар", rating: 60, attendance: 1 },
    { name: "Влад Пив", rating: 59, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Артур Король", rating: 57, attendance: 1 },
    { name: "Илья Хом", rating: 57, attendance: 1 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Ся Ся", rating: 56, attendance: 1 },
    { name: "Дмитрий Шки", rating: 55, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Радмир Г", rating: 53, attendance: 1 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Катя В", rating: 49, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 },
    { name: "Стас Мазепа", rating: 47, attendance: 2 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
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
    { name: "Лера Аракчаа", rating: 34, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Ярик 37", rating: 31, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Даниил С", rating: 30, attendance: 1 },
    { name: "Игорь Гусь", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Christ", rating: 29, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Константин Т", rating: 29, attendance: 1 },
    { name: "Татьяна Gorman", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Давид Жуков", rating: 28, attendance: 1 },
    { name: "Даша Лев", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Ульяна Ану", rating: 28, attendance: 1 },
    { name: "Потапыч", rating: 27, attendance: 1 },
    { name: "Лиза О", rating: 27, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
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
    { name: "Christ", addition: 42 },
    { name: "Александр Будда", addition: 9 },
    { name: "Андрей Го", addition: 38 },
    { name: "Аня Жук", addition: 28 },
    { name: "Артём SUB", addition: 9 },
    { name: "Богдан А", addition: 0 },
    { name: "Вова Гриненко", addition: 29 },
    { name: "Даша Хромова", addition: 0 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Егор Вино", addition: 14 },
    { name: "Екатерина С", addition: 45 },
    { name: "Ирина Ага", addition: 15 },
    { name: "Кирилл Лед", addition: 36 },
    { name: "Кристина А", addition: 45 },
    { name: "Макар Аве", addition: 25 },
    { name: "Мария Павлова", addition: 31 },
    { name: "Матвей Пригожий", addition: 6 },
    { name: "Михаил Козадой", addition: 0 },
    { name: "Михаил Наб", addition: 91 },
    { name: "муся", addition: 15 },
    { name: "Надя И", addition: 35 },
    { name: "Надя Котик", addition: 31 },
    { name: "Немощь", addition: 8 },
    { name: "Неопознанный утконос", addition: 33 },
    { name: "Петя Пётр", addition: 32 },
    { name: "Саша Тяжелов", addition: 47 },
    { name: "Свидетель", addition: 106 },
    { name: "Семён Ануфриев", addition: 10 },
    { name: "Соня Новикова", addition: 50 },
    { name: "Шурик Шилкин", addition: 6 }
];

// Множество игроков, которые участвовали в 2 дне
const day2PlayersSet = new Set(ratingAdditionsAfterDay2.map(p => p.name));

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

// Получить изменения позиций для финала (между после 1 дня и после 2 дня)
function getFinalPositionChanges() {
    // Результаты после 1 дня
    const afterDay1 = [...day1Data].sort((a, b) => b.total - a.total).map((p, idx) => ({ 
        name: p.name, 
        position: idx + 1, 
        total: p.total 
    }));
    
    // Результаты после 2 дня (сумма 1 + 2 дня)
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

// Результаты Турнира Six Seven 6-7
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
        else if (item.place >= 4 && item.place <= 26) rowClass = 'final-finalist';
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
    
    const thead = document.querySelector('#day1TableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 9; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 9; i++) {
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
    
    const thead = document.querySelector('#day2TableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 9; i++) {
            if (headers[i]) headers[i].style.display = 'none';
        }
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 9; i++) {
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
        'previousResults': 'Результаты Турнира Six Seven 6-7',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 27.08.2026',
        'day2': '2 день - 03.09.2026',
        'day3': '3 день - 10.09.2026',
        'final': 'Финал - 12.09.2026'
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
    showTab('day2');
    
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
