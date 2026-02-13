// Данные результатов предыдущего турнира (Миссис Дейзи Дак Q-2)
const previousTournamentResults = [
    { name: "Семён Ануфриев", place: 1 },
    { name: "Сергей Ман", place: 2 },
    { name: "Михаил Наб", place: 3 },
    { name: "Дмитрий Ник", place: 4 },
    { name: "Robert Юниксфактёр", place: 5 },
    { name: "Кристина А", place: 6 },
    { name: "grooveman", place: 7 },
    { name: "Михаил Козадой", place: 8 },
    { name: "Jane 007", place: 9 },
    { name: "Леонид П", place: 10 },
    { name: "Макар Аве", place: 11 },
    { name: "Влад Владшток", place: 12 },
    { name: "Максим Spy", place: 13 },
    { name: "Egrinderolls", place: 14 },
    { name: "Шурик Шилкин", place: 15 },
    { name: "Роман Лод", place: 16 },
    { name: "Соня Серж", place: 17 },
    { name: "Богдан А", place: 18 },
    { name: "Свидетель", place: 19 },
    { name: "Серж", place: 20 },
    { name: "Миша Скиф", place: 21 },
    { name: "Даня Д", place: 22 },
    { name: "Михаил Т", place: 23 },
    { name: "Настя К", place: 24 },
    { name: "Наташа Бонд", place: 25 },
    { name: "Макс Пиво", place: 26 },
    { name: "Ксения Куд", place: 27 },
    { name: "Разаман Рах", place: 28 },
    { name: "Артемий Мен", place: 29 },
    { name: "Никита Сизов", place: 30 },
    { name: "Родион Шашурин", place: 31 },
    { name: "Роман Егоров", place: 32 },
    { name: "Аня Гам", place: 33 },
    { name: "Родион К", place: 34 },
    { name: "Искандер", place: 35 },
    { name: "Полина Матыцына", place: 36 },
    { name: "Саша Коч", place: 37 },
    { name: "Алина Исм", place: 38 },
    { name: "Дарья Шев", place: 39 },
    { name: "Илья Без", place: 40 },
    { name: "Том", place: 41 },
    { name: "Иван Баж", place: 42 },
    { name: "Никита Зейн", place: 43 },
    { name: "Ирина Ага", place: 44 },
    { name: "Федор К", place: 45 },
    { name: "Влад Голубев", place: 46 },
    { name: "Славяна", place: 47 },
    { name: "Лев Р", place: 48 },
    { name: "Евгений Ц", place: 49 },
    { name: "Вова Баж", place: 50 },
    { name: "Даша Гри", place: 51 },
    { name: "Инна М", place: 52 }
];

// НОВЫЕ данные охоты за головами (после третьего дня)
const huntingPlayers = [
    { name: "Роман Лод", bounty: 2200 },
    { name: "Никита Зейн", bounty: 1900 },
    { name: "Иван Антипов", bounty: 1300 },
    { name: "Robert Юниксфактёр", bounty: 1000 },
    { name: "Николай Ж", bounty: 1000 },
    { name: "Михаил Наб", bounty: 800 },
    { name: "Богдан А", bounty: 800 },
    { name: "Михаил Козадой", bounty: 800 },
    { name: "Дмитрий Ник", bounty: 600 },
    { name: "Кристина А", bounty: 600 },
    { name: "Лев Р", bounty: 600 },
    { name: "grooveman", bounty: 500 },
    { name: "Семён Ануфриев", bounty: 500 },
    { name: "Иван Баж", bounty: 500 },
    { name: "Сергей Ман", bounty: 450 },
    { name: "Максим Spy", bounty: 400 },
    { name: "Полина Матыцына", bounty: 400 },
    { name: "Роман Егоров", bounty: 400 },
    { name: "Серж", bounty: 400 },
    { name: "Леонид П", bounty: 300 },
    { name: "Шурик Шилкин", bounty: 250 },
    { name: "Настя К", bounty: 250 },
    { name: "Свидетель", bounty: 200 },
    { name: "Вова Баж", bounty: 200 },
    { name: "Влад Сам", bounty: 200 },
    { name: "Egrinderolls", bounty: 150 },
    { name: "Jane 007", bounty: 100 },
    { name: "Влад Владшток", bounty: 100 },
    { name: "Владимир Бул", bounty: 100 }
];

// Данные дня 1
const day1Players = [
    { number: 1, name: "Михаил Наб", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 17830, result: 18830, comment: "" },
    { number: 2, name: "Сергей Ман", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 11310, result: 12310, comment: "" },
    { number: 3, name: "Полина Матыцына", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 9640, result: 9640, comment: "" },
    { number: 4, name: "Иван Антипов", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 7850, result: 8850, comment: "" },
    { number: 5, name: "Саша Коч", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 7290, result: 8290, comment: "" },
    { number: 6, name: "Михаил Козадой", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4965, result: 5965, comment: "" },
    { number: 7, name: "Надя Жб", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4940, result: 5940, comment: "" },
    { number: 8, name: "Богдан А", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4540, result: 5540, comment: "" },
    { number: 9, name: "Роман Лод", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4485, result: 5485, comment: "" },
    { number: 10, name: "Вова Баж", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4205, result: 5205, comment: "" },
    { number: 11, name: "Кристина А", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 4060, result: 5060, comment: "" },
    { number: 12, name: "Макар Аве", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 3935, result: 4935, comment: "" },
    { number: 13, name: "Влад Сам", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 2835, result: 3835, comment: "" },
    { number: 14, name: "Артемий Мен", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 2540, result: 3540, comment: "" },
    { number: 15, name: "Egrinderolls", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1840, result: 2840, comment: "" },
    { number: 16, name: "Даниил Ершов", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1790, result: 2790, comment: "" },
    { number: 17, name: "Шурик Шилкин", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1585, result: 2585, comment: "" },
    { number: 18, name: "Инна М", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 1225, result: 2225, comment: "" },
    { number: 19, name: "Семён Ануфриев", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 1735, result: 1735, comment: "" },
    { number: 20, name: "Иван Баж", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 0, result: 1000, comment: "" },
    { number: 21, name: "Алина Исм", entry: 3100, start: 2100, rebuy: 0, credit: 0, exit: 0, result: 1000, comment: "" },
    { number: 22, name: "Никита Зейн", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 4000, result: 500, comment: "Кредит оплатил" },
    { number: 23, name: "Jane 007", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 250, result: 250, comment: "" },
    { number: 24, name: "Соня Серж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 25, name: "Влад Владшток", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 0, result: 0, comment: "Случайный прощенный" },
    { number: 26, name: "Николай Ж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 27, name: "Свидетель", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 28, name: "Том", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 0, result: 0, comment: "Первый прощённый" },
    { number: 29, name: "Даша Хромова", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 30, name: "Настя К", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 0, comment: "" },
    { number: 31, name: "Максим Spy", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, exit: 3500, result: 0, comment: "Кредит оплатил" }
];

// Данные дня 2
const day2Players = [
    { number: 1, name: "Никита Зейн", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 18260, robinduck: 1000, result: 20260, comment: "" },
    { number: 2, name: "Семён Ануфриев", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 16555, robinduck: 1000, result: 18555, comment: "" },
    { number: 3, name: "Jane 007", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 14460, robinduck: 1000, result: 15460, comment: "" },
    { number: 4, name: "Robert Юниксфактёр", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 10800, robinduck: 1000, result: 12800, comment: "" },
    { number: 5, name: "Николай Ж", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 9125, robinduck: 1000, result: 11125, comment: "" },
    { number: 6, name: "Полина Матыцына", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 6990, robinduck: 1000, result: 7990, comment: "" },
    { number: 7, name: "Иван Антипов", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 4305, robinduck: 1000, result: 6305, comment: "" },
    { number: 8, name: "Рома АСМР", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 3845, robinduck: 1000, result: 4845, comment: "" },
    { number: 9, name: "Юсиф Халафов", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 7205, robinduck: 1000, result: 4705, comment: "кредит оплатил" },
    { number: 10, name: "Максим Spy", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 6635, robinduck: 1000, result: 4135, comment: "кредит оплатил" },
    { number: 11, name: "Влад Владшток", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 1990, robinduck: -1000, result: 1990, comment: "" },
    { number: 12, name: "Egrinderolls", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 1420, exit: 2070, robinduck: -1000, result: 1070, comment: "сделка -2840" },
    { number: 13, name: "Даша Хромова", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 1030, robinduck: -1000, result: 1030, comment: "" },
    { number: 14, name: "Том", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: 0, comment: "" },
    { number: 15, name: "Макар Аве", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 250, robinduck: -1000, result: -750, comment: "" },
    { number: 16, name: "Шурик Шилкин", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "" },
    { number: 17, name: "Богдан А", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "" },
    { number: 18, name: "Леонид П", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "" },
    { number: 19, name: "Михаил Наб", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "" },
    { number: 20, name: "Соня Серж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "" },
    { number: 21, name: "Сергей Ман", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 1000, exit: 0, robinduck: -1000, result: -1000, comment: "сделка -2000" },
    { number: 22, name: "Роман Лод", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "" },
    { number: 23, name: "Эльджан", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "Кредит неоплачен - Выбыл" },
    { number: 24, name: "Мага Кинжал", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "Кредит неоплачен - Выбыл" },
    { number: 25, name: "Айдын", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "Кредит неоплачен - Выбыл" },
    { number: 26, name: "Свидетель", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 0, robinduck: -1000, result: -1000, comment: "Кредит неоплачен - Выбыл" }
];

// НОВЫЕ данные дня 3
const day3Players = [
    { number: 1, name: "Роман Лод", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 22055, result: 23055, comment: "" },
    { number: 2, name: "Настя К", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 18145, result: 19145, comment: "" },
    { number: 3, name: "Том", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 14950, result: 15950, comment: "" },
    { number: 4, name: "Иван Антипов", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 7755, result: 8755, comment: "" },
    { number: 5, name: "Богдан А", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 6710, result: 7710, comment: "" },
    { number: 6, name: "Jane 007", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 2500, exit: 6320, result: 6320, comment: "сделка -5000" },
    { number: 7, name: "Вика Ц", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 4555, result: 5555, comment: "" },
    { number: 8, name: "Михаил Козадой", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 4230, result: 5230, comment: "" },
    { number: 9, name: "Макар Аве", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 4145, result: 5145, comment: "" },
    { number: 10, name: "Николай Ж", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 3565, result: 4565, comment: "" },
    { number: 11, name: "Надя Жб", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 3180, result: 4180, comment: "" },
    { number: 12, name: "Сергей Ман", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 2720, result: 3720, comment: "" },
    { number: 13, name: "Максим Spy", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 1515, result: 2515, comment: "" },
    { number: 14, name: "Семён Ануфриев", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 1695, result: 1695, comment: "" },
    { number: 15, name: "Egrinderolls", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 535, exit: 4725, result: 1225, comment: "сделка -1070, кредит оплатил" },
    { number: 16, name: "Владимир Бул", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 0, result: 1000, comment: "" },
    { number: 17, name: "Шурик Шилкин", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 0, result: 1000, comment: "" },
    { number: 18, name: "Саша Немощь", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 0, result: 1000, comment: "" },
    { number: 19, name: "grooveman", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 3500, result: 0, comment: "кредит оплатил" },
    { number: 20, name: "Жахонгир", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 0, result: 0, comment: "Кредит неоплачен - Выбыл" },
    { number: 21, name: "Соня Серж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 0, comment: "" },
    { number: 22, name: "Влад Владшток", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 995, exit: 0, result: 0, comment: "сделка -1990" },
    { number: 23, name: "Матвей МС", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 0, comment: "" },
    { number: 24, name: "Зеньята", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 0, comment: "" },
    { number: 25, name: "Саша Коч", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 0, comment: "" }
];

const day4Players = [];

// Рейтинг ПОСЛЕ ПЕРВОГО ДНЯ
const ratingAfterDay1 = [
    { name: "Михаил Наб", rating: 632 },
    { name: "Семён Ануфриев", rating: 509 },
    { name: "Robert Юниксфактёр", rating: 440 },
    { name: "Шурик Шилкин", rating: 393 },
    { name: "Полина Матыцына", rating: 228 },
    { name: "Иван Антипов", rating: 99 },
    { name: "grooveman", rating: 333 },
    { name: "Максим Spy", rating: 342 },
    { name: "Саша Коч", rating: 186 },
    { name: "Михаил Козадой", rating: 341 },
    { name: "Jane 007", rating: 322 },
    { name: "Богдан А", rating: 324 },
    { name: "Свидетель", rating: 286 },
    { name: "Сергей Ман", rating: 311 },
    { name: "Кристина А", rating: 256 },
    { name: "Дмитрий Ник", rating: 230 },
    { name: "Лев Р", rating: 219 },
    { name: "Egrinderolls", rating: 246 },
    { name: "Влад Владшток", rating: 237 },
    { name: "Никита Зейн", rating: 190 },
    { name: "Надя Жб", rating: 39 },
    { name: "Роман Лод", rating: 149 },
    { name: "Вова Баж", rating: 60 },
    { name: "Макар Аве", rating: 153 },
    { name: "Артемий Мен", rating: 63 },
    { name: "Влад Сам", rating: 29 },
    { name: "Даниил Ершов", rating: 26 },
    { name: "Инна М", rating: 103 },
    { name: "Иван Баж", rating: 64 },
    { name: "Алина Исм", rating: 45 },
    { name: "Соня Серж", rating: 122 },
    { name: "Николай Ж", rating: 20 },
    { name: "Том", rating: 70 },
    { name: "Даша Хромова", rating: 37 },
    { name: "Настя К", rating: 153 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Серж", rating: 148 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Оксана Б", rating: 87 },
    { name: "Миша Скиф", rating: 70 },
    { name: "Разаман Рах", rating: 70 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Соня Кур", rating: 46 },
    { name: "Артём 007", rating: 40 },
    { name: "Даша Гри", rating: 40 },
    { name: "Евгений Ц", rating: 35 },
    { name: "Аня Гам", rating: 31 },
    { name: "Никита Сизов", rating: 31 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Родион К", rating: 26 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Дарья Шев", rating: 22 },
    { name: "Славяна", rating: 22 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 },
    { name: "Михаил Т", rating: 79 },
    { name: "Ксения Куд", rating: 78 },
    { name: "Федор К", rating: 72 },
    { name: "Леонид П", rating: 116 },
    { name: "Даня Д", rating: 101 },
    { name: "Наташа Бонд", rating: 93 },
    { name: "Искандер", rating: 87 }
];

// ИСПРАВЛЕННЫЙ рейтинг ПОСЛЕ ВТОРОГО ДНЯ
const ratingAfterDay2 = [
    { name: "Никита Зейн", rating: 285 },
    { name: "Семён Ануфриев", rating: 576 },
    { name: "Jane 007", rating: 377 },
    { name: "Robert Юниксфактёр", rating: 488 },
    { name: "Николай Ж", rating: 63 },
    { name: "Полина Матыцына", rating: 267 },
    { name: "Иван Антипов", rating: 135 },
    { name: "Рома АСМР", rating: 34 },
    { name: "Юсиф Халафов", rating: 32 },
    { name: "Максим Spy", rating: 372 },
    { name: "Влад Владшток", rating: 266 },
    { name: "Egrinderolls", rating: 274 },
    { name: "Даша Хромова", rating: 63 },
    { name: "Том", rating: 95 },
    { name: "Макар Аве", rating: 178 },
    { name: "Эльджан", rating: 24 },
    { name: "Мага Кинжал", rating: 23 },
    { name: "Шурик Шилкин", rating: 415 },
    { name: "Богдан А", rating: 346 },
    { name: "Леонид П", rating: 137 },
    { name: "Михаил Наб", rating: 653 },
    { name: "Соня Серж", rating: 142 },
    { name: "Айдын", rating: 20 },
    { name: "Сергей Ман", rating: 330 },
    { name: "Роман Лод", rating: 168 },
    { name: "Свидетель", rating: 305 },
    // ИГРОКИ, КОТОРЫЕ НЕ ИГРАЛИ ВО 2-М ДНЕ - ИХ РЕЙТИНГ НЕ МЕНЯЕТСЯ!
    { name: "Михаил Козадой", rating: 341 },
    { name: "Кристина А", rating: 256 },
    { name: "Дмитрий Ник", rating: 230 },
    { name: "Лев Р", rating: 219 },
    { name: "Надя Жб", rating: 39 },
    { name: "Вова Баж", rating: 60 },
    { name: "Артемий Мен", rating: 63 },
    { name: "Влад Сам", rating: 29 },
    { name: "Даниил Ершов", rating: 26 },
    { name: "Инна М", rating: 103 },
    { name: "Иван Баж", rating: 64 },
    { name: "Алина Исм", rating: 45 },
    { name: "Саша Коч", rating: 186 },
    { name: "Настя К", rating: 153 },
    { name: "grooveman", rating: 333 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Серж", rating: 148 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Оксана Б", rating: 87 },
    { name: "Миша Скиф", rating: 70 },
    { name: "Разаман Рах", rating: 70 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Соня Кур", rating: 46 },
    { name: "Артём 007", rating: 40 },
    { name: "Даша Гри", rating: 40 },
    { name: "Евгений Ц", rating: 35 },
    { name: "Аня Гам", rating: 31 },
    { name: "Никита Сизов", rating: 31 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Родион К", rating: 26 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Дарья Шев", rating: 22 },
    { name: "Славяна", rating: 22 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 },
    { name: "Михаил Т", rating: 79 },
    { name: "Ксения Куд", rating: 78 },
    { name: "Федор К", rating: 72 },
    { name: "Даня Д", rating: 101 },
    { name: "Наташа Бонд", rating: 93 },
    { name: "Искандер", rating: 87 }
];

// НОВЫЕ добавки рейтинга после третьего дня
const newRatingAdditionsDay3 = [
    { name: "Роман Лод", addition: 94 },
    { name: "Настя К", addition: 66 },
    { name: "Том", addition: 54 },
    { name: "Иван Антипов", addition: 47 },
    { name: "Богдан А", addition: 42 },
    { name: "Jane 007", addition: 38 },
    { name: "Вика Ц", addition: 35 },
    { name: "Михаил Козадой", addition: 33 },
    { name: "Макар Аве", addition: 31 },
    { name: "Николай Ж", addition: 30 },
    { name: "Надя Жб", addition: 28 },
    { name: "Сергей Ман", addition: 27 },
    { name: "Максим Spy", addition: 26 },
    { name: "Семён Ануфриев", addition: 25 },
    { name: "Egrinderolls", addition: 24 },
    { name: "Владимир Бул", addition: 23 },
    { name: "Шурик Шилкин", addition: 23 },
    { name: "Саша Немощь", addition: 22 },
    { name: "grooveman", addition: 21 },
    { name: "Жахонгир", addition: 21 },
    { name: "Соня Серж", addition: 20 },
    { name: "Влад Владшток", addition: 20 },
    { name: "Матвей МС", addition: 20 },
    { name: "Зеньята", addition: 19 },
    { name: "Саша Коч", addition: 19 }
];

// ========== ОСНОВНЫЕ ФУНКЦИИ ==========

// Функция переключения вкладок
function showTab(tabName) {
    if (!tabName) tabName = 'day3';
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    
    const tabElement = document.getElementById(tabName);
    if (tabElement) tabElement.classList.add('active');
    
    if (tabName !== 'rating' && tabName !== 'previousResults' && tabName !== 'hunting') {
        const targetButton = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
        if (targetButton) targetButton.classList.add('active');
    }
    
    updatePhaseHeader(tabName);
    resetTableExpand();
    searchPlayers();
    updateStats();
}

// Обновление заголовка фазы турнира
function updatePhaseHeader(tabName) {
    const phaseElement = document.getElementById('currentPhase');
    if (!phaseElement) return;
    
    const phases = {
        'day1': 'День 1 - 29.01.2026',
        'day2': 'День 2 - 5.02.2026',
        'day3': 'День 3 - 12.02.2026',
        'day4': 'День 4 - 19.02.2026',
        'final': 'ФИНАЛ ТУРНИРА - 21.02.2026',
        'hunting': 'Охота за головами',
        'rating': 'Рейтинг',
        'previousResults': 'Результаты турнира Миссис Дейзи Дак Q-2'
    };
    
    phaseElement.textContent = phases[tabName] || 'Турнир Дональда Дака К-2';
}

// Функция развертывания таблицы на мобильных
function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    const tables = document.querySelectorAll(`#${activeTabId} .tournament-table`);
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => table.classList.toggle('expanded'));
    
    if (tables[0] && tables[0].classList.contains('expanded')) {
        button.textContent = 'Свернуть таблицу';
    } else {
        button.textContent = 'Развернуть таблицу';
    }
}

// Сброс развертывания таблицы
function resetTableExpand() {
    const tables = document.querySelectorAll('.tournament-table');
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => table.classList.remove('expanded'));
    button.textContent = 'Развернуть таблицу';
}

// Расчет среднего стека для активного дня
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return 0;
    
    const activeTabId = activeTab.id;
    let players;
    
    if (activeTabId === 'day1') players = day1Players;
    else if (activeTabId === 'day2') players = day2Players;
    else if (activeTabId === 'day3') players = day3Players;
    else if (activeTabId === 'day4') players = day4Players;
    else return 0;
    
    if (players.length === 0) return 0;
    const total = players.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / players.length);
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Получение класса для места в таблице результатов
function getPlaceClass(place) {
    if (place === 1) return 'gold-place';
    if (place === 2) return 'silver-place';
    if (place === 3) return 'bronze-place';
    if (place >= 4 && place <= 23) return 'green-place';
    return '';
}

// Получение эмодзи для места
function getPlaceEmoji(place) {
    if (place === 1) return '🥇';
    if (place === 2) return '🥈';
    if (place === 3) return '🥉';
    return '';
}

// Заполнение таблицы результатов предыдущего турнира
function fillPreviousResultsTable() {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    previousTournamentResults.forEach((player, index) => {
        const row = document.createElement('tr');
        const placeClass = getPlaceClass(player.place);
        const placeEmoji = getPlaceEmoji(player.place);
        
        row.className = placeClass;
        
        let status = '';
        if (player.place === 1) status = '🏆 Победитель турнира';
        else if (player.place === 2) status = '🥈 Второе место';
        else if (player.place === 3) status = '🥉 Третье место';
        else if (player.place >= 4 && player.place <= 23) status = '✅ Финалист';
        else status = '⭐ Участник турнира';
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы охоты за головами
function fillHuntingTable() {
    const tableBody = document.getElementById('huntingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    huntingPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="bounty-value">${formatNumber(player.bounty)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ========== РЕЙТИНГ ==========

// Расчет нового рейтинга после третьего дня
function calculateNewRatingAfterDay3() {
    const newRating = [];
    
    const ratingAfterDay2Map = new Map();
    ratingAfterDay2.forEach(player => {
        ratingAfterDay2Map.set(player.name, player.rating);
    });
    
    const ratingAdditionMap = new Map();
    newRatingAdditionsDay3.forEach(player => {
        ratingAdditionMap.set(player.name, player.addition);
    });
    
    const allPlayerNames = new Set([
        ...ratingAfterDay2.map(p => p.name),
        ...newRatingAdditionsDay3.map(p => p.name)
    ]);
    
    allPlayerNames.forEach(playerName => {
        const ratingDay2 = ratingAfterDay2Map.get(playerName) || 0;
        const addition = ratingAdditionMap.get(playerName) || 0;
        const newRatingValue = ratingDay2 + addition;
        const isNewPlayer = ratingDay2 === 0 && addition > 0;
        
        newRating.push({
            name: playerName,
            previousRating: ratingDay2,
            change: addition,
            newRating: newRatingValue,
            isNewPlayer: isNewPlayer
        });
    });
    
    return newRating;
}

// Расчет изменений позиций в рейтинге после третьего дня
function calculateRatingPositionChangesAfterDay3() {
    const newRating = calculateNewRatingAfterDay3();
    
    const sortedRatingDay2 = [...ratingAfterDay2].sort((a, b) => b.rating - a.rating);
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    const positionChanges = new Map();
    
    sortedNewRating.forEach((player, newIndex) => {
        const oldIndex = sortedRatingDay2.findIndex(p => p.name === player.name);
        
        if (oldIndex === -1) {
            positionChanges.set(player.name, { change: 0, type: 'new' });
        } else {
            const change = oldIndex - newIndex;
            if (change > 0) {
                positionChanges.set(player.name, { change: Math.abs(change), type: 'up' });
            } else if (change < 0) {
                positionChanges.set(player.name, { change: Math.abs(change), type: 'down' });
            } else {
                positionChanges.set(player.name, { change: 0, type: 'same' });
            }
        }
    });
    
    return positionChanges;
}

// Создание HTML для изменения позиции
function createPositionChangeHTML(changeData) {
    if (!changeData) return '';
    
    const { change, type } = changeData;
    
    if (type === 'new') {
        return `<div class="position-change position-${type}">NEW</div>`;
    }
    
    let arrow = '';
    if (type === 'up') arrow = '▲';
    else if (type === 'down') arrow = '▼';
    else if (type === 'same') arrow = '→';
    
    return `<div class="position-change position-${type}">
        <span class="change-arrow">${arrow}</span>${change}
    </div>`;
}

// Заполнение таблицы Рейтинга
function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRatingAfterDay3();
    const positionChanges = calculateRatingPositionChangesAfterDay3();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const changeClass = player.change > 0 ? "rating-positive" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        const isTop19 = index < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        if (isTop19 || isNikitaYellow) row.className = 'rating-highlight';
        
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="${nameClass}">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// ========== ФИНАЛЬНАЯ ТАБЛИЦА ==========

// Сохраняем предыдущие состояния финальной таблицы
let finalTableAfterDay1 = null;
let finalTableAfterDay2 = null;

// Расчет финальной таблицы после Дня 1
function calculateFinalTableAfterDay1() {
    const players = [];
    
    day1Players.forEach(player => {
        const dealAmount = extractDealFromComment(player.comment);
        const total = player.result + dealAmount;
        
        players.push({
            name: player.name,
            total: total,
            day1: total,
            day2: 0,
            day3: 0,
            isEliminated: false
        });
    });
    
    // Сортируем по убыванию итога
    return players.sort((a, b) => b.total - a.total);
}

// Расчет финальной таблицы после Дня 2
function calculateFinalTableAfterDay2() {
    const playersMap = new Map();
    
    // Добавляем игроков Дня 1
    day1Players.forEach(player => {
        const dealAmount = extractDealFromComment(player.comment);
        const total = player.result + dealAmount;
        
        playersMap.set(player.name, {
            name: player.name,
            total: total,
            day1: total,
            day2: 0,
            day3: 0,
            isEliminated: false
        });
    });
    
    // Добавляем/обновляем игроков Дня 2
    day2Players.forEach(player => {
        const dealAmount = extractDealFromComment(player.comment);
        const day2Result = player.result + dealAmount;
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        
        if (!playersMap.has(player.name)) {
            playersMap.set(player.name, {
                name: player.name,
                total: day2Result,
                day1: 0,
                day2: day2Result,
                day3: 0,
                isEliminated: isEliminated
            });
        } else {
            const existing = playersMap.get(player.name);
            existing.day2 = day2Result;
            existing.total = (existing.day1 || 0) + day2Result;
            existing.isEliminated = isEliminated;
        }
    });
    
    const players = Array.from(playersMap.values());
    // Не включаем выбывших в сортировку для сравнения позиций
    const activePlayers = players.filter(p => !p.isEliminated);
    return activePlayers.sort((a, b) => b.total - a.total);
}

// Извлечение суммы сделки из комментария
function extractDealFromComment(comment) {
    if (!comment) return 0;
    const dealMatch = comment.match(/сделка\s*(-?\d+)/i);
    return dealMatch ? parseInt(dealMatch[1], 10) || 0 : 0;
}

// Получение всех игроков для финальной таблицы (текущее состояние)
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        const dealAmount = extractDealFromComment(player.comment);
        const day1Result = player.result + dealAmount;
        
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: day1Result,
            day2: 0,
            day3: 0,
            day4: 0,
            total: day1Result,
            isNew: false,
            isEliminated: false,
            comment: player.comment || ""
        });
    });
    
    // Добавляем игроков из дня 2
    day2Players.forEach(player => {
        const dealAmount = extractDealFromComment(player.comment);
        const day2Result = player.result + dealAmount;
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        const isNew = !allPlayersMap.has(player.name);
        
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: day2Result,
                day3: 0,
                day4: 0,
                total: day2Result,
                isNew: isNew,
                isEliminated: isEliminated,
                comment: player.comment || ""
            });
        } else {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day2 = day2Result;
            existingPlayer.total = (existingPlayer.day1 || 0) + day2Result;
            existingPlayer.isEliminated = isEliminated;
        }
    });
    
    // Добавляем игроков из дня 3
    day3Players.forEach(player => {
        const dealAmount = extractDealFromComment(player.comment);
        const day3Result = player.result + dealAmount;
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        const isNew = !allPlayersMap.has(player.name);
        
        if (!allPlayersMap.has(player.name)) {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: day3Result,
                day4: 0,
                total: day3Result,
                isNew: isNew,
                isEliminated: isEliminated,
                comment: player.comment || ""
            });
        } else {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day3 = day3Result;
            existingPlayer.total = (existingPlayer.total || 0) + day3Result;
            existingPlayer.isEliminated = isEliminated;
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Заполнение финальной таблицы
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // Рассчитываем и сохраняем состояние после Дня 1 (если еще не сохранили)
    if (!finalTableAfterDay1) {
        finalTableAfterDay1 = calculateFinalTableAfterDay1();
    }
    
    // Рассчитываем и сохраняем состояние после Дня 2 (если еще не сохранили)
    if (!finalTableAfterDay2) {
        finalTableAfterDay2 = calculateFinalTableAfterDay2();
    }
    
    // Получаем текущее состояние (после Дня 3)
    const allPlayers = getAllFinalPlayers();
    
    if (allPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: #666;">
                    Финальная таблица появится после завершения дней турнира
                </td>
            </tr>
        `;
        return;
    }
    
    // Разделяем игроков на выбывших и остальных
    const eliminatedPlayers = [];
    const activePlayers = [];
    
    allPlayers.forEach(player => {
        if (player.isEliminated) {
            eliminatedPlayers.push(player);
        } else {
            activePlayers.push(player);
        }
    });
    
    // Сортируем активных игроков по убыванию итога
    activePlayers.sort((a, b) => b.total - a.total);
    
    // Сортируем выбывших игроков в нужном порядке
    const eliminatedOrder = ["Жахонгир", "Эльджан", "Мага Кинжал", "Айдын", "Свидетель"];
    eliminatedPlayers.sort((a, b) => {
        const indexA = eliminatedOrder.indexOf(a.name);
        const indexB = eliminatedOrder.indexOf(b.name);
        return indexA - indexB;
    });
    
    // Объединяем всех игроков
    const finalPlayers = [...activePlayers, ...eliminatedPlayers];
    
    // Для каждого игрока определяем изменение позиции
    finalPlayers.forEach((player, currentIndex) => {
        // Используем предыдущее состояние финальной таблицы (после Дня 2)
        const previousTable = finalTableAfterDay2;
        
        // Находим индекс игрока в предыдущей финальной таблице
        const previousIndex = previousTable.findIndex(p => p.name === player.name);
        
        let positionChangeHTML = '';
        
        if (!player.isEliminated) {
            if (previousIndex !== -1) {
                // Игрок был в предыдущей финальной таблице
                const change = previousIndex - currentIndex;
                if (change > 0) {
                    positionChangeHTML = `<div class="position-change position-up">▲${Math.abs(change)}</div>`;
                } else if (change < 0) {
                    positionChangeHTML = `<div class="position-change position-down">▼${Math.abs(change)}</div>`;
                } else {
                    positionChangeHTML = `<div class="position-change position-same">→0</div>`;
                }
            } else {
                // Новый игрок (не был в предыдущей финальной таблице)
                positionChangeHTML = `<div class="position-change position-new">NEW</div>`;
            }
        }
        
        // Форматирование результатов по дням
        let day1Display = player.day1 > 0 ? formatNumber(player.day1) : (player.day1 < 0 ? formatNumber(player.day1) : '0');
        let day1Class = player.day1 > 0 ? 'chips-positive' : (player.day1 < 0 ? 'chips-negative' : '');
        
        let day2Display = player.day2 > 0 ? formatNumber(player.day2) : (player.day2 < 0 ? formatNumber(player.day2) : '0');
        let day2Class = player.day2 > 0 ? 'chips-positive' : (player.day2 < 0 ? 'chips-negative' : '');
        
        let day3Display = player.day3 > 0 ? formatNumber(player.day3) : (player.day3 < 0 ? formatNumber(player.day3) : '0');
        let day3Class = player.day3 > 0 ? 'chips-positive' : (player.day3 < 0 ? 'chips-negative' : '');
        
        // Итог
        let totalDisplay;
        let totalClass = '';
        if (player.isEliminated) {
            totalDisplay = 'Выбыл';
            totalClass = 'eliminated-status';
        } else {
            if (player.total < 0) {
                totalDisplay = '0';
                totalClass = 'chips-positive';
            } else {
                totalDisplay = formatNumber(player.total);
                totalClass = player.total > 0 ? 'chips-positive' : '';
            }
        }
        
        const row = document.createElement('tr');
        if (player.isEliminated) {
            row.className = 'eliminated-player';
        }
        
        row.innerHTML = `
            <td class="number-column">${currentIndex + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${positionChangeHTML}</td>
            <td class="result-column ${day1Class}">${day1Display}</td>
            <td class="result-column ${day2Class}">${day2Display}</td>
            <td class="result-column ${day3Class}">${day3Display}</td>
            <td class="result-column">-</td>
            <td class="final-total ${totalClass}">${totalDisplay}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// ========== ДНИ ТУРНИРА ==========

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.credit)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    day2Players.forEach((player) => {
        const row = document.createElement('tr');
        const isEliminated = player.number >= 23 && player.number <= 26;
        if (isEliminated) row.className = 'eliminated-row';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const robinduckClass = player.robinduck >= 0 ? "chips-positive" : "chips-negative";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        const dealClass = player.deal !== 0 ? "deal-negative" : "";
        const dealDisplay = player.deal !== 0 ? formatNumber(player.deal) : "";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.credit)}</td>
            <td class="${dealClass}">${dealDisplay}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${robinduckClass}">${formatNumber(player.robinduck)}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    day3Players.forEach((player) => {
        const row = document.createElement('tr');
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        if (isEliminated) row.className = 'eliminated-row';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        const dealClass = player.deal !== 0 ? "deal-negative" : "";
        const dealDisplay = player.deal !== 0 ? formatNumber(player.deal) : "";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.credit)}</td>
            <td class="${dealClass}">${dealDisplay}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// ========== ПОИСК ==========

// Автодополнение для поиска
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    if (!searchInput || !autocompleteResults) return;
    
    const allPlayers = [
        ...previousTournamentResults.map(p => ({ name: p.name })),
        ...huntingPlayers.map(p => ({ name: p.name })),
        ...day1Players.map(p => ({ name: p.name })),
        ...day2Players.map(p => ({ name: p.name })),
        ...day3Players.map(p => ({ name: p.name })),
        ...calculateNewRatingAfterDay3().map(p => ({ name: p.name })),
        ...ratingAfterDay2.map(p => ({ name: p.name }))
    ];
    
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        
        const suggestions = playerNames.filter(name => 
            name.toLowerCase().includes(value)
        ).slice(0, 8);
        
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                const regex = new RegExp(`(${value})`, 'gi');
                const highlighted = suggestion.replace(regex, '<span class="autocomplete-highlight">$1</span>');
                item.innerHTML = highlighted;
                item.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    autocompleteResults.style.display = 'none';
                    searchPlayers();
                });
                autocompleteResults.appendChild(item);
            });
            autocompleteResults.style.display = 'block';
        } else {
            autocompleteResults.style.display = 'none';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !autocompleteResults.contains(e.target)) {
            autocompleteResults.style.display = 'none';
        }
    });
}

// Функция для подсветки найденного текста
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
}

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    if (searchTerm === '') {
        const fillFunctions = {
            'day1': fillDay1Table,
            'day2': fillDay2Table,
            'day3': fillDay3Table,
            'previousResults': fillPreviousResultsTable,
            'hunting': fillHuntingTable,
            'rating': fillRatingTable,
            'final': fillFinalTable
        };
        
        if (fillFunctions[activeTabId]) fillFunctions[activeTabId]();
        
        const searchResults = document.getElementById('searchResults');
        if (searchResults) searchResults.style.display = 'none';
        return;
    }
    
    let foundPlayers = [];
    
    if (activeTabId === 'day1') {
        foundPlayers = day1Players.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillDay1TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'day2') {
        foundPlayers = day2Players.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillDay2TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'day3') {
        foundPlayers = day3Players.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillDay3TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'previousResults') {
        foundPlayers = previousTournamentResults.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillPreviousResultsTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'hunting') {
        foundPlayers = huntingPlayers.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillHuntingTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRatingAfterDay3();
        foundPlayers = newRating.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillRatingTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        foundPlayers = allPlayers.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillFinalTableWithSearch(foundPlayers, searchTerm);
    }
    
    const resultsCount = document.getElementById('resultsCount');
    const searchResults = document.getElementById('searchResults');
    
    if (foundPlayers.length > 0) {
        if (resultsCount) resultsCount.textContent = foundPlayers.length;
        if (searchResults) searchResults.style.display = 'block';
    } else {
        if (searchResults) {
            searchResults.style.display = 'block';
            if (resultsCount) resultsCount.textContent = '0';
        }
    }
}

// Заполнение таблицы дня 1 с поиском
function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.credit)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы дня 2 с поиском
function fillDay2TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="11" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        const isEliminated = player.number >= 23 && player.number <= 26;
        row.className = isEliminated ? 'search-highlight eliminated-row' : 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const robinduckClass = player.robinduck >= 0 ? "chips-positive" : "chips-negative";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        const dealClass = player.deal !== 0 ? "deal-negative" : "";
        const dealDisplay = player.deal !== 0 ? formatNumber(player.deal) : "";
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.credit)}</td>
            <td class="${dealClass}">${dealDisplay}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${robinduckClass}">${formatNumber(player.robinduck)}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы дня 3 с поиском
function fillDay3TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day3Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="10" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        row.className = isEliminated ? 'search-highlight eliminated-row' : 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        const dealClass = player.deal !== 0 ? "deal-negative" : "";
        const dealDisplay = player.deal !== 0 ? formatNumber(player.deal) : "";
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td>${formatNumber(player.credit)}</td>
            <td class="${dealClass}">${dealDisplay}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
            <td class="comment">${player.comment || ""}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение финальной таблицы с поиском
function fillFinalTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    // Используем сохраненные состояния
    if (!finalTableAfterDay1) {
        finalTableAfterDay1 = calculateFinalTableAfterDay1();
    }
    
    if (!finalTableAfterDay2) {
        finalTableAfterDay2 = calculateFinalTableAfterDay2();
    }
    
    const allPlayers = getAllFinalPlayers();
    
    const eliminatedPlayers = foundPlayers.filter(p => p.isEliminated);
    const activePlayers = foundPlayers.filter(p => !p.isEliminated);
    
    activePlayers.sort((a, b) => b.total - a.total);
    
    const finalFoundPlayers = [...activePlayers, ...eliminatedPlayers];
    
    finalFoundPlayers.forEach((player, index) => {
        const previousTable = finalTableAfterDay2;
        const previousIndex = previousTable.findIndex(p => p.name === player.name);
        
        let positionChangeHTML = '';
        
        if (!player.isEliminated) {
            if (previousIndex !== -1) {
                const change = previousIndex - index;
                if (change > 0) {
                    positionChangeHTML = `<div class="position-change position-up">▲${Math.abs(change)}</div>`;
                } else if (change < 0) {
                    positionChangeHTML = `<div class="position-change position-down">▼${Math.abs(change)}</div>`;
                } else {
                    positionChangeHTML = `<div class="position-change position-same">→0</div>`;
                }
            } else {
                positionChangeHTML = `<div class="position-change position-new">NEW</div>`;
            }
        }
        
        let day1Display = player.day1 > 0 ? formatNumber(player.day1) : (player.day1 < 0 ? formatNumber(player.day1) : '0');
        let day1Class = player.day1 > 0 ? 'chips-positive' : (player.day1 < 0 ? 'chips-negative' : '');
        
        let day2Display = player.day2 > 0 ? formatNumber(player.day2) : (player.day2 < 0 ? formatNumber(player.day2) : '0');
        let day2Class = player.day2 > 0 ? 'chips-positive' : (player.day2 < 0 ? 'chips-negative' : '');
        
        let day3Display = player.day3 > 0 ? formatNumber(player.day3) : (player.day3 < 0 ? formatNumber(player.day3) : '0');
        let day3Class = player.day3 > 0 ? 'chips-positive' : (player.day3 < 0 ? 'chips-negative' : '');
        
        let totalDisplay;
        let totalClass = '';
        if (player.isEliminated) {
            totalDisplay = 'Выбыл';
            totalClass = 'eliminated-status';
        } else {
            if (player.total < 0) {
                totalDisplay = '0';
                totalClass = 'chips-positive';
            } else {
                totalDisplay = formatNumber(player.total);
                totalClass = player.total > 0 ? 'chips-positive' : '';
            }
        }
        
        const row = document.createElement('tr');
        row.className = player.isEliminated ? 'search-highlight eliminated-player' : 'search-highlight';
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${positionChangeHTML}</td>
            <td class="result-column ${day1Class}">${day1Display}</td>
            <td class="result-column ${day2Class}">${day2Display}</td>
            <td class="result-column ${day3Class}">${day3Display}</td>
            <td class="result-column">-</td>
            <td class="final-total ${totalClass}">${totalDisplay}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы охоты с поиском
function fillHuntingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('huntingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="bounty-value">${formatNumber(player.bounty)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы рейтинга с поиском
function fillRatingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRatingAfterDay3();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const positionChanges = calculateRatingPositionChangesAfterDay3();
    
    const filteredRating = sortedRating.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredRating.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredRating.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const changeClass = player.change > 0 ? "rating-positive" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        const originalIndex = sortedRating.findIndex(p => p.name === player.name);
        
        row.innerHTML = `
            <td class="number-column">${originalIndex + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы результатов предыдущего турнира с поиском
function fillPreviousResultsTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        const placeClass = getPlaceClass(player.place);
        const placeEmoji = getPlaceEmoji(player.place);
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.className = 'search-highlight ' + placeClass;
        
        let status = '';
        if (player.place === 1) status = '🏆 Победитель турнира';
        else if (player.place === 2) status = '🥈 Второе место';
        else if (player.place === 3) status = '🥉 Третье место';
        else if (player.place >= 4 && player.place <= 23) status = '✅ Финалист';
        else status = '⭐ Участник турнира';
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// ========== СТАТИСТИКА ==========

// Обновление статистики
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const activeTab = document.querySelector('.tab-content.active');
    
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    let totalPlayers, averageStack;
    
    if (activeTabId === 'day1') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
    } else if (activeTabId === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
    } else if (activeTabId === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
    } else if (activeTabId === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
        averageStack = 0;
    } else if (activeTabId === 'hunting') {
        totalPlayers = huntingPlayers.length;
        averageStack = 0;
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRatingAfterDay3();
        totalPlayers = newRating.length;
        averageStack = 0;
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        totalPlayers = allPlayers.length;
        const activePlayers = allPlayers.filter(player => !player.isEliminated);
        averageStack = activePlayers.length > 0 ? 
            Math.round(activePlayers.reduce((sum, player) => sum + (player.total < 0 ? 0 : player.total), 0) / activePlayers.length) : 0;
    } else {
        totalPlayers = 0;
        averageStack = 0;
    }
    
    if (totalPlayersElement) totalPlayersElement.textContent = totalPlayers;
    if (averageStackElement) averageStackElement.textContent = averageStack;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Заполняем все таблицы
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillPreviousResultsTable();
    fillHuntingTable();
    fillRatingTable();
    fillFinalTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    
    // Показываем вкладку День 3 при загрузке
    showTab('day3');
    
    // Настраиваем поиск
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', searchPlayers);
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            document.getElementById('searchInput').value = '';
            const autocompleteResults = document.getElementById('autocompleteResults');
            if (autocompleteResults) {
                autocompleteResults.style.display = 'none';
            }
            searchPlayers();
        });
    }
    
    // Обновляем статистику
    updateStats();
});
