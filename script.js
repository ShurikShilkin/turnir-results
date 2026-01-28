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
    { name: "Алиса Исм", place: 38 },
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

// Данные охоты за головами для нового турнира (ТОЛЬКО имя и цена)
const huntingPlayers = [
    { name: "Михаил Наб", bounty: 1000 },
    { name: "Семён Ануфриев", bounty: 1000 },
    { name: "Robert Юниксфактёр", bounty: 1000 },
    { name: "Шурик Шилкин", bounty: 1000 },
    { name: "grooveman", bounty: 1000 },
    { name: "Максим Spy", bounty: 800 },
    { name: "Jane 007", bounty: 800 },
    { name: "Михаил Козадой", bounty: 800 },
    { name: "Богдан А", bounty: 800 },
    { name: "Свидетель", bounty: 800 },
    { name: "Сергей Ман", bounty: 600 },
    { name: "Дмитрий Ник", bounty: 600 },
    { name: "Кристина А", bounty: 600 },
    { name: "Лев Р", bounty: 600 },
    { name: "Egrinderolls", bounty: 600 },
    { name: "Влад Владшток", bounty: 400 },
    { name: "Полина Матыцына", bounty: 400 },
    { name: "Никита Зейн", bounty: 400 },
    { name: "Роман Егоров", bounty: 400 },
    { name: "Серж", bounty: 400 }
];

// Предыдущий рейтинг
const previousRatingData = [
    { name: "Михаил Наб", rating: 411 },
    { name: "Robert Юниксфактёр", rating: 349 },
    { name: "Шурик Шилкин", rating: 315 },
    { name: "Семён Ануфриев", rating: 282 },
    { name: "Максим Spy", rating: 267 },
    { name: "grooveman", rating: 256 },
    { name: "Богдан А", rating: 239 },
    { name: "Jane 007", rating: 232 },
    { name: "Михаил Козадой", rating: 226 },
    { name: "Свидетель", rating: 219 },
    { name: "Лев Р", rating: 219 },
    { name: "Полина Матыцына", rating: 168 },
    { name: "Никита Зейн", rating: 168 },
    { name: "Egrinderolls", rating: 165 },
    { name: "Влад Владшток", rating: 157 },
    { name: "Роман Егоров", rating: 157 },
    { name: "Кристина А", rating: 142 },
    { name: "Саша Коч", rating: 139 },
    { name: "Настя К", rating: 134 },
    { name: "Дмитрий Ник", rating: 128 },
    { name: "Серж", rating: 103 },
    { name: "Даша Yellow", rating: 98 },
    { name: "Сергей Ман", rating: 93 },
    { name: "Наташа Бонд", rating: 93 },
    { name: "Искандер", rating: 87 },
    { name: "Оксана Б", rating: 87 },
    { name: "Инна М", rating: 78 },
    { name: "Ксения Куд", rating: 78 },
    { name: "Федор К", rating: 72 },
    { name: "Никита Yellow", rating: 71 },
    { name: "Разамана Рах", rating: 70 },
    { name: "Роман Лод", rating: 63 },
    { name: "Макар Аве", rating: 62 },
    { name: "Даня Д", rating: 58 },
    { name: "Макс Пиво", rating: 57 },
    { name: "Леонид П", rating: 52 },
    { name: "Соня Серж", rating: 52 },
    { name: "Петя Федоров", rating: 50 },
    { name: "Том", rating: 50 },
    { name: "Иван Антипов", rating: 47 },
    { name: "Соня Кур", rating: 46 },
    { name: "Иван Баж", rating: 41 },
    { name: "Артём 007", rating: 40 },
    { name: "Даша Гри", rating: 40 },
    { name: "Михаил Т", rating: 37 },
    { name: "Артемий Мен", rating: 35 },
    { name: "Евгений Ц", rating: 35 },
    { name: "Аня Гам", rating: 31 },
    { name: "Никита Сизов", rating: 31 },
    { name: "Гавриил Морозов", rating: 30 },
    { name: "Родион Шашурин", rating: 30 },
    { name: "Дима Жур", rating: 29 },
    { name: "Анна К", rating: 28 },
    { name: "Вова Баж", rating: 27 },
    { name: "Миша Скиф", rating: 26 },
    { name: "Родион К", rating: 26 },
    { name: "Вика Ч", rating: 23 },
    { name: "Всеволод Кузнецов", rating: 23 },
    { name: "Илья Без", rating: 23 },
    { name: "Эмиль", rating: 23 },
    { name: "Алиса Исм", rating: 22 },
    { name: "Дарья Шев", rating: 22 },
    { name: "Славяна", rating: 22 },
    { name: "Руфат Макиато", rating: 21 },
    { name: "Влад Голубев", rating: 20 },
    { name: "Михаил Таб", rating: 20 },
    { name: "Ирина Ага", rating: 19 },
    { name: "Даша Хромова", rating: 18 },
    { name: "Александр Исаев", rating: 17 },
    { name: "Даня КДД", rating: 15 },
    { name: "Вова Гриненко", rating: 14 }
];

// Добавки рейтинга для указанных игроков
const ratingAdditions = [
    { name: "Семён Ануфриев", addition: 203 },
    { name: "Сергей Ман", addition: 144 },
    { name: "Михаил Наб", addition: 117 },
    { name: "Дмитрий Ник", addition: 102 },
    { name: "Robert Юниксфактёр", addition: 91 },
    { name: "Кристина А", addition: 83 },
    { name: "grooveman", addition: 77 },
    { name: "Михаил Козадой", addition: 72 },
    { name: "Jane 007", addition: 68 },
    { name: "Леонид П", addition: 64 },
    { name: "Макар Аве", addition: 61 },
    { name: "Влад Владшток", addition: 59 },
    { name: "Максим Spy", addition: 56 },
    { name: "Egrinderolls", addition: 54 },
    { name: "Шурик Шилкин", addition: 53 },
    { name: "Роман Лод", addition: 51 },
    { name: "Соня Серж", addition: 49 },
    { name: "Богдан А", addition: 48 },
    { name: "Свидетель", addition: 47 },
    { name: "Серж", addition: 45 },
    { name: "Миша Скиф", addition: 44 },
    { name: "Даня Д", addition: 43 },
    { name: "Михаил Т", addition: 42 }
];

// Данные для нового турнира (пока пустые)
const day1Players = [];
const day2Players = [];
const day3Players = [];
const day4Players = [];

// Функция переключения вкладок
function showTab(tabName) {
    // Проверяем, что tabName валидный
    if (!tabName) {
        tabName = 'day1';
    }
    
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок в основном таббаре
    const mainTabButtons = document.querySelectorAll('.tabs .tab-button');
    mainTabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    const tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.classList.add('active');
    } else {
        console.error('Вкладка не найдена:', tabName);
        // Показываем первую доступную вкладку
        const firstTab = document.querySelector('.tab-content');
        if (firstTab) {
            firstTab.classList.add('active');
            tabName = firstTab.id;
        }
    }
    
    // Активируем соответствующую кнопку в основном таббаре (если это не рейтинг и не предыдущий турнир и не охота)
    if (tabName !== 'rating' && tabName !== 'previousResults' && tabName !== 'hunting') {
        const targetButton = document.querySelector(`.tabs .tab-button[onclick*="${tabName}"]`);
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
    if (!phaseElement) return;
    
    switch(tabName) {
        case 'day1':
            phaseElement.textContent = 'День 1 - 29.01.2026';
            break;
        case 'day2':
            phaseElement.textContent = 'День 2 - 5.02.2026';
            break;
        case 'day3':
            phaseElement.textContent = 'День 3 - 12.02.2026';
            break;
        case 'day4':
            phaseElement.textContent = 'День 4 - 19.02.2026';
            break;
        case 'final':
            phaseElement.textContent = 'ФИНАЛ ТУРНИРА - 21.02.2026';
            break;
        case 'hunting':
            phaseElement.textContent = 'Охота за головами';
            break;
        case 'rating':
            phaseElement.textContent = 'Рейтинг';
            break;
        case 'previousResults':
            phaseElement.textContent = 'Результаты турнира Миссис Дейзи Дак Q-2';
            break;
        default:
            phaseElement.textContent = 'Турнир Дональда Дака К-2';
    }
}

// Функция развертывания таблицы на мобильных
function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    const tables = document.querySelectorAll(`#${activeTabId} .tournament-table`);
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
    } else if (activeTabId === 'day4') {
        players = day4Players;
    } else {
        return 0;
    }
    
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
    if (place === 1) {
        return 'gold-place';
    } else if (place === 2) {
        return 'silver-place';
    } else if (place === 3) {
        return 'bronze-place';
    } else if (place >= 4 && place <= 23) {
        return 'green-place';
    } else {
        return '';
    }
}

// Получение эмодзи для места
function getPlaceEmoji(place) {
    if (place === 1) {
        return '🥇';
    } else if (place === 2) {
        return '🥈';
    } else if (place === 3) {
        return '🥉';
    } else {
        return '';
    }
}

// Заполнение таблицы результатов предыдущего турнира
function fillPreviousResultsTable() {
    const tableBody = document.getElementById('previousResultsTable');
    if (!tableBody) {
        console.error('Элемент previousResultsTable не найден!');
        return;
    }
    
    tableBody.innerHTML = '';
    
    previousTournamentResults.forEach((player, index) => {
        const row = document.createElement('tr');
        const placeClass = getPlaceClass(player.place);
        const placeEmoji = getPlaceEmoji(player.place);
        
        row.className = placeClass;
        
        let status = '';
        if (player.place === 1) {
            status = '🏆 Победитель турнира';
        } else if (player.place === 2) {
            status = '🥈 Второе место';
        } else if (player.place === 3) {
            status = '🥉 Третье место';
        } else if (player.place >= 4 && player.place <= 23) {
            status = '✅ Финалист';
        } else {
            status = '⭐ Участник турнира';
        }
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${status}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Таблица результатов предыдущего турнира заполнена:', previousTournamentResults.length, 'игроков');
}

// Заполнение таблицы охоты за головами (ПРОСТАЯ ВЕРСИЯ)
function fillHuntingTable() {
    const tableBody = document.getElementById('huntingTable');
    if (!tableBody) {
        console.error('Элемент huntingTable не найден!');
        return;
    }
    
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
    
    console.log('Таблица охоты за головами заполнена:', huntingPlayers.length, 'игроков');
}

// Расчет нового рейтинга с добавками
function calculateNewRating() {
    const newRating = [];
    
    // Создаем мап предыдущих рейтингов
    const previousRatingMap = new Map();
    previousRatingData.forEach(player => {
        previousRatingMap.set(player.name, player.rating);
    });
    
    // Создаем мап добавок рейтинга
    const ratingAdditionMap = new Map();
    ratingAdditions.forEach(player => {
        ratingAdditionMap.set(player.name, player.addition);
    });
    
    // Собираем всех игроков из предыдущего рейтинга
    const allPlayers = previousRatingData.map(player => player.name);
    
    allPlayers.forEach(playerName => {
        // Определяем предыдущий рейтинг
        const previousRating = previousRatingMap.get(playerName) || 0;
        
        // Определяем добавку рейтинга (если есть)
        const addition = ratingAdditionMap.get(playerName) || 0;
        const newRatingValue = previousRating + addition;
        
        newRating.push({
            name: playerName,
            previousRating: previousRating,
            change: addition,
            newRating: newRatingValue,
            isNewPlayer: false
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
        const oldIndex = sortedPreviousRating.findIndex(p => p.name === player.name);
        
        if (oldIndex === -1) {
            // Новый игрок
            positionChanges.set(player.name, {
                change: 0,
                type: 'new'
            });
        } else {
            const change = oldIndex - newIndex;
            if (change > 0) {
                // Поднялся вверх
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'up'
                });
            } else if (change < 0) {
                // Опустился вниз
                positionChanges.set(player.name, {
                    change: Math.abs(change),
                    type: 'down'
                });
            } else {
                // Остался на том же месте
                positionChanges.set(player.name, {
                    change: 0,
                    type: 'same'
                });
            }
        }
    });
    
    return positionChanges;
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
    
    if (sortedRating.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #666;">
                    Данные рейтинга отсутствуют
                </td>
            </tr>
        `;
        return;
    }
    
    sortedRating.forEach((player, index) => {
        const row = document.createElement('tr');
        
        // Определяем класс для изменения
        let changeClass = "rating-neutral";
        if (player.change > 0) {
            changeClass = "rating-positive";
        } else if (player.change < 0) {
            changeClass = "rating-negative";
        }
        
        const changeSign = player.change > 0 ? "+" : "";
        const changeData = positionChanges.get(player.name);
        const changeHTML = createPositionChangeHTML(changeData);
        
        // Подсветка первых 19 игроков и Никиты Yellow
        const isTop19 = index < 19;
        const isNikitaYellow = player.name === "Никита Yellow";
        
        if (isTop19 || isNikitaYellow) {
            row.className = 'rating-highlight';
        }
        
        // Добавляем корону для Никиты Yellow
        const nameClass = isNikitaYellow ? 'player-name rating-crown' : 'player-name';
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="${nameClass}">${player.name}</td>
            <td>${changeHTML}</td>
            <td>${player.previousRating}</td>
            <td class="${changeClass}">${changeSign}${player.change}</td>
            <td class="rating-number">${player.newRating}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('✅ Таблица рейтинга заполнена:', sortedRating.length, 'игроков');
}

// Автодополнение для поиска в основном интерфейсе
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    if (!searchInput || !autocompleteResults) {
        console.error('Элементы поиска не найдены!');
        return;
    }
    
    // Собираем все имена игроков из всех источников
    const allPlayers = [
        ...previousTournamentResults.map(p => ({ name: p.name })),
        ...huntingPlayers.map(p => ({ name: p.name })),
        ...calculateNewRating(),
        ...previousRatingData.map(p => ({ name: p.name }))
    ];
    
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

// Функция для подсветки найденного текста
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
}

// Поиск игроков в основном интерфейсе
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const activeTabId = activeTab.id;
    
    if (searchTerm === '') {
        if (activeTabId === 'previousResults') {
            fillPreviousResultsTable();
        } else if (activeTabId === 'hunting') {
            fillHuntingTable();
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
    
    if (activeTabId === 'previousResults') {
        foundPlayers = previousTournamentResults.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillPreviousResultsTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTabId === 'hunting') {
        foundPlayers = huntingPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillHuntingTableWithSearch(foundPlayers, searchTerm);
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
        if (player.place === 1) {
            status = '🏆 Победитель турнира';
        } else if (player.place === 2) {
            status = '🥈 Второе место';
        } else if (player.place === 3) {
            status = '🥉 Третье место';
        } else if (player.place >= 4 && player.place <= 23) {
            status = '✅ Финалист';
        } else {
            status = '⭐ Участник турнира';
        }
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${highlightedName}</td>
            <td class="place-column ${placeClass}">${player.place} ${placeEmoji}</td>
            <td class="place-notes">${status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы охоты с поиском (ПРОСТАЯ ВЕРСИЯ)
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
    } else if (activeTabId === 'day4') {
        totalPlayers = day4Players.length;
        averageStack = calculateAverageStack();
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'previousResults') {
        totalPlayers = previousTournamentResults.length;
        averageStack = 0;
        if (totalPlayersElement) animateCounter(totalPlayersElement, totalPlayers);
        if (averageStackElement) animateCounter(averageStackElement, averageStack);
    } else if (activeTabId === 'hunting') {
        totalPlayers = huntingPlayers.length;
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
    console.log('🚀 Турнир Дональда Дака К-2 загружен!');
    
    // Заполняем все таблицы
    fillPreviousResultsTable();
    fillHuntingTable();
    fillRatingTable();
    
    // Настраиваем автодополнение
    setupAutocomplete();
    
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
    
    console.log('📊 Новый турнир готов к началу!');
    console.log('📅 Первый день: 29.01.2026');
    console.log('👑 Охота за головами: ' + huntingPlayers.length + ' игроков в списке');
});
