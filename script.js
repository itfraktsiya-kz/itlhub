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
        email: "marat@itlyceum.edu.kz",
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
    },
    {
        id: 2,
        name: "Айгерім Оразбай",
        class: "11Б",
        achievement: {
            kk: "Қалалық математика олимпиадасының жеңімпазы",
            ru: "Победитель городской математической олимпиады",
            en: "Winner of City Mathematics Olympiad"
        },
        score: "4.8",
        awards: {
            kk: ["Алтын медаль", "Ең үздік шешім"],
            ru: ["Золотая медаль", "Лучшее решение"],
            en: ["Gold Medal", "Best Solution"]
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

        const calendarContainer = document.createElement('div');
        calendarContainer.className = 'calendar-container';
        
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
            calendarHTML += `<button class="calendar-day other-month" type="button">${new Date(this.currentYear, this.currentMonth, -i).getDate()}</button>`;
        }

        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
            
            let dayClass = 'calendar-day';
            if (isToday) dayClass += ' today';
            if (isSelected) dayClass += ' selected';
            
            calendarHTML += `<button class="${dayClass}" data-day="${day}" type="button">${day}</button>`;
        }

        const totalCells = 42;
        const remainingCells = totalCells - (startingDay + daysInMonth);
        for (let i = 1; i <= remainingCells; i++) {
            calendarHTML += `<button class="calendar-day other-month" type="button">${i}</button>`;
        }

        calendarHTML += `
            </div>
            <div class="calendar-actions">
                <button class="btn btn-outline btn-sm" id="calendarToday" type="button">
                    ${currentLanguage === 'kk' ? 'Бүгін' : currentLanguage === 'ru' ? 'Сегодня' : 'Today'}
                </button>
                <button class="btn btn-primary btn-sm" id="calendarSelect" type="button">
                    ${currentLanguage === 'kk' ? 'Таңдау' : currentLanguage === 'ru' ? 'Выбрать' : 'Select'}
                </button>
            </div>
        `;

        return calendarHTML;
    }

    attachEventListeners() {
        const input = document.getElementById(this.inputId);
        if (!input) return;
        
        // Используем touchstart и click для поддержки всех устройств
        const toggleCalendarHandler = (e) => {
            e.stopPropagation();
            this.toggleCalendar();
        };

        input.addEventListener('click', toggleCalendarHandler);
        input.addEventListener('touchstart', toggleCalendarHandler);

        const hideCalendarHandler = (e) => {
            if (!e.target.closest('.calendar-container')) {
                this.hideCalendar();
            }
        };

        document.addEventListener('click', hideCalendarHandler);
        document.addEventListener('touchstart', hideCalendarHandler);

        document.addEventListener('languageChanged', () => {
            this.updateCalendar();
        });
    }

    toggleCalendar() {
        if (this.calendarDropdown) {
            this.calendarDropdown.classList.toggle('show');
            if (this.calendarDropdown.classList.contains('show')) {
                this.updateCalendar();
            }
        }
    }

    hideCalendar() {
        if (this.calendarDropdown) {
            this.calendarDropdown.classList.remove('show');
        }
    }

    updateCalendar() {
        if (this.calendarDropdown) {
            this.calendarDropdown.innerHTML = this.getCalendarHTML();
            this.attachCalendarEvents();
        }
    }

    attachCalendarEvents() {
        const prevMonth = this.calendarDropdown?.querySelector('.prev-month');
        const nextMonth = this.calendarDropdown?.querySelector('.next-month');
        
        if (prevMonth) {
            prevMonth.addEventListener('click', () => this.navigateMonth(-1));
            prevMonth.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.navigateMonth(-1);
            });
        }
        
        if (nextMonth) {
            nextMonth.addEventListener('click', () => this.navigateMonth(1));
            nextMonth.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.navigateMonth(1);
            });
        }

        this.calendarDropdown?.querySelectorAll('.calendar-day:not(.other-month)').forEach(day => {
            const selectDayHandler = () => {
                this.selectDay(parseInt(day.getAttribute('data-day')));
            };
            
            day.addEventListener('click', selectDayHandler);
            day.addEventListener('touchstart', (e) => {
                e.preventDefault();
                selectDayHandler();
            });
        });

        const todayBtn = this.calendarDropdown?.querySelector('#calendarToday');
        if (todayBtn) {
            todayBtn.addEventListener('click', () => this.selectToday());
            todayBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.selectToday();
            });
        }

        const selectBtn = this.calendarDropdown?.querySelector('#calendarSelect');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => this.finalizeSelection());
            selectBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.finalizeSelection();
            });
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
            const input = document.getElementById(this.inputId);
            if (input) {
                const formattedDate = this.formatDate(this.selectedDate);
                input.value = formattedDate;
                this.hideCalendar();
                
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }
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
    // Улучшенная обработка событий для кнопки удаления
    const removeLinkHandler = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        linkField.remove();
    };
    
    removeBtn.addEventListener('click', removeLinkHandler);
    removeBtn.addEventListener('touchstart', removeLinkHandler);
    
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

// Initialize main application
function initializeMainApp() {
    console.log('Initializing main application...');
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebarCollapsed) {
        sidebar.classList.add('collapsed');
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

function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const sidebar = document.getElementById('sidebar');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const userBtnMobile = document.getElementById('userBtnMobile');

    // Улучшенная обработка мобильного меню
    const toggleMobileMenu = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (sidebar && mobileMenuOverlay) {
            sidebar.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        }
    };

    const closeMobileMenu = (e) => {
        if (e) {
            e.preventDefault();
        }
        if (sidebar && mobileMenuOverlay) {
            sidebar.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        mobileMenuToggle.addEventListener('touchstart', toggleMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('touchstart', closeMobileMenu);
    }

    if (themeToggleMobile) {
        const toggleThemeHandler = (e) => {
            if (e) e.preventDefault();
            toggleTheme();
        };
        
        themeToggleMobile.addEventListener('click', toggleThemeHandler);
        themeToggleMobile.addEventListener('touchstart', toggleThemeHandler);
    }

    if (userBtnMobile) {
        const loadProfile = (e) => {
            if (e) e.preventDefault();
            loadPage('profile');
            closeMobileMenu();
        };
        
        userBtnMobile.addEventListener('click', loadProfile);
        userBtnMobile.addEventListener('touchstart', loadProfile);
    }

    // Закрытие меню при клике на пункт меню
    const closeMenuOnItemClick = (e) => {
        if (window.innerWidth <= 1024) {
            if (e.target.closest('.menu-item') && sidebar && sidebar.classList.contains('active')) {
                closeMobileMenu();
            }
        }
    };

    document.addEventListener('click', closeMenuOnItemClick);
    document.addEventListener('touchstart', closeMenuOnItemClick);
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
                const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
                if (mobileMenuOverlay) {
                    sidebar.classList.remove('active');
                    mobileMenuOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            } else {
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
        };

        sidebarToggle.addEventListener('click', toggleSidebar);
        sidebarToggle.addEventListener('touchstart', toggleSidebar);
        
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
        
        // Анимация нажатия
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
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
        const toggleThemeHandler = (e) => {
            if (e) e.preventDefault();
            toggleTheme();
        };
        
        themeToggle.addEventListener('click', toggleThemeHandler);
        themeToggle.addEventListener('touchstart', toggleThemeHandler);
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
            const handleLangSelect = (e) => {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                langDropdown.classList.remove('show');
            };
            
            option.addEventListener('click', handleLangSelect);
            option.addEventListener('touchstart', handleLangSelect);
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
    
    // Обновление всех текстовых элементов с data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translations = {
            // Навигация
            school: { kk: 'Мектеп туралы', ru: 'О школе', en: 'About School' },
            news: { kk: 'Жаңалықтар', ru: 'Новости', en: 'News' },
            teachers: { kk: 'Мұғалімдер', ru: 'Учителя', en: 'Teachers' },
            students: { kk: 'Оқушылар', ru: 'Ученики', en: 'Students' },
            events: { kk: 'Іс-шаралар', ru: 'Мероприятия', en: 'Events' },
            profile: { kk: 'Жеке кабинет', ru: 'Личный кабинет', en: 'Profile' },
            
            // Общие элементы
            dashboard: { kk: 'Басқару панелі', ru: 'Панель управления', en: 'Dashboard' },
            welcome: { kk: 'Қош келдіңіз', ru: 'Добро пожаловать', en: 'Welcome' },
            search: { kk: 'Іздеу', ru: 'Поиск', en: 'Search' },
            notifications: { kk: 'Хабарландырулар', ru: 'Уведомления', en: 'Notifications' },
            settings: { kk: 'Баптаулар', ru: 'Настройки', en: 'Settings' },
            
            // Кнопки и действия
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
    
    // Обновление текста в форме авторизации
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
    if (!contentArea) return;
    
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
        // Fallback notification
        console.log(`${type}: ${message}`);
        // Создаем простое уведомление
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
    
    // Улучшенная обработка закрытия модального окна
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
            cybersecurity: "Киберқауіпсіздік",
            contacts: "Байланыс ақпараты"
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
            cybersecurity: "Кибербезопасность",
            contacts: "Контактная информация"
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
            cybersecurity: "Cybersecurity",
            contacts: "Contact Information"
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
                    <h3>${t.contacts}</h3>
                    <p><strong>${t.address}:</strong> ${currentLanguage === 'kk' ? 'Көкшетау қаласы, Абай көшесі 123' : currentLanguage === 'ru' ? 'г. Кокшетау, ул. Абая 123' : 'Kokshetau city, Abay street 123'}</p>
                    <p><strong>${t.phone}:</strong> +7 (7162) 12-34-56</p>
                    <p><strong>${t.email}:</strong> info@itlyceum.edu.kz</p>
                    <p><strong>${t.website}:</strong> www.itlyceum.edu.kz</p>
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
                        <h3>${t.programming}</h3>
                        <p>Python, Java, C++</p>
                    </div>
                    <div class="stat-card">
                        <h3>${t.webdev}</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                    <div class="stat-card">
                        <h3>${t.databases}</h3>
                        <p>SQL, MySQL, PostgreSQL</p>
                    </div>
                    <div class="stat-card">
                        <h3>${t.cybersecurity}</h3>
                        <p>${currentLanguage === 'kk' ? 'Қауіпсіздік негіздері' : currentLanguage === 'ru' ? 'Основы безопасности' : 'Security Fundamentals'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getNewsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Admin';

    const translations = {
        kk: {
            title: "Жаңалықтар",
            addNews: "Жаңалық қосу",
            titleLabel: "Атауы",
            contentLabel: "Сипаттама", 
            dateLabel: "Күні",
            imageLabel: "Сурет",
            bannerLabel: "Банер (150x200)",
            addButton: "Қосу",
            readMore: "Толығырақ",
            allFields: "Барлық өрістерді толтырыңыз!",
            newsAdded: "Жаңалық сәтті қосылды!",
            newsDeleted: "Жаңалық жойылды!",
            toggleForm: "Жаңалық қосу формасы",
            linksLabel: "Сілтемелер",
            addLink: "Сілтеме қосу",
            linkTitle: "Сілтеме атауы",
            linkUrl: "URL мекенжайы",
            removeLink: "Жою",
            noImage: "Сурет жоқ",
            dragImage: "Суретті тартып апарыңыз немесе басыңыз",
            dragBanner: "150x200 өлшеміндегі сурет",
            additionalMaterials: "Қосымша материалдар:",
            more: "тағы"
        },
        ru: {
            title: "Новости", 
            addNews: "Добавить новость",
            titleLabel: "Название",
            contentLabel: "Описание",
            dateLabel: "Дата", 
            imageLabel: "Изображение",
            bannerLabel: "Баннер (150x200)",
            addButton: "Добавить",
            readMore: "Подробнее",
            allFields: "Заполните все поля!",
            newsAdded: "Новость успешно добавлена!",
            newsDeleted: "Новость удалена!",
            toggleForm: "Форма добавления новости",
            linksLabel: "Ссылки",
            addLink: "Добавить ссылку",
            linkTitle: "Название ссылки",
            linkUrl: "URL адрес",
            removeLink: "Удалить",
            noImage: "Изображение отсутствует",
            dragImage: "Перетащите изображение или нажмите",
            dragBanner: "Изображение размером 150x200",
            additionalMaterials: "Дополнительные материалы:",
            more: "еще"
        },
        en: {
            title: "News",
            addNews: "Add News", 
            titleLabel: "Title",
            contentLabel: "Description",
            dateLabel: "Date",
            imageLabel: "Image",
            bannerLabel: "Banner (150x200)", 
            addButton: "Add",
            readMore: "Read More",
            allFields: "Please fill all fields!",
            newsAdded: "News successfully added!",
            newsDeleted: "News deleted!",
            toggleForm: "Add News Form",
            linksLabel: "Links",
            addLink: "Add Link",
            linkTitle: "Link Title",
            linkUrl: "URL Address",
            removeLink: "Remove",
            noImage: "No Image",
            dragImage: "Drag and drop image or click",
            dragBanner: "Image sized 150x200",
            additionalMaterials: "Additional Materials:",
            more: "more"
        }
    };

    const t = translations[currentLanguage] || translations.kk;
    
    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            ${isAdmin ? `
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 class="card-title">${t.addNews}</h2>
                    <button class="btn btn-primary" id="showNewsFormBtn" type="button">
                        <i class="fas fa-plus"></i>
                        ${t.addButton}
                    </button>
                </div>
            </div>

            <div class="card admin-panel-compact" id="newsFormPanel" style="display: none; margin-bottom: 2rem;">
                <div class="admin-panel-content">
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.titleLabel} *</label>
                            <input type="text" id="newsTitle" class="form-input" placeholder="${t.titleLabel}">
                        </div>
                        <div class="form-group">
                            <label>${t.dateLabel} *</label>
                            <input type="text" id="newsDate" class="form-input calendar-input" placeholder="${t.dateLabel}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>${t.contentLabel} *</label>
                        <textarea id="newsContent" class="form-input" rows="3" placeholder="${t.contentLabel}"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>${t.linksLabel}</label>
                        <div id="newsLinksContainer">
                        </div>
                        <button type="button" class="btn btn-outline btn-sm" id="addNewsLinkBtn">
                            <i class="fas fa-plus"></i>
                            ${t.addLink}
                        </button>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.imageLabel}</label>
                            <div class="file-upload" id="newsFileUpload">
                                <input type="file" id="newsImageInput" accept="image/*">
                                <label for="newsImageInput" class="file-upload-label">
                                    <span>${t.imageLabel}</span>
                                    <small>${t.dragImage}</small>
                                </label>
                                <img class="file-preview" id="newsImagePreview">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>${t.bannerLabel}</label>
                            <div class="banner-upload" id="newsBannerUpload">
                                <input type="file" id="newsBannerInput" accept="image/*">
                                <label for="newsBannerInput" class="file-upload-label">
                                    <span>${t.bannerLabel}</span>
                                    <small>${t.dragBanner}</small>
                                </label>
                                <img class="banner-preview" id="newsBannerPreview">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-primary btn-compact" id="addNewsBtn" type="button">
                            <i class="fas fa-plus"></i>
                            <span class="btn-text">${t.addButton}</span>
                            <div class="btn-loader"></div>
                        </button>
                        <button class="btn btn-outline btn-compact" id="cancelNewsBtn" type="button">
                            <i class="fas fa-times"></i>
                            ${currentLanguage === 'kk' ? 'Болдырмау' : currentLanguage === 'ru' ? 'Отмена' : 'Cancel'}
                        </button>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <div class="news-grid">
                ${newsData.length > 0 ? newsData.map(news => `
                    <div class="news-item" data-id="${news.id}">
                        ${isAdmin ? `<button class="delete-btn admin-only" data-id="${news.id}" data-type="news" type="button">×</button>` : ''}
                        
                        ${news.banner ? `
                            <img src="${news.banner}" class="news-banner" alt="${news.title[currentLanguage] || news.title['kk']}" loading="lazy">
                        ` : news.image ? `
                            <img src="${news.image}" class="news-banner" alt="${news.title[currentLanguage] || news.title['kk']}" loading="lazy">
                        ` : `
                            <div class="news-banner">
                                <span>${t.noImage}</span>
                            </div>
                        `}
                        
                        <div style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.875rem;">
                            <i class="fas fa-calendar-alt"></i> ${formatDateForDisplay(news.date)}
                        </div>
                        
                        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${news.title[currentLanguage] || news.title['kk']}</h3>
                        
                        <p style="margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                            ${(news.content[currentLanguage] || news.content['kk']).length > 150 ? (news.content[currentLanguage] || news.content['kk']).substring(0, 150) + '...' : (news.content[currentLanguage] || news.content['kk'])}
                        </p>
                        
                        ${news.links && news.links.length > 0 ? `
                            <div class="news-links" style="margin-bottom: 1rem;">
                                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                                    <i class="fas fa-link"></i> 
                                    ${t.additionalMaterials}
                                </div>
                                <div class="links-preview">
                                    ${news.links.slice(0, 2).map(link => `
                                        <a href="${link.url}" target="_blank" class="link-preview" title="${link.title}">
                                            <i class="fas fa-external-link-alt"></i>
                                            ${link.title.length > 30 ? link.title.substring(0, 30) + '...' : link.title}
                                        </a>
                                    `).join('')}
                                    ${news.links.length > 2 ? `
                                        <span class="more-links">+${news.links.length - 2} ${t.more}</span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="card-actions">
                            <button class="btn btn-outline btn-animated read-more-btn" data-id="${news.id}" data-type="news" type="button">
                                <i class="fas fa-book-open"></i>
                                ${t.readMore}
                            </button>
                        </div>
                    </div>
                `).join('') : `
                    <div class="empty-state">
                        <i class="fas fa-newspaper" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                        <h3>${currentLanguage === 'kk' ? 'Жаңалықтар жоқ' : currentLanguage === 'ru' ? 'Новостей нет' : 'No news available'}</h3>
                        <p>${currentLanguage === 'kk' ? 'Әзірге ешқандай жаңалық жоқ' : currentLanguage === 'ru' ? 'Пока нет новостей' : 'There are no news yet'}</p>
                    </div>
                `}
            </div>
        </div>
    `;
}

function getTeachersPage() {
    const subjects = [...new Set(teachersData.map(teacher => teacher.subject[currentLanguage] || teacher.subject['kk']))];
    
    const translations = {
        kk: {
            title: "Мұғалімдер",
            filter: "Пән бойынша сүзгілеу",
            all: "Барлығы",
            contact: "Байланысу",
            experience: "тәжірибе",
            phone: "Телефон",
            email: "Электронды пошта",
            degree: "дәреже",
            bio: "қысқаша мәлімет"
        },
        ru: {
            title: "Учителя",
            filter: "Фильтр по предметам",
            all: "Все",
            contact: "Связаться", 
            experience: "опыт",
            phone: "Телефон",
            email: "Электронная почта",
            degree: "степень",
            bio: "краткая информация"
        },
        en: {
            title: "Teachers",
            filter: "Filter by Subject",
            all: "All",
            contact: "Contact",
            experience: "experience", 
            phone: "Phone",
            email: "Email",
            degree: "degree",
            bio: "brief information"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            <div class="card">
                <h2 class="card-title">${t.filter}</h2>
                <div class="filter-buttons">
                    <button class="filter-btn active" data-subject="all" type="button">${t.all}</button>
                    ${subjects.map(subject => `
                        <button class="filter-btn" data-subject="${subject}" type="button">${subject}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="teachers-grid">
                ${teachersData.map(teacher => `
                    <div class="teacher-card" data-subject="${teacher.subject[currentLanguage] || teacher.subject['kk']}">
                        ${teacher.image ? `
                            <img src="${teacher.image}" alt="${teacher.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;" loading="lazy">
                        ` : `
                            <div style="width: 80px; height: 80px; background: ${getRandomColor()}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.25rem; margin: 0 auto 1rem;">
                                ${getInitials(teacher.name)}
                            </div>
                        `}
                        
                        <h3 style="margin-bottom: 0.5rem; color: var(--text-primary);">${teacher.name}</h3>
                        
                        <p style="color: var(--primary); font-weight: 600; margin-bottom: 0.5rem;">${teacher.subject[currentLanguage] || teacher.subject['kk']}</p>
                        
                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;">
                            <i class="fas fa-graduation-cap"></i> ${teacher.degree} (${t.degree})
                        </p>
                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem;">
                            <i class="fas fa-clock"></i> ${teacher.experience[currentLanguage] || teacher.experience['kk']} ${t.experience}
                        </p>
                        
                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem; line-height: 1.4;">
                            ${teacher.bio[currentLanguage] || teacher.bio['kk']}
                        </p>
                        
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
                            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.25rem;">
                                <i class="fas fa-phone"></i> ${t.phone}: ${teacher.phone}
                            </p>
                            <p style="font-size: 0.875rem; color: var(--text-secondary);">
                                <i class="fas fa-envelope"></i> ${t.email}: ${teacher.email}
                            </p>
                        </div>
                        
                        <button class="btn btn-outline btn-animated contact-teacher-btn" data-teacher="${teacher.name}" style="margin-top: 1rem;" type="button">
                            <i class="fas fa-comments"></i>
                            ${t.contact}
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getStudentsPage() {
    const translations = {
        kk: {
            title: "Оқушылар",
            statistics: "Статистика",
            topStudents: "Үздік оқушылар",
            allStudents: "Оқушы",
            girls: "Қыздар", 
            boys: "Ұлдар",
            averageScore: "Орташа балл",
            class: "Сынып",
            achievement: "Жетістік",
            awards: "Марапаттар",
            score: "Балл"
        },
        ru: {
            title: "Ученики",
            statistics: "Статистика",
            topStudents: "Лучшие ученики",
            allStudents: "Учеников",
            girls: "Девочки",
            boys: "Мальчики",
            averageScore: "Средний балл",
            class: "Класс",
            achievement: "Достижение", 
            awards: "Награды",
            score: "Балл"
        },
        en: {
            title: "Students",
            statistics: "Statistics",
            topStudents: "Top Students",
            allStudents: "Students",
            girls: "Girls",
            boys: "Boys",
            averageScore: "Average Score", 
            class: "Class",
            achievement: "Achievement",
            awards: "Awards",
            score: "Score"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            <div class="card">
                <h2 class="card-title">${t.statistics}</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>524</h3>
                        <p>${t.allStudents}</p>
                    </div>
                    <div class="stat-card">
                        <h3>186</h3>
                        <p>${t.girls}</p>
                    </div>
                    <div class="stat-card">
                        <h3>338</h3>
                        <p>${t.boys}</p>
                    </div>
                    <div class="stat-card">
                        <h3>4.7</h3>
                        <p>${t.averageScore}</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2 class="card-title">${t.topStudents}</h2>
                <div class="students-grid">
                    ${studentsData.map(student => `
                        <div class="student-card">
                            ${student.image ? `
                                <img src="${student.image}" alt="${student.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;" loading="lazy">
                            ` : `
                                <div style="width: 80px; height: 80px; background: ${getRandomColor()}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.25rem; margin: 0 auto 1rem;">
                                    ${getInitials(student.name)}
                                </div>
                            `}
                            
                            <h3 style="margin-bottom: 0.5rem; color: var(--text-primary);">${student.name}</h3>
                            
                            <p style="color: var(--text-secondary); margin-bottom: 0.25rem;">
                                <strong><i class="fas fa-users"></i> ${t.class}:</strong> ${student.class}
                            </p>
                            
                            <p style="color: var(--text-secondary); margin-bottom: 0.25rem;">
                                <strong><i class="fas fa-star"></i> ${t.score}:</strong> ${student.score}
                            </p>
                            
                            <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                                <strong><i class="fas fa-trophy"></i> ${t.achievement}:</strong> ${student.achievement[currentLanguage] || student.achievement['kk']}
                            </p>
                            
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
                                ${student.awards[currentLanguage] ? student.awards[currentLanguage].map(award => `
                                    <span style="background: var(--primary); color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                                        ${award}
                                    </span>
                                `).join('') : student.awards['kk'].map(award => `
                                    <span style="background: var(--primary); color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                                        ${award}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function getEventsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Admin';

    const translations = {
        kk: {
            title: "Іс-шаралар",
            addEvent: "Іс-шара қосу",
            titleLabel: "Атауы",
            descriptionLabel: "Сипаттама",
            dateLabel: "Күні",
            imageLabel: "Сурет",
            bannerLabel: "Банер (150x200)",
            addButton: "Қосу",
            participate: "Қатысу",
            readMore: "Толығырақ",
            allFields: "Барлық өрістерді толтырыңыз!",
            eventAdded: "Іс-шара сәтті қосылды!",
            eventDeleted: "Іс-шара жойылды!",
            toggleForm: "Іс-шара қосу формасы",
            linksLabel: "Сілтемелер",
            addLink: "Сілтеме қосу",
            linkTitle: "Сілтеме атауы",
            linkUrl: "URL мекенжайы",
            removeLink: "Жою",
            noImage: "Сурет жоқ",
            dragImage: "Суретті тартып апарыңыз немесе басыңыз",
            dragBanner: "150x200 өлшеміндегі сурет",
            additionalMaterials: "Қосымша материалдар:",
            more: "тағы"
        },
        ru: {
            title: "Мероприятия",
            addEvent: "Добавить мероприятие",
            titleLabel: "Название",
            descriptionLabel: "Описание",
            dateLabel: "Дата",
            imageLabel: "Изображение",
            bannerLabel: "Баннер (150x200)",
            addButton: "Добавить",
            participate: "Участвовать",
            readMore: "Подробнее",
            allFields: "Заполните все поля!",
            eventAdded: "Мероприятие успешно добавлено!",
            eventDeleted: "Мероприятие удалено!",
            toggleForm: "Форма добавления мероприятия",
            linksLabel: "Ссылки",
            addLink: "Добавить ссылку",
            linkTitle: "Название ссылки",
            linkUrl: "URL адрес",
            removeLink: "Удалить",
            noImage: "Изображение отсутствует",
            dragImage: "Перетащите изображение или нажмите",
            dragBanner: "Изображение размером 150x200",
            additionalMaterials: "Дополнительные материалы:",
            more: "еще"
        },
        en: {
            title: "Events",
            addEvent: "Add Event",
            titleLabel: "Title",
            descriptionLabel: "Description",
            dateLabel: "Date",
            imageLabel: "Image",
            bannerLabel: "Banner (150x200)",
            addButton: "Add",
            participate: "Participate",
            readMore: "Read More",
            allFields: "Please fill all fields!",
            eventAdded: "Event successfully added!",
            eventDeleted: "Event deleted!",
            toggleForm: "Add Event Form",
            linksLabel: "Links",
            addLink: "Add Link",
            linkTitle: "Link Title",
            linkUrl: "URL Address",
            removeLink: "Remove",
            noImage: "No Image",
            dragImage: "Drag and drop image or click",
            dragBanner: "Image sized 150x200",
            additionalMaterials: "Additional Materials:",
            more: "more"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            ${isAdmin ? `
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 class="card-title">${t.addEvent}</h2>
                    <button class="btn btn-primary" id="showEventFormBtn" type="button">
                        <i class="fas fa-plus"></i>
                        ${t.addButton}
                    </button>
                </div>
            </div>

            <div class="card admin-panel-compact" id="eventFormPanel" style="display: none; margin-bottom: 2rem;">
                <div class="admin-panel-content">
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.titleLabel} *</label>
                            <input type="text" id="eventTitle" class="form-input" placeholder="${t.titleLabel}">
                        </div>
                        <div class="form-group">
                            <label>${t.dateLabel} *</label>
                            <input type="text" id="eventDate" class="form-input calendar-input" placeholder="${t.dateLabel}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>${t.descriptionLabel} *</label>
                        <textarea id="eventDescription" class="form-input" rows="3" placeholder="${t.descriptionLabel}"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>${t.linksLabel}</label>
                        <div id="eventLinksContainer">
                        </div>
                        <button type="button" class="btn btn-outline btn-sm" id="addEventLinkBtn">
                            <i class="fas fa-plus"></i>
                            ${t.addLink}
                        </button>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.imageLabel}</label>
                            <div class="file-upload" id="eventFileUpload">
                                <input type="file" id="eventImageInput" accept="image/*">
                                <label for="eventImageInput" class="file-upload-label">
                                    <span>${t.imageLabel}</span>
                                    <small>${t.dragImage}</small>
                                </label>
                                <img class="file-preview" id="eventImagePreview">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>${t.bannerLabel}</label>
                            <div class="banner-upload" id="eventBannerUpload">
                                <input type="file" id="eventBannerInput" accept="image/*">
                                <label for="eventBannerInput" class="file-upload-label">
                                    <span>${t.bannerLabel}</span>
                                    <small>${t.dragBanner}</small>
                                </label>
                                <img class="banner-preview" id="eventBannerPreview">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-primary btn-compact" id="addEventBtn" type="button">
                            <i class="fas fa-plus"></i>
                            <span class="btn-text">${t.addButton}</span>
                            <div class="btn-loader"></div>
                        </button>
                        <button class="btn btn-outline btn-compact" id="cancelEventBtn" type="button">
                            <i class="fas fa-times"></i>
                            ${currentLanguage === 'kk' ? 'Болдырмау' : currentLanguage === 'ru' ? 'Отмена' : 'Cancel'}
                        </button>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <div class="events-grid">
                ${eventsData.length > 0 ? eventsData.map(event => `
                    <div class="event-item" data-id="${event.id}">
                        ${isAdmin ? `<button class="delete-btn admin-only" data-id="${event.id}" data-type="event" type="button">×</button>` : ''}
                        
                        ${event.banner ? `
                            <img src="${event.banner}" class="event-banner" alt="${event.title[currentLanguage] || event.title['kk']}" loading="lazy">
                        ` : event.image ? `
                            <img src="${event.image}" class="event-banner" alt="${event.title[currentLanguage] || event.title['kk']}" loading="lazy">
                        ` : `
                            <div class="event-banner">
                                <span>${t.noImage}</span>
                            </div>
                        `}
                        
                        <div style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.875rem;">
                            <i class="fas fa-calendar-alt"></i> ${formatDateForDisplay(event.date)}
                        </div>
                        
                        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${event.title[currentLanguage] || event.title['kk']}</h3>
                        
                        <p style="margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                            ${(event.description[currentLanguage] || event.description['kk']).length > 150 ? (event.description[currentLanguage] || event.description['kk']).substring(0, 150) + '...' : (event.description[currentLanguage] || event.description['kk'])}
                        </p>
                        
                        ${event.links && event.links.length > 0 ? `
                            <div class="event-links" style="margin-bottom: 1rem;">
                                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                                    <i class="fas fa-link"></i> 
                                    ${t.additionalMaterials}
                                </div>
                                <div class="links-preview">
                                    ${event.links.slice(0, 2).map(link => `
                                        <a href="${link.url}" target="_blank" class="link-preview" title="${link.title}">
                                            <i class="fas fa-external-link-alt"></i>
                                            ${link.title.length > 30 ? link.title.substring(0, 30) + '...' : link.title}
                                        </a>
                                    `).join('')}
                                    ${event.links.length > 2 ? `
                                        <span class="more-links">+${event.links.length - 2} ${t.more}</span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="card-actions">
                            <button class="btn btn-primary btn-animated participate-event-btn" data-id="${event.id}" type="button">
                                <i class="fas fa-user-plus"></i>
                                ${t.participate}
                            </button>
                            <button class="btn btn-outline btn-animated read-more-btn" data-id="${event.id}" data-type="event" type="button">
                                <i class="fas fa-info-circle"></i>
                                ${t.readMore}
                            </button>
                        </div>
                    </div>
                `).join('') : `
                    <div class="empty-state">
                        <i class="fas fa-calendar-alt" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                        <h3>${currentLanguage === 'kk' ? 'Іс-шаралар жоқ' : currentLanguage === 'ru' ? 'Мероприятий нет' : 'No events available'}</h3>
                        <p>${currentLanguage === 'kk' ? 'Әзірге ешқандай іс-шара жоқ' : currentLanguage === 'ru' ? 'Пока нет мероприятий' : 'There are no events yet'}</p>
                    </div>
                `}
            </div>
        </div>
    `;
}

function getProfilePage() {
    const currentUser = window.authSystem?.getCurrentUser();
    
    const translations = {
        kk: {
            title: "Жеке кабинет",
            roleNotSelected: "Рөл таңдалмаған",
            selectRole: "Рөлді таңдаңыз",
            changePassword: "Құпия сөзді өзгерту",
            currentPassword: "Қазіргі құпия сөз",
            newPassword: "Жаңа құпия сөз",
            confirmPassword: "Жаңа құпия сөзді растау",
            changeButton: "Өзгерту",
            logout: "Жүйеден шығу",
            passwordChanged: "Құпия сөз сәтті өзгертілді!",
            passwordsNotMatch: "Құпия сөздер сәйкес емес!",
            fillAllFields: "Барлық өрістерді толтырыңыз!",
            adminPanel: "Админ панелі",
            adminFeatures: "Сізде барлық функцияларға толық қол жетімділік бар:",
            teacherPanel: "Мұғалім панелі",
            teacherFeatures: "Сізге мына функциялар қол жетімді:",
            studentPanel: "Оқушы панелі",
            studentFeatures: "Сізге мына функциялар қол жетімді:",
            yourClass: "Сыныбыңыз",
            personalInfo: "Жеке ақпарат",
            systemSettings: "Жүйе баптаулары"
        },
        ru: {
            title: "Личный кабинет",
            roleNotSelected: "Роль не выбрана",
            selectRole: "Выбрать роль",
            changePassword: "Изменить пароль",
            currentPassword: "Текущий пароль",
            newPassword: "Новый пароль",
            confirmPassword: "Подтвердите новый пароль",
            changeButton: "Изменить",
            logout: "Выйти из системы",
            passwordChanged: "Пароль успешно изменен!",
            passwordsNotMatch: "Пароли не совпадают!",
            fillAllFields: "Заполните все поля!",
            adminPanel: "Админ панель",
            adminFeatures: "У вас есть полный доступ ко всем функциям:",
            teacherPanel: "Панель учителя",
            teacherFeatures: "Вам доступны следующие функции:",
            studentPanel: "Панель ученика",
            studentFeatures: "Вам доступны следующие функции:",
            yourClass: "Ваш класс",
            personalInfo: "Личная информация",
            systemSettings: "Настройки системы"
        },
        en: {
            title: "Profile",
            roleNotSelected: "Role not selected",
            selectRole: "Select role",
            changePassword: "Change Password",
            currentPassword: "Current Password",
            newPassword: "New Password",
            confirmPassword: "Confirm New Password",
            changeButton: "Change",
            logout: "Log out",
            passwordChanged: "Password successfully changed!",
            passwordsNotMatch: "Passwords do not match!",
            fillAllFields: "Please fill all fields!",
            adminPanel: "Admin Panel",
            adminFeatures: "You have full access to all functions:",
            teacherPanel: "Teacher Panel",
            teacherFeatures: "You have access to the following functions:",
            studentPanel: "Student Panel",
            studentFeatures: "You have access to the following functions:",
            yourClass: "Your class",
            personalInfo: "Personal Information",
            systemSettings: "System Settings"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    function getUserSpecificContent() {
        const user = window.authSystem?.getCurrentUser();
        
        if (!user) return '';
        
        const roleContents = {
            'Admin': `
                <div class="card role-info-card">
                    <h3 class="card-title">${t.adminPanel}</h3>
                    <p>${t.adminFeatures}</p>
                    <ul class="role-features-list">
                        <li>${currentLanguage === 'kk' ? 'Жаңалықтарды қосу/жою' : currentLanguage === 'ru' ? 'Добавление/удаление новостей' : 'Add/delete news'}</li>
                        <li>${currentLanguage === 'kk' ? 'Іс-шараларды қосу/жою' : currentLanguage === 'ru' ? 'Добавление/удаление мероприятий' : 'Add/delete events'}</li>
                        <li>${currentLanguage === 'kk' ? 'Сілтемелерді қосу' : currentLanguage === 'ru' ? 'Добавление ссылок' : 'Add links'}</li>
                        <li>${currentLanguage === 'kk' ? 'Барлық ақпаратты көру' : currentLanguage === 'ru' ? 'Просмотр всей информации' : 'View all information'}</li>
                        <li>${currentLanguage === 'kk' ? 'Жүйені басқару' : currentLanguage === 'ru' ? 'Управление системой' : 'System management'}</li>
                    </ul>
                </div>
            `,
            'Мұғалім': `
                <div class="card role-info-card">
                    <h3 class="card-title">${t.teacherPanel}</h3>
                    <p>${t.teacherFeatures}</p>
                    <ul class="role-features-list">
                        <li>${currentLanguage === 'kk' ? 'Жаңалықтарды көру' : currentLanguage === 'ru' ? 'Просмотр новостей' : 'View news'}</li>
                        <li>${currentLanguage === 'kk' ? 'Іс-шараларды көру' : currentLanguage === 'ru' ? 'Просмотр мероприятий' : 'View events'}</li>
                        <li>${currentLanguage === 'kk' ? 'Сілтемелерге қол жеткізу' : currentLanguage === 'ru' ? 'Доступ к ссылкам' : 'Access to links'}</li>
                        <li>${currentLanguage === 'kk' ? 'Оқушылар тізімін көру' : currentLanguage === 'ru' ? 'Просмотр списка учеников' : 'View student list'}</li>
                        <li>${currentLanguage === 'kk' ? 'Жеке кабинет' : currentLanguage === 'ru' ? 'Личный кабинет' : 'Personal account'}</li>
                    </ul>
                </div>
            `,
            'Оқушы': `
                <div class="card role-info-card">
                    <h3 class="card-title">${t.studentPanel}</h3>
                    <p>${t.studentFeatures}</p>
                    <ul class="role-features-list">
                        <li>${currentLanguage === 'kk' ? 'Жаңалықтарды көру' : currentLanguage === 'ru' ? 'Просмотр новостей' : 'View news'}</li>
                        <li>${currentLanguage === 'kk' ? 'Іс-шараларға қатысу' : currentLanguage === 'ru' ? 'Участие в мероприятиях' : 'Participate in events'}</li>
                        <li>${currentLanguage === 'kk' ? 'Сілтемелерге қол жеткізу' : currentLanguage === 'ru' ? 'Доступ к ссылкам' : 'Access to links'}</li>
                        <li>${currentLanguage === 'kk' ? 'Мұғалімдермен байланысу' : currentLanguage === 'ru' ? 'Связь с учителями' : 'Contact teachers'}</li>
                        <li>${currentLanguage === 'kk' ? 'Жеке кабинет' : currentLanguage === 'ru' ? 'Личный кабинет' : 'Personal account'}</li>
                    </ul>
                    ${user.class ? `<p class="class-info"><strong>${t.yourClass}:</strong> ${user.class}</p>` : ''}
                </div>
            `
        };
        
        return roleContents[user.role] || '';
    }

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            ${getUserSpecificContent()}

            <div class="card profile-header">
                <div class="profile-avatar">
                    <div class="avatar-large">
                        ${getInitials(currentUser?.fullName || 'U')}
                    </div>
                </div>
                <div class="profile-info">
                    <h2 class="profile-name">${currentUser?.fullName || 'User'}</h2>
                    <div class="profile-role">
                        <span class="role-badge ${currentUser?.role ? 'role-selected' : 'role-not-selected'}">
                            ${currentUser?.role || t.roleNotSelected}
                        </span>
                    </div>
                    ${!currentUser?.role ? `
                        <button class="btn btn-primary btn-sm select-role-btn" type="button">
                            <i class="fas fa-check"></i>
                            ${t.selectRole}
                        </button>
                    ` : ''}
                </div>
            </div>

            <div class="card">
                <h3 class="section-title">${t.changePassword}</h3>
                <div class="password-form">
                    <div class="form-group">
                        <label>${t.currentPassword}</label>
                        <input type="password" id="currentPassword" class="form-input" placeholder="${t.currentPassword}">
                    </div>
                    <div class="form-group">
                        <label>${t.newPassword}</label>
                        <input type="password" id="newPassword" class="form-input" placeholder="${t.newPassword}">
                    </div>
                    <div class="form-group">
                        <label>${t.confirmPassword}</label>
                        <input type="password" id="confirmPassword" class="form-input" placeholder="${t.confirmPassword}">
                    </div>
                    <button class="btn btn-primary btn-animated" id="changePasswordBtn" type="button">
                        <i class="fas fa-key"></i>
                        <span class="btn-text">${t.changeButton}</span>
                        <div class="btn-loader"></div>
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="logout-section">
                    <button class="btn btn-danger btn-full" id="logoutBtnProfile" type="button">
                        <i class="fas fa-sign-out-alt"></i>
                        ${t.logout}
                    </button>
                </div>
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
                    
                    // Сброс формы
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
        
        // Обработчики для предпросмотра изображений
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
    
    // Улучшенные обработчики для кнопок новостей
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
                    
                    // Сброс формы
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
        
        // Обработчики для предпросмотра изображений
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
    
    // Улучшенные обработчики для кнопок событий
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
// Force show sidebar toggle button
function fixSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (sidebarToggle) {
        sidebarToggle.style.display = 'flex';
        sidebarToggle.style.visibility = 'visible';
        sidebarToggle.style.opacity = '1';
        sidebarToggle.style.pointerEvents = 'all';
    }
    
    if (mobileMenuToggle) {
        mobileMenuToggle.style.display = 'flex';
        mobileMenuToggle.style.visibility = 'visible';
        mobileMenuToggle.style.opacity = '1';
        mobileMenuToggle.style.pointerEvents = 'all';
    }
}

// Call on page load and after DOM changes
document.addEventListener('DOMContentLoaded', fixSidebarToggle);
window.addEventListener('load', fixSidebarToggle);

// Also call when the main app initializes
const originalInitializeMainApp = window.initializeMainApp;
window.initializeMainApp = function() {
    if (originalInitializeMainApp) {
        originalInitializeMainApp();
    }
    setTimeout(fixSidebarToggle, 100);
};
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

console.log('Application initialized successfully!');


