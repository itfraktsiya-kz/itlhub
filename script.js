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

// Calendar functionality
class Calendar {
    constructor(inputId) {
        this.inputId = inputId;
        this.selectedDate = null;
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.isMobile = window.innerWidth <= 480;
        this.init();
    }

    init() {
        this.createCalendar();
        this.attachEventListeners();
        
        // Добавляем класс mobile для мобильных устройств
        const input = document.getElementById(this.inputId);
        if (input && this.isMobile) {
            input.classList.add('mobile');
        }
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
        // Для мобильных устройств показываем числовой ввод
        if (this.isMobile) {
            return this.getMobileDateInputHTML();
        }

        // Для десктопов - обычный календарь
        return this.getDesktopCalendarHTML();
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

    getMobileDateInputHTML() {
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();

        const monthNames = {
            kk: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
            ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        };

        const t = monthNames[currentLanguage] || monthNames.kk;

        return `
            <div class="mobile-date-input">
                <div class="date-input-group">
                    <label class="date-input-label">${currentLanguage === 'kk' ? 'Күн' : currentLanguage === 'ru' ? 'День' : 'Day'}</label>
                    <input type="number" class="date-number-input" id="mobileDayInput" 
                           min="1" max="31" value="${this.selectedDate ? this.selectedDate.getDate() : currentDay}" 
                           placeholder="DD">
                </div>
                
                <div class="date-input-group">
                    <label class="date-input-label">${currentLanguage === 'kk' ? 'Ай' : currentLanguage === 'ru' ? 'Месяц' : 'Month'}</label>
                    <select class="date-number-input" id="mobileMonthInput">
                        ${Array.from({length: 12}, (_, i) => `
                            <option value="${i + 1}" ${(this.selectedDate ? this.selectedDate.getMonth() + 1 : currentMonth) === i + 1 ? 'selected' : ''}>
                                ${t[i]}
                            </option>
                        `).join('')}
                    </select>
                </div>
                
                <div class="date-input-group">
                    <label class="date-input-label">${currentLanguage === 'kk' ? 'Жыл' : currentLanguage === 'ru' ? 'Год' : 'Year'}</label>
                    <input type="number" class="date-number-input" id="mobileYearInput" 
                           min="2020" max="2030" value="${this.selectedDate ? this.selectedDate.getFullYear() : currentYear}" 
                           placeholder="YYYY">
                </div>
                
                <div class="calendar-actions">
                    <button class="btn btn-outline btn-sm" id="mobileDateToday" type="button">
                        ${currentLanguage === 'kk' ? 'Бүгін' : currentLanguage === 'ru' ? 'Сегодня' : 'Today'}
                    </button>
                    <button class="btn btn-primary btn-sm" id="mobileDateSelect" type="button">
                        ${currentLanguage === 'kk' ? 'Таңдау' : currentLanguage === 'ru' ? 'Выбрать' : 'Select'}
                    </button>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        const input = document.getElementById(this.inputId);
        if (!input) return;
        
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

        // Обработчик изменения размера окна для переключения между режимами
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 480;
            
            if (wasMobile !== this.isMobile) {
                this.updateCalendar();
            }
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
        if (this.isMobile) {
            this.attachMobileEvents();
        } else {
            this.attachDesktopEvents();
        }
    }

    attachDesktopEvents() {
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

    attachMobileEvents() {
        const todayBtn = this.calendarDropdown?.querySelector('#mobileDateToday');
        if (todayBtn) {
            todayBtn.addEventListener('click', () => this.selectToday());
            todayBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.selectToday();
            });
        }

        const selectBtn = this.calendarDropdown?.querySelector('#mobileDateSelect');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => this.finalizeMobileSelection());
            selectBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.finalizeMobileSelection();
            });
        }

        // Валидация ввода для дня
        const dayInput = this.calendarDropdown?.querySelector('#mobileDayInput');
        if (dayInput) {
            dayInput.addEventListener('input', (e) => {
                let value = parseInt(e.target.value);
                if (value < 1) e.target.value = 1;
                if (value > 31) e.target.value = 31;
            });
        }

        // Валидация ввода для года
        const yearInput = this.calendarDropdown?.querySelector('#mobileYearInput');
        if (yearInput) {
            yearInput.addEventListener('input', (e) => {
                let value = parseInt(e.target.value);
                if (value < 2020) e.target.value = 2020;
                if (value > 2030) e.target.value = 2030;
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
        
        if (this.isMobile) {
            // Для мобильных обновляем значения в полях ввода
            const dayInput = this.calendarDropdown?.querySelector('#mobileDayInput');
            const monthInput = this.calendarDropdown?.querySelector('#mobileMonthInput');
            const yearInput = this.calendarDropdown?.querySelector('#mobileYearInput');
            
            if (dayInput) dayInput.value = today.getDate();
            if (monthInput) monthInput.value = today.getMonth() + 1;
            if (yearInput) yearInput.value = today.getFullYear();
        } else {
            // Для десктопов используем старую логику
            this.currentMonth = today.getMonth();
            this.currentYear = today.getFullYear();
            this.selectedDate = today;
            this.updateCalendar();
        }
    }

    finalizeSelection() {
        if (this.selectedDate) {
            this.setInputValue(this.selectedDate);
            this.hideCalendar();
        }
    }

    finalizeMobileSelection() {
        const dayInput = this.calendarDropdown?.querySelector('#mobileDayInput');
        const monthInput = this.calendarDropdown?.querySelector('#mobileMonthInput');
        const yearInput = this.calendarDropdown?.querySelector('#mobileYearInput');
        
        if (dayInput && monthInput && yearInput) {
            const day = parseInt(dayInput.value);
            const month = parseInt(monthInput.value) - 1;
            const year = parseInt(yearInput.value);
            
            // Проверка валидности даты
            const date = new Date(year, month, day);
            if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
                this.selectedDate = date;
                this.setInputValue(date);
                this.hideCalendar();
            } else {
                // Показываем ошибку для невалидной даты
                const errorMessage = currentLanguage === 'kk' ? 
                    'Қате күн!' : currentLanguage === 'ru' ? 
                    'Неверная дата!' : 'Invalid date!';
                showNotification(errorMessage, 'error');
            }
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

    console.log('Setting up mobile menu...');

    const toggleMobileMenu = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        console.log('Mobile menu toggle clicked');
        if (sidebar && mobileMenuOverlay) {
            const isActive = sidebar.classList.contains('active');
            console.log('Current state:', isActive);
            
            sidebar.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = !isActive ? 'hidden' : '';
            
            if (!isActive) {
                sidebar.style.transform = 'translateX(0)';
            } else {
                setTimeout(() => {
                    sidebar.style.transform = 'translateX(-100%)';
                }, 300);
            }
            
            console.log('New state:', sidebar.classList.contains('active'));
        }
    };

    const closeMobileMenu = (e) => {
        if (e) {
            e.preventDefault();
        }
        console.log('Closing mobile menu');
        if (sidebar && mobileMenuOverlay) {
            sidebar.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            setTimeout(() => {
                sidebar.style.transform = 'translateX(-100%)';
            }, 300);
        }
    };

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        mobileMenuToggle.addEventListener('touchstart', toggleMobileMenu);
        console.log('Mobile menu toggle event listeners added');
    } else {
        console.error('Mobile menu toggle button not found!');
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('touchstart', closeMobileMenu);
        console.log('Mobile menu overlay event listeners added');
    } else {
        console.error('Mobile menu overlay not found!');
    }

    if (themeToggleMobile) {
        const toggleThemeHandler = (e) => {
            if (e) e.preventDefault();
            toggleTheme();
            closeMobileMenu();
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

    const closeMenuOnItemClick = (e) => {
        if (window.innerWidth <= 1024) {
            if (e.target.closest('.menu-item') && sidebar && sidebar.classList.contains('active')) {
                console.log('Closing menu on item click');
                closeMobileMenu();
            }
        }
    };

    document.addEventListener('click', closeMenuOnItemClick);
    document.addEventListener('touchstart', closeMenuOnItemClick);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    window.addEventListener('orientationchange', () => {
        if (sidebar && sidebar.classList.contains('active')) {
            setTimeout(closeMobileMenu, 300);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && sidebar && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    const preventBodyScroll = (e) => {
        if (sidebar && sidebar.classList.contains('active')) {
            e.preventDefault();
        }
    };

    document.addEventListener('touchmove', preventBodyScroll, { passive: false });
    document.addEventListener('wheel', preventBodyScroll, { passive: false });

    console.log('Mobile menu setup complete');
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

// Page templates (остаются без изменений, как в предыдущем коде)
// [Здесь должны быть функции getSchoolPage, getNewsPage, getTeachersPage, getStudentsPage, getEventsPage, getProfilePage]

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

console.log('Application initialized successfully!'); 
