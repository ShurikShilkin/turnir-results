// Данные игроков дня 1
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
    { number: 23, name: "Данила Dih", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 24, name: "Влад Голубев", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 25, name: "Полина Матыцына", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 26, name: "Том", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 27, name: "Федор К", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 },
    { number: 28, name: "Ирина Ага", entry: 4100, start: 2100, rebuy: 2000, exit: 0, result: 0 }
];

// Данные для дней 2 и 3 (пока пустые)
const day2Players = [];
const day3Players = [];

// Данные для финала (из дня 1)
const finalPlayers = day1Players.map(player => ({
    name: player.name,
    day1: player.result,
    day2: 0,
    day3: 0,
    final: 0,
    total: player.result
}));

// Данные для охоты за головами (обновленные)
const bountyPlayers = [
    { name: "Максим Spy", bounty: 1200 },
    { name: "Настя К", bounty: 1200 },
    { name: "Михаил Наб", bounty: 1000 },
    { name: "Лев Р", bounty: 1000 },
    { name: "Свидетель", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "Роман Егоров", bounty: 1000 },
    { name: "Jane 007", bounty: 800 },
    { name: "Семён Ануфриев", bounty: 700 },
    { name: "grooveman", bounty: 600 },
    { name: "Никита Зейн", bounty: 600 },
    { name: "Полина Матыцына", bounty: 600 },
    { name: "Robert Юниксфактёр", bounty: 500 },
    { name: "Богдан А", bounty: 400 },
    { name: "Михаил Козадой", bounty: 400 },
    { name: "Серж", bounty: 400 },
    { name: "Даша Yellow", bounty: 400 },
    { name: "Оксана Б", bounty: 400 },
    { name: "Влад Владшток", bounty: 400 },
    { name: "Egrinderolls", bounty: 300 },
    { name: "Саша Коч", bounty: 200 }
];

// Старые данные рейтинга (из предыдущего турнира)
const oldRatingData = [
    { name: "Михаил Наб", rating: 312 },
    { name: "Robert Юниксфактёр", rating: 235 },
    { name: "Лев Р", rating: 199 },
    { name: "Свидетель", rating: 196 },
    { name: "Шурик Шилкин", rating: 173 },
    { name: "Богдан А", rating: 172 },
    { name: "Jane 007", rating: 145 },
    { name: "Семён Ануфриев", rating: 142 },
    { name: "Максим Spy", rating: 139 },
    { name: "Михаил Козадой", rating: 131 },
    { name: "Роман Егоров", rating: 128 },
    { name: "grooveman", rating: 125 }, // Изменено: Асхат Суханбердин → grooveman
    { name: "Никита Зейн", rating: 122 },
    { name: "Egrinderolls", rating: 120 },
    { name: "Полина Матыцына", rating: 119 },
    { name: "Саша Коч", rating: 115 },
    { name: "Серж", rating: 103 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Оксана Б", rating: 87 },
    { name: "Влад Владшток", rating: 77 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Инна М", rating: 58 },
    { name: "Кристина А", rating: 57 },
    { name: "Федор К", rating: 53 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Иван Антипов", rating: 47 },
    { name: "Соня Кур", rating: 46 },
    { name: "Артём 007", rating: 40 },
    { name: "Михаил Т", rating: 37 },
    { name: "Искандер", rating: 35 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Роман Лод", rating: 22 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Даша Хромова", rating: 18 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Даша Гри", rating: 17 },
    { name: "Евгений Ц", rating: 16 },
    { name: "Даня КДД", rating: 15 },
    { name: "Дмитрий Ник", rating: 15 },
    { name: "Вова Гриненко", rating: 14 },
    { name: "Сергей Ман", rating: 13 },
    { name: "Том", rating: 12 }
];

// Новые бонусы за день 1
const day1RatingChanges = [
    { name: "Настя К", change: 99 },
    { name: "Максим Spy", change: 70 },
    { name: "Макс Пиво", change: 57 },
    { name: "Наташа Бонд", change: 49 },
    { name: "Robert Юниксфактёр", change: 44 },
    { name: "Дмитрий Ник", change: 40 },
    { name: "Сергей Ман", change: 37 },
    { name: "Влад Владшток", change: 35 },
    { name: "Шурик Шилкин", change: 33 },
    { name: "Ксения Куд", change: 31 },
    { name: "Родион Шашурин", change: 30 },
    { name: "Роман Егоров", change: 29 },
    { name: "Богдан А", change: 27 },
    { name: "Родион К", change: 26 },
    { name: "Искандер", change: 26 },
    { name: "Jane 007", change: 25 },
    { name: "Саша Коч", change: 24 },
    { name: "Михаил Козадой", change: 23 },
    { name: "Илья Без", change: 23 },
    { name: "Славяна", change: 22 },
    { name: "Семён Ануфриев", change: 22 },
    { name: "Egrinderolls", change: 21 },
    { name: "Данила Dih", change: 21 },
    { name: "Влад Голубев", change: 20 },
    { name: "Полина Матыцына", change: 20 },
    { name: "Том", change: 19 },
    { name: "Федор К", change: 19 },
    { name: "Ирина Ага", change: 19 }
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
            phaseElement.textContent = 'Рейтинг серии';
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

// Получение всех игроков для финальной таблицы
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0,
            final: 0,
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
                final: 0,
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
                final: 0,
                total: player.result
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
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

// Заполнение финальной таблицы
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    if (!tableBody) {
        console.error('Элемент finalTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    const allPlayers = getAllFinalPlayers();
    
    if (allPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
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
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="result-column">${player.final !== 0 ? formatNumber(player.final) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
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

// Расчет нового рейтинга
function calculateNewRating() {
    const newRating = [];
    
    // Создаем мап старых рейтингов для быстрого доступа
    const oldRatingMap = new Map();
    oldRatingData.forEach(player => {
        oldRatingMap.set(player.name, player.rating);
    });
    
    // Создаем мап изменений рейтинга
    const ratingChangeMap = new Map();
    day1RatingChanges.forEach(player => {
        ratingChangeMap.set(player.name, player.change);
    });
    
    // Собираем всех уникальных игроков
    const allPlayersSet = new Set();
    oldRatingData.forEach(player => allPlayersSet.add(player.name));
    day1RatingChanges.forEach(player => allPlayersSet.add(player.name));
    
    const allPlayers = Array.from(allPlayersSet);
    
    allPlayers.forEach(playerName => {
        const oldRating = oldRatingMap.get(playerName) || 0;
        const change = ratingChangeMap.get(playerName) || 0;
        const newRatingValue = oldRating + change;
        
        newRating.push({
            name: playerName,
            oldRating: oldRating,
            change: change,
            newRating: newRatingValue,
            isNewPlayer: !oldRatingMap.has(playerName) && ratingChangeMap.has(playerName)
        });
    });
    
    return newRating;
}

// Расчет изменений позиций
function calculatePositionChanges() {
    const newRating = calculateNewRating();
    
    // Сортируем старый рейтинг
    const sortedOldRating = [...oldRatingData].sort((a, b) => b.rating - a.rating);
    
    // Сортируем новый рейтинг
    const sortedNewRating = [...newRating].sort((a, b) => b.newRating - a.newRating);
    
    const positionChanges = new Map();
    
    sortedNewRating.forEach((player, newIndex) => {
        const oldIndex = sortedOldRating.findIndex(p => p.name === player.name);
        
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
    const positionChanges = calculatePositionChanges();
    
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
            <td>${player.oldRating > 0 ? player.oldRating : '-'}</td>
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
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
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
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const highlightedName = highlightText(player.name, searchTerm);
        
        // Добавляем класс чиплидера
        const finalTotalClass = player.name === chipLeader ? 
            `${totalClass} chipleader` : totalClass;
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="result-column">${player.day1 !== 0 ? formatNumber(player.day1) : '-'}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="result-column">${player.final !== 0 ? formatNumber(player.final) : '-'}</td>
            <td class="final-total ${finalTotalClass}">${formatNumber(player.total)}</td>
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
    const positionChanges = calculatePositionChanges();
    
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
            <td>${player.oldRating > 0 ? player.oldRating : '-'}</td>
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

// Автодополнение для поиска в рейтинге
function setupRatingAutocomplete() {
    const searchInput = document.getElementById('ratingSearchInput');
    const autocompleteResults = document.getElementById('ratingAutocompleteResults');
    
    if (!searchInput || !autocompleteResults) {
        console.error('Элементы поиска рейтинга не найдены!');
        return;
    }
    
    const newRating = calculateNewRating();
    const playerNames = [...new Set(newRating.map(p => p.name))];
    
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
                    searchRatingPlayers();
                });
                
                autocompleteResults.appendChild(item);
            });
            
            autocompleteResults.style.display = 'block';
        } else {
            autocompleteResults.style.display = 'none';
        }
    });
    
    // Закрытие автодополнения при клике вне
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !autocompleteResults.contains(e.target)) {
            autocompleteResults.style.display = 'none';
        }
    });
    
    // Навигация по автодополнению с клавиатуры
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
                searchRatingPlayers();
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
            // День 2 - ничего не заполняем (только coming soon)
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

// Поиск игроков в рейтинге
function searchRatingPlayers() {
    const searchTerm = document.getElementById('ratingSearchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        fillRatingTable();
        
        const searchResults = document.getElementById('ratingSearchResults');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
        return;
    }
    
    const newRating = calculateNewRating();
    const foundPlayers = newRating.filter(player => 
        player.name.toLowerCase().includes(searchTerm)
    );
    
    fillRatingTableWithSearch(foundPlayers, searchTerm);
    
    const resultsCount = document.getElementById('ratingResultsCount');
    const searchResults = document.getElementById('ratingSearchResults');
    
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

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнир Миссис Дейзи Дак Q-2 загружен!');
    
    // Заполняем все таблицы
    fillDay1Table();
    fillFinalTable();
    fillBountiesTable();
    fillRatingTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    setupRatingAutocomplete();
    
    // Показываем вкладку День 1 при загрузке
    showTab('day1');
    
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
    
    // Настраиваем поиск в рейтинге
    const ratingClearSearch = document.getElementById('clearRatingSearch');
    if (ratingClearSearch) {
        ratingClearSearch.addEventListener('click', function() {
            document.getElementById('ratingSearchInput').value = '';
            const autocompleteResults = document.getElementById('ratingAutocompleteResults');
            if (autocompleteResults) {
                autocompleteResults.style.display = 'none';
            }
            searchRatingPlayers();
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
        
        const ratingAutocompleteResults = document.getElementById('ratingAutocompleteResults');
        if (ratingAutocompleteResults) {
            ratingAutocompleteResults.style.display = 'none';
        }
    });
});
