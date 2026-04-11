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
let dailyProg = JSON.parse(localStorage.getItem('dailyProg')) || { games: 0, flash: 0, emoji: 0, pairs: 0, quiz_score: 0, spell: 0, sprint: 0, perfect: 0, clean_hm: 0, g1Done: false, g2Done: false, g3Done: false };
let currentCat = 'all'; 

let synth = window.speechSynthesis; let voices = []; let audioUnlocked = false;
function unlockAudio() { if(audioUnlocked) return; audioUnlocked = true; if (synth && synth.paused) synth.resume(); synth.speak(new SpeechSynthesisUtterance("")); }
function speak(text, accent, event) { if(event) event.stopPropagation(); synth.cancel(); setTimeout(() => { let u = new SpeechSynthesisUtterance(text); u.lang = accent === 'us' ? 'en-US' : 'en-GB'; u.rate = 0.85; if (!voices.length) voices = synth.getVoices(); let bestVoice = voices.find(v => v.lang === u.lang && (v.name.includes("Samantha") || v.name.includes("Daniel") || v.name.includes("Google"))); if (bestVoice) u.voice = bestVoice; synth.speak(u); }, 50); }

function getVocab() { return currentCat === 'all' ? baseVocabulary : baseVocabulary.filter(w => w.c === currentCat); }
function setCat(c, el) { currentCat = c; document.querySelectorAll('.cat-chip').forEach(chip => chip.classList.remove('active')); el.classList.add('active'); if(document.getElementById('dictionary').classList.contains('active')) renderDictionary(); }

function getLevelInfo() {
    let currentLvl = levelSystem[0];
    for(let i=0; i<levelSystem.length; i++) { if(lifetimeXP >= levelSystem[i].xp) currentLvl = levelSystem[i]; }
    return currentLvl;
}

function initGamification() {
    const d = new Date(); const today = d.toDateString(); const hour = d.getHours();
    
    document.getElementById('compliment-text').textContent = compliments[Math.floor(Math.random() * compliments.length)];
    
    const bossBtn = document.getElementById('boss-btn');
    if(d.getDay() === 0) { 
        bossBtn.style.filter = 'grayscale(0)';
        bossBtn.style.pointerEvents = 'auto';
        bossBtn.style.animation = 'none';
        bossBtn.style.borderColor = '#ff0000';
        document.getElementById('boss-desc').textContent = "Іспит відкрито! Успіхів 😈";
        document.getElementById('boss-desc').style.color = "#ff4444";
    }

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
        dailyProg = { games: 0, flash: 0, emoji: 0, pairs: 0, quiz_score: 0, spell: 0, sprint: 0, perfect: 0, clean_hm: 0, g1Done: false, g2Done: false, g3Done: false };
        localStorage.setItem('dailyGoals', JSON.stringify(dailyGoals)); localStorage.setItem('lastLogin', lastLogin); localStorage.setItem('streak', currentStreak); saveDaily();
    }
    
    if(currentStreak >= 3) checkAchiev('streak3'); 
    if(currentStreak >= 7) checkAchiev('streak7'); 
    if(hour >= 22 || hour < 4) checkAchiev('owl');
    if(hour >= 5 && hour < 9) checkAchiev('early_bird');
    
    updateUI(); renderShop(); renderInventory(); renderAchievs();
}

function pokeCat() {
    const bubble = document.getElementById('cat-bubble');
    if(bubble.classList.contains('show')) return;
    bubble.textContent = catTips[Math.floor(Math.random() * catTips.length)];
    bubble.classList.add('show');
    playSFX(true);
    setTimeout(() => bubble.classList.remove('show'), 4000);
}

function saveDaily() { localStorage.setItem('dailyProg', JSON.stringify(dailyProg)); }
function saveStats() { localStorage.setItem('userStats', JSON.stringify(userStats)); }
function addXP(amount) { 
    totalXP += amount; localStorage.setItem('totalXP', totalXP); 
    if(amount > 0) { lifetimeXP += amount; localStorage.setItem('lifetimeXP', lifetimeXP); }
    if (totalXP >= 2000) checkAchiev('rich'); 
    updateUI(); 
}

function checkGoals() {
    if (!dailyProg.g1Done && dailyProg[dailyGoals[0].type] >= dailyGoals[0].target) { dailyProg.g1Done = true; addXP(dailyGoals[0].rew); showToast(`Ціль виконана! +${dailyGoals[0].rew}🌟`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    if (!dailyProg.g2Done && dailyProg[dailyGoals[1].type] >= dailyGoals[1].target) { dailyProg.g2Done = true; addXP(dailyGoals[1].rew); showToast(`Ціль виконана! +${dailyGoals[1].rew}🌟`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    if (!dailyProg.g3Done && dailyProg[dailyGoals[2].type] >= dailyGoals[2].target) { dailyProg.g3Done = true; addXP(dailyGoals[2].rew); showToast(`ВАЖКА ЦІЛЬ! +${dailyGoals[2].rew}🌟 Розумничка!`); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
    saveDaily(); updateUI();
}

function gameFinished(perfect = false, type = 'games', score = 0) {
    if(type === 'boss') return; 
    dailyProg.games++;
    userStats.totalGames = (userStats.totalGames || 0) + 1;
    
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
    if (type === 'sprint') { 
        dailyProg.sprint = Math.max(dailyProg.sprint, score); 
        if(score === 7) checkAchiev('lucky7'); 
    }
    if (perfect && type === 'quiz_score') dailyProg.perfect = 20;
    if (perfect && type === 'hangman') dailyProg.clean_hm = 1;

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    if(h >= 1 && h <= 4) { userStats.nightGames++; saveStats(); if(userStats.nightGames >= 3) checkAchiev('ninja'); }
    if(h === 0 && m >= 0 && m <= 10) checkAchiev('midnight');

    checkGoals(); checkAchiev('first_blood'); if(perfect) checkAchiev('perfect');
}

function updateUI() {
    document.getElementById('xp-count').textContent = totalXP; document.getElementById('streak-count').textContent = currentStreak; document.getElementById('sprint-badge').textContent = bestSprint; document.getElementById('mistakes-count').textContent = mistakeWords.length; document.getElementById('inv-count').textContent = inventory.length;
    
    const lvl = getLevelInfo();
    document.getElementById('user-level-name').textContent = lvl.name;
    document.getElementById('user-level-icon').textContent = lvl.icon;

    if (dailyGoals && dailyGoals.length === 3) {
        for(let i=1; i<=3; i++) {
            const g = dailyGoals[i-1]; document.getElementById(`dg${i}-title`).textContent = g.title; document.getElementById(`dg${i}-rew`).textContent = `+${g.rew} 🌟`;
            document.getElementById(`dg${i}-bar`).style.width = Math.min(100, (dailyProg[g.type]/g.target)*100) + "%";
            if (dailyProg[`g${i}Done`]) document.getElementById(`goal-${i}`).classList.add('completed');
        }
    }
}

function isBlackMarketOpen() {
    const d = new Date(); const h = d.getHours();
    if (d.getDate() === 16 && d.getMonth() === 4) return 'ALL'; 
    if (d.getDay() === 5 && ((h >= 8 && h < 10) || (h >= 22 && h < 24))) return 'NORMAL';
    return false;
}

function renderShop() { 
    const c = document.getElementById('shop-list'); 
    const bmStatus = isBlackMarketOpen();
    c.innerHTML = bmStatus ? `<div style="background:#0f172a; color:#10b981; padding:10px; border-radius:12px; margin-bottom:15px; text-align:center; font-weight:800; border:2px solid #10b981;">🕶️ ЧОРНИЙ РИНОК ВІДКРИТО!</div>` : ''; 
    
    let currentItems = [...shopItems];
    if (bmStatus) {
        currentItems = currentItems.map(i => i.id === 'dinner' ? { ...i, price: Math.floor(i.price * 0.85) } : i);
        if (bmStatus === 'ALL') {
            currentItems.push(...bmItems);
        } else {
            const d = new Date(); const seed = d.getFullYear() + d.getMonth() + d.getDate();
            currentItems.push(bmItems[seed % bmItems.length], bmItems[(seed + 1) % bmItems.length]);
        }
    }

    currentItems.forEach(i => { 
        const isErr = i.price === 'ERROR'; const can = !isErr && totalXP >= i.price;
        const originalPrice = shopItems.find(x=>x.id === i.id)?.price;
        const discountLabel = (bmStatus && i.id === 'dinner') ? `<s style="color:var(--text-muted);font-size:0.7rem;">${originalPrice}</s>` : '';
        c.innerHTML += `<div class="shop-item"><div class="shop-info"><div style="font-size:2rem;">${i.icon}</div><div><div class="shop-title">${i.name}</div><div class="shop-price" style="${isErr?'color:var(--wrong)':(bmStatus && i.id==='dinner'?'color:#10b981':'')}">${isErr?'':'🌟 '}${i.price} ${discountLabel}</div></div></div><button class="buy-btn" ${can?'':'disabled'} onclick="buyItem('${i.id}')">${isErr?'Неможливо':(can?'Купити':'Бракує')}</button></div>`;
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

    if(totalXP >= i.price) { 
        addXP(-i.price); 
        inventory.push({ ...i, uid: Date.now() }); 
        localStorage.setItem('userInventory', JSON.stringify(inventory)); 
        
        userStats.purchases = (userStats.purchases || 0) + 1;
        if(id === 'hug') { userStats.hugPurchases = (userStats.hugPurchases || 0) + 1; if(userStats.hugPurchases >= 3) checkAchiev('hug_addict'); }
        saveStats(); if(userStats.purchases >= 3) checkAchiev('shopaholic');

        showToast("Куплено: " + i.name); renderInventory(); renderShop(); updateUI();
    } 
}

function renderInventory() { const c = document.getElementById('inv-list'); c.innerHTML = ''; if(!inventory.length) { c.innerHTML = "<div style='text-align:center; color:var(--text-muted); padding:20px;'>Тут поки порожньо. Купуй купони в магазині!</div>"; return; } inventory.forEach(i => { c.innerHTML += `<div class="inv-item"><div style="font-size:3rem;">${i.icon}</div><div class="shop-title">${i.name}</div><button class="inv-btn" onclick="openCoupon('${i.uid}')">Використати купон</button></div>`; }); }
let curCuid = null; function openCoupon(u) { const i = inventory.find(x => x.uid == u); if(!i) return; curCuid = u; document.getElementById('cm-icon').textContent = i.icon; document.getElementById('cm-title').textContent = i.name; document.getElementById('coupon-modal').style.display = 'flex'; }
function closeCoupon() { document.getElementById('coupon-modal').style.display = 'none'; }
document.getElementById('cm-btn').onclick = () => { inventory = inventory.filter(x => x.uid != curCuid); localStorage.setItem('userInventory', JSON.stringify(inventory)); closeCoupon(); updateUI(); renderInventory(); fireParticles(window.innerWidth/2, window.innerHeight/2, true); setTimeout(()=>alert("Купон успішно використано! ❤️"), 500); };

function checkAchiev(id){ if(!achievs[id]){ achievs[id]=true; localStorage.setItem('achievs', JSON.stringify(achievs)); showToast("Нове досягнення!"); renderAchievs(); } }

function renderAchievs() { 
    const c = document.getElementById('achiev-list'); c.innerHTML = ''; 
    Object.keys(achievList).forEach(k => { 
        const a = achievList[k]; const unl = achievs[k] ? 'unlocked' : ''; 
        if(a.secret && !unl) c.innerHTML += `<div class="achiev-card"><div class="achiev-icon" style="font-size:2.5rem; margin-right:15px;">❓</div><div><div class="achiev-title">Секретне досягнення</div><div class="achiev-desc">Виконай особливі умови, щоб відкрити.</div></div></div>`;
        else c.innerHTML += `<div class="achiev-card ${unl}"><div class="achiev-icon" style="font-size:2.5rem; margin-right:15px;">${a.icon}</div><div><div class="achiev-title">${a.title}</div><div class="achiev-desc">${a.desc}</div></div></div>`; 
    }); 
}
function showToast(m) { const t = document.getElementById('toast'); document.getElementById('toast-msg').textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

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

let spinLock = false;
let lastWheelDate = localStorage.getItem('lastWheelDate') || 0;

function checkWheelCooldown() {
    const btn = document.getElementById('spin-btn');
    const now = Date.now();
    const diff = now - parseInt(lastWheelDate);
    const cooldown = 3 * 24 * 60 * 60 * 1000;
    if(lastWheelDate && diff < cooldown) {
        const daysLeft = Math.ceil((cooldown - diff) / (1000 * 60 * 60 * 24));
        btn.textContent = `Доступно через ${daysLeft} дн.`;
        btn.disabled = true;
    } else {
        btn.textContent = "Крутити (50 🌟)";
        btn.disabled = false;
    }
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
    const r = Math.random();
    let prizeIndex;

    if (r < 0.01) { prizeIndex = 0; } 
    else if (r < 0.10) { prizeIndex = 8; } 
    else if (r < 0.20) { prizeIndex = 7; } 
    else if (r < 0.35) { prizeIndex = 6; } 
    else if (r < 0.65) { prizeIndex = [1, 3, 5][Math.floor(Math.random()*3)]; } 
    else { prizeIndex = [2, 4][Math.floor(Math.random()*2)]; } 

    const sectorAngle = 36;
    const randomOffset = 5 + Math.random() * 26; 
    const targetDegree = (prizeIndex * sectorAngle) + randomOffset;
    
    const spins = 6; 
    const currentRotation = parseFloat(wheel.dataset.rotation) || 0;
    
    const nextRotation = currentRotation + (360 - (currentRotation % 360)) + (360 * spins) + (360 - targetDegree);

    wheel.style.transform = `rotate(${nextRotation}deg)`;
    wheel.dataset.rotation = nextRotation;
    
    setTimeout(() => {
        const prize = wheelPrizes[prizeIndex];
        
        if(prize.type === 'xp') {
            if(prize.val > 0) { addXP(prize.val); fireParticles(window.innerWidth/2, window.innerHeight/2, true); }
            alert(prize.msg);
        } 
        else if(prize.type === 'item' || prize.type === 'jackpot') {
            inventory.push({ id: 'wheel_pr', name: prize.name, price: 0, icon: prize.icon, uid: Date.now() });
            localStorage.setItem('userInventory', JSON.stringify(inventory));
            fireParticles(window.innerWidth/2, window.innerHeight/2, true);
            if(prize.type === 'jackpot') checkAchiev('lucky_bastard');
            alert(prize.msg);
            renderInventory(); updateUI();
        }
        spinLock = false; 
    }, 4000);
}

// БОС
let bQ=[], bIdx=0, bErr=3, bLock=false;
function startBoss() { const voc = getVocab(); if(voc.length<50){alert("Мало слів для іспиту!"); return;} bQ = shuffleArray(voc).slice(0, 50); bIdx=0; bErr=3; showSection('boss'); document.getElementById('boss-result').style.display='none'; document.getElementById('boss-active').style.display='flex'; loadBoss(); }
function loadBoss() { bLock = false; let w = bQ[bIdx]; document.getElementById('boss-counter').textContent=`💀 Питання ${bIdx+1}/50`; document.getElementById('boss-errors').textContent=`${bErr}/3`; document.getElementById('boss-question-box').innerHTML=`<div style="font-size:3.5rem;margin-bottom:10px;">${w.em}</div>${w.uk}`; const opts = shuffleArray([w, ...shuffleArray(baseVocabulary.filter(x=>x.en!==w.en)).slice(0,3)]); const g = document.getElementById('boss-options'); g.innerHTML=''; opts.forEach(o => { const b = document.createElement('button'); b.className='option-btn'; b.textContent=o.en; b.onclick = (e) => { if(bLock) return; bLock=true; const c = o.en===w.en; fireParticles(e.clientX, e.clientY, c); if(c) { b.classList.add('correct'); setTimeout(()=>{ bIdx++; if(bIdx<50) loadBoss(); else finishBoss(true); }, 300); } else { b.classList.add('wrong'); bErr--; document.getElementById('boss-errors').textContent=`${bErr}/3`; setTimeout(()=>{ if(bErr <= 0) finishBoss(false); else { bIdx++; if(bIdx<50) loadBoss(); else finishBoss(true); } }, 400); } }; g.appendChild(b); }); }
function finishBoss(win) { document.getElementById('boss-active').style.display='none'; document.getElementById('boss-result').style.display='flex'; document.getElementById('boss-final').textContent = win ? "ПЕРЕМОГА!" : "ПРОВАЛ"; document.getElementById('boss-result-title').textContent = win ? "Ти здолала Боса! 🎉" : "Ти загинула... 💔"; if(win) { document.getElementById('boss-result-desc').textContent = "Оля - справжня войовниця! Ось твої +500 🌟 та Золотий купон! Юра тобою пишається! 🥰"; addXP(500); inventory.push({ id:'boss_win', name:'🥇 Золотий купон від Юри (Перемога над Босом)', price:0, icon:'🥇', uid:Date.now() }); localStorage.setItem('userInventory', JSON.stringify(inventory)); checkAchiev('boss_killer'); } else { document.getElementById('boss-result-desc').textContent = "Життя скінчилися. Бос виявився сильнішим. Повтори словник і повертайся за реваншем! Юра вірить в тебе!"; } renderInventory(); updateUI(); }

function exportProgress() { const d = { totalXP, lifetimeXP, currentStreak, bestSprint, dailyProg, mistakeWords, inventory, achievs, usedCodes, lastLogin, dailyGoals, userStats, lastWheelDate }; const s = btoa(unescape(encodeURIComponent(JSON.stringify(d)))); navigator.clipboard.writeText(s).then(()=>alert("Код скопійовано! Надішли Юрі 📩")).catch(()=>prompt("Скопіюй вручну:", s)); }
function importProgress() { const s = prompt("Встав код прогресу сюди:"); if(!s) return; try { const d = JSON.parse(decodeURIComponent(escape(atob(s)))); if(d.totalXP !== undefined) { localStorage.setItem('totalXP', d.totalXP); if(d.lifetimeXP !== undefined) localStorage.setItem('lifetimeXP', d.lifetimeXP); localStorage.setItem('streak', d.currentStreak); localStorage.setItem('sprintRecord', d.bestSprint); localStorage.setItem('dailyProg', JSON.stringify(d.dailyProg)); localStorage.setItem('userMistakes', JSON.stringify(d.mistakeWords)); localStorage.setItem('userInventory', JSON.stringify(d.inventory)); localStorage.setItem('achievs', JSON.stringify(d.achievs)); localStorage.setItem('usedCodes', JSON.stringify(d.usedCodes)); localStorage.setItem('lastLogin', d.lastLogin); if(d.dailyGoals) localStorage.setItem('dailyGoals', JSON.stringify(d.dailyGoals)); if(d.userStats) localStorage.setItem('userStats', JSON.stringify(d.userStats)); if(d.lastWheelDate) localStorage.setItem('lastWheelDate', d.lastWheelDate); alert("Прогрес відновлено!"); location.reload(); } } catch(e){alert("Помилка коду!");} }

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSFX(correct) { if(audioCtx.state === 'suspended') audioCtx.resume(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); if(correct) { osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.15); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4); osc.start(); osc.stop(audioCtx.currentTime + 0.4); } else { osc.type = 'square'; osc.frequency.setValueAtTime(150, audioCtx.currentTime); osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2); gain.gain.setValueAtTime(0.05, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.2); osc.start(); osc.stop(audioCtx.currentTime + 0.2); } }
function shuffleArray(array) { let arr = [...array]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function trackMistake(w) { if (!mistakeWords.find(x => x.en === w.en)) { mistakeWords.push(w); localStorage.setItem('userMistakes', JSON.stringify(mistakeWords)); updateUI(); } }
function removeMistake(w) { mistakeWords = mistakeWords.filter(x => x.en !== w.en); localStorage.setItem('userMistakes', JSON.stringify(mistakeWords)); updateUI(); }
let isDark = localStorage.getItem('theme') === 'dark'; if(isDark) document.getElementById('app-container').classList.add('dark'); document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙';
function toggleTheme() { isDark = !isDark; document.getElementById('app-container').classList.toggle('dark'); document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙'; localStorage.setItem('theme', isDark ? 'dark' : 'light'); }

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

let sprintTimerInterval = null;
function showSection(id) { 
    clearInterval(sprintTimerInterval); 
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active')); 
    document.getElementById(id).classList.add('active'); 
    
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if(id === 'home' || id === 'dictionary' || id === 'shop' || id === 'settings') {
        document.querySelector(`.nav-item[onclick="showSection('${id}')"]`).classList.add('active');
    }

    window.scrollTo(0,0); 
    if(id === 'home') document.getElementById('user-stats').style.display = 'flex'; 
    else document.getElementById('user-stats').style.display = 'none'; 
    
    if(id === 'dictionary') { document.getElementById('dict-search').value = ''; renderDictionary(); userStats.dictOpens = (userStats.dictOpens || 0) + 1; saveStats(); if(userStats.dictOpens >= 50) checkAchiev('vocab_king'); } 
    if(id === 'inventory') { renderInventory(); } 
    if(id === 'shop') { renderShop(); } 
    if(id === 'wheel') { checkWheelCooldown(); } 
}

let dictMode = 'en-uk'; function setDictMode(m) { dictMode = m; renderDictionary(); }
function recordCardFlip() { userStats.flippedCards = (userStats.flippedCards || 0) + 1; saveStats(); if(userStats.flippedCards >= 50) checkAchiev('bookworm'); }

function renderDictionary() { 
    document.getElementById('btn-dict-en').className = dictMode === 'en-uk' ? 'btn btn-primary' : 'btn'; document.getElementById('btn-dict-uk').className = dictMode === 'uk-en' ? 'btn btn-primary' : 'btn'; 
    const grid = document.getElementById('dict-grid'); grid.innerHTML = ''; const q = document.getElementById('dict-search').value.toLowerCase().trim(); 
    if(q === 'love' || q === 'кохаю' || q === 'люблю') { document.getElementById('easter-egg').style.display='flex'; checkAchiev('love'); document.getElementById('dict-search').value=''; return; } 
    let list = baseVocabulary.filter(w => w.en.toLowerCase().includes(q) || w.uk.toLowerCase().includes(q)); 
    
    if(currentCat !== 'all') { list = list.filter(w => w.c === currentCat); }

    list.sort((a,b) => a.en.localeCompare(b.en)).forEach(w => { 
        const c = document.createElement('div'); c.className = 'dict-card'; const f = document.createElement('div'); f.className = 'dict-face'; const b = document.createElement('div'); b.className = 'dict-face dict-back'; 
        const buildEn = (el) => { el.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${w.em}</div><div>${w.en}</div><div style="margin-top:auto; display:flex; gap:10px; width:100%;"><button class="dict-audio-btn" onclick="speak('${w.en}', 'us', event)">🇺🇸 US</button><button class="dict-audio-btn" onclick="speak('${w.en}', 'uk', event)">🇬🇧 UK</button></div>`; }; 
        if(dictMode === 'en-uk') { buildEn(f); b.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${w.em}</div><div>${w.uk}</div>`; } else { f.innerHTML = `<div style="font-size:1.8rem; margin-bottom:2px;">${w.em}</div><div>${w.uk}</div>`; buildEn(b); } 
        c.innerHTML = `<div class="dict-card-inner"></div>`; c.firstChild.appendChild(f); c.firstChild.appendChild(b); c.onclick = () => { c.classList.toggle('flipped'); dailyProg.flash++; checkGoals(); recordCardFlip(); }; grid.appendChild(c); 
    }); 
}

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

window.onload = initGamification;
