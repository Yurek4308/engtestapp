// --- СЛОВНИК ---
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

// --- ДАНІ КОТА, КОМПЛІМЕНТІВ ТА АЛФАВІТ ---
const catTips = [
    "Мяу! Ти сьогодні просто сяєш! ✨",
    "Ти - мій головний приз у цьому житті! ❤️",
    "Оля - найкраща дівчинка на світі! Мурр.. 🥰",
    "Твоя англійська стає все кращою, я пишаюся! 👑",
    "Кицику, не забудь усміхнутися, це тобі личить! 😊",
    "Сумуєш за Юрою? Він теж дуууже сумує! 🥺",
    "Покрути рулетку, Юра замовив тобі приз! 🎁",
    "Пам'ятай: ти розумна, красива і кохана! 💖",
    "Я тут, щоб оберігати твій прогрес! 🐾",
    "Твоя посмішка дорожча за всі зірочки! 😍"
];

const compliments = [
    "Ти сьогодні неймовірна! ✨", "Моя найрозумніша дівчинка 🥰", "Пишаюся тобою ❤️", "Твоя посмішка - найкраща 😍", 
    "Твоя наполегливість вражає! 🚀", "Кохаю тебе безмежно 💖", "Кохаю тебе дужче🤗", "Моя манюня😊", 
    "Моє серденько ❤️", "Кохаю тебе кицюня😘", "Ти моє найбільше натхнення 🌸"
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// --- МАГАЗИН ТА РУЛЕТКА ---
const shopItems = [
    { id: 'olya_love', name: 'Оля любить дужче Юру', price: 'ERROR', icon: '♾️' },
    { id: 'massage', name: 'Масаж', price: 500, icon: '💆‍♀️' },
    { id: 'dinner', name: 'Романтична вечеря', price: 1500, icon: '🍷' },
    { id: 'hug', name: 'Безлімітні обійми на день', price: 200, icon: '🫂' }
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

// --- ГЕЙМІФІКАЦІЯ ---
const goalPool = {
    easy: [ { id:'g1', title: "🎮 Easy: Зіграти 2 ігри", target: 2, rew: 5, type: 'games' }, { id:'g2', title: "🗂️ Easy: Погортати 10 карток", target: 10, rew: 5, type: 'flash' }, { id:'g3', title: "🤩 Easy: Вгадати 5 емодзі", target: 5, rew: 5, type: 'emoji' } ],
    medium: [ { id:'m1', title: "🔗 Mid: З'єднати 12 пар", target: 12, rew: 10, type: 'pairs' }, { id:'m2', title: "🎯 Mid: Квіз (16 балів)", target: 16, rew: 10, type: 'quiz_score' }, { id:'m3', title: "🔠 Mid: Спелінг (5 слів)", target: 5, rew: 10, type: 'spell' } ],
    hard: [ { id:'h1', title: "⚡ Hard: Спринт (25+ балів)", target: 25, rew: 20, type: 'sprint' }, { id:'h2', title: "👑 Hard: Квіз без помилок", target: 20, rew: 25, type: 'perfect' }, { id:'h3', title: "❤️‍🩹 Hard: Шибениця без втрат ❤️", target: 1, rew: 20, type: 'clean_hm' } ]
};

const achievList = { 
    first_blood: { icon: "🌱", title: "Перший крок", desc: "Зіграти першу гру", secret: false }, 
    perfect: { icon: "👑", title: "Моя відмінниця", desc: "Пройти квіз без помилок", secret: false }, 
    speed: { icon: "⚡", title: "Швидша за вітер", desc: "Набрати 15+ у спринті", secret: false }, 
    love: { icon: "💘", title: "Справжнє кохання", desc: "Знайти таємну пасхалку", secret: false }, 
    streak3: { icon: "🔥", title: "Капітан Стрік", desc: "Зайти 3 дні підряд", secret: false }, 
    streak7: { icon: "🔥", title: "Тиждень в ділі", desc: "Зайти 7 днів підряд", secret: false }, 
    owl: { icon: "🦉", title: "Нічна пташка", desc: "Вчити слова після 22:00", secret: false },
    polyglot: { icon: "🎓", title: "Поліглот", desc: "Зіграти 50 ігор загалом", secret: false },
    rich: { icon: "💰", title: "Багачка", desc: "Накопичити 2000 зірочок", secret: false },
    shopaholic: { icon: "🛍️", title: "Шопоголік", desc: "Купити 3 товари в магазині", secret: false },
    early_bird: { icon: "🌅", title: "Рання пташка", desc: "Зайти в додаток з 05:00 до 09:00", secret: false },
    sniper: { icon: "🎯", title: "Снайпер", desc: "15/15 у свайп T/F без помилок", secret: false },
    bookworm: { icon: "📚", title: "Книжковий черв'як", desc: "Перегорнути 50 карток", secret: false },
    builder: { icon: "🏗️", title: "Будівельник", desc: "Зіграти 10 разів у Конструктор", secret: false },
    vocab_king: { icon: "📖", title: "Леді Словник", desc: "Відкрити словник 50 разів", secret: false },
    marathon: { icon: "🏃‍♀️", title: "Марафон", desc: "Зіграти 10 ігор за день", secret: false },
    survivor: { icon: "🪓", title: "Виживальниця", desc: "СЕКРЕТ! Виграти Шибеницю з 1 ❤️", secret: true },
    crafter: { icon: "⛏️", title: "Майстер крафту", desc: "СЕКРЕТ! Конструктор без помилок", secret: true },
    ninja: { icon: "🥷", title: "Нічний ніндзя", desc: "СЕКРЕТ! Грати з 01:00 до 04:00", secret: true },
    sherlock: { icon: "🕵️‍♀️", title: "Шерлок", desc: "СЕКРЕТ! Знайти 3 промокоди", secret: true },
    navigator: { icon: "🚐", title: "Головний штурман", desc: "СЕКРЕТ! Знайти код авто", secret: true },
    hacker: { icon: "👨‍💻", title: "Хакер", desc: "СЕКРЕТ! Ввести 3 хибних промокоди", secret: true },
    sleeping_beauty: { icon: "😴", title: "Спляча красуня", desc: "СЕКРЕТ! Повернутися через 3 дні", secret: true },
    hug_addict: { icon: "🫂", title: "Ненаситна", desc: "СЕКРЕТ! Купити 3 рази обійми", secret: true },
    lucky_bastard: { icon: "🍀", title: "Улюблениця фортуни", desc: "СЕКРЕТ! Зірвати джекпот", secret: true },
    professor: { icon: "👩‍🏫", title: "Професор", desc: "СЕКРЕТ! Зіграти в усі режими", secret: true },
    midnight: { icon: "🕛", title: "Опівнічна магія", desc: "СЕКРЕТ! Зіграти рівно опівночі", secret: true },
    lucky7: { icon: "🎰", title: "Щаслива сімка", desc: "СЕКРЕТ! Набрати рівно 7 у Спринті", secret: true },
    sweet_tooth: { icon: "🍩", title: "Ласунка", desc: "СЕКРЕТ! Ввести солодкий промокод", secret: true },
    boss_killer: { icon: "😈", title: "Переможниця", desc: "СЕКРЕТ! Здати Недільний Іспит", secret: true }
};

const levelSystem = [
    { xp: 0, name: "Кошеня", icon: "🐾" }, { xp: 100, name: "Студентка", icon: "📚" },
    { xp: 500, name: "Розумничка", icon: "💡" }, { xp: 1000, name: "Леді", icon: "💃" },
    { xp: 2500, name: "Королева", icon: "👑" }, { xp: 5000, name: "Моя Богиня", icon: "🌌" }
];
