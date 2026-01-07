// Данные игроков для нового турнира (пока пустые)
const day1Players = [];
const day2Players = [];
const day3Players = [];
const finalPlayers = [];

// Данные для охоты за головами
const bountyPlayers = [
    { name: "Михаил Наб", bounty: 1000 },
    { name: "Robert Юниксфактёр", bounty: 1000 },
    { name: "Лев Р", bounty: 1000 },
    { name: "Свидетель", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "Богдан А", bounty: 800 },
    { name: "Jane 007", bounty: 800 },
    { name: "Семён Ануфриев", bounty: 800 },
    { name: "Максим Spy", bounty: 800 },
    { name: "Михаил Козадой", bounty: 800 },
    { name: "Роман Егоров", bounty: 600 },
    { name: "grooveman", bounty: 600 },
    { name: "Никита Зейн", bounty: 600 },
    { name: "Egrinderolls", bounty: 600 },
    { name: "Полина Матыцына", bounty: 600 },
    { name: "Саша Коч", bounty: 400 },
    { name: "Серж", bounty: 400 },
    { name: "Даша Yellow", bounty: 400 },
    { name: "Оксана Б", bounty: 400 },
    { name: "Влад Владшток", bounty: 400 }
];

// Обновленные данные рейтинга
const currentRatingData = [
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
    { name: "grooveman", rating: 125 },
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
    } else if (activeTab === 'final') {
        players = finalPlayers;
    } else if (activeTab === 'bounties') {
        return 0;
    } else if (activeTab === 'rating') {
        return 0;
    } else {
        return 0;
    }
    
    const positiveResults = players.filter(player => player.win > 0);
    if (positiveResults.length === 0) return 0;
    const total = positiveResults.reduce((sum, player) => sum + Number(player.win), 0);
    return Math.round(total / positiveResults.length);
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    
    // Сортируем по убыванию рейтинга
    const sortedRating = [...currentRatingData].sort((a, b) => b.rating - a.rating);
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
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
            <td class="rating-number">${player.rating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функции для заполнения таблиц с поиском
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
    
    const sortedRating = [...currentRatingData].sort((a, b) => b.rating - a.rating);
    const filteredRating = sortedRating.filter(player => 
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
    
    filteredRating.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        // Подсветка топ 19 игроков и Никита Yellow
        const originalIndex = sortedRating.findIndex(p => p.name === player.name);
        const isTop19 = originalIndex < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'top-rating search-highlight';
        }
        
        const highlightedName = highlightText(player.name, searchTerm);
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${originalIndex + 1}</td>
            <td class="${nameClass}">${highlightedName}</td>
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
    
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...finalPlayers, ...bountyPlayers.map(p => ({ name: p.name })), ...currentRatingData];
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

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active').id;
    
    if (searchTerm === '') {
        if (activeTab === 'day1') {
            // День 1 - ничего не заполняем (только coming soon)
        } else if (activeTab === 'day2') {
            // День 2 - ничего не заполняем (только coming soon)
        } else if (activeTab === 'day3') {
            // День 3 - ничего не заполняем (только coming soon)
        } else if (activeTab === 'final') {
            // Финальная вкладка - ничего не заполняем
        } else if (activeTab === 'bounties') {
            fillBountiesTable();
        } else if (activeTab === 'rating') {
            fillRatingTable();
        }
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let foundPlayers = [];
    
    if (activeTab === 'bounties') {
        foundPlayers = bountyPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillBountiesTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'rating') {
        foundPlayers = currentRatingData.filter(player => 
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
    if (dateItems[0]) dateItems[0].innerHTML = '8.01.2026';
    if (dateItems[1]) dateItems[1].textContent = '24.01.2026';
}

// Обновление статистики при переключении вкладок
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
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
    } else if (activeTab === 'final') {
        totalPlayers = finalPlayers.length;
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
        totalPlayers = currentRatingData.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates();
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
    console.log('🚀 Турнир Миссис Дейзи Дак Q-2 загружен!');
    
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
