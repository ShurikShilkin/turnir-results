// ========== ДАННЫЕ ==========

// Результаты Межсезонки (Архив - 75 человек)
const previousTournamentResults = [
    { name: "Немощь", day1: 15305, day2: -4215, day3: 7705, day4: 4290, total: 23085 },
    { name: "Леонид П", day1: 0, day2: 0, day3: 19900, day4: 0, total: 19900 },
    { name: "Михаил Наб", day1: 0, day2: 26555, day3: 2600, day4: -10100, total: 19055 },
    { name: "Михаил Козадой", day1: 4970, day2: 8575, day3: 3230, day4: 2185, total: 18960 },
    { name: "Алексей Фалин", day1: 0, day2: 0, day3: 18280, day4: 0, total: 18280 },
    { name: "Саша Коч", day1: 8035, day2: -6900, day3: 2535, day4: 13690, total: 17360 },
    { name: "Том", day1: -425, day2: 21465, day3: 0, day4: -5100, total: 15940 },
    { name: "Шурик Шилкин", day1: -50, day2: 395, day3: 5700, day4: 7545, total: 13590 },
    { name: "Евгений Ц", day1: 3975, day2: 9960, day3: -1100, day4: 0, total: 12835 },
    { name: "Настя Буд", day1: -5100, day2: 7050, day3: 1035, day4: 7575, total: 10560 },
    { name: "Артём SUB", day1: 15600, day2: -6100, day3: 6950, day4: -6100, total: 10350 },
    { name: "Ирина Ага", day1: 6185, day2: -3900, day3: 0, day4: 6745, total: 9030 },
    { name: "Даша Хромова", day1: 6040, day2: 0, day3: 0, day4: 2070, total: 8110 },
    { name: "Даниил Ш", day1: 10720, day2: 0, day3: -3100, day4: 0, total: 7620 },
    { name: "Петя Пётр", day1: 6170, day2: -2100, day3: 5880, day4: -2455, total: 7495 },
    { name: "Вадим Константинов", day1: 0, day2: 7055, day3: 0, day4: 0, total: 7055 },
    { name: "Богдан А", day1: 10785, day2: 730, day3: 3190, day4: -8100, total: 6605 },
    { name: "Ходор", day1: 0, day2: 0, day3: 0, day4: 6325, total: 6325 },
    { name: "Лиза Арц", day1: 4885, day2: 0, day3: 0, day4: 0, total: 4885 },
    { name: "муся", day1: -2100, day2: 0, day3: 5580, day4: 0, total: 3480 },
    { name: "Эдик Сер", day1: 0, day2: 0, day3: 0, day4: 3220, total: 3220 },
    { name: "Неопознанный утконос", day1: 3125, day2: 0, day3: 0, day4: 0, total: 3125 },
    { name: "Леон", day1: 0, day2: 0, day3: 0, day4: 2955, total: 2955 },
    { name: "grooveman", day1: 0, day2: 5985, day3: 0, day4: -3100, total: 2885 },
    { name: "Екатерина С", day1: 2595, day2: 0, day3: 0, day4: 0, total: 2595 },
    { name: "Мария Павлова", day1: 0, day2: 3675, day3: -3100, day4: 1585, total: 2160 },
    { name: "Кирилл Лед", day1: -4895, day2: -7100, day3: 0, day4: 13955, total: 1960 },
    { name: "Jane 007", day1: 0, day2: 0, day3: 1850, day4: 0, total: 1850 },
    { name: "Вадим Кри", day1: 1895, day2: 0, day3: 0, day4: 0, total: 1895 },
    { name: "Наташа Бонд", day1: 1700, day2: 0, day3: 0, day4: 0, total: 1700 },
    { name: "Надя Жб", day1: 1700, day2: 0, day3: 0, day4: 0, total: 1700 },
    { name: "Robert Юниксфактёр", day1: 1700, day2: 0, day3: 0, day4: 0, total: 1700 },
    { name: "Егор Вино", day1: 4780, day2: 0, day3: -4100, day4: 0, total: 680 },
    { name: "Полина Матыцына", day1: 705, day2: -1285, day3: 1150, day4: 0, total: 570 },
    { name: "Арсений G", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Артём Акулов", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Наташа С", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Арзу", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Даша Гри", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Любовь Т", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Надя И", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Андрей Фломастер", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Роман Лод", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Сергей МЭЗ", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Юля Зейн", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Саша Бел", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Никита Башкин", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Соня Новикова", day1: -3270, day2: 0, day3: 0, day4: 0, total: -3270 },
    { name: "Макс Гема", day1: -4100, day2: 0, day3: 0, day4: 0, total: -4100 },
    { name: "Аня Жук", day1: -6100, day2: -1275, day3: 340, day4: -510, total: -7545 },
    { name: "Денис Дон", day1: -6100, day2: -2100, day3: -5100, day4: 885, total: -12415 },
    { name: "Соня Серж", day1: -1010, day2: -3100, day3: 110, day4: -1625, total: -5625 },
    { name: "Егор АА 11", day1: 6100, day2: 0, day3: -7100, day4: -5175, total: -6175 },
    { name: "Семён Ануфриев", day1: -8100, day2: -8540, day3: -9900, day4: 12800, total: -13740 },
    { name: "Никита Зейн", day1: 0, day2: 0, day3: -8100, day4: 0, total: -8100 },
    { name: "Надя Котик", day1: -7100, day2: 5290, day3: -3100, day4: -12100, total: -17010 },
    { name: "Настя Кудрявая", day1: -1100, day2: -2100, day3: 0, day4: 0, total: -3200 },
    { name: "Макар Аве", day1: 1030, day2: -1900, day3: 0, day4: 0, total: -870 },
    { name: "Coach krotovski", day1: -1235, day2: 0, day3: 0, day4: 0, total: -1235 },
    { name: "Иван Баж", day1: 0, day2: 0, day3: 0, day4: -1100, total: -1100 },
    { name: "Матвей Пригожий", day1: 0, day2: -5100, day3: 0, day4: 935, total: -4165 },
    { name: "Саша Льв", day1: 0, day2: 0, day3: 0, day4: -120, total: -120 },
    { name: "Дима Гончаров", day1: 0, day2: 0, day3: 0, day4: -1500, total: -1500 },
    { name: "Глеб Витязь", day1: 155, day2: -4100, day3: -8100, day4: -2100, total: -14145 },
    { name: "Максим Гав", day1: 0, day2: 0, day3: -1100, day4: -2275, total: -3375 },
    { name: "Вова Баж", day1: 0, day2: 0, day3: 0, day4: -4100, total: -4100 },
    { name: "Максим Кузеев", day1: 0, day2: 0, day3: 0, day4: -4100, total: -4100 },
    { name: "Стас ISK", day1: 0, day2: -5100, day3: -4100, day4: -3100, total: -12300 },
    { name: "Даша Yellow", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Никита Yellow", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Люся Любера", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Саша Тяжелов", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Кристина А", day1: 0, day2: 0, day3: 0, day4: 0, total: 0 },
    { name: "Сергей Ш", day1: 175, day2: 0, day3: 0, day4: 0, total: 175 },
    { name: "Бенси", day1: 0, day2: -2460, day3: 0, day4: 0, total: -2460 }
];

// Данные 1 дня
const day1Data = [
    { name: "Дмитрий Гон", entry: 4100, start: 2100, extra: 0, exit: 9370, total: 11370 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 0, exit: 8860, total: 10860 },
    { name: "Макар Аве", entry: 4100, start: 2100, extra: 0, exit: 8670, total: 10670 },
    { name: "Леон", entry: 4100, start: 2100, extra: 0, exit: 7460, total: 9460 },
    { name: "муся", entry: 4100, start: 2100, extra: 0, exit: 6425, total: 8425 },
    { name: "Стас ISK", entry: 4100, start: 2100, extra: 2000, exit: 7210, total: 7210 },
    { name: "Даниил Ясев", entry: 4100, start: 2100, extra: 2000, exit: 7185, total: 7185 },
    { name: "Егор АА 11", entry: 4100, start: 2100, extra: 0, exit: 5170, total: 7170 },
    { name: "Даниил Ершов", entry: 4100, start: 2100, extra: 0, exit: 4415, total: 6415 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 0, exit: 4110, total: 6110 },
    { name: "Матвей Пригожий", entry: 4100, start: 2100, extra: 0, exit: 3795, total: 5795 },
    { name: "Юля Зейн", entry: 4100, start: 2100, extra: 0, exit: 2600, total: 4600 },
    { name: "Максим Гав", entry: 4100, start: 2100, extra: 0, exit: 2400, total: 4400 },
    { name: "Аня Жук", entry: 4100, start: 2100, extra: 0, exit: 2195, total: 4195 },
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 0, exit: 2040, total: 4040 },
    { name: "Петя Пётр", entry: 4100, start: 2100, extra: 0, exit: 1740, total: 3740 },
    { name: "Даша Хромова", entry: 4100, start: 2100, extra: 0, exit: 1535, total: 3535 },
    { name: "Надя Котик", entry: 4100, start: 2100, extra: 2000, exit: 3320, total: 3320 },
    { name: "Семён Ануфриев", entry: 4100, start: 2100, extra: 2000, exit: 2870, total: 2870 },
    { name: "Андрей Го", entry: 4100, start: 2100, extra: 0, exit: 690, total: 2690 },
    { name: "Соня Новикова", entry: 4100, start: 2100, extra: 0, exit: 560, total: 2560 },
    { name: "Coach krotovski", entry: 4100, start: 2100, extra: 2000, exit: 2090, total: 2090 },
    { name: "grooveman", entry: 4100, start: 2100, extra: 0, exit: 0, total: 2000 },
    { name: "Мьянма", entry: 4100, start: 2100, extra: 0, exit: 0, total: 2000 },
    { name: "Джибути", entry: 4100, start: 2100, extra: 2000, exit: 1790, total: 1790 },
    { name: "Соня Серж", entry: 4100, start: 2100, extra: 2000, exit: 200, total: 200 },
    { name: "Никита ВАР", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Иван Баж", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Никита Зейн", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 }
];

// Данные 2 дня
const day2Data = [
    { name: "Саша Воргун", entry: 4100, start: 2100, extra: 0, exit: 17620, total: 19620 },
    { name: "Денис Дон", entry: 4100, start: 2100, extra: 2000, exit: 14075, total: 14075 },
    { name: "Даниил Ясев", entry: 4100, start: 2100, extra: 0, exit: 10745, total: 12745 },
    { name: "Семён Ануфриев", entry: 4100, start: 2100, extra: 0, exit: 10460, total: 12460 },
    { name: "Роман Kisslove", entry: 4100, start: 2100, extra: 0, exit: 5050, total: 7050 },
    { name: "Виктор 42", entry: 4100, start: 2100, extra: 0, exit: 4910, total: 6910 },
    { name: "Макар Аве", entry: 4100, start: 2100, extra: 0, exit: 4410, total: 6410 },
    { name: "Аня Жук", entry: 4100, start: 2100, extra: 2000, exit: 5905, total: 5905 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 0, exit: 3440, total: 5440 },
    { name: "Марсель", entry: 4100, start: 2100, extra: 0, exit: 2300, total: 4300 },
    { name: "Егор АА 11", entry: 4100, start: 2100, extra: 0, exit: 1830, total: 3830 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 0, exit: 1010, total: 3010 },
    { name: "Петя Пётр", entry: 4100, start: 2100, extra: 2000, exit: 2990, total: 2990 },
    { name: "Соня Новикова", entry: 4100, start: 2100, extra: 0, exit: 900, total: 2900 },
    { name: "Даша Хромова", entry: 4100, start: 2100, extra: 0, exit: 0, total: 2000 },
    { name: "Мария Павлова", entry: 4100, start: 2100, extra: 2000, exit: 1980, total: 1980 },
    { name: "Немощь", entry: 4100, start: 2100, extra: 2000, exit: 235, total: 235 },
    { name: "Надя Котик", entry: 4100, start: 2100, extra: 2000, exit: 200, total: 200 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Саша Коч", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Роман Лод", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Соня Серж", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Стас ISK", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "муся", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 }
];

// Пустые массивы для будущих игр
const day3Data = [];
const day4Data = [];

// Данные рейтинга (после 1 дня)
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1836, attendance: 58 },
    { name: "Семён Ануфриев", rating: 1590, attendance: 48 },
    { name: "Полина Матыцына", rating: 1366, attendance: 46 },
    { name: "Никита Зейн", rating: 1350, attendance: 38 },
    { name: "Шурик Шилкин", rating: 1324, attendance: 57 },
    { name: "Артём SUB", rating: 1307, attendance: 33 },
    { name: "Михаил Наб", rating: 1304, attendance: 35 },
    { name: "Немощь", rating: 1304, attendance: 29 },
    { name: "Егор АА 11", rating: 1303, attendance: 49 },
    { name: "Роман Лод", rating: 1272, attendance: 38 },
    { name: "Jane 007", rating: 1264, attendance: 42 },
    { name: "Ирина Ага", rating: 1225, attendance: 31 },
    { name: "Михаил Козадой", rating: 1184, attendance: 41 },
    { name: "Саша Коч", rating: 1178, attendance: 40 },
    { name: "Coach krotovski", rating: 1167, attendance: 26 },
    { name: "Соня Серж", rating: 1037, attendance: 44 },
    { name: "Макар Аве", rating: 1004, attendance: 39 },
    { name: "grooveman", rating: 956, attendance: 21 },
    { name: "Егор Вино", rating: 927, attendance: 35 },
    { name: "муся", rating: 913, attendance: 21 },
    { name: "Кристина А", rating: 869, attendance: 28 },
    { name: "Лиза Арц", rating: 864, attendance: 16 },
    { name: "Аня Жук", rating: 836, attendance: 18 },
    { name: "Даша Хромова", rating: 775, attendance: 32 },
    { name: "Евгений Ц", rating: 748, attendance: 17 },
    { name: "Robert Юниксфактёр", rating: 747, attendance: 17 },
    { name: "Саша Тяжелов", rating: 741, attendance: 9 },
    { name: "Максим Spy", rating: 729, attendance: 32 },
    { name: "Неопознанный утконос", rating: 728, attendance: 18 },
    { name: "Саша Бел", rating: 715, attendance: 11 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Кирилл Лед", rating: 689, attendance: 16 },
    { name: "Том", rating: 669, attendance: 25 },
    { name: "Надя Котик", rating: 659, attendance: 15 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Петя Пётр", rating: 642, attendance: 14 },
    { name: "Матвей Пригожий", rating: 612, attendance: 22 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Леонид П", rating: 600, attendance: 9 },
    { name: "Стас ISK", rating: 597, attendance: 22 },
    { name: "Надя Жб", rating: 529, attendance: 15 },
    { name: "Федор К", rating: 522, attendance: 13 },
    { name: "Серж", rating: 503, attendance: 10 },
    { name: "Вова Гриненко", rating: 493, attendance: 11 },
    { name: "Даниил Ершов", rating: 487, attendance: 12 },
    { name: "Ксюша Лис", rating: 487, attendance: 9 },
    { name: "Свидетель", rating: 484, attendance: 11 },
    { name: "Вова Баж", rating: 482, attendance: 9 },
    { name: "Соня Новикова", rating: 469, attendance: 11 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Александр Будда", rating: 442, attendance: 13 },
    { name: "Екатерина С", rating: 405, attendance: 9 },
    { name: "Андрей Фломастер", rating: 384, attendance: 14 },
    { name: "Мария Павлова", rating: 363, attendance: 8 },
    { name: "Петя Федоров", rating: 353, attendance: 5 },
    { name: "Сергей МЭЗ", rating: 349, attendance: 1 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Иван Баж", rating: 330, attendance: 9 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Настя Буд", rating: 299, attendance: 5 },
    { name: "Всеволод Кузнецов", rating: 277, attendance: 6 },
    { name: "Денис Дон", rating: 276, attendance: 6 },
    { name: "Даша Yellow", rating: 271, attendance: 4 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Вадим Константинов", rating: 263, attendance: 4 },
    { name: "Любовь Т", rating: 260, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Никита Yellow", rating: 239, attendance: 4 },
    { name: "Леон", rating: 235, attendance: 3 },
    { name: "Надя И", rating: 223, attendance: 6 },
    { name: "Роман Егоров", rating: 220, attendance: 6 },
    { name: "Зеньята", rating: 219, attendance: 7 },
    { name: "Настя Кудрявая", rating: 219, attendance: 5 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Анна К", rating: 207, attendance: 6 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Мойша", rating: 189, attendance: 4 },
    { name: "Дима Гончаров", rating: 183, attendance: 2 },
    { name: "Юля Зейн", rating: 182, attendance: 3 },
    { name: "Алексей Фалин", rating: 164, attendance: 1 },
    { name: "Наташа Бонд", rating: 162, attendance: 5 },
    { name: "Алёна Ф", rating: 155, attendance: 2 },
    { name: "Марсель", rating: 148, attendance: 3 },
    { name: "Глеб Витязь", rating: 142, attendance: 5 },
    { name: "Никита Башкин", rating: 141, attendance: 2 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Джибути", rating: 129, attendance: 5 },
    { name: "Арзу", rating: 125, attendance: 3 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Андрей Го", rating: 115, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Максим Гав", rating: 113, attendance: 3 },
    { name: "Christ", rating: 104, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Даниил Ш", rating: 93, attendance: 2 },
    { name: "Паша Веля", rating: 93, attendance: 1 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Люся Любера", rating: 80, attendance: 1 },
    { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Диана Мур", rating: 78, attendance: 2 },
    { name: "Никита П", rating: 77, attendance: 1 },
    { name: "Давид Жуков", rating: 76, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Илья Midas", rating: 75, attendance: 1 },
    { name: "Эдик Сер", rating: 74, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Наташа С", rating: 66, attendance: 2 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Сергей Ш", rating: 64, attendance: 1 },
    { name: "Мьянма", rating: 63, attendance: 2 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Саша Назарова", rating: 63, attendance: 1 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Глеб Макеев", rating: 62, attendance: 1 },
    { name: "Артём Акулов", rating: 61, attendance: 2 },
    { name: "Роман Г", rating: 61, attendance: 1 },
    { name: "Никита Караксик", rating: 60, attendance: 2 },
    { name: "Леша Ч", rating: 60, attendance: 1 },
    { name: "Николай Шар", rating: 60, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Влад Пив", rating: 59, attendance: 1 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Даниил Ясев", rating: 57, attendance: 1 },
    { name: "Артур Король", rating: 57, attendance: 1 },
    { name: "Илья Хом", rating: 57, attendance: 1 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Таня Т", rating: 56, attendance: 2 },
    { name: "Ся Ся", rating: 56, attendance: 1 },
    { name: "Юрий Белый", rating: 56, attendance: 1 },
    { name: "Иван Грозный", rating: 55, attendance: 2 },
    { name: "Дмитрий Шки", rating: 55, attendance: 1 },
    { name: "Макс Гема", rating: 54, attendance: 2 },
    { name: "Ходор", rating: 54, attendance: 1 },
    { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Владимир Дре", rating: 53, attendance: 1 },
    { name: "Радмир Г", rating: 53, attendance: 1 },
    { name: "Ваня Мил", rating: 50, attendance: 1 },
    { name: "Катя В", rating: 49, attendance: 1 },
    { name: "Оля М", rating: 49, attendance: 1 },
    { name: "Стас Мазепа", rating: 47, attendance: 2 },
    { name: "Юка", rating: 47, attendance: 2 },
    { name: "Соня Кур", rating: 46, attendance: 2 },
    { name: "SvetLana M", rating: 46, attendance: 1 },
    { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 },
    { name: "Иван", rating: 43, attendance: 1 },
    { name: "Арт", rating: 42, attendance: 2 },
    { name: "Даня Гол", rating: 42, attendance: 1 },
    { name: "Николя", rating: 41, attendance: 1 },
    { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Бенси", rating: 39, attendance: 1 },
    { name: "Георгий С", rating: 39, attendance: 1 },
    { name: "Вадим Кри", rating: 38, attendance: 1 },
    { name: "Илья Сус", rating: 38, attendance: 1 },
    { name: "Александра К", rating: 37, attendance: 1 },
    { name: "ая?", rating: 36, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 },
    { name: "Машик", rating: 35, attendance: 1 },
    { name: "Многолапый", rating: 35, attendance: 1 },
    { name: "Лера Аракчаа", rating: 34, attendance: 1 },
    { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Арсений G", rating: 33, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Саша Льв", rating: 32, attendance: 1 },
    { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Ярик 37", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Даниил С", rating: 30, attendance: 1 },
    { name: "Игорь Гусь", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
    { name: "Андрей Барт", rating: 29, attendance: 1 },
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Константин Т", rating: 29, attendance: 1 },
    { name: "Татьяна Gorman", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Даша Б", rating: 28, attendance: 1 },
    { name: "Даша Лев", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Ульяна Ану", rating: 28, attendance: 1 },
    { name: "Никита ВАР", rating: 27, attendance: 1 },
    { name: "Лиза О", rating: 27, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Потапыч", rating: 27, attendance: 1 },
    { name: "Алехан", rating: 26, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Максим Кузеев", rating: 25, attendance: 1 },
    { name: "Настя Pas", rating: 25, attendance: 1 },
    { name: "Лера Ким", rating: 24, attendance: 1 },
    { name: "София Например", rating: 24, attendance: 1 },
    { name: "Анастасия Ан", rating: 23, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 },
    { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 },
    { name: "Никита Никарагуа", rating: 23, attendance: 1 },
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
    { name: "Лера С", rating: 19, attendance: 1 },
    { name: "Лина S", rating: 19, attendance: 1 },
    { name: "Рита Мак", rating: 19, attendance: 1 },
    { name: "Слава П", rating: 19, attendance: 1 },
    { name: "Расул", rating: 18, attendance: 1 },
    { name: "Сергей Коз", rating: 18, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 },
    { name: "Маша Сот", rating: 17, attendance: 1 },
    { name: "Игорь Петр", rating: 16, attendance: 1 },
    { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Рашад", rating: 15, attendance: 1 },
    { name: "Александр Гиг", rating: 13, attendance: 1 }
];

// Добавки после 2 дня
const ratingAdditionsAfterDay2 = [
    { name: "Аня Жук", addition: 14 },
    { name: "Артём SUB", addition: 0 },
    { name: "Богдан А", addition: 0 },
    { name: "Виктор 42", addition: 56 },
    { name: "Даниил Ясев", addition: 79 },
    { name: "Даша Хромова", addition: 0 },
    { name: "Денис Дон", addition: 97 },
    { name: "Егор АА 11", addition: 0 },
    { name: "Кирилл Лед", addition: 5 },
    { name: "Макар Аве", addition: 0 },
    { name: "Мария Павлова", addition: 34 },
    { name: "Марсель", addition: 43 },
    { name: "Михаил Козадой", addition: 0 },
    { name: "муся", addition: 0 },
    { name: "Надя Котик", addition: 8 },
    { name: "Немощь", addition: 0 },
    { name: "Петя Пётр", addition: 9 },
    { name: "Роман Kisslove", addition: 61 },
    { name: "Роман Лод", addition: 0 },
    { name: "Саша Воргун", addition: 137 },
    { name: "Саша Коч", addition: 0 },
    { name: "Семён Ануфриев", addition: 0 },
    { name: "Соня Новикова", addition: 37 },
    { name: "Соня Серж", addition: 0 },
    { name: "Стас ISK", addition: 0 }
];

// Охота за головами
const huntingData = [
    { name: "Даниил Ясев", value: 1400 },
    { name: "Семён Ануфриев", value: 1375 },
    { name: "Полина Матыцына", value: 1300 },
    { name: "Шурик Шилкин", value: 1100 },
    { name: "Михаил Наб", value: 1000 },
    { name: "Егор АА 11", value: 800 },
    { name: "Jane 007", value: 800 },
    { name: "Саша Воргун", value: 800 },
    { name: "Артём SUB", value: 775 },
    { name: "Богдан А", value: 750 },
    { name: "Никита Зейн", value: 600 },
    { name: "Ирина Ага", value: 600 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Матвей Пригожий", value: 600 },
    { name: "Дима Гончаров", value: 600 },
    { name: "Немощь", value: 400 },
    { name: "Роман Лод", value: 400 },
    { name: "Макар Аве", value: 400 },
    { name: "Егор Вино", value: 400 },
    { name: "Надя Котик", value: 350 },
    { name: "Виктор 42", value: 350 },
    { name: "Саша Коч", value: 300 },
    { name: "Coach krotovski", value: 300 },
    { name: "Мария Павлова", value: 300 },
    { name: "муся", value: 200 },
    { name: "grooveman", value: 200 },
    { name: "Даниил Ершов", value: 200 },
    { name: "Соня Серж", value: 100 }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentSearchTerm = '';

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

// Изменения позиций для таблицы ФИНАЛ (сравнение после 1 дня и суммы 1+2)
function getFinalPositionChanges() {
    const afterDay1 = [...day1Data].sort((a, b) => b.total - a.total).map((p, idx) => ({ 
        name: p.name, 
        position: idx + 1, 
        total: p.total 
    }));
    
    const afterDay2Map = new Map();
    day1Data.forEach(p => afterDay2Map.set(p.name, p.total));
    day2Data.forEach(p => {
        if (afterDay2Map.has(p.name)) afterDay2Map.set(p.name, afterDay2Map.get(p.name) + p.total);
        else afterDay2Map.set(p.name, p.total);
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

// ========== ОТРИСОВКА ==========

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
    if (currentSearchTerm === '') searchResults.style.display = 'none';
    else {
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
        if (p.change > 0) changeSign = `+${p.change}`;
        else if (p.change === 0 && p.playedInDay2 === true) changeSign = '+0';
        else if (p.change === 0) changeSign = '0';
        else changeSign = `${p.change}`;

        const isTop19 = realPosition <= 19;
        let rowClass = isTop19 ? 'rating-highlight' : '';

        const isSearchMatch = currentSearchTerm !== '' && p.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';

        const row = tbody.insertRow();
        row.className = rowClass;

        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = p.name;
        row.insertCell(2).innerHTML = changeHtml;
        row.insertCell(3).innerHTML = p.previousRating > 0 ? p.previousRating : '-';
        row.insertCell(4).innerHTML = p.attendance;
        row.insertCell(5).innerHTML = changeSign;
        row.insertCell(6).innerHTML = p.newRating;

        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) if (row.cells[i]) row.cells[i].style.display = 'none';
        }
    });

    const thead = document.querySelector('#ratingTableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = 'none';
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = '';
    }

    document.getElementById('totalPlayers').textContent = filteredData.length;
    document.getElementById('averageStack').textContent = '0';
}

function fillPreviousResultsTable() {
    const tbody = document.getElementById('previousResultsTable');
    if (!tbody) return;

    const sortedData = [...previousTournamentResults].sort((a, b) => b.total - a.total);
    
    const filteredData = currentSearchTerm === ''
        ? sortedData
        : sortedData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));

    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') searchResults.style.display = 'none';
    else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }

    const mobile = isMobile();
    const table = document.getElementById('previousResultsTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;

    tbody.innerHTML = '';

    filteredData.forEach((item) => {
        const realPosition = sortedData.findIndex(d => d.name === item.name) + 1;
        
        let rowClass = '';
        if (realPosition === 1) rowClass = 'final-gold';

        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';

        const row = tbody.insertRow();
        row.className = rowClass;

        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;

        const d1Cell = row.insertCell(2);
        d1Cell.innerHTML = formatNumber(item.day1);
        if (item.day1 > 0) d1Cell.className = 'positive-result';
        else if (item.day1 < 0) d1Cell.className = 'negative-result';

        const d2Cell = row.insertCell(3);
        d2Cell.innerHTML = formatNumber(item.day2);
        if (item.day2 > 0) d2Cell.className = 'positive-result';
        else if (item.day2 < 0) d2Cell.className = 'negative-result';

        const d3Cell = row.insertCell(4);
        d3Cell.innerHTML = formatNumber(item.day3);
        if (item.day3 > 0) d3Cell.className = 'positive-result';
        else if (item.day3 < 0) d3Cell.className = 'negative-result';

        const d4Cell = row.insertCell(5);
        d4Cell.innerHTML = formatNumber(item.day4);
        if (item.day4 > 0) d4Cell.className = 'positive-result';
        else if (item.day4 < 0) d4Cell.className = 'negative-result';

        const totalCell = row.insertCell(6);
        totalCell.innerHTML = formatNumber(item.total);
        if (item.total > 0) totalCell.className = 'positive-result';
        else if (item.total < 0) totalCell.className = 'negative-result';

        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) if (row.cells[i]) row.cells[i].style.display = 'none';
        }
    });

    const thead = document.querySelector('#previousResultsTableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = 'none';
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = '';
    }

    document.getElementById('totalPlayers').textContent = filteredData.length;
    document.getElementById('averageStack').textContent = '0';
}

function fillDay1Table() {
    const tbody = document.getElementById('day1Table');
    if (!tbody) return;

    const sortedData = [...day1Data].sort((a, b) => b.total - a.total);
    const filteredData = currentSearchTerm === ''
        ? sortedData
        : sortedData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));

    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') searchResults.style.display = 'none';
    else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }

    const mobile = isMobile();
    const table = document.getElementById('day1TableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;

    tbody.innerHTML = '';

    filteredData.forEach((item) => {
        const realPosition = sortedData.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();

        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);

        const totalCell = row.insertCell(6);
        totalCell.innerHTML = formatNumber(item.total);
        if (item.total > 0) totalCell.className = 'positive-result';
        else if (item.total < 0) totalCell.className = 'negative-result';

        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) if (row.cells[i]) row.cells[i].style.display = 'none';
        }
    });

    const thead = document.querySelector('#day1TableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = 'none';
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = '';
    }

    document.getElementById('totalPlayers').textContent = filteredData.length;
    const totalSum = day1Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day1Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

function fillDay2Table() {
    const tbody = document.getElementById('day2Table');
    if (!tbody) return;

    const sortedData = [...day2Data].sort((a, b) => b.total - a.total);
    const filteredData = currentSearchTerm === ''
        ? sortedData
        : sortedData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));

    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') searchResults.style.display = 'none';
    else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }

    const mobile = isMobile();
    const table = document.getElementById('day2TableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;

    tbody.innerHTML = '';

    filteredData.forEach((item) => {
        const realPosition = sortedData.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();

        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);

        const totalCell = row.insertCell(6);
        totalCell.innerHTML = formatNumber(item.total);
        if (item.total > 0) totalCell.className = 'positive-result';
        else if (item.total < 0) totalCell.className = 'negative-result';

        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) if (row.cells[i]) row.cells[i].style.display = 'none';
        }
    });

    const thead = document.querySelector('#day2TableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = 'none';
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 5; i++) if (headers[i]) headers[i].style.display = '';
    }

    document.getElementById('totalPlayers').textContent = filteredData.length;
    const totalSum = day2Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day2Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

function fillFinalTable() {
    const tbody = document.getElementById('finalTable');
    if (!tbody) return;

    const nameSet = new Set();
    day1Data.forEach(p => nameSet.add(p.name));
    day2Data.forEach(p => nameSet.add(p.name));

    const results = [];
    nameSet.forEach(name => {
        const d1 = day1Data.find(p => p.name === name);
        const d2 = day2Data.find(p => p.name === name);
        const day1Total = d1 ? d1.total : 0;
        const day2Total = d2 ? d2.total : 0;
        results.push({
            name: name,
            day1: day1Total,
            day2: day2Total,
            day3: 0,
            day4: 0,
            total: day1Total + day2Total
        });
    });

    results.sort((a, b) => b.total - a.total);

    const changes = getFinalPositionChanges();

    const filteredData = currentSearchTerm === ''
        ? results
        : results.filter(p => p.name.toLowerCase().includes(currentSearchTerm));

    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') searchResults.style.display = 'none';
    else {
        searchResults.style.display = 'block';
        resultsCount.textContent = filteredData.length;
    }

    const mobile = isMobile();
    const table = document.getElementById('finalTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;

    tbody.innerHTML = '';

    filteredData.forEach((item) => {
        const realPosition = results.findIndex(r => r.name === item.name) + 1;
        const change = changes.get(item.name);
        
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

        const d1Cell = row.insertCell(3);
        d1Cell.innerHTML = formatNumber(item.day1);
        if (item.day1 > 0) d1Cell.className = 'positive-result';
        else if (item.day1 < 0) d1Cell.className = 'negative-result';

        const d2Cell = row.insertCell(4);
        d2Cell.innerHTML = formatNumber(item.day2);
        if (item.day2 > 0) d2Cell.className = 'positive-result';
        else if (item.day2 < 0) d2Cell.className = 'negative-result';

        const d3Cell = row.insertCell(5);
        d3Cell.innerHTML = formatNumber(item.day3);
        if (item.day3 > 0) d3Cell.className = 'positive-result';
        else if (item.day3 < 0) d3Cell.className = 'negative-result';

        const d4Cell = row.insertCell(6);
        d4Cell.innerHTML = formatNumber(item.day4);
        if (item.day4 > 0) d4Cell.className = 'positive-result';
        else if (item.day4 < 0) d4Cell.className = 'negative-result';

        const totalCell = row.insertCell(7);
        totalCell.innerHTML = formatNumber(item.total);
        if (item.total > 0) totalCell.className = 'positive-result';
        else if (item.total < 0) totalCell.className = 'negative-result';

        if (hideExtraColumns) {
            for (let i = 2; i <= 6; i++) if (row.cells[i]) row.cells[i].style.display = 'none';
        }
    });

    const thead = document.querySelector('#finalTableElement thead');
    if (thead && hideExtraColumns) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 6; i++) if (headers[i]) headers[i].style.display = 'none';
    } else if (thead) {
        const headers = thead.querySelectorAll('th');
        for (let i = 2; i <= 6; i++) if (headers[i]) headers[i].style.display = '';
    }

    document.getElementById('totalPlayers').textContent = filteredData.length;
    const totalSum = results.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / results.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

function fillHuntingNominationsTable() {
    const tbody = document.getElementById('huntingNominationsTable');
    if (!tbody) return;

    const filteredData = currentSearchTerm === ''
        ? huntingData
        : huntingData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));

    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    if (currentSearchTerm === '') searchResults.style.display = 'none';
    else {
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
    else if (activeTab.id === 'day2') fillDay2Table();
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
    ])].sort();

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

    const targetTab = document.getElementById(tabName);
    if (targetTab) targetTab.classList.add('active');

    const targetBtn = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
    if (targetBtn) targetBtn.classList.add('active');

    const phases = {
        'rating': 'Рейтинг',
        'previousResults': 'Результаты Межсезонки',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 05.11.2026',
        'day2': '2 день - 12.11.2026',
        'day3': '3 день - 19.11.2026',
        'day4': '4 день - 26.11.2026',
        'final': 'Финал - 28.11.2026'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Турнир Сэнди Данлоп 3-9';

    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    
    const expandBtn = document.querySelector('.expand-button');
    if (tabName === 'day3' || tabName === 'day4') {
        expandBtn.style.display = 'none';
    } else {
        expandBtn.style.display = 'block';
    }

    resetTableExpand();

    if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'huntingNominations') fillHuntingNominationsTable();
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'final') fillFinalTable();
    else {
        document.getElementById('totalPlayers').textContent = 0;
        document.getElementById('averageStack').textContent = '0';
    }
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
    else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'final') fillFinalTable();
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
        if (activeTab) {
            if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
            else if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'day2') fillDay2Table();
            else if (activeTab.id === 'final') fillFinalTable();
        }
    });
});
