/* ==================== КОНСТАНТЫ ==================== */
const KEYS = {
    cart: 'kitagawa_cart_v2',
    menu: 'kitagawa_menu_v2',
    orders: 'kitagawa_orders_v2',
    reviews: 'kitagawa_reviews_v2',
    news: 'kitagawa_news_v2',
    users: 'kitagawa_users_v2',
    session: 'kitagawa_session_v2'
};

const ROLES = {
    admin: { label: 'Администратор', color: '#e63946' },
    manager: { label: 'Менеджер', color: '#d4a24c' },
    operator: { label: 'Оператор', color: '#1565c0' },
    news: { label: 'Новости', color: '#7b1fa2' }
};

const ROLE_PERMISSIONS = {
    admin: ['dashboard', 'orders', 'menu', 'reviews', 'news', 'users'],
    manager: ['dashboard', 'orders', 'menu', 'reviews', 'news'],
    operator: ['orders'],
    news: ['news']
};

const ALL_TABS = [
    { key: 'dashboard', label: 'Дашборд' },
    { key: 'orders', label: 'Заказы' },
    { key: 'menu', label: 'Меню' },
    { key: 'reviews', label: 'Отзывы' },
    { key: 'news', label: 'Новости' },
    { key: 'users', label: 'Пользователи' }
];

const STATUSES = {
    new: { label: 'Новый', cls: 'status-new' },
    cooking: { label: 'Готовится', cls: 'status-cooking' },
    delivering: { label: 'В пути', cls: 'status-delivering' },
    done: { label: 'Доставлен', cls: 'status-done' },
    cancelled: { label: 'Отменён', cls: 'status-cancelled' }
};

/* ==================== ДАННЫЕ ПО УМОЛЧАНИЮ ==================== */
// Используем реальные ссылки с сайта kitagawa.su
const PLACEHOLDER = 'https://kitagawa.su/pictures/product/small/nophoto_small.png';

const DEFAULT_MENU = [
    { id: 1, title: 'Филадельфия', desc: 'Лосось, сливочный сыр, огурец, рис, нори', price: 790, category: 'rolls', img: 'https://kitagawa.su/pictures/product/small/5229_small.jpg' },
    { id: 2, title: 'Крипси сякэ', desc: 'Запеченный ролл с лососем и спайси соусом', price: 980, category: 'rolls', img: 'https://kitagawa.su/pictures/product/small/5254_small.jpg' },
    { id: 3, title: 'Драгон блэк', desc: 'Угорь, креветка, сливочный сыр, соус унаги', price: 1050, category: 'rolls', img: 'https://kitagawa.su/pictures/product/small/5251_small.jpg' },
    { id: 4, title: 'Калифорния классик', desc: 'Краб, авокадо, огурец, икра тобико', price: 820, category: 'rolls', img: 'https://kitagawa.su/pictures/product/small/5118_small.jpg' },
    { id: 5, title: 'Гункан икура', desc: 'Икра лосося на подушке из риса', price: 340, category: 'sushi', img: 'https://kitagawa.su/pictures/product/small/5095_small.jpg' },
    { id: 6, title: 'Суси сякэ', desc: 'Классические суши с лососем', price: 260, category: 'sushi', img: 'https://kitagawa.su/pictures/product/small/5099_small.jpg' },
    { id: 7, title: 'WOK с курицей', desc: 'Лапша удон, курица, овощи, соус терияки', price: 780, category: 'wok', img: 'https://kitagawa.su/pictures/product/small/5180_small.jpg' },
    { id: 8, title: 'Том Ям', desc: 'Острый тайский суп с креветками и кокосовым молоком', price: 1250, category: 'soups', img: 'https://kitagawa.su/pictures/product/small/5077_small.jpg' },
    { id: 9, title: 'Рамэн', desc: 'Насыщенный бульон, пшеничная лапша, чашу, яйцо', price: 790, category: 'soups', img: 'https://kitagawa.su/pictures/product/small/5075_small.jpg' },
    { id: 10, title: 'Картофель фри', desc: 'Хрустящий картофель с соусом на выбор', price: 300, category: 'hot', img: 'https://kitagawa.su/pictures/product/small/5220_small.jpg' },
    { id: 11, title: 'Пицца Цезарь', desc: 'Курица, томаты черри, соус цезарь, сыр', price: 990, category: 'pizza', img: 'https://kitagawa.su/pictures/product/small/5171_small.jpg' },
    { id: 12, title: 'Моти с манго', desc: 'Нежное рисовое тесто с начинкой из манго', price: 330, category: 'desserts', img: 'https://kitagawa.su/pictures/product/small/5067_small.jpg' }
];

const DEFAULT_USERS = [
    { id: 1, login: 'admin', password: 'admin123', name: 'Администратор', role: 'admin' },
    { id: 2, login: 'manager', password: 'manager123', name: 'Менеджер', role: 'manager' },
    { id: 3, login: 'operator', password: 'operator123', name: 'Оператор', role: 'operator' },
    { id: 4, login: 'news', password: 'news123', name: 'Редактор', role: 'news' }
];

const DEFAULT_REVIEWS = [
    { id: 'r1', name: 'Айсен', rating: 5, text: 'Лучшие роллы в городе! Филадельфия просто тает во рту. Доставка быстрая.', photo: '', date: new Date().toISOString(), approved: true },
    { id: 'r2', name: 'Сардана', rating: 4, text: 'Вкусно, но Том Ям оказался слишком острым для меня. В следующий раз закажу что-то помягче.', photo: '', date: new Date().toISOString(), approved: true }
];

const DEFAULT_NEWS = [
    { id: 1, title: 'Новое поступление: Свежий лосось', text: 'Мы получили партию свежайшего лосося из Мурманска. Приходите пробовать наши обновленные роллы!', img: 'https://kitagawa.su/pictures/carousel/5271.jpg', date: new Date().toISOString(), published: true, author: 'Редактор' }
];

/* ==================== ХРАНИЛИЩЕ ==================== */
const load = (key, def) => { try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : def; } catch (e) { return def; } };
const save = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { showToast('Ошибка сохранения'); } };

let menuData = load(KEYS.menu, DEFAULT_MENU);
let ordersData = load(KEYS.orders, []);
let reviewsData = load(KEYS.reviews, DEFAULT_REVIEWS);
let newsData = load(KEYS.news, DEFAULT_NEWS);
let usersData = load(KEYS.users, DEFAULT_USERS);
let cart = load(KEYS.cart, {});

/* ==================== УТИЛИТЫ ==================== */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => n.toLocaleString('ru-RU');
const escapeHtml = str => String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtDate = iso => new Date(iso).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' });

let toastTimer;
function showToast(msg) {
    let el = document.getElementById('toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

function resizeImage(file, maxW = 800, quality = 0.8) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                let w = img.width, h = img.height;
                if (w > maxW) { h = h * maxW / w; w = maxW; }
                const c = document.createElement('canvas'); c.width = w; c.height = h;
                c.getContext('2d').drawImage(img, 0, 0, w, h);
                resolve(c.toDataURL('image/jpeg', quality));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

/* ==================== КОРЗИНА ==================== */
function addToCart(id) {
    const item = menuData.find(m => m.id === Number(id));
    if (!item) return;
    cart[id] = (cart[id] || 0) + 1;
    save(KEYS.cart, cart);
    updateCartUI();
    openCart();
}

function removeFromCart(id) {
    if (cart[id]) {
        cart[id]--;
        if (cart[id] <= 0) delete cart[id];
    }
    save(KEYS.cart, cart);
    updateCartUI();
}

function updateCartUI() {
    const countEl = $('#cartCount');
    const itemsEl = $('#cartItems');
    const totalEl = $('#cartTotal');
    if (!countEl) return;

    let totalItems = 0, totalPrice = 0;
    countEl.textContent = Object.values(cart).reduce((a, b) => a + b, 0);

    if (itemsEl && totalEl) {
        itemsEl.innerHTML = '';
        const keys = Object.keys(cart);
        if (keys.length === 0) {
            itemsEl.innerHTML = '<p style="text-align:center; color:#888; margin-top:40px;">Корзина пуста</p>';
        } else {
            keys.forEach(id => {
                const item = menuData.find(m => m.id === Number(id));
                const qty = cart[id];
                if (item) {
                    totalPrice += item.price * qty;
                    itemsEl.innerHTML += `
                        <div class="cart-item">
                            <div class="cart-item-img" style="background-image:url(${item.img || PLACEHOLDER}); background-size:cover;"></div>
                            <div class="cart-item-info">
                                <div class="cart-item-title">${item.title}</div>
                                <div class="cart-item-price">${fmt(item.price)} ₽</div>
                                <div class="qty-controls">
                                    <button class="qty-btn" onclick="removeFromCart(${item.id})">−</button>
                                    <span>${qty}</span>
                                    <button class="qty-btn" onclick="addToCart(${item.id})">+</button>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
        }
        totalEl.textContent = `${fmt(totalPrice)} ₽`;
    }
}

function openCart() { $('#cartSidebar')?.classList.add('open'); $('#cartOverlay')?.classList.add('open'); document.body.classList.add('locked'); }
function closeCart() { $('#cartSidebar')?.classList.remove('open'); $('#cartOverlay')?.classList.remove('open'); document.body.classList.remove('locked'); }

/* ==================== РЕНДЕР ДЛЯ КЛИЕНТОВ ==================== */
function renderMenu(category = 'all') {
    const grid = $('#menuGrid');
    if (!grid) return;
    
    const filtered = category === 'all' ? menuData : menuData.filter(m => m.category === category);
    
    grid.innerHTML = filtered.map(item => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${item.img || PLACEHOLDER}" alt="${item.title}" loading="lazy" onerror="this.src='${PLACEHOLDER}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${escapeHtml(item.title)}</h3>
                <p class="product-desc">${escapeHtml(item.desc)}</p>
                <div class="product-bottom">
                    <span class="product-price">${fmt(item.price)} ₽</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderNews() {
    const grid = $('#newsGrid');
    if (!grid) return;
    const published = newsData.filter(n => n.published).sort((a,b) => new Date(b.date) - new Date(a.date));
    
    if (published.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Пока нет новостей.</p>';
        return;
    }
    
    grid.innerHTML = published.map(n => `
        <div class="news-card">
            <div class="news-image" style="background-image:url(${n.img || PLACEHOLDER})"></div>
            <div class="news-content">
                <span class="news-date">${fmtDate(n.date)}</span>
                <h3>${escapeHtml(n.title)}</h3>
                <p>${escapeHtml(n.text)}</p>
                <div class="news-author">✍️ ${escapeHtml(n.author || 'Редактор')}</div>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const grid = $('#reviewsGrid');
    if (!grid) return;
    const approved = reviewsData.filter(r => r.approved).sort((a,b) => new Date(b.date) - new Date(a.date));
    
    if (approved.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Пока нет отзывов.</p>';
        return;
    }
    
    grid.innerHTML = approved.map(r => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${r.name.charAt(0).toUpperCase()}</div>
                <div>
                    <div class="review-name">${escapeHtml(r.name)}</div>
                    <div class="review-date">${fmtDate(r.date)}</div>
                </div>
            </div>
            <div class="review-stars" style="color:var(--accent-color);">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
            <div class="review-text">${escapeHtml(r.text)}</div>
            ${r.photo ? `<div class="review-photo"><img src="${r.photo}"></div>` : ''}
        </div>
    `).join('');
}

/* ==================== АДМИНКА ==================== */
let currentUser = null;

function tryLogin() {
    const login = $('#loginUser').value.trim();
    const pass = $('#loginPass').value;
    const user = usersData.find(u => u.login === login && u.password === pass);
    
    if (user) {
        currentUser = user;
        sessionStorage.setItem(KEYS.session, JSON.stringify(user));
        initAdminPanel();
    } else {
        showToast('Неверный логин или пароль!');
    }
}

function checkAuth() {
    const session = sessionStorage.getItem(KEYS.session);
    if (session) {
        currentUser = JSON.parse(session);
        initAdminPanel();
    }
}

function logout() {
    sessionStorage.removeItem(KEYS.session);
    location.reload();
}

function initAdminPanel() {
    $('#loginScreen').style.display = 'none';
    $('#adminPanel').style.display = 'flex';
    $('#adminUserInfo').innerHTML = `
        <span>${currentUser.name}</span>
        <span class="role-badge" style="background:${ROLES[currentUser.role].color}">${ROLES[currentUser.role].label}</span>
    `;
    
    renderAdminTabs();
    
    const allowedTabs = ALL_TABS.filter(t => ROLE_PERMISSIONS[currentUser.role].includes(t.key));
    if (allowedTabs.length > 0) switchAdminTab(allowedTabs[0].key);
}

function renderAdminTabs() {
    const tabs = $('#adminTabs');
    const allowedTabs = ALL_TABS.filter(t => ROLE_PERMISSIONS[currentUser.role].includes(t.key));
    tabs.innerHTML = allowedTabs.map(t => `<button onclick="switchAdminTab('${t.key}')" data-tab="${t.key}">${t.label}</button>`).join('');
}

function switchAdminTab(key) {
    $$('.tab-content').forEach(c => c.classList.remove('active'));
    $('#tab-' + key)?.classList.add('active');
    
    $$('#adminTabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === key));

    if (key === 'menu') renderAdminMenu();
    if (key === 'news') renderAdminNews();
    if (key === 'reviews') renderAdminReviews();
    if (key === 'orders') renderAdminOrders();
    if (key === 'users') renderAdminUsers();
}

// --- АДМИН: МЕНЮ ---
function renderAdminMenu() {
    const tbody = $('#adminMenuTable');
    if (!tbody) return;
    
    tbody.innerHTML = menuData.map(m => `
        <tr>
            <td><img src="${m.img || PLACEHOLDER}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;" onerror="this.src='${PLACEHOLDER}'"></td>
            <td><b>${escapeHtml(m.title)}</b><br><small style="color:var(--text-muted)">${m.category}</small></td>
            <td>${fmt(m.price)} ₽</td>
            <td>
                <button class="action-btn" onclick="editMenuItem(${m.id})">✏️</button>
                <button class="action-btn danger" onclick="deleteMenuItem(${m.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

function addMenuItem() {
    const title = $('#newTitle').value.trim();
    const price = parseInt($('#newPrice').value);
    const category = $('#newCategory').value;
    const desc = $('#newDesc') ? $('#newDesc').value.trim() : 'Вкусное блюдо';
    
    if (!title || !price) { showToast('Заполните название и цену'); return; }
    
    const newItem = {
        id: Date.now(),
        title, price, category, desc,
        img: PLACEHOLDER
    };
    
    const fileInput = $('#newImage');
    if (fileInput && fileInput.files.length > 0) {
        resizeImage(fileInput.files[0]).then(base64 => {
            newItem.img = base64;
            menuData.push(newItem);
            save(KEYS.menu, menuData);
            renderAdminMenu();
            showToast('Блюдо добавлено');
            fileInput.value = '';
        });
    } else {
        menuData.push(newItem);
        save(KEYS.menu, menuData);
        renderAdminMenu();
        showToast('Блюдо добавлено');
    }
    
    $('#newTitle').value = '';
    $('#newPrice').value = '';
}

function deleteMenuItem(id) {
    if (confirm('Удалить блюдо?')) {
        menuData = menuData.filter(m => m.id !== id);
        save(KEYS.menu, menuData);
        renderAdminMenu();
        showToast('Блюдо удалено');
    }
}

function editMenuItem(id) {
    const item = menuData.find(m => m.id === id);
    if (!item) return;
    
    const newTitle = prompt('Название:', item.title);
    if (newTitle === null) return;
    const newPrice = prompt('Цена:', item.price);
    if (newPrice === null) return;
    
    item.title = newTitle || item.title;
    item.price = parseInt(newPrice) || item.price;
    
    save(KEYS.menu, menuData);
    renderAdminMenu();
    showToast('Блюдо обновлено');
}

// --- АДМИН: ЗАКАЗЫ ---
function renderAdminOrders() {
    const tbody = $('#adminOrdersTable');
    if (!tbody) return;
    
    if (ordersData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Заказов пока нет</td></tr>';
        return;
    }
    
    tbody.innerHTML = ordersData.map(o => `
        <tr>
            <td>${o.id}</td>
            <td>${o.customer?.name || 'Гость'}</td>
            <td>${fmt(o.total)} ₽</td>
            <td><span class="status-badge ${STATUSES[o.status]?.cls || 'status-new'}">${STATUSES[o.status]?.label || 'Новый'}</span></td>
            <td>
                <select onchange="changeOrderStatus('${o.id}', this.value)" style="padding:5px; border-radius:5px; border: 1px solid var(--border-color);">
                    ${Object.entries(STATUSES).map(([k, v]) => `<option value="${k}" ${o.status === k ? 'selected' : ''}>${v.label}</option>`).join('')}
                </select>
            </td>
        </tr>
    `).join('');
}

function changeOrderStatus(id, newStatus) {
    const order = ordersData.find(o => o.id === id);
    if (order) {
        order.status = newStatus;
        save(KEYS.orders, ordersData);
        renderAdminOrders();
        showToast('Статус обновлен');
    }
}

// --- АДМИН: ОТЗЫВЫ ---
function renderAdminReviews() {
    const tbody = $('#adminReviewsList');
    if (!tbody) return;
    
    tbody.innerHTML = reviewsData.map(r => `
        <div class="review-card" style="margin-bottom:15px; display:flex; gap:20px; align-items:flex-start; padding:20px; border: 1px solid var(--border-color);">
            <div style="flex:1;">
                <h4 style="margin-bottom:5px;">${escapeHtml(r.name)} <span style="color:var(--accent-color)">${'★'.repeat(r.rating)}</span></h4>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:10px;">${escapeHtml(r.text)}</p>
                ${r.photo ? `<img src="${r.photo}" style="max-height:100px; border-radius:8px;">` : ''}
                <div style="font-size:0.8rem; color:#999; margin-top:10px;">${fmtDate(r.date)}</div>
            </div>
            <div>
                ${!r.approved ? `<button class="btn btn-sm" onclick="approveReview('${r.id}')" style="background:#2e7d32; padding: 8px 15px; font-size: 0.8rem; margin-bottom: 5px; display: block; width: 100%;">Одобрить</button>` : ''}
                <button class="action-btn danger" onclick="deleteReview('${r.id}')" style="width: 100%;">Удалить</button>
            </div>
        </div>
    `).join('');
}

function approveReview(id) {
    const r = reviewsData.find(x => x.id === id);
    if (r) { r.approved = true; save(KEYS.reviews, reviewsData); renderAdminReviews(); showToast('Отзыв одобрен'); }
}

function deleteReview(id) {
    if (confirm('Удалить отзыв?')) {
        reviewsData = reviewsData.filter(x => x.id !== id);
        save(KEYS.reviews, reviewsData);
        renderAdminReviews();
    }
}

// --- АДМИН: НОВОСТИ ---
function renderAdminNews() {
    const tbody = $('#adminNewsList');
    if (!tbody) return;
    
    tbody.innerHTML = newsData.map(n => `
        <tr>
            <td><img src="${n.img || PLACEHOLDER}" style="width:40px;height:40px;object-fit:cover;border-radius:5px;" onerror="this.src='${PLACEHOLDER}'"></td>
            <td>${escapeHtml(n.title)}</td>
            <td>${n.published ? 'Да' : 'Нет'}</td>
            <td>
                <button class="action-btn" onclick="toggleNews(${n.id})">${n.published ? 'Скрыть' : 'Опубл.'}</button>
                <button class="action-btn danger" onclick="deleteNews(${n.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

function addNews() {
    const title = $('#newsTitle').value.trim();
    const text = $('#newsText').value.trim();
    if (!title || !text) { showToast('Заполните поля'); return; }
    
    const newNews = {
        id: Date.now(),
        title, text,
        img: PLACEHOLDER,
        date: new Date().toISOString(),
        published: true,
        author: currentUser.name
    };

    const fileInput = $('#newsImage');
    if (fileInput && fileInput.files.length > 0) {
        resizeImage(fileInput.files[0]).then(base64 => {
            newNews.img = base64;
            newsData.push(newNews);
            save(KEYS.news, newsData);
            renderAdminNews();
            showToast('Новость добавлена');
            fileInput.value = '';
        });
    } else {
        newsData.push(newNews);
        save(KEYS.news, newsData);
        renderAdminNews();
        showToast('Новость добавлена');
    }
    
    $('#newsTitle').value = '';
    $('#newsText').value = '';
}

function toggleNews(id) {
    const n = newsData.find(x => x.id === id);
    if (n) { n.published = !n.published; save(KEYS.news, newsData); renderAdminNews(); }
}

function deleteNews(id) {
    if (confirm('Удалить новость?')) {
        newsData = newsData.filter(x => x.id !== id);
        save(KEYS.news, newsData);
        renderAdminNews();
    }
}

// --- АДМИН: ЮЗЕРЫ ---
function renderAdminUsers() {
    const tbody = $('#adminUsersList');
    if (!tbody) return;
    
    tbody.innerHTML = usersData.map(u => `
        <tr>
            <td>${escapeHtml(u.name)}</td>
            <td>${u.login}</td>
            <td><span class="role-badge" style="background:${ROLES[u.role].color}">${ROLES[u.role].label}</span></td>
            <td>${u.id !== currentUser.id ? `<button class="action-btn danger" onclick="deleteUser(${u.id})">🗑</button>` : 'Вы'}</td>
        </tr>
    `).join('');
}

function addUser() {
    const name = $('#userName').value.trim();
    const login = $('#userLogin').value.trim();
    const pass = $('#userPass').value;
    const role = $('#userRole').value;
    
    if (!name || !login || !pass) { showToast('Заполните поля'); return; }
    
    if (usersData.some(u => u.login === login)) { showToast('Логин занят'); return; }
    
    usersData.push({ id: Date.now(), name, login, password: pass, role });
    save(KEYS.users, usersData);
    renderAdminUsers();
    showToast('Пользователь добавлен');
}

function deleteUser(id) {
    if (confirm('Удалить пользователя?')) {
        usersData = usersData.filter(u => u.id !== id);
        save(KEYS.users, usersData);
        renderAdminUsers();
    }
}

/* ==================== ИНИЦИАЛИЗАЦИЯ ==================== */
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    
    // Корзина
    const openBtn = $('#openCartBtn');
    if (openBtn) openBtn.addEventListener('click', openCart);
    const closeBtn = $('#closeCartBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    const overlay = $('#cartOverlay');
    if (overlay) overlay.addEventListener('click', closeCart);
    
    // Чекаут
    const checkoutBtn = $('#checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (Object.keys(cart).length === 0) { showToast('Корзина пуста!'); return; }
            
            const total = Object.keys(cart).reduce((sum, id) => {
                const item = menuData.find(m => m.id === Number(id));
                return sum + (item ? item.price * cart[id] : 0);
            }, 0);
            
            ordersData.unshift({
                id: 'ORD-' + Math.floor(Math.random() * 10000),
                customer: { name: 'Гость', phone: '+7...' }, 
                total,
                status: 'new',
                date: new Date().toISOString()
            });
            save(KEYS.orders, ordersData);
            
            showToast('Заказ оформлен! Мы свяжемся с вами.');
            cart = {};
            save(KEYS.cart, cart);
            updateCartUI();
            closeCart();
        });
    }

    // Категории
    const catContainer = $('#categories');
    if (catContainer) {
        catContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-pill')) {
                $$('.category-pill').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderMenu(e.target.dataset.category);
            }
        });
    }

    // Роутинг по страницам
    if (document.getElementById('menuGrid')) renderMenu();
    if (document.getElementById('newsGrid')) renderNews();
    if (document.getElementById('reviewsGrid')) renderReviews();
    
    // Отзывы (форма)
    if (document.getElementById('reviewForm')) {
        let selectedRating = 0;
        const starsInput = $('#starInput');
        if (starsInput) {
            starsInput.innerHTML = [1,2,3,4,5].map(i => `<span data-val="${i}">★</span>`).join('');
            starsInput.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN') {
                    selectedRating = Number(e.target.dataset.val);
                    $$('#starInput span').forEach((s, idx) => s.classList.toggle('active', idx < selectedRating));
                }
            });
        }

        const form = $('#reviewForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (selectedRating === 0) { showToast('Поставьте оценку!'); return; }
            const name = $('#revName').value.trim();
            const text = $('#revText').value.trim();
            if (!name || !text) { showToast('Заполните все поля!'); return; }
            
            reviewsData.unshift({
                id: 'r_' + Date.now(),
                name, text,
                rating: selectedRating,
                photo: '',
                date: new Date().toISOString(),
                approved: false
            });
            save(KEYS.reviews, reviewsData);
            form.reset();
            selectedRating = 0;
            $$('#starInput span').forEach(s => s.classList.remove('active'));
            showToast('Отзыв отправлен на модерацию!');
        });
    }

    // Админка
    if (document.getElementById('loginScreen')) {
        checkAuth();
    }
});