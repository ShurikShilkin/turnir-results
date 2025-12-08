// Данные игроков для Дня 1
const day1Players = [
    { number: 1, name: "Robert Юниксфактёр", entry: 1100, rebuy: 0, exit: 9525, win: 8425 },
    { number: 2, name: "Семён Ануфриев", entry: 1100, rebuy: 0, exit: 8935, win: 7835 },
    { number: 3, name: "Михаил Наб", entry: 1100, rebuy: 0, exit: 8605, win: 7505 },
    { number: 4, name: "Роман Егоров", entry: 1100, rebuy: 0, exit: 7540, win: 6440 },
    { number: 5, name: "Саша Коч", entry: 1100, rebuy: 0, exit: 6980, win: 5880 },
    { number: 6, name: "Оксана Б", entry: 1100, rebuy: 0, exit: 5915, win: 4815 },
    { number: 7, name: "Даша Yellow", entry: 1100, rebuy: 0, exit: 4410, win: 3310 },
    { number: 8, name: "Шурик Шилкин", entry: 1100, rebuy: 0, exit: 3305, win: 2205 },
    { number: 9, name: "Jane 2007", entry: 1100, rebuy: 1000, exit: 3025, win: 925 },
    { number: 10, name: "Дима Жур", entry: 1100, rebuy: 2000, exit: 3905, win: 805 },
    { number: 11, name: "Руфат Макиато", entry: 1100, rebuy: 5000, exit: 4935, win: -1165 },
    { number: 12, name: "Инна М", entry: 1100, rebuy: 3000, exit: 2680, win: -1420 },
    { number: 13, name: "Михаил Козадой", entry: 1100, rebuy: 1000, exit: 0, win: -2100 },
    { number: 14, name: "Максим Spy", entry: 1100, rebuy: 2000, exit: 810, win: -2290 },
    { number: 15, name: "Всеволод Кузнецов", entry: 1100, rebuy: 2000, exit: 630, win: -2470 },
    { number: 16, name: "Асхат Суханбердин", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 17, name: "Федор К", entry: 1100, rebuy: 3000, exit: 0, win: -4100 },
    { number: 18, name: "Свидетель", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 19, name: "Даша Гри", entry: 1100, rebuy: 4000, exit: 0, win: -5100 },
    { number: 20, name: "Egrinderolls", entry: 1100, rebuy: 5000, exit: 0, win: -6100 },
    { number: 21, name: "Богдан А", entry: 1100, rebuy: 6000, exit: 0, win: -7100 },
    { number: 22, name: "Вова Гриненко", entry: 1100, rebuy: 6000, exit: 0, win: -7100 }
];

// Пустые данные для остальных дней (будут заполняться позже)
const day2Players = [];
const day3Players = [];
const day4Players = [];

// Данные для охоты за головами
const bountyPlayers = [
    { name: "Robert Юниксфактёр", bounty: 800 },
    { name: "Семён Ануфриев", bounty: 800 },
    { name: "Михаил Наб", bounty: 800 },
    { name: "Роман Егоров", bounty: 800 },
    { name: "Саша Коч", bounty: 800 },
    { name: "Оксана Б", bounty: 600 },
    { name: "Даша Yellow", bounty: 600 },
    { name: "Шурик Шилкин", bounty: 600 },
    { name: "Jane 2007", bounty: 600 },
    { name: "Дима Жур", bounty: 600 },
    { name: "Руфат Макиато", bounty: 400 },
    { name: "Инна М", bounty: 400 },
    { name: "Михаил Козадой", bounty: 400 },
    { name: "Максим Spy", bounty: 400 },
    { name: "Всеволод Кузнецов", bounty: 200 },
    { name: "Асхат Суханбердин", bounty: 200 },
    { name: "Федор К", bounty: 200 },
    { name: "Свидетель", bounty: 200 },
    { name: "Даша Гри", bounty: 200 },
    { name: "Egrinderolls", bounty: 200 }
];

// Данные рейтинга
const ratingPlayers = [
    { number: 1, name: "Robert Юниксфактёр", rating: 141 },
    { number: 2, name: "Семён Ануфриев", rating: 100 },
    { number: 3, name: "Михаил Наб", rating: 81 },
    { number: 4, name: "Роман Егоров", rating: 70 },
    { number: 5, name: "Саша Коч", rating: 63 },
    { number: 6, name: "Оксана Б", rating: 57 },
    { number: 7, name: "Даша Yellow", rating: 53 },
    { number: 8, name: "Шурик Шилкин", rating: 50 },
    { number: 9, name: "Jane 2007", rating: 36 },
    { number: 10, name: "Михаил Козадой", rating: 30 },
    { number: 11, name: "Дима Жур", rating: 29 },
    { number: 12, name: "Максим Spy", rating: 24 },
    { number: 13, name: "Инна М", rating: 23 },
    { number: 14, name: "Всеволод Кузнецов", rating: 23 },
    { number: 15, name: "Руфат Макиато", rating: 21 },
    { number: 16, name: "Асхат Суханбердин", rating: 20 },
    { number: 17, name: "Федор К", rating: 20 },
    { number: 18, name: "Свидетель", rating: 17 },
    { number: 19, name: "Даша Гри", rating: 17 },
    { number: 20, name: "Egrinderolls", rating: 15 },
    { number: 21, name: "Богдан А", rating: 14 },
    { number: 22, name: "Вова Гриненко", rating: 14 }
];

// Функция переключения вкладок
function showTab(tabName) {
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    document.getElementById(tabName).classList.add('active');
    
    // Активируем соответствующую кнопку
    const targetButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Обновляем интерфейс в зависимости от типа вкладки
    if (tabName === 'final2025' || tabName === 'satellite2025') {
        showSpecialInterface(tabName);
    } else {
        showMainInterface(tabName);
    }
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
    
    // Обновляем статистику
    updateStats();
}

// Показать основной интерфейс (дни турнира)
function showMainInterface(tabName) {
    document.getElementById('mainTabs').style.display = 'flex';
    document.getElementById('specialTabs').style.display = 'none';
    document.getElementById('mainStats').style.display = 'grid';
    document.getElementById('specialStats').style.display = 'none';
    
    // Обновляем заголовок фазы турнира
    const phaseElement = document.getElementById('currentPhase');
    switch(tabName) {
        case 'day1':
            phaseElement.textContent = 'День 1 - 4.12.2025';
            break;
        case 'day2':
            phaseElement.textContent = 'День 2 - 11.12.2025';
            break;
        case 'day3':
            phaseElement.textContent = 'День 3 - 18.12.2025';
            break;
        case 'day4':
            phaseElement.textContent = 'День 4 - 25.12.2025';
            break;
        case 'summary':
            phaseElement.textContent = 'Итог Межсезонья';
            break;
        case 'bounties':
            phaseElement.textContent = 'Охота за головами';
            break;
        case 'rating':
            phaseElement.textContent = 'Рейтинг';
            break;
    }
}

// Показать специальный интерфейс (ФИНАЛ ФИНАЛИСТОВ или САТЕЛЛИТ)
function showSpecialInterface(tabName) {
    document.getElementById('mainTabs').style.display = 'none';
    document.getElementById('specialTabs').style.display = 'flex';
    document.getElementById('mainStats').style.display = 'none';
    document.getElementById('specialStats').style.display = 'grid';
    
    // Обновляем текст специальной вкладки
    const specialTabButton = document.getElementById('specialTabButton');
    const phaseElement = document.getElementById('currentPhase');
    
    if (tabName === 'final2025') {
        specialTabButton.textContent = 'ФИНАЛ ФИНАЛИСТОВ 2025';
        phaseElement.textContent = 'ФИНАЛ ФИНАЛИСТОВ 2025 - 20.12.2025';
    } else if (tabName === 'satellite2025') {
        specialTabButton.textContent = 'Результаты сателлита 2025';
        phaseElement.textContent = 'Результаты сателлита 2025 - 6.12.2025';
    }
    
    // Показываем кнопку "Назад к турниру"
    document.querySelector('.back-button').style.display = 'block';
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

// Расчет среднего стека для активного дня (только положительные значения)
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active').id;
    let players;
    
    if (activeTab === 'day1') {
        players = day1Players;
    } else if (activeTab === 'day2') {
        players = day2Players;
    } else if (activeTab === 'day3') {
        players = day3Players;
    } else if (activeTab === 'day4') {
        players = day4Players;
    } else if (activeTab === 'summary') {
        const allPlayers = getAllPlayersSummary();
        const positiveResults = allPlayers.filter(player => player.total > 0);
        if (positiveResults.length === 0) return 0;
        const totalSum = positiveResults.reduce((sum, player) => sum + player.total, 0);
        return Math.round(totalSum / positiveResults.length);
    } else {
        return 0;
    }
    
    const positiveResults = players.filter(player => player.win > 0);
    if (positiveResults.length === 0) return 0;
    const total = positiveResults.reduce((sum, player) => sum + Number(player.win), 0);
    return Math.round(total / positiveResults.length);
}

// Получение всех игроков для сводной таблицы
function getAllPlayersSummary() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.win,
            day2: 0,
            day3: 0,
            day4: 0,
            total: player.win
        });
    });
    
    // Пока что только из дня 1, позже добавим остальные дни
    return Array.from(allPlayersMap.values());
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    if (day2Players.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
                    Данные появятся после завершения дня
                </td>
            </tr>
        `;
        return;
    }
    
    day2Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы День 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    if (day3Players.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
                    Данные появятся после завершения дня
                </td>
            </tr>
        `;
        return;
    }
    
    day3Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы День 4
function fillDay4Table() {
    const tableBody = document.getElementById('day4Table');
    tableBody.innerHTML = '';
    
    if (day4Players.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
                    Данные появятся после завершения дня
                </td>
            </tr>
        `;
        return;
    }
    
    day4Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Итогов
function fillSummaryTable() {
    const tableBody = document.getElementById('summaryTable');
    tableBody.innerHTML = '';
    
    const allPlayers = getAllPlayersSummary();
    
    // Сортируем по убыванию общего итога
    allPlayers.sort((a, b) => b.total - a.total);
    
    allPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="result-column">${player.day4 !== 0 ? formatNumber(player.day4) : '-'}</td>
            <td class="${totalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Охоты за головами
function fillBountiesTable() {
    const tableBody = document.getElementById('bountiesTable');
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
}

// Заполнение таблицы Рейтинга
function fillRatingTable() {
    const tableBody = document.getElementById('ratingTable');
    tableBody.innerHTML = '';
    
    ratingPlayers.forEach((player) => {
        const row = document.createElement('tr');
        
        // Подсветка первых 20 участников
        if (player.number <= 20) {
            row.className = 'top-rating';
        }
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td class="rating-number">${player.rating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функции для заполнения таблиц с поиском
function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay2TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay3TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay4TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day4Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
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
        const winClass = player.win >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.entry)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${winClass}">${formatNumber(player.win)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillSummaryTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('summaryTable');
    tableBody.innerHTML = '';
    
    const allPlayers = getAllPlayersSummary();
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
    
    filteredPlayers.sort((a, b) => b.total - a.total);
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const totalClass = player.total >= 0 ? "chips-positive" : "chips-negative";
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${player.day2 !== 0 ? formatNumber(player.day2) : '-'}</td>
            <td class="result-column">${player.day3 !== 0 ? formatNumber(player.day3) : '-'}</td>
            <td class="result-column">${player.day4 !== 0 ? formatNumber(player.day4) : '-'}</td>
            <td class="${totalClass}">${formatNumber(player.total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillBountiesTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('bountiesTable');
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
    tableBody.innerHTML = '';
    
    const filteredRating = ratingPlayers.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredRating.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredRating.forEach((player) => {
        const row = document.createElement('tr');
        
        if (player.number <= 20) {
            row.className = 'top-rating search-highlight';
        } else {
            row.className = 'search-highlight';
        }
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="rating-number">${player.rating}</td>
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

// Автодополнение для поиска
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...day4Players, ...bountyPlayers.map(p => ({ name: p.name })), ...ratingPlayers];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    const final2025Players = [
        "Александр Гиг", "Мария Павлова", "Даша Yellow", "Михаил Козадой", 
        "Вадим Константинов", "Руф", "Влад Пив", "Артур Король", 
        "Шурик Шилкин", "Даня Гол", "Никита Yellow", "Богдан Анц", 
        "Семён Ануфриев", "Александр Будда", "Иван Антипов",
        "Искандер", "Иван Чемодан", "Дмитрий Ник", "Асхат Суханбердин",
        "Саша Тяжелов", "Владимир Vladecbeer"
    ];
    
    const satellitePlayers = [
        "Ксюша Петрушина", "Вова Гриненко", "Славяна", "Надя Жб",
        "Даня КДД", "Олег Сми", "Ладали", "Egrinderolls"
    ];
    
    playerNames.push(...final2025Players, ...satellitePlayers);
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

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active').id;
    
    if (searchTerm === '') {
        if (activeTab === 'day1') {
            fillDay1Table();
        } else if (activeTab === 'day2') {
            fillDay2Table();
        } else if (activeTab === 'day3') {
            fillDay3Table();
        } else if (activeTab === 'day4') {
            fillDay4Table();
        } else if (activeTab === 'summary') {
            fillSummaryTable();
        } else if (activeTab === 'bounties') {
            fillBountiesTable();
        } else if (activeTab === 'rating') {
            fillRatingTable();
        }
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let foundPlayers = [];
    
    if (activeTab === 'day1') {
        foundPlayers = day1Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay1TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day2') {
        foundPlayers = day2Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay2TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day3') {
        foundPlayers = day3Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay3TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day4') {
        foundPlayers = day4Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay4TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'summary') {
        const allPlayers = getAllPlayersSummary();
        foundPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillSummaryTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'bounties') {
        foundPlayers = bountyPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillBountiesTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'rating') {
        foundPlayers = ratingPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillRatingTableWithSearch(foundPlayers, searchTerm);
    }
    
    const resultsCount = document.getElementById('resultsCount');
    const searchResults = document.getElementById('searchResults');
    
    if (foundPlayers.length > 0) {
        resultsCount.textContent = foundPlayers.length;
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = '0';
    }
}

// Функция для обновления дат в статистике
function updateDates() {
    const dateItems = document.querySelectorAll('.date-value');
    if (dateItems[0]) dateItems[0].innerHTML = '11.12.2025';
    if (dateItems[1]) dateItems[1].textContent = '20.12.2025';
}

// Обновление статистики при переключении вкладок
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const specialTotalPlayersElement = document.getElementById('specialTotalPlayers');
    const activeTab = document.querySelector('.tab-content.active').id;
    
    let totalPlayers, averageStack;
    
    if (activeTab === 'day1') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'day4') {
        totalPlayers = day4Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'summary') {
        const allPlayers = getAllPlayersSummary();
        totalPlayers = allPlayers.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'rating') {
        totalPlayers = ratingPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    } else if (activeTab === 'final2025') {
        totalPlayers = 21;
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else if (activeTab === 'satellite2025') {
        totalPlayers = 14;
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else {
        totalPlayers = 0;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Межсезонье Декабрь 2025 загружено!');
    
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillDay4Table();
    fillSummaryTable();
    fillBountiesTable();
    fillRatingTable();
    setupAutocomplete();
    
    // Показываем вкладку День 1 при загрузке
    showTab('day1');
    
    // Обновляем даты
    updateDates();
    
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    
    document.getElementById('clearSearch').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        searchPlayers();
    });
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', updateStats);
    });
    
    window.addEventListener('scroll', function() {
        document.getElementById('autocompleteResults').style.display = 'none';
    });
});
