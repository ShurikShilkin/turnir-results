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
    { number: 24, name: "Соня Серж", entry: 3100, start: 2100, rebuy: 1000, credit: 0, exit: 0, result: 1000, comment: "" },
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

// Данные дня 3
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

// Данные дня 4
const day4Players = [
    { number: 1, name: "Сергей Ман", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 28625, result: 28625, comment: "" },
    { number: 2, name: "Jane 007", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 10500, result: 11500, comment: "" },
    { number: 3, name: "Богдан А", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 10105, result: 11105, comment: "" },
    { number: 4, name: "Саша Бел", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 7525, result: 7525, comment: "кредит оплатил" },
    { number: 5, name: "Влад Владшток", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 5295, result: 6295, comment: "" },
    { number: 6, name: "Соня Серж", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 4465, result: 5465, comment: "" },
    { number: 7, name: "Макар Аве", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 4105, result: 5105, comment: "" },
    { number: 8, name: "Михаил Козадой", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 3870, result: 4870, comment: "" },
    { number: 9, name: "Надя Жб", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 2500, exit: 4750, result: 4750, comment: "сделка -5000" },
    { number: 10, name: "Максим Spy", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 3240, result: 4240, comment: "" },
    { number: 11, name: "Саша Немощь", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 3045, result: 4045, comment: "" },
    { number: 12, name: "Egrinderolls", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 615, exit: 3770, result: 3770, comment: "Сделка -1230 кредит оплатил" },
    { number: 13, name: "Влад Сам", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 2725, result: 3725, comment: "" },
    { number: 14, name: "Иван Тре", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 0, exit: 3480, result: 3480, comment: "Кредит неоплачен - Выбыл" },
    { number: 15, name: "grooveman", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 3030, result: 3030, comment: "" },
    { number: 16, name: "Роман Лод", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 2300, result: 2300, comment: "" },
    { number: 17, name: "Полина Матыцына", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 1135, result: 2135, comment: "" },
    { number: 18, name: "Женя К1", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 695, result: 1695, comment: "" },
    { number: 19, name: "Ксения Куд", entry: 3100, start: 2100, rebuy: 0, credit: 0, deal: 0, exit: 605, result: 1605, comment: "" },
    { number: 20, name: "Шурик Шилкин", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 1045, result: 1045, comment: "" },
    { number: 21, name: "Зеньята", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 725, result: 725, comment: "" },
    { number: 22, name: "Даша Гри", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 4000, comment: "" },
    { number: 23, name: "Семён Ануфриев", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 995, exit: 0, result: 0, comment: "Сделка -1990" },
    { number: 24, name: "Даниил Ершов", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 0, comment: "" },
    { number: 25, name: "Настя К", entry: 3100, start: 2100, rebuy: 1000, credit: 0, deal: 0, exit: 0, result: 0, comment: "" },
    { number: 26, name: "Том", entry: 3100, start: 2100, rebuy: 1000, credit: 3000, deal: 7975, exit: 0, result: 0, comment: "сделка -19950, Кредит неоплачен - Выбыл" }
];

// Данные посещений для финальной таблицы
const finalAttendance = [
    { name: "Сергей Ман", attendance: 4 },
    { name: "Роман Лод", attendance: 4 },
    { name: "Jane 007", attendance: 4 },
    { name: "Богдан А", attendance: 4 },
    { name: "Иван Антипов", attendance: 3 },
    { name: "Семён Ануфриев", attendance: 4 },
    { name: "Никита Зейн", attendance: 2 },
    { name: "Полина Матыцына", attendance: 3 },
    { name: "Настя К", attendance: 3 },
    { name: "Макар Аве", attendance: 4 },
    { name: "Михаил Наб", attendance: 2 },
    { name: "Михаил Козадой", attendance: 3 },
    { name: "Николай Ж", attendance: 3 },
    { name: "Максим Spy", attendance: 4 },
    { name: "Robert Юниксфактёр", attendance: 1 },
    { name: "Влад Владшток", attendance: 4 },
    { name: "Надя Жб", attendance: 3 },
    { name: "Соня Серж", attendance: 4 },
    { name: "Саша Коч", attendance: 2 },
    { name: "Шурик Шилкин", attendance: 4 },
    { name: "Влад Сам", attendance: 2 },
    { name: "Вика Ц", attendance: 1 },
    { name: "Вова Баж", attendance: 1 },
    { name: "Кристина А", attendance: 1 },
    { name: "Саша Немощь", attendance: 2 },
    { name: "Рома АСМР", attendance: 1 },
    { name: "Юсиф Халафов", attendance: 1 },
    { name: "Egrinderolls", attendance: 4 },
    { name: "Саша Бел", attendance: 1 },
    { name: "Даша Гри", attendance: 1 },
    { name: "Артемий Мен", attendance: 1 },
    { name: "grooveman", attendance: 2 },
    { name: "Даниил Ершов", attendance: 2 },
    { name: "Инна М", attendance: 1 },
    { name: "Женя К1", attendance: 1 },
    { name: "Ксения Куд", attendance: 1 },
    { name: "Даша Хромова", attendance: 2 },
    { name: "Алина Исм", attendance: 1 },
    { name: "Иван Баж", attendance: 1 },
    { name: "Владимир Бул", attendance: 1 },
    { name: "Зеньята", attendance: 2 },
    { name: "Леонид П", attendance: 1 },
    { name: "Матвей МС", attendance: 1 },
    { name: "Том", attendance: 4 },
    { name: "Свидетель", attendance: 2 },
    { name: "Эльджан", attendance: 1 },
    { name: "Мага Кинжал", attendance: 1 },
    { name: "Айдын", attendance: 1 },
    { name: "Жахонгир", attendance: 1 },
    { name: "Иван Тре", attendance: 1 }
];

// Данные участия для финальной таблицы (только для невыбывших)
const finalEntry = [
    { name: "Сергей Ман", entry: 3000 },
    { name: "Роман Лод", entry: 3000 },
    { name: "Jane 007", entry: 3000 },
    { name: "Богдан А", entry: 3000 },
    { name: "Иван Антипов", entry: 3000 },
    { name: "Семён Ануфриев", entry: 3000 },
    { name: "Никита Зейн", entry: 3000 },
    { name: "Полина Матыцына", entry: 3000 },
    { name: "Настя К", entry: 3000 },
    { name: "Макар Аве", entry: 3000 },
    { name: "Михаил Наб", entry: 3000 },
    { name: "Михаил Козадой", entry: 3000 },
    { name: "Николай Ж", entry: 3000 },
    { name: "Максим Spy", entry: 3000 },
    { name: "Robert Юниксфактёр", entry: 3000 },
    { name: "Влад Владшток", entry: 3000 },
    { name: "Надя Жб", entry: 3000 },
    { name: "Соня Серж", entry: 3000 },
    { name: "Саша Коч", entry: 3000 },
    { name: "Шурик Шилкин", entry: 3000 },
    { name: "Влад Сам", entry: 3000 },
    { name: "Вика Ц", entry: 3000 },
    { name: "Вова Баж", entry: 3000 },
    { name: "Кристина А", entry: 3000 },
    { name: "Саша Немощь", entry: 3000 },
    { name: "Рома АСМР", entry: 3000 },
    { name: "Юсиф Халафов", entry: 3000 },
    { name: "Egrinderolls", entry: 3000 },
    { name: "Саша Бел", entry: 3000 },
    { name: "Даша Гри", entry: 3000 },
    { name: "Артемий Мен", entry: 3000 },
    { name: "grooveman", entry: 3000 },
    { name: "Даниил Ершов", entry: 3000 },
    { name: "Инна М", entry: 3000 },
    { name: "Женя К1", entry: 3000 },
    { name: "Ксения Куд", entry: 3000 },
    { name: "Даша Хромова", entry: 3000 },
    { name: "Алина Исм", entry: 3000 },
    { name: "Иван Баж", entry: 3000 },
    { name: "Владимир Бул", entry: 3000 },
    { name: "Зеньята", entry: 3000 },
    { name: "Леонид П", entry: 3000 },
    { name: "Матвей МС", entry: 3000 }
    // Выбывшим не даем 3000
];

// Данные охоты для финальной таблицы
const finalBounty = [
    { name: "Сергей Ман", bounty: 1675 },
    { name: "Иван Антипов", bounty: 1300 },
    { name: "Роман Лод", bounty: 1100 },
    { name: "Николай Ж", bounty: 1000 },
    { name: "Михаил Козадой", bounty: 875 },
    { name: "Богдан А", bounty: 800 },
    { name: "Полина Матыцына", bounty: 400 },
    { name: "Максим Spy", bounty: 400 },
    { name: "Семён Ануфриев", bounty: 375 },
    { name: "Надя Жб", bounty: 250 },
    { name: "Настя К", bounty: 125 },
    { name: "Шурик Шилкин", bounty: 125 },
    { name: "Jane 007", bounty: 100 },
    { name: "Влад Владшток", bounty: 100 },
    { name: "Egrinderolls", bounty: 75 }
];

// Данные постоянного бонуса для финальной таблицы
const finalPermanent = [
    { name: "Сергей Ман", permanent: 4000 },
    { name: "Роман Лод", permanent: 4000 },
    { name: "Богдан А", permanent: 4000 },
    { name: "Максим Spy", permanent: 4000 },
    { name: "Семён Ануфриев", permanent: 4000 },
    { name: "Шурик Шилкин", permanent: 4000 },
    { name: "Jane 007", permanent: 4000 },
    { name: "Влад Владшток", permanent: 4000 },
    { name: "Egrinderolls", permanent: 4000 },
    { name: "Макар Аве", permanent: 4000 },
    { name: "Соня Серж", permanent: 4000 }
];

// Данные блайндов
const blindsData = [
    { number: 1, start: "17-00", end: "17-25", sb: 5, bb: 10, ante: 10 },
    { number: 2, start: "17-25", end: "17-50", sb: 10, bb: 20, ante: 20 },
    { number: 3, start: "18-00", end: "18-15", sb: 20, bb: 40, ante: 40 },
    { number: 4, start: "18-15", end: "18-30", sb: 35, bb: 70, ante: 70 },
    { number: 5, start: "18-30", end: "18-50", sb: 50, bb: 100, ante: 100 },
    { number: 6, start: "19-00", end: "19-15", sb: 75, bb: 150, ante: 150 },
    { number: 7, start: "19-15", end: "19-30", sb: 100, bb: 200, ante: 200 },
    { number: 8, start: "19-30", end: "19-50", sb: 150, bb: 300, ante: 300 },
    { number: 9, start: "20-00", end: "20-15", sb: 200, bb: 400, ante: 400 },
    { number: 10, start: "20-15", end: "20-30", sb: 300, bb: 600, ante: 600 },
    { number: 11, start: "20-30", end: "20-50", sb: 400, bb: 800, ante: 800 },
    { number: 12, start: "21-00", end: "21-15", sb: 600, bb: 1200, ante: 1200 },
    { number: 13, start: "21-15", end: "21-30", sb: 800, bb: 1600, ante: 1600 },
    { number: 14, start: "21-30", end: "21-50", sb: 1100, bb: 2200, ante: 2200 },
    { number: 15, start: "22-00", end: "22-15", sb: 1500, bb: 3000, ante: 3000 },
    { number: 16, start: "22-15", end: "22-30", sb: 2000, bb: 4000, ante: 4000 },
    { number: 17, start: "22-30", end: "22-50", sb: 3000, bb: 6000, ante: 6000 },
    { number: 18, start: "23-00", end: "23-15", sb: 4000, bb: 8000, ante: 8000 },
    { number: 19, start: "23-15", end: "23-30", sb: 5000, bb: 10000, ante: 10000 },
    { number: 20, start: "23-30", end: "23-45", sb: 6000, bb: 12000, ante: 12000 },
    { number: 21, start: "23-45", end: "0-00", sb: 7500, bb: 15000, ante: 15000 },
    { number: 22, start: "0-00", end: "0-10", sb: 9000, bb: 18000, ante: 18000 },
    { number: 23, start: "0-10", end: "0-20", sb: 10500, bb: 21000, ante: 21000 },
    { number: 24, start: "0-20", end: "0-30", sb: 12500, bb: 25000, ante: 25000 }
];

// Предыдущий рейтинг (после 3-х дней)
const previousRating = [
    { name: "Михаил Наб", rating: 653 },
    { name: "Семён Ануфриев", rating: 601 },
    { name: "Robert Юниксфактёр", rating: 488 },
    { name: "Шурик Шилкин", rating: 438 },
    { name: "Jane 007", rating: 415 },
    { name: "Максим Spy", rating: 398 },
    { name: "Богдан А", rating: 388 },
    { name: "Михаил Козадой", rating: 374 },
    { name: "Сергей Ман", rating: 357 },
    { name: "grooveman", rating: 354 },
    { name: "Свидетель", rating: 305 },
    { name: "Egrinderolls", rating: 298 },
    { name: "Влад Владшток", rating: 286 },
    { name: "Никита Зейн", rating: 285 },
    { name: "Полина Матыцына", rating: 267 },
    { name: "Роман Лод", rating: 262 },
    { name: "Кристина А", rating: 256 },
    { name: "Дмитрий Ник", rating: 230 },
    { name: "Настя К", rating: 219 },
    { name: "Лев Р", rating: 219 },
    { name: "Макар Аве", rating: 209 },
    { name: "Саша Коч", rating: 205 },
    { name: "Иван Антипов", rating: 182 },
    { name: "Соня Серж", rating: 162 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Том", rating: 149 },
    { name: "Серж", rating: 148 },
    { name: "Леонид П", rating: 137 },
    { name: "Инна М", rating: 103 },
    { name: "Даня Д", rating: 101 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Наташа Бонд", rating: 93 },
    { name: "Николай Ж", rating: 93 },
    { name: "Искандер", rating: 87 },
    { name: "Оксана Б", rating: 87 },
    { name: "Михаил Т", rating: 79 },
    { name: "Ксения Куд", rating: 78 },
    { name: "Федор К", rating: 72 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Миша Скиф", rating: 70 },
    { name: "Разаман Рах", rating: 70 },
    { name: "Надя Жб", rating: 67 },
    { name: "Иван Баж", rating: 64 },
    { name: "Артемий Мен", rating: 63 },
    { name: "Даша Хромова", rating: 63 },
    { name: "Вова Баж", rating: 60 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Соня Кур", rating: 46 },
    { name: "Алина Исм", rating: 45 },
    { name: "Даша Гри", rating: 40 },
    { name: "Артём 007", rating: 40 },
    { name: "Вика Ц", rating: 35 },
    { name: "Евгений Ц", rating: 35 },
    { name: "Рома АСМР", rating: 34 },
    { name: "Юсиф Халафов", rating: 32 },
    { name: "Аня Гам", rating: 31 },
    { name: "Никита Сизов", rating: 31 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Влад Сам", rating: 29 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Даниил Ершов", rating: 26 },
    { name: "Родион К", rating: 26 },
    { name: "Эльджан", rating: 24 },
    { name: "Вика Ч", rating: 23 },
    { name: "Владимир Бул", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Мага Кинжал", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Саша Немощь", rating: 22 },
    { name: "Дарья Шев", rating: 22 },
    { name: "Славяна", rating: 22 },
    { name: "Жахонгир", rating: 21 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Айдын", rating: 20 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Матвей МС", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Зеньята", rating: 19 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 }
];

// Добавки рейтинга после 4-го дня
const ratingAdditionsDay4 = [
    { name: "Сергей Ман", addition: 95 },
    { name: "Jane 007", addition: 67 },
    { name: "Богдан А", addition: 55 },
    { name: "Саша Бел", addition: 48 },
    { name: "Влад Владшток", addition: 43 },
    { name: "Соня Серж", addition: 39 },
    { name: "Макар Аве", addition: 36 },
    { name: "Михаил Козадой", addition: 34 },
    { name: "Надя Жб", addition: 32 },
    { name: "Максим Spy", addition: 30 },
    { name: "Саша Немощь", addition: 29 },
    { name: "Egrinderolls", addition: 28 },
    { name: "Влад Сам", addition: 26 },
    { name: "Иван Тре", addition: 25 },
    { name: "grooveman", addition: 25 },
    { name: "Роман Лод", addition: 24 },
    { name: "Полина Матыцына", addition: 23 },
    { name: "Женя К1", addition: 22 },
    { name: "Ксения Куд", addition: 22 },
    { name: "Шурик Шилкин", addition: 21 },
    { name: "Зеньята", addition: 21 },
    { name: "Даша Гри", addition: 20 },
    { name: "Семён Ануфриев", addition: 20 },
    { name: "Даниил Ершов", addition: 19 },
    { name: "Настя К", addition: 19 },
    { name: "Том", addition: 19 }
];

// Данные посещений для рейтинга
const ratingAttendance = [
    { name: "Михаил Наб", attendance: 8 },
    { name: "Семён Ануфриев", attendance: 12 },
    { name: "Robert Юниксфактёр", attendance: 8 },
    { name: "Jane 007", attendance: 12 },
    { name: "Шурик Шилкин", attendance: 12 },
    { name: "Сергей Ман", attendance: 9 },
    { name: "Богдан А", attendance: 12 },
    { name: "Максим Spy", attendance: 12 },
    { name: "Михаил Козадой", attendance: 10 },
    { name: "grooveman", attendance: 9 },
    { name: "Влад Владшток", attendance: 11 },
    { name: "Egrinderolls", attendance: 10 },
    { name: "Свидетель", attendance: 7 },
    { name: "Полина Матыцына", attendance: 7 },
    { name: "Роман Лод", attendance: 8 },
    { name: "Никита Зейн", attendance: 6 },
    { name: "Кристина А", attendance: 6 },
    { name: "Макар Аве", attendance: 7 },
    { name: "Настя К", attendance: 5 },
    { name: "Дмитрий Ник", attendance: 5 },
    { name: "Лев Р", attendance: 4 },
    { name: "Саша Коч", attendance: 6 },
    { name: "Соня Серж", attendance: 7 },
    { name: "Иван Антипов", attendance: 4 },
    { name: "Том", attendance: 7 },
    { name: "Роман Егоров", attendance: 4 },
    { name: "Серж", attendance: 3 },
    { name: "Леонид П", attendance: 3 },
    { name: "Инна М", attendance: 5 },
    { name: "Даня Д", attendance: 3 },
    { name: "Ксения Куд", attendance: 4 },
    { name: "Надя Жб", attendance: 3 },
    { name: "Даша Yellow", attendance: 2 },
    { name: "Наташа Бонд", attendance: 3 },
    { name: "Николай Ж", attendance: 3 },
    { name: "Искандер", attendance: 3 },
    { name: "Оксана Б", attendance: 2 },
    { name: "Михаил Т", attendance: 2 },
    { name: "Федор К", attendance: 3 },
    { name: "Никита Yellow", attendance: 1 },
    { name: "Миша Скиф", attendance: 2 },
    { name: "Разаман Рах", attendance: 1 },
    { name: "Иван Баж", attendance: 3 },
    { name: "Артемий Мен", attendance: 2 },
    { name: "Даша Хромова", attendance: 3 },
    { name: "Даша Гри", attendance: 3 },
    { name: "Вова Баж", attendance: 2 },
    { name: "Макс Пиво", attendance: 1 },
    { name: "Влад Сам", attendance: 2 },
    { name: "Саша Немощь", attendance: 2 },
    { name: "Петя Федоров", attendance: 1 },
    { name: "Саша Бел", attendance: 1 },
    { name: "Соня Кур", attendance: 2 },
    { name: "Даниил Ершов", attendance: 2 },
    { name: "Алина Исм", attendance: 2 },
    { name: "Зеньята", attendance: 2 },
    { name: "Артём 007", attendance: 1 },
    { name: "Вика Ц", attendance: 1 },
    { name: "Евгений Ц", attendance: 2 },
    { name: "Рома АСМР", attendance: 1 },
    { name: "Юсиф Халафов", attendance: 1 },
    { name: "Аня Гам", attendance: 1 },
    { name: "Никита Сизов", attendance: 1 },
    { name: "Гавриил Морозов", attendance: 1 },
    { name: "Родион Шашурин", attendance: 1 },
    { name: "Дима Жур", attendance: 1 },
    { name: "Анна К", attendance: 1 },
    { name: "Родион К", attendance: 1 },
    { name: "Иван Тре", attendance: 1 },
    { name: "Эльджан", attendance: 1 },
    { name: "Вика Ч", attendance: 1 },
    { name: "Владимир Бул", attendance: 1 },
    { name: "Всеволод Кузнецов", attendance: 1 },
    { name: "Илья Без", attendance: 1 },
    { name: "Мага Кинжал", attendance: 1 },
    { name: "Эмиль", attendance: 1 },
    { name: "Дарья Шев", attendance: 1 },
    { name: "Славяна", attendance: 1 },
    { name: "Женя К1", attendance: 1 },
    { name: "Жахонгир", attendance: 1 },
    { name: "Руфат Макиато", attendance: 1 },
    { name: "Айдын", attendance: 1 },
    { name: "Влад Голубев", attendance: 1 },
    { name: "Матвей МС", attendance: 1 },
    { name: "Михаил Таб", attendance: 1 },
    { name: "Ирина Ага", attendance: 1 },
    { name: "Александр Исаев", attendance: 1 },
    { name: "Даня КДД", attendance: 1 },
    { name: "Вова Гриненко", attendance: 1 }
];

// ========== РУЧНЫЕ КОРРЕКТИРОВКИ ДЛЯ ФИНАЛА ==========
const manualDealAdjustments = {
    "Сергей Ман": 2000,
    "Jane 007": 5000,
    "Семён Ануфриев": 1985,
    "Надя Жб": 5000,
    "Egrinderolls": 8635,
    "Том": 15950,
    "Влад Владшток": 1990,
    "Саша Бел": 3500
};

// ========== ОСНОВНЫЕ ФУНКЦИИ ==========

// Функция переключения вкладок
function showTab(tabName) {
    if (!tabName) tabName = 'final';
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    
    const tabElement = document.getElementById(tabName);
    if (tabElement) tabElement.classList.add('active');
    
    if (tabName !== 'rating' && tabName !== 'previousResults' && tabName !== 'blinds') {
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
        'blinds': 'Структура блайндов',
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

// Заполнение таблицы блайндов
function fillBlindsTable() {
    const tableBody = document.getElementById('blindsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    blindsData.forEach((blind) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="number-column">${blind.number}</td>
            <td>${blind.start}</td>
            <td>${blind.end}</td>
            <td>${formatNumber(blind.sb)}</td>
            <td>${formatNumber(blind.bb)}</td>
            <td>${formatNumber(blind.ante)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ========== ФИНАЛЬНАЯ ТАБЛИЦА ==========

// Сохраняем предыдущее состояние финальной таблицы (отборочные дни 1+2+3)
let previousFinalTable = [];

// Извлечение суммы сделки из комментария (больше не используется, но оставим)
function extractDealFromComment(comment) {
    if (!comment) return 0;
    const dealMatch = comment.match(/сделка\s*(-?\d+)/i);
    return dealMatch ? parseInt(dealMatch[1], 10) || 0 : 0;
}

// Функция для нормализации значения (отрицательные в 0)
function normalizeValue(value) {
    return value < 0 ? 0 : value;
}

// Получение всех игроков для финальной таблицы (отборочные дни 1+2+3+4)
function getAllFinalPlayers() {
    const playersMap = new Map();
    
    // Функция для добавления/обновления игрока
    function addOrUpdatePlayer(name, dayResult, isEliminated = false) {
        if (!playersMap.has(name)) {
            playersMap.set(name, {
                name: name,
                qualifying: dayResult,
                isEliminated: isEliminated
            });
        } else {
            const existingPlayer = playersMap.get(name);
            existingPlayer.qualifying = existingPlayer.qualifying + dayResult;
            existingPlayer.isEliminated = existingPlayer.isEliminated || isEliminated;
        }
    }
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        addOrUpdatePlayer(player.name, player.result);
    });
    
    // Добавляем игроков из дня 2
    day2Players.forEach(player => {
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        addOrUpdatePlayer(player.name, player.result, isEliminated);
    });
    
    // Добавляем игроков из дня 3
    day3Players.forEach(player => {
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        addOrUpdatePlayer(player.name, player.result, isEliminated);
    });
    
    // Добавляем игроков из дня 4
    day4Players.forEach(player => {
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл") || 
                            player.name === "Иван Тре" || 
                            player.name === "Том";
        addOrUpdatePlayer(player.name, player.result, isEliminated);
    });
    
    // Применяем ручные корректировки сделок
    const players = Array.from(playersMap.values());
    players.forEach(player => {
        const adjustment = manualDealAdjustments[player.name] || 0;
        if (adjustment > 0) {
            player.qualifying = player.qualifying - adjustment;
        }
        
        // Нормализуем (отрицательные в 0)
        if (player.qualifying < 0) {
            player.qualifying = 0;
        }
    });
    
    return players;
}

// Функция для получения игроков только по 1+2+3 дням (для сравнения позиций)
function getQualifyingPlayersBeforeDay4() {
    const playersMap = new Map();
    
    // Функция для добавления/обновления игрока
    function addOrUpdatePlayer(name, dayResult, isEliminated = false) {
        if (!playersMap.has(name)) {
            playersMap.set(name, {
                name: name,
                total: dayResult,
                isEliminated: isEliminated
            });
        } else {
            const existingPlayer = playersMap.get(name);
            existingPlayer.total = existingPlayer.total + dayResult;
            existingPlayer.isEliminated = existingPlayer.isEliminated || isEliminated;
        }
    }
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        addOrUpdatePlayer(player.name, player.result);
    });
    
    // Добавляем игроков из дня 2
    day2Players.forEach(player => {
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        addOrUpdatePlayer(player.name, player.result, isEliminated);
    });
    
    // Добавляем игроков из дня 3
    day3Players.forEach(player => {
        const isEliminated = player.comment.includes("Кредит неоплачен - Выбыл");
        addOrUpdatePlayer(player.name, player.result, isEliminated);
    });
    
    // Применяем ручные корректировки сделок для дней 1-3
    const players = Array.from(playersMap.values());
    players.forEach(player => {
        const adjustment = manualDealAdjustments[player.name] || 0;
        if (adjustment > 0) {
            player.total = player.total - adjustment;
        }
        if (player.total < 0) {
            player.total = 0;
        }
    });
    
    return players;
}

// Заполнение финальной таблицы
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // Получаем текущее состояние (после Дня 4) с нормализованными значениями
    const allPlayers = getAllFinalPlayers();
    
    // Сохраняем предыдущее состояние (отборочные дни 1+2+3) для сравнения позиций
    const qualifyingPlayersBeforeDay4 = getQualifyingPlayersBeforeDay4();
    // Сортируем по убыванию total для определения позиций после 1+2+3 дней
    const sortedBeforeDay4 = qualifyingPlayersBeforeDay4
        .filter(p => !p.isEliminated)
        .sort((a, b) => b.total - a.total);
    
    // Создаем мапы для быстрого доступа к данным
    const attendanceMap = new Map();
    finalAttendance.forEach(item => attendanceMap.set(item.name, item.attendance));
    
    const entryMap = new Map();
    finalEntry.forEach(item => entryMap.set(item.name, item.entry));
    
    const bountyMap = new Map();
    finalBounty.forEach(item => bountyMap.set(item.name, item.bounty));
    
    const permanentMap = new Map();
    finalPermanent.forEach(item => permanentMap.set(item.name, item.permanent));
    
    // Порядок выбывших
    const eliminatedOrder = ["Иван Тре", "Том", "Жахонгир", "Эльджан", "Мага Кинжал", "Айдын", "Свидетель"];
    
    // Сначала рассчитываем итоговые суммы для всех игроков
    const playersWithTotals = allPlayers.map(player => {
        const attendance = attendanceMap.get(player.name) || 0;
        const entry = entryMap.get(player.name) || 0;
        const bounty = bountyMap.get(player.name) || 0;
        const permanent = permanentMap.get(player.name) || 0;
        
        const isEliminated = eliminatedOrder.includes(player.name) || player.isEliminated;
        
        // Рассчитываем итог: qualifying (с учетом вычета сделок) + участие + охота + постоянный
        let totalChips = player.qualifying;
        if (!isEliminated) {
            totalChips += (entry || 0) + (bounty || 0) + (permanent || 0);
        } else {
            totalChips = 0; // Выбывшим ставим 0
        }
        
        return {
            ...player,
            attendance,
            entry,
            bounty,
            permanent,
            isEliminated,
            totalChips
        };
    });
    
    // Разделяем на активных и выбывших
    const eliminatedPlayers = playersWithTotals.filter(p => p.isEliminated);
    const activePlayers = playersWithTotals.filter(p => !p.isEliminated);
    
    // СОРТИРУЕМ АКТИВНЫХ ПО ИТОГУ (totalChips) от большего к меньшему
    activePlayers.sort((a, b) => b.totalChips - a.totalChips);
    
    // Сортируем выбывших в заданном порядке
    eliminatedPlayers.sort((a, b) => {
        const indexA = eliminatedOrder.indexOf(a.name);
        const indexB = eliminatedOrder.indexOf(b.name);
        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
    
    // Объединяем
    const finalPlayers = [...activePlayers, ...eliminatedPlayers];
    
    finalPlayers.forEach((player, currentIndex) => {
        // Определяем изменение позиции относительно отборочных дней (1+2+3)
        let positionChangeHTML = '';
        if (!player.isEliminated) {
            // Находим индекс игрока в таблице после 1+2+3 дней
            const previousIndex = sortedBeforeDay4.findIndex(p => p.name === player.name);
            if (previousIndex !== -1) {
                const change = previousIndex - currentIndex; // положительное = поднялся, отрицательное = опустился
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
        
        const row = document.createElement('tr');
        if (player.isEliminated) {
            row.className = 'eliminated-player';
        }
        
        row.innerHTML = `
            <td class="number-column">${currentIndex + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${positionChangeHTML}</td>
            <td class="result-column">${formatNumber(player.qualifying)}</td>
            <td class="attendance-value">${player.attendance}</td>
            <td class="entry-value">${(!player.isEliminated && player.entry > 0) ? formatNumber(player.entry) : '-'}</td>
            <td class="bounty-value">${(!player.isEliminated && player.bounty > 0) ? formatNumber(player.bounty) : '-'}</td>
            <td class="permanent-value">${(!player.isEliminated && player.permanent > 0) ? formatNumber(player.permanent) : '-'}</td>
            <td class="final-total ${player.isEliminated ? 'eliminated-status' : 'chips-positive'}">${player.isEliminated ? 'Выбыл' : formatNumber(player.totalChips)}</td>
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

// Заполнение таблицы Дня 4
function fillDay4Table() {
    const tableBody = document.getElementById('day4Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    day4Players.forEach((player) => {
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

// ========== РЕЙТИНГ ==========

// Расчет нового рейтинга после четвертого дня
function calculateNewRating() {
    const newRating = [];
    
    const previousRatingMap = new Map();
    previousRating.forEach(player => {
        previousRatingMap.set(player.name, player.rating);
    });
    
    const additionMap = new Map();
    ratingAdditionsDay4.forEach(player => {
        additionMap.set(player.name, player.addition);
    });
    
    const allPlayerNames = new Set([
        ...previousRating.map(p => p.name),
        ...ratingAdditionsDay4.map(p => p.name)
    ]);
    
    allPlayerNames.forEach(playerName => {
        const previousRatingValue = previousRatingMap.get(playerName) || 0;
        const addition = additionMap.get(playerName) || 0;
        const newRatingValue = previousRatingValue + addition;
        
        newRating.push({
            name: playerName,
            previousRating: previousRatingValue,
            change: addition,
            newRating: newRatingValue
        });
    });
    
    return newRating;
}

// Расчет изменений позиций в рейтинге
function calculateRatingPositionChanges() {
    const newRating = calculateNewRating();
    
    const sortedPreviousRating = [...previousRating].sort((a, b) => b.rating - a.rating);
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    const positionChanges = new Map();
    
    sortedNewRating.forEach((player, newIndex) => {
        const oldIndex = sortedPreviousRating.findIndex(p => p.name === player.name);
        
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
    
    const newRating = calculateNewRating();
    const positionChanges = calculateRatingPositionChanges();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    // Создаем мапу для посещений
    const attendanceMap = new Map();
    ratingAttendance.forEach(item => attendanceMap.set(item.name, item.attendance));
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const changeClass = player.change > 0 ? "rating-positive" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        const attendance = attendanceMap.get(player.name) || 0;
        
        const isTop19 = index < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        if (isTop19 || isNikitaYellow) row.className = 'rating-highlight';
        
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="${nameClass}">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="attendance-value">${attendance}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
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
        ...day1Players.map(p => ({ name: p.name })),
        ...day2Players.map(p => ({ name: p.name })),
        ...day3Players.map(p => ({ name: p.name })),
        ...day4Players.map(p => ({ name: p.name })),
        ...calculateNewRating().map(p => ({ name: p.name })),
        ...previousRating.map(p => ({ name: p.name }))
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
            'day4': fillDay4Table,
            'previousResults': fillPreviousResultsTable,
            'blinds': fillBlindsTable,
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
    } else if (activeTabId === 'day4') {
        foundPlayers = day4Players.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillDay4TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'previousResults') {
        foundPlayers = previousTournamentResults.filter(player => player.name.toLowerCase().includes(searchTerm));
        fillPreviousResultsTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'blinds') {
        fillBlindsTable();
        foundPlayers = [];
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
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

// Заполнение таблицы дня 4 с поиском
function fillDay4TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day4Table');
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
    
    // Создаем мапы для быстрого доступа к данным
    const attendanceMap = new Map();
    finalAttendance.forEach(item => attendanceMap.set(item.name, item.attendance));
    
    const entryMap = new Map();
    finalEntry.forEach(item => entryMap.set(item.name, item.entry));
    
    const bountyMap = new Map();
    finalBounty.forEach(item => bountyMap.set(item.name, item.bounty));
    
    const permanentMap = new Map();
    finalPermanent.forEach(item => permanentMap.set(item.name, item.permanent));
    
    // Порядок выбывших
    const eliminatedOrder = ["Иван Тре", "Том", "Жахонгир", "Эльджан", "Мага Кинжал", "Айдын", "Свидетель"];
    
    const eliminatedPlayers = foundPlayers.filter(p => 
        eliminatedOrder.includes(p.name) || p.isEliminated
    );
    const activePlayers = foundPlayers.filter(p => 
        !eliminatedOrder.includes(p.name) && !p.isEliminated
    );
    
    activePlayers.sort((a, b) => b.qualifying - a.qualifying);
    
    eliminatedPlayers.sort((a, b) => {
        const indexA = eliminatedOrder.indexOf(a.name);
        const indexB = eliminatedOrder.indexOf(b.name);
        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
    
    const finalFoundPlayers = [...activePlayers, ...eliminatedPlayers];
    
    finalFoundPlayers.forEach((player, index) => {
        // Получаем дополнительные данные
        const attendance = attendanceMap.get(player.name) || 0;
        const entry = entryMap.get(player.name) || 0;
        const bounty = bountyMap.get(player.name) || 0;
        const permanent = permanentMap.get(player.name) || 0;
        
        // Определяем, выбыл ли игрок
        const isEliminated = eliminatedOrder.includes(player.name) || player.isEliminated;
        
        // Рассчитываем итог
        let totalChips = player.qualifying;
        if (!isEliminated) {
            totalChips += (entry || 0) + (bounty || 0) + (permanent || 0);
        } else {
            totalChips = 0;
        }
        
        const row = document.createElement('tr');
        row.className = isEliminated ? 'search-highlight eliminated-player' : 'search-highlight';
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>-</td>
            <td class="result-column">${formatNumber(player.qualifying)}</td>
            <td class="attendance-value">${attendance}</td>
            <td class="entry-value">${(!isEliminated && entry > 0) ? formatNumber(entry) : '-'}</td>
            <td class="bounty-value">${(!isEliminated && bounty > 0) ? formatNumber(bounty) : '-'}</td>
            <td class="permanent-value">${(!isEliminated && permanent > 0) ? formatNumber(permanent) : '-'}</td>
            <td class="final-total ${isEliminated ? 'eliminated-status' : 'chips-positive'}">${isEliminated ? 'Выбыл' : formatNumber(totalChips)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы рейтинга с поиском
function fillRatingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRating();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const positionChanges = calculateRatingPositionChanges();
    
    // Создаем мапу для посещений
    const attendanceMap = new Map();
    ratingAttendance.forEach(item => attendanceMap.set(item.name, item.attendance));
    
    const filteredRating = sortedRating.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredRating.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
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
        const attendance = attendanceMap.get(player.name) || 0;
        
        const originalIndex = sortedRating.findIndex(p => p.name === player.name);
        
        row.innerHTML = `
            <td class="number-column">${originalIndex + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="attendance-value">${attendance}</td>
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
    } else if (activeTabId === 'day4') {
        totalPlayers = day4Players.length;
        averageStack = calculateAverageStack();
    } else if (activeTabId === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
        averageStack = 0;
    } else if (activeTabId === 'blinds') {
        totalPlayers = 0;
        averageStack = 0;
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        totalPlayers = newRating.length;
        averageStack = 0;
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        totalPlayers = allPlayers.length;
        const eliminatedOrder = ["Иван Тре", "Том", "Жахонгир", "Эльджан", "Мага Кинжал", "Айдын", "Свидетель"];
        const activePlayers = allPlayers.filter(player => 
            !eliminatedOrder.includes(player.name) && !player.isEliminated
        );
        averageStack = activePlayers.length > 0 ? 
            Math.round(activePlayers.reduce((sum, player) => sum + player.qualifying, 0) / activePlayers.length) : 0;
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
    fillDay4Table();
    fillPreviousResultsTable();
    fillBlindsTable();
    fillRatingTable();
    fillFinalTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    
    // Показываем вкладку Финал при загрузке
    showTab('final');
    
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
