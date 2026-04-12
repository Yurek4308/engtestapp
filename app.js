// ==========================================
// 1. БАЗА ДАНИХ ТА НАЛАШТУВАННЯ
// ==========================================
const baseVocabulary = [
    { en: "Gorgeous", uk: "Розкішна", em: "😻", c: "co" }, { en: "Smart", uk: "Розумна", em: "🧠", c: "co" }, { en: "Funny", uk: "Смішна", em: "😂", c: "co" }, { en: "Cute", uk: "Мила", em: "🥺", c: "co" }, { en: "Perfect", uk: "Ідеальна", em: "✨", c: "co" }, { en: "Stunning", uk: "Приголомшлива", em: "🤩", c: "co" },
    { en: "Love", uk: "Любити", em: "❤️", c:"f" }, { en: "Kiss", uk: "Цілувати", em: "💋", c:"f" }, { en: "Smile", uk: "Посмішка", em: "😊", c:"f" }, { en: "Want", uk: "Хотіти", em: "🥺", c:"f" }, { en: "Need", uk: "Потребувати", em: "🆘", c:"f" }, { en: "Like", uk: "Подобатися", em: "❤️", c:"f" }, { en: "Miss", uk: "Сумувати", em: "😢", c:"f" }, { en: "Care", uk: "Піклуватися", em: "🫶", c:"f" },
    { en: "Shirt", uk: "Сорочка", em: "👕", c: "cl" }, { en: "Dress", uk: "Сукня", em: "👗", c: "cl" }, { en: "Hat", uk: "Шапка", em: "👒", c: "cl" }, { en: "Socks", uk: "Шкарпетки", em: "🧦", c: "cl" }, { en: "Pants", uk: "Штани", em: "👖", c: "cl" }, { en: "Jacket", uk: "Куртка", em: "🧥", c: "cl" },
    { en: "Coffee", uk: "Кава", em: "☕", c: "fo" }, { en: "Cake", uk: "Торт", em: "🍰", c: "fo" }, { en: "Chocolate", uk: "Шоколад", em: "🍫", c: "fo" },
    { en: "Together", uk: "Разом", em: "💞", c: "p" }, { en: "Forever", uk: "Назавжди", em: "♾️", c: "p" }, { en: "Beautiful", uk: "Красива", em: "😍", c: "p" }
];

const sentences = [
    { en: "I love you forever", uk: "Я кохаю тебе назавжди" }, { en: "We are together", uk: "Ми разом" }, { en: "You are beautiful", uk: "Ти красива" }
];

const levelSystem = [
    { xp: 0, name: "Кошеня", icon: "🐈" }, 
    { xp: 100, name: "Студентка", icon: "🐈" },
    { xp: 500, name: "Розумничка", icon: "🐈‍⬛😎" }, 
    { xp: 1000, name: "Леді", icon: "🐈‍⬛😎" },
    { xp: 2500, name: "Королева", icon: "👑🐈" }, 
    { xp: 5000, name: "Моя Богиня", icon: "👑🐈✨" }
];

const shopItems = [
    { id: 'freeze', name: 'Заморозка стріку ❄️', price: 300, icon: '🧊' },
    { id: 'shield', name: 'Щит для Боса 🛡️', price: 400, icon: '🛡️' },
    { id: 'hint', name: 'Лупа Шерлока (50/50) 🔍', price: 50, icon: '🔍' },
    { id: 'day_off', name: 'День без рішень 🧘‍♀️', price: 500, icon: '🧘‍♀️' },
    { id: 'coffee_bed', name: 'Кава/Чай у ліжко ☕', price: 200, icon: '☕' },
    { id: 'culinary', name: 'Кулінарний експеримент 👨‍🍳', price: 500, icon: '🍲' }
];

const loveNotes = [
    "Ти мій найулюбленіший сповіщення на телефоні 📱❤️",
    "Пишаюся тим, як ти стараєшся! Ти неймовірна 🌟",
    "Щоразу, коли ти посміхаєшся, я закохуюся заново 🥰",
    "Не можу дочекатися, щоб тебе обійняти 🫂",
    "Твій сміх — моя улюблена пісня 🎶",
    "Ти робиш мене кращим щодня 💪",
    "Цьомаю тебе в носик і в оченята! 😘",
    "Моя розумничка! Я так тобою пишаюся 🧠",
    "Ти найкраще, що траплялося зі мною ✨",
    "Мрію про наші майбутні поїздки разом 🚐",
    "Навіть коли ти злишся, ти страшенно мила 🥺",
    "Дякую, що ти є в моєму житті 💖",
    "Ти виглядаєш чарівно сьогодні 😍",
    "Пам'ятай: я завжди на твоєму боці 🤝",
    "Кохаю тебе до нестями 🌌"
];

// ==========================================
// 2. ГЛОБАЛЬНІ ЗМІННІ (Пам'ять)
// ==========================================
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
let lifetimeXP = parseInt(localStorage.getItem('lifetimeXP')) || 0;
let currentStreak = parseInt(localStorage.getItem('streak')) || 0;
let lastLogin = localStorage.getItem('lastLogin') || '';
let inventory = JSON.parse(localStorage.getItem('userInventory')) || [];
let usedCodes = JSON.parse(localStorage.getItem('usedCodes')) || [];
let dailyProg = JSON.parse(localStorage.getItem('dailyProg')) || { g1Done: false, g2Done: false, g3Done: false, noteShown: false };

let currentCat = 'all';
let synth = window.speechSynthesis;
let curCuid = null;

// ==========================================
// 3. ІНІЦІАЛІЗАЦІЯ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const cmBtn = document.getElementById('cm-btn');
    if (cmBtn) {
        cmBtn.onclick = () => { 
            const item = inventory.find(x => x.uid == curCuid);
            if(item) {
                let msg = `Коханий, я активувала купон на "${item.name}"! 👑 Чекаю на виконання!`;
                window.open(`https://t.me/YU_zIK?text=${encodeURIComponent(msg)}`, '_blank');
            }
            inventory = inventory.filter(x => x.uid != curCuid); 
            localStorage.setItem('userInventory', JSON.stringify(inventory)); 
            closeCoupon(); updateUI(); renderInventory(); 
            fireParticles(window.innerWidth/2, window.innerHeight/2, true); 
        };
    }
    initGamification();
    setInterval(checkNightModeAndNotes, 60000);
    setTimeout(checkNightModeAndNotes, 2000);
});

function initGamification() {
    const today = new Date().toDateString();
    if (lastLogin !== today) {
        lastLogin = today;
        localStorage.setItem('lastLogin', lastLogin);
        dailyProg = { g1Done: false, g2Done: false, g3Done: false, noteShown: false };
        saveDaily();
    }
    updateUI();
}

function updateUI() {
    if(document.getElementById('xp-count')) document.getElementById('xp-count').textContent = totalXP;
    if(document.getElementById('streak-count')) document.getElementById('streak-count').textContent = currentStreak;
    const lvl = getLevelInfo();
    if(document.getElementById('user-level-name')) document.getElementById('user-level-name').textContent = lvl.name;
    if(document.getElementById('user-level-icon')) document.getElementById('user-level-icon').textContent = lvl.icon;
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const t = document.getElementById(id);
    if(t) t.classList.add('active');
    
    if(id === 'home') document.getElementById('user-stats').style.display = 'flex';
    else document.getElementById('user-stats').style.display = 'none';

    if(id === 'dictionary') renderDictionary();
    if(id === 'profile') renderProfile();
    if(id === 'shop') renderShop();
    if(id === 'inventory') renderInventory();
}

// ==========================================
// 4. ПРОФІЛЬ ТА ЛІЧИЛЬНИК ДНІВ
// ==========================================
function renderProfile() {
    const startDate = new Date(2025, 4, 16); 
    const today = new Date();
    startDate.setHours(0,0,0,0); today.setHours(0,0,0,0);
    const diffDays = Math.floor(Math.abs(today - startDate) / (1000 * 60 * 60 * 24));
    
    if(document.getElementById('together-days')) document.getElementById('together-days').textContent = diffDays;

    const lvl = getLevelInfo();
    if(document.getElementById('prof-icon')) document.getElementById('prof-icon').textContent = lvl.icon;
    if(document.getElementById('prof-name')) document.getElementById('prof-name').textContent = lvl.name;
    if(document.getElementById('prof-xp')) document.getElementById('prof-xp').textContent = lifetimeXP;
}

function getLevelInfo() {
    let res = levelSystem[0];
    for(let l of levelSystem) { if(lifetimeXP >= l.xp) res = l; }
    return res;
}

// ==========================================
// 5. СЛОВНИК ТА ПАСХАЛКИ
// ==========================================
function renderDictionary() {
    const grid = document.getElementById('dict-grid');
    const searchInput = document.getElementById('dict-search');
    const q = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if(q === 'car') { 
        const car = document.createElement('div'); car.textContent = '🚐';
        car.style.cssText = 'position:fixed; left:-100px; top:50%; font-size:5rem; z-index:9999; transition:left 2s linear;';
        document.body.appendChild(car);
        setTimeout(() => car.style.left = '120vw', 50);
        setTimeout(() => { car.remove(); if(searchInput) searchInput.value=''; }, 2100);
        return; 
    }

    grid.innerHTML = '';
    baseVocabulary.forEach(w => {
        if(w.en.toLowerCase().includes(q) || w.uk.toLowerCase().includes(q)) {
            const card = document.createElement('div');
            card.className = 'dict-card';
            card.innerHTML = `<div style="font-size:1.5rem;">${w.em}</div><div><b>${w.en}</b></div><div>${w.uk}</div>`;
            grid.appendChild(card);
        }
    });
}

// ==========================================
// 6. МАГАЗИН ТА ІНВЕНТАР
// ==========================================
function renderShop() {
    const container = document.getElementById('shop-list');
    if(!container) return;
    container.innerHTML = '';
    shopItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'shop-item';
        div.innerHTML = `<span>${item.icon} ${item.name} (${item.price} 🌟)</span>
                         <button class="btn btn-primary" onclick="buyItem('${item.id}')">Купити</button>`;
        container.appendChild(div);
    });
}

function buyItem(id) {
    const item = shopItems.find(x => x.id === id);
    if(totalXP >= item.price) {
        addXP(-item.price);
        inventory.push({ ...item, uid: Date.now() });
        localStorage.setItem('userInventory', JSON.stringify(inventory));
        showToast("Куплено!");
        renderShop();
    } else {
        alert("Бракує зірочок!");
    }
}

function renderInventory() {
    const container = document.getElementById('inv-list');
    if(!container) return;
    container.innerHTML = '';
    inventory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<span>${item.icon} ${item.name}</span>
                         <button class="btn btn-primary" onclick="openCoupon('${item.uid}')">Використати</button>`;
        container.appendChild(div);
    });
}

function openCoupon(uid) {
    curCuid = uid;
    const item = inventory.find(x => x.uid == uid);
    if(item) {
        document.getElementById('cm-title').textContent = item.name;
        document.getElementById('coupon-modal').style.display = 'flex';
    }
}

function closeCoupon() { document.getElementById('coupon-modal').style.display = 'none'; }

// ==========================================
// 7. ДОПОМІЖНІ ФУНКЦІЇ
// ==========================================
function addXP(val) {
    totalXP += val; if(val > 0) lifetimeXP += val;
    localStorage.setItem('totalXP', totalXP);
    localStorage.setItem('lifetimeXP', lifetimeXP);
    updateUI();
}

function saveDaily() { localStorage.setItem('dailyProg', JSON.stringify(dailyProg)); }

function checkNightModeAndNotes() {
    const h = new Date().getHours();
    const appCont = document.getElementById('app-container');
    if(appCont) {
        if(h >= 23 || h < 4) appCont.style.background = 'linear-gradient(to bottom, #0f2027, #2c5364)';
        else appCont.style.background = '';
    }
    
    // Показуємо записку, якщо всі цілі виконані
    // Для тесту можеш змінити умови тут
}

function fireParticles(x, y, cor) { /* Твоя функція частинок */ }
function showToast(m) { alert(m); } // Тимчасово алертом
