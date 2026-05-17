// ==========================================
// 1. БАЗА ДАНИХ (Словник, налаштування)
// ==========================================
const baseVocabulary = [
    // --- ❓ Питання (q) - НОВА КАТЕГОРІЯ ---
    { en: "Who", uk: "Хто", em: "👤", c: "q" }, { en: "What", uk: "Що", em: "❔", c: "q" }, { en: "Where", uk: "Де", em: "📍", c: "q" }, { en: "When", uk: "Коли", em: "⏰", c: "q" }, { en: "Why", uk: "Чому", em: "🤷", c: "q" }, { en: "How", uk: "Як", em: "🤔", c: "q" }, { en: "Which", uk: "Котрий", em: "🔃", c: "q" }, { en: "Whose", uk: "Чий", em: "🆔", c: "q" }, { en: "How many", uk: "Скільки (рахуємо)", em: "🔢", c: "q" }, { en: "How much", uk: "Скільки (не рахуємо)", em: "💰", c: "q" }, { en: "How long", uk: "Як довго", em: "⏳", c: "q" },

    // --- 😍 Компліменти (co) ---
    { en: "Gorgeous", uk: "Розкішна", em: "😻", c: "co" }, { en: "Smart", uk: "Розумна", em: "🧠", c: "co" }, { en: "Funny", uk: "Смішна", em: "😂", c: "co" }, { en: "Cute", uk: "Мила", em: "🥺", c: "co" }, { en: "Perfect", uk: "Ідеальна", em: "✨", c: "co" }, { en: "Stunning", uk: "Приголомшлива", em: "🤩", c: "co" }, { en: "Amazing", uk: "Дивовижна", em: "✨", c: "co" }, { en: "Wonderful", uk: "Чудова", em: "🌸", c: "co" }, { en: "Charming", uk: "Чарівна", em: "🧚‍♀️", c: "co" }, { en: "Angel", uk: "Янгол", em: "👼", c: "co" }, { en: "Princess", uk: "Принцеса", em: "👸", c: "co" }, { en: "Sunshine", uk: "Сонечко", em: "🌞", c: "co" }, { en: "Precious", uk: "Дорогоцінна", em: "💎", c: "co" }, { en: "Breathtaking", uk: "Захоплююча", em: "😮", c: "co" },

    // --- 👗 Одяг (cl) ---
    { en: "Shirt", uk: "Сорочка", em: "👕", c: "cl" }, { en: "Dress", uk: "Сукня", em: "👗", c: "cl" }, { en: "Hat", uk: "Шапка", em: "👒", c: "cl" }, { en: "Socks", uk: "Шкарпетки", em: "🧦", c: "cl" }, { en: "Pants", uk: "Штани", em: "👖", c: "cl" }, { en: "Jacket", uk: "Куртка", em: "🧥", c: "cl" }, { en: "Skirt", uk: "Спідниця", em: "👗", c: "cl" }, { en: "Shoes", uk: "Взуття", em: "👟", c: "cl" }, { en: "Coat", uk: "Пальто", em: "🧥", c: "cl" }, { en: "Scarf", uk: "Шарф", em: "🧣", c: "cl" }, { en: "Sweater", uk: "Светр", em: "🧶", c: "cl" }, { en: "Jeans", uk: "Джинси", em: "👖", c: "cl" }, { en: "Shorts", uk: "Шорти", em: "🩳", c: "cl" }, { en: "Underwear", uk: "Білизна", em: "👙", c: "cl" },

    // --- 🍩 Смаколики (fo) ---
    { en: "Cake", uk: "Торт", em: "🍰", c: "fo" }, { en: "Chocolate", uk: "Шоколад", em: "🍫", c: "fo" }, { en: "Ice cream", uk: "Морозиво", em: "🍦", c: "fo" }, { en: "Coffee", uk: "Кава", em: "☕", c: "fo" }, { en: "Candy", uk: "Цукерка", em: "🍬", c: "fo" }, { en: "Sweets", uk: "Солодощі", em: "🍭", c: "fo" }, { en: "Tea", uk: "Чай", em: "🍵", c: "fo" }, { en: "Juice", uk: "Сік", em: "🧃", c: "fo" }, { en: "Pizza", uk: "Піца", em: "🍕", c: "fo" }, { en: "Burger", uk: "Бургер", em: "🍔", c: "fo" },

    // --- 🩺 Тіло (bh) ---
    { en: "Lips", uk: "Губи", em: "👄", c: "bh" }, { en: "Hands", uk: "Руки", em: "🤲", c: "bh" }, { en: "Hair", uk: "Волосся", em: "💇‍♀️", c: "bh" }, { en: "Face", uk: "Обличчя", em: "👩", c: "bh" }, { en: "Cheek", uk: "Щока", em: "😊", c: "bh" }, { en: "Neck", uk: "Шия", em: "🦒", c: "bh" }, { en: "Heart", uk: "Серце", em: "🫀", c: "bh" }, { en: "Eyes", uk: "Очі", em: "👀", c: "bh" },

    // --- 🌿 Природа (n) ---
    { en: "Grass", uk: "Трава", em: "🌿", c:"n" }, { en: "Tree", uk: "Дерево", em: "🌳", c:"n" }, { en: "Flower", uk: "Квітка", em: "🌸", c:"n" }, { en: "Sun", uk: "Сонце", em: "☀️", c:"n" }, { en: "Moon", uk: "Місяць", em: "🌙", c:"n" }, { en: "Star", uk: "Зірка", em: "⭐", c:"n" }, { en: "Cloud", uk: "Хмара", em: "☁️", c:"n" }, { en: "Sky", uk: "Небо", em: "🌌", c:"n" }, { en: "Fire", uk: "Вогонь", em: "🔥", c: "n" },

    // --- 🏃‍♀️ Дії (a) ---
    { en: "Talk", uk: "Розмовляти", em: "🗣️", c:"a" }, { en: "Eat", uk: "Їсти", em: "🍽️", c:"a" }, { en: "Drink", uk: "Пити", em: "🥤", c:"a" }, { en: "Go", uk: "Йти", em: "🚶‍♀️", c:"a" }, { en: "Make", uk: "Робити", em: "🛠️", c:"a" }, { en: "Buy", uk: "Купувати", em: "🛍️", c:"a" }, { en: "Run", uk: "Бігти", em: "🏃", c: "a" }, { en: "Sleep", uk: "Спати", em: "💤", c: "a" }, { en: "Listen", uk: "Слухати", em: "👂", c: "a" },

    // --- ❤️ Почуття (f) ---
    { en: "Love", uk: "Любити", em: "❤️", c:"f" }, { en: "Kiss", uk: "Цілувати", em: "💋", c:"f" }, { en: "Smile", uk: "Посмішка", em: "😊", c:"f" }, { en: "Hug", uk: "Обійняти", em: "🫂", c: "f" }, { en: "Happy", uk: "Щаслива", em: "🥰", c: "f" }, { en: "Sad", uk: "Сумна", em: "😔", c: "f" }, { en: "Proud", uk: "Горда", em: "🦚", c: "f" },

    // --- 🏠 Дім (h) ---
    { en: "House", uk: "Будинок", em: "🏠", c:"h" }, { en: "Bed", uk: "Ліжко", em: "🛏️", c: "h" }, { en: "Door", uk: "Двері", em: "🚪", c: "h" }, { en: "Window", uk: "Вікно", em: "🪟", c: "h" }, { en: "Table", uk: "Стіл", em: "🪑", c: "h" },

    // --- 💬 Фрази / Інше (p) ---
    { en: "Because", uk: "Тому що", em: "❓", c: "p" }, { en: "But", uk: "Але", em: "☝️", c: "p" }, { en: "Always", uk: "Завжди", em: "♾️", c: "p" }, { en: "Never", uk: "Ніколи", em: "🚫", c: "p" }, { en: "Today", uk: "Сьогодні", em: "📅", c: "p" }, { en: "Tomorrow", uk: "Завтра", em: "⏭️", c: "p" },
    // ======================================================================
    // 🌶️🌶️🌶️ ПІКАНТНІ ФРАЗИ (spicy) - ЗАЛИШЕНО БЕЗ ЗМІН 🌶️🌶️🌶️
    // ======================================================================
    { en: "You look so damn sexy", uk: "Ти виглядаєш до біса сексуально", c: "spicy" },
    { en: "I can't stop thinking about your body", uk: "Я не можу перестати думати про твоє тіло", c: "spicy" },
    { en: "Wear something revealing", uk: "Одягни щось відверте", c: "spicy" },
    { en: "Take it off slowly", uk: "Зніми це повільно", c: "spicy" },
    { en: "Leave your panties at home", uk: "Залиш свої трусики вдома", c: "spicy" },
    { en: "You are my addiction", uk: "Ти моя залежність", c: "spicy" },
    { en: "I want to ruin your lipstick", uk: "Я хочу зіпсувати твою помаду", c: "spicy" },
    { en: "Let's do it in the car", uk: "Давай займемося цим в машині", c: "spicy" },
    { en: "I love the way you taste", uk: "Мені подобається твій смак", c: "spicy" },
    
    { en: "Kiss my neck", uk: "Поцілуй мене в шию", c: "spicy" },
    { en: "Whisper in my ear", uk: "Пошепки мені на вушко", c: "spicy" },
    { en: "Touch me right there", uk: "Торкнися мене прямо там", c: "spicy" },
    { en: "I want to feel your skin", uk: "Я хочу відчувати твою шкіру", c: "spicy" },
    { en: "Bite your lip", uk: "Прикуси губу", c: "spicy" },
    { en: "Scratch my back", uk: "Поряпай мені спину", c: "spicy" },
    { en: "I want you so bad", uk: "Я так сильно тебе хочу", c: "spicy" },
    { en: "Make love to me", uk: "Кохайся зі мною", c: "spicy" },
    { en: "I am completely yours", uk: "Я повністю твоя (твій)", c: "spicy" },
    { en: "Take me to bed", uk: "Відведи мене в ліжко", c: "spicy" },
    
    { en: "Faster", uk: "Швидше", c: "spicy" },
    { en: "Deeper", uk: "Глибше", c: "spicy" },
    { en: "Harder", uk: "Сильніше / Жорсткіше", c: "spicy" },
    { en: "Don't you dare stop", uk: "Не смій зупинятися", c: "spicy" },
    { en: "I'm so turned on", uk: "Я так сильно збуджена (збуджений)", c: "spicy" },
    { en: "Say my name", uk: "Скажи моє ім'я", c: "spicy" },
    { en: "Look me in the eyes", uk: "Дивись мені в очі", c: "spicy" },
    { en: "I am close", uk: "Я вже близько", c: "spicy" },
    { en: "Come for me", uk: "Кінчи для мене", c: "spicy" },
    { en: "Let me taste you", uk: "Дай мені спробувати тебе", c: "spicy" },

    { en: "I want you right now", uk: "Я хочу тебе прямо зараз", c: "spicy" },
    { en: "Take off your clothes", uk: "Зніми з себе одяг", c: "spicy" },
    { en: "Tie me up", uk: "Зв'яжи мене", c: "spicy" },
    { en: "On your knees", uk: "На коліна", c: "spicy" },
    { en: "Spank me", uk: "Відшльопай мене", c: "spicy" },
    { en: "Tell me what you want", uk: "Скажи мені, чого ти хочеш", c: "spicy" },
    { en: "You belong to me", uk: "Ти належиш мені", c: "spicy" },
    { en: "Make me moan", uk: "Змусь мене стогнати", c: "spicy" },
    { en: "Good girl", uk: "Хороша дівчинка", c: "spicy" },
    { en: "Punish me", uk: "Покарай мене", c: "spicy" },
    { en: "Arch your back", uk: "Вигни спинку", c: "spicy" },
    { en: "Spread your legs", uk: "Розсунь ноги", c: "spicy" },
    { en: "Beg for it", uk: "Попроси мене про це", c: "spicy" },
    { en: "You are my toy tonight", uk: "Ти моя іграшка на цю ніч", c: "spicy" },
    { en: "Don't make a sound", uk: "Не видавай ні звуку", c: "spicy" },
    { en: "Look at me when I do this to you", uk: "Дивись на мене, коли я роблю це з тобою", c: "spicy" },
    { en: "Hold my wrists", uk: "Тримай мої зап'ястя", c: "spicy" },
    { en: "Pull my hair", uk: "Потягни мене за волосся", c: "spicy" },
    { en: "I'm in control now", uk: "Тепер я тут головний", c: "spicy" },
    { en: "Swallow", uk: "Ковтай", c: "spicy" },

    { en: "I have a dirty secret", uk: "У мене є брудний секрет", c: "spicy" },
    { en: "I can't wait to get you home", uk: "Не можу дочекатися, коли привезу тебе додому", c: "spicy" },
    { en: "What would you do to me?", uk: "Що б ти зі мною зробив?", c: "spicy" },
    { en: "I am not wearing any underwear", uk: "На мені немає білизни", c: "spicy" },
    { en: "You are making me crazy", uk: "Ти зводиш мене з розуму", c: "spicy" },
    { en: "I want you to ruin me", uk: "Я хочу, щоб ти мене зіпсував", c: "spicy" },
    { en: "Tease me", uk: "Подражни мене", c: "spicy" },
    { en: "I've been thinking about this all day", uk: "Я думала про це весь день", c: "spicy" },
    { en: "Show me what you can do", uk: "Покажи, на що ти здатний", c: "spicy" },
    { en: "Let's take a shower together", uk: "Давай приймемо душ разом", c: "spicy" },

    { en: "Pin me to the wall", uk: "Притисни мене до стіни", c: "spicy" },
    { en: "Hold my neck", uk: "Тримай мене за шию", c: "spicy" },
    { en: "Leave marks on me", uk: "Залиш на мені сліди", c: "spicy" },
    { en: "Bite me", uk: "Вкуси мене", c: "spicy" },
    { en: "Be rough with me", uk: "Будь зі мною грубим", c: "spicy" },
    { en: "Take control", uk: "Візьми все під контроль", c: "spicy" },
    { en: "Don't be gentle", uk: "Не будь ніжним", c: "spicy" },
    { en: "Rip my clothes off", uk: "Зірви з мене одяг", c: "spicy" },
    { en: "Make me yours", uk: "Зроби мене своєю", c: "spicy" },
    { en: "Shut up and kiss me", uk: "Замовкни і поцілуй мене", c: "spicy" },

    { en: "You feel amazing", uk: "Ти відчуваєшся неймовірно", c: "spicy" },
    { en: "Kiss me everywhere", uk: "Цілуй мене скрізь", c: "spicy" },
    { en: "I want to feel your hands on me", uk: "Хочу відчувати твої руки на собі", c: "spicy" },
    { en: "Do whatever you want with me", uk: "Роби зі мною все, що хочеш", c: "spicy" },
    { en: "You are so fucking hot", uk: "Ти біса гарячий", c: "spicy" },
    { en: "I want to be your slave tonight", uk: "Я хочу бути твоєю рабинею цієї ночі", c: "spicy" },
    { en: "Make me scream", uk: "Змусь мене кричати", c: "spicy" },
    { en: "I need you inside me", uk: "Ти потрібен мені всередині", c: "spicy" },
    { en: "Don't pull out", uk: "Не витягуй", c: "spicy" },
    { en: "Taste me", uk: "Спробуй мене на смак", c: "spicy" }
];
const sentences = [
    { en: "I love you forever", uk: "Я кохаю тебе назавжди" }, { en: "We are together", uk: "Ми разом" }, { en: "You are beautiful", uk: "Ти красива" }, { en: "Give me a kiss", uk: "Дай мені поцілунок" }, { en: "Look at the stars", uk: "Подивись на зірки" }, { en: "I miss you", uk: "Я сумую за тобою" }, { en: "Hold me close", uk: "Тримай мене міцно" }, { en: "You make me smile", uk: "Ти змушуєш мене посміхатися" }, { en: "I want to hug you", uk: "Я хочу обійняти тебе" }, { en: "You are my everything", uk: "Ти моє все" }, { en: "Let's drink some coffee", uk: "Давай вип'ємо трохи кави" }, { en: "I need you today", uk: "Ти потрібна мені сьогодні" }, { en: "You are so smart", uk: "Ти така розумна" }, { en: "We can go tomorrow", uk: "Ми можемо піти завтра" }, { en: "Always think about you", uk: "Завжди думаю про тебе" }, { en: "You have beautiful eyes", uk: "У тебе красиві очі" }, { en: "I like this sweet cake", uk: "Мені подобається цей солодкий торт" }, { en: "Let's watch a cool movie", uk: "Давай подивимось крутий фільм" }, { en: "You are a perfect girl", uk: "Ти ідеальна дівчина" }, { en: "I feel so good with you", uk: "Мені так добре з тобою" }
];

// --- ФРАЗИ ДЛЯ КИТІ-ПОМІЧНИКА (ВІД ЛИЦЯ ЮРИ) ---
// ==========================================
// 🔥 ОБ'ЄДНАНИЙ РОЗУМНИЙ ДВИГУН КОТИКА
// ==========================================
const catReactions = {
    // 🐾 Твій оригінальний гігантський масив перенесено сюди повністю:
    poke: [
        // Прямі зізнання та романтика
        "Кицюню, не забудь усміхнутися, я тебе дуже-дуже кохаю! 🥰",
        "Сумуєш за мною? Бо я за тобою просто неймовірно сумую... 🥺",
        "Ти — моє найбільше щастя. Твій Юра. ❤️",
        "Що б ти не робила, пам'ятай: я завжди поруч і у всьому тебе підтримую! 🫂",
        "Моя найкраща в світі дівчинка, ти сьогодні просто сяєш! ✨",
        "Мяу! Юра просив передати тобі мільйон поцілунків! 😘",
        "Я кохаю тебе від Землі і до найдальшої зірки! 🌌",
        "Твоя посмішка — це найкраще, що є в моєму житті. Усміхнись! 😍",
        "Знаєш, про що я зараз думаю? Про тебе. Як і завжди. ❤️",
        "Кожне твоє повідомлення робить мій день кращим. Кохаю тебе! 💌",
        "Навіть цей віртуальний котик знає, що я без тебе не можу! 🐾",
        "Ти моє маленьке диво. Ніколи про це не забувай! ✨",
        "Якби за кожну думку про тебе мені давали зірочку, я б уже скупив весь магазин! 🌟",
        "Я обожнюю твої очі, твій сміх і те, як ти стараєшся! 🥰",

        // Турбота про неї
        "Сонце моє, ти сьогодні добре їла? Не забувай берегти себе! 🍲",
        "Відпочинь трошки, якщо втомилася. Я тебе дуже люблю! 💆‍♀️",
        "Нехай твій сьогоднішній день буде таким же прекрасним, як і ти! ☀️",
        "Одягайся тепліше і пам'ятай, що я тебе грію своїм коханням! 🧣",
        "Не переживай через дрібниці, ми з усім впораємося разом. 🤝",

        // Потужна мотивація
        "Моя розумничка! Я так пишаюся тобою 🥰",
        "Ти здатна на все, а я завжди буду поруч, щоб допомогти! 🚀",
        "Навіть якщо щось не виходить з першого разу, ти для мене найкраща! 💖",
        "Кожен твій крок вперед — це наша маленька спільна перемога! 🥇",
        "Немає нічого неможливого для такої цілеспрямованої дівчинки! 🔥",
        "Твоя наполегливість мене просто захоплює. Ти мій ідеал! 💫",
        "Пам'ятай: головне не швидкість, а те, що ти не зупиняєшся. А я завжди тримаю тебе за руку! 🤝",
        "Вір у себе так само сильно, як я вірю в тебе! 🌟",
        "Ще кілька кроків, моя солодка, і ти досягнеш всього, чого забажаєш! 🎯",
        "Мурр... Юра сказал, що за твої старання дасть тобі справжній поцілунок! 💋",
        "Помилятися — це нормально, манюня. Головне йти далі! 💪",

        // Ігрові підказки з любов'ю
        "Твій коханий хлопчик замовив тобі подарунок. Покрути рулетку! 🎁",
        "Я сховав для тебе секретні коди... Напиши мені, якщо хочеш підказку! 🕵️‍♀️",
        "Заглянь у Магазин, моя королево, там можна купити мої обійми! 🛍️",
        "Не забувай про 'Роботу над помилками', моя квіточко! 🧠",
        "Зробимо швидкий 'Спринт'? Я вболіваю за тебе! ⏱️",
        "Тс-с... Кажуть, по п'ятницях я відкриваю для тебе Чорний Ринок... 🕶️",
        "Збери всі щоденні цілі, щоб я міг тобою ще більше пишатися! 🏆",
        "Зіграй у 'Сейф', уяви, що пароль — це шлях до мого серденька (хоча він і так твій)! 🔐",
        "Заглянь у Словник, я додав туди твої улюблені смаколики! 🍩",
        "Бачиш ту кнопочку з купонами? Там є дещо цікаве для нас двох... 😉"
    ],
    
    // Автоматичні реакції на події:
    boss_lose: [
        "Не сумуй, Юра все одно вважає тебе найкращою! 🫂",
        "Ех, цей Бос просто бука... Але ти все одно моя найрозумніша розумничка! ❤️",
        "Нічого, манюня, наступного разу ми розірвемо цього Боса на шматки! 🐾"
    ],
    boss_win: [
        "УРА-А-А! Ми зробили це! Ти просто знищила цього Боса! 😈👑",
        "Моя королева розгромила іспит! Юра тобою неймовірно пишається! 🏆❤️"
    ],
    sprint_record: [
        "ОГО! Новий рекорд! Ти просто космос, моя Королева Спринту! ⚡👑",
        "Швидша за блискавку! Юра в шоці від твоєї крутості! 🏎️💨",
        "Нічого собі швидкість! Тримай корону, ти її чесно заслужила! 👑"
    ],
    game_perfect: [
        "Ідеально! Жодної помилки! Ти просто геній, Олюся! 🧠✨",
        "Чиста перемога! Юра каже, що за такий раунд належить справжній великий цьом! 💋"
    ]
};

// Стан котячих мордочок
const catMoods = {
    normal: "🐈",
    happy: "😻",
    sad: "😿",
    crown: "👑🐈",
    shock: "🙀",
    angry: "😾" // 🔥 ДОДАНО СЮДИ
};

let catMoodTimer = null;

// Головна керуюча функція хмаринки та емодзі
function triggerCatReaction(category, mood = 'normal', customText = null) {
    const bubble = document.getElementById('cat-bubble');
    const catIcon = document.getElementById('main-cat-icon');
    
    if (!bubble) return;
    
    // 🔥 ФІКС 1: Якщо кіт в образі (карантин), ігноруємо всі інші ігрові репліки, поки Оля його не поцілує
    if (localStorage.getItem('catQuarantine') === 'true' && category !== 'quarantine') return;
    
    let text = customText;
    if (!text && catReactions[category]) {
        const pool = catReactions[category];
        text = pool[Math.floor(Math.random() * pool.length)];
    }
    
    // 🔥 ФІКС 2: Міняємо textContent на innerHTML, щоб рожева кнопка "Я поцілувала" могла відмалюватися
    bubble.innerHTML = text;
    bubble.classList.add('show');
    
    if (catIcon && catMoods[mood]) {
        catIcon.textContent = catMoods[mood];
    }
    
    try { if (typeof playSFX === "function") playSFX(true); } catch(e) {}
    
    clearTimeout(catMoodTimer);
    
    // 🔥 ФІКС 3: Якщо це образа (карантин), таймер зникнення НЕ запускаємо! Хмаринка висить вічно
    if (category === 'quarantine') return;
    
    // Через 4 секунди ховаємо текст і повертаємо коту початковий вигляд 🐈
    catMoodTimer = setTimeout(() => {
        bubble.classList.remove('show');
        if (catIcon) catIcon.textContent = catMoods.normal;
    }, 4000);
}

// 🔥 ПОКАЗАТИ ХМАРИНКУ ОБИДИ КОТИКА
function showQuarantineBubble() {
    const catIcon = document.getElementById('main-cat-icon');
    if (catIcon) catIcon.textContent = catMoods.angry;
    
    const quarantineHtml = `
        <div style="font-weight: 700; font-size: 0.9rem; line-height: 1.4;">Котик образився за підбір кодів! 😾<br><span style="color:var(--primary);">Щоб розблокувати його, підійди до Юри та палко поцілуй його в щоку! 😘</span></div>
        <button onclick="unlockCatWithKiss()" style="margin-top:12px; background: linear-gradient(135deg, #ec4899, #f472b6); color:white; border:none; padding:8px 14px; border-radius:10px; font-weight:800; font-size:0.8rem; cursor:pointer; width:100%; box-shadow:0 4px 10px rgba(236,72,153,0.2); transition: 0.2s;">Я поцілувала ❤️</button>
    `;
    
    triggerCatReaction('quarantine', 'angry', quarantineHtml);
}

// 🔥 ЗНЯТТЯ КАРАНТИНУ ПОЦІЛУНКОМ
function unlockCatWithKiss() {
    localStorage.removeItem('catQuarantine');
    const bubble = document.getElementById('cat-bubble');
    const catIcon = document.getElementById('main-cat-icon');
    
    if (bubble) bubble.classList.remove('show');
    if (catIcon) catIcon.textContent = catMoods.normal;
    
    // Повністю обнуляємо лічильник помилок, щоб Оля могла знову вводити коди
    userStats.failedCodes = 0;
    saveStats();
    
    showToast("Котик вибачив тебе! 🥰🐾");
    fireParticles(window.innerWidth/2, window.innerHeight/2, true);
}

// Функція кліку на кота (слухається твоїх оригінальних умов)
function pokeCat() {
    // 🔥 ФІКС 4: Якщо Оля тапає по коту під час образи, знову примусово нагадуємо про поцілунок
    if (localStorage.getItem('catQuarantine') === 'true') {
        showQuarantineBubble();
        return;
    }

    const bubble = document.getElementById('cat-bubble');
    if (!bubble || bubble.classList.contains('show')) return; 
    
    // Рахуємо кліки в статистику
    userStats.catClicks = (userStats.catClicks || 0) + 1;
    saveStats();
    
    // Перевірка секретного досягнення
    if (userStats.catClicks >= 30) checkAchiev('cat_lover');
    
    triggerCatReaction('poke', 'happy');
}
// --- 🌶️ ЛОГІКА ПІКАНТНОГО РУБИЛЬНИКА ---
let spicyInGames = localStorage.getItem('spicyInGames') === 'true';

function toggleSpicyGames(checkbox) {
    spicyInGames = checkbox.checked;
    localStorage.setItem('spicyInGames', spicyInGames);
}

function getGameWords() {
    let hasSpicyCard = false;
    try { 
        if (typeof inventory !== 'undefined' && inventory !== null) {
            hasSpicyCard = inventory.some(item => item && item.name && item.name.includes('Пікантні фрази'));
        }
    } catch(e) { }

    if (!hasSpicyCard || !spicyInGames) {
        return baseVocabulary.filter(w => w.c !== 'spicy');
    }
    
    return baseVocabulary;
}

function updateSpicyToggle() {
    let hasSpicyCard = false;
    try { 
        if (typeof inventory !== 'undefined' && inventory !== null) {
            hasSpicyCard = inventory.some(item => item && item.name && item.name.includes('Пікантні фрази'));
        }
    } catch(e) { }
    
    const container = document.getElementById('spicy-toggle-container');
    const checkbox = document.getElementById('spicy-games-toggle');
    if (container && checkbox) {
        container.style.display = hasSpicyCard ? 'block' : 'none';
        checkbox.checked = spicyInGames;
    }
}

const compliments = ["Ти сьогодні неймовірна! ✨", "Моя найрозумніша дівчинка 🥰", "Пишаюся тобою ❤️", "Твоя посмішка - найкраща 😍", "Твоя наполегливість вражає! 🚀", "Кохаю тебе безмежно 💖", "Кохаю тебе дужче🤗", "Моя манюня😊", "Моє серденько ❤️", "Кохаю тебе кицюня😘", "Ти моє найбільше натхнення 🌸"];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const shopItems = [
    { id: 'olya_love', name: 'Оля любить дужче Юру', price: 'ERROR', icon: '♾️' },
    { id: 'freeze', name: 'Заморозка стріку ❄️', price: 300, icon: '🧊' },
    { id: 'shield', name: 'Щит для Боса 🛡️', price: 400, icon: '🛡️' },
    { id: 'hint', name: 'Лупа Шерлока (50/50) 🔍', price: 50, icon: '🔍' },
    { id: 'vip_slang', name: 'VIP: Пікантні фрази 🌶️', price: 1000, icon: '🌶️' },
    { id: 'title_queen', name: 'Титул: Володарка серця 👑', price: 1000, icon: '📜' },
    { id: 'massage', name: 'Купон: Масаж від Коханого!', price: 500, icon: '💆‍♀️' },
    { id: 'dinner', name: 'Романтична вечеря', price: 1500, icon: '🍷' },
    { id: 'hug', name: 'Безлімітні обійми на день', price: 200, icon: '🫂' },
    { id: 'day_off', name: 'День без рішень 🧘‍♀️', price: 500, icon: '🧘‍♀️' },
    { id: 'movie_veto', name: 'Право вето на фільм 🍿', price: 300, icon: '🚫' },
    { id: 'coffee_bed', name: 'Кава/Чай у ліжко ☕', price: 200, icon: '☕' },
    { id: 'culinary', name: 'Кулінарний експеримент 👨‍🍳', price: 500, icon: '🍲' },
    { id: 'unlimit_kisses', name: 'Безліміт палких цьомчиків на день', price: 200, icon: '💋' } // 🔥 НОВА КАРТКА
];

const bmItems = [
    { id: 'bm_night', name: 'Ексклюзив: Нічна прогулянка 🌙', price: 800, icon: '🌃' },
    { id: 'bm_breakfast', name: 'Ексклюзив: Сніданок у ліжко 🥐', price: 600, icon: '🥞' },
    { id: 'bm_cinema', name: 'Ексклюзив: Похід у кінотеатр 🍿', price: 900, icon: '🎞️' },
    { id: 'bm_picnic', name: 'Ексклюзив: Пікнік у парку 🧺', price: 750, icon: '🌳' },
    { id: 'bm_flowers', name: 'Ексклюзив: Букет квітів 💐', price: 1200, icon: '🌷' }
];

const wheelPrizes = [
    // Було перший рядок: { type: 'jackpot', val: '500', msg: 'ДЖЕКПОТ!  Масаж від Коханого твій', icon: '💆‍♀️', name: 'Масаж киці (ДЖЕКПОТ)' },
   { type: 'jackpot', val: '500', msg: 'ДЖЕКПОТ! Масаж від Коханого твій! 🙌❤️', icon: '💆‍♀️', name: 'Купон: Масаж від Коханого!' },
    { type: 'xp', val: 20, msg: '+20 🌟! Непогано!' },
    { type: 'xp', val: 0, msg: 'Пусто... Цього разу не пощастило 😢' },
    { type: 'xp', val: 20, msg: '+20 🌟! Непогано!' },
    { type: 'xp', val: 0, msg: 'Пусто... Цього разу не пощастило 😢' },
    { type: 'xp', val: 20, msg: '+20 🌟! Непогано!' },
    { type: 'xp', val: 50, msg: '+50 🌟! Ого, ти повернула своє!' },
    { type: 'xp', val: 100, msg: 'КЛАС! +100 🌟!' },
    { type: 'item', val: '🍫🍬', msg: 'Виграш: Солодощі! Шукай у Купонах!', icon: '🍬', name: 'Смаколики' },
    { type: 'item', val: '🎁', msg: 'Виграш: Сюрприз! Шукай у Купонах!', icon: '🎁', name: 'Подарунок-сюрприз' }
];

const goalPool = {
    easy: [ { id:'g1', title: "🎮 Easy: Зіграти 2 ігри", target: 2, rew: 5, type: 'games' }, { id:'g2', title: "🗂️ Easy: Погортати 10 карток", target: 10, rew: 5, type: 'flash' }, { id:'g3', title: "🤩 Easy: Вгадати 5 емодзі", target: 5, rew: 5, type: 'emoji' } ],
    medium: [ { id:'m1', title: "🔗 Mid: З'єднати 12 пар", target: 12, rew: 10, type: 'pairs' }, { id:'m2', title: "🎯 Mid: Квіз (16 балів)", target: 16, rew: 10, type: 'quiz_score' }, { id:'m3', title: "🔠 Mid: Спелінг (5 слів)", target: 5, rew: 10, type: 'spell' } ],
    hard: [ { id:'h1', title: "⚡ Hard: Спринт (25+ балів)", target: 25, rew: 20, type: 'sprint' }, { id:'h2', title: "👑 Hard: Квіз без помилок", target: 20, rew: 25, type: 'perfect' }, { id:'h3', title: "❤️‍🩹 Hard: Шибениця без втрат ❤️", target: 1, rew: 20, type: 'clean_hm' } ]
};

const achievList = { 
    first_blood: { icon: "🌱", title: "Перший крок", desc: "Зіграти першу гру", secret: false }, perfect: { icon: "👑", title: "Моя відмінниця", desc: "Пройти квіз без помилок", secret: false }, speed: { icon: "⚡", title: "Швидша за вітер", desc: "Набрати 15+ у спринті", secret: false }, love: { icon: "💘", title: "Справжнє кохання", desc: "Знайти таємну пасхалку", secret: false }, streak3: { icon: "🔥", title: "Капітан Стрік", desc: "Зайти 3 дні підряд", secret: false }, streak7: { icon: "🔥", title: "Тиждень в ділі", desc: "Зайти 7 днів підряд", secret: false }, owl: { icon: "🦉", title: "Нічна пташка", desc: "Вчити слова після 22:00", secret: false }, polyglot: { icon: "🎓", title: "Поліглот", desc: "Зіграти 50 ігор загалом", secret: false }, rich: { icon: "💰", title: "Багачка", desc: "Накопичити 2000 зірочок", secret: false }, shopaholic: { icon: "🛍️", title: "Шопоголік", desc: "Купити 3 товари в магазині", secret: false }, early_bird: { icon: "🌅", title: "Рання пташка", desc: "Зайти в додаток з 05:00 до 09:00", secret: false }, sniper: { icon: "🎯", title: "Снайпер", desc: "15/15 у свайп T/F без помилок", secret: false }, bookworm: { icon: "📚", title: "Книжковий черв'як", desc: "Перегорнути 50 карток", secret: false }, builder: { icon: "🏗️", title: "Будівельник", desc: "Зіграти 10 разів уgrid Конструктор", secret: false }, vocab_king: { icon: "📖", title: "Леді Словник", desc: "Відкрити словник 50 разів", secret: false }, marathon: { icon: "🏃‍♀️", title: "Марафон", desc: "Зіграти 10 ігор за день", secret: false }, survivor: { icon: "🪓", title: "Виживальниця", desc: "СЕКРЕТ! Виграти Шибеницю з 1 ❤️", secret: true }, crafter: { icon: "⛏️", title: "Майстер крафту", desc: "СЕКРЕТ! Reconstruction без помилок", secret: true }, ninja: { icon: "🥷", title: "Нічний ніндзя", desc: "СЕКРЕТ! Грати з 01:00 до 04:00", secret: true }, sherlock: { icon: "🕵️‍♀️", title: "Шерлок", desc: "СЕКРЕТ! Знайти 3 промокоди", secret: true }, navigator: { icon: "🚐", title: "Головний штурман", desc: "СЕКРЕТ! Знайти код авто", secret: true }, hacker: { icon: "👨‍💻", title: "Хакер", desc: "СЕКРЕТ! Ввести 3 хибних промокоди", secret: true }, sleeping_beauty: { icon: "😴", title: "Спляча красуня", desc: "СЕКРЕТ! Повернутися через 3 дні", secret: true }, hug_addict: { icon: "🫂", title: "Ненаситна", desc: "СЕКРЕТ! Купити 3 рази обійми", secret: true }, lucky_bastard: { icon: "🍀", title: "Улюблениця фортуни", desc: "СЕКРЕТ! Зірвати джекпот", secret: true }, professor: { icon: "👩‍🏫", title: "Професор", desc: "СЕКРЕТ! Зіграти в усі режими", secret: true }, midnight: { icon: "🕛", title: "Опівнічна магія", desc: "СЕКРЕТ! Зіграти рівно опівночі", secret: true }, lucky7: { icon: "🎰", title: "Щаслива сімка", desc: "СЕКРЕТ! Набрати рівно 7 у Спринті", secret: true }, sweet_tooth: { icon: "🍩", title: "Ласунка", desc: "СЕКРЕТ! Ввести солодкий промокод", secret: true }, boss_killer: { icon: "😈", title: "Переможниця", desc: "СЕКРЕТ! Здати Недільний Іспит", secret: true },
    detective: { icon: "🕵️‍♀️", title: "Детектив Оля", desc: "Використати Лупу Шерлока 5 разів", secret: false }, love_historian: { icon: "📜", title: "Колекціонерка щастя", desc: "Накопичити 5 використаних купонів в Архіві", secret: false }, spicy_queen: { icon: "🔥", title: "Гаряча штучка", desc: "Зіграти в ігри з пікантними фразами 10 разів", secret: false }, yura_boy: { icon: "🙋‍♂️", title: "На зв'язку з коханим", desc: "СЕКРЕТ! Спитати підказку в Юри в Сейфі 3 рази", secret: true }, cat_lover: { icon: "🐱❤️", title: "Загладила до дірок", desc: "СЕКРЕТ! Клікнути на котика-помічника 30 разів", secret: true }, goddess_status: { icon: "🪐", title: "Космічна сутність", desc: "СЕКРЕТ! Досягти максимального рівня 'Моя Богиня'", secret: true }
};
// Твій рідний масив (залишається БЕЗ змін)
const levelSystem = [
    { xp: 0, name: "Кошеня", icon: "🐾" }, 
    { xp: 100, name: "Студентка", icon: "📚" },
    { xp: 500, name: "Розумничка", icon: "💡" }, 
    { xp: 1000, name: "Леді", icon: "💃" },
    { xp: 2500, name: "Королева", icon: "👑" }, 
    { xp: 5000, name: "Моя Богиня", icon: "🌌" }
];

// 🔥 НОВИЙ ОБ'ЄКТ (просто вставляєш його нижче)
// Конфігурація КОЛОСАЛЬНИХ нагород та УНІКАЛЬНИХ ефектів для кожного рівня
const levelUpConfig = {
    "Студентка": {
        cat: "🐱🎓",
        desc: "Оля офіційно переходить у статус Студентки! Ти робиш величезні кроки вперед, моя розумничка! Юра пишається твоїми стараннями! 📚",
        rewardText: "🌟 +100 зірочок та 🔍 Лупа Шерлока",
        fx: { confetti: 1, flash: false, shake: false, cosmic: false, soundTier: 1 },
        action: () => {
            addXP(100);
            inventory.push({ id: 'hint', name: 'Лупа Шерлока (50/50) 🔍', price: 50, icon: '🔍', uid: Date.now() });
        }
    },
    "Розумничка": {
        cat: "🐱💡✨",
        desc: "Вау! Справжня Розумничка! Твій мозок лускає слова як горішки. Коханий просто в шоці від твоєї наполегливості! 🥰",
        rewardText: "🌟 +200 зірочок та 🧊 Заморозка стріку",
        fx: { confetti: 2, flash: true, shake: false, cosmic: false, soundTier: 2 },
        action: () => {
            addXP(200);
            inventory.push({ id: 'freeze', name: 'Заморозка стріку ❄️', price: 300, icon: '🧊', uid: Date.now() });
        }
    },
    "Леді": {
        cat: "🐱💃🕶️",
        desc: "Ти витончена, розумна і неймовірно крута Леді! Англійська тепер звучить з твоїх вуст як справжнє королівське мистецтво. 💋",
        rewardText: "🎁 Купон: Безліміт палких цьомчиків на день!",
        fx: { confetti: 3, flash: true, shake: false, cosmic: false, soundTier: 3 },
        action: () => {
            inventory.push({ id: 'unlimit_kisses', name: 'Безліміт палких цьомчиків на день', price: 200, icon: '💋', uid: Date.now() });
        }
    },
    "Королева": {
    cat: "👑🐱👑",
    desc: "Схиліть голови! Перед нами Королева знань та абсолютна володарка серця Юри! Твій прогрес — це чиста велич! 👑✨",
    rewardText: "🛍️ Масаж від Коханого!", // 🔥 Оля бачить у вікні левелапу
    fx: { confetti: 4, flash: true, shake: 'gentle', cosmic: false, soundTier: 4 },
    action: () => {
        // 🔥 В інвентар додається офіційний купон
        inventory.push({ id: 'massage', name: 'Купон: Масаж від Коханого!', price: 500, icon: '💆‍♀️', uid: Date.now() });
    }
},
    "Моя Богиня": {
        cat: "🪐🐱👑🌌",
        desc: "АБСОЛЮТНИЙ КОСМІЧНИЙ ПІЗДЄЦ!!! Оля досягла вершини всесвіту і стала моєю Богинею! Немає слів, ти мій ідеал життя! 🌌❤️‍🔥",
        rewardText: "🏆 +3000 🌟 та 🥇 Золотий Джокер (Будь-яке бажання!)",
        fx: { confetti: 5, flash: true, shake: 'violent', cosmic: true, soundTier: 5 },
        action: () => {
            addXP(3000);
            inventory.push({ id: 'golden_coupon', name: '🥇 Золотий Джокер (Будь-яке бажання!)', price: 0, icon: '🥇', uid: Date.now() });
        }
    }
};
// ==========================================
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

// 🔥 НОВІ ЗМІННІ ДЛЯ ФІКСІВ
let metGameOver = false; 
let wordMastery = JSON.parse(localStorage.getItem('wordMastery')) || {};
// Режими фільтра: 'all' (усі), 'mix' (невивчені + 15% вивчених), 'hard' (тільки 0-4 зірок)
let masteryMode = localStorage.getItem('masteryMode') || 'all'; 

// Функція зміни зірочок (+1 за успіх, -1 за помилку)
function changeWordMastery(w, isCorrect) {
    if (!w || !w.en) return;
    let score = wordMastery[w.en] || 0;
    if (isCorrect) {
        score = Math.min(5, score + 1);
    } else {
        score = Math.max(0, score - 1);
    }
    wordMastery[w.en] = score;
    localStorage.setItem('wordMastery', JSON.stringify(wordMastery));
}

// Головна трьохрежимна фільтрація слів
function filterMasteryWords(words) {
    let unlearned = words.filter(w => (wordMastery[w.en] || 0) < 5);
    let learned = words.filter(w => (wordMastery[w.en] || 0) === 5);
    
    // РЕЖИМ 1: Усі слова підряд
    if (masteryMode === 'all') return words; 
    
    // РЕЖИМ 3: Жорсткий режим (суворо без 5-зіркових слів)
    if (masteryMode === 'hard') {
        if (unlearned.length < 4) return words; // Запобіжник
        return unlearned;
    }
    
    // РЕЖИМ 2: Змішаний (невивчені + 15% шансу на вивчені для повторення)
    let dynamicLearned = learned.filter(() => Math.random() < 0.15);
    let combined = [...unlearned, ...dynamicLearned];
    
    if (combined.length < 10) return words; 
    return combined;
}
function updateMasteryUI() {
    const modes = ['all', 'mix', 'hard'];
    modes.forEach(m => {
        const btn = document.getElementById(`mastery-btn-${m}`);
        if (btn) {
            if (m === masteryMode) {
                btn.style.background = m === 'hard' ? 'var(--wrong)' : 'var(--primary)';
                btn.style.color = '#ffffff';
                btn.style.borderColor = 'transparent';
            } else {
                btn.style.background = 'transparent';
                btn.style.color = 'var(--text-main)';
                btn.style.borderColor = 'rgba(128, 128, 128, 0.3)';
            }
        }
    });
}

function setMasteryMode(mode) {
    masteryMode = mode;
    localStorage.setItem('masteryMode', mode);
    updateMasteryUI();
    
    let msg = "";
    if (mode === 'all') msg = "Режим: Усі слова підряд! 🗂️";
    if (mode === 'mix') msg = "Режим: Невивчені + 15% повторення! 🔄";
    if (mode === 'hard') msg = "ЖОРСТКИЙ РЕЖИМ: Тільки 0-4 зірочок! 🧹🔥";
    showToast(msg);
}
// Дата початку ваших стосунків: 16 травня 2025 року
const LOVE_START_DATE = new Date('2025-05-16');

// Масив таємних віх та автоматичних нагород, які Оля отримуватиме безкоштовно
const loveMilestones = [
    { days: 365, id: 'anniversary_1', title: "👑 Наша перша Річниця (1 рік разом)! 🎉", rewardName: "🕯️ Романтичне побачення-сюрприз від Юри", rewardIcon: "🕯️" },
    { days: 400, id: 'love_400', title: "🐾 400 днів безмежного кохання!", rewardName: "🍿 Купон: Ніч кіно з масажем ніжок від коханого", rewardIcon: "🍿" },
    { days: 500, id: 'love_500', title: "✨ 500 щасливих днів разом!", rewardName: "👑 Золотий купон: Виконання 3 будь-яких примх", rewardIcon: "👑" },
    { days: 730, id: 'anniversary_2', title: "🌹 Друга річниця нашого кохання (2 роки)! ✨", rewardName: "✈️ Купон: Таємна спільна подорож", rewardIcon: "✈️" }
];

// Сховище вже розблокованих дат, щоб купони не дублювалися при кожному заході в профіль
let unlockedMilestones = JSON.parse(localStorage.getItem('unlockedMilestones')) || [];
// 🔥 НОВА ЗМІННА: База даних використаних купонів Олі
let couponArchive = JSON.parse(localStorage.getItem('couponArchive')) || [];
// ==========================================
// 3. ІНІЦІАЛІЗАЦІЯ ТА ЗВУК
// ==========================================
function unlockAudio() { 
    if(audioUnlocked) return; 
    audioUnlocked = true; 
    if (synth && synth.paused) synth.resume(); 
    // Створюємо порожнє висловлювання, щоб "розбудити" синтезатор на iOS
    synth.speak(new SpeechSynthesisUtterance("")); 
}

document.addEventListener("DOMContentLoaded", () => {
    let isDark = localStorage.getItem('theme') === 'dark'; 
    if(isDark) {
        document.getElementById('app-container').classList.add('dark'); 
        document.body.classList.add('dark'); 
        document.getElementById('theme-icon').textContent = '☀️';
    }
    
    const cmBtn = document.getElementById('cm-btn');
    if (cmBtn) {
        cmBtn.onclick = () => { 
            const item = inventory.find(x => x.uid == curCuid);
            if(item) {
                let msg = `Коханий, я активувала купон на "${item.name}"! 👑 Чекаю на виконання!`;
                if(item.id === 'golden_coupon') {
                    msg = `Мій Золотий Джокер! Я перемогла Боса! Моє бажання: [Впиши своє бажання тут] 👑`;
                }
                window.open(`https://t.me/YU_zIK?text=${encodeURIComponent(msg)}`, '_blank');
                
                // 🔥 ДОДАЄМО В АРХІВ ЩАСНЯ ПЕРЕД ВИДАЛЕННЯМ:
                couponArchive.push({
                    id: item.id,
                    name: item.name,
                    icon: item.icon || '🎁',
                    usedAt: new Date().toLocaleDateString('uk-UA')
                });
                localStorage.setItem('couponArchive', JSON.stringify(couponArchive));
            }
            inventory = inventory.filter(x => x.uid != curCuid); 
            localStorage.setItem('userInventory', JSON.stringify(inventory)); 
            closeCoupon(); 
            updateUI(); 
            renderInventory(); 
            
            // 🔥 ОНОВЛЮЄМО ЕКРАН АРХІВУ ОДРАЗУ:
            if (typeof renderArchive === 'function') renderArchive();
            if (couponArchive.length >= 5) checkAchiev('love_historian');
            
            fireParticles(window.innerWidth/2, window.innerHeight/2, true); 
        };
    }
    
    initGamification();

    // 🔥 АВТОЗАПУСК СИСТЕМ ПРИ СТАРТІ:
    if (typeof updateMasteryUI === "function") updateMasteryUI();
    if (typeof updateLoveMilestones === "function") updateLoveMilestones();
    if (typeof renderArchive === "function") renderArchive();
});

function toggleTheme() {
    let isDark = document.getElementById('app-container').classList.toggle('dark'); 
    document.body.classList.toggle('dark', isDark); 
    document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙'; 
    localStorage.setItem('theme', isDark ? 'dark' : 'light'); 
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
// 🔥 СЕКРЕТНА МАЖОРНА МЕЛОДІЯ ДЛЯ ТИТУЛІВ
function playLevelUpMelody() {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // Ноти: До-Мі-Соль-До (чистий мажор)
    notes.forEach((freq, index) => {
        setTimeout(() => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.4);
        }, index * 120); // кожна нота грає з відривом в 120мс
    });
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

function getVocab() { return currentCat === 'all' ? getGameWords() : getGameWords().filter(w => w.c === currentCat); }

function getLevelInfo() { let currentLvl = levelSystem[0]; for(let i=0; i<levelSystem.length; i++) { if(lifetimeXP >= levelSystem[i].xp) currentLvl = levelSystem[i]; } return currentLvl; }
// ==========================================
// 4. ПРОФІЛЬ ТА НАВІГАЦІЯ
// ==========================================
function updateBossUI() {
    const d = new Date();
    const bossBtn = document.getElementById('boss-btn');
    const desc = document.getElementById('boss-desc');
    if(!bossBtn || !desc) return;
    if(true) {
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

function checkAchiev(id){ 
    if(!achievs[id]){ 
        achievs[id]=true; 
        localStorage.setItem('achievs', JSON.stringify(achievs)); 
        showToast("Нове досягнення!"); 
        renderAchievs(); 
    } 
}

function renderAchievs() { 
    const c = document.getElementById('achiev-list'); if(!c) return;
    c.innerHTML = ''; 
    Object.keys(achievList).forEach(k => { 
        const a = achievList[k]; const unl = achievs[k] ? 'unlocked' : ''; 
        if(a.secret && !unl) c.innerHTML += `<div class="achiev-card"><div class="achiev-icon" style="font-size:2.5rem; margin-right:15px;">❓</div><div><div class="achiev-title">Секретне досягнення</div><div class="achiev-desc">Виконай особливі умови, щоб відкрити.</div></div></div>`;
        else c.innerHTML += `<div class="achiev-card ${unl}"><div class="achiev-icon" style="font-size:2.5rem; margin-right:15px;">${a.icon}</div><div><div class="achiev-title">${a.title}</div><div class="achiev-desc">${a.desc}</div></div></div>`; 
    }); 
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
// 🔥 ПЕРЕВІРКА КАРАНТИНУ ПРИ СТАРТІ: Якщо кота не поцілували, він вилітає злісним знову
    if (localStorage.getItem('catQuarantine') === 'true') {
        setTimeout(showQuarantineBubble, 600); // невелика затримка для плавного рендеру
    }
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
    clearInterval(sprintTimerInterval); 
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active')); 
    document.getElementById(id).classList.add('active'); 

   // 🔥 ЖОРСТКИЙ ФІКС: Примусово ховаємо вікно Боса (всі його копії)
    document.querySelectorAll('#boss-result').forEach(el => el.style.display = 'none');
    
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if(id === 'home' || id === 'dictionary' || id === 'shop' || id === 'settings') {
        document.querySelector(`.nav-item[onclick="showSection('${id}')"]`).classList.add('active');
    }

    document.querySelector('.main-content').scrollTop = 0;
    if(id === 'home') document.getElementById('user-stats').style.display = 'flex'; 
    else document.getElementById('user-stats').style.display = 'none'; 

    // 🔥 ДОДАЄМО СЮДИ: Якщо Оля відкриває Профіль, миттєво оновлюємо календар досягнень
    if(id === 'profile') {
        if (typeof updateLoveMilestones === 'function') {
            updateLoveMilestones();
        }
    }
    
   if(id === 'dictionary') { document.getElementById('dict-search').value = ''; renderDictionary(); userStats.dictOpens = (userStats.dictOpens || 0) + 1; saveStats(); if(userStats.dictOpens >= 50) checkAchiev('vocab_king'); } 
   if(id === 'inventory') { 
        renderInventory(); 
        if (typeof renderArchive === 'function') renderArchive(); // 🔥 ОНОВЛЮЄМО АРХІВ
    }
    if(id === 'shop') { renderShop(); } 
    if(id === 'wheel') { checkWheelCooldown(); } 
    if(id === 'profile') { renderProfile(); } // 🔥 ДОДАЛИ ЦЕЙ РЯДОК

    const cat = document.querySelector('.cat-assistant');
    if(cat) {
        if(id === 'home' || id === 'dictionary' || id === 'shop' || id === 'settings' || id === 'profile' || id === 'inventory' || id === 'achievements') {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
            if(document.getElementById('cat-bubble')) document.getElementById('cat-bubble').classList.remove('show');
        }
    }

    if(id === 'settings' && typeof updateSpicyToggle === 'function') updateSpicyToggle();
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
function addXP(amount) { 
    // Запам'ятовуємо старий титул перед нарахуванням очок
    let oldLvl = getLevelInfo();
    
    totalXP += amount; 
    localStorage.setItem('totalXP', totalXP); 
    if(amount > 0) { lifetimeXP += amount; localStorage.setItem('lifetimeXP', lifetimeXP); } 
    if (totalXP >= 2000) checkAchiev('rich'); 
    updateUI(); 

    // Вираховуємо новий титул
    let newLvl = getLevelInfo();
    
    // 🔥 Якщо назва титулу змінилася — це левелап!
    if (oldLvl && newLvl && oldLvl.name !== newLvl.name) {
        setTimeout(() => {
            triggerLevelUpModal(newLvl.name);
        }, 600); // невелика затримка для краси
    }
}
function showToast(m) { const t = document.getElementById('toast'); if(!t)return; document.getElementById('toast-msg').textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

function checkGoals() {
    if (!dailyProg.g1Done && dailyProg[dailyGoals[0].type] >= dailyGoals[0].target) { dailyProg.g1Done = true; addXP(dailyGoals[0].rew); showToast(`Ціль виконана! +${dailyGoals[0].rew}🌟`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    if (!dailyProg.g2Done && dailyProg[dailyGoals[1].type] >= dailyGoals[1].target) { dailyProg.g2Done = true; addXP(dailyGoals[1].rew); showToast(`Ціль виконана! +${dailyGoals[1].rew}🌟`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    if (!dailyProg.g3Done && dailyProg[dailyGoals[2].type] >= dailyGoals[2].target) { dailyProg.g3Done = true; addXP(dailyGoals[2].rew); showToast(`ВАЖКА ЦІЛЬ! +${dailyGoals[2].rew}🌟 Розумничка!`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    saveDaily(); updateUI();
}

function gameFinished(perfect = false, type = 'games', score = 0) {
    if(type === 'boss') return; 
    dailyProg.games++; // 🔥 ФІКС: Рахуємо пікантні ігри для ачівки "Гаряча штучка"
    if (spicyInGames && type !== 'games' && type !== 'boss') {
        userStats.spicyGamesCount = (userStats.spicyGamesCount || 0) + 1;
        saveStats();
        if (userStats.spicyGamesCount >= 10) checkAchiev('spicy_queen');
    }userStats.totalGames = (userStats.totalGames || 0) + 1;
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
    
    let currentItems = [...shopItems]; 
    
    if (bmStatus) {
        currentItems = currentItems.map(i => i.id === 'dinner' ? { ...i, price: Math.floor(i.price * 0.85) } : i);
        if (bmStatus === 'ALL') currentItems.push(...bmItems);
        else { 
            const d = new Date(); 
            const seed = d.getFullYear() + d.getMonth() + d.getDate(); 
            currentItems.push(bmItems[seed % bmItems.length], bmItems[(seed + 1) % bmItems.length]); 
        }
    }

    currentItems.forEach(i => { 
        const isUnique = i.name.includes('VIP') || i.name.includes('Титул');
        const isOwned = inventory.some(item => item.id === i.id);
        
        const isErr = i.price === 'ERROR'; 
        
        const can = !isErr && totalXP >= i.price && (!isUnique || !isOwned);
        
        const originalPrice = shopItems.find(x => x.id === i.id)?.price;
        const discountLabel = (bmStatus && i.id === 'dinner') ? `<s style="color:var(--text-muted);font-size:0.7rem;">${originalPrice}</s>` : '';
        
        let btnText = isErr ? 'Неможливо' : (isOwned && isUnique ? 'Вже є ✅' : (can ? 'Купити' : 'Бракує'));
        let btnStyle = (isOwned && isUnique) ? 'background: #10b981 !important; color: white;' : '';

        c.innerHTML += `
            <div class="shop-item" style="${isOwned && isUnique ? 'opacity: 0.8;' : ''}">
                <div class="shop-info">
                    <div style="font-size:2rem;">${i.icon}</div>
                    <div>
                        <div class="shop-title">${i.name}</div>
                        <div class="shop-price" style="${isErr ? 'color:var(--wrong)' : (bmStatus && i.id==='dinner' ? 'color:#10b981' : '')}">
                            ${isOwned && isUnique ? 'Придбано' : (isErr ? '' : '🌟 ') + (isErr ? '' : i.price)} ${discountLabel}
                        </div>
                    </div>
                </div>
                <button class="buy-btn" ${can ? '' : 'disabled'} onclick="buyItem('${i.id}')" style="${btnStyle}">
                    ${btnText}
                </button>
            </div>`;
    }); 
}
function buyItem(id) { 
    const bmStatus = isBlackMarketOpen(); 
    
    let currentItems = [...shopItems];
    
    if (bmStatus) {
        currentItems = currentItems.map(i => i.id === 'dinner' ? { ...i, price: Math.floor(i.price * 0.85) } : i);
        if (bmStatus === 'ALL') currentItems.push(...bmItems);
        else { const d = new Date(); const seed = d.getFullYear() + d.getMonth() + d.getDate(); currentItems.push(bmItems[seed % bmItems.length], bmItems[(seed + 1) % bmItems.length]); }
    }
    
    const i = currentItems.find(x => x.id === id); 
    if(!i || i.price === 'ERROR') return;

    const isUnique = i.name.includes('VIP') || i.name.includes('Титул');
    if (isUnique && inventory.some(owned => owned.id === i.id)) {
        showToast("Це в тебе вже є! ❤️");
        return;
    }

    if(totalXP >= i.price) { 
        addXP(-i.price); 
        inventory.push({ ...i, uid: Date.now() }); 
        localStorage.setItem('userInventory', JSON.stringify(inventory)); 
        
        userStats.purchases = (userStats.purchases || 0) + 1;
        if(id === 'hug') { userStats.hugPurchases = (userStats.hugPurchases || 0) + 1; if(userStats.hugPurchases >= 3) checkAchiev('hug_addict'); }
        saveStats(); 
        if(userStats.purchases >= 3) checkAchiev('shopaholic');
        
        showToast("Куплено: " + i.name); 
        renderInventory(); 
        renderShop(); 
        updateUI();

        if (i.name && i.name.includes('Пікантні фрази')) {
            for(let k=0; k<50; k++) {
                setTimeout(() => {
                    let p = document.createElement('div');
                    p.style.position = 'fixed';
                    p.style.left = Math.random() * window.innerWidth + 'px';
                    p.style.top = '-20px';
                    p.style.width = (Math.random() * 8 + 5) + 'px';
                    p.style.height = (Math.random() * 15 + 10) + 'px';
                    p.style.backgroundColor = Math.random() > 0.5 ? '#ff0000' : '#8b0000'; 
                    p.style.zIndex = '9999';
                    p.style.pointerEvents = 'none';
                    p.style.transition = 'top 2s linear, opacity 1.5s linear, transform 2s ease-in-out';
                    p.style.transform = `rotate(${Math.random() * 360}deg)`;
                    document.body.appendChild(p);
                    setTimeout(() => {
                        p.style.top = window.innerHeight + 'px';
                        p.style.opacity = '0';
                        p.style.transform = `rotate(${Math.random() * 720}deg)`;
                    }, 50);
                    setTimeout(() => p.remove(), 2000);
                }, k * 40);
            }
            setTimeout(() => {
                alert("🔥 Увага! Доступ до пікантного словника відкрито! Чекаю тебе ввечері... 😏");
            }, 600);
        }
    } 
}
function renderInventory() { 
    const c = document.getElementById('inv-list'); if(!c) return;
    c.innerHTML = ''; 
    if(!inventory.length) { c.innerHTML = "<div style='text-align:center; color:var(--text-muted); padding:20px;'>Тут поки порожньо. Купуй купони в магазині!</div>"; return; } 
    
    inventory.forEach(i => { 
        const isGolden = i.id === 'golden_coupon' || (i.name && i.name.toLowerCase().includes('золотий'));
        
        // 🔥 ВИЗНАЧАЄМО ВІЧНІ ПРЕДМЕТИ (VIP та Титули)
        const isUnique = i.name && (i.name.includes('VIP') || i.name.includes('Титул'));
        
        const goldenClass = isGolden ? 'golden' : '';
        let btnStyle = isGolden ? 'background: #fbbf24; color: #78350f; font-weight: 800;' : '';
        let btnText = isGolden ? '✨ ВИКОРИСТАТИ ДЖОКЕР' : 'Використати купон';

        // 🔥 ЯКЩО ЦЕ ВІЧНИЙ ПРЕДМЕТ — міняємо вигляд кнопки і блокуємо її
        if (isUnique) {
            btnStyle = 'background: #10b981; color: white; opacity: 0.9; cursor: default;';
            btnText = 'Активно ✅';
        }

        c.innerHTML += `
            <div class="inv-item ${goldenClass}">
                <div style="font-size:3rem; ${isGolden ? 'filter: drop-shadow(0 0 5px #fbbf24);' : ''}">${i.icon}</div>
                <div class="shop-title">${i.name}</div>
                <button class="inv-btn" style="${btnStyle}" ${isUnique ? 'disabled' : `onclick="openCoupon('${i.uid}')"`}>
                    ${btnText}
                </button>
            </div>`; 
    }); 
}

// ======================================================================
// 🔥 ВСТАВЛЯЄМО СЮДИ: НОВА ФУНКЦІЯ РЕНДЕРУ АРХІВУ ВИКОРИСТАНИХ КУПОНІВ
// ======================================================================
function renderArchive() {
    const container = document.getElementById('archive-list');
    if (!container) return;
    container.innerHTML = '';
    
    if (couponArchive.length === 0) {
        container.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px; font-weight:700; font-size:0.85rem; width:100%;">Тут поки порожньо. Час активувати якийсь купон! 🥰</div>`;
        return;
    }
    
    // Нові використані купони показуємо першими (зверху)
    couponArchive.slice().reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'shop-card'; 
        card.style.opacity = '0.6';
        card.style.border = '1px dashed var(--text-muted)';
        card.style.background = 'var(--bg)';
        card.style.filter = 'grayscale(0.3)';
        
        card.innerHTML = `
            <div class="shop-icon" style="background: rgba(0,0,0,0.02); filter: none;">${item.icon}</div>
            <div class="shop-info">
                <div class="shop-name" style="text-decoration: line-through; color: var(--text-muted); font-size: 0.9rem;">${item.name}</div>
                <div style="color: var(--primary); font-size: 0.75rem; font-weight: 700; margin-top: 4px; display: flex; align-items: center; gap: 4px;">
                    <span>🗓️ Використано:</span> <span>${item.usedAt}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Твоя оригінальна функція відкриття купона продовжується далі без змін:
function openCoupon(u) {
    const i = inventory.find(x => x.uid == u); 
    if(!i) return; 
    curCuid = u; 

    const isGolden = i.id === 'golden_coupon' || (i.name && i.name.toLowerCase().includes('золотий'));
    
    if (isGolden) {
        const wish = prompt("🌟 ЦЕ ТВІЙ ЗОЛОТИЙ ДЖОКЕР!\n\nВпиши сюди своє будь-яке бажання (наприклад: вечеря, фільм чи щось особливе):");
        if (wish && wish.trim() !== "") {
            const msg = `Коханий, я активувала ЗОЛОТИЙ ДЖОКЕР! 👑\n\nМоє бажання: "${wish}"`;
            window.open(`https://t.me/YU_zIK?text=${encodeURIComponent(msg)}`, '_blank');
            
            inventory = inventory.filter(x => x.uid != u);
            localStorage.setItem('userInventory', JSON.stringify(inventory));
            renderInventory();
            updateUI();
        }
    } else {
        document.getElementById('cm-icon').textContent = i.icon; 
        document.getElementById('cm-title').textContent = i.name; 
        document.getElementById('coupon-modal').style.display = 'flex'; 
    }
}

function closeCoupon() {
    const m = document.getElementById('coupon-modal');
    if(m) m.style.display = 'none';
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
    else if(code === 'MYQUEEN') { 
    // 🔥 Нараховуємо купон у базу
    inventory.push({ id:'p2', name:'Купон: Масаж від Коханого!', price:0, icon:'💆‍♀️', uid:Date.now() }); 
    addXP(50); 
    ok=true; 
    // 🔥 Текст у віконці (смс) — чистий та емоційний:
    alert("Масаж від Коханого та зірочки твої, моя Королево! 👑"); 
}
    else if(code === 'BESTGIRL') { addXP(300); ok=true; alert("+300 🌟"); }
    else if(code === 'KISSME') { inventory.push({ id:'p4', name:'100 поцілунків', price:0, icon:'😘', uid:Date.now() }); ok=true; alert("Купон додано! 🎁"); }
    else if(code === 'LOVEYOUMORE' || code === 'LOVEYOUSTRONGER') { addXP(300); ok=true; alert("А я тебе ще дужче! +300 🌟"); }
    else if(code === 'CAR') { inventory.push({ id:'p_car', name:'Романтична поїздка за місто', price:0, icon:'🚐', uid:Date.now() }); ok=true; checkAchiev('navigator'); alert("Головний штурман знайдений! 🚐"); }
    else if(code === 'CHOCOLATE') { inventory.push({ id:'p_choc', name:'Кіндер або Шоколадка', price:0, icon:'🍫', uid:Date.now() }); ok=true; checkAchiev('sweet_tooth'); alert("Солодке життя! 🍫"); }
    else if(code === 'COFFEE') { 
        inventory.push({ id:'coffee_bed', name:'Кава/Чай у ліжко ☕', price:0, icon:'☕', uid:Date.now() }); 
        ok=true; 
        alert("Ням! Кава вже закипає, біжу нести її моїй королеві в ліжечко! ☕🛌"); 
    }
    else if(code === 'KITTEN') { 
        inventory.push({ id:'hug', name:'Безлімітні обійми на день', price:0, icon:'🫂', uid:Date.now() }); 
        addXP(100); 
        ok=true; 
        alert("Котикові обійми активовано! Муррр... +100 🌟 та обіймашки твої! 🐾🫂"); 
    }
    else if(code === 'DINNER') { 
        inventory.push({ id:'dinner', name:'Купон: Масаж від Коханого!', price:0, icon:'💆‍♀️', uid:Date.now() }); 
        ok=true; 
        alert("Опа, королівський приз! Готуй спинку, Масаж від Коханого активовано за кодом! 💆‍♀️❤️"); 
    }
    else if(code === 'SPICY2026') { 
        addXP(500); 
        ok=true; 
        alert("Оу, хтось налаштований дуже гаряче... 😏🔥 Тримай +500 🌟 для Чорного Ринку! Чекаю ввечері... 🌶️"); 
    }
    else if(code === 'YURASLOVE') { 
        addXP(1000); 
        ok=true; 
        alert("Моє кохання до тебе безмежне! Тримай космічний запас зірочок: +1000 🌟! 🌌❤️"); 
    }
    
    if(ok) {
        usedCodes.push(code); localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
        localStorage.setItem('userInventory', JSON.stringify(inventory));
        if(usedCodes.length >= 3) checkAchiev('sherlock');
        updateUI(); renderInventory(); fireParticles(window.innerWidth/2, window.innerHeight/2, true);
    } else { 
        alert("Невірний код! Спробуй ще раз."); 
        userStats.failedCodes = (userStats.failedCodes || 0) + 1; saveStats();
        if(userStats.failedCodes >= 3) checkAchiev('hacker');
        
        // 🔥 АНТИ-ХАКЕР: Кожні 3 помилкові спроби (3, 6, 9...) котик йде в жорсткий ігнор
        if (userStats.failedCodes % 3 === 0) {
            localStorage.setItem('catQuarantine', 'true');
            showQuarantineBubble();
        }
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

    // 🔥 ОНОВЛЕНА ПІДКРУТКА: Шанс "Пусто" встановлено чітко на 20%
    if (r < 0.05) { prizeIndex = 0; }                                    // 👑 ДЖЕКПОТ (Масаж від Коханого!) — 5%
    else if (r < 0.20) { prizeIndex = 8; }                               // 🍬 Смаколики у купони — 15%
    else if (r < 0.30) { prizeIndex = 9; }                               // 🎁 Подарунок-сюрприз — 10%
    else if (r < 0.40) { prizeIndex = 7; }                               // 🚀 КЛАС! +100 зірочок — 10%
    else if (r < 0.60) { prizeIndex = 6; }                               // ⚖️ +50 зірочок (Повернула своє) — 20%
    else if (r < 0.80) { prizeIndex = [1, 3, 5][Math.floor(Math.random()*3)]; } // 🔋 +20 зірочок (Невеликий мінус) — 20%
    else { prizeIndex = [2, 4][Math.floor(Math.random()*2)]; }           // 😢 Пусто (0 зірочок) — рівно 20%!

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
function setCat(c, el) { 
    currentCat = c; 
    document.querySelectorAll('.cat-chip').forEach(chip => chip.classList.remove('active')); 
    el.classList.add('active'); 
    if(document.getElementById('dictionary').classList.contains('active')) renderDictionary(); 
}

let dictMode = 'en-uk'; 
function setDictMode(m) { dictMode = m; renderDictionary(); }

function recordCardFlip() { 
    userStats.flippedCards = (userStats.flippedCards || 0) + 1; 
    saveStats(); 
    if(userStats.flippedCards >= 50) checkAchiev('bookworm'); 
}

function trackMistake(w) { 
    if (!mistakeWords.find(x => x.en === w.en)) { 
        mistakeWords.push(w); 
        localStorage.setItem('userMistakes', JSON.stringify(mistakeWords)); 
        updateUI(); 
    } 
}

function removeMistake(w) { 
    mistakeWords = mistakeWords.filter(x => x.en !== w.en); 
    localStorage.setItem('userMistakes', JSON.stringify(mistakeWords)); 
    updateUI(); 
}

function renderDictionary() { 
    const bEn = document.getElementById('btn-dict-en'); if(bEn) bEn.className = dictMode === 'en-uk' ? 'btn btn-primary' : 'btn'; 
    const bUk = document.getElementById('btn-dict-uk'); if(bUk) bUk.className = dictMode === 'uk-en' ? 'btn btn-primary' : 'btn'; 
    const grid = document.getElementById('dict-grid'); if(!grid) return; grid.innerHTML = ''; 
    const searchInput = document.getElementById('dict-search'); const q = searchInput ? searchInput.value.toLowerCase().trim() : ''; 
    
    if(q === 'love' || q === 'кохаю' || q === 'люблю') { 
        const egg = document.getElementById('easter-egg');
        if(egg) egg.style.display='flex'; 
        if(typeof checkAchiev === 'function') checkAchiev('love'); 
        if(searchInput) searchInput.value=''; 
        return; 
    } 
    
    let list = baseVocabulary.filter(w => w.en.toLowerCase().includes(q) || w.uk.toLowerCase().includes(q)); 

    let hasSpicyCard = false;
    try { 
        if (typeof inventory !== 'undefined' && inventory !== null) {
            hasSpicyCard = inventory.some(item => item && item.name && item.name.includes('Пікантні фрази'));
        }
    } catch(e) { }

    const spicyBtn = document.getElementById('btn-spicy-cat');
    if (spicyBtn) {
        spicyBtn.style.display = hasSpicyCard ? 'inline-block' : 'none';
    }

    list = list.filter(w => {
        if (w.c === 'spicy' && !hasSpicyCard) return false;
        if (currentCat !== 'all' && w.c !== currentCat) return false;
        return true;
    });

list.sort((a,b) => a.en.localeCompare(b.en)).forEach(w => { 
        const c = document.createElement('div'); c.className = 'dict-card'; 
        const f = document.createElement('div'); f.className = 'dict-face'; 
        const b = document.createElement('div'); b.className = 'dict-face dict-back'; 
        const emj = w.em || (w.c === 'spicy' ? '🌶️' : '✨');

        // 🔥 Вираховуємо прогрес для конкретного слова
        let score = (typeof wordMastery !== 'undefined' ? wordMastery[w.en] : 0) || 0;
        let masteryHtml = score === 5 
            ? `<span style="color:var(--correct); font-size:0.75rem; font-weight:800; display:block; margin-bottom:4px;">✅ Вивчено</span>` 
            : `<span style="color:var(--warning); font-size:0.75rem; display:block; margin-bottom:4px;">${'⭐'.repeat(score) || '🆕 Нове'}</span>`;

        // Модифікуємо функцію збірки англійської сторони, додаючи прапорець показу зірочок
        const buildEn = (el, showMastery = false) => { 
            let masteryPrefix = showMastery ? masteryHtml : '';
            el.innerHTML = `${masteryPrefix}<div style="font-size:1.8rem; margin-bottom:2px;">${emj}</div><div>${w.en}</div><div style="margin-top:auto; display:flex; gap:10px; width:100%;"><button class="dict-audio-btn" onclick="speak('${w.en}', 'us', event)">🔊 US</button><button class="dict-audio-btn" onclick="speak('${w.en}', 'uk', event)">🔊 UK</button></div>`; 
        }; 

        // Залежно від режиму, зірочки (masteryHtml) завжди йдуть на ПЕРЕДНЮ сторону (f)
        if(dictMode === 'en-uk') { 
            buildEn(f, true); // показуємо зірочки на англійській сорочці
            b.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${emj}</div><div>${w.uk}</div>`; 
        } else { 
            f.innerHTML = `${masteryHtml}<div style="font-size:1.8rem; margin-bottom:2px;">${emj}</div><div>${w.uk}</div>`; // показуємо зірочки на українській сорочці
            buildEn(b, false); 
        } 

        c.innerHTML = `<div class="dict-card-inner"></div>`; 
        c.firstChild.appendChild(f); 
        c.firstChild.appendChild(b); 
        
        c.onclick = () => { 
            c.classList.toggle('flipped'); 
            dailyProg.flash++; 
            checkGoals(); 
            recordCardFlip(); // Твоя оригінальна функція статистики на місці!
        }; 
        grid.appendChild(c); 
    }); 
}
// ==========================================
// 7. МІНІ-ІГРИ
// ==========================================
let emoQ=[], eIdx=0, eScore=0, eAns=false;
function startEmojiQuiz() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} emoQ = shuffleArray(filterMasteryWords(getVocab())).slice(0, 15); eIdx=0; eScore=0; showSection('emoji-quiz'); document.getElementById('emoji-result').style.display='none'; document.getElementById('emoji-active').style.display='flex'; loadEmo(); }
function loadEmo() { 
    // 🔍 1. Показуємо кнопку підказки (якщо лупа є в інвентарі)
    toggleHintButton(true); 

    eAns = false; 
    document.getElementById('btn-next-emoji').style.display = 'none'; 
    let w = emoQ[eIdx]; 
    document.getElementById('emoji-counter').textContent = `${eIdx + 1}/${emoQ.length}`; 
    document.getElementById('emoji-score').textContent = eScore; 
    document.getElementById('emoji-question').innerHTML = `
        <div style="font-size: 4.5rem; line-height: 1;">${w.em}</div>
        <div style="font-size: 1.2rem; color: var(--text-muted); font-weight: 700;">${w.uk}</div>`; 

    const opts = shuffleArray([w, ...shuffleArray(getGameWords().filter(x => x.en !== w.en)).slice(0, 3)]); 
    const g = document.getElementById('emoji-options'); 
    g.innerHTML = ''; 

    opts.forEach(o => { 
        const b = document.createElement('button'); 
        b.className = 'option-btn'; 
        b.textContent = o.en; 
        
        b.onclick = (e) => { 
            if (eAns) return; 
            
            // 🔍 2. Ховаємо підказку після кліку
            toggleHintButton(false); 
            
            eAns = true; 
            const c = o.en === w.en; 
            fireParticles(e.clientX, e.clientY, c); 

            document.querySelectorAll('#emoji-options .option-btn').forEach(btn => { 
                btn.disabled = true; 
                if (btn.textContent === w.en) btn.classList.add('correct'); 
                else if (btn === b && !c) btn.classList.add('wrong'); 
            }); 

            if (c) { 
                eScore++; 
                addXP(1); 
                
                // 🔥 ДОДАЄМО СЮДИ: +1 зірочка до вивчення слова
                changeWordMastery(w, true); 
            } else {
                trackMistake(w);
                
                // 🔥 ДОДАЄМО СЮДИ: -1 зірочка за помилку
                changeWordMastery(w, false); 
            }

            document.getElementById('emoji-score').textContent = eScore; 
            document.getElementById('btn-next-emoji').style.display = 'block'; 
        }; 
        g.appendChild(b); 
    }); 
}

function nextEmoji() { 
    eIdx++; 
    if(eIdx < emoQ.length) {
        loadEmo(); 
    } else { 
        document.getElementById('emoji-active').style.display = 'none'; 
        document.getElementById('emoji-result').style.display = 'flex'; 
        document.getElementById('emoji-final').textContent = eScore + "/" + emoQ.length; 
        gameFinished(eScore === emoQ.length, 'emoji', eScore); 
    } 
}
let constQ=[], cIdx=0, cScore=0, cAns=[], constLock=false, constErrors=0;
function startConstructor() { constQ = shuffleArray(filterMasteryWords(sentences)).slice(0, 5); cIdx=0; cScore=0; constErrors=0; showSection('constructor'); document.getElementById('const-result').style.display='none'; document.getElementById('const-active').style.display='flex'; loadConst(); }
function loadConst() { constLock=false; document.getElementById('btn-next-const').style.display='none'; document.getElementById('const-counter').textContent=`${cIdx+1}/5`; document.getElementById('const-score').textContent=cScore; let s = constQ[cIdx]; document.getElementById('const-question').textContent = s.uk; const t = document.getElementById('const-target'); t.innerHTML=''; t.className='const-target'; cAns=[]; const origWords = s.en.split(' '); const words = shuffleArray([...origWords]); const wCont = document.getElementById('const-words'); wCont.innerHTML=''; words.forEach((w, i) => { const b = document.createElement('div'); b.className='const-word'; b.textContent=w; b.onclick = () => { if(constLock) return; b.classList.add('hidden'); cAns.push({w, b}); renderConstTarget(origWords.join(' ')); }; wCont.appendChild(b); }); }
function renderConstTarget(fullT) { const t = document.getElementById('const-target'); t.innerHTML=''; cAns.forEach((item, i) => { const b = document.createElement('div'); b.className='const-word'; b.textContent=item.w; b.onclick = () => { if(constLock) return; item.b.classList.remove('hidden'); cAns.splice(i, 1); renderConstTarget(fullT); }; t.appendChild(b); }); if(cAns.length === fullT.split(' ').length && !constLock) { constLock = true; const r = t.getBoundingClientRect(); if(cAns.map(x=>x.w).join(' ') === fullT) { fireParticles(r.left+r.width/2, r.top+r.height/2, true); t.classList.add('correct'); cScore++; addXP(3); setTimeout(()=>{document.getElementById('btn-next-const').style.display='block'; constLock=false;}, 250); } else { fireParticles(r.left+r.width/2, r.top+r.height/2, false); constErrors++; t.style.animation="shake 0.3s"; setTimeout(()=>{ t.style.animation=""; cAns.forEach(x=>x.b.classList.remove('hidden')); cAns=[]; constLock=false; renderConstTarget(fullT); }, 400); } } }
function nextConst() { cIdx++; if(cIdx<5) loadConst(); else { document.getElementById('const-active').style.display='none'; document.getElementById('const-result').style.display='flex'; document.getElementById('const-final').textContent=cScore+"/5"; gameFinished(cScore===5, 'constructor', 1); if(constErrors === 0) checkAchiev('crafter'); } }

let tfQ=[], tfIdx=0, tfScore=0, tfTrue=false, tfLock=false, tfErrors=0;
function startTrueFalse() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} tfQ=shuffleArray(voc).slice(0,15); tfIdx=0; tfScore=0; tfErrors=0; showSection('truefalse'); document.getElementById('tf-result').style.display='none'; document.getElementById('tf-active').style.display='flex'; loadTfSwipe(); }
function loadTfSwipe() { tfLock=false; document.getElementById('tf-counter').textContent=`${tfIdx+1}/15`; document.getElementById('tf-score').textContent=tfScore; let w=tfQ[tfIdx]; tfTrue=Math.random()>0.5; let dUk=w.uk; if(!tfTrue){ let o=getGameWords().filter(x=>x.en!==w.en); dUk=o[Math.floor(Math.random()*o.length)].uk; } const card = document.getElementById('tf-card'); card.innerHTML=`<div style="font-size:4rem;margin-bottom:10px;">${w.em}</div><span id="tf-en">${w.en}</span><span class="tf-equals">=</span><span id="tf-uk">${dUk}</span>`; card.style.transform="translate(0px, 0px) rotate(0deg)"; card.style.opacity="1"; card.style.background="var(--card-bg)"; setupSwipe(card); }
function setupSwipe(card) { let stX=0, stY=0, currX=0; card.ontouchstart = e => { stX=e.touches[0].clientX; stY=e.touches[0].clientY; card.style.transition='none'; }; card.ontouchmove = e => { if(tfLock) return; const dx=e.touches[0].clientX-stX; const dy=e.touches[0].clientY-stY; if(Math.abs(dx)>Math.abs(dy)) { e.preventDefault(); currX=dx; card.style.transform=`translate(${dx}px, ${dy}px) rotate(${dx/15}deg)`; } }; card.ontouchend = e => { if(tfLock) return; card.style.transition='transform 0.2s, opacity 0.2s'; if(currX>100) { checkTfSwipe(true); card.style.transform=`translate(1000px, 0) rotate(30deg)`; card.style.opacity="0"; } else if(currX<-100) { checkTfSwipe(false); card.style.transform=`translate(-1000px, 0) rotate(-30deg)`; card.style.opacity="0"; } else { card.style.transform="translate(0,0) rotate(0)"; currX=0; } }; }
function checkTfSwipe(guess) { if(tfLock) return; tfLock=true; const c = guess===tfTrue; const card=document.getElementById('tf-card'); const r=card.getBoundingClientRect(); card.style.background = c ? "var(--correct)" : "var(--wrong)"; fireParticles(r.left+r.width/2, r.top+r.height/2, c); if(c) { tfScore++; addXP(1); } else { tfErrors++; trackMistake(tfQ[tfIdx]); } setTimeout(()=>{ tfIdx++; if(tfIdx<15) loadTfSwipe(); else{ document.getElementById('tf-active').style.display='none'; document.getElementById('tf-result').style.display='flex'; document.getElementById('tf-final-score').textContent=tfScore+"/15"; gameFinished(tfScore===15, 'swipe', 1); if(tfScore===15 && tfErrors===0) checkAchiev('sniper'); } }, 250); }

let quizQ=[], qIdx=0, qScore=0, qType='uk-en', isMist=false;
function startMistakesMode() { if(mistakeWords.length===0){ showToast("Помилок немає! ❤️"); return; } qType='uk-en'; isMist=true; quizQ=shuffleArray(mistakeWords); qIdx=0; qScore=0; showSection('quiz'); document.getElementById('quiz-result').style.display='none'; document.getElementById('quiz-active').style.display='flex'; loadQuiz(); }
function startQuiz(t) { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} qType=t; isMist=false; quizQ = shuffleArray(filterMasteryWords(voc)).slice(0,20); qIdx=0; qScore=0; showSection('quiz'); document.getElementById('quiz-result').style.display='none'; document.getElementById('quiz-active').style.display='flex'; loadQuiz(); }
function restartQuiz() { if(isMist) startMistakesMode(); else startQuiz(qType); }
function loadQuiz() {
    // 🔍 1. Вмикаємо кнопку підказки, якщо вона є в інвентарі
   toggleHintButton(true); // 🔥 ДОДАТИ ЦЕ (Показуємо лупу на початку питання)

    document.getElementById('btn-next-quiz').style.display = 'none';
    let w = quizQ[qIdx];
    document.getElementById('quiz-counter').textContent = `${qIdx + 1}/${quizQ.length}`;
    document.getElementById('quiz-score').textContent = qScore;
    document.getElementById('quiz-question').innerHTML = `<div style="font-size:3rem;margin-bottom:10px;">${w.em}</div>` + (qType === 'uk-en' ? w.uk : w.en);
    
    const opts = shuffleArray([w, ...shuffleArray(getGameWords().filter(x => x.en !== w.en)).slice(0, 3)]);
    const g = document.getElementById('quiz-options');
    g.innerHTML = '';

    opts.forEach(o => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.textContent = qType === 'uk-en' ? o.en : o.uk;
        
      b.onclick = (e) => {
            // 🔍 1. Ховаємо лупу, бо Оля вже натиснула на відповідь
            toggleHintButton(false); 

            const c = o.en === w.en;
            fireParticles(e.clientX, e.clientY, c);
            
            if (c) {
                b.classList.add('correct');
                qScore++;
                addXP(1);
                if (isMist) removeMistake(w);
                
                // 🔥 ДОДАЄМО СЮДИ: +1 зірочка до вивчення слова за правильну відповідь
                changeWordMastery(w, true); 
                
            } else {
                b.classList.add('wrong');
                trackMistake(w);
                
                // 🔥 ДОДАЄМО СЮДИ: -1 зірочка (згорає прогрес) за помилку
                changeWordMastery(w, false); 
                
                // Підсвічуємо правильну відповідь, щоб Оля запам'ятала
                document.querySelectorAll('.option-btn').forEach(btn => {
                    if (btn.textContent === (qType === 'uk-en' ? w.en : w.uk)) btn.classList.add('correct');
                });
            }
            
            // Блокуємо всі кнопки після вибору відповіді
            document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
            document.getElementById('btn-next-quiz').style.display = 'block';
        };
        g.appendChild(b);
    });
}
function nextQuizQuestion() { qIdx++; if(qIdx<quizQ.length) loadQuiz(); else{ document.getElementById('quiz-active').style.display='none'; document.getElementById('quiz-result').style.display='flex'; document.getElementById('final-score').textContent=qScore+"/"+quizQ.length; gameFinished(qScore===quizQ.length && !isMist, 'quiz_score', qScore); } }
// 1. Функція для кнопки "Продовжити" у Квізі
function restartQuiz() {
    if (isMist) {
        startMistakesMode(); // Якщо вчили помилки, запускаємо їх знову
    } else {
        startQuiz(qType); // Якщо звичайний квіз - нові 20 слів
    }
}

// 2. Логіка Лупи Шерлока (видаляє 2 неправильні відповіді)
function useSherlockHint() {
    // Перевіряємо, чи є лупа в інвентарі
    const hintIdx = inventory.findIndex(i => i.id === 'hint');
    if (hintIdx === -1) {
        alert("У тебе немає Лупи Шерлока! Купи її в магазині 🛍️");
        return;
    }

    // Шукаємо активні кнопки варіантів у поточному режимі
    const activeSection = document.querySelector('.section.active');
    const options = Array.from(activeSection.querySelectorAll('.option-btn:not(.correct):not(.wrong)'));
    
    if (options.length < 2) return;

    // Визначаємо правильне слово залежно від гри
    let correctEn = "";
    if (activeSection.id === 'quiz') correctEn = quizQ[qIdx].en;
    else if (activeSection.id === 'emoji-quiz') correctEn = emoQ[eIdx].en;
    else if (activeSection.id === 'spy') correctEn = spyQ[spyI].odd.en;
    else if (activeSection.id === 'meteor') correctEn = metWordObj.en;

    // Прибираємо 2 неправильні варіанти
    let removed = 0;
    for (let opt of options) {
        // Якщо текст на кнопці не збігається з правильною відповіддю (враховуючи переклад)
        const isCorrectBtn = (opt.textContent === correctEn || 
                             baseVocabulary.find(v => v.en === correctEn)?.uk === opt.textContent);
        
        if (!isCorrectBtn && removed < 2) {
            opt.style.opacity = "0.2";
            opt.style.pointerEvents = "none";
            removed++;
        }
    }

   // Витрачаємо лупу
    inventory.splice(hintIdx, 1);
    localStorage.setItem('userInventory', JSON.stringify(inventory));
    
    // 🔥 ДОДАЄМО СЮДИ: Рахуємо використання лупи для ачівки "Детектив Оля"
    userStats.sherlockUsed = (userStats.sherlockUsed || 0) + 1;
    saveStats();
    if (userStats.sherlockUsed >= 5) checkAchiev('detective');
    
    renderInventory();
    updateUI();
    showToast("🔍 Шерлок допоміг!");
}

// 3. Функція показу кнопки підказки (викликай її в loadQuiz, loadEmo тощо)
function toggleHintButton(show) {
    const activeId = document.querySelector('.section.active').id;
    const btn = document.getElementById(`hint-btn-${activeId}`);
    if (btn) {
        // Показуємо кнопку, якщо гра це дозволяє і в Олі є хоча б одна лупа
        const hasHint = inventory.some(i => i.id === 'hint');
        btn.style.display = (show && hasHint) ? 'flex' : 'none';
    }
}
let mFound=0, mErr=0, mSel=null, mLock=false;
function startMatchGame() { const voc = getVocab(); if(voc.length<6){alert("Замало слів!"); return;} showSection('match'); mFound=0; mErr=0; document.getElementById('match-result').style.display='none'; document.getElementById('match-columns').style.display='flex'; updM(); let words=shuffleArray(voc).slice(0,6); const cUk=document.getElementById('match-col-uk'), cEn=document.getElementById('match-col-en'); cUk.innerHTML=''; cEn.innerHTML=''; shuffleArray(words.map((w,i)=>({t:w.uk,id:i,l:'uk',w}))).forEach(c=>createMB(c,cUk)); shuffleArray(words.map((w,i)=>({t:w.en,id:i,l:'en',w}))).forEach(c=>createMB(c,cEn)); }
function createMB(c, p) { const b=document.createElement('button'); b.className='match-btn'; b.textContent=c.t; b.onclick=(e)=>{ if(mLock||b.classList.contains('correct'))return; if(b===mSel){b.classList.remove('selected'); mSel=null; return;} if(!mSel){b.classList.add('selected'); mSel=b; b.dataset.id=c.id; b.dataset.lang=c.l; b.word=c.w;} else if(mSel.dataset.lang===c.l){mSel.classList.remove('selected'); b.classList.add('selected'); mSel=b; b.dataset.id=c.id; b.dataset.lang=c.l; b.word=c.w;} else{ mLock=true; b.classList.add('selected'); const cor=mSel.dataset.id==c.id; fireParticles(e.clientX, e.clientY, cor); if(cor){b.classList.add('correct'); mSel.classList.add('correct'); mFound++; addXP(1); updM(); mSel=null; mLock=false; if(mFound===6)setTimeout(()=>{document.getElementById('match-columns').style.display='none'; document.getElementById('match-result').style.display='flex'; document.getElementById('match-final-score').textContent=mErr+" помилок"; gameFinished(mErr===0, 'pairs', mFound);},400);} else{b.classList.add('wrong'); mSel.classList.add('wrong'); mErr++; trackMistake(c.w); updM(); let s1=b,s2=mSel; mSel=null; setTimeout(()=>{s1.classList.remove('wrong','selected'); s2.classList.remove('wrong','selected'); mLock=false;},300);} } }; p.appendChild(b); }
function updM() { document.getElementById('match-counter').textContent=`Пари: ${mFound}/6`; }

let sprTime=60, sprScore=0, sprQ=[], sprLock=false;
function startSprint() { const voc = filterMasteryWords(getVocab()); if(voc.length<4){alert("Замало слів!"); return;} showSection('sprint'); document.getElementById('sprint-result').style.display='none'; document.getElementById('sprint-active').style.display='flex'; sprTime=60; sprScore=0; sprQ=shuffleArray(voc); updSpr(); clearInterval(sprintTimerInterval); sprintTimerInterval=setInterval(()=>{sprTime--; updSpr(); if(sprTime<=0) endSpr();},1000); loadSpr(); }
function updSpr() { document.getElementById('sprint-time-text').textContent=sprTime; document.getElementById('sprint-score-text').textContent=sprScore; let b=document.getElementById('sprint-bar'); b.style.width=Math.max(0,(sprTime/60)*100)+"%"; if(sprTime<15) b.classList.add('low'); else b.classList.remove('low'); }
function loadSpr() { sprLock = false; let w=sprQ[Math.floor(Math.random()*sprQ.length)]; document.getElementById('sprint-question').innerHTML=`<div style="font-size:3rem;">${w.em}</div>`+w.uk; const o=shuffleArray([w,...shuffleArray(getGameWords().filter(x=>x.en!==w.en)).slice(0,3)]); const c=document.getElementById('sprint-options'); c.innerHTML=''; o.forEach(opt=>{ const b=document.createElement('button'); b.className='option-btn'; b.textContent=opt.en; b.onclick=(e)=>{ if(sprLock) return; sprLock = true; const cor=opt.en===w.en; fireParticles(e.clientX, e.clientY, cor); if(cor){sprScore++; addXP(1); sprTime=Math.min(sprTime+1,60);}else{sprTime=Math.max(sprTime-2,0); trackMistake(w);} updSpr(); if(sprTime>0) setTimeout(loadSpr, 150); else endSpr(); }; c.appendChild(b); }); }
function endSpr() { 
    clearInterval(sprintTimerInterval); 
    document.getElementById('sprint-active').style.display = 'none'; 
    document.getElementById('sprint-result').style.display = 'flex'; 
    document.getElementById('sprint-final-score').textContent = sprScore; 
    
    if(sprScore > bestSprint) {
        bestSprint = sprScore; 
        localStorage.setItem('sprintRecord', bestSprint); 
        document.getElementById('sprint-badge').textContent = bestSprint; 
        checkAchiev('speed');
        
        // 🔥 АВТО-РЕАКЦІЯ: Коронація котика за новий рекорд Олі!
        setTimeout(() => {
            if (typeof triggerCatReaction === 'function') {
                triggerCatReaction('sprint_record', 'crown');
            }
        }, 400);
    } 
    gameFinished(false, 'sprint', sprScore); 
}
let sQ=[], sIdx=0, sSco=0, sTar="", sCur=[], sLet=[], spellLock=false;
function startSpelling() { const voc = getVocab().filter(w => /^[a-zA-Z]+$/.test(w.en)); if(voc.length === 0){ alert("Немає слів!"); return;} showSection('spelling'); document.getElementById('spell-result').style.display='none'; document.getElementById('spell-active').style.display='flex'; sQ=shuffleArray(voc).slice(0, 10); sIdx=0; sSco=0; loadS(); }
function loadS() { spellLock = false; document.getElementById('spell-counter').textContent=`${sIdx+1}/${sQ.length}`; document.getElementById('spell-score').textContent=sSco; let w=sQ[sIdx]; sTar=w.en.toUpperCase(); document.getElementById('spell-question').textContent=w.em+" "+w.uk; sCur=Array(sTar.length).fill(null); sLet=shuffleArray(sTar.split('').map((l,i)=>({l,id:i}))); rendS(); }
function rendS() { const c1=document.getElementById('spell-slots'); c1.innerHTML=''; sCur.forEach((l,i)=>{ let s=document.createElement('div'); s.className=`spell-slot ${l?'filled':''}`; s.textContent=l?l.l:""; s.onclick=()=>{if(l && !spellLock){sCur[i]=null; rendS();}}; c1.appendChild(s);}); const c2=document.getElementById('spell-letters'); c2.innerHTML=''; sLet.forEach(i=>{ let b=document.createElement('button'); b.className='letter-btn'; b.textContent=i.l; if(sCur.find(x=>x&&x.id===i.id)) b.classList.add('hidden'); else b.onclick=()=>{ if(spellLock) return; let ei=sCur.findIndex(x=>x===null); if(ei!==-1){sCur[ei]=i; rendS(); if(!sCur.includes(null)) chkS();} }; c2.appendChild(b);}); }
function chkS() { spellLock = true; let fw=sCur.map(x=>x.l).join(''); const sc=document.getElementById('spell-slots'); const r=sc.getBoundingClientRect(); if(fw===sTar){ fireParticles(r.left+r.width/2, r.top+r.height/2, true); sSco++; addXP(2); setTimeout(()=>{sIdx++; if(sIdx<sQ.length)loadS(); else{document.getElementById('spell-active').style.display='none'; document.getElementById('spell-result').style.display='flex'; document.getElementById('spell-final-score').textContent=sSco+"/"+sQ.length; gameFinished(sSco===sQ.length, 'spell', sSco);}}, 400); } else{ fireParticles(r.left+r.width/2, r.top+r.height/2, false); trackMistake(sQ[sIdx]); sc.style.animation="shake 0.3s"; setTimeout(()=>{sc.style.animation=""; sCur.fill(null); spellLock = false; rendS();}, 400); } }

let hmQ=[], hmI=0, hmLiv=5, hmT="", hmG=new Set(), hmLock=false;
function startHangman() { 
    // 🔥 ФІКС: Беремо чисті слова без пробілів і проганяємо через розумний фільтр
    const voc = filterMasteryWords(getVocab().filter(w => /^[a-zA-Z]+$/.test(w.en))); 
    
    if(voc.length === 0){ alert("Немає слів!"); return; } 
    
    showSection('hangman'); 
    document.getElementById('hm-result').style.display = 'none'; 
    document.getElementById('hm-active').style.display = 'flex'; 
    hmQ = shuffleArray(voc); 
    hmI = 0; 
    loadHm(); 
}
function loadHm() { hmLock = false; let w=hmQ[hmI]; hmT=w.en.toUpperCase(); hmLiv=5; hmG.clear(); document.getElementById('hm-counter').textContent=`Слово ${hmI+1}`; document.getElementById('hm-question').textContent=w.em+" "+w.uk; updHm(); rndHmS(); rndHmK(); }
function updHm() { let h=""; for(let i=0;i<5;i++) h+=i<hmLiv?"❤️":"🖤"; document.getElementById('hm-lives-text').textContent=h; }
function rndHmS() { const c=document.getElementById('hm-slots'); c.innerHTML=''; let w=true; for(let ch of hmT){ let s=document.createElement('div'); s.className='hm-slot'; if(hmG.has(ch)) s.textContent=ch; else{s.textContent=""; w=false;} c.appendChild(s); } if(w && !hmLock){ hmLock = true; addXP(3); endHm(true);} }
function rndHmK() { const c=document.getElementById('hm-keyboard'); c.innerHTML=''; alphabet.forEach(l=>{ let b=document.createElement('button'); b.className='hm-key'; b.textContent=l; b.onclick=(e)=>{ if(hmLiv<=0||b.classList.contains('disabled')||hmLock)return; b.classList.add('disabled'); hmG.add(l); if(hmT.includes(l)){ b.classList.add('correct'); fireParticles(e.clientX, e.clientY, true); rndHmS(); } else{ fireParticles(e.clientX, e.clientY, false); hmLiv--; updHm(); if(hmLiv===0){ hmLock=true; trackMistake(hmQ[hmI]); endHm(false);} } }; c.appendChild(b); }); }
function endHm(w) { if(w && hmLiv===1) checkAchiev('survivor'); setTimeout(()=>{ document.getElementById('hm-active').style.display='none'; document.getElementById('hm-result').style.display='flex'; document.getElementById('hm-result-title').textContent=w?"Врятовано! 💖":"Розбито... 💔"; document.getElementById('hm-final-word').textContent=hmT; hmI++; gameFinished(w && hmLiv===5, 'hangman', 1);}, 500); }

let lstQ=[], lstI=0, lstS=0, cLw="", lstLock=false;
function startListening() { const voc = getVocab(); if(voc.length<4){alert("Замало слів!"); return;} lstQ=shuffleArray(voc).slice(0,15); lstI=0; lstS=0; showSection('listening'); document.getElementById('listen-result').style.display='none'; document.getElementById('listen-active').style.display='flex'; loadLst(); }
function playWordAudio(a, e) { speak(cLw, a, e); }
function loadLst() { lstLock = false; document.getElementById('btn-next-listen').style.display='none'; let w=lstQ[lstI]; cLw=w.en; document.getElementById('listen-counter').textContent=`${lstI+1}/15`; document.getElementById('listen-score').textContent=lstS; const o=shuffleArray([w, ...shuffleArray(getGameWords().filter(x=>x.en!==w.en)).slice(0,3)]); const g=document.getElementById('listen-options'); g.innerHTML=''; o.forEach(opt=>{ const b=document.createElement('button'); b.className='option-btn'; b.textContent=opt.uk; b.onclick=(e)=>{ if(lstLock) return; lstLock = true; const c=opt.en===w.en; fireParticles(e.clientX, e.clientY, c); document.querySelectorAll('#listen-options .option-btn').forEach(x=>{ x.disabled=true; if(x.textContent===w.uk) x.classList.add('correct'); else if(x===b&&!c) x.classList.add('wrong'); }); if(c){lstS++; addXP(1);} else trackMistake(w); document.getElementById('btn-next-listen').style.display='block'; }; g.appendChild(b); }); setTimeout(()=>speak(cLw, 'us', null), 300); }
function nextListenQuestion() { lstI++; if(lstI<15) loadLst(); else{ document.getElementById('listen-active').style.display='none'; document.getElementById('listen-result').style.display='flex'; document.getElementById('listen-final-score').textContent=lstS+"/15"; gameFinished(lstS===15, 'listening', 1); } }

let fcI=0, fcM='en-uk', fcArr=[];
function startFlashcards(m) { fcM=m; fcI=0; fcArr=shuffleArray(getVocab()); showSection('flashcards'); updFc(); }
function updFc() { const c=document.getElementById('flashcard'); c.classList.remove('flipped'); setTimeout(()=>{ let w=fcArr[fcI]; document.getElementById('fc-front').innerHTML=`<div style="font-size:3rem; margin-bottom:10px;">${w.em}</div>`+(fcM==='en-uk'?w.en:w.uk); document.getElementById('fc-back').innerHTML=`<div style="font-size:3rem; margin-bottom:10px;">${w.em}</div>`+(fcM==='en-uk'?w.uk:w.en); document.getElementById('fc-counter').textContent=`${fcI+1}/${fcArr.length}`; },150); }
function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); dailyProg.flash++; checkGoals(); recordCardFlip(); }
function nextCard() { fcI=(fcI+1)%fcArr.length; updFc(); }
function prevCard() { fcI=(fcI-1+fcArr.length)%fcArr.length; updFc(); }
// ==========================================
// ЕПІЧНИЙ БОС (3 СТАДІЇ + ТАЙМЕР)
// ==========================================
let bQ = [], bIdx = 0, olyaHp = 3, bossHp = 1000, bossTimer = 6, bossInterval = null, bLock = false, currentPhase = 1;

function startBoss() { 
    // const d = new Date(); if(d.getDay() !== 0) { alert("Іспит доступний лише в неділю!"); return; } // Зніми коментар перед релізом!
    
    const voc = getVocab(); if(voc.length < 50){ alert("Треба мінімум 50 слів у словнику!"); return; } 
    
    if(typeof dailyProg.bossAttempts === 'undefined') dailyProg.bossAttempts = 0;
    let attempts = dailyProg.bossAttempts;
    let cost = attempts < 2 ? 0 : (attempts === 2 ? 150 : (attempts === 3 ? 250 : 300));
    
    if(cost > 0) {
        if(totalXP < cost) { alert(`Бракує зірочок! Наступна спроба коштує ${cost} 🌟`); return; }
        if(!confirm(`Витратити ${cost} 🌟 на додаткову спробу?`)) return;
        addXP(-cost); 
    }

    dailyProg.bossAttempts = attempts + 1; saveDaily(); updateBossUI();
    
    const hasShield = inventory.some(i => i.id === 'shield');
    olyaHp = hasShield ? 4 : 3; bossHp = 1000; currentPhase = 1; bIdx = 0;
    bQ = shuffleArray(voc).slice(0, 50); 
    
    if(hasShield) {
        inventory = inventory.filter(i => i.id !== 'shield');
        localStorage.setItem('userInventory', JSON.stringify(inventory));
        showToast("🛡️ Щит активовано! (+1 ❤️)");
    }

  showSection('boss'); document.getElementById('boss-result').style.display = 'none'; document.getElementById('boss-active').style.display = 'flex';
    updateBossHpBar(); updateOlyaHp(); loadBoss(); 
}

function updateBossHpBar() {
    const bar = document.getElementById('boss-hp-bar'); const text = document.getElementById('boss-hp-text');
    if(bar) bar.style.width = Math.max(0, (bossHp / 1000) * 100) + '%';
    if(text) text.textContent = `${Math.max(0, bossHp)} / 1000 HP`;
}

function updateOlyaHp() {
    let hearts = ""; for(let i = 0; i < olyaHp; i++) hearts += "❤️";
    document.getElementById('olya-hearts').textContent = hearts || "💔";
}

function takeDamage() {
    olyaHp--; updateOlyaHp(); const bossArea = document.getElementById('boss');
    bossArea.style.animation = "shake 0.4s"; bossArea.style.backgroundColor = "rgba(239, 68, 68, 0.1)"; playSFX(false);
    setTimeout(() => { bossArea.style.animation = ""; bossArea.style.backgroundColor = ""; }, 400);
    if(olyaHp <= 0) { clearInterval(bossInterval); setTimeout(() => finishBoss(false), 500); return true; }
    return false;
}

function dealDamage() { bossHp -= 20; updateBossHpBar(); }

function startBossTimer() {
    clearInterval(bossInterval);
    bossTimer = currentPhase === 2 ? 12 : 6; 
    document.getElementById('boss-timer-text').textContent = bossTimer;
    document.getElementById('boss-timer-text').style.color = "var(--primary)";
    
    bossInterval = setInterval(() => {
        bossTimer--; document.getElementById('boss-timer-text').textContent = bossTimer;
        if(bossTimer <= 2) document.getElementById('boss-timer-text').style.color = "#ef4444";
        
        if(bossTimer <= 0) {
            clearInterval(bossInterval); if(bLock) return; bLock = true;
            if(!takeDamage()) { bIdx++; if(bIdx < 50) setTimeout(loadBoss, 500); else finishBoss(true); }
        }
    }, 1000);
}

function loadBoss() { 
    bLock = false; let w = bQ[bIdx]; 
    const qBox = document.getElementById('boss-question-box'); const optsGrid = document.getElementById('boss-options'); const typingArea = document.getElementById('boss-typing-area'); const phaseAlert = document.getElementById('boss-phase-alert');
    
    if(bIdx < 20) { currentPhase = 1; phaseAlert.textContent = "ФАЗА 1: РОЗМИНКА"; phaseAlert.style.color = "var(--primary)"; } 
    else if (bIdx < 35) { currentPhase = 2; phaseAlert.textContent = "ФАЗА 2: ЛЮТЬ БОСА"; phaseAlert.style.color = "#f59e0b"; } 
    else { currentPhase = 3; phaseAlert.textContent = "ФАЗА 3: СЛІПОТА"; phaseAlert.style.color = "#ef4444"; }

    if (currentPhase === 1) {
        qBox.innerHTML = `<div style="font-size:3.5rem;margin-bottom:10px;">${w.em}</div>${w.uk}`; 
        optsGrid.style.display = 'grid'; typingArea.style.display = 'none';
        const opts = shuffleArray([w, ...shuffleArray(getGameWords().filter(x=>x.en!==w.en)).slice(0,3)]); 
        optsGrid.innerHTML = ''; 
        opts.forEach(o => { 
            const b = document.createElement('button'); b.className = 'option-btn'; b.textContent = o.en; 
            b.onclick = (e) => { 
                if(bLock) return; bLock = true; clearInterval(bossInterval); const isCorrect = o.en === w.en; fireParticles(e.clientX, e.clientY, isCorrect); 
                if(isCorrect) { b.classList.add('correct'); dealDamage(); setTimeout(()=>{ bIdx++; if(bIdx < 50) loadBoss(); else finishBoss(true); }, 400); } 
                else { b.classList.add('wrong'); if(!takeDamage()) setTimeout(()=>{ bIdx++; if(bIdx < 50) loadBoss(); else finishBoss(true); }, 500); } 
            }; optsGrid.appendChild(b); 
        }); 
    } 
    else if (currentPhase === 2) {
        qBox.innerHTML = `<div style="font-size:3.5rem;margin-bottom:10px;">${w.em}</div>${w.uk}`; 
        optsGrid.style.display = 'none'; typingArea.style.display = 'flex';
        const input = document.getElementById('boss-input'); input.value = ''; setTimeout(() => input.focus(), 100); 
    } 
    else if (currentPhase === 3) {
        qBox.innerHTML = `<div style="font-size:5rem; margin-bottom:10px; animation: pulse 1s infinite;">🔊</div><span style="font-size:1rem; color:var(--text-muted);">Слухай уважно!</span>`; 
        optsGrid.style.display = 'grid'; typingArea.style.display = 'none'; speak(w.en, 'us', null); 
        const opts = shuffleArray([w, ...shuffleArray(getGameWords().filter(x=>x.en!==w.en)).slice(0,3)]); 
        optsGrid.innerHTML = ''; 
        opts.forEach(o => { 
            const b = document.createElement('button'); b.className = 'option-btn'; b.textContent = o.uk; 
            b.onclick = (e) => { 
                if(bLock) return; bLock = true; clearInterval(bossInterval); const isCorrect = o.en === w.en; fireParticles(e.clientX, e.clientY, isCorrect); 
                if(isCorrect) { b.classList.add('correct'); dealDamage(); setTimeout(()=>{ bIdx++; if(bIdx < 50) loadBoss(); else finishBoss(true); }, 400); } 
                else { b.classList.add('wrong'); if(!takeDamage()) setTimeout(()=>{ bIdx++; if(bIdx < 50) loadBoss(); else finishBoss(true); }, 500); } 
            }; optsGrid.appendChild(b); 
        });
    }
    
    startBossTimer();
}

function checkBossTyping() {
    if(bLock || currentPhase !== 2) return; bLock = true; clearInterval(bossInterval);
    const w = bQ[bIdx]; const input = document.getElementById('boss-input'); const guess = input.value.trim().toLowerCase();
    const btn = document.querySelector('#boss-typing-area button'); const r = btn.getBoundingClientRect();
    
    if(guess === w.en.toLowerCase()) {
        fireParticles(r.left + r.width/2, r.top, true); input.style.borderColor = "var(--correct)"; dealDamage();
        setTimeout(()=>{ input.style.borderColor = "var(--primary)"; bIdx++; if(bIdx < 50) loadBoss(); else finishBoss(true); }, 500);
    } else {
        fireParticles(r.left + r.width/2, r.top, false); input.style.borderColor = "var(--wrong)";
        if(!takeDamage()) setTimeout(()=>{ input.style.borderColor = "var(--primary)"; bIdx++; if(bIdx < 50) loadBoss(); else finishBoss(true); }, 600);
    }
}

function finishBoss(win) { 
    clearInterval(bossInterval); 
    document.getElementById('boss-active').style.display = 'none'; 
    document.getElementById('boss-result').style.display = 'flex'; 
    
    document.getElementById('boss-final').textContent = win ? "👑" : "🪦"; 
    document.getElementById('boss-result-title').textContent = win ? "Боса знищено! 🎉" : "Ти загинула... 💔"; 
    
    if(win) { 
        if(!dailyProg.bossWon) {
            document.getElementById('boss-result-desc').textContent = "Оля - справжня войовниця! Бос переможений. Ось твої +500 🌟 та Золотий купон! Юра тобою пишається! 🥰"; 
            addXP(500); 
            inventory.push({ id:'golden_coupon', name:'🥇 Золотий Джокер (Будь-яке бажання!)', price:0, icon:'🥇', uid:Date.now() });
            localStorage.setItem('userInventory', JSON.stringify(inventory)); 
            checkAchiev('boss_killer'); 
            dailyProg.bossWon = true; 
            saveDaily();
        } else {
            document.getElementById('boss-result-desc').textContent = "Боса розбито вдруге! Нагороду вже отримано, але твоя англійська стала ще сильнішою!";
        }
    } else { 
        document.getElementById('boss-result-desc').textContent = `Ти пройшла ${bIdx} з 50 питань. Сердечка скінчилися, або час вийшов. Бос сміється з тебе. Повертайся за реваншем!`; 
    } 
    
    renderInventory(); 
    updateUI(); 

    // 🔥 АВТО-РЕАКЦІЯ: Котик реагує на результат битви з Босом!
    setTimeout(() => {
        if (typeof triggerCatReaction === 'function') {
            triggerCatReaction(win ? 'boss_win' : 'boss_lose', win ? 'happy' : 'sad');
        }
    }, 400);
}
// --- 1. СЛОВО-ШПИГУН (ODD ONE OUT) ---
let spyQ = [], spyI = 0, spyS = 0, spyLock = false;

function startSpy() {
    showSection('spy'); 
    document.getElementById('spy-result').style.display = 'none'; 
    document.getElementById('spy-active').style.display = 'flex';
    
    spyQ = []; spyI = 0; spyS = 0;
    
    // 🔥 ФІКС: Проганяємо слова через розумний фільтр (Усі / Повтор 15% / Жорсткий)
    const allWords = filterMasteryWords(getGameWords());
    const categories = [...new Set(allWords.map(w => w.c))];

    for(let i = 0; i < 10; i++) {
        // Шукаємо категорії, де є хоча б 3 слова
        let validCats = categories.filter(c => allWords.filter(w => w.c === c).length >= 3);
        if(validCats.length < 2) break;

        let mainCat = validCats[Math.floor(Math.random() * validCats.length)];
        let mainWords = shuffleArray(allWords.filter(w => w.c === mainCat)).slice(0, 3);
        
        // Вибираємо "шпигуна" з будь-якої ІНШОЇ категорії
        let oddCat = categories.filter(c => c !== mainCat)[Math.floor(Math.random() * (categories.length - 1))];
        let oddWord = shuffleArray(allWords.filter(w => w.c === oddCat))[0];

        if(mainWords.length === 3 && oddWord) {
            spyQ.push({ words: shuffleArray([...mainWords, oddWord]), odd: oddWord });
        }
    }
    loadSpy();
}

function loadSpy() {
    spyLock = false; 
    document.getElementById('btn-next-spy').style.display = 'none';
    
    // 🔍 Вмикаємо кнопку підказки Лупи Шерлока, якщо вона є в інвентарі
    toggleHintButton(true); 
    
    document.getElementById('spy-counter').textContent = `${spyI + 1}/${spyQ.length}`;
    document.getElementById('spy-score').textContent = spyS;
    
    const g = document.getElementById('spy-options'); 
    g.innerHTML = '';
    
    spyQ[spyI].words.forEach(w => {
        const b = document.createElement('button'); 
        b.className = 'option-btn'; 
        b.style.fontSize = '1.3rem';
        b.style.padding = '15px 10px';
        b.style.wordBreak = 'break-word';
        b.style.display = 'flex';
        b.style.flexDirection = 'column';
        b.style.alignItems = 'center';
        b.style.gap = '5px';
        b.style.lineHeight = '1.1';
        
        b.innerHTML = `
            <span class="spy-en-word" style="font-weight: 800;">${w.en}</span>
            <span class="spy-uk-hint" style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600; opacity: 0; height: 0; overflow: hidden; transition: 0.3s;">${w.uk}</span>
        `;
        
        b.onclick = (e) => {
            if(spyLock) return; 
            
            // 🔍 Ховаємо підказку Шерлока після вибору відповіді
            toggleHintButton(false); 
            
            spyLock = true;
            const isCorrect = w.en === spyQ[spyI].odd.en;
            fireParticles(e.clientX, e.clientY, isCorrect);
            
            document.querySelectorAll('#spy-options .option-btn').forEach(btn => {
                btn.disabled = true;
                const hint = btn.querySelector('.spy-uk-hint');
                if(hint) { 
                    hint.style.opacity = '1'; 
                    hint.style.height = 'auto';
                    hint.style.marginTop = '5px';
                }
                if(btn.querySelector('.spy-en-word').textContent === spyQ[spyI].odd.en) {
                    btn.classList.add('correct');
                }
                else if(btn === b && !isCorrect) {
                    btn.classList.add('wrong');
                }
            });
            
            if(isCorrect) { 
                spyS++; 
                addXP(2); 
                // 🔥 ФІКС: +1 зірочка до прогресу слова-шпигуна за успіх!
                changeWordMastery(spyQ[spyI].odd, true);
            } else {
                trackMistake(spyQ[spyI].odd);
                // 🔥 ФІКС: -1 зірочка прогресу слова-шпигуна за помилку!
                changeWordMastery(spyQ[spyI].odd, false);
            }
            document.getElementById('btn-next-spy').style.display = 'block';
        };
        g.appendChild(b);
    });
}

function nextSpy() {
    spyI++; 
    if(spyI < spyQ.length) {
        loadSpy();
    } else { 
        document.getElementById('spy-active').style.display = 'none'; 
        document.getElementById('spy-result').style.display = 'flex'; 
        document.getElementById('spy-final-score').textContent = `${spyS}/${spyQ.length}`; 
        gameFinished(spyS === spyQ.length, 'spy', spyS); 
    }
}
// --- 2. СЕЙФ (WORDLE) ---
let wdlWord = "", wdlAttempts = 0, wdlGrid = [], wdlObj = null, wdlLen = 5;

// 🔥 КЕРУВАННЯ ВИДИМІСТЮ КНОПКИ ПІДКАЗКИ ЮРИ
function updateWordleHintButtonVisibility() {
    const btn = document.getElementById('wordle-yura-hint');
    if (!btn) return;
    
    // Показуємо кнопку Олі ТІЛЬКИ на 4, 5 та 6 спробах (wdlAttempts >= 3)
    if (wdlAttempts >= 3 && wdlAttempts < 6) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

// 🔥 ФУНКЦІЯ: ПІДКАЗКА ВІД КОХАНОГО ХЛОПЦЯ
function askYuraHint() {
    if (wdlAttempts >= 6) return;
    
    // 1. Шукаємо першу порожню клітинку в поточному рядку Олі
    let col = wdlGrid[wdlAttempts].indexOf("");
    
    // Запобіжник: якщо Оля вже забила весь рядок буквами, просимо її спочатку щось стерти
    if (col === -1) {
        alert("Мур... Олюнь, у тебе цей рядок уже заповнений літерами! Видали якусь букву (⌫), щоб я міг вставити підказку! 😉");
        return;
    }
    
    // 2. Перевіряємо баланс зірочок
    if (totalXP < 20) {
        alert("Бракує зірочок! Підказка Юри коштує 20 🌟");
        return;
    }
    
    // 3. Списуємо оплату
    addXP(-20);
    
    // 🔥 ДОДАЄМО СЮДИ: Рахуємо підказки Юри
    userStats.yuraHintsUsed = (userStats.yuraHintsUsed || 0) + 1;
    saveStats();
    if (userStats.yuraHintsUsed >= 3) checkAchiev('yura_boy');
    
    const correctLetter = wdlWord[col];
    
    // Вставляємо її в буфер рядка та миттєво перемальовуємо клітинку на екрані
    wdlGrid[wdlAttempts][col] = correctLetter;
    updateWordleCurrentRow();
    
    // 4. Твоє фірмове романтичне повідомлення
    alert(`Юра підказує: На позиції №${col + 1} стоїть буква "${correctLetter}". Ця буква така ж гарна, як і ти! 😍 Поцілунок уже летить! 😘`);
    
    // Бонус: змушуємо котика на екрані теж зреагувати та підтримати Олю!
    if (typeof triggerCatReaction === 'function') {
        triggerCatReaction('poke', 'happy', `Юра допоміг! Буква "${correctLetter}" стала на своє місце! Дотисни цей сейф! 🔐🐾`);
    }
}

// 🔥 КЕРУВАННЯ ВИДИМІСТЮ КНОПКИ ПІДКАЗКИ ЮРИ
function updateWordleHintButtonVisibility() {
    const btn = document.getElementById('wordle-yura-hint');
    if (!btn) return;
    
    // Показуємо кнопку Олі ТІЛЬКИ на 4, 5 та 6 спробах (тобто коли в неї лишилося мало шансів)
    if (wdlAttempts >= 3 && wdlAttempts < 6) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

// 🔥 ФУНКЦІЯ: РОМАНТИЧНА ПІДКАЗКА ВІД КОХАНОГО ХЛОПЦЯ
function askYuraHint() {
    if (wdlAttempts >= 6) return;
    
    // 1. Шукаємо першу порожню клітинку в поточному рядку Олі
    let col = wdlGrid[wdlAttempts].indexOf("");
    
    // Запобіжник: якщо Оля вже заповнила весь рядок літерами, просимо спочатку щось стерти
    if (col === -1) {
        alert("Мур... Олюнь, у тебе цей рядок уже заповнений літерами! Видали якусь букву (⌫), щоб я міг вставити підказку! 😉");
        return;
    }
    
    // 2. Перевіряємо баланс зірочок Олі
    if (totalXP < 20) {
        alert("Бракує зірочок! Підказка Юри коштує 20 🌟");
        return;
    }
    
    // 3. Списуємо 20 зірочок за допомогу
    addXP(-20);
    
    // Беремо залізобетонно правильну літеру для цієї позиції з загаданого слова
    const correctLetter = wdlWord[col];
    
    // Вставляємо її в масив спроби та оновлюємо відображення на екрані
    wdlGrid[wdlAttempts][col] = correctLetter;
    updateWordleCurrentRow();
    
    // 4. Твоє фірмове повідомлення, яке підніме Олі настрій
    alert(`Юра підказує: На позиції №${col + 1} стоїть буква "${correctLetter}". Ця буква така ж гарна, як і ти! 😍 Поцілунок уже летить! 😘`);
    
    // Котик-помічник на екрані теж радіє успіху
    if (typeof triggerCatReaction === 'function') {
        triggerCatReaction('poke', 'happy', `Юра допоміг! Буква "${correctLetter}" стала на своє місце! Дотисни цей сейф! 🔐🐾`);
    }
}

function startWordle() {
    const validWords = getVocab().filter(w => w.en.length >= 3 && /^[a-zA-Z]+$/.test(w.en));
    if(validWords.length === 0) { alert("Немає підходящих слів у словнику!"); return; }
    
    showSection('wordle'); 
    document.getElementById('wordle-result').style.display='none'; 
    document.getElementById('wordle-active').style.display='flex';
    
    wdlObj = validWords[Math.floor(Math.random() * validWords.length)];
    wdlWord = wdlObj.en.toUpperCase(); 
    wdlLen = wdlWord.length; 
    wdlAttempts = 0; 
    
    wdlGrid = Array.from({length: 6}, () => Array(wdlLen).fill(""));
    
    initWordleGrid(); 
    drawWordleKeyboard(); 
    document.getElementById('wordle-attempts').textContent = `Спроби: 0/6`;
    
    // 🔥 ФІКС: Автоматично ховаємо кнопку підказки на початку нової гри
    updateWordleHintButtonVisibility();
}
function initWordleGrid() {
    const g = document.getElementById('wordle-grid'); 
    g.innerHTML = '';
    g.style.maxWidth = wdlLen > 6 ? '380px' : '280px';
    
    for(let r=0; r<6; r++) {
        let row = document.createElement('div'); 
        row.className = 'wordle-row';
        row.style.gridTemplateColumns = `repeat(${wdlLen}, 1fr)`; 
        
        for(let c=0; c<wdlLen; c++) {
            let cell = document.createElement('div'); 
            cell.className = 'wordle-cell';
            cell.id = `wcell-${r}-${c}`; 
            
            if (wdlLen >= 9) cell.style.fontSize = '1rem';
            else if (wdlLen >= 7) cell.style.fontSize = '1.3rem';
            else cell.style.fontSize = '2rem';
            
            row.appendChild(cell);
        }
        g.appendChild(row);
    }
}

function updateWordleCurrentRow() {
    if(wdlAttempts >= 6) return;
    for(let c=0; c<wdlLen; c++) {
        let cell = document.getElementById(`wcell-${wdlAttempts}-${c}`);
        cell.textContent = wdlGrid[wdlAttempts][c];
        if(wdlGrid[wdlAttempts][c]) cell.classList.add('filled');
        else cell.classList.remove('filled');
    }
}

function drawWordleKeyboard() {
    const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    const g = document.getElementById('wordle-keyboard'); g.innerHTML = '';
    keys.forEach(rowStr => {
        let row = document.createElement('div'); 
        row.style.display = 'flex'; row.style.justifyContent = 'center'; row.style.gap = '4px'; row.style.width = '100%';
        rowStr.split('').forEach(l => {
            let b = document.createElement('button'); b.className = 'hm-key'; b.textContent = l; b.id = `wkey-${l}`;
            b.onclick = () => handleWordleKey(l); row.appendChild(b);
        });
        if(rowStr === "ZXCVBNM") {
            let ent = document.createElement('button'); ent.className = 'hm-key'; ent.textContent = "ВВІД"; ent.style.width = '60px'; ent.onclick = checkWordleRow;
            let del = document.createElement('button'); del.className = 'hm-key'; del.textContent = "⌫"; del.style.width = '45px'; del.onclick = () => handleWordleKey('DEL');
            row.prepend(ent); row.appendChild(del);
        }
        g.appendChild(row);
    });
}

function handleWordleKey(k) {
    if(wdlAttempts >= 6) return;
    let col = wdlGrid[wdlAttempts].findIndex(x => x === "");
    
    if(k === 'DEL') {
        let delCol = col === -1 ? wdlLen - 1 : col - 1;
        if(delCol >= 0) { wdlGrid[wdlAttempts][delCol] = ""; updateWordleCurrentRow(); }
    } else if(col !== -1) {
        wdlGrid[wdlAttempts][col] = k; updateWordleCurrentRow();
    }
}

function checkWordleRow() {
    if(wdlAttempts >= 6 || wdlGrid[wdlAttempts].includes("")) return;
    let guess = wdlGrid[wdlAttempts].join(''); 
    let target = wdlWord.split(''); 
    let gArr = guess.split('');
    let status = Array(wdlLen).fill('gray');
    
    for(let i=0; i<wdlLen; i++) { 
        if(gArr[i] === target[i]) { status[i] = 'green'; target[i] = null; } 
    }
    for(let i=0; i<wdlLen; i++) {
        if(status[i] !== 'green' && target.includes(gArr[i])) { 
            status[i] = 'yellow'; 
            target[target.indexOf(gArr[i])] = null; 
        }
    }
    
    for(let i=0; i<wdlLen; i++) {
        setTimeout(() => {
            let cell = document.getElementById(`wcell-${wdlAttempts}-${i}`); 
            cell.classList.add(status[i]); 
            cell.style.color = 'white'; 
            cell.style.borderColor = 'transparent';
            
            let key = document.getElementById(`wkey-${gArr[i]}`);
            if(!key.classList.contains('correct')) {
                if(status[i] === 'green') { key.style.background = 'var(--correct)'; key.style.color = 'white'; key.classList.add('correct'); }
                else if(status[i] === 'yellow' && key.style.background !== 'var(--correct)') { key.style.background = 'var(--warning)'; key.style.color = 'white'; }
                else if(key.style.background === '') { key.style.background = '#475569'; key.style.color = 'white'; }
            }
        }, i * 300);
    }
    
    setTimeout(() => {
        wdlAttempts++; 
        document.getElementById('wordle-attempts').textContent = `Спроби: ${wdlAttempts}/6`;
        
        // 🔥 ФІКС: Перевіряємо, чи наступила 4-та спроба, щоб увімкнути кнопку Юри прямо під час гри!
        if (typeof updateWordleHintButtonVisibility === 'function') updateWordleHintButtonVisibility();
        
        if(guess === wdlWord) {
            document.getElementById('wordle-active').style.display='none'; document.getElementById('wordle-result').style.display='flex';
            document.getElementById('wordle-result-title').textContent = "Зламано! 🔓"; document.getElementById('wordle-final-word').textContent = wdlWord;
            document.getElementById('wordle-uk-translation').textContent = wdlObj.uk;
            addXP(10); fireParticles(window.innerWidth/2, window.innerHeight/2, true); gameFinished(true, 'wordle', 1);
        } else if(wdlAttempts >= 6) {
            document.getElementById('wordle-active').style.display='none'; document.getElementById('wordle-result').style.display='flex';
            document.getElementById('wordle-result-title').textContent = "Сейф заблоковано 🔒"; document.getElementById('wordle-final-word').textContent = wdlWord;
            document.getElementById('wordle-uk-translation').textContent = wdlObj.uk; trackMistake(wdlObj); gameFinished(false, 'wordle', 0);
        }
    }, wdlLen * 300 + 300);
}
// --- ☄️ МЕТЕОРИТНИЙ ДОЩ (З ФІКСОМ БАГУ) ---// --- ☄️ МЕТЕОРИТНИЙ ДОЩ (ФІКС БАГУ) ---
let metTimer, metPos = -50, metSpeed = 1, metScore = 0, metWordObj = null;

function startMeteor() {
    metGameOver = false; // Скидаємо стан програшу
    showSection('meteor');
    document.getElementById('meteor-result').style.display='none';
    document.getElementById('meteor-active').style.display='flex';
    metScore = 0; metSpeed = 1;
    document.getElementById('meteor-cat').classList.remove('hit');
    spawnMeteor();
}

function spawnMeteor() {
    metGameOver = false;
    metPos = -50; metSpeed = 1.5 + (metScore * 0.2); 
    toggleHintButton(true); // Показуємо лупу
    
    document.getElementById('meteor-speed').textContent = metSpeed.toFixed(1) + "x";
    document.getElementById('meteor-score').textContent = `Рахунок: ${metScore}`;
    
    const words = filterMasteryWords(getGameWords());
    metWordObj = words[Math.floor(Math.random() * words.length)];
    const el = document.getElementById('meteor-word');
    el.textContent = metWordObj.en; el.style.top = metPos + 'px';
    
    const opts = shuffleArray([metWordObj, ...shuffleArray(words.filter(x => x.en !== metWordObj.en)).slice(0,2)]);
    const g = document.getElementById('meteor-options'); g.innerHTML = '';
    
    opts.forEach(o => {
        const b = document.createElement('button'); b.className = 'option-btn'; b.textContent = o.uk;
        b.onclick = (e) => {
            if(metGameOver) return; // 🔥 БЛОКУЄМО КЛІКИ ПІСЛЯ УДАРУ
            if(o.en === metWordObj.en) {
                clearInterval(metTimer);
                toggleHintButton(false);
                fireParticles(e.clientX, e.clientY, true);
                
                // 🔥 1. ДОДАЄМО СЮДИ: Оля вгадала слово на льоту -> +1 зірочка!
                changeWordMastery(metWordObj, true);
                
                metScore++; addXP(1); spawnMeteor();
            } else {
                b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 300);
            }
        };
        g.appendChild(b);
    });

    const areaHeight = document.getElementById('meteor-area').clientHeight;
    clearInterval(metTimer);
    metTimer = setInterval(() => {
        metPos += metSpeed;
        el.style.top = metPos + 'px';
        if(metPos > areaHeight - 80) { 
            clearInterval(metTimer);
            metGameOver = true; // 🔥 ФІКСУЄМО ПРОГРАШ
            toggleHintButton(false);
            document.getElementById('meteor-cat').classList.add('hit');
            
            // 🔥 2. ДОДАЄМО СЮДИ: Слово долетіло до низу й вибухнуло -> прогрес слова падає (-1 зірочка)
            changeWordMastery(metWordObj, false);
            
            setTimeout(() => {
                document.getElementById('meteor-active').style.display = 'none';
                document.getElementById('meteor-result').style.display = 'flex';
                document.getElementById('meteor-final-score').textContent = metScore;
                gameFinished(false, 'meteor', metScore);
            }, 1000);
        }
    }, 30);
}
function updateLoveMilestones() {
    const now = new Date();
    // Скидаємо години для точного підрахунку чистих днів
    const start = new Date(LOVE_START_DATE);
    start.setHours(0,0,0,0);
    now.setHours(0,0,0,0);
    
    // Рахуємо скільки днів ви разом
    const diffTime = Math.abs(now - start);
    const currentDaysTogether = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Оновлюємо текстову цифру у твоєму профілі
    const daysEl = document.getElementById('together-days');
    if (daysEl) daysEl.textContent = currentDaysTogether;

    // 🎁 ПЕРЕВІРКА НА АВТО-РОЗБЛОКУВАННЯ ТАЄМНИХ НАГОРОД
    loveMilestones.forEach(m => {
        if (currentDaysTogether >= m.days && !unlockedMilestones.includes(m.id)) {
            unlockedMilestones.push(m.id);
            localStorage.setItem('unlockedMilestones', JSON.stringify(unlockedMilestones));
            
            // Автоматично додаємо купон в інвентар без зняття зірок!
            inventory.push({
                id: m.id,
                name: m.rewardName,
                price: 0,
                icon: m.rewardIcon,
                uid: Date.now() + Math.floor(Math.random() * 1000)
            });
            localStorage.setItem('userInventory', JSON.stringify(inventory));
            
            // Ефектний виклик котика та тост повідомлення
            setTimeout(() => {
                showToast(`🎁 Нагороду розблоковано: ${m.title}`);
                if (typeof triggerCatReaction === 'function') {
                    triggerCatReaction('poke', 'happy', `Кохана, ми пройшли віху: ${m.title}! Я підкинув тобі секретний купон! 👑❤️`);
                }
                if (typeof renderInventory === 'function') renderInventory();
                if (typeof updateUI === 'function') updateUI();
            }, 1500);
        }
    });

    // 🗓️ ПОШУК НАСТУПНОЇ МАЙБУТНЬОЇ ВІХИ ДЛЯ ШКАЛИ
    let nextM = loveMilestones.find(m => m.days > currentDaysTogether);
    
    // Якщо Оля пройде абсолютно всі прописані віхи, генеруємо кожні наступні 100 днів автоматично
    if (!nextM) {
        const nextTargetDays = Math.ceil((currentDaysTogether + 1) / 100) * 100;
        nextM = { days: nextTargetDays, title: `${nextTargetDays} днів нашого всесвіту разом! 💞`, id: 'auto_generated' };
    }

    // Вираховуємо відсоток заповнення шкали між попередньою та наступною датами
    let prevDays = 0;
    const currentIdx = loveMilestones.findIndex(m => m.days === nextM.days);
    if (currentIdx > 0) {
        prevDays = loveMilestones[currentIdx - 1].days;
    } else if (currentIdx === -1) {
        prevDays = Math.floor(currentDaysTogether / 100) * 100;
    }

    const totalRequired = nextM.days - prevDays;
    const completed = currentDaysTogether - prevDays;
    const percent = Math.min(100, Math.max(0, (completed / totalRequired) * 100));
    const daysLeft = nextM.days - currentDaysTogether;

    // Виводимо дані на екран
    const titleEl = document.getElementById('milestone-title');
    const barEl = document.getElementById('milestone-bar');
    const timeLeftEl = document.getElementById('milestone-time-left');

    if (titleEl) titleEl.textContent = nextM.title;
    if (barEl) barEl.style.width = percent + '%';
    if (timeLeftEl) {
        timeLeftEl.textContent = daysLeft === 0 
            ? "ДЕНЬ НАСТАВ! Перевір свої Купони! 🎉💝" 
            : `Залишилось: ${daysLeft} днів ⏳`;
    }
}
// 🔥 ГЕНЕРАТОР КОЛОСАЛЬНИХ ТА УНІКАЛЬНИХ ЕФЕКТІВ ЛЕВЕЛАПУ
function runColossalLevelUpFX(tier, fxConfig) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const modal = document.getElementById('levelup-modal');
    const card = document.getElementById('lu-card');
    const cat = document.getElementById('lu-cat-emoji');
    const title = document.querySelector('#lu-card div[style*=" НОВИЙ ТИТУЛ"]');

    if (!modal || !card) return;

    // Скидаємо всі стилі картки з попередніх разів
    card.style.animation = "";
    card.style.border = "3px solid var(--primary)";
    card.style.transition = "";
    card.className = "pop"; // Додаємо клас появи
    if (cat) cat.style.transform = "";

    // 💣 ЕФЕКТ БОГИНІ: КОСМІЧНИЙ ПІЗДЄЦ 💣
    if (fxConfig.cosmic) {
        modal.style.transition = "background 2s ease";
        modal.style.background = "black"; // робимо фон вугільним
        
        const cosmicBg = document.getElementById('lu-cosmic-bg');
        if (cosmicBg) {
            cosmicBg.style.display = 'block';
            cosmicBg.innerHTML = '';
            
            // 🚀 Створюємо JS-двигуном лавину зірокфону
            const frag = document.createDocumentFragment();
            for(let i=0; i<80; i++) {
                const star = document.createElement('div');
                star.style.position = 'absolute';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = star.style.height = (Math.random() * 2 + 1) + 'px';
                star.style.backgroundColor = 'white';
                star.style.borderRadius = '50%';
                star.style.boxShadow = `0 0 ${Math.random() * 4 + 2}px white`;
                star.style.opacity = Math.random();
                if(Math.random() < 0.2) star.style.animation = `slowOrbit ${Math.random() * 20 + 30}s infinite linear`;
                frag.appendChild(star);
            }
            cosmicBg.appendChild(frag);
        }

        // 🌈 Накладаємо веселку на обводку картки
        card.style.animation = "rainbowBorder 3s infinite linear";
        
        // ✨ Робимо заголовок неоновим
        if(title) {
            title.style.color = "#ec4899";
            title.style.animation = "neonPulse 1s infinite";
        }

        // 🐱 Кіт збільшується і починає шалено крутитися
        if (cat) {
            setTimeout(() => {
                cat.style.transition = "transform 3s cubic-bezier(0.19, 1, 0.22, 1)";
                cat.style.transform = "scale(1.4) rotate(720deg)";
            }, 500);
        }
    }

    // 🚨 ЕФЕКТ ТРЯСКИ (Gentle / Violent)
    if (fxConfig.shake) {
        if (fxConfig.shake === 'gentle') {
            modal.style.animation = "shake 0.3s"; // один раз
        } else if (fxConfig.shake === 'violent') {
            // Дика, безперервна тряска
            modal.style.animation = "extremeShake 0.4s infinite";
            setTimeout(() => modal.style.animation = "", 2500); // зупиняємо через 2.5с
        }
    }

    // ⚡ ЕФЕКТ СПАЛАХУ ЕКРАНА (Flash)
    if (fxConfig.flash) {
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = flash.style.left = 0;
        flash.style.width = flash.style.height = '100%';
        flash.style.zIndex = "999999";
        flash.style.animation = "screenFlash 0.3s ease-out";
        flash.style.pointerEvents = "none";
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 400);
    }

    // 🎉 ЛАВИНА ЧАСТИНОК (Залежить від Confetti)
    let bursts = fxConfig.confetti * 5;
    let particlesPerBurst = fxConfig.confetti * 15;
    
    // Визначаємо емодзі для цього рівня
    let emojis = ['🌟', '💖', '✨', '⭐'];
    if (tier === "Леді") emojis.push('💋', '👄', '🔥');
    if (tier === "Королева") emojis.push('👑', '🥇', '🥰');
    if (fxConfig.cosmic) emojis.push('🪐', '🌌', '❤️‍🔥');

    const explode = (x, y) => {
        const frag = document.createDocumentFragment();
        for(let i=0; i<particlesPerBurst; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            p.style.left = x + 'px'; p.style.top = y + 'px';
            p.style.fontSize = (Math.random() * 20 + (5 * fxConfig.confetti)) + 'px';
            p.style.zIndex = "999999";
            
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * (120 + (fxConfig.confetti * 20)) + 60;
            p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
            p.style.setProperty('--ty', Math.sin(angle) * dist - 80 + 'px');
            p.style.animationDuration = (Math.random() * 0.5 + 0.7) + 's';
            
            frag.appendChild(p);
            setTimeout(() => p.remove(), 1200);
        }
        document.body.appendChild(frag);
    };

    // Запускаємо серію вибухів по всьому екрану
    for (let b = 0; b < bursts; b++) {
        setTimeout(() => {
            let rx = Math.random() * (screenWidth - 100) + 50;
            let ry = Math.random() * (screenHeight - 100) + 50;
            explode(rx, ry);
            // Програємо звичайний звук вибуху конфеті
            try { if (typeof playSFX === "function") playSFX(true); } catch(e){}
        }, b * (150 - (fxConfig.confetti * 10)));
    }

    // 🔥 ДОДАНА МЕЛОДІЯ: Грає 1 раз суто при підвищенні титулу Олі!
    try { playLevelUpMelody(); } catch(e){}
}

function triggerLevelUpModal(levelName) {
    const config = levelUpConfig[levelName];
    if (!config) return; 

    // 🔥 ДОДАЄМО СЮДИ: Перевірка секретного досягнення для максимального рівня
    if (levelName === "Моя Богиня") checkAchiev('goddess_status');

    document.getElementById('lu-level-name').textContent = levelName;
    document.getElementById('lu-cat-emoji').textContent = config.cat;
    document.getElementById('lu-text').textContent = config.desc;
    document.getElementById('lu-reward-text').textContent = config.rewardText;

    const modal = document.getElementById('levelup-modal');
    if (modal) modal.style.display = 'flex';

    // 🔥 ЗАПУСКАЄМО ШАЛЕНІ ЕФЕКТИ
    runColossalLevelUpFX(levelName, config.fx);
    
    config.action();
    localStorage.setItem('userInventory', JSON.stringify(inventory));
    if (typeof renderInventory === 'function') renderInventory();
    if (typeof updateUI === 'function') updateUI();
}
// 🔥 ЗАКРИТТЯ ЕКРАНА ЛЕВЕЛАПУ
function closeLevelUpModal() {
    const modal = document.getElementById('levelup-modal');
    if (modal) modal.style.display = 'none';
    
    // 🔥 ФІКС: Скидаємо дикі ефекти Богині
    const luCard = document.getElementById('lu-card');
    if (luCard) {
        luCard.style.animation = ""; // прибираємо веселку
        luCard.style.border = "";
        luCard.className = ""; // прибираємо появу
    }
    
    const cat = document.getElementById('lu-cat-emoji');
    if (cat) {
        cat.style.transform = ""; // прибираємо збільшення і обертання кота
        cat.style.transition = "";
    }
    
    const cosmicBg = document.getElementById('lu-cosmic-bg');
    if(cosmicBg) {
        cosmicBg.style.display = 'none';
        cosmicBg.innerHTML = '';
    }

    // Скидаємо фон модалки
    modal.style.background = "rgba(0,0,0,0.85)";
    modal.style.transition = "";
    
    location.reload(); 
}
// НЕ ЗАБУДЬ ЗАЛИШИТИ ФУНКЦІЇ ЕКСПОРТУ В САМОМУ КІНЦІ:
function exportProgress() { 
    // 🔥 ОНОВЛЕНО: Додали couponArchive в загальний пакунок резервної копії
    const d = { 
        totalXP, lifetimeXP, currentStreak, bestSprint, dailyProg, mistakeWords, 
        inventory, achievs, usedCodes, lastLogin, dailyGoals, userStats, lastWheelDate,
        wordMastery, masteryMode, unlockedMilestones, couponArchive 
    }; 
    const s = btoa(unescape(encodeURIComponent(JSON.stringify(d)))); 
    navigator.clipboard.writeText(s).then(()=>alert("Код скопійовано! Надішли Юрі 📩")).catch(()=>prompt("Скопіюй вручну:", s)); 
}

function importProgress() { 
    const s = prompt("Встав код прогресу сюди:"); 
    if(!s) return; 
    try { 
        const d = JSON.parse(decodeURIComponent(escape(atob(s)))); 
        if(d.totalXP !== undefined) { 
            localStorage.setItem('totalXP', d.totalXP); 
            if(d.lifetimeXP !== undefined) localStorage.setItem('lifetimeXP', d.lifetimeXP); 
            localStorage.setItem('streak', d.currentStreak); 
            localStorage.setItem('sprintRecord', d.bestSprint); 
            localStorage.setItem('dailyProg', JSON.stringify(d.dailyProg)); 
            localStorage.setItem('userMistakes', JSON.stringify(d.mistakeWords)); 
            localStorage.setItem('userInventory', JSON.stringify(d.inventory)); 
            localStorage.setItem('achievs', JSON.stringify(d.achievs)); 
            localStorage.setItem('usedCodes', JSON.stringify(d.usedCodes)); 
            localStorage.setItem('lastLogin', d.lastLogin); 
            if(d.dailyGoals) localStorage.setItem('dailyGoals', JSON.stringify(d.dailyGoals)); 
            if(d.userStats) localStorage.setItem('userStats', JSON.stringify(d.userStats)); 
            if(d.lastWheelDate) localStorage.setItem('lastWheelDate', d.lastWheelDate); 
            
            if(d.wordMastery) localStorage.setItem('wordMastery', JSON.stringify(d.wordMastery));
            if(d.masteryMode) localStorage.setItem('masteryMode', d.masteryMode);
            if(d.unlockedMilestones) localStorage.setItem('unlockedMilestones', JSON.stringify(d.unlockedMilestones));
            
            // 🔥 ОНОВЛЕНО: Відновлюємо Архів купонів з коду
            if(d.couponArchive) localStorage.setItem('couponArchive', JSON.stringify(d.couponArchive));
            
            alert("Прогрес відновлено!"); 
            location.reload(); 
        } 
    } catch(e){ alert("Помилка коду!"); } 
}
