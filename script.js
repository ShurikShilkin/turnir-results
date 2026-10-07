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
    { name: "Михаил Козадой", value: 600 },
    { name: "Артём SUB", value: 600 },
    { name: "Coach krotovski", value: 600 },
    { name: "Саша Коч", value: 600 },
    { name: "Немощь", value: 600 },
    { name: "Макар Аве", value: 400 },
    { name: "Соня Серж", value: 400 },
    { name: "Егор Вино", value: 400 },
    { name: "Кристина А", value: 400 },
    { name: "grooveman", value: 400 }
];

// ========== РЕЙТИНГ ==========
const ratingBeforeFinal = [
    { name: "Богдан А", rating: 1573, attendance: 51 },
    { name: "Семён Ануфриев", rating: 1351, attendance: 41 },
    { name: "Егор АА 11", rating: 1277, attendance: 43 },
    { name: "Jane 007", rating: 1264, attendance: 41 },
    { name: "Никита Зейн", rating: 1250, attendance: 35 },
    { name: "Михаил Наб", rating: 1245, attendance: 31 },
    { name: "Шурик Шилкин", rating: 1213, attendance: 51 },
    { name: "Роман Лод", rating: 1213, attendance: 36 },
    { name: "Полина Матыцына", rating: 1209, attendance: 41 },
    { name: "Ирина Ага", rating: 1178, attendance: 26 },
    { name: "Михаил Козадой", rating: 1119, attendance: 36 },
    { name: "Артём SUB", rating: 1094, attendance: 27 },
    { name: "Саша Коч", rating: 1063, attendance: 35 },
    { name: "Coach krotovski", rating: 1012, attendance: 22 },
    { name: "Немощь", rating: 988, attendance: 23 },
    { name: "Егор Вино", rating: 927, attendance: 34 },
    { name: "Соня Серж", rating: 888, attendance: 37 },
    { name: "Кристина А", rating: 869, attendance: 28 },
    { name: "Макар Аве", rating: 867, attendance: 34 },
    { name: "grooveman", rating: 830, attendance: 17 },
    { name: "муся", rating: 823, attendance: 18 },
    { name: "Лиза Арц", rating: 792, attendance: 14 },
    { name: "Robert Юниксфактёр", rating: 736, attendance: 16 },
    { name: "Максим Spy", rating: 729, attendance: 32 },
    { name: "Даша Хромова", rating: 727, attendance: 29 },
    { name: "Влад Владшток", rating: 714, attendance: 32 },
    { name: "Неопознанный утконос", rating: 672, attendance: 16 },
    { name: "Саша Тяжелов", rating: 668, attendance: 8 },
    { name: "Сергей Ман", rating: 651, attendance: 13 },
    { name: "Дмитрий Ник", rating: 607, attendance: 16 },
    { name: "Саша Бел", rating: 583, attendance: 10 },
    { name: "Стас ISK", rating: 556, attendance: 18 },
    { name: "Кирилл Лед", rating: 553, attendance: 12 },
    { name: "Матвей Пригожий", rating: 544, attendance: 18 },
    { name: "Надя Жб", rating: 529, attendance: 15 },
    { name: "Евгений Ц", rating: 506, attendance: 13 },
    { name: "Серж", rating: 503, attendance: 10 },
    { name: "Том", rating: 501, attendance: 22 },
    { name: "Вова Гриненко", rating: 493, attendance: 11 },
    { name: "Свидетель", rating: 484, attendance: 11 },
    { name: "Настя К", rating: 464, attendance: 11 },
    { name: "Аня Жук", rating: 462, attendance: 11 },
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
    { name: "Надя Котик", rating: 267, attendance: 8 },
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
    { name: "Владимир Бул", rating: 119, attendance: 5 },
    { name: "Ксения Куд", rating: 118, attendance: 5 },
    { name: "Нарек Сель", rating: 118, attendance: 1 },
    { name: "Иван Тре", rating: 117, attendance: 3 },
    { name: "Иван 112", rating: 115, attendance: 3 },
    { name: "Christ", rating: 104, attendance: 3 },
    { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Даша Гри", rating: 99, attendance: 4 },
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
    { name: "Давид Жуков", rating: 76, attendance: 2 },
    { name: "Иван Сидоров", rating: 76, attendance: 1 },
    { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Илья Midas", rating: 75, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 },
    { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Наташа С", rating: 66, attendance: 2 },
    { name: "Илья Ерёмин", rating: 65, attendance: 1 },
    { name: "Настя Кудрявая", rating: 64, attendance: 2 },
    { name: "Даниил Ш", rating: 64, attendance: 1 },
    { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Катя М", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 },
    { name: "Артём Акулов", rating: 61, attendance: 2 },
    { name: "Роман Г", rating: 61, attendance: 1 },
    { name: "Леша Ч", rating: 60, attendance: 1 },
    { name: "Николай Шар", rating: 60, attendance: 1 },
    { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Влад Пив", rating: 59, attendance: 1 },
    { name: "Михаил Крю", rating: 58, attendance: 1 },
    { name: "Арзу", rating: 57, attendance: 2 },
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
    { name: "Мьянма", rating: 32, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 },
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

// Добавки после финала
const ratingAdditionsAfterFinal = [
    { name: "Coach krotovski", addition: 67 },
    { name: "Аня Жук", addition: 109 },
    { name: "Арзу", addition: 68 },
    { name: "Богдан А", addition: 88 },
    { name: "Даша Хромова", addition: 39 },
    { name: "Денис Дон", addition: 70 },
    { name: "Евгений Ц", addition: 53 },
    { name: "Егор АА 11", addition: 11 },
    { name: "Ирина Ага", addition: 27 },
    { name: "Макар Аве", addition: 70 },
    { name: "Матвей Пригожий", addition: 38 },
    { name: "Надя Котик", addition: 204 },
    { name: "Настя Кудрявая", addition: 62 },
    { name: "Немощь", addition: 49 },
    { name: "Неопознанный утконос", addition: 56 },
    { name: "Никита П", addition: 77 },
    { name: "Полина Матыцына", addition: 90 },
    { name: "Роман Лод", addition: 31 },
    { name: "Саша Назарова", addition: 63 },
    { name: "Семён Ануфриев", addition: 215 },
    { name: "Соня Серж", addition: 42 },
    { name: "Шурик Шилкин", addition: 42 }
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
        if (p.change > 0) {
            changeSign = `+${p.change}`;
        } else if (p.change === 0 && p.playedInFinal === true) {
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
    else if (activeTab.id === 'day1' || activeTab.id === 'day2' || activeTab.id === 'day3' || activeTab.id === 'day4' || activeTab.id === 'results') fillEmptyTab();
}

function setupAutocomplete() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocompleteResults');
    
    const ratingData = getRatingData();
    const allPlayers = [...new Set([
        ...previousTournamentResults.map(p => p.name),
        ...ratingData.map(p => p.name),
        ...huntingData.map(p => p.name)
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
}

function resetTableExpand() {
    document.querySelectorAll('.tournament-table').forEach(t => t.classList.remove('expanded'));
    const button = document.querySelector('.expand-button');
    if (button) button.textContent = 'Развернуть таблицу';
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete();
    showTab('rating');
    
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        currentSearchTerm = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        performSearch();
    });
    
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && activeTab.id === 'rating') {
            fillRatingTable();
        }
    });
});
