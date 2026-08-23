// ========== ДАННЫЕ ==========

// Результаты Турнир Джимми Саммерфилда 3-6
const previousTournamentResults = [
    { name: "Роман Лод", place: 1, status: "Победитель 🥇" },
    { name: "Саша Коч", place: 2, status: "Серебряный призер 🥈" },
    { name: "Полина Матыцына", place: 3, status: "Бронзовый призер 🥉" },
    { name: "Пётр С", place: 4, status: "Участник финала" },
    { name: "Вова Гриненко", place: 5, status: "Участник финала" },
    { name: "Jane007", place: 6, status: "Участник финала" },
    { name: "Шурик Шилкин", place: 7, status: "Участник финала" },
    { name: "Кирилл Лед", place: 8, status: "Участник финала" },
    { name: "Михаил Наб", place: 9, status: "Участник финала" },
    { name: "Ирина Ага", place: 10, status: "Участник финала" },
    { name: "Кристина А", place: 11, status: "Участник финала" },
    { name: "Богдан А", place: 12, status: "Участник финала" },
    { name: "Михаил Козадой", place: 13, status: "Участник финала" },
    { name: "Даша Хромова", place: 14, status: "Участник финала" },
    { name: "Неопознанный утконос", place: 15, status: "Участник финала" },
    { name: "Стас ISK", place: 16, status: "Участник финала" },
    { name: "Даниил Ершов", place: 17, status: "Участник финала" },
    { name: "Соня Серж", place: 18, status: "Участник финала" },
    { name: "Никита Зейн", place: 19, status: "Участник финала" },
    { name: "Роман Г", place: 20, status: "Участник финала" },
    { name: "Николай Шар", place: 21, status: "Участник финала" },
    { name: "Coach krotovski", place: 22, status: "Участник финала" },
    { name: "Артём SUB", place: 23, status: "Участник финала" },
    { name: "Егор Вино", place: 24, status: "Участник финала" },
    { name: "Ксюша Лис", place: 25, status: "Участник финала" },
    { name: "Александр Будда", place: 26, status: "Участник финала" },
    { name: "Радмир Г", place: 27, status: "Участник турнира" },
    { name: "Алёна Ф", place: 28, status: "Участник турнира" },
    { name: "Лиза Арц", place: 29, status: "Участник турнира" },
    { name: "Вова Баж", place: 30, status: "Участник турнира" },
    { name: "Федор К", place: 31, status: "Участник турнира" },
    { name: "Семён Ануфриев", place: 32, status: "Участник турнира" },
    { name: "Катя В", place: 33, status: "Участник турнира" },
    { name: "Надя И", place: 34, status: "Участник турнира" },
    { name: "Евгений Ц", place: 35, status: "Участник турнира" },
    { name: "Аня Жук", place: 36, status: "Участник турнира" },
    { name: "Настя Буд", place: 37, status: "Участник турнира" },
    { name: "Матвей Пригожий", place: 38, status: "Участник турнира" },
    { name: "Зеньята", place: 39, status: "Участник турнира" },
    { name: "Дмитрий Ник", place: 40, status: "Участник турнира" },
    { name: "Ульяна Ану", place: 41, status: "Участник турнира" },
    { name: "Петя Федоров", place: 42, status: "Участник турнира" },
    { name: "Егор АА11", place: 43, status: "Участник турнира" },
    { name: "Том", place: 44, status: "Участник турнира" },
    { name: "Леонид П", place: 45, status: "Участник турнира" },
    { name: "муся", place: 46, status: "Участник турнира" },
    { name: "Максим Spy", place: 47, status: "Участник турнира" },
    { name: "grooveman", place: 48, status: "Участник турнира" },
    { name: "Свидетель", place: 49, status: "Участник турнира" },
    { name: "Андрей Фломастер", place: 50, status: "Участник турнира" },
    { name: "Арт", place: 51, status: "Участник турнира" },
    { name: "Надя Котик", place: 52, status: "Участник турнира" },
    { name: "Глеб Витязь", place: 53, status: "Участник турнира" },
    { name: "Лиза О", place: 54, status: "Участник турнира" },
    { name: "Лера Ким", place: 55, status: "Участник турнира" }
];

// Результаты турнира SIX SEVEN 6-7
const tournamentResultsData = [
    { name: "Ирина Ага", place: 1 },
    { name: "Полина Матыцына", place: 2 },
    { name: "Артём SUB", place: 3 },
    { name: "Шурик Шилкин", place: 4 },
    { name: "Соня Серж", place: 5 },
    { name: "Михаил Козадой", place: 6 },
    { name: "муся", place: 7 },
    { name: "Саша Бел", place: 8 },
    { name: "Лиза Арц", place: 9 },
    { name: "Егор АА 11", place: 10 },
    { name: "Соня Новикова", place: 11 },
    { name: "Никита Зейн", place: 12 },
    { name: "Роман Лод", place: 13 },
    { name: "Кристина А", place: 14 },
    { name: "Александр Будда", place: 15 },
    { name: "Coach krotovski", place: 16 },
    { name: "Jane 007", place: 17 },
    { name: "Макар Аве", place: 18 },
    { name: "Саша Коч", place: 19 },
    { name: "Неопознанный утконос", place: 20 },
    { name: "Екатерина С", place: 21 },
    { name: "Кирилл Лед", place: 22 },
    { name: "Богдан А", place: 23 },
    { name: "Ксюша Лис", place: 24 },
    { name: "Диана Мур", place: 25 },
    { name: "Егор Вино", place: 26 },
    { name: "Вова Баж", place: 27 },
    { name: "grooveman", place: 28 },
    { name: "Robert Юниксфактёр", place: 29 },
    { name: "Матвей Пригожий", place: 30 },
    { name: "Анна К", place: 31 },
    { name: "Даниил Ершов", place: 32 },
    { name: "Михаил Наб", place: 33 },
    { name: "Надя И", place: 34 },
    { name: "Федор К", place: 35 },
    { name: "Лера Аракчаа", place: 36 },
    { name: "Том", place: 37 },
    { name: "Даша Хромова", place: 38 },
    { name: "Максим Spy", place: 39 },
    { name: "Семён Ануфриев", place: 40 },
    { name: "Иван Баж", place: 41 },
    { name: "Давид Жуков", place: 42 },
    { name: "Таня Т", place: 43 },
    { name: "Вова Гриненко", place: 44 },
    { name: "Надя Котик", place: 45 },
    { name: "Аня Жук", place: 46 },
    { name: "Евгений Ц", place: 47 }
];

// Данные 1 дня
const day1Data = [
    { name: "Вова Баж", entry: 4100, start: 2100, extra: 0, exit: 18990, total: 20990 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 0, exit: 16700, total: 18700 },
    { name: "Саша Коч", entry: 4100, start: 2100, extra: 0, exit: 13105, total: 15105 },
    { name: "Кристина А", entry: 4100, start: 2100, extra: 0, exit: 10110, total: 12110 },
    { name: "Александр Будда", entry: 4100, start: 2100, extra: 0, exit: 8080, total: 10080 },
    { name: "grooveman", entry: 4100, start: 2100, extra: 0, exit: 6990, total: 8990 },
    { name: "Саша Бел", entry: 4100, start: 2100, extra: 2000, exit: 7635, total: 7635 },
    { name: "Ирина Ага", entry: 4100, start: 2100, extra: 0, exit: 3085, total: 5085 },
    { name: "Михаил Наб", entry: 4100, start: 2100, extra: 0, exit: 1895, total: 3895 },
    { name: "Надя И", entry: 4100, start: 2100, extra: 0, exit: 1670, total: 3670 },
    { name: "Егор Вино", entry: 4100, start: 2100, extra: 2000, exit: 1550, total: 1550 },
    { name: "Неопознанный утконос", entry: 4100, start: 2100, extra: 2000, exit: 690, total: 690 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Jane 007", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Шурик Шилкин", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Максим Spy", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "муся", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Семён Ануфриев", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Иван Баж", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Полина Матыцына", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 }
];

// Данные 2 дня
const day2Data = [
    { name: "Jane 007", entry: 4100, start: 2100, extra: 0, exit: 41285, total: 43285 },
    { name: "Robert Юниксфактёр", entry: 4100, start: 2100, extra: 2000, exit: 10875, total: 10875 },
    { name: "Ирина Ага", entry: 4100, start: 2100, extra: 0, exit: 8180, total: 10180 },
    { name: "grooveman", entry: 4100, start: 2100, extra: 0, exit: 7515, total: 9515 },
    { name: "Coach krotovski", entry: 4100, start: 2100, extra: 0, exit: 7190, total: 9190 },
    { name: "муся", entry: 4100, start: 2100, extra: 2000, exit: 7940, total: 7940 },
    { name: "Матвей Пригожий", entry: 4100, start: 2100, extra: 0, exit: 4220, total: 6220 },
    { name: "Шурик Шилкин", entry: 4100, start: 2100, extra: 2000, exit: 5530, total: 5530 },
    { name: "Анна К", entry: 4100, start: 2100, extra: 0, exit: 3355, total: 5355 },
    { name: "Екатерина С", entry: 4100, start: 2100, extra: 0, exit: 2825, total: 4825 },
    { name: "Полина Матыцына", entry: 4100, start: 2100, extra: 0, exit: 1695, total: 3695 },
    { name: "Неопознанный утконос", entry: 4100, start: 2100, extra: 2000, exit: 2625, total: 2625 },
    { name: "Кристина А", entry: 4100, start: 2100, extra: 0, exit: 170, total: 2170 },
    { name: "Том", entry: 4100, start: 2100, extra: 0, exit: 80, total: 2080 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 0, exit: 0, total: 2000 },
    { name: "Егор Вино", entry: 4100, start: 2100, extra: 0, exit: 0, total: 2000 },
    { name: "Даша Хромова", entry: 4100, start: 2100, extra: 2000, exit: 1015, total: 1015 },
    { name: "Александр Будда", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Давид Жуков", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Таня Т", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Михаил Наб", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Роман Лод", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Саша Коч", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Соня Серж", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 }
];

// Данные 3 дня
const day3Data = [
    { name: "Соня Серж", entry: 4100, start: 2100, extra: 0, exit: 27605, total: 29605 },
    { name: "Coach krotovski", entry: 4100, start: 2100, extra: 0, exit: 19520, total: 21520 },
    { name: "Роман Лод", entry: 4100, start: 2100, extra: 0, exit: 14395, total: 16395 },
    { name: "Артём SUB", entry: 4100, start: 2100, extra: 0, exit: 11730, total: 13730 },
    { name: "Саша Бел", entry: 4100, start: 2100, extra: 0, exit: 10770, total: 12770 },
    { name: "Соня Новикова", entry: 4100, start: 2100, extra: 2000, exit: 11695, total: 11695 },
    { name: "Михаил Козадой", entry: 4100, start: 2100, extra: 0, exit: 8090, total: 10090 },
    { name: "муся", entry: 4100, start: 2100, extra: 2000, exit: 10055, total: 10055 },
    { name: "Александр Будда", entry: 4100, start: 2100, extra: 2000, exit: 6300, total: 6300 },
    { name: "Егор АА 11", entry: 4100, start: 2100, extra: 2000, exit: 5745, total: 5745 },
    { name: "Екатерина С", entry: 4100, start: 2100, extra: 0, exit: 3430, total: 5430 },
    { name: "Неопознанный утконос", entry: 4100, start: 2100, extra: 0, exit: 3235, total: 5235 },
    { name: "Лиза Арц", entry: 4100, start: 2100, extra: 0, exit: 2165, total: 4165 },
    { name: "Даниил Ершов", entry: 4100, start: 2100, extra: 0, exit: 1855, total: 3855 },
    { name: "Федор К", entry: 4100, start: 2100, extra: 0, exit: 1425, total: 3425 },
    { name: "Лера Аракчаа", entry: 4100, start: 2100, extra: 2000, exit: 3100, total: 3100 },
    { name: "Полина Матыцына", entry: 4100, start: 2100, extra: 0, exit: 0, total: 2000 },
    { name: "Jane 007", entry: 4100, start: 2100, extra: 2000, exit: 300, total: 300 },
    { name: "Шурик Шилкин", entry: 4100, start: 2100, extra: 2000, exit: 300, total: 300 },
    { name: "Кристина А", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Кирилл Лед", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Вова Гриненко", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Саша Коч", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Матвей Пригожий", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Михаил Наб", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Том", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Надя Котик", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Богдан А", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Аня Жук", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Никита Зейн", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Евгений Ц", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Диана Мур", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Ирина Ага", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 },
    { name: "Егор Вино", entry: 4100, start: 2100, extra: 2000, exit: 0, total: 0 }
];

// Данные для финала (основная таблица)
const finalMainData = [
    { name: "Jane 007", qualifying: 43285, visits: 6000, final: 2000, headhunting: 1890, total: 53175 },
    { name: "Соня Серж", qualifying: 29605, visits: 4000, final: 2000, headhunting: 0, total: 35605 },
    { name: "Артём SUB", qualifying: 18700, visits: 6000, final: 2000, headhunting: 2275, total: 28975 },
    { name: "Coach krotovski", qualifying: 21520, visits: 4000, final: 2000, headhunting: 0, total: 27520 },
    { name: "Вова Баж", qualifying: 20990, visits: 2000, final: 2000, headhunting: 0, total: 24990 },
    { name: "Саша Коч", qualifying: 15105, visits: 6000, final: 2000, headhunting: 900, total: 24005 },
    { name: "Роман Лод", qualifying: 16395, visits: 4000, final: 2000, headhunting: 0, total: 22395 },
    { name: "Кристина А", qualifying: 12110, visits: 6000, final: 2000, headhunting: 1025, total: 21135 },
    { name: "Полина Матыцына", qualifying: 12900, visits: 6000, final: 2000, headhunting: 200, total: 21100 },
    { name: "Михаил Козадой", qualifying: 10090, visits: 6000, final: 2000, headhunting: 1750, total: 19840 },
    { name: "Ирина Ага", qualifying: 10180, visits: 6000, final: 2000, headhunting: 600, total: 18780 },
    { name: "Саша Бел", qualifying: 12770, visits: 4000, final: 2000, headhunting: 0, total: 18770 },
    { name: "муся", qualifying: 10055, visits: 6000, final: 2000, headhunting: 500, total: 18555 },
    { name: "Александр Будда", qualifying: 10080, visits: 6000, final: 2000, headhunting: 400, total: 18480 },
    { name: "Соня Новикова", qualifying: 11695, visits: 2000, final: 2000, headhunting: 0, total: 15695 },
    { name: "grooveman", qualifying: 9515, visits: 4000, final: 2000, headhunting: 0, total: 15515 },
    { name: "Robert Юниксфактёр", qualifying: 10875, visits: 2000, final: 2000, headhunting: 0, total: 14875 },
    { name: "Неопознанный утконос", qualifying: 5235, visits: 6000, final: 2000, headhunting: 640, total: 13875 },
    { name: "Шурик Шилкин", qualifying: 5530, visits: 6000, final: 2000, headhunting: 250, total: 13780 },
    { name: "Матвей Пригожий", qualifying: 6220, visits: 4000, final: 2000, headhunting: 0, total: 12220 },
    { name: "Екатерина С", qualifying: 5430, visits: 4000, final: 2000, headhunting: 0, total: 11430 },
    { name: "Егор АА 11", qualifying: 5745, visits: 2000, final: 2000, headhunting: 0, total: 9745 },
    { name: "Анна К", qualifying: 5355, visits: 2000, final: 2000, headhunting: 0, total: 9355 },
    { name: "Лиза Арц", qualifying: 4165, visits: 2000, final: 2000, headhunting: 0, total: 8165 },
    { name: "Даниил Ершов", qualifying: 3855, visits: 2000, final: 2000, headhunting: 0, total: 7855 }
];

// Данные для финала (день 1)
const finalDay1Data = [
    { name: "Вова Баж", total: 20990 },
    { name: "Артём SUB", total: 18700 },
    { name: "Саша Коч", total: 15105 },
    { name: "Кристина А", total: 12110 },
    { name: "Александр Будда", total: 10080 },
    { name: "grooveman", total: 9515 },
    { name: "Саша Бел", total: 12770 },
    { name: "Ирина Ага", total: 10180 }
];

// Данные для финала (день 2)
const finalDay2Data = [
    { name: "Jane 007", total: 43285 },
    { name: "Robert Юниксфактёр", total: 10875 },
    { name: "Coach krotovski", total: 21520 },
    { name: "муся", total: 10055 },
    { name: "Матвей Пригожий", total: 6220 },
    { name: "Шурик Шилкин", total: 5530 },
    { name: "Анна К", total: 5355 },
    { name: "Екатерина С", total: 5430 }
];

// Данные для финала (день 3)
const finalDay3Data = [
    { name: "Соня Серж", total: 29605 },
    { name: "Роман Лод", total: 16395 },
    { name: "Соня Новикова", total: 11695 },
    { name: "Михаил Козадой", total: 10090 },
    { name: "Егор АА 11", total: 5745 },
    { name: "Неопознанный утконос", total: 5235 },
    { name: "Лиза Арц", total: 4165 },
    { name: "Даниил Ершов", total: 3855 }
];

// 25-ый финалист
const finalDay3Extra = [
    { name: "Полина Матыцына", total: 12900 }
];

// Рейтинг до финала
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1410, attendance: 43 },
    { name: "Jane 007", rating: 1235, attendance: 37 },
    { name: "Никита Зейн", rating: 1210, attendance: 29 },
    { name: "Семён Ануфриев", rating: 1201, attendance: 35 },
    { name: "Егор АА 11", rating: 1160, attendance: 35 },
    { name: "Роман Лод", rating: 1125, attendance: 32 },
    { name: "Михаил Наб", rating: 1057, attendance: 27 },
    { name: "Шурик Шилкин", rating: 1035, attendance: 43 },
    { name: "Саша Коч", rating: 1004, attendance: 31 },
    { name: "Полина Матыцына", rating: 1001, attendance: 35 },
    { name: "Михаил Козадой", rating: 938, attendance: 30 },
    { name: "Coach krotovski", rating: 896, attendance: 18 },
    { name: "Егор Вино", rating: 841, attendance: 28 },
    { name: "grooveman", rating: 830, attendance: 17 },
    { name: "Ирина Ага", rating: 821, attendance: 18 },
    { name: "Артём SUB", rating: 789, attendance: 19 },
    { name: "Кристина А", rating: 786, attendance: 25 },
    { name: "Соня Серж", rating: 786, attendance: 32 },
    { name: "Макар Аве", rating: 744, attendance: 26 },
    { name: "Robert Юниксфактёр", rating: 731, attendance: 15 },
    { name: "Максим Spy", rating: 729, attendance: 32 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Даша Хромова", rating: 691, attendance: 25 },
    { name: "Немощь", rating: 681, attendance: 18 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Лиза Арц", rating: 636, attendance: 10 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Стас ISK", rating: 556, attendance: 18 },
    { name: "муся", rating: 554, attendance: 12 },
    { name: "Матвей Пригожий", rating: 538, attendance: 16 },
    { name: "Неопознанный утконос", rating: 538, attendance: 10 },
    { name: "Надя Жб", rating: 521, attendance: 14 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Вова Баж", rating: 457, attendance: 8 },
    { name: "Леонид П", rating: 450, attendance: 8 },
    { name: "Вова Гриненко", rating: 436, attendance: 9 },
    { name: "Саша Бел", rating: 413, attendance: 8 },
    { name: "Том", rating: 410, attendance: 21 },
    { name: "Кирилл Лед", rating: 407, attendance: 8 },
    { name: "Даниил Ершов", rating: 395, attendance: 10 },
    { name: "Андрей Фломастер", rating: 373, attendance: 13 },
    { name: "Евгений Ц", rating: 366, attendance: 10 },
    { name: "Петя Федоров", rating: 353, attendance: 5 },
    { name: "Свидетель", rating: 353, attendance: 9 },
    { name: "Ксюша Лис", rating: 350, attendance: 7 },
    { name: "Серж", rating: 339, attendance: 7 },
    { name: "Максим Б", rating: 338, attendance: 5 },
    { name: "Александр Будда", rating: 326, attendance: 10 },
    { name: "Федор К", rating: 326, attendance: 9 },
    { name: "Инна М", rating: 306, attendance: 12 },
    { name: "Иван Антипов", rating: 267, attendance: 5 },
    { name: "Искандер", rating: 255, attendance: 5 },
    { name: "Пётр С", rating: 254, attendance: 3 },
    { name: "Саша Тяжелов", rating: 251, attendance: 4 },
    { name: "Всеволод Кузнецов", rating: 247, attendance: 5 },
    { name: "Любовь Т", rating: 222, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 },
    { name: "Анна К", rating: 207, attendance: 6 },
    { name: "Николай Ж", rating: 207, attendance: 6 },
    { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Роман Егоров", rating: 179, attendance: 5 },
    { name: "Никита Yellow", rating: 175, attendance: 3 },
    { name: "Иван Баж", rating: 174, attendance: 5 },
    { name: "Аня Жук", rating: 167, attendance: 5 },
    { name: "Мария Павлова", rating: 165, attendance: 3 },
    { name: "Алёна Ф", rating: 155, attendance: 2 },
    { name: "Андрей Морфиус", rating: 139, attendance: 5 },
    { name: "Зеньята", rating: 135, attendance: 5 },
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Аня Бью", rating: 98, attendance: 2 },
    { name: "Рафаэль", rating: 95, attendance: 1 },
    { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Надя Котик", rating: 93, attendance: 4 },
    { name: "Вадим Константинов", rating: 93, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 },
    { name: "Паша Веля", rating: 93, attendance: 1 },
    { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Андрей Пот", rating: 89, attendance: 3 },
    { name: "Надя И", rating: 88, attendance: 2 },
    { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Вадим Зеленин", rating: 86, attendance: 3 },
    { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Миша Нестер", rating: 83, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 },
    { name: "Екатерина С", rating: 80, attendance: 2 },
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
    { name: "Соня Новикова", rating: 56, attendance: 1 },
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
    { name: "Аня Гам", rating: 31, attendance: 1 },
    { name: "Лика Ясева", rating: 31, attendance: 1 },
    { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 },
    { name: "Даниил С", rating: 30, attendance: 1 },
    { name: "Игорь Гусь", rating: 30, attendance: 1 },
    { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 },
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
    { name: "Лиза О", rating: 27, attendance: 1 },
    { name: "Наташа Алекс", rating: 27, attendance: 1 },
    { name: "Таня Т", rating: 27, attendance: 1 },
    { name: "Анастасия Ильина", rating: 26, attendance: 1 },
    { name: "Иван О", rating: 26, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 },
    { name: "Никита Башкин", rating: 25, attendance: 1 },
    { name: "Диана Мур", rating: 24, attendance: 1 },
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

// Добавки после финала
const ratingAdditionsAfterFinal = [
    { name: "Coach krotovski", addition: 32 },
    { name: "Jane 007", addition: 9 },
    { name: "Александр Будда", addition: 70 },
    { name: "Артём SUB", addition: 126 },
    { name: "Богдан А", addition: 0 },
    { name: "Диана Мур", addition: 54 },
    { name: "Егор АА 11", addition: 42 },
    { name: "Егор Вино", addition: 12 },
    { name: "Екатерина С", addition: 59 },
    { name: "Ирина Ага", addition: 239 },
    { name: "Кирилл Лед", addition: 58 },
    { name: "Кристина А", addition: 31 },
    { name: "Ксюша Лис", addition: 55 },
    { name: "Лиза Арц", addition: 90 },
    { name: "Макар Аве", addition: 22 },
    { name: "Михаил Козадой", addition: 63 },
    { name: "муся", addition: 83 },
    { name: "Неопознанный утконос", addition: 60 },
    { name: "Никита Зейн", addition: 12 },
    { name: "Полина Матыцына", addition: 145 },
    { name: "Роман Лод", addition: 24 },
    { name: "Саша Бел", addition: 95 },
    { name: "Саша Коч", addition: 15 },
    { name: "Соня Новикова", addition: 81 },
    { name: "Соня Серж", addition: 85 },
    { name: "Шурик Шилкин", addition: 82 }
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

// Результаты Турнир Джимми Саммерфилда 3-6
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
        else if (item.place >= 4 && item.place <= 27) rowClass = 'final-finalist';
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
        let rowClass = '';
        if (realPosition >= 1 && realPosition <= 8) {
            rowClass = 'day1-top8';
        }
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);
        row.insertCell(6).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#day1TableElement thead');
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
        let rowClass = '';
        if ([1, 2, 5, 6, 7, 8, 9, 10].includes(realPosition)) {
            rowClass = 'day2-top8';
        }
        if ([3, 4].includes(realPosition)) {
            rowClass = 'day2-gold';
        }
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);
        row.insertCell(6).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#day2TableElement thead');
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
    
    const totalSum = day2Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day2Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// День 3
function fillDay3Table() {
    const tbody = document.getElementById('day3Table');
    if (!tbody) return;
    
    const sortedDay3Data = [...day3Data].sort((a, b) => b.total - a.total);
    
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
        let rowClass = '';
        if ([2, 5, 8, 11].includes(realPosition)) {
            rowClass = 'day3-yellow';
        }
        else if ([4, 9].includes(realPosition)) {
            rowClass = 'day3-gray';
        }
        else if ([1, 3, 6, 7, 10, 12, 13, 14].includes(realPosition)) {
            rowClass = 'day3-green';
        }
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = realPosition;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = formatNumber(item.entry);
        row.insertCell(3).innerHTML = formatNumber(item.start);
        row.insertCell(4).innerHTML = formatNumber(item.extra);
        row.insertCell(5).innerHTML = formatNumber(item.exit);
        row.insertCell(6).innerHTML = formatNumber(item.total);
        
        if (hideExtraColumns) {
            for (let i = 2; i <= 5; i++) {
                if (row.cells[i]) row.cells[i].style.display = 'none';
            }
        }
    });
    
    const thead = document.querySelector('#day3TableElement thead');
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
    
    const totalSum = day3Data.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / day3Data.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Финал
function fillFinalTable() {
    // Основная таблица
    const tbodyMain = document.getElementById('finalMainBody');
    if (tbodyMain) {
        const sortedMain = [...finalMainData].sort((a, b) => b.total - a.total);
        const mobile = isMobile();
        const table = document.getElementById('finalMainTable');
        const isExpanded = table ? table.classList.contains('expanded') : false;
        const hideExtraColumns = mobile && !isExpanded;
        
        tbodyMain.innerHTML = '';
        sortedMain.forEach((item, idx) => {
            const row = tbodyMain.insertRow();
            row.insertCell(0).innerHTML = idx + 1;
            row.insertCell(1).innerHTML = item.name;
            row.insertCell(2).innerHTML = formatNumber(item.qualifying);
            row.insertCell(3).innerHTML = formatNumber(item.visits);
            row.insertCell(4).innerHTML = formatNumber(item.final);
            row.insertCell(5).innerHTML = formatNumber(item.headhunting);
            row.insertCell(6).innerHTML = formatNumber(item.total);
            
            if (hideExtraColumns) {
                for (let i = 2; i <= 5; i++) {
                    if (row.cells[i]) row.cells[i].style.display = 'none';
                }
            }
        });
        
        const thead = document.querySelector('#finalMainTable thead');
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
    }
    
    // День 1
    const tbody1 = document.getElementById('finalDay1Body');
    if (tbody1) {
        const sortedDay1 = [...finalDay1Data].sort((a, b) => b.total - a.total);
        tbody1.innerHTML = '';
        sortedDay1.forEach((item, idx) => {
            let rowClass = '';
            if (item.name === "Саша Бел") {
                rowClass = 'final-yellow';
            }
            const row = tbody1.insertRow();
            row.className = rowClass;
            row.insertCell(0).innerHTML = idx + 1;
            row.insertCell(1).innerHTML = item.name;
            row.insertCell(2).innerHTML = formatNumber(item.total);
        });
    }
    
    // День 2
    const tbody2 = document.getElementById('finalDay2Body');
    if (tbody2) {
        const sortedDay2 = [...finalDay2Data].sort((a, b) => b.total - a.total);
        tbody2.innerHTML = '';
        sortedDay2.forEach((item, idx) => {
            let rowClass = '';
            if (["Coach krotovski", "муся", "Екатерина С"].includes(item.name)) {
                rowClass = 'final-yellow';
            }
            const row = tbody2.insertRow();
            row.className = rowClass;
            row.insertCell(0).innerHTML = idx + 1;
            row.insertCell(1).innerHTML = item.name;
            row.insertCell(2).innerHTML = formatNumber(item.total);
        });
    }
    
    // День 3
    const tbody3 = document.getElementById('finalDay3Body');
    if (tbody3) {
        const sortedDay3 = [...finalDay3Data].sort((a, b) => b.total - a.total);
        tbody3.innerHTML = '';
        sortedDay3.forEach((item, idx) => {
            const row = tbody3.insertRow();
            row.insertCell(0).innerHTML = idx + 1;
            row.insertCell(1).innerHTML = item.name;
            row.insertCell(2).innerHTML = formatNumber(item.total);
        });
    }
    
    // 25-ый финалист
    const tbodyExtra = document.getElementById('finalDay3Extra');
    if (tbodyExtra) {
        tbodyExtra.innerHTML = '';
        finalDay3Extra.forEach((item, idx) => {
            const row = tbodyExtra.insertRow();
            row.insertCell(0).innerHTML = 25;
            row.insertCell(1).innerHTML = item.name;
            row.insertCell(2).innerHTML = formatNumber(item.total);
        });
    }
    
    // Средний стек по основной таблице (итог)
    const totalSum = finalMainData.reduce((sum, p) => sum + p.total, 0);
    const avgStack = Math.round(totalSum / finalMainData.length);
    document.getElementById('averageStack').textContent = formatNumber(avgStack);
}

// Результаты турнира (финальные места SIX SEVEN 6-7)
function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    
    const filteredData = currentSearchTerm === '' 
        ? tournamentResultsData 
        : tournamentResultsData.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    
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
        let status = '';
        let rowClass = '';
        
        if (item.place === 1) {
            status = "Победитель 🥇";
            rowClass = 'final-gold';
        } else if (item.place === 2) {
            status = "Серебряный призер 🥈";
            rowClass = 'final-silver';
        } else if (item.place === 3) {
            status = "Бронзовый призер 🥉";
            rowClass = 'final-bronze';
        } else if (item.place >= 4 && item.place <= 26) {
            status = "Участник финала";
            rowClass = 'final-finalist';
        } else {
            status = "Участник турнира";
            rowClass = 'final-participant';
        }
        
        const isSearchMatch = currentSearchTerm !== '' && item.name.toLowerCase().includes(currentSearchTerm);
        if (isSearchMatch) rowClass += ' search-highlight';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        
        row.insertCell(0).innerHTML = item.place;
        row.insertCell(1).innerHTML = item.name;
        row.insertCell(2).innerHTML = item.place;
        row.insertCell(3).innerHTML = status;
    });
    
    document.getElementById('totalPlayers').textContent = filteredData.length;
}

// ========== ПОИСК ==========

function performSearch() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (activeTab.id === 'previousResults') fillPreviousResultsTable();
    else if (activeTab.id === 'rating') fillRatingTable();
    else if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'day3') fillDay3Table();
    else if (activeTab.id === 'final') fillFinalTable();
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
        ...finalMainData.map(p => p.name),
        ...tournamentResultsData.map(p => p.name)
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
        'previousResults': 'Результаты Турнир Джимми Саммерфилда 3-6',
        'day1': '1 день - 06.08.2026',
        'day2': '2 день - 13.08.2026',
        'day3': '3 день - 20.08.2026',
        'final': 'Финал - 22.08.2026',
        'tournamentResults': 'Результаты турнира'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Турнир';
    
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    
    resetTableExpand();
    
    if (tabName === 'previousResults') fillPreviousResultsTable();
    else if (tabName === 'rating') fillRatingTable();
    else if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
    else if (tabName === 'day3') fillDay3Table();
    else if (tabName === 'final') fillFinalTable();
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
    
    if (activeTab.id === 'day1') fillDay1Table();
    else if (activeTab.id === 'day2') fillDay2Table();
    else if (activeTab.id === 'day3') fillDay3Table();
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
    showTab('tournamentResults');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
    
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && (activeTab.id === 'day1' || activeTab.id === 'day2' || activeTab.id === 'day3' || activeTab.id === 'final' || activeTab.id === 'rating' || activeTab.id === 'tournamentResults')) {
            if (activeTab.id === 'day1') fillDay1Table();
            else if (activeTab.id === 'day2') fillDay2Table();
            else if (activeTab.id === 'day3') fillDay3Table();
            else if (activeTab.id === 'final') fillFinalTable();
            else if (activeTab.id === 'rating') fillRatingTable();
            else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        }
    });
});
