// Данные игроков дня 1 (с переименованием Данила Dih в Даня Д)
const day1Players = [
    { number: 1, name: "Настя К", entry: 4100, start: 2100, rebuy: 0, exit: 17955, result: 19955 },
    { number: 2, name: "Максим Spy", entry: 4100, start: 2100, rebuy: 0, exit: 12980, result: 14980 },
    { number: 3, name: "Макс Пиво", entry: 4100, start: 2100, rebuy: 0, exit: 11495, result: 13495 },
    { number: 4, name: "Наташа Бонд", entry: 4100, start: 2100, rebuy: 0, exit: 10120, result: 12120 },
    { number: 5, name: "Robert Юниксфактёр", entry: 4100, start: 2100, rebuy: 2000, exit: 10025, result: 10025 },
    { number: 6, name: "Дмитрий Ник", entry: 4100, start: 2100, rebuy: 2000, exit: 9915, result: 9915 },
    { number: 7, name: "Сергей Ман", entry: 4100, start: 2100, rebuy: 0, exit: 6350, result: 8350 },
    { number: 8, name: "Влад Владшток", entry: 4100, start: 2100, rebuy: 0, exit: 3330, result: 5330 },
    { number: 9, name: "Шурик Шилкин", entry: 4100, start: 2100, rebuy: 0, exit: 2815, result: 4815 },
    { number: 10, name: "Ксения Куд", entry: 4100, start: 2100, rebuy: 2000, exit: 4445, result: 4445 },
    { number: 11, name: "Родион Шашурин", entry: 4100, start: 2100, rebuy: 0, exit: 2400, result: 4400 },
    { number: 12, name: "Роман Егоров", entry: 4100, start: 2100, rebuy: 2000, exit: 4170, result: 4170 },
    { number: 13, name: "Богдан А", entry: 4100, start: 2100, rebuy: 2000, exit: 3760, result: 3760 },
    { number: 14, name: "Родион К", entry: 4100, start: 2100, rebuy: 0, exit: 145, result: 2145 },
    { number: 15, name: "Искандер", entry: 4100, start: 2100, rebuy: 2000, exit: 2140, result: 2140 },
    { number: 16, name: "Jane 007", entry: 4100, start: 2100, rebuy: 0, exit: 125, result: 2125 },
    { number: 17, name: "Саша Коч", entry: 4100, start: 2100, rebuy: 0, exit: 0, result: 2000 },
    { number: 18, name: "Михаил Козадой", entry: 4100, start: 2100, rebuy: 2000, exit: 1900, result: 1900 },
    { number: 19, name: "Илья Без", entry: 4100, start: 2100, rebuy: 2000, exit: 130, result: 130 },
    { number: 20, name: "Славяна", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 21, name: "Семён Ануфриев", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 22, name: "Egrinderolls", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 23, name: "Даня Д", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 24, name: "Влад Голубев", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 25, name: "Полина Матыцына", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 26, name: "Том", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 27, name: "Федор К", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 28, name: "Ирина Ага", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 }
];

// Данные игроков дня 2
const day2Players = [
    { number: 1, name: "grooveman", entry: 4100, start: 2100, rebuy: 0, exit: 26605, result: 28605 },
    { number: 2, name: "Семён Ануфриев", entry: 4100, start: 2100, rebuy: 0, exit: 17635, result: 19635 },
    { number: 3, name: "Шурик Шилкин", entry: 4100, start: 2100, rebuy: 0, exit: 14195, result: 16195 },
    { number: 4, name: "Леонид П", entry: 4100, start: 2100, rebuy: 2000, exit: 15880, result: 15880 },
    { number: 5, name: "Михаил Козадой", entry: 4100, start: 2100, rebuy: 0, exit: 12590, result: 14590 },
    { number: 6, name: "Дмитрий Ник", entry: 4100, start: 2100, rebuy: 0, exit: 8025, result: 10025 },
    { number: 7, name: "Максим Spy", entry: 4100, start: 2100, rebuy: 0, exit: 6535, result: 8535 },
    { number: 8, name: "Даня Д", entry: 4100, start: 2100, rebuy: 2000, exit: 6495, result: 6495 },
    { number: 9, name: "Настя К", entry: 4100, start: 2100, rebuy: 0, exit: 3880, result: 5880 },
    { number: 10, name: "Макар Аве", entry: 4100, start: 2100, rebuy: 0, exit: 2395, result: 4395 },
    { number: 11, name: "Аня Гам", entry: 4100, start: 2100, rebuy: 0, exit: 1885, result: 3885 },
    { number: 12, name: "Robert Юниксфактёр", entry: 4100, start: 2100, rebuy: 2000, exit: 3620, result: 3620 },
    { number: 13, name: "Полина Матыцына", entry: 4100, start: 2100, rebuy: 0, exit: 0, result: 2000 },
    { number: 14, name: "Кристина А", entry: 4100, start: 2100, rebuy: 2000, exit: 1360, result: 1360 },
    { number: 15, name: "Вова Баж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 16, name: "Искандер", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 17, name: "Jane 007", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 18, name: "Никита Зейн", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 19, name: "Наташа Бонд", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 20, name: "Свидетель", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 21, name: "Даша Гри", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 22, name: "Влад Владшток", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 23, name: "Иван Баж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 24, name: "Ксения Куд", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 25, name: "Роман Лод", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 26, name: "Инна М", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 27, name: "Сергей Ман", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 28, name: "Лев Р", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 29, name: "Соня Серж", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 30, name: "Евгений Ц", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 31, name: "Богдан А", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 }
];

// Данные для дня 3 (пока пустые)
const day3Players = [];

// Обновленные данные для охоты за головами
const bountyPlayers = [
    { name: "grooveman", bounty: 2300 },
    { name: "Настя К", bounty: 1700 },
    { name: "Максим Spy", bounty: 1200 },
    { name: "Искандер", bounty: 1050 },
    { name: "Михаил Наб", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "Роман Егоров", bounty: 1000 },
    { name: "Семён Ануфриев", bounty: 700 },
    { name: "Лев Р", bounty: 500 },
    { name: "Свидетель", bounty: 500 },
    { name: "Никита Зейн", bounty: 500 },
    { name: "Jane 007", bounty: 400 },
    { name: "Михаил Козадой", bounty: 400 },
    { name: "Серж", bounty: 400 },
    { name: "Даша Yellow", bounty: 400 },
    { name: "Оксана Б", bounty: 400 },
    { name: "Вова Баж", bounty: 400 },
    { name: "Полина Матыцына", bounty: 300 },
    { name: "Egrinderolls", bounty: 300 },
    { name: "Robert Юниксфактёр", bounty: 250 },
    { name: "Богдан А", bounty: 200 },
    { name: "Влад Владшток", bounty: 200 },
    { name: "Саша Коч", bounty: 200 }
];

// Предыдущий рейтинг (из старого турнира)
const previousRatingData = [
    { name: "Михаил Наб", rating: 312 },
    { name: "Robert Юниксфактёр", rating: 279 },
    { name: "Максим Spy", rating: 209 },
    { name: "Шурик Шилкин", rating: 206 },
    { name: "Лев Р", rating: 199 },
    { name: "Богдан А", rating: 199 },
    { name: "Свидетель", rating: 196 },
    { name: "Jane 007", rating: 170 },
    { name: "Семён Ануфриев", rating: 164 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Михаил Козадой", rating: 154 },
    { name: "Egrinderolls", rating: 141 },
    { name: "Полина Матыцына", rating: 139 },
    { name: "Саша Коч", rating: 139 },
    { name: "grooveman", rating: 125 },
    { name: "Никита Зейн", rating: 122 },
    { name: "Влад Владшток", rating: 112 },
    { name: "Серж", rating: 103 },
    { name: "Настя К", rating: 99 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Оксана Б", rating: 87 },
    { name: "Федор К", rating: 72 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Искандер", rating: 61 },
    { name: "Инна М", rating: 58 },
    { name: "Кристина А", rating: 57 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Дмитрий Ник", rating: 55 },
    { name: "Сергей Ман", rating: 50 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Наташа Бонд", rating: 49 },
    { name: "Иван Антипов", rating: 47 },
    { name: "Соня Кур", rating: 46 },
    { name: "Артём 007", rating: 40 },
    { name: "Михаил Т", rating: 37 },
    { name: "Ксения Куд", rating: 31 },
    { name: "Том", rating: 31 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Родион К", rating: 26 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Роман Лод", rating: 22 },
    { name: "Славяна", rating: 22 },
    { name: "Даня Д", rating: 21 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Даша Хромова", rating: 18 },
    { name: "Даша Гри", rating: 17 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Евгений Ц", rating: 16 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 }
];

// Рейтинг изменения за день 2
const day2RatingChanges = [
    { name: "grooveman", change: 104 },
    { name: "Семён Ануфриев", change: 74 },
    { name: "Шурик Шилкин", change: 60 },
    { name: "Леонид П", change: 52 },
    { name: "Михаил Козадой", change: 47 },
    { name: "Дмитрий Ник", change: 43 },
    { name: "Максим Spy", change: 39 },
    { name: "Даня Д", change: 37 },
    { name: "Настя К", change: 35 },
    { name: "Макар Аве", change: 33 },
    { name: "Аня Гам", change: 31 },
    { name: "Robert Юниксфактёр", change: 30 },
    { name: "Полина Матыцына", change: 29 },
    { name: "Кристина А", change: 28 },
    { name: "Вова Баж", change: 27 },
    { name: "Искандер", change: 26 },
    { name: "Jane 007", change: 25 },
    { name: "Никита Зейн", change: 25 },
    { name: "Наташа Бонд", change: 24 },
    { name: "Свидетель", change: 23 },
    { name: "Даша Гри", change: 23 },
    { name: "Влад Владшток", change: 22 },
    { name: "Иван Баж", change: 22 },
    { name: "Ксения Куд", change: 21 },
    { name: "Роман Лод", change: 21 },
    { name: "Инна М", change: 20 },
    { name: "Сергей Ман", change: 20 },
    { name: "Лев Р", change: 20 },
    { name: "Соня Серж", change: 19 },
    { name: "Евгений Ц", change: 19 },
    { name: "Богдан А", change: 19 }
];

// Функция переключения вкладок
function showTab(tabName) {
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок в основном таббаре
    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    document.getElementById(tabName).classList.add('active');
    
    // Активируем соответствующую кнопку в основном таббаре (если это не рейтинг)
    if (tabName !== 'rating') {
        const targetButton = document.querySelector(`.tabs .tab-button[onclick="showTab('${tabName}')"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    }
    
    // Обновляем заголовок фазы турнира
    updatePhaseHeader(tabName);
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
    
    // Обновляем статистику
    updateStats();
}

// Обновление заголовка фазы турнира
function updatePhaseHeader(tabName) {
    const phaseElement = document.getElementById('currentPhase');
    switch(tabName) {
        case 'day1':
            phaseElement.textContent = 'День 1 - 8.01.2026';
            break;
        case 'day2':
            phaseElement.textContent = 'День 2 - 15.01.2026';
            break;
        case 'day3':
            phaseElement.textContent = 'День 3 - 22.01.2026';
            break;
        case 'final':
            phaseElement.textContent = 'ФИНАЛ - 24.01.2026';
            break;
        case 'bounties':
            phaseElement.textContent = 'Охота за головами';
            break;
        case 'rating':
            phaseElement.textContent = 'Рейтинг';
            break;
        default:
            phaseElement.textContent = 'Турнир Миссис Дейзи Дак Q-2';
    }
}

// Функция развертывания таблицы на мобильных
function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active').id;
    const tables = document.querySelectorAll(`#${activeTab} .tournament-table`);
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => {
        table.classList.toggle('expanded');
    });
    
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
    
    tables.forEach(table => {
        table.classList.remove('expanded');
    });
    
    button.textContent = 'Развернуть таблицу';
}

// Быстрая анимация счетчиков
function animateCounter(element, finalValue, duration = 500) {
    if (!element) return;
    
    let start = 0;
    const increment = finalValue / (duration / 5);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
            
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 5);
}

// Расчет среднего стека для активного дня
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return 0;
    
    const activeTabId = activeTab.id;
    let players;
    
    if (activeTabId === 'day1') {
        players = day1Players;
    } else if (activeTabId === 'day2') {
        players = day2Players;
    } else if (activeTabId === 'day3') {
        players = day3Players;
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        const positiveResults = allPlayers.filter(player => player.total > 0);
        if (positiveResults.length === 0) return 0;
        const totalSum = positiveResults.reduce((sum, player) => sum + player.total, 0);
        return Math.round(totalSum / positiveResults.length);
    } else {
        return 0;
    }
    
    if (players.length === 0) return 0;
    const total = players.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / players.length);
}

// Получение всех игроков для финальной таблицы (день 1 + день 2)
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0,
            total: player.result
        });
    });
    
    // Добавляем/обновляем игроков из дня 2
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day2 = player.result;
            existingPlayer.total += player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result,
                day3: 0,
                total: player.result
            });
        }
    });
    
    // Добавляем/обновляем игроков из дня 3
    day3Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            const existingPlayer = allPlayersMap.get(player.name);
            existingPlayer.day3 = player.result;
            existingPlayer.total += player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: player.result,
                total: player.result
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Получаем рейтинг ТОЛЬКО из дня 1 (для сравнения в финальной таблице)
function getDay1FinalRating() {
    const allPlayersMap = new Map();
    
    // Только игроки дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0,
            total: player.result
        });
    });
    
    return Array.from(allPlayersMap.values());
}

// Расчет изменений позиций для финальной таблицы
function calculateFinalPositionChanges() {
    // Текущий рейтинг (день 1 + день 2)
    const currentPlayers = getAllFinalPlayers();
    // Рейтинг только после дня 1
    const day1PlayersFinal = getDay1FinalRating();
    
    // Сортируем оба списка по убыванию total
    const sortedCurrent = [...currentPlayers].sort((a, b) => b.total - a.total);
    const sortedDay1 = [...day1PlayersFinal].sort((a, b) => b.total - a.total);
    
    const positionChanges = new Map();
    
    // Для каждого игрока в текущем рейтинге
    sortedCurrent.forEach((player, currentIndex) => {
        const playerName = player.name;
        
        // Ищем игрока в рейтинге после дня 1
        const day1Index = sortedDay1.findIndex(p => p.name === playerName);
        
        if (day1Index !== -1) {
            // Игрок был в день 1 - сравниваем позиции
            const change = day1Index - currentIndex;
            
            if (change > 0) {
                // Поднялся вверх
                positionChanges.set(playerName, {
                    change: Math.abs(change),
                    type: 'up'
                });
            } else if (change < 0) {
                // Опустился вниз
                positionChanges.set(playerName, {
                    change: Math.abs(change),
                    type: 'down'
                });
            } else {
                // Остался на том же месте
                positionChanges.set(playerName, {
                    change: 0,
                    type: 'same'
                });
            }
        } else {
            // Новый игрок (не было в день 1)
            positionChanges.set(playerName, {
                change: 0,
                type: 'new'
            });
        }
    });
    
    return positionChanges;
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Создание HTML для изменения позиции
function createPositionChangeHTML(changeData) {
    if (!changeData) return '';
    
    const { change, type } = changeData;
    
    let html = '';
    let arrow = '';
    let text = '';
    
    switch (type) {
        case 'up':
            arrow = '▲';
            text = `${change}`;
            break;
        case 'down':
            arrow = '▼';
            text = `${change}`;
            break;
        case 'same':
            arrow = '→';
            text = '0';
            break;
        case 'new':
            arrow = '';
            text = 'NEW';
            break;
    }
    
    if (type === 'new') {
        return `<div class="position-change position-${type}">${text}</div>`;
    } else {
        return `<div class="position-change position-${type}">
            <span class="change-arrow">${arrow}</span>${text}
        </div>`;
    }
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) {
        console.error('Элемент day1Table не найден!');
        return;
    }
    
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
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица дня 1 заполнена:', day1Players.length, 'игроков');
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) {
        console.error('Элемент day2Table не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    day2Players.forEach((player) => {
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
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица дня 2 заполнена:', day2Players.length, 'игроков');
}

function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) {
        console.error('Элемент finalTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    const allPlayers = getAllFinalPlayers();
    const positionChanges = calculateFinalPositionChanges();
    
    if (allPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;"> <!-- colspan="7" вместо 8 -->
                    Данные появятся после завершения дней турнира
                </td>
            </tr>
        `;
        return;
    }
    
    // Сортируем по убыванию общего итога
    allPlayers.sort((a, b) => b.total - a.total);
    
    // Находим чиплидера
    const chipLeader = allPlayers.length > 0 ? allPlayers[0].name : null;
    
    allPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${changeHTML}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td> <!-- Убрали колонку final -->
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Финальная таблица заполнена:', allPlayers.length, 'игроков');
}

// Заполнение таблицы Охоты за головами
function fillBountiesTable() {
    const tableBody = document.getElementById('bountiesTable');
    if (!tableBody) {
        console.error('Элемент bountiesTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    // Сортируем по убыванию бонуса
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    
    sortedBounties.forEach((player) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="player-name">${player.name}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица охоты за головами заполнена:', bountyPlayers.length, 'игроков');
}

// Расчет нового рейтинга (после дня 2)
function calculateNewRating() {
    const newRating = [];
    
    // Создаем мап предыдущих рейтингов
    const previousRatingMap = new Map();
    previousRatingData.forEach(player => {
        previousRatingMap.set(player.name, player.rating);
    });
    
    // Создаем мап изменений рейтинга за день 2
    const ratingChangeMap = new Map();
    day2RatingChanges.forEach(player => {
        ratingChangeMap.set(player.name, player.change);
    });
    
    // Собираем всех уникальных игроков из обоих списков
    const allPlayersSet = new Set();
    previousRatingData.forEach(player => allPlayersSet.add(player.name));
    day2RatingChanges.forEach(player => allPlayersSet.add(player.name));
    
    // Добавляем игроков, которые были переименованы
    allPlayersSet.add("Даня Д"); // Переименован из "Данила Dih"
    
    const allPlayers = Array.from(allPlayersSet);
    
    allPlayers.forEach(playerName => {
        // Определяем предыдущий рейтинг
        let previousRating = 0;
        
        // Проверяем есть ли игрок в предыдущем рейтинге
        if (previousRatingMap.has(playerName)) {
            previousRating = previousRatingMap.get(playerName);
        } else if (playerName === "Даня Д" && previousRatingMap.has("Данила Dih")) {
            // Для переименованного игрока берем старый рейтинг
            previousRating = previousRatingMap.get("Данила Dih");
        }
        
        // Определяем изменение рейтинга
        const change = ratingChangeMap.get(playerName) || 0;
        const newRatingValue = previousRating + change;
        
        newRating.push({
            name: playerName,
            previousRating: previousRating,
            change: change,
            newRating: newRatingValue,
            isNewPlayer: change > 0 && previousRating === 0
        });
    });
    
    return newRating;
}

// Расчет изменений позиций в рейтинге
function calculateRatingPositionChanges() {
    const newRating = calculateNewRating();
    
    // Сортируем предыдущий рейтинг
    const sortedPreviousRating = [...previousRatingData].sort((a, b) => b.rating - a.rating);
    
    // Сортируем новый рейтинг
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    const positionChanges = new Map();
    
    sortedNewRating.forEach((player, newIndex) => {
        // Проверяем, был ли игрок в предыдущем рейтинге
        let oldIndex = sortedPreviousRating.findIndex(p => p.name === player.name);
        
        // Если игрока нет, проверяем не был ли он переименован
        if (oldIndex === -1 && player.name === "Даня Д") {
            oldIndex = sortedPreviousRating.findIndex(p => p.name === "Данила Dih");
        }
        
        if (oldIndex === -1) {
            // Новый игрок
            positionChanges.set(player.name, {
                change: 0,
                type: 'new'
            });
        } else {
            const change = oldIndex - newIndex;
            if (change > 0) {
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'up'
                });
            } else if (change < 0) {
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'down'
                });
            } else {
                positionChanges.set(player.name, {
                    change: 0,
                    type: 'same'
                });
            }
        }
    });
    
    return positionChanges;
}

// Заполнение таблицы Рейтинга
function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) {
        console.error('Элемент ratingTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRating();
    const positionChanges = calculateRatingPositionChanges();
    
    // Сортируем по убыванию нового рейтинга
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const changeClass = player.change > 0 ? "rating-positive" : player.change < 0 ? "rating-negative" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Подсветка топ 19 игроков и Никита Yellow
        const isTop19 = index < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'top-rating';
        }
        
        // Добавляем корону для Никита Yellow
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
    
    console.log('Таблица рейтинга заполнена:', newRating.length, 'игроков');
}

// Функции для заполнения таблиц с поиском
function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day1Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
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
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay2TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day2Table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
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
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillFinalTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const allPlayers = getAllFinalPlayers();
    const filteredPlayers = allPlayers.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;"> <!-- colspan="7" вместо 8 -->
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    // Сортируем и находим чиплидера
    filteredPlayers.sort((a, b) => b.total - a.total);
    const allSortedPlayers = getAllFinalPlayers().sort((a, b) => b.total - a.total);
    const chipLeader = allSortedPlayers.length > 0 ? allSortedPlayers[0].name : null;
    const positionChanges = calculateFinalPositionChanges();
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td> <!-- Убрали колонку final -->
        `;
        
        tableBody.appendChild(row);
    });
}

function fillBountiesTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('bountiesTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    const filteredBounties = sortedBounties.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredBounties.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredBounties.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="player-name">${highlightedName}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillRatingTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('ratingTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const newRating = calculateNewRating();
    const sortedRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    const positionChanges = calculateRatingPositionChanges();
    
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
    
    filteredRating.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const changeClass = player.change > 0 ? "rating-positive" : player.change < 0 ? "rating-negative" : "rating-neutral";
        const changeSign = player.change > 0 ? "+" : "";
        const highlightedName = highlightText(player.name, searchTerm);
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Подсветка топ 19 игроков и Никита Yellow
        const originalIndex = sortedRating.findIndex(p => p.name === player.name);
        const isTop19 = originalIndex < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'top-rating search-highlight';
        }
        
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${originalIndex + 1}</td>
            <td class="${nameClass}">${highlightedName}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating > 0 ? player.previousRating : '-'}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функция для подсветки найденного текста
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
}

// Автодополнение для поиска в основном интерфейсе
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    if (!searchInput || !autocompleteResults) {
        console.error('Элементы поиска не найдены!');
        return;
    }
    
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...bountyPlayers.map(p => ({ name: p.name })), ...calculateNewRating()];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    const uniquePlayerNames = [...new Set(playerNames)];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        
        const suggestions = uniquePlayerNames.filter(name => 
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
    
    searchInput.addEventListener('keydown', function(e) {
        const items = autocompleteResults.querySelectorAll('.autocomplete-item');
        let activeItem = autocompleteResults.querySelector('.autocomplete-item.active');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (!activeItem) {
                items[0]?.classList.add('active');
            } else {
                activeItem.classList.remove('active');
                const next = activeItem.nextElementSibling || items[0];
                next.classList.add('active');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!activeItem) {
                items[items.length - 1]?.classList.add('active');
            } else {
                activeItem.classList.remove('active');
                const prev = activeItem.previousElementSibling || items[items.length - 1];
                prev.classList.add('active');
            }
        } else if (e.key === 'Enter') {
            if (activeItem) {
                e.preventDefault();
                searchInput.value = activeItem.textContent;
                autocompleteResults.style.display = 'none';
                searchPlayers();
            }
        }
    });
}

// Поиск игроков в основном интерфейсе
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    if (searchTerm === '') {
        if (activeTabId === 'day1') {
            fillDay1Table();
        } else if (activeTabId === 'day2') {
            fillDay2Table();
        } else if (activeTabId === 'day3') {
            // День 3 - ничего не заполняем (только coming soon)
        } else if (activeTabId === 'final') {
            fillFinalTable();
        } else if (activeTabId === 'bounties') {
            fillBountiesTable();
        } else if (activeTabId === 'rating') {
            fillRatingTable();
        }
        
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
        return;
    }
    
    let foundPlayers = [];
    
    if (activeTabId === 'day1') {
        foundPlayers = day1Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay1TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'day2') {
        foundPlayers = day2Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay2TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        foundPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillFinalTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'bounties') {
        foundPlayers = bountyPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillBountiesTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        foundPlayers = newRating.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillRatingTableWithSearch(foundPlayers, searchTerm);
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

// Обновление статистики при переключении вкладок
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
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'final') {
        const allPlayers = getAllFinalPlayers();
        totalPlayers = allPlayers.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'rating') {
        const newRating = calculateNewRating();
        totalPlayers = newRating.length;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else {
        totalPlayers = 0;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    }
}

// Функция для отладки финальной таблицы
function debugFinalTable() {
    const allPlayers = getAllFinalPlayers();
    const sorted = [...allPlayers].sort((a, b) => b.total - a.total);
    
    console.log("=== ФИНАЛЬНАЯ ТАБЛИЦА (день 1 + день 2) ===");
    sorted.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name}: ${player.total} (день1: ${player.day1}, день2: ${player.day2})`);
    });
    
    // Проверим позицию Насти К
    const nastyaIndex = sorted.findIndex(p => p.name === "Настя К");
    console.log(`Настя К: позиция ${nastyaIndex + 1}, total: ${sorted[nastyaIndex]?.total || 0}`);
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнир Миссис Дейзи Дак Q-2 загружен!');
    
    // Заполняем все таблицы
    fillDay1Table();
    fillDay2Table();
    fillFinalTable();
    fillBountiesTable();
    fillRatingTable();
    
    // Для отладки
    debugFinalTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    
    // Показываем вкладку День 2 при загрузке
    showTab('day2');
    
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
    
    // Обновляем статистику при переключении вкладок
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', updateStats);
    });
    
    // Скрываем автодополнение при скролле
    window.addEventListener('scroll', function() {
        const autocompleteResults = document.getElementById('autocompleteResults');
        if (autocompleteResults) {
            autocompleteResults.style.display = 'none';
        }
    });
});
