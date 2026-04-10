// ========== ДАННЫЕ ПРОШЛОГО ТУРНИРА ==========
const previousTournamentResults = [
    { name: "grooveman", place: 1, status: "Победитель" },
    { name: "Богдан А", place: 2, status: "Участник" },
    { name: "Саша Тяжелов", place: 3, status: "Участник" },
    { name: "Даша Yellow", place: 4, status: "Участник" },
    { name: "Семён Ануфриев", place: 5, status: "Участник" },
    { name: "Леонид П", place: 6, status: "Участник" },
    { name: "Егор Вино", place: 7, status: "Участник" },
    { name: "Лера Еж", place: 8, status: "Участник" },
    { name: "Лиза Арц", place: 9, status: "Участник" },
    { name: "Jane 007", place: 10, status: "Участник" },
    { name: "Егор АА 11", place: 11, status: "Участник" },
    { name: "Robert Юниксфактёр", place: 12, status: "Участник" },
    { name: "Ксюша Лис", place: 13, status: "Участник" },
    { name: "Никита Зейн", place: 14, status: "Участник" },
    { name: "Влад Владшток", place: 15, status: "Участник" },
    { name: "Саша Бел", place: 16, status: "Участник" },
    { name: "Максим Б", place: 17, status: "Участник" },
    { name: "Соня Серж", place: 18, status: "Участник" },
    { name: "Полина Матыцына", place: 19, status: "Участник" },
    { name: "Влад Сам", place: 20, status: "Участник" },
    { name: "Саша Коч", place: 21, status: "Участник" },
    { name: "Шурик Шилкин", place: 22, status: "Участник" },
    { name: "Роман Лод", place: 23, status: "Участник" },
    { name: "Никита Yellow", place: 24, status: "Участник" },
    { name: "Андрей Фломастер", place: 25, status: "Участник" },
    { name: "Макар Аве", place: 26, status: "Участник" }
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

// ========== ЦЕНА ЗА ГОЛОВУ (для итогов) ==========
const bountyPrice = {
    "Шурик Шилкин": 3600, "Андрей Мазепа": 3435, "Саша Коч": 3200, "Михаил Наб": 3050,
    "Семён Ануфриев": 2700, "grooveman": 1950, "Jane 007": 1800, "Том": 1650,
    "Михаил Козадой": 1550, "Роман Лод": 1500, "Иван Грозный": 1225, "Леонид П": 1200,
    "Полина Матыцына": 975, "Дмитрий Ник": 925, "Алексей Ершов": 900, "Вадим Зеленин": 800,
    "Надя Жб": 800, "Инна М": 800, "Федор К": 800, "Юка": 800, "Евгений Ц": 800,
    "Максим Б": 800, "Стас ISK": 800, "Макар Аве": 600, "Богдан А": 400, "Егор Вино": 400,
    "Андрей Фломастер": 400, "Егор АА 11": 350, "Влад Владшток": 350, "Владимир Бул": 335,
    "Максим Spy": 300, "Соня Серж": 250, "Стас Мазепа": 200, "Инна Шашкина": 200,
    "Кристина А": 200, "Немощь": 200, "Ирина Ага": 200, "Анна К": 200, "Никита Зейн": 125
};

// ========== ИТОГИ ==========
let tournamentResults = [];

function initTournamentResults() {
    const resultsMap = new Map();
    
    day1Players.forEach(p => {
        resultsMap.set(p.name, {
            name: p.name,
            day1: p.result,
            day2: null,
            day3: null,
            day4: null,
            total: p.result,
            bounty: bountyPrice[p.name] || 0
        });
    });
    
    day2Players.forEach(p => {
        if (resultsMap.has(p.name)) {
            const existing = resultsMap.get(p.name);
            existing.day2 = p.result;
            existing.total = (existing.day1 || 0) + p.result;
            existing.bounty = bountyPrice[p.name] || existing.bounty || 0;
        } else {
            resultsMap.set(p.name, {
                name: p.name,
                day1: null,
                day2: p.result,
                day3: null,
                day4: null,
                total: p.result,
                bounty: bountyPrice[p.name] || 0
            });
        }
    });
    
    tournamentResults = Array.from(resultsMap.values()).sort((a, b) => b.total - a.total);
}

// ========== ДЛЯ СТРЕЛОК В ИТОГАХ ==========
function getPositionChangesForResults() {
    const day1Sorted = [...tournamentResults.filter(p => p.day1 !== null)].sort((a, b) => b.day1 - a.day1);
    const currentSorted = [...tournamentResults].sort((a, b) => b.total - a.total);
    const changes = new Map();
    const day1Names = new Set(day1Sorted.map(p => p.name));
    
    currentSorted.forEach((player, newIdx) => {
        if (!day1Names.has(player.name)) {
            changes.set(player.name, { change: 0, type: 'new' });
        } else {
            const oldIdx = day1Sorted.findIndex(p => p.name === player.name);
            const diff = oldIdx - newIdx;
            if (diff > 0) changes.set(player.name, { change: diff, type: 'up' });
            else if (diff < 0) changes.set(player.name, { change: Math.abs(diff), type: 'down' });
            else changes.set(player.name, { change: 0, type: 'same' });
        }
    });
    return changes;
}

// ========== РЕЙТИНГ (предыдущий) ==========
const ratingBeforeDay2 = [
    { name: "Семён Ануфриев", rating: 832, attendance: 19 }, { name: "Богдан А", rating: 822, attendance: 19 },
    { name: "Михаил Наб", rating: 788, attendance: 11 }, { name: "grooveman", rating: 746, attendance: 12 },
    { name: "Шурик Шилкин", rating: 683, attendance: 19 }, { name: "Robert Юниксфактёр", rating: 644, attendance: 12 },
    { name: "Влад Владшток", rating: 577, attendance: 18 }, { name: "Jane 007", rating: 567, attendance: 17 },
    { name: "Сергей Ман", rating: 556, attendance: 10 }, { name: "Максим Spy", rating: 546, attendance: 16 },
    { name: "Егор АА 11", rating: 541, attendance: 17 }, { name: "Саша Коч", rating: 525, attendance: 11 },
    { name: "Полина Матыцына", rating: 518, attendance: 14 }, { name: "Макар Аве", rating: 482, attendance: 13 },
    { name: "Михаил Козадой", rating: 481, attendance: 12 }, { name: "Никита Зейн", rating: 471, attendance: 11 },
    { name: "Роман Лод", rating: 451, attendance: 14 }, { name: "Соня Серж", rating: 372, attendance: 13 },
    { name: "Настя К", rating: 367, attendance: 8 }, { name: "Надя Жб", rating: 361, attendance: 8 },
    { name: "Влад Сам", rating: 342, attendance: 5 }, { name: "Немощь", rating: 338, attendance: 6 },
    { name: "Свидетель", rating: 305, attendance: 7 }, { name: "Кристина А", rating: 297, attendance: 7 },
    { name: "Дмитрий Ник", rating: 290, attendance: 7 }, { name: "Ирина Ага", rating: 288, attendance: 4 },
    { name: "Иван Антипов", rating: 267, attendance: 5 }, { name: "Том", rating: 264, attendance: 10 },
    { name: "Матвей МС", rating: 250, attendance: 5 }, { name: "Леонид П", rating: 225, attendance: 4 },
    { name: "Лев Р", rating: 219, attendance: 4 }, { name: "Серж", rating: 213, attendance: 5 },
    { name: "Егор Вино", rating: 207, attendance: 5 }, { name: "Даша Yellow", rating: 206, attendance: 3 },
    { name: "Даша Хромова", rating: 192, attendance: 6 }, { name: "Инна М", rating: 180, attendance: 8 },
    { name: "Роман Егоров", rating: 179, attendance: 5 }, { name: "Федор К", rating: 149, attendance: 4 },
    { name: "Николай Ж", rating: 147, attendance: 4 }, { name: "Саша Тяжелов", rating: 125, attendance: 1 },
    { name: "Ксения Куд", rating: 118, attendance: 5 }, { name: "Никита Yellow", rating: 115, attendance: 2 },
    { name: "Саша Бел", rating: 115, attendance: 3 }, { name: "Лиза Арц", rating: 114, attendance: 2 },
    { name: "Анна К", rating: 108, attendance: 3 }, { name: "Евгений Ц", rating: 107, attendance: 3 },
    { name: "Даниил Ершов", rating: 105, attendance: 3 }, { name: "Даня Д", rating: 101, attendance: 3 },
    { name: "Зеньята", rating: 101, attendance: 4 }, { name: "Андрей Морфиус", rating: 98, attendance: 3 },
    { name: "Владимир Бул", rating: 97, attendance: 4 }, { name: "Владибир", rating: 94, attendance: 2 },
    { name: "Наташа Бонд", rating: 93, attendance: 3 }, { name: "Андрей Мазепа", rating: 92, attendance: 1 },
    { name: "Искандер", rating: 87, attendance: 3 }, { name: "Оксана Б", rating: 87, attendance: 2 },
    { name: "Андрей Фломастер", rating: 85, attendance: 3 }, { name: "Нюта-кун", rating: 84, attendance: 2 },
    { name: "Рома АСМР", rating: 81, attendance: 2 }, { name: "Михаил Т", rating: 79, attendance: 2 },
    { name: "Иван 112", rating: 78, attendance: 2 }, { name: "Лера Еж", rating: 76, attendance: 1 },
    { name: "Миша Скиф", rating: 70, attendance: 2 }, { name: "Разаман Рах", rating: 70, attendance: 1 },
    { name: "Иван Баж", rating: 64, attendance: 3 }, { name: "Артемий Мен", rating: 63, attendance: 2 },
    { name: "Инна Шашкина", rating: 62, attendance: 3 }, { name: "Вадим Зеленин", rating: 61, attendance: 2 },
    { name: "Вова Баж", rating: 60, attendance: 2 }, { name: "Даша Гри", rating: 60, attendance: 3 },
    { name: "Ксюша Лис", rating: 60, attendance: 1 }, { name: "Катя Берг", rating: 59, attendance: 2 },
    { name: "Макс Пиво", rating: 57, attendance: 1 }, { name: "Эльджан", rating: 53, attendance: 2 },
    { name: "Максим Б", rating: 52, attendance: 1 }, { name: "Петя Федоров", rating: 50, attendance: 1 },
    { name: "Мойша", rating: 49, attendance: 1 }, { name: "Андрей Пот", rating: 48, attendance: 1 },
    { name: "Соня Кур", rating: 46, attendance: 2 }, { name: "Алина Исм", rating: 45, attendance: 2 },
    { name: "Саша Токарев", rating: 44, attendance: 1 }, { name: "Артём 007", rating: 40, attendance: 1 },
    { name: "Вика Ц", rating: 35, attendance: 1 }, { name: "Ярослав Кол", rating: 34, attendance: 1 },
    { name: "Вова Ф", rating: 32, attendance: 1 }, { name: "Юсиф Халафов", rating: 32, attendance: 1 },
    { name: "Аня Гам", rating: 31, attendance: 1 }, { name: "Никита Сизов", rating: 31, attendance: 1 },
    { name: "Гавриил Морозов", rating: 30, attendance: 1 }, { name: "Наташа Т", rating: 30, attendance: 1 },
    { name: "Родион Шашурин", rating: 30, attendance: 1 }, { name: "Антон Жму", rating: 29, attendance: 1 },
    { name: "Дима Жур", rating: 29, attendance: 1 }, { name: "Алексей Ершов", rating: 28, attendance: 1 },
    { name: "Родион К", rating: 26, attendance: 1 }, { name: "Иван Тре", rating: 25, attendance: 1 },
    { name: "Вика Ч", rating: 23, attendance: 1 }, { name: "Всеволод Кузнецов", rating: 23, attendance: 1 },
    { name: "Денис Чир", rating: 23, attendance: 1 }, { name: "Илья Без", rating: 23, attendance: 1 },
    { name: "Мага Кинжал", rating: 23, attendance: 1 }, { name: "Эмиль", rating: 23, attendance: 1 },
    { name: "Дарья Шев", rating: 22, attendance: 1 }, { name: "Женя К1", rating: 22, attendance: 1 },
    { name: "Ольга Б", rating: 22, attendance: 1 }, { name: "Славяна", rating: 22, attendance: 1 },
    { name: "Жахонгир", rating: 21, attendance: 1 }, { name: "Руфат Макиато", rating: 21, attendance: 1 },
    { name: "Айдын", rating: 20, attendance: 1 }, { name: "Влад Голубев", rating: 20, attendance: 1 },
    { name: "Михаил Таб", rating: 20, attendance: 1 }, { name: "Стас Мазепа", rating: 20, attendance: 1 },
    { name: "Александр Исаев", rating: 17, attendance: 1 }, { name: "Даня КДД", rating: 15, attendance: 1 },
    { name: "Вова Гриненко", rating: 14, attendance: 1 }
];

// ========== ДОБАВКИ ЗА 2-Й ДЕНЬ ==========
const ratingAdditionsDay2 = [
    { name: "Jane 007", addition: 18 }, { name: "Андрей Фломастер", addition: 24 }, { name: "Анна К", addition: 20 },
    { name: "Богдан А", addition: 3 }, { name: "Влад Владшток", addition: 0 }, { name: "Дмитрий Ник", addition: 48 },
    { name: "Евгений Ц", addition: 32 }, { name: "Егор АА 11", addition: 6 }, { name: "Егор Вино", addition: 39 },
    { name: "Ирина Ага", addition: 21 }, { name: "Кристина А", addition: 20 }, { name: "Леонид П", addition: 67 },
    { name: "Максим Spy", addition: 0 }, { name: "Максим Б", addition: 34 }, { name: "Михаил Козадой", addition: 5 },
    { name: "Михаил Наб", addition: 95 }, { name: "Надя Жб", addition: 25 }, { name: "Немощь", addition: 19 },
    { name: "Никита Зейн", addition: 19 }, { name: "Полина Матыцына", addition: 0 }, { name: "Роман Лод", addition: 9 },
    { name: "Федор К", addition: 29 }, { name: "Шурик Шилкин", addition: 22 }, { name: "Иван Грозный", addition: 36 },
    { name: "Стас ISK", addition: 22 }, { name: "Юка", addition: 23 }
];

// ========== ОХОТНИЧЬИ НОМИНАЦИИ ==========
const huntingNominations = [
    { number: 1, name: "Андрей Мазепа", r1: 1400, r2: 800, r3: 1000, r4: 400, r5: 1200, r6: 1300, r7: 675, r8: 0, sum: 6775, count: 7, avg: 970 },
    { number: 2, name: "Михаил Наб", r1: 800, r2: 400, r3: 400, r4: 800, r5: 1400, r6: 400, r7: 400, r8: 700, sum: 5300, count: 8, avg: 665 },
    { number: 3, name: "Саша Коч", r1: 1600, r2: 2400, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 4000, count: 2, avg: 2000 },
    { number: 4, name: "Шурик Шилкин", r1: 1950, r2: 2050, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 4000, count: 2, avg: 2000 },
    { number: 5, name: "Иван Грозный", r1: 1200, r2: 800, r3: 500, r4: 400, r5: 0, r6: 0, r7: 0, r8: 0, sum: 2900, count: 4, avg: 725 },
    { number: 6, name: "Том", r1: 1000, r2: 1500, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 2500, count: 2, avg: 1250 },
    { number: 7, name: "Семён Ануфриев", r1: 800, r2: 1400, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 2200, count: 2, avg: 1100 },
    { number: 8, name: "Полина Матыцына", r1: 800, r2: 500, r3: 200, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 1500, count: 3, avg: 500 },
    { number: 9, name: "Дмитрий Ник", r1: 800, r2: 250, r3: 400, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 1450, count: 3, avg: 485 },
    { number: 10, name: "Владимир Бул", r1: 700, r2: 400, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 1100, count: 2, avg: 550 },
    { number: 11, name: "Роман Лод", r1: 200, r2: 800, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 1000, count: 2, avg: 500 },
    { number: 12, name: "Jane 007", r1: 800, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 800, count: 1, avg: 800 },
    { number: 13, name: "Леонид П", r1: 800, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 800, count: 1, avg: 800 },
    { number: 14, name: "grooveman", r1: 700, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 700, count: 1, avg: 700 },
    { number: 15, name: "Михаил Козадой", r1: 700, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 700, count: 1, avg: 700 },
    { number: 16, name: "Богдан А", r1: 600, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 600, count: 1, avg: 600 },
    { number: 17, name: "Алексей Ершов", r1: 200, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0, r8: 0, sum: 200, count: 1, avg: 200 }
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
        'day1': 'День 1 - 2.04.2026', 'day2': 'День 2 - 9.04.2026',
        'day3': 'День 3 - 16.04.2026', 'day4': 'День 4 - 23.04.2026',
        'tournamentResults': 'Итоги Сезона Охоты А-2', 'huntingNominations': 'Охотничьи номинации',
        'rating': 'Рейтинг', 'previousResults': 'Результаты Туза весны 2026'
    };
    document.getElementById('currentPhase').textContent = phases[tabName] || 'Сезон Охоты А-2';
    
    resetTableExpand();
    document.getElementById('searchInput').value = '';
    
    // Обновляем таблицу в зависимости от выбранной вкладки
    if (tabName === 'day1') fillDay1Table();
    else if (tabName === 'day2') fillDay2Table();
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
function fillDay1Table() {
    const tbody = document.getElementById('day1Table');
    if (!tbody) return;
    tbody.innerHTML = '';
    day1Players.forEach(p => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td class="number-column">${p.number}</td>
            <td class="player-name">${p.name}</td>
            <td>${formatNumber(p.participation)}</td>
            <td>${formatNumber(p.start)}</td>
            <td>${formatNumber(p.rebuy)}</td>
            <td>${formatNumber(p.price)}</td>
            <td class="exit-time">${formatNumber(p.exit)}</td>
            <td class="chips-positive">${formatNumber(p.result)}</td>
        `;
    });
}

function fillDay2Table() {
    const tbody = document.getElementById('day2Table');
    if (!tbody) return;
    tbody.innerHTML = '';
    day2Players.forEach(p => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td class="number-column">${p.number}</td>
            <td class="player-name">${p.name}</td>
            <td>${formatNumber(p.participation)}</td>
            <td>${formatNumber(p.start)}</td>
            <td>${formatNumber(p.rebuy)}</td>
            <td>${formatNumber(p.price)}</td>
            <td class="exit-time">${formatNumber(p.exit)}</td>
            <td class="chips-positive">${formatNumber(p.result)}</td>
        `;
    });
}

function fillPreviousResultsTable() {
    const tbody = document.getElementById('previousResultsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    previousTournamentResults.forEach((p, i) => {
        const placeClass = p.place === 1 ? 'gold-place' : 'green-place';
        const row = tbody.insertRow();
        row.className = placeClass;
        row.innerHTML = `
            <td class="number-column">${i + 1}</td>
            <td class="player-name">${p.name}</td>
            <td class="place-column ${placeClass}">${p.place} ${p.place === 1 ? '🥇' : ''}</td>
            <td class="place-notes">${p.status}</td>
        `;
    });
}

function fillTournamentResultsTable() {
    const tbody = document.getElementById('tournamentResultsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    const changes = getPositionChangesForResults();
    
    tournamentResults.forEach((p, i) => {
        const change = changes.get(p.name);
        let changeHtml = '';
        if (change) {
            if (change.type === 'new') changeHtml = '<div class="position-change position-new">NEW</div>';
            else if (change.type === 'up') changeHtml = `<div class="position-change position-up"><span class="change-arrow">▲</span>${change.change}</div>`;
            else if (change.type === 'down') changeHtml = `<div class="position-change position-down"><span class="change-arrow">▼</span>${change.change}</div>`;
            else changeHtml = '<div class="position-change position-same"><span class="change-arrow">→</span>0</div>';
        }
        
        const row = tbody.insertRow();
        row.innerHTML = `
            <td class="number-column">${i + 1}</td>
            <td class="player-name">${p.name}</td>
            <td>${changeHtml}</td>
            <td class="${p.day1 >= 0 ? 'chips-positive' : 'chips-negative'}">${p.day1 !== null ? formatNumber(p.day1) : '-'}</td>
            <td class="${p.day2 >= 0 ? 'chips-positive' : 'chips-negative'}">${p.day2 !== null ? formatNumber(p.day2) : '-'}</td>
            <td>-</td>
            <td>-</td>
            <td class="chips-positive">${formatNumber(p.total)}</td>
            <td class="chips-positive">${p.bounty > 0 ? formatNumber(p.bounty) : '-'}</td>
        `;
    });
}

function fillHuntingNominationsTable() {
    const tbody = document.getElementById('huntingNominationsTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    huntingNominations.forEach(n => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td class="number-column">${n.number}</td>
            <td class="player-name">${n.name}</td>
            <td class="chips-positive">${formatNumber(n.r1)}</td>
            <td class="chips-positive">${n.r2 > 0 ? formatNumber(n.r2) : '-'}</td>
            <td class="chips-positive">${n.r3 > 0 ? formatNumber(n.r3) : '-'}</td>
            <td class="chips-positive">${n.r4 > 0 ? formatNumber(n.r4) : '-'}</td>
            <td class="chips-positive">${n.r5 > 0 ? formatNumber(n.r5) : '-'}</td>
            <td class="chips-positive">${n.r6 > 0 ? formatNumber(n.r6) : '-'}</td>
            <td class="chips-positive">${n.r7 > 0 ? formatNumber(n.r7) : '-'}</td>
            <td class="chips-positive">${n.r8 > 0 ? formatNumber(n.r8) : '-'}</td>
            <td class="rating-positive">${formatNumber(n.sum)}</td>
            <td class="attendance-value">${n.count}</td>
            <td class="rating-number">${formatNumber(n.avg)}</td>
        `;
    });
}

// ========== РЕЙТИНГ ==========
function calculateNewRating() {
    const beforeMap = new Map(ratingBeforeDay2.map(p => [p.name, { rating: p.rating, attendance: p.attendance }]));
    const additionMap = new Map(ratingAdditionsDay2.map(p => [p.name, p.addition]));
    const result = [];
    
    ratingBeforeDay2.forEach(p => {
        const add = additionMap.get(p.name) || 0;
        result.push({
            name: p.name,
            previousRating: p.rating,
            attendance: p.attendance + (additionMap.has(p.name) ? 1 : 0),
            change: add,
            newRating: p.rating + add
        });
    });
    
    ratingAdditionsDay2.forEach(add => {
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
    const oldSorted = [...ratingBeforeDay2].sort((a, b) => b.rating - a.rating);
    const newSorted = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const changes = new Map();
    const oldNames = new Set(ratingBeforeDay2.map(p => p.name));
    
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
        
        const changeSign = p.change > 0 ? `+${p.change}` : (p.change === 0 && ratingAdditionsDay2.some(a => a.name === p.name) ? '+0' : (p.change < 0 ? p.change : ''));
        const changeClass = p.change > 0 ? 'rating-positive' : (p.change < 0 ? 'rating-negative' : 'rating-neutral');
        
        const isTop19 = idx < 19;
        const isNikitaYellow = p.name === "Никита Yellow";
        const rowClass = (isTop19 || isNikitaYellow) ? 'rating-highlight' : '';
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        const row = tbody.insertRow();
        row.className = rowClass;
        row.innerHTML = `
            <td class="number-column">${idx + 1}</td>
            <td class="${nameClass}">${p.name}</td>
            <td>${changeHtml}</td>
            <td>${p.previousRating > 0 ? p.previousRating : '-'}</td>
            <td class="attendance-value">${p.attendance}</td>
            <td class="${changeClass}">${changeSign}</td>
            <td class="rating-number">${p.newRating}</td>
        `;
    });
}

// ========== ПОИСК ==========
function searchPlayers() {
    const term = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    if (term === '') {
        if (activeTab.id === 'day1') fillDay1Table();
        else if (activeTab.id === 'day2') fillDay2Table();
        else if (activeTab.id === 'previousResults') fillPreviousResultsTable();
        else if (activeTab.id === 'rating') fillRatingTable();
        else if (activeTab.id === 'tournamentResults') fillTournamentResultsTable();
        else if (activeTab.id === 'huntingNominations') fillHuntingNominationsTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let found = 0;
    if (activeTab.id === 'day1') found = day1Players.filter(p => p.name.toLowerCase().includes(term)).length;
    else if (activeTab.id === 'day2') found = day2Players.filter(p => p.name.toLowerCase().includes(term)).length;
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
        ...day1Players.map(p => p.name),
        ...day2Players.map(p => p.name),
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
    if (activeTab.id === 'day1') { total = day1Players.length; avg = Math.round(day1Players.reduce((s, p) => s + p.result, 0) / total); }
    else if (activeTab.id === 'day2') { total = day2Players.length; avg = Math.round(day2Players.reduce((s, p) => s + p.result, 0) / total); }
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
    fillDay1Table();
    fillDay2Table();
    fillPreviousResultsTable();
    fillTournamentResultsTable();
    fillHuntingNominationsTable();
    fillRatingTable();
    setupAutocomplete();
    
    // Показываем вкладку День 2 и заполняем её
    showTab('day2');
    
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        searchPlayers();
    });
    updateStats();
});
