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
        email: "",
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
    },
    {
        id: 2,
        name: "Марат Қасымов",
        subject: {
            kk: "Ағылшын тілі",
            ru: "Английский язык", 
            en: "English Language"
        },
        phone: "+7 702 234 56 78",
        email: "",
        experience: {
            kk: "10 жыл",
            ru: "10 лет",
            en: "10 years"
        },
        degree: "MA",
        bio: {
            kk: "Тәжірибелі ағылшын тілі мұғалімі. Халықаралық сертификаттары бар.",
            ru: "Опытный преподаватель английского языка. Имеет международные сертификаты.",
            en: "Experienced English teacher. Has international certificates."
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
            kk: "Республикалық IT олимпиадысының жеңімпазы",
            ru: "Победитель Республиканской IT олимпиады",
            en: "Winner of Republican IT Olympiad"
        },
        score: "4.9",
        awards: {
            kk: ["IT олимпиадасы", "Бағдарламалау"],
            ru: ["IT олимпиада", "Программирование"],
            en: ["IT Olympiad", "Programming"]
        },
        image: null
    },
    {
        id: 2,
        name: "Айгерім Оразбай",
        class: "11Б",
        achievement: {
            kk: "Қалалық математика олимпиадысының жеңімпазы",
            ru: "Победитель городской математической олимпиады",
            en: "Winner of City Mathematics Olympiad"
        },
        score: "4.8",
        awards: {
            kk: ["Математика", "Логика"],
            ru: ["Математика", "Логика"],
            en: ["Mathematics", "Logic"]
        },
        image: null
    }
];

// Calendar functionality - УПРОЩЕННАЯ ВЕРСИЯ ДЛЯ МОБИЛЬНЫХ
class Calendar {
    constructor(inputId) {
        this.inputId = inputId;
        this.selectedDate = null;
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.isMobile = window.innerWidth <= 768;
        this.init();
    }

    init() {
        if (this.isMobile) {
            this.createMobileInput();
        } else {
            this.createDesktopCalendar();
        }
        this.attachEventListeners();
    }

    createMobileInput() {
        const input = document.getElementById(this.inputId);
        if (!input) return;

        // Скрываем оригинальное поле и создаем мобильную версию
        input.style.display = 'none';
        
        const mobileContainer = document.createElement('div');
        mobileContainer.className = 'mobile-date-container';
        
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();

        mobileContainer.innerHTML = `
            <div class="mobile-date-inputs">
                <div class="date-input-group">
                    <label>${currentLanguage === 'kk' ? 'Күн' : currentLanguage === 'ru' ? 'День' : 'Day'}</label>
                    <input type="number" class="mobile-date-input" id="mobileDay_${this.inputId}" 
                           min="1" max="31" value="${currentDay}" placeholder="01">
                </div>
                <div class="date-separator">/</div>
                <div class="date-input-group">
                    <label>${currentLanguage === 'kk' ? 'Ай' : currentLanguage === 'ru' ? 'Месяц' : 'Month'}</label>
                    <input type="number" class="mobile-date-input" id="mobileMonth_${this.inputId}" 
                           min="1" max="12" value="${currentMonth}" placeholder="01">
                </div>
                <div class="date-separator">/</div>
                <div class="date-input-group">
                    <label>${currentLanguage === 'kk' ? 'Жыл' : currentLanguage === 'ru' ? 'Год' : 'Year'}</label>
                    <input type="number" class="mobile-date-input" id="mobileYear_${this.inputId}" 
                           min="2020" max="2030" value="${currentYear}" placeholder="2024">
                </div>
            </div>
            <button type="button" class="btn btn-outline btn-sm mobile-date-today" id="mobileToday_${this.inputId}">
                ${currentLanguage === 'kk' ? 'Бүгін' : currentLanguage === 'ru' ? 'Сегодня' : 'Today'}
            </button>
        `;

        input.parentNode.appendChild(mobileContainer);
        this.mobileContainer = mobileContainer;
    }

    createDesktopCalendar() {
        const input = document.getElementById(this.inputId);
        if (!input) return;

        const calendarContainer = document.createElement('div');
        calendarContainer.className = 'calendar-container';
        
        const calendarDropdown = document.createElement('div');
        calendarDropdown.className = 'calendar-dropdown';
        calendarDropdown.innerHTML = this.getDesktopCalendarHTML();
        
        calendarContainer.appendChild(calendarDropdown);
        input.parentNode.appendChild(calendarContainer);
        
        this.calendarDropdown = calendarDropdown;
    }

    getDesktopCalendarHTML() {
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
                <button class="calendar-nav prev-month" data-action="prev" type="button">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="calendar-title">${t[this.currentMonth]} ${this.currentYear}</div>
                <button class="calendar-nav next-month" data-action="next" type="button">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="calendar-grid">
        `;

        for (let i = 0; i < 7; i++) {
            calendarHTML += `<div class="calendar-weekday">${w[i]}</div>`;
        }

        for (let i = 0; i < startingDay; i++) {
            calendarHTML += `<div class="calendar-day other-month">${new Date(this.currentYear, this.currentMonth, -i).getDate()}</div>`;
        }

        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
            
            let dayClass = 'calendar-day';
            if (isToday) dayClass += ' today';
            if (isSelected) dayClass += ' selected';
            
            calendarHTML += `<div class="${dayClass}" data-day="${day}">${day}</div>`;
        }

        const totalCells = 42;
        const remainingCells = totalCells - (startingDay + daysInMonth);
        for (let i = 1; i <= remainingCells; i++) {
            calendarHTML += `<div class="calendar-day other-month">${i}</div>`;
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
        if (this.isMobile) {
            this.attachMobileEvents();
        } else {
            this.attachDesktopEvents();
        }
    }

    attachMobileEvents() {
        const dayInput = document.getElementById(`mobileDay_${this.inputId}`);
        const monthInput = document.getElementById(`mobileMonth_${this.inputId}`);
        const yearInput = document.getElementById(`mobileYear_${this.inputId}`);
        const todayBtn = document.getElementById(`mobileToday_${this.inputId}`);

        if (dayInput && monthInput && yearInput) {
            // Автоматическое обновление значения при вводе
            const updateDate = () => {
                const day = dayInput.value.padStart(2, '0');
                const month = monthInput.value.padStart(2, '0');
                const year = yearInput.value;
                
                if (day && month && year) {
                    const dateString = `${year}-${month}-${day}`;
                    const input = document.getElementById(this.inputId);
                    if (input) {
                        input.value = dateString;
                        // Триггерим событие изменения
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                }
            };

            dayInput.addEventListener('input', updateDate);
            monthInput.addEventListener('input', updateDate);
            yearInput.addEventListener('input', updateDate);

            // Валидация ввода
            dayInput.addEventListener('blur', () => {
                let value = parseInt(dayInput.value);
                if (value < 1) dayInput.value = 1;
                if (value > 31) dayInput.value = 31;
                updateDate();
            });

            monthInput.addEventListener('blur', () => {
                let value = parseInt(monthInput.value);
                if (value < 1) monthInput.value = 1;
                if (value > 12) monthInput.value = 12;
                updateDate();
            });

            yearInput.addEventListener('blur', () => {
                let value = parseInt(yearInput.value);
                if (value < 2020) yearInput.value = 2020;
                if (value > 2030) yearInput.value = 2030;
                updateDate();
            });
        }

        if (todayBtn) {
            todayBtn.addEventListener('click', () => {
                const today = new Date();
                const dayInput = document.getElementById(`mobileDay_${this.inputId}`);
                const monthInput = document.getElementById(`mobileMonth_${this.inputId}`);
                const yearInput = document.getElementById(`mobileYear_${this.inputId}`);
                
                if (dayInput && monthInput && yearInput) {
                    dayInput.value = today.getDate();
                    monthInput.value = today.getMonth() + 1;
                    yearInput.value = today.getFullYear();
                    
                    // Триггерим обновление
                    dayInput.dispatchEvent(new Event('input'));
                }
            });
        }
    }

    attachDesktopEvents() {
        const prevMonth = this.calendarDropdown?.querySelector('.prev-month');
        const nextMonth = this.calendarDropdown?.querySelector('.next-month');
        
        if (prevMonth) {
            prevMonth.addEventListener('click', () => this.navigateMonth(-1));
        }
        
        if (nextMonth) {
            nextMonth.addEventListener('click', () => this.navigateMonth(1));
        }

        this.calendarDropdown?.querySelectorAll('.calendar-day:not(.other-month)').forEach(day => {
            day.addEventListener('click', () => {
                this.selectDay(parseInt(day.getAttribute('data-day')));
            });
        });

        const todayBtn = this.calendarDropdown?.querySelector('#calendarToday');
        if (todayBtn) {
            todayBtn.addEventListener('click', () => this.selectToday());
        }

        const selectBtn = this.calendarDropdown?.querySelector('#calendarSelect');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => this.finalizeSelection());
        }
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
            this.setInputValue(this.selectedDate);
            this.hideCalendar();
        }
    }

    setInputValue(date) {
        const input = document.getElementById(this.inputId);
        if (input) {
            const formattedDate = this.formatDate(date);
            input.value = formattedDate;
            input.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    updateCalendar() {
        if (this.calendarDropdown && !this.isMobile) {
            this.calendarDropdown.innerHTML = this.getDesktopCalendarHTML();
            this.attachDesktopEvents();
        }
    }

    hideCalendar() {
        if (this.calendarDropdown) {
            this.calendarDropdown.classList.remove('show');
        }
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
    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        linkField.remove();
    });
    
    return linkField;
}

// Функция для получения данных ссылок из формы
function getLinksFromForm(containerId) {
    const links = [];
    const container = document.getElementById(containerId);
    if (!container) return links;
    
    const linkFields = container.querySelectorAll('.link-field');
    
    linkFields.forEach(field => {
        const titleInput = field.querySelector('[data-link-title]');
        const urlInput = field.querySelector('[data-link-url]');
        
        if (titleInput && titleInput.value.trim() && urlInput && urlInput.value.trim()) {
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

// ИСПРАВЛЕННАЯ ФУНКЦИЯ МОБИЛЬНОГО МЕНЮ
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const sidebar = document.getElementById('sidebar');

    console.log('Setting up mobile menu...');

    // Функция для открытия меню
    const openMobileMenu = () => {
        console.log('Opening mobile menu');
        if (sidebar && mobileMenuOverlay) {
            sidebar.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // Функция для закрытия меню
    const closeMobileMenu = () => {
        console.log('Closing mobile menu');
        if (sidebar && mobileMenuOverlay) {
            sidebar.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Функция для переключения меню
    const toggleMobileMenu = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        const isActive = sidebar.classList.contains('active');
        console.log('Mobile menu toggle clicked. Current state:', isActive);
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };

    // Обработчики для кнопки меню
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        mobileMenuToggle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleMobileMenu(e);
        });
        console.log('Mobile menu toggle event listeners added');
    } else {
        console.error('Mobile menu toggle button not found!');
    }

    // Обработчики для оверлея
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('touchstart', (e) => {
            e.preventDefault();
            closeMobileMenu();
        });
        console.log('Mobile menu overlay event listeners added');
    } else {
        console.error('Mobile menu overlay not found!');
    }

    // Закрытие меню при клике на пункт меню
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (e.target.closest('.menu-item') && sidebar && sidebar.classList.contains('active')) {
                console.log('Closing menu on item click');
                closeMobileMenu();
            }
        }
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Закрытие меню при изменении ориентации
    window.addEventListener('orientationchange', () => {
        if (sidebar && sidebar.classList.contains('active')) {
            setTimeout(closeMobileMenu, 300);
        }
    });

    // Автоматическое закрытие меню при увеличении ширины экрана
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && sidebar && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    console.log('Mobile menu setup complete');
}

// Initialize main application
function initializeMainApp() {
    console.log('Initializing main application...');
    
    // Проверяем, загружены ли все элементы DOM
    if (!document.getElementById('sidebar') || !document.getElementById('content')) {
        console.error('Required DOM elements not found!');
        setTimeout(initializeMainApp, 100);
        return;
    }
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    setupNavigation();
    setupSidebar();
    setupTheme();
    setupLanguage();
    setupMobileMenu(); // ИСПРАВЛЕННАЯ ФУНКЦИЯ
    setupLogout();
    loadPage('school');
    
    updateBreadcrumb('school');
    updateUserInterface();
    
    // Добавляем обработчик для изменения размера окна
    window.addEventListener('resize', handleResize);
    
    console.log('Main application initialized successfully');
}

function handleResize() {
    // Перезагружаем текущую страницу при изменении размера окна
    const currentPage = document.querySelector('.menu-item.active')?.getAttribute('data-page');
    if (currentPage) {
        loadPage(currentPage);
    }
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
    
    toggleAdminFeatures(currentUser.role === 'Admin');
}

function toggleAdminFeatures(isAdmin) {
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(el => {
        if (el) {
            el.style.display = isAdmin ? 'block' : 'none';
        }
    });
    
    document.body.setAttribute('data-user-role', isAdmin ? 'admin' : 'user');
}

function setupSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        const toggleSidebar = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            if (window.innerWidth <= 1024) {
                // На мобильных используем мобильное меню
                const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
                if (mobileMenuOverlay) {
                    sidebar.classList.remove('active');
                    mobileMenuOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            } else {
                // На десктопе переключаем свернутое состояние
                sidebarCollapsed = !sidebarCollapsed;
                sidebar.classList.toggle('collapsed', sidebarCollapsed);
                localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
            }
        };

        sidebarToggle.addEventListener('click', toggleSidebar);
        sidebarToggle.addEventListener('touchstart', toggleSidebar);
        
        // Адаптация для мобильных устройств
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

        // Инициализация состояния
        if (window.innerWidth <= 1024) {
            sidebar.classList.add('mobile');
            sidebar.style.transform = 'translateX(-100%)';
        }
    }
    
    console.log('Sidebar setup complete');
}

function setupNavigation() {
    const menuItems = document.querySelectorAll('.menu-item[data-page]');
    
    const handleMenuItemClick = function(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        const pageId = this.getAttribute('data-page');
        loadPage(pageId);
    };
    
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
        item.addEventListener('touchstart', handleMenuItemClick);
    });
    
    console.log('Navigation setup complete');
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
        themeToggle.addEventListener('click', (e) => {
            if (e) e.preventDefault();
            toggleTheme();
        });
    }
    
    console.log('Theme setup complete');
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
        const toggleLangDropdown = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            langDropdown.classList.toggle('show');
        };

        langToggle.addEventListener('click', toggleLangDropdown);
        langToggle.addEventListener('touchstart', toggleLangDropdown);

        const closeLangDropdown = (e) => {
            if (!e.target.closest('.language-switcher')) {
                langDropdown.classList.remove('show');
            }
        };

        document.addEventListener('click', closeLangDropdown);
        document.addEventListener('touchstart', closeLangDropdown);

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                langDropdown.classList.remove('show');
            });
        });
    }
    
    console.log('Language setup complete');
}

function setupLogout() {
    console.log('Logout available only in profile page');
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
            profile: { kk: 'Жеке кабинет', ru: 'Личный кабинет', en: 'Profile' },
            
            dashboard: { kk: 'Басқару панелі', ru: 'Панель управления', en: 'Dashboard' },
            welcome: { kk: 'Қош келдіңіз', ru: 'Добро пожаловать', en: 'Welcome' },
            search: { kk: 'Іздеу', ru: 'Поиск', en: 'Search' },
            notifications: { kk: 'Хабарландырулар', ru: 'Уведомления', en: 'Notifications' },
            settings: { kk: 'Баптаулар', ru: 'Настройки', en: 'Settings' },
            
            save: { kk: 'Сақтау', ru: 'Сохранить', en: 'Save' },
            cancel: { kk: 'Болдырмау', ru: 'Отмена', en: 'Cancel' },
            delete: { kk: 'Жою', ru: 'Удалить', en: 'Delete' },
            edit: { kk: 'Өңдеу', ru: 'Редактировать', en: 'Edit' },
            add: { kk: 'Қосу', ru: 'Добавить', en: 'Add' },
            view: { kk: 'Қарау', ru: 'Просмотреть', en: 'View' },
            download: { kk: 'Жүктеу', ru: 'Скачать', en: 'Download' },
            upload: { kk: 'Жүктеу', ru: 'Загрузить', en: 'Upload' }
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
    if (!contentArea) {
        console.error('Content area not found!');
        return;
    }
    
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
            
            // Добавляем класс для мобильных устройств
            if (window.innerWidth <= 768) {
                contentArea.classList.add('mobile-view');
            } else {
                contentArea.classList.remove('mobile-view');
            }
            
            setTimeout(() => {
                contentArea.style.opacity = '1';
                contentArea.style.transform = 'translateY(0)';
            }, 50);
            
            initializePage(pageId);
        } else {
            console.error(`Page template for ${pageId} not found!`);
            contentArea.innerHTML = '<div class="error-message">Page not found</div>';
        }
        
        console.log(`Loaded page: ${pageId}`);
    }, 200);
}

// Utility functions
function getRandomColor() {
    const colors = ['#2563eb', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#6b7280'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getInitials(name) {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function showNotification(message, type = 'success') {
    if (window.authSystem) {
        window.authSystem.showNotification(message, type);
    } else {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#10b981'};
            color: white;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            font-family: system-ui, -apple-system, sans-serif;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
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
    if (isNaN(date.getTime())) return dateString;
    
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
    } else if (type === 'event') {
        item = eventsData.find(e => e.id === id);
    }
    
    if (!item) return;
    
    title = item.title?.[currentLanguage] || item.title?.['kk'] || 'No Title';
    content = item.content?.[currentLanguage] || item.description?.[currentLanguage] || item.content?.['kk'] || item.description?.['kk'] || 'No Content';
    date = formatDateForDisplay(item.date);
    links = item.links || [];
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${title}</h2>
                <button class="modal-close" type="button">&times;</button>
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
                        <img src="${item.banner}" alt="${title}" loading="lazy">
                    </div>
                ` : item.image ? `
                    <div class="modal-image">
                        <img src="${item.image}" alt="${title}" loading="lazy">
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
                <button class="btn btn-primary modal-ok-btn" type="button">
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
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };
    
    const closeBtn = modal.querySelector('.modal-close');
    const okBtn = modal.querySelector('.modal-ok-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
        closeBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            closeModal();
        });
    }
    
    if (okBtn) {
        okBtn.addEventListener('click', closeModal);
        okBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            closeModal();
        });
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    modal.addEventListener('touchstart', (e) => {
        if (e.target === modal) {
            e.preventDefault();
            closeModal();
        }
    });
}

// Page templates
function getSchoolPage() {
    const t = currentLanguage === 'kk' ? {
        title: "IT Лицей туралы",
        subtitle: "Біздің мектеп - болашақ IT мамандарын дайындау ордасы",
        stats: "Негізгі көрсеткіштер",
        students: "Оқушылар",
        teachers: "Мұғалімдер",
        classes: "Сыныптар", 
        courses: "IT курстар",
        about: "Мектеп туралы",
        description: "IT Лицей - бұл заманауи білім беру орталығы, онда оқушылар IT саласындағы ең соңғы технологияларды меңгереді. Біз оқушыларға теориялық біліммен қатар практикалық дағдыларды да үйретеміз.",
        features: "Біздің артықшылықтар",
        feature1: "Тәжірибелі мұғалімдер",
        feature2: "Заманауи зертханалар",
        feature3: "IT бағыттары",
        feature4: "Халықаралық бағдарламалар"
    } : currentLanguage === 'ru' ? {
        title: "О IT Лицее", 
        subtitle: "Наша школа - центр подготовки будущих IT специалистов",
        stats: "Основные показатели",
        students: "Ученики",
        teachers: "Учителя",
        classes: "Классы",
        courses: "IT курсы",
        about: "О школе",
        description: "IT Лицей - это современный образовательный центр, где ученики осваивают самые передовые технологии в IT сфере. Мы обучаем студентов не только теоретическим знаниям, но и практическим навыкам.",
        features: "Наши преимущества",
        feature1: "Опытные преподаватели",
        feature2: "Современные лаборатории", 
        feature3: "IT направления",
        feature4: "Международные программы"
    } : {
        title: "About IT Lyceum",
        subtitle: "Our school is a center for training future IT specialists", 
        stats: "Key Statistics",
        students: "Students",
        teachers: "Teachers",
        classes: "Classes",
        courses: "IT Courses",
        about: "About School",
        description: "IT Lyceum is a modern educational center where students master the latest technologies in the IT field. We teach students not only theoretical knowledge but also practical skills.",
        features: "Our Advantages",
        feature1: "Experienced Teachers",
        feature2: "Modern Laboratories",
        feature3: "IT Directions", 
        feature4: "International Programs"
    };

    return `
        <div class="page-content">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">1,200</div>
                    <div class="stat-label">${t.students}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">45</div>
                    <div class="stat-label">${t.teachers}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">36</div>
                    <div class="stat-label">${t.classes}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">15</div>
                    <div class="stat-label">${t.courses}</div>
                </div>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.about}</h2>
                <p>${t.description}</p>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.features}</h2>
                <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
                    <div class="feature-item" style="text-align: center; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius);">
                        <i class="fas fa-users" style="font-size: 2rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 0.5rem;">${t.feature1}</h3>
                    </div>
                    <div class="feature-item" style="text-align: center; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius);">
                        <i class="fas fa-flask" style="font-size: 2rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 0.5rem;">${t.feature2}</h3>
                    </div>
                    <div class="feature-item" style="text-align: center; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius);">
                        <i class="fas fa-laptop-code" style="font-size: 2rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 0.5rem;">${t.feature3}</h3>
                    </div>
                    <div class="feature-item" style="text-align: center; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius);">
                        <i class="fas fa-globe" style="font-size: 2rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 0.5rem;">${t.feature4}</h3>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getNewsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Admin';
    
    const t = currentLanguage === 'kk' ? {
        title: "Жаңалықтар",
        subtitle: "Соңғы жаңалықтар мен хабарламалар",
        addNews: "Жаңалық қосу",
        newsTitle: "Тақырып",
        newsContent: "Мазмұны", 
        newsDate: "Күні",
        newsImage: "Сурет",
        newsBanner: "Баннер",
        addLink: "Сілтеме қосу",
        cancel: "Болдырмау",
        add: "Қосу",
        noNews: "Әлі жаңалық жоқ",
        readMore: "Толығырақ",
        delete: "Жою"
    } : currentLanguage === 'ru' ? {
        title: "Новости",
        subtitle: "Последние новости и объявления", 
        addNews: "Добавить новость",
        newsTitle: "Заголовок",
        newsContent: "Содержание",
        newsDate: "Дата",
        newsImage: "Изображение",
        newsBanner: "Баннер", 
        addLink: "Добавить ссылку",
        cancel: "Отмена",
        add: "Добавить",
        noNews: "Пока нет новостей",
        readMore: "Подробнее",
        delete: "Удалить"
    } : {
        title: "News",
        subtitle: "Latest news and announcements",
        addNews: "Add News", 
        newsTitle: "Title",
        newsContent: "Content",
        newsDate: "Date",
        newsImage: "Image",
        newsBanner: "Banner",
        addLink: "Add Link",
        cancel: "Cancel",
        add: "Add",
        noNews: "No news yet",
        readMore: "Read More", 
        delete: "Delete"
    };

    let adminPanel = '';
    if (isAdmin) {
        adminPanel = `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${t.addNews}</h2>
                    <button class="btn btn-primary" id="showNewsFormBtn">
                        <i class="fas fa-plus"></i>
                        ${t.addNews}
                    </button>
                </div>
                
                <div class="card-body" id="newsFormPanel" style="display: none;">
                    <form id="newsForm">
                        <div class="form-group">
                            <label>${t.newsTitle}</label>
                            <input type="text" id="newsTitle" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label>${t.newsContent}</label>
                            <textarea id="newsContent" class="form-control" rows="4" required></textarea>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>${t.newsDate}</label>
                                <input type="text" id="newsDate" class="form-control calendar-input" readonly required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>${t.newsImage}</label>
                                <input type="file" id="newsImageInput" class="form-control" accept="image/*">
                                <div class="image-preview-container">
                                    <img id="newsImagePreview" class="image-preview" style="display: none; max-width: 200px; margin-top: 0.5rem;">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>${t.newsBanner}</label>
                                <input type="file" id="newsBannerInput" class="form-control" accept="image/*">
                                <div class="image-preview-container">
                                    <img id="newsBannerPreview" class="image-preview" style="display: none; max-width: 200px; margin-top: 0.5rem;">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Сілтемелер</label>
                            <div id="newsLinksContainer"></div>
                            <button type="button" class="btn btn-outline btn-sm" id="addNewsLinkBtn">
                                <i class="fas fa-plus"></i>
                                ${t.addLink}
                            </button>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" id="cancelNewsBtn">${t.cancel}</button>
                            <button type="submit" class="btn btn-primary" id="addNewsBtn">${t.add}</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    let newsItems = '';
    if (newsData.length > 0) {
        newsItems = newsData.map(news => `
            <div class="news-item">
                <div class="news-date">${news.formattedDate?.[currentLanguage] || formatDateForDisplay(news.date)}</div>
                <h3 class="news-title">${news.title?.[currentLanguage] || news.title?.['kk']}</h3>
                <p class="news-excerpt">${(news.content?.[currentLanguage] || news.content?.['kk']).substring(0, 150)}...</p>
                <div class="news-meta">
                    <button class="btn btn-outline btn-sm read-more-btn" data-type="news" data-id="${news.id}">
                        <i class="fas fa-eye"></i>
                        ${t.readMore}
                    </button>
                    ${isAdmin ? `
                        <button class="btn btn-danger btn-sm delete-btn" data-type="news" data-id="${news.id}">
                            <i class="fas fa-trash"></i>
                            ${t.delete}
                        </button>
                    ` : ''}
                </div>
            </div>
        `).join('');
    } else {
        newsItems = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <i class="fas fa-newspaper"></i>
                </div>
                <h3 class="empty-state-title">${t.noNews}</h3>
            </div>
        `;
    }

    return `
        <div class="page-content">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
            
            ${adminPanel}
            
            <div class="news-grid">
                ${newsItems}
            </div>
        </div>
    `;
}

function getTeachersPage() {
    const t = currentLanguage === 'kk' ? {
        title: "Мұғалімдер",
        subtitle: "Біздің тәжірибелі мұғалімдер",
        filterAll: "Барлығы",
        filterMath: "Математика",
        filterScience: "Ғылым",
        filterLanguages: "Тілдер",
        filterIT: "IT",
        contact: "Байланысу",
        experience: "Тәжірибе",
        degree: "Дәреже"
    } : currentLanguage === 'ru' ? {
        title: "Учителя",
        subtitle: "Наши опытные преподаватели",
        filterAll: "Все",
        filterMath: "Математика",
        filterScience: "Наука", 
        filterLanguages: "Языки",
        filterIT: "IT",
        contact: "Связаться",
        experience: "Опыт",
        degree: "Степень"
    } : {
        title: "Teachers",
        subtitle: "Our experienced teachers",
        filterAll: "All",
        filterMath: "Mathematics", 
        filterScience: "Science",
        filterLanguages: "Languages",
        filterIT: "IT",
        contact: "Contact",
        experience: "Experience",
        degree: "Degree"
    };

    const teacherItems = teachersData.map(teacher => `
        <div class="teacher-card" data-subject="${teacher.subject.en}">
            <div class="teacher-header">
                <div class="teacher-avatar" style="width: 80px; height: 80px; border-radius: 50%; background: ${getRandomColor()}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">
                    ${getInitials(teacher.name)}
                </div>
                <div class="teacher-info">
                    <h3 class="teacher-name">${teacher.name}</h3>
                    <p class="teacher-subject">${teacher.subject[currentLanguage] || teacher.subject['kk']}</p>
                </div>
            </div>
            <div class="teacher-details">
                <p><strong>${t.experience}</strong> ${teacher.experience[currentLanguage] || teacher.experience['kk']}</p>
                <p><strong>${t.degree}</strong> ${teacher.degree}</p>
                <p><strong>Телефон:</strong> ${teacher.phone}</p>
                ${teacher.email ? `<p><strong>Email:</strong> ${teacher.email}</p>` : ''}
            </div>
            <div class="teacher-bio">
                <p>${teacher.bio[currentLanguage] || teacher.bio['kk']}</p>
            </div>
            <div class="teacher-actions">
                <button class="btn btn-primary contact-teacher-btn" data-teacher="${teacher.name}">
                    <i class="fas fa-envelope"></i>
                    ${t.contact}
                </button>
            </div>
        </div>
    `).join('');

    return `
        <div class="page-content">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
            
            <div class="card">
                <div class="filter-buttons" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="btn btn-outline filter-btn active" data-subject="all">${t.filterAll}</button>
                    <button class="btn btn-outline filter-btn" data-subject="Mathematics">${t.filterMath}</button>
                    <button class="btn btn-outline filter-btn" data-subject="Science">${t.filterScience}</button>
                    <button class="btn btn-outline filter-btn" data-subject="English Language">${t.filterLanguages}</button>
                    <button class="btn btn-outline filter-btn" data-subject="IT">${t.filterIT}</button>
                </div>
            </div>
            
            <div class="teacher-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
                ${teacherItems}
            </div>
        </div>
    `;
}

function getStudentsPage() {
    const t = currentLanguage === 'kk' ? {
        title: "Оқушылар",
        subtitle: "Біздің табысты оқушылар",
        achievement: "Жетістік",
        score: "GPA",
        awards: "Марапаттар",
        class: "Сынып"
    } : currentLanguage === 'ru' ? {
        title: "Ученики",
        subtitle: "Наши успешные ученики",
        achievement: "Достижение", 
        score: "GPA",
        awards: "Награды",
        class: "Класс"
    } : {
        title: "Students",
        subtitle: "Our successful students",
        achievement: "Achievement",
        score: "GPA", 
        awards: "Awards",
        class: "Class"
    };

    const studentItems = studentsData.map(student => `
        <div class="student-card">
            <div class="student-header">
                <div class="student-avatar" style="width: 80px; height: 80px; border-radius: 50%; background: ${getRandomColor()}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">
                    ${getInitials(student.name)}
                </div>
                <div class="student-info">
                    <h3 class="student-name">${student.name}</h3>
                    <p class="student-class">${t.class}: ${student.class}</p>
                </div>
            </div>
            <div class="student-details">
                <p><strong>${t.achievement}:</strong> ${student.achievement[currentLanguage] || student.achievement['kk']}</p>
                <p><strong>${t.score}:</strong> ${student.score}</p>
                <p><strong>${t.awards}:</strong> ${(student.awards[currentLanguage] || student.awards['kk']).join(', ')}</p>
            </div>
        </div>
    `).join('');

    return `
        <div class="page-content">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
            
            <div class="student-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem;">
                ${studentItems}
            </div>
        </div>
    `;
}

function getEventsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Admin';
    
    const t = currentLanguage === 'kk' ? {
        title: "Іс-шаралар",
        subtitle: "Жуырдағы іс-шаралар",
        addEvent: "Іс-шара қосу",
        eventTitle: "Тақырып",
        eventDescription: "Сипаттама",
        eventDate: "Күні",
        eventImage: "Сурет",
        eventBanner: "Баннер",
        addLink: "Сілтеме қосу",
        cancel: "Болдырмау",
        add: "Қосу",
        participate: "Қатысу",
        readMore: "Толығырақ",
        delete: "Жою",
        noEvents: "Әлі іс-шара жоқ"
    } : currentLanguage === 'ru' ? {
        title: "Мероприятия",
        subtitle: "Предстоящие мероприятия",
        addEvent: "Добавить мероприятие",
        eventTitle: "Название",
        eventDescription: "Описание",
        eventDate: "Дата",
        eventImage: "Изображение",
        eventBanner: "Баннер",
        addLink: "Добавить ссылку",
        cancel: "Отмена",
        add: "Добавить",
        participate: "Участвовать",
        readMore: "Подробнее",
        delete: "Удалить",
        noEvents: "Пока нет мероприятий"
    } : {
        title: "Events",
        subtitle: "Upcoming events",
        addEvent: "Add Event",
        eventTitle: "Title",
        eventDescription: "Description",
        eventDate: "Date",
        eventImage: "Image",
        eventBanner: "Banner",
        addLink: "Add Link",
        cancel: "Cancel",
        add: "Add",
        participate: "Participate",
        readMore: "Read More",
        delete: "Delete",
        noEvents: "No events yet"
    };

    let adminPanel = '';
    if (isAdmin) {
        adminPanel = `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${t.addEvent}</h2>
                    <button class="btn btn-primary" id="showEventFormBtn">
                        <i class="fas fa-plus"></i>
                        ${t.addEvent}
                    </button>
                </div>
                
                <div class="card-body" id="eventFormPanel" style="display: none;">
                    <form id="eventForm">
                        <div class="form-group">
                            <label>${t.eventTitle}</label>
                            <input type="text" id="eventTitle" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label>${t.eventDescription}</label>
                            <textarea id="eventDescription" class="form-control" rows="4" required></textarea>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>${t.eventDate}</label>
                                <input type="text" id="eventDate" class="form-control calendar-input" readonly required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>${t.eventImage}</label>
                                <input type="file" id="eventImageInput" class="form-control" accept="image/*">
                                <div class="image-preview-container">
                                    <img id="eventImagePreview" class="image-preview" style="display: none; max-width: 200px; margin-top: 0.5rem;">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>${t.eventBanner}</label>
                                <input type="file" id="eventBannerInput" class="form-control" accept="image/*">
                                <div class="image-preview-container">
                                    <img id="eventBannerPreview" class="image-preview" style="display: none; max-width: 200px; margin-top: 0.5rem;">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Сілтемелер</label>
                            <div id="eventLinksContainer"></div>
                            <button type="button" class="btn btn-outline btn-sm" id="addEventLinkBtn">
                                <i class="fas fa-plus"></i>
                                ${t.addLink}
                            </button>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" id="cancelEventBtn">${t.cancel}</button>
                            <button type="submit" class="btn btn-primary" id="addEventBtn">${t.add}</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    let eventItems = '';
    if (eventsData.length > 0) {
        eventItems = eventsData.map(event => `
            <div class="event-item">
                <div class="event-date">${event.formattedDate?.[currentLanguage] || formatDateForDisplay(event.date)}</div>
                <h3 class="event-title">${event.title?.[currentLanguage] || event.title?.['kk']}</h3>
                <p class="event-description">${(event.description?.[currentLanguage] || event.description?.['kk']).substring(0, 150)}...</p>
                <div class="event-meta">
                    <button class="btn btn-primary btn-sm participate-event-btn" data-id="${event.id}">
                        <i class="fas fa-user-plus"></i>
                        ${t.participate}
                    </button>
                    <button class="btn btn-outline btn-sm read-more-btn" data-type="event" data-id="${event.id}">
                        <i class="fas fa-eye"></i>
                        ${t.readMore}
                    </button>
                    ${isAdmin ? `
                        <button class="btn btn-danger btn-sm delete-btn" data-type="event" data-id="${event.id}">
                            <i class="fas fa-trash"></i>
                            ${t.delete}
                        </button>
                    ` : ''}
                </div>
            </div>
        `).join('');
    } else {
        eventItems = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <h3 class="empty-state-title">${t.noEvents}</h3>
            </div>
        `;
    }

    return `
        <div class="page-content">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
            
            ${adminPanel}
            
            <div class="events-grid">
                ${eventItems}
            </div>
        </div>
    `;
}

function getProfilePage() {
    const currentUser = window.authSystem?.getCurrentUser();
    
    const t = currentLanguage === 'kk' ? {
        title: "Жеке кабинет",
        personalInfo: "Жеке ақпарат",
        fullName: "Толық аты-жөні",
        login: "Логин",
        class: "Сынып",
        role: "Рөл",
        changeRole: "Рөлді өзгерту",
        security: "Қауіпсіздік",
        currentPassword: "Қазіргі құпия сөз",
        newPassword: "Жаңа құпия сөз",
        confirmPassword: "Құпия сөзді растау",
        changePassword: "Құпия сөзді өзгерту",
        logout: "Жүйеден шығу",
        admin: "Әкімші",
        teacher: "Мұғалім",
        student: "Оқушы"
    } : currentLanguage === 'ru' ? {
        title: "Личный кабинет",
        personalInfo: "Личная информация",
        fullName: "Полное имя",
        login: "Логин",
        class: "Класс",
        role: "Роль",
        changeRole: "Изменить роль",
        security: "Безопасность",
        currentPassword: "Текущий пароль",
        newPassword: "Новый пароль",
        confirmPassword: "Подтвердите пароль",
        changePassword: "Изменить пароль",
        logout: "Выйти из системы",
        admin: "Администратор",
        teacher: "Учитель",
        student: "Ученик"
    } : {
        title: "Profile",
        personalInfo: "Personal Information",
        fullName: "Full Name",
        login: "Login",
        class: "Class",
        role: "Role",
        changeRole: "Change Role",
        security: "Security",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        changePassword: "Change Password",
        logout: "Logout",
        admin: "Admin",
        teacher: "Teacher",
        student: "Student"
    };

    const roleTranslations = {
        'Admin': t.admin,
        'Мұғалім': t.teacher,
        'Оқушы': t.student
    };

    return `
        <div class="page-content">
            <h1 class="page-title">${t.title}</h1>
            
            <div class="card">
                <h2 class="card-title">${t.personalInfo}</h2>
                <div class="profile-header" style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="profile-avatar" style="width: 100px; height: 100px; border-radius: 50%; background: ${getRandomColor()}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 2rem;">
                        ${getInitials(currentUser?.fullName)}
                    </div>
                    <div class="profile-info">
                        <h3 style="margin-bottom: 0.5rem;">${currentUser?.fullName || 'Пайдаланушы'}</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 0.25rem;">${t.login}: ${currentUser?.login || 'N/A'}</p>
                        <p style="color: var(--text-secondary); margin-bottom: 0.25rem;">${t.class}: ${currentUser?.class || 'N/A'}</p>
                        <p style="color: var(--text-secondary);">${t.role}: ${roleTranslations[currentUser?.role] || currentUser?.role}</p>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>${t.fullName}</label>
                    <input type="text" class="form-control" value="${currentUser?.fullName || ''}" readonly>
                </div>
                
                <div class="form-group">
                    <label>${t.login}</label>
                    <input type="text" class="form-control" value="${currentUser?.login || ''}" readonly>
                </div>
                
                <div class="form-group">
                    <label>${t.class}</label>
                    <input type="text" class="form-control" value="${currentUser?.class || ''}" readonly>
                </div>
                
                <div class="form-group">
                    <button class="btn btn-outline select-role-btn">
                        <i class="fas fa-sync-alt"></i>
                        ${t.changeRole}
                    </button>
                </div>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.security}</h2>
                
                <div class="form-group">
                    <label>${t.currentPassword}</label>
                    <input type="password" id="currentPassword" class="form-control">
                </div>
                
                <div class="form-group">
                    <label>${t.newPassword}</label>
                    <input type="password" id="newPassword" class="form-control">
                </div>
                
                <div class="form-group">
                    <label>${t.confirmPassword}</label>
                    <input type="password" id="confirmPassword" class="form-control">
                </div>
                
                <button class="btn btn-primary" id="changePasswordBtn">
                    <i class="fas fa-key"></i>
                    ${t.changePassword}
                </button>
            </div>
            
            <div class="card">
                <button class="btn btn-danger btn-block" id="logoutBtnProfile">
                    <i class="fas fa-sign-out-alt"></i>
                    ${t.logout}
                </button>
            </div>
        </div>
    `;
}

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
    
    console.log(`Initialized page: ${pageId}`);
}

function initializeNewsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Admin';
    
    const newsDateInput = document.getElementById('newsDate');
    if (newsDateInput) {
        window.newsCalendar = new Calendar('newsDate');
    }
    
    if (isAdmin) {
        const showNewsFormBtn = document.getElementById('showNewsFormBtn');
        const newsFormPanel = document.getElementById('newsFormPanel');
        const cancelNewsBtn = document.getElementById('cancelNewsBtn');
        
        if (showNewsFormBtn && newsFormPanel) {
            const toggleNewsForm = (e) => {
                if (e) e.preventDefault();
                newsFormPanel.style.display = newsFormPanel.style.display === 'none' ? 'block' : 'none';
            };
            
            showNewsFormBtn.addEventListener('click', toggleNewsForm);
            showNewsFormBtn.addEventListener('touchstart', toggleNewsForm);
        }
        
        if (cancelNewsBtn && newsFormPanel) {
            const cancelNewsForm = (e) => {
                if (e) e.preventDefault();
                newsFormPanel.style.display = 'none';
            };
            
            cancelNewsBtn.addEventListener('click', cancelNewsForm);
            cancelNewsBtn.addEventListener('touchstart', cancelNewsForm);
        }
        
        const addNewsLinkBtn = document.getElementById('addNewsLinkBtn');
        if (addNewsLinkBtn) {
            const addLinkHandler = (e) => {
                if (e) e.preventDefault();
                const linkField = createLinkField();
                document.getElementById('newsLinksContainer').appendChild(linkField);
            };
            
            addNewsLinkBtn.addEventListener('click', addLinkHandler);
            addNewsLinkBtn.addEventListener('touchstart', addLinkHandler);
        }
        
        const addNewsBtn = document.getElementById('addNewsBtn');
        const newsImageInput = document.getElementById('newsImageInput');
        const newsImagePreview = document.getElementById('newsImagePreview');
        const newsBannerInput = document.getElementById('newsBannerInput');
        const newsBannerPreview = document.getElementById('newsBannerPreview');
        
        if (addNewsBtn) {
            const addNewsHandler = async (e) => {
                if (e) e.preventDefault();
                
                const title = document.getElementById('newsTitle')?.value.trim();
                const content = document.getElementById('newsContent')?.value.trim();
                const date = document.getElementById('newsDate')?.value.trim();
                const imageFile = newsImageInput?.files[0];
                const bannerFile = newsBannerInput?.files[0];
                
                const links = getLinksFromForm('newsLinksContainer');
                
                const t = currentLanguage === 'kk' ? {
                    allFields: "Барлық өрістерді толтырыңыз!",
                    added: "Жаңалық сәтті қосылды!"
                } : currentLanguage === 'ru' ? {
                    allFields: "Заполните все поля!",
                    added: "Новость успешно добавлена!"
                } : {
                    allFields: "Please fill all fields!",
                    added: "News successfully added!"
                };
                
                if (!title || !content || !date) {
                    showNotification(t.allFields, 'error');
                    return;
                }
                
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!dateRegex.test(date)) {
                    showNotification(currentLanguage === 'kk' ? 'Күн форматы қате! (YYYY-MM-DD)' : currentLanguage === 'ru' ? 'Неверный формат даты! (YYYY-MM-DD)' : 'Invalid date format! (YYYY-MM-DD)', 'error');
                    return;
                }
                
                addNewsBtn.classList.add('loading');
                
                const newNews = {
                    id: Date.now(),
                    title: { kk: title, ru: title, en: title },
                    content: { kk: content, ru: content, en: content },
                    date: date,
                    formattedDate: {
                        kk: formatDateForDisplay(date),
                        ru: formatDateForDisplay(date),
                        en: formatDateForDisplay(date)
                    },
                    banner: null,
                    image: null,
                    links: links
                };
                
                try {
                    if (imageFile) {
                        newNews.image = await readFileAsDataURL(imageFile);
                    }
                    
                    if (bannerFile) {
                        newNews.banner = await readFileAsDataURL(bannerFile);
                    }
                    
                    newsData.unshift(newNews);
                    localStorage.setItem('newsData', JSON.stringify(newsData));
                    
                    document.getElementById('newsTitle').value = '';
                    document.getElementById('newsContent').value = '';
                    document.getElementById('newsDate').value = '';
                    if (newsImageInput) newsImageInput.value = '';
                    if (newsBannerInput) newsBannerInput.value = '';
                    if (newsImagePreview) {
                        newsImagePreview.style.display = 'none';
                        newsImagePreview.src = '';
                    }
                    if (newsBannerPreview) {
                        newsBannerPreview.style.display = 'none';
                        newsBannerPreview.src = '';
                    }
                    document.getElementById('newsLinksContainer').innerHTML = '';
                    newsFormPanel.style.display = 'none';
                    
                    loadPage('news');
                    showNotification(t.added);
                    
                } catch (error) {
                    showNotification('Суретті жүктеу кезінде қате пайда болды!', 'error');
                } finally {
                    addNewsBtn.classList.remove('loading');
                }
            };
            
            addNewsBtn.addEventListener('click', addNewsHandler);
            addNewsBtn.addEventListener('touchstart', addNewsHandler);
        }
        
        if (newsImageInput && newsImagePreview) {
            newsImageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        newsImagePreview.src = e.target.result;
                        newsImagePreview.style.display = 'block';
                        newsImagePreview.classList.add('show');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        if (newsBannerInput && newsBannerPreview) {
            newsBannerInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        newsBannerPreview.src = e.target.result;
                        newsBannerPreview.style.display = 'block';
                        newsBannerPreview.classList.add('show');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }
    
    document.querySelectorAll('.read-more-btn[data-type="news"]').forEach(btn => {
        const handleReadMore = (e) => {
            if (e) e.preventDefault();
            const newsId = parseInt(btn.getAttribute('data-id'));
            readMoreNews(newsId);
        };
        
        btn.addEventListener('click', handleReadMore);
        btn.addEventListener('touchstart', handleReadMore);
    });
    
    document.querySelectorAll('.delete-btn[data-type="news"]').forEach(btn => {
        const handleDelete = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const newsId = parseInt(btn.getAttribute('data-id'));
            deleteNews(newsId);
        };
        
        btn.addEventListener('click', handleDelete);
        btn.addEventListener('touchstart', handleDelete);
    });
}

function initializeTeachersPage() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const teacherCards = document.querySelectorAll('.teacher-card');
    
    filterBtns.forEach(btn => {
        const handleFilter = (e) => {
            if (e) e.preventDefault();
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const subject = btn.getAttribute('data-subject');
            
            teacherCards.forEach(card => {
                if (subject === 'all' || card.getAttribute('data-subject') === subject) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        };
        
        btn.addEventListener('click', handleFilter);
        btn.addEventListener('touchstart', handleFilter);
    });
    
    document.querySelectorAll('.contact-teacher-btn').forEach(btn => {
        const handleContact = (e) => {
            if (e) e.preventDefault();
            const teacherName = btn.getAttribute('data-teacher');
            contactTeacher(teacherName);
        };
        
        btn.addEventListener('click', handleContact);
        btn.addEventListener('touchstart', handleContact);
    });
}

function initializeEventsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Admin';
    
    const eventDateInput = document.getElementById('eventDate');
    if (eventDateInput) {
        window.eventCalendar = new Calendar('eventDate');
    }
    
    if (isAdmin) {
        const showEventFormBtn = document.getElementById('showEventFormBtn');
        const eventFormPanel = document.getElementById('eventFormPanel');
        const cancelEventBtn = document.getElementById('cancelEventBtn');
        
        if (showEventFormBtn && eventFormPanel) {
            const toggleEventForm = (e) => {
                if (e) e.preventDefault();
                eventFormPanel.style.display = eventFormPanel.style.display === 'none' ? 'block' : 'none';
            };
            
            showEventFormBtn.addEventListener('click', toggleEventForm);
            showEventFormBtn.addEventListener('touchstart', toggleEventForm);
        }
        
        if (cancelEventBtn && eventFormPanel) {
            const cancelEventForm = (e) => {
                if (e) e.preventDefault();
                eventFormPanel.style.display = 'none';
            };
            
            cancelEventBtn.addEventListener('click', cancelEventForm);
            cancelEventBtn.addEventListener('touchstart', cancelEventForm);
        }
        
        const addEventLinkBtn = document.getElementById('addEventLinkBtn');
        if (addEventLinkBtn) {
            const addLinkHandler = (e) => {
                if (e) e.preventDefault();
                const linkField = createLinkField();
                document.getElementById('eventLinksContainer').appendChild(linkField);
            };
            
            addEventLinkBtn.addEventListener('click', addLinkHandler);
            addEventLinkBtn.addEventListener('touchstart', addLinkHandler);
        }
        
        const addEventBtn = document.getElementById('addEventBtn');
        const eventImageInput = document.getElementById('eventImageInput');
        const eventImagePreview = document.getElementById('eventImagePreview');
        const eventBannerInput = document.getElementById('eventBannerInput');
        const eventBannerPreview = document.getElementById('eventBannerPreview');
        
        if (addEventBtn) {
            const addEventHandler = async (e) => {
                if (e) e.preventDefault();
                
                const title = document.getElementById('eventTitle')?.value.trim();
                const description = document.getElementById('eventDescription')?.value.trim();
                const date = document.getElementById('eventDate')?.value.trim();
                const imageFile = eventImageInput?.files[0];
                const bannerFile = eventBannerInput?.files[0];
                
                const links = getLinksFromForm('eventLinksContainer');
                
                const t = currentLanguage === 'kk' ? {
                    allFields: "Барлық өрістерді толтырыңыз!",
                    added: "Іс-шара сәтті қосылды!"
                } : currentLanguage === 'ru' ? {
                    allFields: "Заполните все поля!",
                    added: "Мероприятие успешно добавлено!"
                } : {
                    allFields: "Please fill all fields!",
                    added: "Event successfully added!"
                };
                
                if (!title || !description || !date) {
                    showNotification(t.allFields, 'error');
                    return;
                }
                
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!dateRegex.test(date)) {
                    showNotification(currentLanguage === 'kk' ? 'Күн форматы қате! (YYYY-MM-DD)' : currentLanguage === 'ru' ? 'Неверный формат даты! (YYYY-MM-DD)' : 'Invalid date format! (YYYY-MM-DD)', 'error');
                    return;
                }
                
                addEventBtn.classList.add('loading');
                
                const newEvent = {
                    id: Date.now(),
                    title: { kk: title, ru: title, en: title },
                    description: { kk: description, ru: description, en: description },
                    date: date,
                    formattedDate: {
                        kk: formatDateForDisplay(date),
                        ru: formatDateForDisplay(date),
                        en: formatDateForDisplay(date)
                    },
                    banner: null,
                    image: null,
                    links: links
                };
                
                try {
                    if (imageFile) {
                        newEvent.image = await readFileAsDataURL(imageFile);
                    }
                    
                    if (bannerFile) {
                        newEvent.banner = await readFileAsDataURL(bannerFile);
                    }
                    
                    eventsData.unshift(newEvent);
                    localStorage.setItem('eventsData', JSON.stringify(eventsData));
                    
                    document.getElementById('eventTitle').value = '';
                    document.getElementById('eventDescription').value = '';
                    document.getElementById('eventDate').value = '';
                    if (eventImageInput) eventImageInput.value = '';
                    if (eventBannerInput) eventBannerInput.value = '';
                    if (eventImagePreview) {
                        eventImagePreview.style.display = 'none';
                        eventImagePreview.src = '';
                    }
                    if (eventBannerPreview) {
                        eventBannerPreview.style.display = 'none';
                        eventBannerPreview.src = '';
                    }
                    document.getElementById('eventLinksContainer').innerHTML = '';
                    eventFormPanel.style.display = 'none';
                    
                    loadPage('events');
                    showNotification(t.added);
                    
                } catch (error) {
                    showNotification('Суретті жүктеу кезінде қате пайда болды!', 'error');
                } finally {
                    addEventBtn.classList.remove('loading');
                }
            };
            
            addEventBtn.addEventListener('click', addEventHandler);
            addEventBtn.addEventListener('touchstart', addEventHandler);
        }
        
        if (eventImageInput && eventImagePreview) {
            eventImageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        eventImagePreview.src = e.target.result;
                        eventImagePreview.style.display = 'block';
                        eventImagePreview.classList.add('show');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        if (eventBannerInput && eventBannerPreview) {
            eventBannerInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        eventBannerPreview.src = e.target.result;
                        eventBannerPreview.style.display = 'block';
                        eventBannerPreview.classList.add('show');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }
    
    document.querySelectorAll('.participate-event-btn').forEach(btn => {
        const handleParticipate = (e) => {
            if (e) e.preventDefault();
            const eventId = parseInt(btn.getAttribute('data-id'));
            participateInEvent(eventId);
        };
        
        btn.addEventListener('click', handleParticipate);
        btn.addEventListener('touchstart', handleParticipate);
    });
    
    document.querySelectorAll('.read-more-btn[data-type="event"]').forEach(btn => {
        const handleReadMore = (e) => {
            if (e) e.preventDefault();
            const eventId = parseInt(btn.getAttribute('data-id'));
            showDetailModal('event', eventId);
        };
        
        btn.addEventListener('click', handleReadMore);
        btn.addEventListener('touchstart', handleReadMore);
    });
    
    document.querySelectorAll('.delete-btn[data-type="event"]').forEach(btn => {
        const handleDelete = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const eventId = parseInt(btn.getAttribute('data-id'));
            deleteEvent(eventId);
        };
        
        btn.addEventListener('click', handleDelete);
        btn.addEventListener('touchstart', handleDelete);
    });
}

function initializeProfilePage() {
    const currentUser = window.authSystem?.getCurrentUser();
    
    const selectRoleBtn = document.querySelector('.select-role-btn');
    if (selectRoleBtn) {
        const handleRoleSelect = (e) => {
            if (e) e.preventDefault();
            
            const roles = ['Admin', 'Мұғалім', 'Оқушы'];
            const currentRole = currentUser?.role;
            const currentIndex = roles.indexOf(currentRole);
            const nextRole = roles[(currentIndex + 1) % roles.length];
            
            if (window.authSystem && currentUser) {
                currentUser.role = nextRole;
                window.authSystem.currentUser = currentUser;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                loadPage('profile');
                
                const t = currentLanguage === 'kk' ? 
                    `Рөл "${nextRole}" таңдалды` :
                    currentLanguage === 'ru' ? 
                    `Роль "${nextRole}" выбрана` :
                    `Role "${nextRole}" selected`;
                
                showNotification(t, 'success');
            }
        };
        
        selectRoleBtn.addEventListener('click', handleRoleSelect);
        selectRoleBtn.addEventListener('touchstart', handleRoleSelect);
    }

    const logoutBtnProfile = document.getElementById('logoutBtnProfile');
    if (logoutBtnProfile) {
        const handleLogout = (e) => {
            if (e) e.preventDefault();
            
            const confirmMessages = {
                kk: 'Шынымен жүйеден шыққыңыз келе ме?',
                ru: 'Вы действительно хотите выйти из системы?',
                en: 'Are you sure you want to log out?'
            };
            
            if (confirm(confirmMessages[currentLanguage] || confirmMessages['kk'])) {
                window.authSystem.logout();
            }
        };
        
        logoutBtnProfile.addEventListener('click', handleLogout);
        logoutBtnProfile.addEventListener('touchstart', handleLogout);
    }

    const changePasswordBtn = document.getElementById('changePasswordBtn');
    if (changePasswordBtn) {
        const handlePasswordChange = (e) => {
            if (e) e.preventDefault();
            
            const currentPassword = document.getElementById('currentPassword')?.value;
            const newPassword = document.getElementById('newPassword')?.value;
            const confirmPassword = document.getElementById('confirmPassword')?.value;
            
            const t = currentLanguage === 'kk' ? {
                allFields: "Барлық өрістерді толтырыңыз!",
                notMatch: "Жаңа құпия сөздер сәйкес емес!",
                changed: "Құпия сөз сәтті өзгертілді!"
            } : currentLanguage === 'ru' ? {
                allFields: "Заполните все поля!",
                notMatch: "Новые пароли не совпадают!",
                changed: "Пароль успешно изменен!"
            } : {
                allFields: "Please fill all fields!",
                notMatch: "New passwords do not match!",
                changed: "Password successfully changed!"
            };
            
            if (!currentPassword || !newPassword || !confirmPassword) {
                showNotification(t.allFields, 'error');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                showNotification(t.notMatch, 'error');
                return;
            }
            
            changePasswordBtn.classList.add('loading');
            
            setTimeout(() => {
                showNotification(t.changed);
                
                document.getElementById('currentPassword').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('confirmPassword').value = '';
                
                changePasswordBtn.classList.remove('loading');
            }, 1500);
        };
        
        changePasswordBtn.addEventListener('click', handlePasswordChange);
        changePasswordBtn.addEventListener('touchstart', handlePasswordChange);
    }
}

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

console.log('Application initialized successfully!'); это полный код?


