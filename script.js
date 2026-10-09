// ========== ДАННЫЕ ==========

// Результаты Турнира "ДЖОНАТАНА ТОМАЙО 3-8"
const previousTournamentResults = [
    { name: "Семён Ануфриев", place: 1, status: "Победитель 🥇" },
    { name: "Надя Котик", place: 2, status: "Серебряный призер 🥈" },
    { name: "Богдан А", place: 3, status: "Бронзовый призер 🥉" },
    { name: "Полина Матыцына", place: 4, status: "Участник финала" },
    { name: "Макар Аве", place: 5, status: "Участник финала" },
    { name: "Coach krotovski", place: 6, status: "Участник финала" },
    { name: "Аня Жук", place: 7, status: "Участник финала" },
    { name: "Шурик Шилкин", place: 8, status: "Участник финала" },
    { name: "Роман Лод", place: 9, status: "Участник финала" },
    { name: "Неопознанный утконос", place: 10, status: "Участник финала" },
    { name: "Соня Серж", place: 11, status: "Участник финала" },
    { name: "Немощь", place: 12, status: "Участник финала" },
    { name: "Ирина Ага", place: 13, status: "Участник финала" },
    { name: "Никита П", place: 14, status: "Участник финала" },
    { name: "Даша Хромова", place: 15, status: "Участник финала" },
    { name: "Евгений Ц", place: 16, status: "Участник финала" },
    { name: "Денис Дон", place: 17, status: "Участник финала" },
    { name: "Арзу", place: 18, status: "Участник финала" },
    { name: "Матвей Пригожий", place: 19, status: "Участник финала" },
    { name: "Егор АА 11", place: 20, status: "Участник финала" },
    { name: "Саша Назарова", place: 21, status: "Участник финала" },
    { name: "Настя Кудрявая", place: 22, status: "Участник финала" },
    { name: "Артём SUB", place: 23, status: "Участник турнира" },
    { name: "Никита Зейн", place: 24, status: "Участник турнира" },
    { name: "Том", place: 25, status: "Участник турнира" },
    { name: "Даниил Ш", place: 26, status: "Участник турнира" },
    { name: "Екатерина С", place: 27, status: "Участник турнира" },
    { name: "Мария Павлова", place: 28, status: "Участник турнира" },
    { name: "Михаил Козадой", place: 29, status: "Участник турнира" },
    { name: "Петя Пётр", place: 30, status: "Участник турнира" },
    { name: "Серж", place: 31, status: "Участник турнира" },
    { name: "Егор Вино", place: 32, status: "Участник турнира" },
    { name: "Давид Жуков", place: 33, status: "Участник турнира" },
    { name: "Иван Баж", place: 34, status: "Участник турнира" },
    { name: "Соня Новикова", place: 35, status: "Участник турнира" },
    { name: "Даниил Ершов", place: 36, status: "Участник турнира" },
    { name: "Джибути", place: 37, status: "Участник турнира" },
    { name: "Любовь Т", place: 38, status: "Участник турнира" },
    { name: "Надя И", place: 39, status: "Участник турнира" },
    { name: "Вадим Кри", place: 40, status: "Участник турнира" },
    { name: "Надя Жб", place: 41, status: "Участник турнира" },
    { name: "Наташа Бонд", place: 42, status: "Участник турнира" },
    { name: "Robert Юниксфактёр", place: 43, status: "Участник турнира" },
    { name: "Christ", place: 44, status: "Участник турнира" },
    { name: "Мьянма", place: 45, status: "Участник турнира" },
    { name: "Андрей Фломастер", place: 46, status: "Участник турнира" },
    { name: "Наташа С", place: 47, status: "Участник турнира" },
    { name: "Кирилл Лед", place: 48, status: "Участник турнира" },
    { name: "Таня Т", place: 49, status: "Участник турнира" },
    { name: "Макс Гема", place: 50, status: "Участник турнира" },
    { name: "Лиза Арц", place: 51, status: "Участник турнира" },
    { name: "Арсений G", place: 52, status: "Участник турнира" },
    { name: "Федор К", place: 53, status: "Участник турнира" },
    { name: "Всеволод Кузнецов", place: 54, status: "Участник турнира" },
    { name: "Саша Коч", place: 55, status: "Участник турнира" },
    { name: "муся", place: 56, status: "Участник турнира" }
];

// Данные 1 дня
const day1Data = [
    { name: "Артём SUB", entry: 1100, extra: 2000, exit: 18700, win: 15600 },
    { name: "Немощь", entry: 1100, extra: 0, exit: 16405, win: 15305 },
    { name: "Богдан А", entry: 1100, extra: 0, exit: 11885, win: 10785 },
    { name: "Федор К", entry: 1100, extra: 0, exit: 9490, win: 8390 },
    { name: "Саша Коч", entry: 1100, extra: 1000, exit: 10135, win: 8035 },
    { name: "Ирина Ага", entry: 1100, extra: 2000, exit: 9285, win: 6185 },
    { name: "Егор АА 11", entry: 1100, extra: 1000, exit: 8200, win: 6100 },
    { name: "Михаил Козадой", entry: 1100, extra: 6000, exit: 12070, win: 4970 },
    { name: "Лиза Арц", entry: 1100, extra: 0, exit: 5985, win: 4885 },
    { name: "Евгений Ц", entry: 1100, extra: 0, exit: 5075, win: 3975 },
    { name: "Зеньята", entry: 1100, extra: 2000, exit: 4670, win: 1570 },
    { name: "Марсель", entry: 1100, extra: 1000, exit: 3285, win: 1185 },
    { name: "Макар Аве", entry: 1100, extra: 1000, exit: 3130, win: 1030 },
    { name: "Оля М", entry: 1100, extra: 1000, exit: 2950, win: 850 },
    { name: "Полина Матыцына", entry: 1100, extra: 0, exit: 1805, win: 705 },
    { name: "Robert Юниксфактёр", entry: 1100, extra: 1000, exit: 2615, win: 515 },
    { name: "Глеб Витязь", entry: 1100, extra: 2000, exit: 3255, win: 155 },
    { name: "Иван", entry: 1100, extra: 1000, exit: 2250, win: 150 },
    { name: "Шурик Шилкин", entry: 1100, extra: 0, exit: 1050, win: -50 },
    { name: "Том", entry: 1100, extra: 0, exit: 675, win: -425 },
    { name: "Соня Серж", entry: 1100, extra: 3000, exit: 3090, win: -1010 },
    { name: "Настя Кудрявая", entry: 1100, extra: 0, exit: 0, win: -1100 },
    { name: "Coach krotovski", entry: 1100, extra: 3000, exit: 2865, win: -1235 },
    { name: "Наташа Бонд", entry: 1100, extra: 2000, exit: 1205, win: -1895 },
    { name: "Александра К", entry: 1100, extra: 1000, exit: 165, win: -1935 },
    { name: "муся", entry: 1100, extra: 1000, exit: 0, win: -2100 },
    { name: "Соня Новикова", entry: 1100, extra: 3000, exit: 830, win: -3270 },
    { name: "Екатерина С", entry: 1100, extra: 4000, exit: 1515, win: -3585 },
    { name: "Алехан", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Макс Гема", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Неопознанный утконос", entry: 1100, extra: 3000, exit: 0, win: -4100 },
    { name: "Кирилл Лед", entry: 1100, extra: 7000, exit: 3205, win: -4895 },
    { name: "Настя Буд", entry: 1100, extra: 4000, exit: 0, win: -5100 },
    { name: "Лера С", entry: 1100, extra: 6000, exit: 0, win: -7100 },
    { name: "Аня Жук", entry: 1100, extra: 5000, exit: 0, win: -6100 },
    { name: "Денис Дон", entry: 1100, extra: 5000, exit: 0, win: -6100 },
    { name: "Расул", entry: 1100, extra: 6000, exit: 0, win: -7100 },
    { name: "Надя Котик", entry: 1100, extra: 6000, exit: 0, win: -7100 },
    { name: "Семён Ануфриев", entry: 1100, extra: 7000, exit: 0, win: -8100 }
];

// Охота за головами
const huntingData = [
    { name: "Богдан А", value: 1500 },
    { name: "Семён Ануфриев", value: 1400 },
    { name: "Полина Матыцына", value: 1300 },
    { name: "Егор АА 11", value: 1200 },
    { name: "Jane 007", value: 1100 },
    { name: "Шурик Шилкин", value: 1000 },
    { name: "Никита Зейн", value: 800 },
    { name: "Михаил Наб", value: 800 },
    { name: "Роман Лод", value: 800 },
    { name: "Ирина Ага", value: 800 },
    { name: "Артём SUB", value: 600 },
    { name: "Немощь", value: 600 },
    { name: "Михаил Козадой", value: 600 },
    { name: "Саша Коч", value: 600 },
    { name: "Coach krotovski", value: 600 },
    { name: "Макар Аве", value: 400 },
    { name: "Соня Серж", value: 400 },
    { name: "Егор Вино", value: 400 },
    { name: "Кристина А", value: 400 },
    { name: "Лиза Арц", value: 400 }
];

// ========== РЕЙТИНГ ==========
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1661, attendance: 52 },
    { name: "Семён Ануфриев", rating: 1566, attendance: 42 },
    { name: "Полина Матыцына", rating: 1299, attendance: 42 },
    { name: "Егор АА 11", rating: 1288, attendance: 44 },
    { name: "Jane 007", rating: 1264, attendance: 41 },
    { name: "Шурик Шилкин", rating: 1255, attendance: 52 },
    { name: "Никита Зейн", rating: 1250, attendance: 35 },
    { name: "Михаил Наб", rating: 1245, attendance: 31 },
    { name: "Роман Лод", rating: 1244, attendance: 37 },
    { name: "Ирина Ага", rating: 1205, attendance: 27 },
    { name: "Михаил Козадой", rating: 1119, attendance: 36 },
    { name: "Артём SUB", rating: 1094, attendance: 27 },
    { name: "Coach krotovski", rating: 1079, attendance: 23 },
    { name: "Саша Коч", rating: 1063, attendance: 35 },
    { name: "Немощь", rating: 1037, attendance: 24 },
    { name: "Макар Аве", rating: 937, attendance: 35 },
    { name: "Соня Серж", rating: 930, attendance: 38 },
    { name: "Егор Вино", rating: 927, attendance: 34 },
    { name: "Кристина А", rating: 869, attendance: 28 },
    { name: "grooveman", rating: 830, attendance: 17 },
    { name: "муся", rating: 823, attendance: 18 },
    { name: "Лиза Арц", rating: 792, attendance: 14 },
    { name: "Даша Хромова", rating: 766, attendance: 30 },
    { name: "Robert Юниксфактёр", rating: 736, attendance: 16 },
    { name: "Максим Spy", rating: 729, attendance: 32 },
    { name: "Неопознанный утконос", rating: 728, attendance: 17 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Саша Тяжелов", rating: 668, attendance: 8 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Саша Бел", rating: 583, attendance: 10 },
    { name: "Матвей Пригожий", rating: 582, attendance: 19 },
    { name: "Аня Жук", rating: 571, attendance: 12 },
    { name: "Евгений Ц", rating: 559, attendance: 14 },
    { name: "Стас ISK", rating: 556, attendance: 18 },
    { name: "Кирилл Лед", rating: 553, attendance: 12 },
    { name: "Надя Жб", rating: 529, attendance: 15 },
    { name: "Серж", rating: 503, attendance: 10 },
    { name: "Том", rating: 501, attendance: 22 },
    { name: "Вова Гриненко", rating: 493, attendance: 11 },
    { name: "Свидетель", rating: 484, attendance: 11 },
    { name: "Надя Котик", rating: 471, attendance: 9 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Вова Баж", rating: 457, attendance: 8 },
    { name: "Петя Пётр", rating: 450, attendance: 9 },
    { name: "Леонид П", rating: 450, attendance: 8 },
    { name: "Александр Будда", rating: 442, attendance: 13 },
    { name: "Даниил Ершов", rating: 437, attendance: 11 },
    { name: "Соня Новикова", rating: 409, attendance: 9 },
    { name: "Ксюша Лис", rating: 405, attendance: 8 },
    { name: "Федор К", rating: 396, attendance: 11 },
    { name: "Андрей Фломастер", rating: 384, attendance: 14 },
    { name: "Екатерина С", rating: 381, attendance: 8 },
    { name: "Петя Федоров", rating: 353, attendance: 5 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Всеволод Кузнецов", rating: 277, attendance: 6 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Любовь Т", rating: 260, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Иван Баж", rating: 249, attendance: 7 },
    { name: "Мария Павлова", rating: 249, attendance: 5 },
    { name: "Надя И", rating: 223, attendance: 6 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Анна К", rating: 207, attendance: 6 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Мойша", rating: 167, attendance: 3 },
    { name: "Алёна Ф", rating: 155, attendance: 2 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Зеньята", rating: 135, attendance: 5 },
    { name: "Наташа Бонд", rating: 130, attendance: 4 },
    { name: "Настя Кудрявая", rating: 126, attendance: 3 },
    { name: "Арзу", rating: 125, attendance: 3 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Christ", rating: 104, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Джибути", rating: 99, attendance: 4 },
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
    { name: "Никита П", rating: 77, attendance: 1 },
    { name: "Давид Жуков", rating: 76, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Илья Midas", rating: 75, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Денис Дон", rating: 70, attendance: 1 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Наташа С", rating: 66, attendance: 2 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Даниил Ш", rating: 64, attendance: 1 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Саша Назарова", rating: 63, attendance: 1 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Артём Акулов", rating: 61, attendance: 2 },
    { name: "Роман Г", rating: 61, attendance: 1 },
    { name: "Леша Ч", rating: 60, attendance: 1 },
    { name: "Николай Шар", rating: 60, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Влад Пив", rating: 59, attendance: 1 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Артур Король", rating: 57, attendance: 1 },
    { name: "Илья Хом", rating: 57, attendance: 1 },
    { name: "Макс Пиво", rating: 57, attendance: 1 },
    { name: "Таня Т", rating: 56, attendance: 2 },
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
    { name: "Вова Ф", rating: 32, attendance: 1 },
    { name: "Мьянма", rating: 32, attendance: 1 },
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
    { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 },
    { name: "Константин Т", rating: 29, attendance: 1 },
    { name: "Макс Гема", rating: 29, attendance: 1 },
    { name: "Татьяна Gorman", rating: 29, attendance: 1 },
    { name: "Юстрик", rating: 29, attendance: 1 },
    { name: "Яна Кат", rating: 29, attendance: 1 },
    { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Даша Б", rating: 28, attendance: 1 },
    { name: "Даша Лев", rating: 28, attendance: 1 },
    { name: "Никита Караксик", rating: 28, attendance: 1 },
    { name: "Паша Н", rating: 28, attendance: 1 },
    { name: "Ульяна Ану", rating: 28, attendance: 1 },
    { name: "Лиза О", rating: 27, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Потапыч", rating: 27, attendance: 1 },
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

// Добавки после 1 дня
const ratingAdditionsAfterDay1 = [
    { name: "Coach krotovski", addition: 0 },
    { name: "Robert Юниксфактёр", addition: 11 },
    { name: "Александра К", addition: 37 },
    { name: "Алехан", addition: 26 },
    { name: "Аня Жук", addition: 0 },
    { name: "Артём SUB", addition: 111 },
    { name: "Богдан А", addition: 57 },
    { name: "Глеб Витязь", addition: 38 },
    { name: "Денис Дон", addition: 20 },
    { name: "Евгений Ц", addition: 56 },
    { name: "Егор АА 11", addition: 14 },
    { name: "Екатерина С", addition: 24 },
    { name: "Зеньята", addition: 47 },
    { name: "Иван", addition: 43 },
    { name: "Ирина Ага", addition: 8 },
    { name: "Кирилл Лед", addition: 0 },
    { name: "Лера С", addition: 19 },
    { name: "Лиза Арц", addition: 47 },
    { name: "Макар Аве", addition: 0 },
    { name: "Макс Гема", addition: 25 },
    { name: "Марсель", addition: 53 },
    { name: "Михаил Козадой", addition: 0 },
    { name: "муся", addition: 4 },
    { name: "Надя Котик", addition: 18 },
    { name: "Настя Буд", addition: 22 },
    { name: "Настя Кудрявая", addition: 52 },
    { name: "Наташа Бонд", addition: 32 },
    { name: "Немощь", addition: 136 },
    { name: "Неопознанный утконос", addition: 0 },
    { name: "Оля М", addition: 49 },
    { name: "Полина Матыцына", addition: 4 },
    { name: "Расул", addition: 18 },
    { name: "Саша Коч", addition: 29 },
    { name: "Семён Ануфриев", addition: 0 },
    { name: "Соня Новикова", addition: 27 },
    { name: "Соня Серж", addition: 0 },
    { name: "Том", addition: 29 },
    { name: "Федор К", addition: 121 },
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
        if (p.change > 0) {
            changeSign = `+${p.change}`;
        } else if (p.change === 0 && p.playedInDay1 === true) {
            changeSign = '+0';
        } else if (p.change === 0) {
            changeSign = '0';
        } else {
            changeSign = `${p.change}`;
        }
        
        const isTop19 = realPosition <= 19;
        let rowClass = '';
        if (isTop19) rowClass = 'rating-highlight';
        
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
    document.getElementById('averageStack').textContent = '0';
}

// Результаты Турнира "ДЖОНАТАНА ТОМАЙО 3-8"
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

// День 1
function fillDay1Table() {
    const tbody = document.getElementById('day1Table');
    if (!tbody) return;
    
    const sortedData = [...day1Data].sort((a, b) => b.win - a.win);
    
    const filteredData = currentSearchTerm === '' 
        ? sortedData 
        : sortedData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
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
        const realPosition = sortedData.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.extra);
        row.insertCell(4).innerHTML = formatNumber(item.exit);
        
        const winCell = row.insertCell(5);
        winCell.innerHTML = formatNumber(item.win);
        if (item.win > 0) winCell.className = 'positive-result';
        else if (item.win < 0) winCell.className = 'negative-result';
        
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
    
    const totalSum = day1Data.reduce((sum, p) => sum + p.win, 0);
    const avgStack = Math.round(totalSum / day1Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Результаты (имена + итог 1 дня)
function fillResultsTable() {
    const tbody = document.getElementById('resultsTable');
    if (!tbody) return;
    
    const allData = [...day1Data].sort((a, b) => b.win - a.win);
    
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
    
    const mobile = isMobile();
    const table = document.getElementById('resultsTableElement');
    const isExpanded = table ? table.classList.contains('expanded') : false;
    const hideExtraColumns = mobile && !isExpanded;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((item) => {
        const realPosition = allData.findIndex(d => d.name === item.name) + 1;
        const row = tbody.insertRow();
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.win);
        row.insertCell(3).innerHTML = ''; // 2 день
        row.insertCell(4).innerHTML = ''; // 3 день
        row.insertCell(5).innerHTML = ''; // 4 день
        
        const totalCell = row.insertCell(6);
        totalCell.innerHTML = formatNumber(item.win);
        if (item.win > 0) totalCell.className = 'positive-result';
        else if (item.win < 0) totalCell.className = 'negative-result';
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#resultsTableElement thead');
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
    document.getElementById('averageStack').textContent = '0';
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

// Заглушки для пустых вкладок
function fillEmptyTab() {
    document.getElementById('totalPlayers').textContent = 0;
    document.getElementById('averageStack').textContent = '0';
}

// ========== ПОИСК ==========

function performSearch() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'huntingNominations') fillHuntingNominationsTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'results') fillResultsTable();
    else fillEmptyTab();
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
        'previousResults': 'Результаты Турнира "ДЖОНАТАНА ТОМАЙО 3-8"',
        'huntingNominations': 'Охота за головами',
        'day1': '1 день - 08.10.2026',
        'day2': '2 день - 15.10.2026',
        'day3': '3 день - 22.10.2026',
        'day4': '4 день - 29.10.2026',
        'results': 'Результаты'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Межсезонка';
    
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    
    resetTableExpand();
    
    if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'huntingNominations') fillHuntingNominationsTable();
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'results') fillResultsTable();
    else fillEmptyTab();
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
    else if (activeTab.id === 'results') fillResultsTable();
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
        if (activeTab) {
            if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'results') fillResultsTable();
        }
    });
});
