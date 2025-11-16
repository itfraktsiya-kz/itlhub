// API для работы с пользователями
class UserAPI {
    constructor() {
        this.baseURL = 'http://localhost:5000/api'; // URL вашего Python бэкенда
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
    },
    {
        id: 2,
        title: {
            kk: "IT олимпиадасының жеңімпаздары",
            ru: "Победители IT олимпиады",
            en: "IT Olympiad Winners"
        },
        content: {
            kk: "Республикалық IT олимпиадасында біздің мектеп оқушылары жеңіске жетті. 10А сыныбының оқушысы Ержигит Мансур бірінші орынға ие болды. Ол күрделі алгоритмдік есептерді шешуде ерекше талант танытты.",
            ru: "На республиканской IT олимпиаде наши школьники достигли успеха. Ученик 10А класса Ержигит Мансур занял первое место. Он показал особый талант в решении сложных алгоритмических задач.",
            en: "Our school students achieved success at the Republican IT Olympiad. Erzhigit Mansur from class 10A won first place. He demonstrated exceptional talent in solving complex algorithmic problems."
        },
        date: "2024-10-15",
        formattedDate: {
            kk: "15 Қазан 2024",
            ru: "15 Октября 2024", 
            en: "October 15, 2024"
        },
        banner: null,
        image: null,
        links: [
            {
                title: "Олимпиада нәтижелері",
                url: "https://example.com/olympiad-results"
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
            },
            {
                title: "Мектеп картасы",
                url: "https://example.com/school-map"
            }
        ]
    },
    {
        id: 2,
        title: {
            kk: "Ғылыми конференция",
            ru: "Научная конференция",
            en: "Scientific Conference"
        },
        description: {
            kk: "Жылдық ғылыми жобалар конференциясы. Оқушылар өздерінің ғылыми жобаларын ұсынады. Барлық қатысушыларды күтеміз.",
            ru: "Ежегодная конференция научных проектов. Ученики представляют свои научные проекты. Ждем всех участников.",
            en: "Annual scientific projects conference. Students present their scientific projects. We welcome all participants."
        },
        date: "2024-10-20",
        formattedDate: {
            kk: "20 Қазан 2024",
            ru: "20 Октября 2024",
            en: "October 20, 2024"
        },
        banner: null,
        image: null,
        links: [
            {
                title: "Жобаны тіркеу",
                url: "https://example.com/project-registration"
            },
            {
                title: "Ережелер",
                url: "https://example.com/conference-rules"
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
        name: "Гүлнар Кәрімова",
        subject: {
            kk: "Қазақ тілі",
            ru: "Казахский язык",
            en: "Kazakh Language"
        },
        phone: "+7 701 234 56 78", 
        email: "gulnar@itlyceum.edu.kz",
        experience: {
            kk: "12 жыл", 
            ru: "12 лет",
            en: "12 years"
        },
        degree: "Магистр",
        bio: {
            kk: "Қазақ тілі мен әдебиетінің шебері. Оқушылардың сөйлеу дағдыларын дамытуға баса назар аударады.",
            ru: "Мастер казахского языка и литературы. Уделяет особое внимание развитию разговорных навыков учеников.",
            en: "Master of Kazakh language and literature. Focuses on developing students' speaking skills."
        },
        image: null
    },
    {
        id: 3,
        name: "Бауыржан Тәжібаев",
        subject: {
            kk: "Информатика",
            ru: "Информатика",
            en: "Computer Science"
        },
        phone: "+7 701 456 78 90",
        email: "bauyrzhan@itlyceum.edu.kz", 
        experience: {
            kk: "8 жыл",
            ru: "8 лет", 
            en: "8 years"
        },
        degree: "PhD",
        bio: {
            kk: "IT саласындағы тәжірибелі маман. Бірнеше бағдарламалық жобалардың авторы.",
            ru: "Опытный специалист в IT сфере. Автор нескольких программных проектов.",
            en: "Experienced specialist in IT field. Author of several software projects."
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
        name: "Аружан Әбілда",
        class: "11Б", 
        achievement: {
            kk: "Ғылыми жобалар конкурсының жеңімпазы",
            ru: "Победитель конкурса научных проектов",
            en: "Winner of Scientific Projects Competition"
        },
        score: "4.8",
        awards: {
            kk: ["Екінші орын", "Ең инновациялық жоба"],
            ru: ["Второе место", "Самый инновационный проект"],
            en: ["Second Place", "Most Innovative Project"]
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
        const totalCells = 42; // 6 weeks
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
            
            // Trigger change event
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
    setupLogout();
    loadPage('school');
    
    // Update page name in breadcrumb
    updateBreadcrumb('school');
    
    // Update user interface based on role
    updateUserInterface();
}

function updateUserInterface() {
    const currentUser = window.authSystem?.getCurrentUser();
    if (!currentUser) return;
    
    // Update header user info
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');
    
    if (userName) userName.textContent = currentUser.fullName;
    if (userAvatar) userAvatar.textContent = getInitials(currentUser.fullName);
    
    // Show role-specific content
    toggleAdminFeatures(currentUser.role === 'Адмін');
}

function toggleAdminFeatures(isAdmin) {
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(el => {
        el.style.display = isAdmin ? 'block' : 'none';
    });
    
    // Add data attribute for CSS targeting
    document.body.setAttribute('data-user-role', isAdmin ? 'admin' : 'user');
}

function setupSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebarCollapsed = !sidebarCollapsed;
            
            // Add animation class
            sidebar.classList.add('animating');
            
            setTimeout(() => {
                sidebar.classList.toggle('collapsed', sidebarCollapsed);
                localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
                
                // Remove animation class after transition
                setTimeout(() => {
                    sidebar.classList.remove('animating');
                }, 400);
            }, 10);
        });
        
        // Mobile sidebar toggle
        if (window.innerWidth <= 1024) {
            sidebar.classList.add('mobile');
        }
        
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 1024) {
                sidebar.classList.add('mobile');
            } else {
                sidebar.classList.remove('mobile');
                sidebar.classList.remove('active');
            }
        });
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
            
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item with animation
            this.classList.add('active');
            
            // Get page ID and load it
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
    
    // Set initial theme
    document.body.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
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
        });
    }
    
    console.log('✅ Theme setup complete');
}

function setupLanguage() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-switcher')) {
                langDropdown.classList.remove('show');
            }
        });

        // Language selection
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
    // Выход теперь только через личный кабинет
    console.log('✅ Logout available only in profile page');
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update language button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang.toUpperCase();
    }
    
    // Update all text elements with data-key attribute
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
    
    // Update auth modal text
    const authTitle = document.getElementById('authTitle');
    const loginLabel = document.getElementById('loginLabel');
    const passwordLabel = document.getElementById('passwordLabel');
    const loginBtnText = document.getElementById('loginBtnText');
    
    if (authTitle) authTitle.textContent = { kk: 'Жүйеге кіру', ru: 'Вход в систему', en: 'Login to System' }[lang];
    if (loginLabel) loginLabel.textContent = { kk: 'Логин', ru: 'Логин', en: 'Login' }[lang];
    if (passwordLabel) passwordLabel.textContent = { kk: 'Құпия сөз', ru: 'Пароль', en: 'Password' }[lang];
    if (loginBtnText) loginBtnText.textContent = { kk: 'Кіру/Тіркелу', ru: 'Вход/Регистрация', en: 'Login/Register' }[lang];
    
    // Reload current page with new language
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
    
    // Trigger language change event for calendar
    document.dispatchEvent(new CustomEvent('languageChanged'));
}

function loadPage(pageId) {
    const contentArea = document.getElementById('content');
    
    // Add fade out animation
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
            
            // Add fade in animation
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
    
    // Анимация появления
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Закрытие модального окна
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

function getNewsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Адмін';

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
            removeLink: "Жою"
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
            removeLink: "Удалить"
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
            removeLink: "Remove"
        }
    };

    const t = translations[currentLanguage] || translations.kk;
    
    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            ${isAdmin ? `
            <!-- Кнопка добавления новости -->
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 class="card-title">${t.addNews}</h2>
                    <button class="btn btn-primary" id="showNewsFormBtn">
                        <i class="fas fa-plus"></i>
                        ${t.addButton}
                    </button>
                </div>
            </div>

            <!-- Форма добавления новости -->
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
                    
                    <!-- Секция ссылок -->
                    <div class="form-group">
                        <label>${t.linksLabel}</label>
                        <div id="newsLinksContainer">
                            <!-- Ссылки будут добавляться динамически -->
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
                                    <small>${currentLanguage === 'kk' ? 'Суретті тартып апарыңыз немесе басыңыз' : currentLanguage === 'ru' ? 'Перетащите изображение или нажмите' : 'Drag and drop image or click'}</small>
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
                                    <small>${currentLanguage === 'kk' ? '150x200 өлшеміндегі сурет' : currentLanguage === 'ru' ? 'Изображение размером 150x200' : 'Image sized 150x200'}</small>
                                </label>
                                <img class="banner-preview" id="newsBannerPreview">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-primary btn-compact" id="addNewsBtn">
                            <i class="fas fa-plus"></i>
                            <span class="btn-text">${t.addButton}</span>
                            <div class="btn-loader"></div>
                        </button>
                        <button class="btn btn-outline btn-compact" id="cancelNewsBtn">
                            <i class="fas fa-times"></i>
                            ${currentLanguage === 'kk' ? 'Болдырмау' : currentLanguage === 'ru' ? 'Отмена' : 'Cancel'}
                        </button>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <div class="news-grid">
                ${newsData.map(news => `
                    <div class="news-item" data-id="${news.id}">
                        ${isAdmin ? `<button class="delete-btn admin-only" data-id="${news.id}" data-type="news">×</button>` : ''}
                        
                        ${news.banner ? `
                            <img src="${news.banner}" class="news-banner" alt="${news.title[currentLanguage] || news.title['kk']}">
                        ` : news.image ? `
                            <img src="${news.image}" class="news-banner" alt="${news.title[currentLanguage] || news.title['kk']}">
                        ` : `
                            <div class="news-banner">
                                <span>${currentLanguage === 'kk' ? 'Сурет жоқ' : currentLanguage === 'ru' ? 'Изображение отсутствует' : 'No Image'}</span>
                            </div>
                        `}
                        
                        <div style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.875rem;">
                            <i class="fas fa-calendar-alt"></i> ${formatDateForDisplay(news.date)}
                        </div>
                        
                        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${news.title[currentLanguage] || news.title['kk']}</h3>
                        
                        <p style="margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                            ${(news.content[currentLanguage] || news.content['kk']).length > 150 ? (news.content[currentLanguage] || news.content['kk']).substring(0, 150) + '...' : (news.content[currentLanguage] || news.content['kk'])}
                        </p>
                        
                        <!-- Отображение ссылок для всех пользователей -->
                        ${news.links && news.links.length > 0 ? `
                            <div class="news-links" style="margin-bottom: 1rem;">
                                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                                    <i class="fas fa-link"></i> 
                                    ${currentLanguage === 'kk' ? 'Қосымша материалдар:' : currentLanguage === 'ru' ? 'Дополнительные материалы:' : 'Additional Materials:'}
                                </div>
                                <div class="links-preview">
                                    ${news.links.slice(0, 2).map(link => `
                                        <a href="${link.url}" target="_blank" class="link-preview" title="${link.title}">
                                            <i class="fas fa-external-link-alt"></i>
                                            ${link.title.length > 30 ? link.title.substring(0, 30) + '...' : link.title}
                                        </a>
                                    `).join('')}
                                    ${news.links.length > 2 ? `
                                        <span class="more-links">+${news.links.length - 2} ${currentLanguage === 'kk' ? 'тағы' : currentLanguage === 'ru' ? 'еще' : 'more'}</span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="card-actions">
                            <button class="btn btn-outline btn-animated read-more-btn" data-id="${news.id}" data-type="news">
                                <i class="fas fa-book-open"></i>
                                ${t.readMore}
                            </button>
                        </div>
                    </div>
                `).join('')}
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
            email: "Электронды пошта"
        },
        ru: {
            title: "Учителя",
            filter: "Фильтр по предметам",
            all: "Все",
            contact: "Связаться", 
            experience: "опыт",
            phone: "Телефон",
            email: "Электронная почта"
        },
        en: {
            title: "Teachers",
            filter: "Filter by Subject",
            all: "All",
            contact: "Contact",
            experience: "experience", 
            phone: "Phone",
            email: "Email"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            <div class="card">
                <h2 class="card-title">${t.filter}</h2>
                <div class="filter-buttons">
                    <button class="filter-btn active" data-subject="all">${t.all}</button>
                    ${subjects.map(subject => `
                        <button class="filter-btn" data-subject="${subject}">${subject}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="teachers-grid">
                ${teachersData.map(teacher => `
                    <div class="teacher-card" data-subject="${teacher.subject[currentLanguage] || teacher.subject['kk']}">
                        ${teacher.image ? `
                            <img src="${teacher.image}" alt="${teacher.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
                        ` : `
                            <div style="width: 80px; height: 80px; background: ${getRandomColor()}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.25rem; margin: 0 auto 1rem;">
                                ${getInitials(teacher.name)}
                            </div>
                        `}
                        
                        <h3 style="margin-bottom: 0.5rem; color: var(--text-primary);">${teacher.name}</h3>
                        
                        <p style="color: var(--primary); font-weight: 600; margin-bottom: 0.5rem;">${teacher.subject[currentLanguage] || teacher.subject['kk']}</p>
                        
                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;"><i class="fas fa-graduation-cap"></i> ${teacher.degree}</p>
                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem;"><i class="fas fa-clock"></i> ${teacher.experience[currentLanguage] || teacher.experience['kk']} ${t.experience}</p>
                        
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
                        
                        <button class="btn btn-outline btn-animated contact-teacher-btn" data-teacher="${teacher.name}" style="margin-top: 1rem;">
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
            awards: "Марапаттар"
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
            awards: "Награды"
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
            awards: "Awards"
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
                                <img src="${student.image}" alt="${student.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
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
                                <strong><i class="fas fa-star"></i> ${currentLanguage === 'kk' ? 'Балл' : currentLanguage === 'ru' ? 'Балл' : 'Score'}:</strong> ${student.score}
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
    const isAdmin = currentUser?.role === 'Адмін';

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
            removeLink: "Жою"
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
            removeLink: "Удалить"
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
            removeLink: "Remove"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    return `
        <div class="page">
            <h1 class="page-title">${t.title}</h1>
            
            ${isAdmin ? `
            <!-- Кнопка добавления мероприятия -->
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 class="card-title">${t.addEvent}</h2>
                    <button class="btn btn-primary" id="showEventFormBtn">
                        <i class="fas fa-plus"></i>
                        ${t.addButton}
                    </button>
                </div>
            </div>

            <!-- Форма добавления мероприятия -->
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
                    
                    <!-- Секция ссылок -->
                    <div class="form-group">
                        <label>${t.linksLabel}</label>
                        <div id="eventLinksContainer">
                            <!-- Ссылки будут добавляться динамически -->
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
                                    <small>${currentLanguage === 'kk' ? 'Суретті тартып апарыңыз немесе басыңыз' : currentLanguage === 'ru' ? 'Перетащите изображение или нажмите' : 'Drag and drop image or click'}</small>
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
                                    <small>${currentLanguage === 'kk' ? '150x200 өлшеміндегі сурет' : currentLanguage === 'ru' ? 'Изображение размером 150x200' : 'Image sized 150x200'}</small>
                                </label>
                                <img class="banner-preview" id="eventBannerPreview">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-primary btn-compact" id="addEventBtn">
                            <i class="fas fa-plus"></i>
                            <span class="btn-text">${t.addButton}</span>
                            <div class="btn-loader"></div>
                        </button>
                        <button class="btn btn-outline btn-compact" id="cancelEventBtn">
                            <i class="fas fa-times"></i>
                            ${currentLanguage === 'kk' ? 'Болдырмау' : currentLanguage === 'ru' ? 'Отмена' : 'Cancel'}
                        </button>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <div class="events-grid">
                ${eventsData.map(event => `
                    <div class="event-item" data-id="${event.id}">
                        ${isAdmin ? `<button class="delete-btn admin-only" data-id="${event.id}" data-type="event">×</button>` : ''}
                        
                        ${event.banner ? `
                            <img src="${event.banner}" class="event-banner" alt="${event.title[currentLanguage] || event.title['kk']}">
                        ` : event.image ? `
                            <img src="${event.image}" class="event-banner" alt="${event.title[currentLanguage] || event.title['kk']}">
                        ` : `
                            <div class="event-banner">
                                <span>${currentLanguage === 'kk' ? 'Сурет жоқ' : currentLanguage === 'ru' ? 'Изображение отсутствует' : 'No Image'}</span>
                            </div>
                        `}
                        
                        <div style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.875rem;">
                            <i class="fas fa-calendar-alt"></i> ${formatDateForDisplay(event.date)}
                        </div>
                        
                        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${event.title[currentLanguage] || event.title['kk']}</h3>
                        
                        <p style="margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                            ${(event.description[currentLanguage] || event.description['kk']).length > 150 ? (event.description[currentLanguage] || event.description['kk']).substring(0, 150) + '...' : (event.description[currentLanguage] || event.description['kk'])}
                        </p>
                        
                        <!-- Отображение ссылок для всех пользователей -->
                        ${event.links && event.links.length > 0 ? `
                            <div class="event-links" style="margin-bottom: 1rem;">
                                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                                    <i class="fas fa-link"></i> 
                                    ${currentLanguage === 'kk' ? 'Қосымша материалдар:' : currentLanguage === 'ru' ? 'Дополнительные материалы:' : 'Additional Materials:'}
                                </div>
                                <div class="links-preview">
                                    ${event.links.slice(0, 2).map(link => `
                                        <a href="${link.url}" target="_blank" class="link-preview" title="${link.title}">
                                            <i class="fas fa-external-link-alt"></i>
                                            ${link.title.length > 30 ? link.title.substring(0, 30) + '...' : link.title}
                                        </a>
                                    `).join('')}
                                    ${event.links.length > 2 ? `
                                        <span class="more-links">+${event.links.length - 2} ${currentLanguage === 'kk' ? 'тағы' : currentLanguage === 'ru' ? 'еще' : 'more'}</span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="card-actions">
                            <button class="btn btn-primary btn-animated participate-event-btn" data-id="${event.id}">
                                <i class="fas fa-user-plus"></i>
                                ${t.participate}
                            </button>
                            <button class="btn btn-outline btn-animated read-more-btn" data-id="${event.id}" data-type="event">
                                <i class="fas fa-info-circle"></i>
                                ${t.readMore}
                            </button>
                        </div>
                    </div>
                `).join('')}
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
            yourClass: "Сыныбыңыз"
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
            yourClass: "Ваш класс"
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
            yourClass: "Your class"
        }
    };

    const t = translations[currentLanguage] || translations.kk;

    // Функция для показа ролевого контента
    function getUserSpecificContent() {
        const user = window.authSystem?.getCurrentUser();
        
        if (!user) return '';
        
        const roleContents = {
            'Адмін': `
                <div class="card role-info-card">
                    <h3 class="card-title">${t.adminPanel}</h3>
                    <p>${t.adminFeatures}</p>
                    <ul class="role-features-list">
                        <li>✅ ${currentLanguage === 'kk' ? 'Жаңалықтарды қосу/жою' : currentLanguage === 'ru' ? 'Добавление/удаление новостей' : 'Add/delete news'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Іс-шараларды қосу/жою' : currentLanguage === 'ru' ? 'Добавление/удаление мероприятий' : 'Add/delete events'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Сілтемелерді қосу' : currentLanguage === 'ru' ? 'Добавление ссылок' : 'Add links'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Барлық ақпаратты көру' : currentLanguage === 'ru' ? 'Просмотр всей информации' : 'View all information'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Жүйені басқару' : currentLanguage === 'ru' ? 'Управление системой' : 'System management'}</li>
                    </ul>
                </div>
            `,
            'Мұғалім': `
                <div class="card role-info-card">
                    <h3 class="card-title">${t.teacherPanel}</h3>
                    <p>${t.teacherFeatures}</p>
                    <ul class="role-features-list">
                        <li>✅ ${currentLanguage === 'kk' ? 'Жаңалықтарды көру' : currentLanguage === 'ru' ? 'Просмотр новостей' : 'View news'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Іс-шараларды көру' : currentLanguage === 'ru' ? 'Просмотр мероприятий' : 'View events'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Сілтемелерге қол жеткізу' : currentLanguage === 'ru' ? 'Доступ к ссылкам' : 'Access to links'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Оқушылар тізімін көру' : currentLanguage === 'ru' ? 'Просмотр списка учеников' : 'View student list'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Жеке кабинет' : currentLanguage === 'ru' ? 'Личный кабинет' : 'Personal account'}</li>
                    </ul>
                </div>
            `,
            'Оқушы': `
                <div class="card role-info-card">
                    <h3 class="card-title">${t.studentPanel}</h3>
                    <p>${t.studentFeatures}</p>
                    <ul class="role-features-list">
                        <li>✅ ${currentLanguage === 'kk' ? 'Жаңалықтарды көру' : currentLanguage === 'ru' ? 'Просмотр новостей' : 'View news'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Іс-шараларға қатысу' : currentLanguage === 'ru' ? 'Участие в мероприятиях' : 'Participate in events'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Сілтемелерге қол жеткізу' : currentLanguage === 'ru' ? 'Доступ к ссылкам' : 'Access to links'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Мұғалімдермен байланысу' : currentLanguage === 'ru' ? 'Связь с учителями' : 'Contact teachers'}</li>
                        <li>✅ ${currentLanguage === 'kk' ? 'Жеке кабинет' : currentLanguage === 'ru' ? 'Личный кабинет' : 'Personal account'}</li>
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
            
            <!-- Ролевая информация -->
            ${getUserSpecificContent()}

            <!-- User Profile Header -->
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
                        <button class="btn btn-primary btn-sm select-role-btn">
                            <i class="fas fa-check"></i>
                            ${t.selectRole}
                        </button>
                    ` : ''}
                </div>
            </div>

            <!-- Password Change Section -->
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
                    <button class="btn btn-primary btn-animated" id="changePasswordBtn">
                        <i class="fas fa-key"></i>
                        <span class="btn-text">${t.changeButton}</span>
                        <div class="btn-loader"></div>
                    </button>
                </div>
            </div>

            <!-- Logout Section -->
            <div class="card">
                <div class="logout-section">
                    <button class="btn btn-danger btn-full" id="logoutBtnProfile">
                        <i class="fas fa-sign-out-alt"></i>
                        ${t.logout}
                    </button>
                </div>
            </div>
        </div>

        <style>
            .profile-header {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                padding: 2rem;
            }

            .avatar-large {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                font-weight: bold;
                color: white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }

            .profile-info {
                flex: 1;
            }

            .profile-name {
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 0.5rem;
            }

            .role-badge {
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.875rem;
                font-weight: 500;
                margin-bottom: 1rem;
                display: inline-block;
            }

            .role-selected {
                background: var(--success-light);
                color: var(--success);
                border: 1px solid var(--success);
            }

            .role-not-selected {
                background: var(--warning-light);
                color: var(--warning);
                border: 1px solid var(--warning);
            }

            .select-role-btn {
                margin-top: 0.5rem;
            }

            .section-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 1.5rem;
                padding-bottom: 0.75rem;
                border-bottom: 2px solid var(--border);
            }

            .password-form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .form-group {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .form-group label {
                font-weight: 500;
                color: var(--text-primary);
            }

            .form-input {
                padding: 0.75rem;
                border: 1px solid var(--border);
                border-radius: 8px;
                background: var(--bg-primary);
                color: var(--text-primary);
                transition: border-color 0.2s;
            }

            .form-input:focus {
                outline: none;
                border-color: var(--primary);
            }

            .logout-section {
                padding: 1rem 0;
            }

            .btn-full {
                width: 100%;
                justify-content: center;
            }

            .btn-danger {
                background: var(--danger);
                border: 1px solid var(--danger);
            }

            .btn-danger:hover {
                background: var(--danger-dark);
                border-color: var(--danger-dark);
            }

            .role-info-card {
                margin-bottom: 1.5rem;
                border-left: 4px solid var(--primary);
            }

            .role-features-list {
                margin-top: 1rem;
                padding-left: 1.5rem;
                color: var(--text-secondary);
            }

            .role-features-list li {
                margin-bottom: 0.5rem;
            }

            .class-info {
                margin-top: 1rem;
                padding: 0.75rem;
                background: var(--bg-secondary);
                border-radius: 8px;
                border-left: 4px solid var(--success);
            }
        </style>
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

// Функция для добавления полей ссылок
function addLinkField(containerId, linkIndex = 0) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
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
    linkField.style.cssText = 'display: flex; gap: 0.5rem; margin-bottom: 0.5rem; align-items: flex-end;';
    
    linkField.innerHTML = `
        <div style="flex: 1;">
            <input type="text" class="form-input" placeholder="${t.linkTitle}" data-link-title>
        </div>
        <div style="flex: 2;">
            <input type="url" class="form-input" placeholder="https://example.com" data-link-url>
        </div>
        <button type="button" class="btn btn-outline btn-sm" data-remove-link style="white-space: nowrap;">
            <i class="fas fa-times"></i>
            ${t.removeLink}
        </button>
    `;
    
    container.appendChild(linkField);
    
    // Добавляем обработчик для удаления ссылки
    const removeBtn = linkField.querySelector('[data-remove-link]');
    removeBtn.addEventListener('click', function() {
        linkField.remove();
    });
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

function initializeNewsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Адмін';
    
    // Initialize calendar for news date
    const newsDateInput = document.getElementById('newsDate');
    if (newsDateInput) {
        window.newsCalendar = new Calendar('newsDate');
    }
    
    if (isAdmin) {
        // Toggle form visibility
        const showNewsFormBtn = document.getElementById('showNewsFormBtn');
        const newsFormPanel = document.getElementById('newsFormPanel');
        const cancelNewsBtn = document.getElementById('cancelNewsBtn');
        
        if (showNewsFormBtn && newsFormPanel) {
            showNewsFormBtn.addEventListener('click', function() {
                newsFormPanel.style.display = newsFormPanel.style.display === 'none' ? 'block' : 'none';
            });
        }
        
        if (cancelNewsBtn && newsFormPanel) {
            cancelNewsBtn.addEventListener('click', function() {
                newsFormPanel.style.display = 'none';
            });
        }
        
        // Add link functionality
        const addNewsLinkBtn = document.getElementById('addNewsLinkBtn');
        if (addNewsLinkBtn) {
            addNewsLinkBtn.addEventListener('click', function() {
                addLinkField('newsLinksContainer');
            });
        }
        
        // Add news functionality
        const addNewsBtn = document.getElementById('addNewsBtn');
        const newsImageInput = document.getElementById('newsImageInput');
        const newsImagePreview = document.getElementById('newsImagePreview');
        const newsBannerInput = document.getElementById('newsBannerInput');
        const newsBannerPreview = document.getElementById('newsBannerPreview');
        
        if (addNewsBtn) {
            addNewsBtn.addEventListener('click', async function() {
                const title = document.getElementById('newsTitle').value.trim();
                const content = document.getElementById('newsContent').value.trim();
                const date = document.getElementById('newsDate').value.trim();
                const imageFile = newsImageInput.files[0];
                const bannerFile = newsBannerInput.files[0];
                
                // Собираем ссылки
                const links = [];
                const linkFields = document.querySelectorAll('#newsLinksContainer .link-field');
                linkFields.forEach(field => {
                    const titleInput = field.querySelector('[data-link-title]');
                    const urlInput = field.querySelector('[data-link-url]');
                    
                    if (titleInput.value.trim() && urlInput.value.trim()) {
                        links.push({
                            title: titleInput.value.trim(),
                            url: urlInput.value.trim()
                        });
                    }
                });
                
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
                
                // Validate date format (YYYY-MM-DD)
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!dateRegex.test(date)) {
                    showNotification(currentLanguage === 'kk' ? 'Күн форматы қате! (YYYY-MM-DD)' : currentLanguage === 'ru' ? 'Неверный формат даты! (YYYY-MM-DD)' : 'Invalid date format! (YYYY-MM-DD)', 'error');
                    return;
                }
                
                // Show loading
                this.classList.add('loading');
                
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
                    
                    // Reset form
                    document.getElementById('newsTitle').value = '';
                    document.getElementById('newsContent').value = '';
                    document.getElementById('newsDate').value = '';
                    newsImageInput.value = '';
                    newsBannerInput.value = '';
                    newsImagePreview.style.display = 'none';
                    newsImagePreview.src = '';
                    newsBannerPreview.style.display = 'none';
                    newsBannerPreview.src = '';
                    document.getElementById('newsLinksContainer').innerHTML = '';
                    newsFormPanel.style.display = 'none';
                    
                    loadPage('news');
                    showNotification(t.added);
                    
                } catch (error) {
                    showNotification('Суретті жүктеу кезінде қате пайда болды!', 'error');
                } finally {
                    this.classList.remove('loading');
                }
            });
        }
        
        // Image preview
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
        
        // Banner preview
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
    
    // Read more buttons
    document.querySelectorAll('.read-more-btn[data-type="news"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const newsId = parseInt(this.getAttribute('data-id'));
            readMoreNews(newsId);
        });
    });
    
    // Delete buttons
    document.querySelectorAll('.delete-btn[data-type="news"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const newsId = parseInt(this.getAttribute('data-id'));
            deleteNews(newsId);
        });
    });
}

function initializeTeachersPage() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const teacherCards = document.querySelectorAll('.teacher-card');
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const subject = this.getAttribute('data-subject');
            
            // Filter teacher cards
            teacherCards.forEach(card => {
                if (subject === 'all' || card.getAttribute('data-subject') === subject) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
    
    // Contact buttons
    document.querySelectorAll('.contact-teacher-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherName = this.getAttribute('data-teacher');
            contactTeacher(teacherName);
        });
    });
}

function initializeEventsPage() {
    const currentUser = window.authSystem?.getCurrentUser();
    const isAdmin = currentUser?.role === 'Адмін';
    
    // Initialize calendar for event date
    const eventDateInput = document.getElementById('eventDate');
    if (eventDateInput) {
        window.eventCalendar = new Calendar('eventDate');
    }
    
    if (isAdmin) {
        // Toggle form visibility
        const showEventFormBtn = document.getElementById('showEventFormBtn');
        const eventFormPanel = document.getElementById('eventFormPanel');
        const cancelEventBtn = document.getElementById('cancelEventBtn');
        
        if (showEventFormBtn && eventFormPanel) {
            showEventFormBtn.addEventListener('click', function() {
                eventFormPanel.style.display = eventFormPanel.style.display === 'none' ? 'block' : 'none';
            });
        }
        
        if (cancelEventBtn && eventFormPanel) {
            cancelEventBtn.addEventListener('click', function() {
                eventFormPanel.style.display = 'none';
            });
        }
        
        // Add link functionality
        const addEventLinkBtn = document.getElementById('addEventLinkBtn');
        if (addEventLinkBtn) {
            addEventLinkBtn.addEventListener('click', function() {
                addLinkField('eventLinksContainer');
            });
        }
        
        // Add event functionality
        const addEventBtn = document.getElementById('addEventBtn');
        const eventImageInput = document.getElementById('eventImageInput');
        const eventImagePreview = document.getElementById('eventImagePreview');
        const eventBannerInput = document.getElementById('eventBannerInput');
        const eventBannerPreview = document.getElementById('eventBannerPreview');
        
        if (addEventBtn) {
            addEventBtn.addEventListener('click', async function() {
                const title = document.getElementById('eventTitle').value.trim();
                const description = document.getElementById('eventDescription').value.trim();
                const date = document.getElementById('eventDate').value.trim();
                const imageFile = eventImageInput.files[0];
                const bannerFile = eventBannerInput.files[0];
                
                // Собираем ссылки
                const links = [];
                const linkFields = document.querySelectorAll('#eventLinksContainer .link-field');
                linkFields.forEach(field => {
                    const titleInput = field.querySelector('[data-link-title]');
                    const urlInput = field.querySelector('[data-link-url]');
                    
                    if (titleInput.value.trim() && urlInput.value.trim()) {
                        links.push({
                            title: titleInput.value.trim(),
                            url: urlInput.value.trim()
                        });
                    }
                });
                
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
                
                // Validate date format (YYYY-MM-DD)
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!dateRegex.test(date)) {
                    showNotification(currentLanguage === 'kk' ? 'Күн форматы қате! (YYYY-MM-DD)' : currentLanguage === 'ru' ? 'Неверный формат даты! (YYYY-MM-DD)' : 'Invalid date format! (YYYY-MM-DD)', 'error');
                    return;
                }
                
                // Show loading
                this.classList.add('loading');
                
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
                    
                    // Reset form
                    document.getElementById('eventTitle').value = '';
                    document.getElementById('eventDescription').value = '';
                    document.getElementById('eventDate').value = '';
                    eventImageInput.value = '';
                    eventBannerInput.value = '';
                    eventImagePreview.style.display = 'none';
                    eventImagePreview.src = '';
                    eventBannerPreview.style.display = 'none';
                    eventBannerPreview.src = '';
                    document.getElementById('eventLinksContainer').innerHTML = '';
                    eventFormPanel.style.display = 'none';
                    
                    loadPage('events');
                    showNotification(t.added);
                    
                } catch (error) {
                    showNotification('Суретті жүктеу кезінде қате пайда болды!', 'error');
                } finally {
                    this.classList.remove('loading');
                }
            });
        }
        
        // Image preview
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
        
        // Banner preview
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
    
    // Participate buttons
    document.querySelectorAll('.participate-event-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-id'));
            participateInEvent(eventId);
        });
    });
    
    // Read more buttons
    document.querySelectorAll('.read-more-btn[data-type="event"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-id'));
            showDetailModal('event', eventId);
        });
    });
    
    // Delete buttons
    document.querySelectorAll('.delete-btn[data-type="event"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-id'));
            deleteEvent(eventId);
        });
    });
}

function initializeProfilePage() {
    const currentUser = window.authSystem?.getCurrentUser();
    
    // Кнопка выбора роли
    const selectRoleBtn = document.querySelector('.select-role-btn');
    if (selectRoleBtn) {
        selectRoleBtn.addEventListener('click', function() {
            const roles = ['Адмін', 'Мұғалім', 'Оқушы'];
            const currentRole = currentUser?.role;
            const currentIndex = roles.indexOf(currentRole);
            const nextRole = roles[(currentIndex + 1) % roles.length];
            
            // Обновляем роль пользователя
            if (window.authSystem && currentUser) {
                currentUser.role = nextRole;
                window.authSystem.currentUser = currentUser;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Обновляем интерфейс
                loadPage('profile');
                
                const t = currentLanguage === 'kk' ? 
                    `Рөл "${nextRole}" таңдалды` :
                    currentLanguage === 'ru' ? 
                    `Роль "${nextRole}" выбрана` :
                    `Role "${nextRole}" selected`;
                
                showNotification(t, 'success');
            }
        });
    }

    // Кнопка выхода в профиле
    const logoutBtnProfile = document.getElementById('logoutBtnProfile');
    if (logoutBtnProfile) {
        logoutBtnProfile.addEventListener('click', function() {
            const confirmMessages = {
                kk: 'Шынымен жүйеден шыққыңыз келе ме?',
                ru: 'Вы действительно хотите выйти из системы?',
                en: 'Are you sure you want to log out?'
            };
            
            if (confirm(confirmMessages[currentLanguage] || confirmMessages['kk'])) {
                window.authSystem.logout();
            }
        });
    }

    // Кнопка смены пароля
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', function() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
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
            
            // Show loading
            this.classList.add('loading');
            
            // Simulate API call
            setTimeout(() => {
                showNotification(t.changed);
                
                // Clear form
                document.getElementById('currentPassword').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('confirmPassword').value = '';
                
                this.classList.remove('loading');
            }, 1500);
        });
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
window.addLinkField = addLinkField;

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
        width: 32px;
        height: 32px;
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

