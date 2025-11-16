// API для работы с пользователями
class UserAPI {
    constructor() {
        this.baseURL = 'http://localhost:5000/api';
    }

    async registerStudent(userData) {
        try {
            const response = await fetch(`${this.baseURL}/register/student`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            return await response.json();
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Ошибка соединения с сервером' };
        }
    }

    async login(credentials) {
        try {
            const response = await fetch(`${this.baseURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });
            return await response.json();
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Ошибка соединения с сервером' };
        }
    }

    async changePassword(data) {
        try {
            const response = await fetch(`${this.baseURL}/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Password change error:', error);
            return { success: false, message: 'Ошибка соединения с сервером' };
        }
    }
}

// Инициализация API
window.userAPI = new UserAPI();

// Current state
let currentLanguage = localStorage.getItem('preferredLanguage') || 'kk';
let sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

// Data storage with images
let newsData = JSON.parse(localStorage.getItem('newsData')) || [
    {
        id: 1,
        title: {
            kk: "Жаңа оқу жылының басталуы",
            ru: "Начало нового учебного года", 
            en: "Start of the New Academic Year"
        },
        content: {
            kk: "2024-2025 оқу жылы ресми түрде басталды. Барлық оқушыларға сәтті оқу жылы тілейміз! Бұл жылда біз жаңа IT бағдарламаларын енгіземіз және оқу үрдісін жақсартамыз. Мектепте Python, Java, веб-әзірлеу және киберқауіпсіздік бағыттары бойынша жаңа курстар ашылды.",
            ru: "2024-2025 учебный год официально начался. Желаем всем ученикам успешного учебного года! В этом году мы внедряем новые IT-программы и улучшаем учебный процесс. В школе открыты новые курсы по направлениям: Python, Java, веб-разработка и кибербезопасность.",
            en: "The 2024-2025 academic year has officially begun. We wish all students a successful academic year! This year we are introducing new IT programs and improving the educational process. New courses have been opened in the school in the areas of Python, Java, web development and cybersecurity."
        },
        date: "2024-09-01",
        formattedDate: {
            kk: "1 Қыркүйек 2024",
            ru: "1 Сентября 2024",
            en: "September 1, 2024"
        },
        banner: null,
        image: null,
        links: [
            {
                title: "Оқу жылының кестесі",
                url: "https://example.com/schedule"
            },
            {
                title: "IT курстар туралы ақпарат", 
                url: "https://example.com/it-courses"
            }
        ]
    }
];

let eventsData = JSON.parse(localStorage.getItem('eventsData')) || [
    {
        id: 1,
        title: {
            kk: "Мектеп туры",
            ru: "Тур по школе",
            en: "School Tour"
        },
        description: {
            kk: "Жаңа оқушыларға арналған мектеп туры. Мектеп инфрақұрылымымен танысыңыз, мұғалімдермен кездесіңіз және болашақ сынып достарыңызбен танысыңыз.",
            ru: "Тур по школе для новых учеников. Познакомьтесь с инфраструктурой школы, встретьтесь с учителями и познакомьтесь с будущими одноклассниками.",
            en: "School tour for new students. Get acquainted with the school infrastructure, meet teachers and get to know your future classmates."
        },
        date: "2024-09-05",
        formattedDate: {
            kk: "5 Қыркүйек 2024",
            ru: "5 Сентября 2024",
            en: "September 5, 2024"
        },
        banner: null,
        image: null,
        links: [
            {
                title: "Тур брондау",
                url: "https://example.com/tour-booking"
            }
        ]
    }
];

// Teachers data
const teachersData = [
    {
        id: 1,
        name: "Әлия Жумабекова",
        subject: {
            kk: "Математика",
            ru: "Математика", 
            en: "Mathematics"
        },
        phone: "+7 701 123 45 67",
        email: "alia@itlyceum.edu.kz",
        experience: {
            kk: "15 жыл",
            ru: "15 лет",
            en: "15 years"
        },
        degree: "PhD",
        bio: {
            kk: "Жоғары математика саласындағы маман. Оқушыларға күрделі тақырыптарды қарапайым түрде түсіндіруге қабілетті.",
            ru: "Специалист в области высшей математики. Способна объяснять сложные темы простым способом ученикам.",
            en: "Specialist in higher mathematics. Able to explain complex topics in a simple way to students."
        },
        image: null
    }
];

// Students data  
const studentsData = [
    {
        id: 1,
        name: "Ержигит Мансур",
        class: "10А",
        achievement: {
            kk: "Республикалық IT олимпиадасының жеңімпазы",
            ru: "Победитель Республиканской IT олимпиады",
            en: "Winner of Republican IT Olympiad"
        },
        score: "4.9",
        awards: {
            kk: ["Бірінші орын", "Ең үздік код"],
            ru: ["Первое место", "Лучший код"],
            en: ["First Place", "Best Code"]
        },
        image: null
    }
];

// Calendar functionality
class Calendar {
    constructor(inputId) {
        this.inputId = inputId;
        this.selectedDate = null;
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.init();
    }

    init() {
        this.createCalendar();
        this.attachEventListeners();
    }

    createCalendar() {
        const input = document.getElementById(this.inputId);
        if (!input) return;

        // Create calendar container
        const calendarContainer = document.createElement('div');
        calendarContainer.className = 'calendar-container';
        
        // Create calendar dropdown
        const calendarDropdown = document.createElement('div');
        calendarDropdown.className = 'calendar-dropdown';
        calendarDropdown.innerHTML = this.getCalendarHTML();
        
        calendarContainer.appendChild(calendarDropdown);
        input.parentNode.appendChild(calendarContainer);
        
        this.calendarDropdown = calendarDropdown;
    }

    getCalendarHTML() {
        const monthNames = {
            kk: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
            ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        };

        const weekdays = {
            kk: ['Жк', 'Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн'],
            ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        };

        const t = monthNames[currentLanguage] || monthNames.kk;
        const w = weekdays[currentLanguage] || weekdays.kk;

        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        let calendarHTML = `
            <div class="calendar-header">
                <button class="calendar-nav prev-month" data-action="prev">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="calendar-title">${t[this.currentMonth]} ${this.currentYear}</div>
                <button class="calendar-nav next-month" data-action="next">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="calendar-grid">
        `;

        // Weekdays
        for (let i = 0; i < 7; i++) {
            calendarHTML += `<div class="calendar-weekday">${w[i]}</div>`;
        }

        // Empty cells for previous month
        for (let i = 0; i < startingDay; i++) {
            calendarHTML += `<button class="calendar-day other-month">${new Date(this.currentYear, this.currentMonth, -i).getDate()}</button>`;
        }

        // Current month days
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
            
            let dayClass = 'calendar-day';
            if (isToday) dayClass += ' today';
            if (isSelected) dayClass += ' selected';
            
            calendarHTML += `<button class="${dayClass}" data-day="${day}">${day}</button>`;
        }

        // Empty cells for next month
        const totalCells = 42;
        const remainingCells = totalCells - (startingDay + daysInMonth);
        for (let i = 1; i <= remainingCells; i++) {
            calendarHTML += `<button class="calendar-day other-month">${i}</button>`;
        }

        calendarHTML += `
            </div>
            <div class="calendar-actions">
                <button class="btn btn-outline btn-sm" id="calendarToday">
                    ${currentLanguage === 'kk' ? 'Бүгін' : currentLanguage === 'ru' ? 'Сегодня' : 'Today'}
                </button>
                <button class="btn btn-primary btn-sm" id="calendarSelect">
                    ${currentLanguage === 'kk' ? 'Таңдау' : currentLanguage === 'ru' ? 'Выбрать' : 'Select'}
                </button>
            </div>
        `;

        return calendarHTML;
    }

    attachEventListeners() {
        const input = document.getElementById(this.inputId);
        
        // Show calendar on input click
        input.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleCalendar();
        });

        // Close calendar when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.calendar-container')) {
                this.hideCalendar();
            }
        });

        // Update calendar when language changes
        document.addEventListener('languageChanged', () => {
            this.updateCalendar();
        });
    }

    toggleCalendar() {
        this.calendarDropdown.classList.toggle('show');
        if (this.calendarDropdown.classList.contains('show')) {
            this.updateCalendar();
        }
    }

    hideCalendar() {
        this.calendarDropdown.classList.remove('show');
    }

    updateCalendar() {
        this.calendarDropdown.innerHTML = this.getCalendarHTML();
        this.attachCalendarEvents();
    }

    attachCalendarEvents() {
        // Month navigation
        this.calendarDropdown.querySelector('.prev-month').addEventListener('click', () => {
            this.navigateMonth(-1);
        });

        this.calendarDropdown.querySelector('.next-month').addEventListener('click', () => {
            this.navigateMonth(1);
        });

        // Day selection
        this.calendarDropdown.querySelectorAll('.calendar-day:not(.other-month)').forEach(day => {
            day.addEventListener('click', () => {
                this.selectDay(parseInt(day.getAttribute('data-day')));
            });
        });

        // Today button
        this.calendarDropdown.querySelector('#calendarToday').addEventListener('click', () => {
            this.selectToday();
        });

        // Select button
        this.calendarDropdown.querySelector('#calendarSelect').addEventListener('click', () => {
            this.finalizeSelection();
        });
    }

    navigateMonth(direction) {
        this.currentMonth += direction;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.updateCalendar();
    }

    selectDay(day) {
        this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
        this.updateCalendar();
    }

    selectToday() {
        const today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        this.selectedDate = today;
        this.updateCalendar();
    }

    finalizeSelection() {
        if (this.selectedDate) {
            const input = document.getElementById(this.inputId);
            const formattedDate = this.formatDate(this.selectedDate);
            input.value = formattedDate;
            this.hideCalendar();
            
            input.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    getFormattedDateForDisplay(dateString) {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        const formats = {
            kk: {
                day: date.getDate(),
                month: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'][date.getMonth()],
                year: date.getFullYear()
            },
            ru: {
                day: date.getDate(),
                month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][date.getMonth()],
                year: date.getFullYear()
            },
            en: {
                day: date.getDate(),
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()],
                year: date.getFullYear()
            }
        };
        
        const format = formats[currentLanguage] || formats.kk;
        return `${format.day} ${format.month} ${format.year}`;
    }
}

// Функция для создания поля ссылки
function createLinkField(linkData = { title: '', url: '' }) {
    const t = currentLanguage === 'kk' ? {
        linkTitle: "Сілтеме атауы",
        linkUrl: "URL мекенжайы", 
        removeLink: "Жою"
    } : currentLanguage === 'ru' ? {
        linkTitle: "Название ссылки",
        linkUrl: "URL адрес",
        removeLink: "Удалить"
    } : {
        linkTitle: "Link Title",
        linkUrl: "URL Address", 
        removeLink: "Remove"
    };

    const linkField = document.createElement('div');
    linkField.className = 'link-field';
    
    linkField.innerHTML = `
        <div style="flex: 1;">
            <input type="text" class="form-input link-title-input" placeholder="${t.linkTitle}" 
                   value="${linkData.title}" data-link-title>
        </div>
        <div style="flex: 2;">
            <input type="url" class="form-input link-url-input" placeholder="https://example.com" 
                   value="${linkData.url}" data-link-url>
        </div>
        <button type="button" class="btn btn-outline btn-sm remove-link-btn" data-remove-link style="white-space: nowrap;">
            <i class="fas fa-times"></i>
            ${t.removeLink}
        </button>
    `;
    
    const removeBtn = linkField.querySelector('.remove-link-btn');
    removeBtn.addEventListener('click', function() {
        linkField.remove();
    });
    
    return linkField;
}

// Функция для получения данных ссылок из формы
function getLinksFromForm(containerId) {
    const links = [];
    const linkFields = document.querySelectorAll(`#${containerId} .link-field`);
    
    linkFields.forEach(field => {
        const titleInput = field.querySelector('[data-link-title]');
        const urlInput = field.querySelector('[data-link-url]');
        
        if (titleInput.value.trim() && urlInput.value.trim()) {
            let url = urlInput.value.trim();
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            links.push({
                title: titleInput.value.trim(),
                url: url
            });
        }
    });
    
    return links;
}

// Initialize main application
function initializeMainApp() {
    console.log('🚀 Initializing main application...');
    
    // Apply saved sidebar state
    if (sidebarCollapsed) {
        document.getElementById('sidebar').classList.add('collapsed');
    }
    
    setupNavigation();
    setupSidebar();
    setupTheme();
    setupLanguage();
    setupMobileMenu();
    setupLogout();
    loadPage('school');
    
    updateBreadcrumb('school');
    updateUserInterface();
}

function updateUserInterface() {
    const currentUser = window.authSystem?.getCurrentUser();
    if (!currentUser) return;
    
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');
    const userAvatarMobile = document.getElementById('userAvatarMobile');
    
    if (userName) userName.textContent = currentUser.fullName;
    if (userAvatar) userAvatar.textContent = getInitials(currentUser.fullName);
    if (userAvatarMobile) userAvatarMobile.textContent = getInitials(currentUser.fullName);
    
    toggleAdminFeatures(currentUser.role === 'Адмін');
}

function toggleAdminFeatures(isAdmin) {
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(el => {
        el.style.display = isAdmin ? 'block' : 'none';
    });
    
    document.body.setAttribute('data-user-role', isAdmin ? 'admin' : 'user');
}

function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const sidebar = document.getElementById('sidebar');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const userBtnMobile = document.getElementById('userBtnMobile');

    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', function() {
            toggleTheme();
        });
    }

    if (userBtnMobile) {
        userBtnMobile.addEventListener('click', function() {
            loadPage('profile');
            // Close mobile menu if open
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close sidebar when menu item is clicked on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (e.target.closest('.menu-item') && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

function setupSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                // On mobile, close sidebar instead of collapsing
                sidebar.classList.remove('active');
                document.getElementById('mobileMenuOverlay').classList.remove('active');
                document.body.style.overflow = '';
            } else {
                // On desktop, toggle collapse
                sidebarCollapsed = !sidebarCollapsed;
                
                sidebar.classList.add('animating');
                
                setTimeout(() => {
                    sidebar.classList.toggle('collapsed', sidebarCollapsed);
                    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
                    
                    setTimeout(() => {
                        sidebar.classList.remove('animating');
                    }, 400);
                }, 10);
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 1024) {
                sidebar.classList.add('mobile');
                if (!sidebar.classList.contains('active')) {
                    sidebar.style.transform = 'translateX(-100%)';
                }
            } else {
                sidebar.classList.remove('mobile');
                sidebar.classList.remove('active');
                sidebar.style.transform = '';
                document.body.style.overflow = '';
            }
        });

        // Initialize on load
        if (window.innerWidth <= 1024) {
            sidebar.classList.add('mobile');
            sidebar.style.transform = 'translateX(-100%)';
        }
    }
    
    console.log('✅ Sidebar setup complete');
}

function setupNavigation() {
    const menuItems = document.querySelectorAll('.menu-item[data-page]');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const pageId = this.getAttribute('data-page');
            loadPage(pageId);
        });
    });
    
    console.log('✅ Navigation setup complete');
}

function updateBreadcrumb(pageId) {
    const breadcrumb = document.querySelector('.page-name');
    const pageNames = {
        school: { kk: 'Мектеп туралы', ru: 'О школе', en: 'About School' },
        news: { kk: 'Жаңалықтар', ru: 'Новости', en: 'News' },
        teachers: { kk: 'Мұғалімдер', ru: 'Учителя', en: 'Teachers' },
        students: { kk: 'Оқушылар', ru: 'Ученики', en: 'Students' },
        events: { kk: 'Іс-шаралар', ru: 'Мероприятия', en: 'Events' },
        profile: { kk: 'Жеке кабинет', ru: 'Личный кабинет', en: 'Profile' }
    };
    
    if (breadcrumb && pageNames[pageId]) {
        breadcrumb.textContent = pageNames[pageId][currentLanguage] || pageNames[pageId]['kk'];
    }
}

function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.body.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    console.log('✅ Theme setup complete');
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeMessages = {
        kk: `Тақырып ${newTheme === 'dark' ? 'қараңғы' : 'ақ'} режиміне ауыстырылды`,
        ru: `Тема переключена в ${newTheme === 'dark' ? 'темный' : 'светлый'} режим`,
        en: `Theme switched to ${newTheme === 'dark' ? 'dark' : 'light'} mode`
    };
    
    showNotification(themeMessages[currentLanguage] || themeMessages['kk']);
}

function setupLanguage() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-switcher')) {
                langDropdown.classList.remove('show');
            }
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                langDropdown.classList.remove('show');
            });
        });
    }
    
    console.log('✅ Language setup complete');
}

function setupLogout() {
    console.log('✅ Logout available only in profile page');
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang.toUpperCase();
    }
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translations = {
            school: { kk: 'Мектеп туралы', ru: 'О школе', en: 'About School' },
            news: { kk: 'Жаңалықтар', ru: 'Новости', en: 'News' },
            teachers: { kk: 'Мұғалімдер', ru: 'Учителя', en: 'Teachers' },
            students: { kk: 'Оқушылар', ru: 'Ученики', en: 'Students' },
            events: { kk: 'Іс-шаралар', ru: 'Мероприятия', en: 'Events' },
            profile: { kk: 'Жеке кабинет', ru: 'Личный кабинет', en: 'Profile' }
        };
        
        if (translations[key]) {
            element.textContent = translations[key][lang] || translations[key]['kk'];
        }
    });
    
    const authTitle = document.getElementById('authTitle');
    const loginLabel = document.getElementById('loginLabel');
    const passwordLabel = document.getElementById('passwordLabel');
    const loginBtnText = document.getElementById('loginBtnText');
    
    if (authTitle) authTitle.textContent = { kk: 'Жүйеге кіру', ru: 'Вход в систему', en: 'Login to System' }[lang];
    if (loginLabel) loginLabel.textContent = { kk: 'Логин', ru: 'Логин', en: 'Login' }[lang];
    if (passwordLabel) passwordLabel.textContent = { kk: 'Құпия сөз', ru: 'Пароль', en: 'Password' }[lang];
    if (loginBtnText) loginBtnText.textContent = { kk: 'Кіру/Тіркелу', ru: 'Вход/Регистрация', en: 'Login/Register' }[lang];
    
    const currentPage = document.querySelector('.menu-item.active')?.getAttribute('data-page');
    if (currentPage) {
        updateBreadcrumb(currentPage);
        loadPage(currentPage);
    }
    
    const langMessages = {
        kk: 'Тіл қазақша ауыстырылды',
        ru: 'Язык изменен на русский',
        en: 'Language changed to English'
    };
    
    showNotification(langMessages[lang] || langMessages['kk']);
    
    document.dispatchEvent(new CustomEvent('languageChanged'));
}

function loadPage(pageId) {
    const contentArea = document.getElementById('content');
    
    contentArea.style.opacity = '0';
    contentArea.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        const pageTemplates = {
            school: getSchoolPage(),
            news: getNewsPage(),
            teachers: getTeachersPage(),
            students: getStudentsPage(),
            events: getEventsPage(),
            profile: getProfilePage()
        };

        if (pageTemplates[pageId]) {
            contentArea.innerHTML = pageTemplates[pageId];
            
            setTimeout(() => {
                contentArea.style.opacity = '1';
                contentArea.style.transform = 'translateY(0)';
            }, 50);
            
            initializePage(pageId);
        }
        
        console.log(`📄 Loaded page: ${pageId}`);
    }, 200);
}

// Utility functions
function getRandomColor() {
    const colors = ['#2563eb', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#6b7280'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function showNotification(message, type = 'success') {
    if (window.authSystem) {
        window.authSystem.showNotification(message, type);
    }
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function formatDateForDisplay(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const formats = {
        kk: {
            day: date.getDate(),
            month: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'][date.getMonth()],
            year: date.getFullYear()
        },
        ru: {
            day: date.getDate(),
            month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][date.getMonth()],
            year: date.getFullYear()
        },
        en: {
            day: date.getDate(),
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()],
            year: date.getFullYear()
        }
    };
    
    const format = formats[currentLanguage] || formats.kk;
    return `${format.day} ${format.month} ${format.year}`;
}

// Красивое модальное окно для подробной информации
function showDetailModal(type, id) {
    let item, title, content, date, links;
    
    if (type === 'news') {
        item = newsData.find(n => n.id === id);
        if (item) {
            title = item.title[currentLanguage] || item.title['kk'];
            content = item.content[currentLanguage] || item.content['kk'];
            date = formatDateForDisplay(item.date);
            links = item.links || [];
        }
    } else if (type === 'event') {
        item = eventsData.find(e => e.id === id);
        if (item) {
            title = item.title[currentLanguage] || item.title['kk'];
            content = item.description[currentLanguage] || item.description['kk'];
            date = formatDateForDisplay(item.date);
            links = item.links || [];
        }
    }
    
    if (!item) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-meta">
                    <span class="modal-date">
                        <i class="fas fa-calendar-alt"></i>
                        ${date}
                    </span>
                </div>
                ${item.banner ? `
                    <div class="modal-image">
                        <img src="${item.banner}" alt="${title}">
                    </div>
                ` : item.image ? `
                    <div class="modal-image">
                        <img src="${item.image}" alt="${title}">
                    </div>
                ` : ''}
                <div class="modal-text">
                    <p>${content}</p>
                </div>
                ${links.length > 0 ? `
                    <div class="modal-links">
                        <h4><i class="fas fa-link"></i> ${currentLanguage === 'kk' ? 'Қосымша материалдар' : currentLanguage === 'ru' ? 'Дополнительные материалы' : 'Additional Materials'}</h4>
                        <div class="links-list">
                            ${links.map(link => `
                                <a href="${link.url}" target="_blank" class="link-item">
                                    <i class="fas fa-external-link-alt"></i>
                                    ${link.title}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary modal-ok-btn">
                    <i class="fas fa-check"></i>
                    ${currentLanguage === 'kk' ? 'Түсіндім' : currentLanguage === 'ru' ? 'Понятно' : 'Got it'}
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-ok-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Page templates with modern design
function getSchoolPage() {
    const translations = {
        kk: {
            title: "IT Lyceum School Hub",
            about: "Біз туралы",
            aboutText: "IT Lyceum School Hub - Көкшетау қаласының ең үздік IT мектебінің цифрлық орталығы. 2018 жылы ашылған біздің мектеп болашақ IT мамандарын даярлауға баса назар аударады.",
            mission: "Біздің миссиямыз", 
            missionText: "Оқушыларға жоғары сапалы IT білім беру және олардың креативті ойлау қабілеттерін дамыту. Біз әр оқушының жеке дамуына көмектесеміз.",
            achievements: "Жетістіктеріміз",
            directions: "Бағыттарымыз",
            address: "Мекен-жайы",
            phone: "Телефон",
            email: "Электронды пошта",
            website: "Веб-сайт",
            students: "Оқушы",
            teachers: "Мұғалім", 
            winners: "Жеңімпаз",
            experience: "Жыл тәжірибе",
            programming: "Бағдарламалау",
            webdev: "Веб-әзірлеу",
            databases: "Дерекқордар",
            cybersecurity: "Киберқауіпсіздік"
        },
        ru: {
            title: "IT Lyceum School Hub",
            about: "О нас",
            aboutText: "IT Lyceum School Hub - цифровой хаб лучшей IT-школы города Кокшетау. Основанная в 2018 году, наша школа уделяет особое внимание подготовке будущих IT-специалистов.",
            mission: "Наша миссия",
            missionText: "Предоставление качественного IT-образования учащимся и развитие их творческого мышления. Мы помогаем каждому ученику в личном развитии.",
            achievements: "Наши достижения", 
            directions: "Направления",
            address: "Адрес",
            phone: "Телефон", 
            email: "Электронная почта",
            website: "Веб-сайт",
            students: "Учеников",
            teachers: "Учителей",
            winners: "Победителей",
            experience: "Лет опыта",
            programming: "Программирование",
            webdev: "Веб-разработка",
            databases: "Базы данных", 
            cybersecurity: "Кибербезопасность"
        },
        en: {
            title: "IT Lyceum School Hub", 
            about: "About Us",
            aboutText: "IT Lyceum School Hub - the digital hub of the best IT school in Kokshetau city. Founded in 2018, our school focuses on training future IT specialists.",
            mission: "Our Mission",
            missionText: "Providing high-quality IT education to students and developing their creative thinking abilities. We support each student's personal development.",
            achievements: "Our Achievements",
            directions: "Directions",
            address: "Address",
            phone: "Phone",
            email: "Email",
            website: "Website", 
            students: "Students",
            teachers: "Teachers",
            winners: "Winners",
            experience: "Years experience",
            programming: "Programming",
            webdev: "Web Development",
            databases: "Databases",
            cybersecurity: "Cybersecurity"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            <div class="card">
                <h2 class="card-title">${t.about}</h2>
                <p>${t.aboutText}</p>
                <div class="contact-info" style="margin-top: 1.5rem;">
                    <p><strong>📍 ${t.address}:</strong> ${currentLanguage === 'kk' ? 'Көкшетау қаласы, Абай көшесі 123' : currentLanguage === 'ru' ? 'г. Кокшетау, ул. Абая 123' : 'Kokshetau city, Abay street 123'}</p>
                    <p><strong>📞 ${t.phone}:</strong> +7 (7162) 12-34-56</p>
                    <p><strong>📧 ${t.email}:</strong> info@itlyceum.edu.kz</p>
                    <p><strong>🌐 ${t.website}:</strong> www.itlyceum.edu.kz</p>
                </div>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.mission}</h2>
                <p>${t.missionText}</p>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.achievements}</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>500+</h3>
                        <p>${t.students}</p>
                    </div>
                    <div class="stat-card">
                        <h3>25+</h3>
                        <p>${t.teachers}</p>
                    </div>
                    <div class="stat-card">
                        <h3>50+</h3>
                        <p>${t.winners}</p>
                    </div>
                    <div class="stat-card">
                        <h3>6</h3>
                        <p>${t.experience}</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.directions}</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>🎯 ${t.programming}</h3>
                        <p>Python, Java, C++</p>
                    </div>
                    <div class="stat-card">
                        <h3>🌐 ${t.webdev}</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                    <div class="stat-card">
                        <h3>💾 ${t.databases}</h3>
                        <p>SQL, MySQL, PostgreSQL</p>
                    </div>
                    <div class="stat-card">
                        <h3>🔒 ${t.cybersecurity}</h3>
                        <p>Қауіпсіздік негіздері</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Остальные функции getNewsPage(), getTeachersPage(), getStudentsPage(), getEventsPage(), getProfilePage()
// и вспомогательные функции остаются такими же как в предыдущем коде, но с адаптацией для мобильных устройств

// Event handlers
function deleteNews(id) {
    const t = currentLanguage === 'kk' ? {
        confirm: "Бұл жаңалықты жойғыңыз келе ме?",
        deleted: "Жаңалық жойылды!"
    } : currentLanguage === 'ru' ? {
        confirm: "Вы уверены, что хотите удалить эту новость?",
        deleted: "Новость удалена!"
    } : {
        confirm: "Are you sure you want to delete this news?",
        deleted: "News deleted!"
    };
    
    if (confirm(t.confirm)) {
        newsData = newsData.filter(news => news.id !== id);
        localStorage.setItem('newsData', JSON.stringify(newsData));
        loadPage('news');
        showNotification(t.deleted);
    }
}

function deleteEvent(id) {
    const t = currentLanguage === 'kk' ? {
        confirm: "Бұл іс-шараны жойғыңыз келе ме?",
        deleted: "Іс-шара жойылды!"
    } : currentLanguage === 'ru' ? {
        confirm: "Вы уверены, что хотите удалить это мероприятие?",
        deleted: "Мероприятие удалено!"
    } : {
        confirm: "Are you sure you want to delete this event?",
        deleted: "Event deleted!"
    };
    
    if (confirm(t.confirm)) {
        eventsData = eventsData.filter(event => event.id !== id);
        localStorage.setItem('eventsData', JSON.stringify(eventsData));
        loadPage('events');
        showNotification(t.deleted);
    }
}

function readMoreNews(id) {
    showDetailModal('news', id);
}

function participateInEvent(id) {
    const event = eventsData.find(e => e.id === id);
    if (event) {
        const t = currentLanguage === 'kk' ? 
            `Сіз "${event.title[currentLanguage] || event.title['kk']}" іс-шарасына қатысасыз!` :
            currentLanguage === 'ru' ? 
            `Вы участвуете в мероприятии "${event.title[currentLanguage] || event.title['kk']}"!` :
            `You are participating in "${event.title[currentLanguage] || event.title['kk']}" event!`;
        
        showNotification(t, 'info');
    }
}

function contactTeacher(name) {
    const t = currentLanguage === 'kk' ? 
        `${name} мұғаліміне хабарласыңыз!` :
        currentLanguage === 'ru' ? 
        `Свяжитесь с учителем ${name}!` :
        `Contact teacher ${name}!`;
    
    showNotification(t, 'info');
}

// Initialize page specific functionality
function initializePage(pageId) {
    switch (pageId) {
        case 'news':
            initializeNewsPage();
            break;
        case 'teachers':
            initializeTeachersPage();
            break;
        case 'events':
            initializeEventsPage();
            break;
        case 'profile':
            initializeProfilePage();
            break;
    }
    
    console.log(`🔧 Initialized page: ${pageId}`);
}

// Остальные функции initializeNewsPage(), initializeTeachersPage(), initializeEventsPage(), initializeProfilePage()
// остаются такими же как в предыдущем коде, но с адаптацией для мобильных устройств

// Make functions globally available
window.deleteNews = deleteNews;
window.deleteEvent = deleteEvent;
window.readMoreNews = readMoreNews;
window.participateInEvent = participateInEvent;
window.contactTeacher = contactTeacher;
window.changeLanguage = changeLanguage;
window.initializeMainApp = initializeMainApp;
window.showDetailModal = showDetailModal;
window.formatDateForDisplay = formatDateForDisplay;
window.createLinkField = createLinkField;
window.getLinksFromForm = getLinksFromForm;

console.log('🎉 Application initialized successfully!');

// Добавляем стили для модального окна и ссылок
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 1rem;
    }

    .modal-overlay.show {
        opacity: 1;
    }

    .modal-content {
        background: var(--bg-primary);
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow: hidden;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        border: 1px solid var(--border);
    }

    .modal-overlay.show .modal-content {
        transform: scale(1);
    }

    .modal-header {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--border);
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        color: white;
        position: relative;
    }

    .modal-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.3;
    }

    .modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.25rem;
        transition: background 0.2s ease;
    }

    .modal-close:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .modal-body {
        padding: 2rem;
        max-height: 60vh;
        overflow-y: auto;
    }

    .modal-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border);
    }

    .modal-date {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    .modal-date i {
        color: var(--primary);
    }

    .modal-image {
        margin-bottom: 1.5rem;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .modal-image img {
        width: 100%;
        height: auto;
        display: block;
    }

    .modal-text {
        line-height: 1.7;
        color: var(--text-primary);
        font-size: 1rem;
    }

    .modal-text p {
        margin-bottom: 1rem;
    }

    .modal-text p:last-child {
        margin-bottom: 0;
    }

    .modal-links {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border);
    }

    .modal-links h4 {
        margin-bottom: 1rem;
        color: var(--text-primary);
        font-size: 1.125rem;
    }

    .modal-links h4 i {
        color: var(--primary);
        margin-right: 0.5rem;
    }

    .links-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .link-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        background: var(--bg-secondary);
        border-radius: 8px;
        color: var(--text-primary);
        text-decoration: none;
        transition: background 0.2s ease;
        border: 1px solid var(--border);
    }

    .link-item:hover {
        background: var(--primary-light);
        color: var(--primary);
        text-decoration: none;
    }

    .link-item i {
        color: var(--primary);
        font-size: 0.875rem;
    }

    .modal-footer {
        padding: 1.5rem 2rem;
        border-top: 1px solid var(--border);
        background: var(--bg-secondary);
        display: flex;
        justify-content: flex-end;
    }

    .modal-ok-btn {
        min-width: 120px;
    }

    /* Стили для превью ссылок в карточках */
    .links-preview {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .link-preview {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: var(--bg-secondary);
        border-radius: 6px;
        color: var(--text-primary);
        text-decoration: none;
        font-size: 0.75rem;
        transition: background 0.2s ease;
        border: 1px solid var(--border);
    }

    .link-preview:hover {
        background: var(--primary-light);
        color: var(--primary);
        text-decoration: none;
    }

    .link-preview i {
        color: var(--primary);
        font-size: 0.7rem;
    }

    .more-links {
        font-size: 0.7rem;
        color: var(--text-secondary);
        font-style: italic;
        padding: 0.25rem 0.5rem;
    }

    @media (max-width: 768px) {
        .modal-content {
            margin: 1rem;
            max-height: 85vh;
        }

        .modal-header {
            padding: 1.25rem 1.5rem;
        }

        .modal-body {
            padding: 1.5rem;
        }

        .modal-footer {
            padding: 1.25rem 1.5rem;
        }

        .modal-title {
            font-size: 1.25rem;
        }
    }
`;
document.head.appendChild(modalStyles);
