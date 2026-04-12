// ==========================================
// 1. БАЗА ДАНИХ (Словник, налаштування)
// ==========================================
const baseVocabulary = [
    { en: "Gorgeous", uk: "Розкішна", em: "😻", c: "co" }, { en: "Smart", uk: "Розумна", em: "🧠", c: "co" }, { en: "Funny", uk: "Смішна", em: "😂", c: "co" }, { en: "Cute", uk: "Мила", em: "🥺", c: "co" }, { en: "Perfect", uk: "Ідеальна", em: "✨", c: "co" }, { en: "Stunning", uk: "Приголомшлива", em: "🤩", c: "co" },
    { en: "Shirt", uk: "Сорочка", em: "👕", c: "cl" }, { en: "Dress", uk: "Сукня", em: "👗", c: "cl" }, { en: "Hat", uk: "Шапка", em: "👒", c: "cl" }, { en: "Socks", uk: "Шкарпетки", em: "🧦", c: "cl" }, { en: "Pants", uk: "Штани", em: "👖", c: "cl" }, { en: "Jacket", uk: "Куртка", em: "🧥", c: "cl" }, { en: "Skirt", uk: "Спідниця", em: "👗", c: "cl" }, { en: "Shoes", uk: "Взуття", em: "👟", c: "cl" }, { en: "Coat", uk: "Пальто", em: "🧥", c: "cl" }, { en: "Scarf", uk: "Шарф", em: "🧣", c: "cl" },
    { en: "Because", uk: "Тому що", em: "❓", c: "p" }, { en: "But", uk: "Але", em: "☝️", c: "p" }, { en: "Or", uk: "Або", em: "🔁", c: "p" }, { en: "With", uk: "З", em: "➕", c: "p" }, { en: "For", uk: "Для", em: "🎁", c: "p" }, { en: "In", uk: "В", em: "📥", c: "p" }, { en: "On", uk: "На", em: "🔝", c: "p" }, { en: "Under", uk: "Під", em: "👇", c: "p" }, { en: "Today", uk: "Сьогодні", em: "📅", c: "p" }, { en: "Tomorrow", uk: "Завтра", em: "⏭️", c: "p" }, { en: "Always", uk: "Завжди", em: "♾️", c: "p" }, { en: "Never", uk: "Ніколи", em: "🚫", c: "p" }, { en: "Fast", uk: "Швидко", em: "⚡", c: "p" }, { en: "Slow", uk: "Повільно", em: "🐢", c: "p" }, { en: "Very", uk: "Дуже", em: "‼️", c: "p" },
    { en: "Cake", uk: "Торт", em: "🍰", c: "fo" }, { en: "Chocolate", uk: "Шоколад", em: "🍫", c: "fo" }, { en: "Ice cream", uk: "Морозиво", em: "🍦", c: "fo" }, { en: "Coffee", uk: "Кава", em: "☕", c: "fo" }, { en: "Candy", uk: "Цукерка", em: "🍬", c: "fo" }, { en: "Sweets", uk: "Солодощі", em: "🍭", c: "fo" },
    { en: "Lips", uk: "Губи", em: "👄", c: "bh" }, { en: "Hands", uk: "Руки", em: "🤲", c: "bh" }, { en: "Hair", uk: "Волосся", em: "💇‍♀️", c: "bh" }, { en: "Hug", uk: "Обійми", em: "🫂", c: "bh" },
    { en: "Grass", uk: "Трава", em: "🌿", c:"n" }, { en: "Tree", uk: "Дерево", em: "🌳", c:"n" }, { en: "Flower", uk: "Квітка", em: "🌸", c:"n" }, { en: "Stick", uk: "Палиця", em: "🪵", c:"n" }, { en: "Sun", uk: "Сонце", em: "☀️", c:"n" }, { en: "Moon", uk: "Місяць", em: "🌙", c:"n" }, { en: "Star", uk: "Зірка", em: "⭐", c:"n" }, { en: "Cloud", uk: "Хмара", em: "☁️", c:"n" }, { en: "Sky", uk: "Небо", em: "🌌", c:"n" },
    { en: "Talk", uk: "Розмовляти", em: "🗣️", c:"a" }, { en: "Speak", uk: "Говорити", em: "🎙️", c:"a" }, { en: "Tell", uk: "Розповідати", em: "💬", c:"a" }, { en: "Eat", uk: "Їсти", em: "🍽️", c:"a" }, { en: "Drink", uk: "Пити", em: "🥤", c:"a" }, { en: "Go", uk: "Йти", em: "🚶‍♀️", c:"a" }, { en: "Come", uk: "Приходити", em: "🏃‍♀️", c:"a" }, { en: "Make", uk: "Робити", em: "🛠️", c:"a" }, { en: "Take", uk: "Брати", em: "🤲", c:"a" }, { en: "Give", uk: "Давати", em: "🎁", c:"a" }, { en: "See", uk: "Бачити", em: "👁️", c:"a" }, { en: "Watch", uk: "Спостерігати", em: "📺", c:"a" }, { en: "Look", uk: "Дивитися", em: "🔭", c:"a" }, { en: "Buy", uk: "Купувати", em: "🛍️", c:"a" }, { en: "Sell", uk: "Продавати", em: "💵", c:"a" }, { en: "Sold", uk: "Продано", em: "✅", c:"a" }, { en: "Sink", uk: "Тонути", em: "⚓", c:"a" }, { en: "Think", uk: "Думати", em: "🤔", c:"a" },
    { en: "Love", uk: "Любити", em: "❤️", c:"f" }, { en: "Kiss", uk: "Цілувати", em: "💋", c:"f" }, { en: "Smile", uk: "Посмішка", em: "😊", c:"f" }, { en: "Want", uk: "Хотіти", em: "🥺", c:"f" }, { en: "Need", uk: "Потребувати", em: "🆘", c:"f" }, { en: "Like", uk: "Подобатися", em: "❤️", c:"f" }, { en: "Miss", uk: "Сумувати", em: "😢", c:"f" }, { en: "Care", uk: "Піклуватися", em: "🫶", c:"f" }, { en: "Trust", uk: "Довіряти", em: "🤞", c:"f" }, { en: "Feel", uk: "Відчувати", em: "💓", c:"f" }, { en: "Touch", uk: "Торкатися", em: "👆", c:"f" }, { en: "Hold", uk: "Тримати", em: "🤝", c:"f" },
    { en: "Eyes", uk: "Очі", em: "👀", c:"h" }, { en: "Salt", uk: "Сіль", em: "🧂", c:"h" }, { en: "Small", uk: "Маленький", em: "🤏", c:"h" }, { en: "Big", uk: "Великий", em: "🐘", c:"h" }, { en: "Cool", uk: "Крутий", em: "😎", c:"h" }, { en: "Good", uk: "Хороший", em: "👍", c:"h" }, { en: "Kind", uk: "Добрий", em: "😇", c:"h" }, { en: "Cold", uk: "Холодний", em: "❄️", c:"h" }, { en: "Hot", uk: "Гарячий", em: "🔥", c:"h" }, { en: "Children", uk: "Діти", em: "👶", c:"h" }, { en: "Family", uk: "Сім'я", em: "🏡", c:"h" }, { en: "Mirror", uk: "Дзеркало", em: "🪞", c:"h" }, { en: "Error", uk: "Помилка", em: "❌", c:"h" }, { en: "Phone", uk: "Телефон", em: "📱", c:"h" }, { en: "House", uk: "Будинок", em: "🏠", c:"h" }, { en: "Flat", uk: "Квартира", em: "🏢", c:"h" }, { en: "Bed", uk: "Ліжко", em: "🛏️", c:"h" }, { en: "Bad", uk: "Поганий", em: "👎", c:"h" }, { en: "Bedroom", uk: "Спальня", em: "🛌", c:"h" }, { en: "Sweet", uk: "Солодкий", em: "🍬", c:"h" },
    { en: "Let's", uk: "Давай", em: "🤝", c:"p" }, { en: "About", uk: "Про", em: "ℹ️", c:"p" }, { en: "Something", uk: "Щось", em: "📦", c:"p" }, { en: "I am", uk: "Я (є)", em: "🙋‍♀️", c:"p" }, { en: "We are", uk: "Ми (є)", em: "👫", c:"p" }, { en: "You are", uk: "Ти (є)", em: "🫵", c:"p" }, { en: "They are", uk: "Вони (є)", em: "👨‍👩‍👦", c:"p" }, { en: "He is", uk: "Він (є)", em: "👨", c:"p" }, { en: "She is", uk: "Вона (є)", em: "👩", c:"p" }, { en: "It is", uk: "Воно (є)", em: "🤖", c:"p" }, { en: "Close", uk: "Близько", em: "🤏", c:"p" }, { en: "Together", uk: "Разом", em: "💞", c:"p" }, { en: "Forever", uk: "Назавжди", em: "♾️", c:"p" }, { en: "Beautiful", uk: "Красива", em: "😍", c:"p" }
];

const sentences = [
    { en: "I love you forever", uk: "Я кохаю тебе назавжди" }, { en: "We are together", uk: "Ми разом" }, { en: "You are beautiful", uk: "Ти красива" }, { en: "Give me a kiss", uk: "Дай мені поцілунок" }, { en: "Look at the stars", uk: "Подивись на зірки" }, { en: "I miss you", uk: "Я сумую за тобою" }, { en: "Hold me close", uk: "Тримай мене міцно" }, { en: "You make me smile", uk: "Ти змушуєш мене посміхатися" }, { en: "I want to hug you", uk: "Я хочу обійняти тебе" }, { en: "You are my everything", uk: "Ти моє все" }, { en: "Let's drink some coffee", uk: "Давай вип'ємо трохи кави" }, { en: "I need you today", uk: "Ти потрібна мені сьогодні" }, { en: "You are so smart", uk: "Ти така розумна" }, { en: "We can go tomorrow", uk: "Ми можемо піти завтра" }, { en: "Always think about you", uk: "Завжди думаю про тебе" }, { en: "You have beautiful eyes", uk: "У тебе красиві очі" }, { en: "I like this sweet cake", uk: "Мені подобається цей солодкий торт" }, { en: "Let's watch a cool movie", uk: "Давай подивимось крутий фільм" }, { en: "You are a perfect girl", uk: "Ти ідеальна дівчина" }, { en: "I feel so good with you", uk: "Мені так добре з тобою" }
];

const catTips = [
    "Мяу! Ти сьогодні просто сяєш! ✨", "Ти - мій головний приз у цьому житті! ❤️", "Оля - найкраща дівчинка на світі! Мурр.. 🥰", "Твоя англійська стає все кращою, я пишаюся! 👑", "Кицику, не забудь усміхнутися, це тобі личить! 😊", "Сумуєш за Юрою? Він теж дуууже сумує! 🥺", "Покрути рулетку, Юра замовив тобі приз! 🎁", "Пам'ятай: ти розумна, красива і кохана! 💖", "Я тут, щоб оберігати твій прогрес! 🐾", "Твоя посмішка дорожча за всі зірочки! 😍"
];

const compliments = ["Ти сьогодні неймовірна! ✨", "Моя найрозумніша дівчинка 🥰", "Пишаюся тобою ❤️", "Твоя посмішка - найкраща 😍", "Твоя наполегливість вражає! 🚀", "Кохаю тебе безмежно 💖", "Кохаю тебе дужче🤗", "Моя манюня😊", "Моє серденько ❤️", "Кохаю тебе кицюня😘", "Ти моє найбільше натхнення 🌸"];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const shopItems = [
    // Твоя особлива картка
    { id: 'olya_love', name: 'Оля любить дужче Юру', price: 'ERROR', icon: '♾️' },
    
    // Віртуальні предмети (допомога в грі)
    { id: 'freeze', name: 'Заморозка стріку ❄️', price: 300, icon: '🧊' },
    { id: 'shield', name: 'Щит для Боса 🛡️', price: 400, icon: '🛡️' },
    { id: 'hint', name: 'Лупа Шерлока (50/50) 🔍', price: 50, icon: '🔍' },
    { id: 'vip_slang', name: 'VIP: Пікантні фрази 🌶️', price: 1000, icon: '🌶️' },
    { id: 'title_queen', name: 'Титул: Володарка серця 👑', price: 1000, icon: '📜' },
    
    // Реальні купони (твої обіцянки)
    { id: 'massage', name: 'Масаж спини', price: 500, icon: '💆‍♀️' },
    { id: 'dinner', name: 'Романтична вечеря', price: 1500, icon: '🍷' },
    { id: 'hug', name: 'Безлімітні обійми на день', price: 200, icon: '🫂' },
    { id: 'day_off', name: 'День без рішень 🧘‍♀️', price: 500, icon: '🧘‍♀️' },
    { id: 'movie_veto', name: 'Право вето на фільм 🍿', price: 300, icon: '🚫' },
    { id: 'coffee_bed', name: 'Кава/Чай у ліжко ☕', price: 200, icon: '☕' },
    { id: 'culinary', name: 'Кулінарний експеримент 👨‍🍳', price: 500, icon: '🍲' }
];

const bmItems = [
    { id: 'bm_night', name: 'Ексклюзив: Нічна прогулянка 🌙', price: 800, icon: '🌃' },
    { id: 'bm_breakfast', name: 'Ексклюзив: Сніданок у ліжко 🥐', price: 600, icon: '🥞' },
    { id: 'bm_cinema', name: 'Ексклюзив: Похід у кінотеатр 🍿', price: 900, icon: '🎞️' },
    { id: 'bm_picnic', name: 'Ексклюзив: Пікнік у парку 🧺', price: 750, icon: '🌳' },
    { id: 'bm_flowers', name: 'Ексклюзив: Букет квітів 💐', price: 1200, icon: '🌷' }
];

const wheelPrizes = [
    { type: 'jackpot', val: '500', msg: 'ДЖЕКПОТ! Масаж спини твій!', icon: '💆‍♀️', name: 'Масаж спини (ДЖЕКПОТ)' },
    { type: 'xp', val: 20, msg: '+20 🌟! Непогано!' },
    { type: 'xp', val: 0, msg: 'Пусто... Цього разу не пощастило 😢' },
    { type: 'xp', val: 20, msg: '+20 🌟! Непогано!' },
    { type: 'xp', val: 0, msg: 'Пусто... Цього разу не пощастило 😢' },
    { type: 'xp', val: 20, msg: '+20 🌟! Непогано!' },
    { type: 'xp', val: 50, msg: '+50 🌟! Ого, ти повернула своє!' },
    { type: 'xp', val: 100, msg: 'КЛАС! +100 🌟!' },
    { type: 'item', val: '🍫🍬', msg: 'Виграш: Солодощі! Шукай у Купонах!', icon: '🍬', name: 'Смаколики (Рулетка)' },
    { type: 'item', val: '🎁', msg: 'Виграш: Сюрприз! Шукай у Купонах!', icon: '🎁', name: 'Подарунок-сюрприз (Рулетка)' }
];

const goalPool = {
    easy: [ { id:'g1', title: "🎮 Easy: Зіграти 2 ігри", target: 2, rew: 5, type: 'games' }, { id:'g2', title: "🗂️ Easy: Погортати 10 карток", target: 10, rew: 5, type: 'flash' }, { id:'g3', title: "🤩 Easy: Вгадати 5 емодзі", target: 5, rew: 5, type: 'emoji' } ],
    medium: [ { id:'m1', title: "🔗 Mid: З'єднати 12 пар", target: 12, rew: 10, type: 'pairs' }, { id:'m2', title: "🎯 Mid: Квіз (16 балів)", target: 16, rew: 10, type: 'quiz_score' }, { id:'m3', title: "🔠 Mid: Спелінг (5 слів)", target: 5, rew: 10, type: 'spell' } ],
    hard: [ { id:'h1', title: "⚡ Hard: Спринт (25+ балів)", target: 25, rew: 20, type: 'sprint' }, { id:'h2', title: "👑 Hard: Квіз без помилок", target: 20, rew: 25, type: 'perfect' }, { id:'h3', title: "❤️‍🩹 Hard: Шибениця без втрат ❤️", target: 1, rew: 20, type: 'clean_hm' } ]
};

const achievList = { 
    first_blood: { icon: "🌱", title: "Перший крок", desc: "Зіграти першу гру", secret: false }, perfect: { icon: "👑", title: "Моя відмінниця", desc: "Пройти квіз без помилок", secret: false }, speed: { icon: "⚡", title: "Швидша за вітер", desc: "Набрати 15+ у спринті", secret: false }, love: { icon: "💘", title: "Справжнє кохання", desc: "Знайти таємну пасхалку", secret: false }, streak3: { icon: "🔥", title: "Капітан Стрік", desc: "Зайти 3 дні підряд", secret: false }, streak7: { icon: "🔥", title: "Тиждень в ділі", desc: "Зайти 7 днів підряд", secret: false }, owl: { icon: "🦉", title: "Нічна пташка", desc: "Вчити слова після 22:00", secret: false }, polyglot: { icon: "🎓", title: "Поліглот", desc: "Зіграти 50 ігор загалом", secret: false }, rich: { icon: "💰", title: "Багачка", desc: "Накопичити 2000 зірочок", secret: false }, shopaholic: { icon: "🛍️", title: "Шопоголік", desc: "Купити 3 товари в магазині", secret: false }, early_bird: { icon: "🌅", title: "Рання пташка", desc: "Зайти в додаток з 05:00 до 09:00", secret: false }, sniper: { icon: "🎯", title: "Снайпер", desc: "15/15 у свайп T/F без помилок", secret: false }, bookworm: { icon: "📚", title: "Книжковий черв'як", desc: "Перегорнути 50 карток", secret: false }, builder: { icon: "🏗️", title: "Будівельник", desc: "Зіграти 10 разів у Конструктор", secret: false }, vocab_king: { icon: "📖", title: "Леді Словник", desc: "Відкрити словник 50 разів", secret: false }, marathon: { icon: "🏃‍♀️", title: "Марафон", desc: "Зіграти 10 ігор за день", secret: false }, survivor: { icon: "🪓", title: "Виживальниця", desc: "СЕКРЕТ! Виграти Шибеницю з 1 ❤️", secret: true }, crafter: { icon: "⛏️", title: "Майстер крафту", desc: "СЕКРЕТ! Конструктор без помилок", secret: true }, ninja: { icon: "🥷", title: "Нічний ніндзя", desc: "СЕКРЕТ! Грати з 01:00 до 04:00", secret: true }, sherlock: { icon: "🕵️‍♀️", title: "Шерлок", desc: "СЕКРЕТ! Знайти 3 промокоди", secret: true }, navigator: { icon: "🚐", title: "Головний штурман", desc: "СЕКРЕТ! Знайти код авто", secret: true }, hacker: { icon: "👨‍💻", title: "Хакер", desc: "СЕКРЕТ! Ввести 3 хибних промокоди", secret: true }, sleeping_beauty: { icon: "😴", title: "Спляча красуня", desc: "СЕКРЕТ! Повернутися через 3 дні", secret: true }, hug_addict: { icon: "🫂", title: "Ненаситна", desc: "СЕКРЕТ! Купити 3 рази обійми", secret: true }, lucky_bastard: { icon: "🍀", title: "Улюблениця фортуни", desc: "СЕКРЕТ! Зірвати джекпот", secret: true }, professor: { icon: "👩‍🏫", title: "Професор", desc: "СЕКРЕТ! Зіграти в усі режими", secret: true }, midnight: { icon: "🕛", title: "Опівнічна магія", desc: "СЕКРЕТ! Зіграти рівно опівночі", secret: true }, lucky7: { icon: "🎰", title: "Щаслива сімка", desc: "СЕКРЕТ! Набрати рівно 7 у Спринті", secret: true }, sweet_tooth: { icon: "🍩", title: "Ласунка", desc: "СЕКРЕТ! Ввести солодкий промокод", secret: true }, boss_killer: { icon: "😈", title: "Переможниця", desc: "СЕКРЕТ! Здати Недільний Іспит", secret: true }
};

const levelSystem = [
    { xp: 0, name: "Кошеня", icon: "🐾" }, { xp: 100, name: "Студентка", icon: "📚" },
    { xp: 500, name: "Розумничка", icon: "💡" }, { xp: 1000, name: "Леді", icon: "💃" },
    { xp: 2500, name: "Королева", icon: "👑" }, { xp: 5000, name: "Моя Богиня", icon: "🌌" }
];

// ==========================================
// 2. ГЛОБАЛЬНИЙ СТАН ТА НАЛАШТУВАННЯ
// ==========================================
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
let lifetimeXP = parseInt(localStorage.getItem('lifetimeXP')) || 0;
let currentStreak = parseInt(localStorage.getItem('streak')) || 0;
let lastLogin = localStorage.getItem('lastLogin') || '';
let bestSprint = parseInt(localStorage.getItem('sprintRecord')) || 0;
let mistakeWords = JSON.parse(localStorage.getItem('userMistakes')) || [];
let inventory = JSON.parse(localStorage.getItem('userInventory')) || [];
let achievs = JSON.parse(localStorage.getItem('achievs')) || {};
let usedCodes = JSON.parse(localStorage.getItem('usedCodes')) || [];
let userStats = JSON.parse(localStorage.getItem('userStats')) || { purchases: 0, flippedCards: 0, dictOpens: 0, nightGames: 0, totalGames: 0, failedCodes: 0, hugPurchases: 0, modes: [], constructorGames: 0 };
let dailyGoals = JSON.parse(localStorage.getItem('dailyGoals')) || null;
let dailyProg = JSON.parse(localStorage.getItem('dailyProg')) || { games: 0, flash: 0, emoji: 0, pairs: 0, quiz_score: 0, spell: 0, sprint: 0, perfect: 0, clean_hm: 0, g1Done: false, g2Done: false, g3Done: false, bossAttempts: 0, bossWon: false };

let currentCat = 'all'; 
let synth = window.speechSynthesis; 
let voices = []; 
let audioUnlocked = false;
let audioCtx = null; 
let sprintTimerInterval = null;
let spinLock = false;
let lastWheelDate = localStorage.getItem('lastWheelDate') || 0;
let curCuid = null; 

// ==========================================
// 3. ІНІЦІАЛІЗАЦІЯ ТА ЗВУК
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    let isDark = localStorage.getItem('theme') === 'dark'; 
    if(isDark) {
        document.getElementById('app-container').classList.add('dark'); 
        document.getElementById('theme-icon').textContent = '☀️';
    }
    const cmBtn = document.getElementById('cm-btn');
if (cmBtn) {
        cmBtn.onclick = () => { 
            const item = inventory.find(x => x.uid == curCuid);
            if(item) {
                // Текст для Telegram залежно від купона
                let msg = `Коханий, я активувала купон на "${item.name}"! 👑 Чекаю на виконання!`;
                
                // Спеціальний текст для Золотого Джокера
                if(item.id === 'boss_win') {
                    msg = `Мій Золотий Джокер! Я перемогла Боса! Моє бажання: [Впиши своє бажання тут] 👑`;
                }

                // Відкриваємо Telegram!
                window.open(`https://t.me/YU_zIK?text=${encodeURIComponent(msg)}`, '_blank');
            }

            // Видаляємо з інвентарю
            inventory = inventory.filter(x => x.uid != curCuid); 
            localStorage.setItem('userInventory', JSON.stringify(inventory)); 
            closeCoupon(); 
            updateUI(); 
            renderInventory(); 
            fireParticles(window.innerWidth/2, window.innerHeight/2, true); 
        };
    }
    initGamification();
});

function toggleTheme() { 
    let isDark = document.getElementById('app-container').classList.toggle('dark'); 
    document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙'; 
    localStorage.setItem('theme', isDark ? 'dark' : 'light'); 
}

function unlockAudio() { 
    if(audioUnlocked) return; 
    audioUnlocked = true; 
    if (synth && synth.paused) synth.resume(); 
    synth.speak(new SpeechSynthesisUtterance("")); 
}

function speak(text, accent, event) { 
    if(event) event.stopPropagation(); 
    synth.cancel(); 
    setTimeout(() => { 
        let u = new SpeechSynthesisUtterance(text); 
        u.lang = accent === 'us' ? 'en-US' : 'en-GB'; 
        u.rate = 0.85; 
        if (!voices.length) voices = synth.getVoices(); 
        let bestVoice = voices.find(v => v.lang === u.lang && (v.name.includes("Samantha") || v.name.includes("Daniel") || v.name.includes("Google"))); 
        if (bestVoice) u.voice = bestVoice; 
        synth.speak(u); 
    }, 50); 
}

function playSFX(correct) { 
    if (!window.AudioContext && !window.webkitAudioContext) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume(); 
    const osc = audioCtx.createOscillator(); 
    const gain = audioCtx.createGain(); 
    osc.connect(gain); gain.connect(audioCtx.destination); 
    if (correct) { 
        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.15); 
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4); 
        osc.start(); osc.stop(audioCtx.currentTime + 0.4); 
    } else { 
        osc.type = 'square'; 
        osc.frequency.setValueAtTime(150, audioCtx.currentTime); 
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2); 
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime); 
        gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.2); 
        osc.start(); osc.stop(audioCtx.currentTime + 0.2); 
    } 
}

function fireParticles(x, y, cor) { 
    playSFX(cor); const e = cor ? '💖' : '💔'; const frag = document.createDocumentFragment();
    for(let i=0; i<25; i++){ 
        const p = document.createElement('div'); p.className = 'particle'; p.textContent = e; 
        p.style.left = x + 'px'; p.style.top = y + 'px'; p.style.fontSize = (28 * (Math.random() * 1.2 + 0.8)) + 'px'; 
        const a = Math.random()*Math.PI*2, d = Math.random()*120+50; 
        p.style.setProperty('--tx', Math.cos(a)*d+'px'); p.style.setProperty('--ty', Math.sin(a)*d-40+'px'); 
        p.style.animationDuration = (Math.random()*0.4+0.6)+'s'; frag.appendChild(p); setTimeout(() => p.remove(), 1000); 
    } 
    document.body.appendChild(frag);
}

function shuffleArray(array) { let arr = [...array]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function getVocab() { return currentCat === 'all' ? baseVocabulary : baseVocabulary.filter(w => w.c === currentCat); }
function getLevelInfo() { let currentLvl = levelSystem[0]; for(let i=0; i<levelSystem.length; i++) { if(lifetimeXP >= levelSystem[i].xp) currentLvl = levelSystem[i]; } return currentLvl; }

// ==========================================
// 4. ПРОФІЛЬ ТА НАВІГАЦІЯ
// ==========================================
function updateBossUI() {
    const d = new Date();
    const bossBtn = document.getElementById('boss-btn');
    const desc = document.getElementById('boss-desc');
    if(!bossBtn || !desc) return;
    if(d.getDay() === 0) { 
        bossBtn.style.filter = 'grayscale(0)'; bossBtn.style.pointerEvents = 'auto'; bossBtn.style.animation = 'none'; bossBtn.style.borderColor = '#ff0000';
        let attempts = dailyProg.bossAttempts || 0;
        let cost = attempts < 2 ? 0 : (attempts === 2 ? 150 : (attempts === 3 ? 250 : 300));
        if(cost === 0) { desc.textContent = `Іспит відкрито! (Спроб: ${2 - attempts}/2)`; } else { desc.textContent = `Додаткова спроба: ${cost} 🌟`; }
        desc.style.color = "#ff4444";
    } else {
        bossBtn.style.filter = 'grayscale(1)'; bossBtn.style.pointerEvents = 'none'; bossBtn.style.borderColor = 'transparent';
        desc.textContent = "Тільки в неділю!"; desc.style.color = "#cbd5e1";
    }
}

function initGamification() {
    const d = new Date(); const today = d.toDateString(); const hour = d.getHours();
    const compText = document.getElementById('compliment-text');
    if(compText) compText.textContent = compliments[Math.floor(Math.random() * compliments.length)];
    
    updateBossUI();

    if (!dailyGoals || !dailyGoals[0]) { dailyGoals = [ goalPool.easy[Math.floor(Math.random()*goalPool.easy.length)], goalPool.medium[Math.floor(Math.random()*goalPool.medium.length)], goalPool.hard[Math.floor(Math.random()*goalPool.hard.length)] ]; localStorage.setItem('dailyGoals', JSON.stringify(dailyGoals)); }

    if (lastLogin !== today) {
        if (lastLogin !== '') {
            const lastDate = new Date(lastLogin); const diffDays = Math.ceil(Math.abs(d - lastDate) / (1000 * 60 * 60 * 24)); 
            if (diffDays >= 3) checkAchiev('sleeping_beauty');
        }
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        if (lastLogin === yesterday.toDateString()) { currentStreak++; } else if (lastLogin !== '') { currentStreak = 1; } else { currentStreak = 1; }
        lastLogin = today; userStats.nightGames = 0; saveStats();
        dailyGoals = [ goalPool.easy[Math.floor(Math.random()*goalPool.easy.length)], goalPool.medium[Math.floor(Math.random()*goalPool.medium.length)], goalPool.hard[Math.floor(Math.random()*goalPool.hard.length)] ];
        dailyProg = { games: 0, flash: 0, emoji: 0, pairs: 0, quiz_score: 0, spell: 0, sprint: 0, perfect: 0, clean_hm: 0, g1Done: false, g2Done: false, g3Done: false, bossAttempts: 0, bossWon: false };
        localStorage.setItem('dailyGoals', JSON.stringify(dailyGoals)); localStorage.setItem('lastLogin', lastLogin); localStorage.setItem('streak', currentStreak); saveDaily();
    }
    
    if(currentStreak >= 3) checkAchiev('streak3'); 
    if(currentStreak >= 7) checkAchiev('streak7'); 
    if(hour >= 22 || hour < 4) checkAchiev('owl');
    if(hour >= 5 && hour < 9) checkAchiev('early_bird');
    
    updateUI(); renderShop(); renderInventory(); renderAchievs();
}

function updateUI() {
    if(document.getElementById('xp-count')) document.getElementById('xp-count').textContent = totalXP; 
    if(document.getElementById('streak-count')) document.getElementById('streak-count').textContent = currentStreak; 
    if(document.getElementById('sprint-badge')) document.getElementById('sprint-badge').textContent = bestSprint; 
    if(document.getElementById('mistakes-count')) document.getElementById('mistakes-count').textContent = mistakeWords.length; 
    if(document.getElementById('inv-count')) document.getElementById('inv-count').textContent = inventory.length;
    
    const lvl = getLevelInfo();
    if(document.getElementById('user-level-name')) document.getElementById('user-level-name').textContent = lvl.name;
    if(document.getElementById('user-level-icon')) document.getElementById('user-level-icon').textContent = lvl.icon;

    if (dailyGoals && dailyGoals.length === 3) {
        for(let i=1; i<=3; i++) {
            const g = dailyGoals[i-1]; 
            if(document.getElementById(`dg${i}-title`)) document.getElementById(`dg${i}-title`).textContent = g.title; 
            if(document.getElementById(`dg${i}-rew`)) document.getElementById(`dg${i}-rew`).textContent = `+${g.rew} 🌟`;
            if(document.getElementById(`dg${i}-bar`)) document.getElementById(`dg${i}-bar`).style.width = Math.min(100, (dailyProg[g.type]/g.target)*100) + "%";
            if (dailyProg[`g${i}Done`] && document.getElementById(`goal-${i}`)) document.getElementById(`goal-${i}`).classList.add('completed');
        }
    }
}

function showSection(id) { 
    if(sprintTimerInterval) clearInterval(sprintTimerInterval); 
    
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active')); 
    const t = document.getElementById(id);
    if(t) t.classList.add('active'); 
    
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if(['home', 'dictionary', 'shop', 'settings'].includes(id)) {
        const navItem = document.querySelector(`.nav-item[onclick="showSection('${id}')"]`);
        if(navItem) navItem.classList.add('active');
    }

    window.scrollTo(0,0); 
    const st = document.getElementById('user-stats');
    if(st) st.style.display = (id === 'home') ? 'flex' : 'none'; 
    if(id === 'home') updateBossUI();
    
    if(id === 'dictionary') { 
        const ds = document.getElementById('dict-search');
        if(ds) ds.value = ''; 
        renderDictionary(); userStats.dictOpens = (userStats.dictOpens || 0) + 1; saveStats(); if(userStats.dictOpens >= 50) checkAchiev('vocab_king'); 
    } 
    if(id === 'inventory') renderInventory(); 
    if(id === 'shop') renderShop(); 
    if(id === 'wheel') checkWheelCooldown(); 
    if(id === 'profile') renderProfile(); 
}

function renderProfile() {
    try {
        const startDate = new Date(2025, 4, 16); 
        const today = new Date();
        startDate.setHours(0, 0, 0, 0); today.setHours(0, 0, 0, 0);
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        const daysEl = document.getElementById('together-days');
        if (daysEl) daysEl.textContent = diffDays;

        const lvl = getLevelInfo(); 
        if (document.getElementById('prof-icon')) document.getElementById('prof-icon').textContent = lvl.icon;
        if (document.getElementById('prof-name')) document.getElementById('prof-name').textContent = lvl.name;
        if (document.getElementById('prof-xp')) document.getElementById('prof-xp').textContent = lifetimeXP; 
        if (document.getElementById('prof-streak')) document.getElementById('prof-streak').textContent = currentStreak;
        if (document.getElementById('prof-sprint')) document.getElementById('prof-sprint').textContent = bestSprint;
        if (document.getElementById('prof-games')) document.getElementById('prof-games').textContent = userStats.totalGames || 0;
        if (document.getElementById('prof-purchases')) document.getElementById('prof-purchases').textContent = userStats.purchases || 0;

        let nextLvl = levelSystem[levelSystem.length - 1]; 
        for(let i=0; i<levelSystem.length; i++) { if(lifetimeXP < levelSystem[i].xp) { nextLvl = levelSystem[i]; break; } }
        
        const currXp = lvl.xp; const nextXp = nextLvl.xp; let progressPercent = 100;
        if(currXp !== nextXp) { progressPercent = ((lifetimeXP - currXp) / (nextXp - currXp)) * 100; }

        const bar = document.getElementById('prof-lvl-bar');
        if(bar) bar.style.width = Math.min(100, Math.max(0, progressPercent)) + '%';
        if(document.getElementById('prof-lvl-curr')) document.getElementById('prof-lvl-curr').textContent = lvl.name;
        if(document.getElementById('prof-lvl-next')) { document.getElementById('prof-lvl-next').textContent = (lvl.name === nextLvl.name) ? 'МАКСИМУМ 🌌' : `${nextLvl.xp} 🌟`; }
    } catch (e) { console.error("Profile error:", e); }
}

function saveDaily() { localStorage.setItem('dailyProg', JSON.stringify(dailyProg)); }
function saveStats() { localStorage.setItem('userStats', JSON.stringify(userStats)); }
function addXP(amount) { totalXP += amount; localStorage.setItem('totalXP', totalXP); if(amount > 0) { lifetimeXP += amount; localStorage.setItem('lifetimeXP', lifetimeXP); } if (totalXP >= 2000) checkAchiev('rich'); updateUI(); }
function showToast(m) { const t = document.getElementById('toast'); if(!t)return; document.getElementById('toast-msg').textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

function checkGoals() {
    if (!dailyProg.g1Done && dailyProg[dailyGoals[0].type] >= dailyGoals[0].target) { dailyProg.g1Done = true; addXP(dailyGoals[0].rew); showToast(`Ціль виконана! +${dailyGoals[0].rew}🌟`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    if (!dailyProg.g2Done && dailyProg[dailyGoals[1].type] >= dailyGoals[1].target) { dailyProg.g2Done = true; addXP(dailyGoals[1].rew); showToast(`Ціль виконана! +${dailyGoals[1].rew}🌟`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    if (!dailyProg.g3Done && dailyProg[dailyGoals[2].type] >= dailyGoals[2].target) { dailyProg.g3Done = true; addXP(dailyGoals[2].rew); showToast(`ВАЖКА ЦІЛЬ! +${dailyGoals[2].rew}🌟 Розумничка!`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    saveDaily(); updateUI();
}

function gameFinished(perfect = false, type = 'games', score = 0) {
    if(type === 'boss') return; 
    dailyProg.games++; userStats.totalGames = (userStats.totalGames || 0) + 1;
    if(!userStats.modes) userStats.modes = [];
    if(!userStats.modes.includes(type) && type !== 'games') { userStats.modes.push(type); if(userStats.modes.length >= 8) checkAchiev('professor'); }
    if(type === 'constructor') { userStats.constructorGames = (userStats.constructorGames || 0) + 1; if(userStats.constructorGames >= 10) checkAchiev('builder'); }
    saveStats();
    if (userStats.totalGames >= 50) checkAchiev('polyglot');
    if (dailyProg.games >= 10) checkAchiev('marathon');

    if (type === 'emoji') dailyProg.emoji += score;
    if (type === 'pairs') dailyProg.pairs += score;
    if (type === 'quiz_score') dailyProg.quiz_score = Math.max(dailyProg.quiz_score, score);
    if (type === 'spell') dailyProg.spell += score;
    if (type === 'sprint') { dailyProg.sprint = Math.max(dailyProg.sprint, score); if(score === 7) checkAchiev('lucky7'); }
    if (perfect && type === 'quiz_score') dailyProg.perfect = 20;
    if (perfect && type === 'hangman') dailyProg.clean_hm = 1;

    const h = new Date().getHours(); const m = new Date().getMinutes();
    if(h >= 1 && h <= 4) { userStats.nightGames++; saveStats(); if(userStats.nightGames >= 3) checkAchiev('ninja'); }
    if(h === 0 && m >= 0 && m <= 10) checkAchiev('midnight');
    checkGoals(); checkAchiev('first_blood'); if(perfect) checkAchiev('perfect');
}

// ==========================================
// 5. МАГАЗИН, КУПОНИ, РУЛЕТКА
// ==========================================
function isBlackMarketOpen() {
    const d = new Date(); const h = d.getHours();
    if (d.getDate() === 16 && d.getMonth() === 4) return 'ALL'; 
    if (d.getDay() === 5 && ((h >= 8 && h < 10) || (h >= 22 && h < 24))) return 'NORMAL';
    return false;
}

function renderShop() { 
    const c = document.getElementById('shop-list'); if(!c) return;
    const bmStatus = isBlackMarketOpen();
    c.innerHTML = bmStatus ? `<div style="background:#0f172a; color:#10b981; padding:10px; border-radius:12px; margin-bottom:15px; text-align:center; font-weight:800; border:2px solid #10b981;">🕶️ ЧОРНИЙ РИНОК ВІДКРИТО!</div>` : ''; 
    let currentItems = [...];
    if (bmStatus) {
        currentItems = currentItems.map(i => i.id === 'dinner' ? { ...i, price: Math.floor(i.price * 0.85) } : i);
        if (bmStatus === 'ALL') currentItems.push(...bmItems);
        else { const d = new Date(); const seed = d.getFullYear() + d.getMonth() + d.getDate(); currentItems.push(bmItems[seed % bmItems.length], bmItems[(seed + 1) % bmItems.length]); }
    }
    currentItems.forEach(i => { 
        const isErr = i.price === 'ERROR'; const can = !isErr && totalXP >= i.price;
        const originalPrice = .find(x=>x.id === i.id)?.price;
        const discountLabel = (bmStatus && i.id === 'dinner') ? `<s style="color:var(--text-muted);font-size:0.7rem;">${originalPrice}</s>` : '';
        c.innerHTML += `<div class="shop-item"><div class="shop-info"><div style="font-size:2rem;">${i.icon}</div><div><div class="shop-title">${i.name}</div><div class="shop-price" style="${isErr?'color:var(--wrong)':(bmStatus && i.id==='dinner'?'color:#10b981':'')}">${isErr?'':'🌟 '}${i.price} ${discountLabel}</div></div></div><button class="buy-btn" ${can?'':'disabled'} onclick="buyItem('${i.id}')">${isErr?'Неможливо':(can?'Купити':'Бракує')}</button></div>`;
    }); 
}

function buyItem(id) { 
    const bmStatus = isBlackMarketOpen(); let currentItems = [...];
    if (bmStatus) {
        currentItems = currentItems.map(i => i.id === 'dinner' ? { ...i, price: Math.floor(i.price * 0.85) } : i);
        if (bmStatus === 'ALL') currentItems.push(...bmItems);
        else { const d = new Date(); const seed = d.getFullYear() + d.getMonth() + d.getDate(); currentItems.push(bmItems[seed % bmItems.length], bmItems[(seed + 1) % bmItems.length]); }
    }
    const i = currentItems.find(x => x.id === id); 
    if(!i || i.price === 'ERROR') return;

    if(totalXP >= i.price) { 
        addXP(-i.price); inventory.push({ ...i, uid: Date.now() }); localStorage.setItem('userInventory', JSON.stringify(inventory)); 
        userStats.purchases = (userStats.purchases || 0) + 1;
        if(id === 'hug') { userStats.hugPurchases = (userStats.hugPurchases || 0) + 1; if(userStats.hugPurchases >= 3) checkAchiev('hug_addict'); }
        saveStats(); if(userStats.purchases >= 3) checkAchiev('shopaholic');
        showToast("Куплено: " + i.name); renderInventory(); renderShop(); updateUI();
    } 
}

function renderInventory() { 
    const c = document.getElementById('inv-list'); if(!c) return;
    c.innerHTML = ''; 
    if(!inventory.length) { c.innerHTML = "<div style='text-align:center; color:var(--text-muted); padding:20px;'>Тут поки порожньо. Купуй купони в магазині!</div>"; return; } 
    inventory.forEach(i => { c.innerHTML += `<div class="inv-item"><div style="font-size:3rem;">${i.icon}</div><div class="shop-title">${i.name}</div><button class="inv-btn" onclick="openCoupon('${i.uid}')">Використати купон</button></div>`; }); 
}

function openCoupon(u) { const i = inventory.find(x => x.uid == u); if(!i) return; curCuid = u; document.getElementById('cm-icon').textContent = i.icon; document.getElementById('cm-title').textContent = i.name; document.getElementById('coupon-modal').style.display = 'flex'; }
function closeCoupon() { const m = document.getElementById('coupon-modal'); if(m) m.style.display = 'none'; }

function checkAchiev(id){ if(!achievs[id]){ achievs[id]=true; localStorage.setItem('achievs', JSON.stringify(achievs)); showToast("Нове досягнення!"); renderAchievs(); } }
function renderAchievs() { 
    const c = document.getElementById('achiev-list'); if(!c) return;
    c.innerHTML = ''; 
    Object.keys(achievList).forEach(k => { 
        const a = achievList[k]; const unl = achievs[k] ? 'unlocked' : ''; 
        if(a.secret && !unl) c.innerHTML += `<div class="achiev-card"><div class="achiev-icon" style="font-size:2.5rem; margin-right:15px;">❓</div><div><div class="achiev-title">Секретне досягнення</div><div class="achiev-desc">Виконай особливі умови, щоб відкрити.</div></div></div>`;
        else c.innerHTML += `<div class="achiev-card ${unl}"><div class="achiev-icon" style="font-size:2.5rem; margin-right:15px;">${a.icon}</div><div><div class="achiev-title">${a.title}</div><div class="achiev-desc">${a.desc}</div></div></div>`; 
    }); 
}

function enterPromo() {
    const input = prompt("Введи код:"); if(!input) return;
    const code = input.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if(usedCodes.includes(code)) { alert("Вже використано! Хитрунка 🦊"); return; }
    
    let ok = false;
    if(code === '16052025') { inventory.push({ id:'anniv1', name:'❤️ Початок нашої історії (16.05.25)', price:0, icon:'👩‍❤️‍👨', uid:Date.now() }); ok=true; alert("Код прийнято! Це був найкращий день! 👩‍❤️‍👨"); }
    else if(code === '16052026') { inventory.push({ id:'anniv2', name:'💎 Рік щастя разом (16.05.26)', price:0, icon:'💍', uid:Date.now() }); addXP(365); ok=true; alert("З нашою першою річницею, кохана! +365 🌟 та особливий купон! 💍"); }
    else if(code === 'MISSYOU') { inventory.push({ id:'m1', name:'Я приїду до тебе зі смаколиками', price:0, icon:'🥐', uid:Date.now() }); ok=true; alert("Чекай на мене зі смаколиками! 🥐"); }
    else if(code === 'DATE2026') { inventory.push({ id:'d1', name:'Вибір фільму і піца', price:0, icon:'🍕', uid:Date.now() }); ok=true; alert("Кіно і піца за мною! 🍕🎬"); }
    else if(code === 'OLYA') { addXP(200); alert("Найкраща дівчинка на всьому світі 😘 +200 🌟"); ok=true; }
    else if(code === 'FOREVER') { addXP(500); alert("+500 🌟 за моє кохання!"); ok=true; }
    else if(code === 'SMILE') { addXP(100); alert("Твоя посмішка робить мій день яскравішим! +100 🌟"); ok=true; }
    else if(code === 'MYQUEEN') { inventory.push({ id:'p2', name:'Масаж спини', price:0, icon:'💆‍♀️', uid:Date.now() }); addXP(50); ok=true; alert("Масаж та зірочки твої 👑"); }
    else if(code === 'BESTGIRL') { addXP(300); ok=true; alert("+300 🌟"); }
    else if(code === 'KISSME') { inventory.push({ id:'p4', name:'100 поцілунків', price:0, icon:'😘', uid:Date.now() }); ok=true; alert("Купон додано! 🎁"); }
    else if(code === 'LOVEYOUMORE' || code === 'LOVEYOUSTRONGER') { addXP(300); ok=true; alert("А я тебе ще дужче! +300 🌟"); }
    else if(code === 'CAR') { inventory.push({ id:'p_car', name:'Романтична поїздка за місто', price:0, icon:'🚐', uid:Date.now() }); ok=true; checkAchiev('navigator'); alert("Головний штурман знайдений! 🚐"); }
    else if(code === 'CHOCOLATE') { inventory.push({ id:'p_choc', name:'Кіндер або Шоколадка', price:0, icon:'🍫', uid:Date.now() }); ok=true; checkAchiev('sweet_tooth'); alert("Солодке життя! 🍫"); }
    
    if(ok) {
        usedCodes.push(code); localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
        localStorage.setItem('userInventory', JSON.stringify(inventory));
        if(usedCodes.length >= 3) checkAchiev('sherlock');
        updateUI(); renderInventory(); fireParticles(window.innerWidth/2, window.innerHeight/2, true);
    } else { 
        alert("Невірний код! Спробуй ще раз."); 
        userStats.failedCodes = (userStats.failedCodes || 0) + 1; saveStats();
        if(userStats.failedCodes >= 3) checkAchiev('hacker');
    }
}

function checkWheelCooldown() {
    const btn = document.getElementById('spin-btn'); if(!btn) return;
    const now = Date.now(); const diff = now - parseInt(lastWheelDate); const cooldown = 3 * 24 * 60 * 60 * 1000;
    if(lastWheelDate && diff < cooldown) {
        const daysLeft = Math.ceil((cooldown - diff) / (1000 * 60 * 60 * 24));
        btn.textContent = `Доступно через ${daysLeft} дн.`; btn.disabled = true;
    } else { btn.textContent = "Крутити (50 🌟)"; btn.disabled = false; }
}

function spinWheel() {
    if(spinLock) return;
    const now = Date.now(); const cooldown = 3 * 24 * 60 * 60 * 1000;
    if(lastWheelDate && (now - parseInt(lastWheelDate)) < cooldown) return;
    if(totalXP < 50) { alert("Бракує зірочок! (Треба 50 🌟)"); return; }
    
    addXP(-50); spinLock = true;
    lastWheelDate = now; localStorage.setItem('lastWheelDate', lastWheelDate);
    checkWheelCooldown();

    const wheel = document.getElementById('spin-wheel');
    const r = Math.random(); let prizeIndex;

    if (r < 0.01) { prizeIndex = 0; } 
    else if (r < 0.10) { prizeIndex = 8; } 
    else if (r < 0.20) { prizeIndex = 7; } 
    else if (r < 0.35) { prizeIndex = 6; } 
    else if (r < 0.60) { prizeIndex = [1, 3, 5][Math.floor(Math.random()*3)]; } 
    else if (r < 0.95) { prizeIndex = [2, 4][Math.floor(Math.random()*2)]; } 
    else { prizeIndex = 9; } 

    const sectorAngle = 36; const randomOffset = 5 + Math.random() * 26; 
    const targetDegree = (prizeIndex * sectorAngle) + randomOffset;
    const spins = 6; const currentRotation = parseFloat(wheel.dataset.rotation) || 0;
    const nextRotation = currentRotation + (360 - (currentRotation % 360)) + (360 * spins) + (360 - targetDegree);

    wheel.style.transform = `rotate(${nextRotation}deg)`;
    wheel.dataset.rotation = nextRotation;
    
    setTimeout(() => {
        const prize = wheelPrizes[prizeIndex];
        if(prize.type === 'xp') {
            if(prize.val > 0) { addXP(prize.val); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
            alert(prize.msg);
        } else if(prize.type === 'item' || prize.type === 'jackpot') {
            inventory.push({ id: 'wheel_pr', name: prize.name, price: 0, icon: prize.icon, uid: Date.now() });
            localStorage.setItem('userInventory', JSON.stringify(inventory));
            fireParticles(window.innerWidth/2, window.innerHeight/2, true);
            if(prize.type === 'jackpot') checkAchiev('lucky_bastard');
            alert(prize.msg); renderInventory(); updateUI();
        }
        spinLock = false; 
    }, 4000);
}

// ==========================================
// 6. СЛОВНИК
// ==========================================
function setCat(c, el) { currentCat = c; document.querySelectorAll('.cat-chip').forEach(chip => chip.classList.remove('active')); el.classList.add('active'); if(document.getElementById('dictionary').classList.contains('active')) renderDictionary(); }
let dictMode = 'en-uk'; function setDictMode(m) { dictMode = m; renderDictionary(); }
function recordCardFlip() { userStats.flippedCards = (userStats.flippedCards || 0) + 1; saveStats(); if(userStats.flippedCards >= 50) checkAchiev('bookworm'); }
function trackMistake(w) { if (!mistakeWords.find(x => x.en === w.en)) { mistakeWords.push(w); localStorage.setItem('userMistakes', JSON.stringify(mistakeWords)); updateUI(); } }
function removeMistake(w) { mistakeWords = mistakeWords.filter(x => x.en !== w.en); localStorage.setItem('userMistakes', JSON.stringify(mistakeWords)); updateUI(); }

function renderDictionary() { 
    const bEn = document.getElementById('btn-dict-en'); if(bEn) bEn.className = dictMode === 'en-uk' ? 'btn btn-primary' : 'btn'; 
    const bUk = document.getElementById('btn-dict-uk'); if(bUk) bUk.className = dictMode === 'uk-en' ? 'btn btn-primary' : 'btn'; 
    const grid = document.getElementById('dict-grid'); if(!grid) return; grid.innerHTML = ''; 
    const searchInput = document.getElementById('dict-search'); const q = searchInput ? searchInput.value.toLowerCase().trim() : ''; 
    
    if(q === 'love' || q === 'кохаю' || q === 'люблю') { document.getElementById('easter-egg').style.display='flex'; checkAchiev('love'); if(searchInput) searchInput.value=''; return; } 
    let list = baseVocabulary.filter(w => w.en.toLowerCase().includes(q) || w.uk.toLowerCase().includes(q)); 
    if(currentCat !== 'all') { list = list.filter(w => w.c === currentCat); }

    list.sort((a,b) => a.en.localeCompare(b.en)).forEach(w => { 
        const c = document.createElement('div'); c.className = 'dict-card'; const f = document.createElement('div'); f.className = 'dict-face'; const b = document.createElement('div'); b.className = 'dict-face dict-back'; 
        const buildEn = (el) => { el.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${w.em}</div><div>${w.en}</div><div style="margin-top:auto; display:flex; gap:10px; width:100%;"><button class="dict-audio-btn" onclick="speak('${w.en}', 'us', event)">🔊 US</button><button class="dict-audio-btn" onclick="speak('${w.en}', 'uk', event)">🔊 UK</button></div>`; }; 
        if(dictMode === 'en-uk') { buildEn(f); b.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${w.em}</div><div>${w.uk}</div>`; } else { f.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${w.em}</div><div>${w.uk}</div>`; buildEn(b); } 
        c.innerHTML = `<div class="dict-card-inner"></div>`; c.firstChild.appendChild(f); c.firstChild.appendChild(b); c.onclick = () => { c.classList.toggle('flipped'); dailyProg.flash++; checkGoals(); recordCardFlip(); }; grid.appendChild(c); 
    }); 
}

// ==========================================
// 7. МІНІ-ІГРИ
// ==========================================
let emoQ=[], eIdx=0, eScore=0, eAns=false;
function startEmojiQuiz() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} emoQ = shuffleArray(voc).slice(0, 15); eIdx=0; eScore=0; showSection('emoji-quiz'); document.getElementById('emoji-result').style.display='none'; document.getElementById('emoji-active').style.display='flex'; loadEmo(); }
function loadEmo() { eAns = false; document.getElementById('btn-next-emoji').style.display='none'; let w = emoQ[eIdx]; document.getElementById('emoji-counter').textContent=`${eIdx+1}/${emoQ.length}`; document.getElementById('emoji-score').textContent=eScore; document.getElementById('emoji-question').innerHTML=`<div style="font-size: 4.5rem; line-height: 1;">${w.em}</div><div style="font-size: 1.2rem; color: var(--text-muted); font-weight: 700;">${w.uk}</div>`; const opts = shuffleArray([w, ...shuffleArray(baseVocabulary.filter(x=>x.en!==w.en)).slice(0,3)]); const g = document.getElementById('emoji-options'); g.innerHTML=''; opts.forEach(o => { const b = document.createElement('button'); b.className='option-btn'; b.textContent=o.en; b.onclick = (e) => { if(eAns) return; eAns=true; const c = o.en===w.en; fireParticles(e.clientX, e.clientY, c); document.querySelectorAll('#emoji-options .option-btn').forEach(btn => { btn.disabled=true; if(btn.textContent===w.en) btn.classList.add('correct'); else if(btn===b && !c) btn.classList.add('wrong'); }); if(c) { eScore++; addXP(1); } else trackMistake(w); document.getElementById('emoji-score').textContent=eScore; document.getElementById('btn-next-emoji').style.display='block'; }; g.appendChild(b); }); }
function nextEmoji() { eIdx++; if(eIdx<emoQ.length) loadEmo(); else { document.getElementById('emoji-active').style.display='none'; document.getElementById('emoji-result').style.display='flex'; document.getElementById('emoji-final').textContent=eScore+"/"+emoQ.length; gameFinished(eScore===emoQ.length, 'emoji', eScore); } }

let constQ=[], cIdx=0, cScore=0, cAns=[], constLock=false, constErrors=0;
function startConstructor() { constQ = shuffleArray(sentences).slice(0, 5); cIdx=0; cScore=0; constErrors=0; showSection('constructor'); document.getElementById('const-result').style.display='none'; document.getElementById('const-active').style.display='flex'; loadConst(); }
function loadConst() { constLock=false; document.getElementById('btn-next-const').style.display='none'; document.getElementById('const-counter').textContent=`${cIdx+1}/5`; document.getElementById('const-score').textContent=cScore; let s = constQ[cIdx]; document.getElementById('const-question').textContent = s.uk; const t = document.getElementById('const-target'); t.innerHTML=''; t.className='const-target'; cAns=[]; const origWords = s.en.split(' '); const words = shuffleArray([...origWords]); const wCont = document.getElementById('const-words'); wCont.innerHTML=''; words.forEach((w, i) => { const b = document.createElement('div'); b.className='const-word'; b.textContent=w; b.onclick = () => { if(constLock) return; b.classList.add('hidden'); cAns.push({w, b}); renderConstTarget(origWords.join(' ')); }; wCont.appendChild(b); }); }
function renderConstTarget(fullT) { const t = document.getElementById('const-target'); t.innerHTML=''; cAns.forEach((item, i) => { const b = document.createElement('div'); b.className='const-word'; b.textContent=item.w; b.onclick = () => { if(constLock) return; item.b.classList.remove('hidden'); cAns.splice(i, 1); renderConstTarget(fullT); }; t.appendChild(b); }); if(cAns.length === fullT.split(' ').length && !constLock) { constLock = true; const r = t.getBoundingClientRect(); if(cAns.map(x=>x.w).join(' ') === fullT) { fireParticles(r.left+r.width/2, r.top+r.height/2, true); t.classList.add('correct'); cScore++; addXP(3); setTimeout(()=>{document.getElementById('btn-next-const').style.display='block'; constLock=false;}, 250); } else { fireParticles(r.left+r.width/2, r.top+r.height/2, false); constErrors++; t.style.animation="shake 0.3s"; setTimeout(()=>{ t.style.animation=""; cAns.forEach(x=>x.b.classList.remove('hidden')); cAns=[]; constLock=false; renderConstTarget(fullT); }, 400); } } }
function nextConst() { cIdx++; if(cIdx<5) loadConst(); else { document.getElementById('const-active').style.display='none'; document.getElementById('const-result').style.display='flex'; document.getElementById('const-final').textContent=cScore+"/5"; gameFinished(cScore===5, 'constructor', 1); if(constErrors === 0) checkAchiev('crafter'); } }

let tfQ=[], tfIdx=0, tfScore=0, tfTrue=false, tfLock=false, tfErrors=0;
function startTrueFalse() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} tfQ=shuffleArray(voc).slice(0,15); tfIdx=0; tfScore=0; tfErrors=0; showSection('truefalse'); document.getElementById('tf-result').style.display='none'; document.getElementById('tf-active').style.display='flex'; loadTfSwipe(); }
function loadTfSwipe() { tfLock=false; document.getElementById('tf-counter').textContent=`${tfIdx+1}/15`; document.getElementById('tf-score').textContent=tfScore; let w=tfQ[tfIdx]; tfTrue=Math.random()>0.5; let dUk=w.uk; if(!tfTrue){ let o=baseVocabulary.filter(x=>x.en!==w.en); dUk=o[Math.floor(Math.random()*o.length)].uk; } const card = document.getElementById('tf-card'); card.innerHTML=`<div style="font-size:4rem;margin-bottom:10px;">${w.em}</div><span id="tf-en">${w.en}</span><span class="tf-equals">=</span><span id="tf-uk">${dUk}</span>`; card.style.transform="translate(0px, 0px) rotate(0deg)"; card.style.opacity="1"; card.style.background="var(--card-bg)"; setupSwipe(card); }
function setupSwipe(card) { let stX=0, stY=0, currX=0; card.ontouchstart = e => { stX=e.touches[0].clientX; stY=e.touches[0].clientY; card.style.transition='none'; }; card.ontouchmove = e => { if(tfLock) return; const dx=e.touches[0].clientX-stX; const dy=e.touches[0].clientY-stY; if(Math.abs(dx)>Math.abs(dy)) { e.preventDefault(); currX=dx; card.style.transform=`translate(${dx}px, ${dy}px) rotate(${dx/15}deg)`; } }; card.ontouchend = e => { if(tfLock) return; card.style.transition='transform 0.2s, opacity 0.2s'; if(currX>100) { checkTfSwipe(true); card.style.transform=`translate(1000px, 0) rotate(30deg)`; card.style.opacity="0"; } else if(currX<-100) { checkTfSwipe(false); card.style.transform=`translate(-1000px, 0) rotate(-30deg)`; card.style.opacity="0"; } else { card.style.transform="translate(0,0) rotate(0)"; currX=0; } }; }
function checkTfSwipe(guess) { if(tfLock) return; tfLock=true; const c = guess===tfTrue; const card=document.getElementById('tf-card'); const r=card.getBoundingClientRect(); card.style.background = c ? "var(--correct)" : "var(--wrong)"; fireParticles(r.left+r.width/2, r.top+r.height/2, c); if(c) { tfScore++; addXP(1); } else { tfErrors++; trackMistake(tfQ[tfIdx]); } setTimeout(()=>{ tfIdx++; if(tfIdx<15) loadTfSwipe(); else{ document.getElementById('tf-active').style.display='none'; document.getElementById('tf-result').style.display='flex'; document.getElementById('tf-final-score').textContent=tfScore+"/15"; gameFinished(tfScore===15, 'swipe', 1); if(tfScore===15 && tfErrors===0) checkAchiev('sniper'); } }, 250); }

let quizQ=[], qIdx=0, qScore=0, qType='uk-en', isMist=false;
function startMistakesMode() { if(mistakeWords.length===0){ showToast("Помилок немає! ❤️"); return; } qType='uk-en'; isMist=true; quizQ=shuffleArray(mistakeWords); qIdx=0; qScore=0; showSection('quiz'); document.getElementById('quiz-result').style.display='none'; document.getElementById('quiz-active').style.display='flex'; loadQuiz(); }
function startQuiz(t) { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} qType=t; isMist=false; quizQ=shuffleArray(voc).slice(0,20); qIdx=0; qScore=0; showSection('quiz'); document.getElementById('quiz-result').style.display='none'; document.getElementById('quiz-active').style.display='flex'; loadQuiz(); }
function restartQuiz() { if(isMist) startMistakesMode(); else startQuiz(qType); }
function loadQuiz() { document.getElementById('btn-next-quiz').style.display='none'; let w=quizQ[qIdx]; document.getElementById('quiz-counter').textContent=`${qIdx+1}/${quizQ.length}`; document.getElementById('quiz-score').textContent=qScore; document.getElementById('quiz-question').innerHTML=`<div style="font-size:3rem;margin-bottom:10px;">${w.em}</div>`+(qType==='uk-en'?w.uk:w.en); const opts=shuffleArray([w, ...shuffleArray(baseVocabulary.filter(x=>x.en!==w.en)).slice(0,3)]); const g=document.getElementById('quiz-options'); g.innerHTML=''; opts.forEach(o=>{ const b=document.createElement('button'); b.className='option-btn'; b.textContent=qType==='uk-en'?o.en:o.uk; b.onclick=(e)=>{ const c=o.en===w.en; fireParticles(e.clientX, e.clientY, c); if(c){b.classList.add('correct'); qScore++; addXP(1); if(isMist)removeMistake(w);}else{b.classList.add('wrong'); trackMistake(w); document.querySelectorAll('.option-btn').forEach(btn=>{if(btn.textContent===(qType==='uk-en'?w.en:w.uk))btn.classList.add('correct');});} document.querySelectorAll('.option-btn').forEach(btn=>btn.disabled=true); document.getElementById('btn-next-quiz').style.display='block'; }; g.appendChild(b); }); }
function nextQuizQuestion() { qIdx++; if(qIdx<quizQ.length) loadQuiz(); else{ document.getElementById('quiz-active').style.display='none'; document.getElementById('quiz-result').style.display='flex'; document.getElementById('final-score').textContent=qScore+"/"+quizQ.length; gameFinished(qScore===quizQ.length && !isMist, 'quiz_score', qScore); } }

let mFound=0, mErr=0, mSel=null, mLock=false;
function startMatchGame() { const voc = getVocab(); if(voc.length<6){alert("Замало слів!"); return;} showSection('match'); mFound=0; mErr=0; document.getElementById('match-result').style.display='none'; document.getElementById('match-columns').style.display='flex'; updM(); let words=shuffleArray(voc).slice(0,6); const cUk=document.getElementById('match-col-uk'), cEn=document.getElementById('match-col-en'); cUk.innerHTML=''; cEn.innerHTML=''; shuffleArray(words.map((w,i)=>({t:w.uk,id:i,l:'uk',w}))).forEach(c=>createMB(c,cUk)); shuffleArray(words.map((w,i)=>({t:w.en,id:i,l:'en',w}))).forEach(c=>createMB(c,cEn)); }
function createMB(c, p) { const b=document.createElement('button'); b.className='match-btn'; b.textContent=c.t; b.onclick=(e)=>{ if(mLock||b.classList.contains('correct'))return; if(b===mSel){b.classList.remove('selected'); mSel=null; return;} if(!mSel){b.classList.add('selected'); mSel=b; b.dataset.id=c.id; b.dataset.lang=c.l; b.word=c.w;} else if(mSel.dataset.lang===c.l){mSel.classList.remove('selected'); b.classList.add('selected'); mSel=b; b.dataset.id=c.id; b.dataset.lang=c.l; b.word=c.w;} else{ mLock=true; b.classList.add('selected'); const cor=mSel.dataset.id==c.id; fireParticles(e.clientX, e.clientY, cor); if(cor){b.classList.add('correct'); mSel.classList.add('correct'); mFound++; addXP(1); updM(); mSel=null; mLock=false; if(mFound===6)setTimeout(()=>{document.getElementById('match-columns').style.display='none'; document.getElementById('match-result').style.display='flex'; document.getElementById('match-final-score').textContent=mErr+" помилок"; gameFinished(mErr===0, 'pairs', mFound);},400);} else{b.classList.add('wrong'); mSel.classList.add('wrong'); mErr++; trackMistake(c.w); updM(); let s1=b,s2=mSel; mSel=null; setTimeout(()=>{s1.classList.remove('wrong','selected'); s2.classList.remove('wrong','selected'); mLock=false;},300);} } }; p.appendChild(b); }
function updM() { document.getElementById('match-counter').textContent=`Пари: ${mFound}/6`; }

let sprTime=60, sprScore=0, sprQ=[], sprLock=false;
function startSprint() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} showSection('sprint'); document.getElementById('sprint-result').style.display='none'; document.getElementById('sprint-active').style.display='flex'; sprTime=60; sprScore=0; sprQ=shuffleArray(voc); updSpr(); clearInterval(sprintTimerInterval); sprintTimerInterval=setInterval(()=>{sprTime--; updSpr(); if(sprTime<=0) endSpr();},1000); loadSpr(); }
function updSpr() { document.getElementById('sprint-time-text').textContent=sprTime; document.getElementById('sprint-score-text').textContent=sprScore; let b=document.getElementById('sprint-bar'); b.style.width=Math.max(0,(sprTime/60)*100)+"%"; if(sprTime<15) b.classList.add('low'); else b.classList.remove('low'); }
function loadSpr() { sprLock = false; let w=sprQ[Math.floor(Math.random()*sprQ.length)]; document.getElementById('sprint-question').innerHTML=`<div style="font-size:3rem;">${w.em}</div>`+w.uk; const o=shuffleArray([w,...shuffleArray(baseVocabulary.filter(x=>x.en!==w.en)).slice(0,3)]); const c=document.getElementById('sprint-options'); c.innerHTML=''; o.forEach(opt=>{ const b=document.createElement('button'); b.className='option-btn'; b.textContent=opt.en; b.onclick=(e)=>{ if(sprLock) return; sprLock = true; const cor=opt.en===w.en; fireParticles(e.clientX, e.clientY, cor); if(cor){sprScore++; addXP(1); sprTime=Math.min(sprTime+1,60);}else{sprTime=Math.max(sprTime-2,0); trackMistake(w);} updSpr(); if(sprTime>0) setTimeout(loadSpr, 150); else endSpr(); }; c.appendChild(b); }); }
function endSpr() { clearInterval(sprintTimerInterval); document.getElementById('sprint-active').style.display='none'; document.getElementById('sprint-result').style.display='flex'; document.getElementById('sprint-final-score').textContent=sprScore; if(sprScore>bestSprint){bestSprint=sprScore; localStorage.setItem('sprintRecord',bestSprint); document.getElementById('sprint-badge').textContent=bestSprint; checkAchiev('speed');} gameFinished(false, 'sprint', sprScore); }

let sQ=[], sIdx=0, sSco=0, sTar="", sCur=[], sLet=[], spellLock=false;
function startSpelling() { const voc = getVocab().filter(w => /^[a-zA-Z]+$/.test(w.en)); if(voc.length === 0){ alert("Немає слів!"); return;} showSection('spelling'); document.getElementById('spell-result').style.display='none'; document.getElementById('spell-active').style.display='flex'; sQ=shuffleArray(voc).slice(0, 10); sIdx=0; sSco=0; loadS(); }
function loadS() { spellLock = false; document.getElementById('spell-counter').textContent=`${sIdx+1}/${sQ.length}`; document.getElementById('spell-score').textContent=sSco; let w=sQ[sIdx]; sTar=w.en.toUpperCase(); document.getElementById('spell-question').textContent=w.em+" "+w.uk; sCur=Array(sTar.length).fill(null); sLet=shuffleArray(sTar.split('').map((l,i)=>({l,id:i}))); rendS(); }
function rendS() { const c1=document.getElementById('spell-slots'); c1.innerHTML=''; sCur.forEach((l,i)=>{ let s=document.createElement('div'); s.className=`spell-slot ${l?'filled':''}`; s.textContent=l?l.l:""; s.onclick=()=>{if(l && !spellLock){sCur[i]=null; rendS();}}; c1.appendChild(s);}); const c2=document.getElementById('spell-letters'); c2.innerHTML=''; sLet.forEach(i=>{ let b=document.createElement('button'); b.className='letter-btn'; b.textContent=i.l; if(sCur.find(x=>x&&x.id===i.id)) b.classList.add('hidden'); else b.onclick=()=>{ if(spellLock) return; let ei=sCur.findIndex(x=>x===null); if(ei!==-1){sCur[ei]=i; rendS(); if(!sCur.includes(null)) chkS();} }; c2.appendChild(b);}); }
function chkS() { spellLock = true; let fw=sCur.map(x=>x.l).join(''); const sc=document.getElementById('spell-slots'); const r=sc.getBoundingClientRect(); if(fw===sTar){ fireParticles(r.left+r.width/2, r.top+r.height/2, true); sSco++; addXP(2); setTimeout(()=>{sIdx++; if(sIdx<sQ.length)loadS(); else{document.getElementById('spell-active').style.display='none'; document.getElementById('spell-result').style.display='flex'; document.getElementById('spell-final-score').textContent=sSco+"/"+sQ.length; gameFinished(sSco===sQ.length, 'spell', sSco);}}, 400); } else{ fireParticles(r.left+r.width/2, r.top+r.height/2, false); trackMistake(sQ[sIdx]); sc.style.animation="shake 0.3s"; setTimeout(()=>{sc.style.animation=""; sCur.fill(null); spellLock = false; rendS();}, 400); } }

let hmQ=[], hmI=0, hmLiv=5, hmT="", hmG=new Set(), hmLock=false;
function startHangman() { const voc = getVocab().filter(w => /^[a-zA-Z]+$/.test(w.en)); if(voc.length === 0){ alert("Немає слів!"); return;} showSection('hangman'); document.getElementById('hm-result').style.display='none'; document.getElementById('hm-active').style.display='flex'; hmQ=shuffleArray(voc); hmI=0; loadHm(); }
function loadHm() { hmLock = false; let w=hmQ[hmI]; hmT=w.en.toUpperCase(); hmLiv=5; hmG.clear(); document.getElementById('hm-counter').textContent=`Слово ${hmI+1}`; document.getElementById('hm-question').textContent=w.em+" "+w.uk; updHm(); rndHmS(); rndHmK(); }
function updHm() { let h=""; for(let i=0;i<5;i++) h+=i<hmLiv?"❤️":"🖤"; document.getElementById('hm-lives-text').textContent=h; }
function rndHmS() { const c=document.getElementById('hm-slots'); c.innerHTML=''; let w=true; for(let ch of hmT){ let s=document.createElement('div'); s.className='hm-slot'; if(hmG.has(ch)) s.textContent=ch; else{s.textContent=""; w=false;} c.appendChild(s); } if(w && !hmLock){ hmLock = true; addXP(3); endHm(true);} }
function rndHmK() { const c=document.getElementById('hm-keyboard'); c.innerHTML=''; alphabet.forEach(l=>{ let b=document.createElement('button'); b.className='hm-key'; b.textContent=l; b.onclick=(e)=>{ if(hmLiv<=0||b.classList.contains('disabled')||hmLock)return; b.classList.add('disabled'); hmG.add(l); if(hmT.includes(l)){ b.classList.add('correct'); fireParticles(e.clientX, e.clientY, true); rndHmS(); } else{ fireParticles(e.clientX, e.clientY, false); hmLiv--; updHm(); if(hmLiv===0){ hmLock=true; trackMistake(hmQ[hmI]); endHm(false);} } }; c.appendChild(b); }); }
function endHm(w) { if(w && hmLiv===1) checkAchiev('survivor'); setTimeout(()=>{ document.getElementById('hm-active').style.display='none'; document.getElementById('hm-result').style.display='flex'; document.getElementById('hm-result-title').textContent=w?"Врятовано! 💖":"Розбито... 💔"; document.getElementById('hm-final-word').textContent=hmT; hmI++; gameFinished(w && hmLiv===5, 'hangman', 1);}, 500); }

let lstQ=[], lstI=0, lstS=0, cLw="", lstLock=false;
function startListening() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} lstQ=shuffleArray(voc).slice(0,15); lstI=0; lstS=0; showSection('listening'); document.getElementById('listen-result').style.display='none'; document.getElementById('listen-active').style.display='flex'; loadLst(); }
function playWordAudio(a, e) { speak(cLw, a, e); }
function loadLst() { lstLock = false; document.getElementById('btn-next-listen').style.display='none'; let w=lstQ[lstI]; cLw=w.en; document.getElementById('listen-counter').textContent=`${lstI+1}/15`; document.getElementById('listen-score').textContent=lstS; const o=shuffleArray([w, ...shuffleArray(baseVocabulary.filter(x=>x.en!==w.en)).slice(0,3)]); const g=document.getElementById('listen-options'); g.innerHTML=''; o.forEach(opt=>{ const b=document.createElement('button'); b.className='option-btn'; b.textContent=opt.uk; b.onclick=(e)=>{ if(lstLock) return; lstLock = true; const c=opt.en===w.en; fireParticles(e.clientX, e.clientY, c); document.querySelectorAll('#listen-options .option-btn').forEach(x=>{ x.disabled=true; if(x.textContent===w.uk) x.classList.add('correct'); else if(x===b&&!c) x.classList.add('wrong'); }); if(c){lstS++; addXP(1);} else trackMistake(w); document.getElementById('btn-next-listen').style.display='block'; }; g.appendChild(b); }); setTimeout(()=>speak(cLw, 'us', null), 300); }
function nextListenQuestion() { lstI++; if(lstI<15) loadLst(); else{ document.getElementById('listen-active').style.display='none'; document.getElementById('listen-result').style.display='flex'; document.getElementById('listen-final-score').textContent=lstS+"/15"; gameFinished(lstS===15, 'listening', 1); } }

let fcI=0, fcM='en-uk', fcArr=[];
function startFlashcards(m) { fcM=m; fcI=0; fcArr=shuffleArray(getVocab()); showSection('flashcards'); updFc(); }
function updFc() { const c=document.getElementById('flashcard'); c.classList.remove('flipped'); setTimeout(()=>{ let w=fcArr[fcI]; document.getElementById('fc-front').innerHTML=`<div style="font-size:3rem; margin-bottom:10px;">${w.em}</div>`+(fcM==='en-uk'?w.en:w.uk); document.getElementById('fc-back').innerHTML=`<div style="font-size:3rem; margin-bottom:10px;">${w.em}</div>`+(fcM==='en-uk'?w.uk:w.en); document.getElementById('fc-counter').textContent=`${fcI+1}/${fcArr.length}`; },150); }
function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); dailyProg.flash++; checkGoals(); recordCardFlip(); }
function nextCard() { fcI=(fcI+1)%fcArr.length; updFc(); }
function prevCard() { fcI=(fcI-1+fcArr.length)%fcArr.length; updFc(); }

let bQ=[], bIdx=0, bErr=3, bLock=false;
function startBoss() { 
    const d = new Date();
    if(d.getDay() !== 0) { alert("Іспит доступний лише в неділю!"); return; }
    
    const voc = getVocab(); if(voc.length<50){alert("Мало слів для іспиту!"); return;} 
    
    let attempts = dailyProg.bossAttempts || 0;
    let cost = attempts < 2 ? 0 : (attempts === 2 ? 150 : (attempts === 3 ? 250 : 300));
    
    if(cost > 0) {
        if(totalXP < cost) { alert(`Бракує зірочок! Наступна спроба коштує ${cost} 🌟`); return; }
        if(!confirm(`Використати ${cost} 🌟 для додаткової спроби?`)) return;
        addXP(-cost); 
    }

    dailyProg.bossAttempts = attempts + 1; saveDaily(); updateBossUI();
    bQ = shuffleArray(voc).slice(0, 50); bIdx=0; bErr=3; showSection('boss'); 
    document.getElementById('boss-result').style.display='none'; 
    document.getElementById('boss-active').style.display='flex'; loadBoss(); 
}

function loadBoss() { 
    bLock = false; let w = bQ[bIdx]; 
    document.getElementById('boss-counter').textContent=`💀 Питання ${bIdx+1}/50`; 
    document.getElementById('boss-errors').textContent=`${bErr}/3`; 
    document.getElementById('boss-question-box').innerHTML=`<div style="font-size:3.5rem;margin-bottom:10px;">${w.em}</div>${w.uk}`; 
    const opts = shuffleArray([w, ...shuffleArray(baseVocabulary.filter(x=>x.en!==w.en)).slice(0,3)]); 
    const g = document.getElementById('boss-options'); g.innerHTML=''; 
    opts.forEach(o => { 
        const b = document.createElement('button'); b.className='option-btn'; b.textContent=o.en; 
        b.onclick = (e) => { 
            if(bLock) return; bLock=true; const c = o.en===w.en; fireParticles(e.clientX, e.clientY, c); 
            if(c) { b.classList.add('correct'); setTimeout(()=>{ bIdx++; if(bIdx<50) loadBoss(); else finishBoss(true); }, 300); } 
            else { b.classList.add('wrong'); bErr--; document.getElementById('boss-errors').textContent=`${bErr}/3`; setTimeout(()=>{ if(bErr <= 0) finishBoss(false); else { bIdx++; if(bIdx<50) loadBoss(); else finishBoss(true); } }, 400); } 
        }; g.appendChild(b); 
    }); 
}

function finishBoss(win) { 
    document.getElementById('boss-active').style.display='none'; document.getElementById('boss-result').style.display='flex'; 
    document.getElementById('boss-final').textContent = win ? "ПЕРЕМОГА!" : "ПРОВАЛ"; 
    document.getElementById('boss-result-title').textContent = win ? "Ти здолала Боса! 🎉" : "Ти загинула... 💔"; 
    
    if(win) { 
        if(!dailyProg.bossWon) {
            document.getElementById('boss-result-desc').textContent = "Оля - справжня войовниця! Ось твої +500 🌟 та Золотий купон! Юра тобою пишається! 🥰"; 
            addXP(500); inventory.push({ id:'boss_win', name:'🥇 Золотий купон від Юри (Перемога над Босом)', price:0, icon:'🥇', uid:Date.now() }); 
            localStorage.setItem('userInventory', JSON.stringify(inventory)); checkAchiev('boss_killer'); dailyProg.bossWon = true; saveDaily();
        } else {
            document.getElementById('boss-result-desc').textContent = "Ти вже отримувала головну нагороду сьогодні! Але тренування робить тебе ще сильнішою. Юра пишається тобою! 🥰";
        }
    } else { document.getElementById('boss-result-desc').textContent = "Життя скінчилися. Бос виявився сильнішим. Повтори словник і повертайся за реваншем! Юра вірить в тебе!"; } 
    renderInventory(); updateUI(); 
}

function exportProgress() { const d = { totalXP, lifetimeXP, currentStreak, bestSprint, dailyProg, mistakeWords, inventory, achievs, usedCodes, lastLogin, dailyGoals, userStats, lastWheelDate }; const s = btoa(unescape(encodeURIComponent(JSON.stringify(d)))); navigator.clipboard.writeText(s).then(()=>alert("Код скопійовано! Надішли Юрі 📩")).catch(()=>prompt("Скопіюй вручну:", s)); }
function importProgress() { const s = prompt("Встав код прогресу сюди:"); if(!s) return; try { const d = JSON.parse(decodeURIComponent(escape(atob(s)))); if(d.totalXP !== undefined) { localStorage.setItem('totalXP', d.totalXP); if(d.lifetimeXP !== undefined) localStorage.setItem('lifetimeXP', d.lifetimeXP); localStorage.setItem('streak', d.currentStreak); localStorage.setItem('sprintRecord', d.bestSprint); localStorage.setItem('dailyProg', JSON.stringify(d.dailyProg)); localStorage.setItem('userMistakes', JSON.stringify(d.mistakeWords)); localStorage.setItem('userInventory', JSON.stringify(d.inventory)); localStorage.setItem('achievs', JSON.stringify(d.achievs)); localStorage.setItem('usedCodes', JSON.stringify(d.usedCodes)); localStorage.setItem('lastLogin', d.lastLogin); if(d.dailyGoals) localStorage.setItem('dailyGoals', JSON.stringify(d.dailyGoals)); if(d.userStats) localStorage.setItem('userStats', JSON.stringify(d.userStats)); if(d.lastWheelDate) localStorage.setItem('lastWheelDate', d.lastWheelDate); alert("Прогрес відновлено!"); location.reload(); } } catch(e){alert("Помилка коду!");} }
