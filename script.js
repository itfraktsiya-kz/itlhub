// Main Application
class SchoolApp {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        this.currentEditingId = null;
        
        // Initialize data
        this.initializeData();
    }

    initializeData() {
        // Initialize default data if not exists
        if (!localStorage.getItem('newsData')) {
            const defaultNews = [
                {
                    id: 1,
                    title: 'Welcome to New Academic Year',
                    description: 'We are excited to start the new academic year with great energy and new opportunities for all students.',
                    content: 'The new academic year brings fresh opportunities for learning and growth. We have prepared various activities and programs to enhance your educational experience.',
                    image: '',
                    links: ['https://school.edu/programs'],
                    date: new Date().toISOString(),
                    authorId: 1,
                    published: true,
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem('newsData', JSON.stringify(defaultNews));
        }

        if (!localStorage.getItem('eventsData')) {
            const defaultEvents = [
                {
                    id: 1,
                    title: 'Science Fair 2024',
                    description: 'Annual school science fair showcasing student projects and innovations.',
                    image: '',
                    links: ['https://school.edu/science-fair'],
                    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
                    authorId: 1,
                    published: true,
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem('eventsData', JSON.stringify(defaultEvents));
        }

        if (!localStorage.getItem('teachersData')) {
            const defaultTeachers = [
                {
                    id: 1,
                    fullName: 'Gulnar Karimova',
                    subjects: ['Mathematics', 'Physics'],
                    phone: '+7 701 123 4567',
                    photo: '',
                    bio: 'Experienced mathematics teacher with 15 years of teaching experience. Specialized in advanced mathematics and physics.',
                    createdAt: new Date().toISOString()
                },
                {
                    id: 2,
                    fullName: 'Marat Kasymov',
                    subjects: ['English Language', 'Literature'],
                    phone: '+7 701 234 5678',
                    photo: '',
                    bio: 'Certified English language teacher with international teaching experience. Focused on communicative language teaching.',
                    createdAt: new Date().toISOString()
                },
                {
                    id: 3,
                    fullName: 'Aigul Zhangozina',
                    subjects: ['Computer Science', 'Programming'],
                    phone: '+7 701 345 6789',
                    photo: '',
                    bio: 'IT specialist and computer science teacher. Expert in web development and programming languages.',
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem('teachersData', JSON.stringify(defaultTeachers));
        }
    }

    init() {
        this.setupTheme();
        this.setupLanguage();
        this.setupNavigation();
        this.setupModals();
        this.setupEventListeners();
        this.updateUserInterface();
        
        // Load initial page
        this.loadPage('home');
        
        console.log('🏫 School app initialized');
    }

    setupTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcons();
    }

    setupLanguage() {
        this.changeLanguage(this.currentLanguage);
    }

    setupNavigation() {
        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', () => {
                if (window.innerWidth > 1024) {
                    this.sidebarCollapsed = !this.sidebarCollapsed;
                    sidebar.classList.toggle('collapsed', this.sidebarCollapsed);
                    localStorage.setItem('sidebarCollapsed', this.sidebarCollapsed);
                } else {
                    this.closeMobileMenu();
                }
            });
        }

        // Mobile menu
        this.setupMobileMenu();

        // Page navigation
        const menuItems = document.querySelectorAll('.menu-item[data-page]');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = item.getAttribute('data-page');
                this.loadPage(pageId);
                this.updateActiveMenuItem(pageId);
                this.closeMobileMenu();
            });
        });

        // User dropdown
        this.setupUserDropdown();
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const sidebar = document.getElementById('sidebar');
        const mobileLangToggle = document.getElementById('mobileLangToggle');
        const langDropdownMobile = document.getElementById('langDropdownMobile');

        if (mobileMenuToggle && mobileMenuOverlay && sidebar) {
            mobileMenuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                mobileMenuOverlay.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });

            mobileMenuOverlay.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        }

        if (mobileLangToggle && langDropdownMobile) {
            mobileLangToggle.addEventListener('click', () => {
                langDropdownMobile.classList.toggle('show');
            });

            // Close mobile lang dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileLangToggle.contains(e.target) && !langDropdownMobile.contains(e.target)) {
                    langDropdownMobile.classList.remove('show');
                }
            });

            // Language selection for mobile
            langDropdownMobile.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.getAttribute('data-lang');
                    this.changeLanguage(lang);
                    langDropdownMobile.classList.remove('show');
                });
            });
        }
    }

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const langDropdownMobile = document.getElementById('langDropdownMobile');

        if (sidebar) sidebar.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (langDropdownMobile) langDropdownMobile.classList.remove('show');
    }

    setupUserDropdown() {
        const userBtn = document.getElementById('userBtn');
        const userDropdown = document.getElementById('userDropdown');
        const profileBtn = document.getElementById('profileDropdownBtn');
        const adminBtn = document.getElementById('adminDropdownBtn');
        const logoutBtn = document.getElementById('logoutDropdownBtn');

        if (userBtn && userDropdown) {
            userBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('show');
            });

            document.addEventListener('click', () => {
                userDropdown.classList.remove('show');
            });

            if (profileBtn) {
                profileBtn.addEventListener('click', () => {
                    this.loadPage('profile');
                    this.updateActiveMenuItem('profile');
                    userDropdown.classList.remove('show');
                });
            }

            if (adminBtn) {
                adminBtn.addEventListener('click', () => {
                    this.loadPage('admin');
                    this.updateActiveMenuItem('admin');
                    userDropdown.classList.remove('show');
                });
            }

            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    if (window.authSystem) {
                        window.authSystem.logout();
                    }
                    userDropdown.classList.remove('show');
                });
            }
        }
    }

    setupModals() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Language switcher
        const langToggle = document.getElementById('langToggle');
        const langDropdown = document.getElementById('langDropdown');

        if (langToggle && langDropdown) {
            langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                langDropdown.classList.toggle('show');
            });

            document.addEventListener('click', () => {
                langDropdown.classList.remove('show');
            });

            langDropdown.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.getAttribute('data-lang');
                    this.changeLanguage(lang);
                    langDropdown.classList.remove('show');
                });
            });
        }

        // Admin action buttons
        this.setupAdminModals();
    }

    setupAdminModals() {
        // Add News button
        const addNewsBtn = document.getElementById('addNewsBtn');
        if (addNewsBtn) {
            addNewsBtn.addEventListener('click', () => {
                this.openNewsModal();
            });
        }

        // Add Event button
        const addEventBtn = document.getElementById('addEventBtn');
        if (addEventBtn) {
            addEventBtn.addEventListener('click', () => {
                this.openEventModal();
            });
        }

        // Manage Teachers button
        const manageTeachersBtn = document.getElementById('manageTeachersBtn');
        if (manageTeachersBtn) {
            manageTeachersBtn.addEventListener('click', () => {
                this.openTeacherModal();
            });
        }

        // Setup modal handlers
        this.setupNewsModal();
        this.setupEventModal();
        this.setupTeacherModal();
        this.setupProfileModal();
    }

    setupNewsModal() {
        const modal = document.getElementById('newsModal');
        const closeBtn = document.getElementById('closeNewsModal');
        const cancelBtn = document.getElementById('cancelNews');
        const saveBtn = document.getElementById('saveNews');
        const deleteBtn = document.getElementById('deleteNews');
        const imageInput = document.getElementById('newsImage');

        const closeModal = () => this.hideModal('newsModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveNews());
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteNews());
        }

        if (imageInput) {
            imageInput.addEventListener('change', (e) => this.previewImage(e, 'newsImagePreview'));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    setupEventModal() {
        const modal = document.getElementById('eventModal');
        const closeBtn = document.getElementById('closeEventModal');
        const cancelBtn = document.getElementById('cancelEvent');
        const saveBtn = document.getElementById('saveEvent');
        const deleteBtn = document.getElementById('deleteEvent');
        const imageInput = document.getElementById('eventImage');

        const closeModal = () => this.hideModal('eventModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveEvent());
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteEvent());
        }

        if (imageInput) {
            imageInput.addEventListener('change', (e) => this.previewImage(e, 'eventImagePreview'));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    setupTeacherModal() {
        const modal = document.getElementById('teacherModal');
        const closeBtn = document.getElementById('closeTeacherModal');
        const cancelBtn = document.getElementById('cancelTeacher');
        const saveBtn = document.getElementById('saveTeacher');
        const deleteBtn = document.getElementById('deleteTeacher');
        const imageInput = document.getElementById('teacherPhoto');

        const closeModal = () => this.hideModal('teacherModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveTeacher());
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteTeacher());
        }

        if (imageInput) {
            imageInput.addEventListener('change', (e) => this.previewImage(e, 'teacherPhotoPreview'));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    setupProfileModal() {
        const modal = document.getElementById('profileModal');
        const closeBtn = document.getElementById('closeProfileModal');
        const cancelBtn = document.getElementById('cancelProfile');
        const saveBtn = document.getElementById('saveProfile');

        const closeModal = () => this.hideModal('profileModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveProfile());
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    setupEventListeners() {
        // Window resize handler
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                this.closeMobileMenu();
            }
        });
    }

    // Theme functionality
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcons();
        
        const message = this.currentLanguage === 'kk' 
            ? `Тақырып ${this.currentTheme === 'dark' ? 'қараңғы' : 'ақ'} режиміне ауыстырылды`
            : this.currentLanguage === 'ru'
            ? `Тема переключена в ${this.currentTheme === 'dark' ? 'темный' : 'светлый'} режим`
            : `Theme switched to ${this.currentTheme === 'dark' ? 'dark' : 'light'} mode`;
        
        this.showNotification(message);
    }

    updateThemeIcons() {
        const icon = this.currentTheme === 'dark' ? 'fa-sun' : 'fa-moon';
        const elements = [
            document.getElementById('themeToggle'),
            document.getElementById('mobileThemeToggle')
        ];
        
        elements.forEach(element => {
            if (element) {
                const iconElement = element.querySelector('i');
                if (iconElement) {
                    iconElement.className = `fas ${icon}`;
                }
            }
        });
    }

    // Language functionality
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update language text
        const langTexts = document.querySelectorAll('.lang-text');
        langTexts.forEach(element => {
            element.textContent = lang.toUpperCase();
        });
        
        // Update translations
        this.updateTranslations();
        
        // Reload current page content
        const currentPage = document.querySelector('.menu-item.active')?.getAttribute('data-page') || 'home';
        this.updateBreadcrumb(currentPage);
        
        // Force reload of current page with new language
        this.loadPage(currentPage);
        
        this.showNotification(this.getTranslation('languageChanged'));
    }

    updateTranslations() {
        const translations = {
            // Page titles
            home: { kk: 'Басты бет', ru: 'Главная', en: 'Home' },
            news: { kk: 'Жаңалықтар', ru: 'Новости', en: 'News' },
            events: { kk: 'Іс-шаралар', ru: 'Мероприятия', en: 'Events' },
            teachers: { kk: 'Мұғалімдер', ru: 'Учителя', en: 'Teachers' },
            profile: { kk: 'Жеке кабинет', ru: 'Личный кабинет', en: 'Profile' },
            admin: { kk: 'Әкімшілік панелі', ru: 'Админ панель', en: 'Admin Panel' },
            
            // Action buttons
            addNews: { kk: 'Жаңалық қосу', ru: 'Добавить новость', en: 'Add News' },
            addEvent: { kk: 'Іс-шара қосу', ru: 'Добавить мероприятие', en: 'Add Event' },
            manageTeachers: { kk: 'Мұғалімдерді басқару', ru: 'Управление учителями', en: 'Manage Teachers' },
            
            // Common actions
            save: { kk: 'Сақтау', ru: 'Сохранить', en: 'Save' },
            cancel: { kk: 'Болдырмау', ru: 'Отмена', en: 'Cancel' },
            delete: { kk: 'Жою', ru: 'Удалить', en: 'Delete' },
            edit: { kk: 'Өңдеу', ru: 'Редактировать', en: 'Edit' },
            readMore: { kk: 'Толығырақ', ru: 'Подробнее', en: 'Read More' },
            
            // Modal titles
            addNewsTitle: { kk: 'Жаңалық қосу', ru: 'Добавить новость', en: 'Add News' },
            editNewsTitle: { kk: 'Жаңалықты өңдеу', ru: 'Редактировать новость', en: 'Edit News' },
            addEventTitle: { kk: 'Іс-шара қосу', ru: 'Добавить мероприятие', en: 'Add Event' },
            editEventTitle: { kk: 'Іс-шараны өңдеу', ru: 'Редактировать мероприятие', en: 'Edit Event' },
            addTeacherTitle: { kk: 'Мұғалім қосу', ru: 'Добавить учителя', en: 'Add Teacher' },
            editTeacherTitle: { kk: 'Мұғалімді өңдеу', ru: 'Редактировать учителя', en: 'Edit Teacher' },
            
            // Form labels
            title: { kk: 'Тақырып', ru: 'Заголовок', en: 'Title' },
            description: { kk: 'Сипаттама', ru: 'Описание', en: 'Description' },
            content: { kk: 'Мазмұны', ru: 'Содержание', en: 'Content' },
            image: { kk: 'Сурет', ru: 'Изображение', en: 'Image' },
            links: { kk: 'Сілтемелер', ru: 'Ссылки', en: 'Links' },
            date: { kk: 'Күні', ru: 'Дата', en: 'Date' },
            published: { kk: 'Жарияланған', ru: 'Опубликовано', en: 'Published' },
            fullName: { kk: 'Толық аты', ru: 'Полное имя', en: 'Full Name' },
            subjects: { kk: 'Пәндер', ru: 'Предметы', en: 'Subjects' },
            phone: { kk: 'Телефон', ru: 'Телефон', en: 'Phone' },
            bio: { kk: 'Сипаттама', ru: 'Биография', en: 'Bio' },
            email: { kk: 'Электрондық пошта', ru: 'Электронная почта', en: 'Email' },
            newPassword: { kk: 'Жаңа құпия сөз', ru: 'Новый пароль', en: 'New Password' },
            confirmPassword: { kk: 'Құпия сөзді растау', ru: 'Подтвердить пароль', en: 'Confirm Password' },
            
            // Admin panel
            manageNews: { kk: 'Жаңалықтарды басқару', ru: 'Управление новостями', en: 'Manage News' },
            manageEvents: { kk: 'Іс-шараларды басқару', ru: 'Управление мероприятиями', en: 'Manage Events' },
            manageTeachers: { kk: 'Мұғалімдерді басқару', ru: 'Управление учителями', en: 'Manage Teachers' },
            statistics: { kk: 'Статистика', ru: 'Статистика', en: 'Statistics' },
            totalNews: { kk: 'Жаңалықтар саны', ru: 'Количество новостей', en: 'Total News' },
            totalEvents: { kk: 'Іс-шаралар саны', ru: 'Количество мероприятий', en: 'Total Events' },
            totalTeachers: { kk: 'Мұғалімдер саны', ru: 'Количество учителей', en: 'Total Teachers' },
            recentActivity: { kk: 'Соңғы әрекеттер', ru: 'Недавняя активность', en: 'Recent Activity' },

            // Notifications
            languageChanged: { 
                kk: 'Тіл қазақша ауыстырылды', 
                ru: 'Язык изменен на русский', 
                en: 'Language changed to English' 
            },
            savedSuccessfully: {
                kk: 'Сәтті сақталды',
                ru: 'Успешно сохранено',
                en: 'Saved successfully'
            },
            deletedSuccessfully: {
                kk: 'Сәтті жойылды',
                ru: 'Успешно удалено',
                en: 'Deleted successfully'
            }
        };

        // Update page titles in sidebar
        document.querySelectorAll('.menu-text').forEach(element => {
            const pageId = element.closest('.menu-item').getAttribute('data-page');
            if (translations[pageId] && translations[pageId][this.currentLanguage]) {
                element.textContent = translations[pageId][this.currentLanguage];
            }
        });

        // Update action buttons
        const actionButtons = {
            'addNewsBtn': 'addNews',
            'addEventBtn': 'addEvent',
            'manageTeachersBtn': 'manageTeachers'
        };

        Object.entries(actionButtons).forEach(([buttonId, translationKey]) => {
            const button = document.getElementById(buttonId);
            if (button) {
                const span = button.querySelector('span');
                if (span && translations[translationKey]) {
                    span.textContent = translations[translationKey][this.currentLanguage];
                }
            }
        });

        // Update modal buttons
        document.querySelectorAll('#saveNews, #cancelNews, #saveEvent, #cancelEvent, #saveTeacher, #cancelTeacher, #deleteNews, #deleteEvent, #deleteTeacher, #saveProfile, #cancelProfile').forEach(button => {
            const key = button.textContent.toLowerCase().replace(' ', '');
            if (translations[key] && translations[key][this.currentLanguage]) {
                button.textContent = translations[key][this.currentLanguage];
            }
        });

        // Update modal titles
        const modalTitles = {
            'newsModal': translations.addNewsTitle,
            'eventModal': translations.addEventTitle,
            'teacherModal': translations.addTeacherTitle,
            'profileModal': { kk: 'Профильді өңдеу', ru: 'Редактировать профиль', en: 'Edit Profile' }
        };

        Object.entries(modalTitles).forEach(([modalId, titleObj]) => {
            const modal = document.getElementById(modalId);
            if (modal) {
                const titleElement = modal.querySelector('.modal-title');
                if (titleElement && titleObj[this.currentLanguage]) {
                    // Check if we're in edit mode
                    if (modalId === 'newsModal' && this.currentEditingId) {
                        titleElement.textContent = translations.editNewsTitle[this.currentLanguage];
                    } else if (modalId === 'eventModal' && this.currentEditingId) {
                        titleElement.textContent = translations.editEventTitle[this.currentLanguage];
                    } else if (modalId === 'teacherModal' && this.currentEditingId) {
                        titleElement.textContent = translations.editTeacherTitle[this.currentLanguage];
                    } else {
                        titleElement.textContent = titleObj[this.currentLanguage];
                    }
                }
            }
        });

        // Update form labels in modals
        document.querySelectorAll('.modal-body label').forEach(label => {
            const text = label.textContent.replace('*', '').trim();
            const key = Object.keys(translations).find(k => 
                translations[k].en === text || 
                translations[k].ru === text || 
                translations[k].kk === text
            );
            if (key && translations[key][this.currentLanguage]) {
                label.textContent = translations[key][this.currentLanguage] + (label.textContent.includes('*') ? ' *' : '');
            }
        });

        // Update placeholders
        document.querySelectorAll('.form-control[placeholder]').forEach(input => {
            const placeholder = input.getAttribute('placeholder');
            const key = Object.keys(translations).find(k => 
                translations[k].en === placeholder || 
                translations[k].ru === placeholder || 
                translations[k].kk === placeholder
            );
            if (key && translations[key][this.currentLanguage]) {
                input.setAttribute('placeholder', translations[key][this.currentLanguage]);
            }
        });

        // Update user dropdown
        const profileBtn = document.getElementById('profileDropdownBtn');
        const adminBtn = document.getElementById('adminDropdownBtn');
        const logoutBtn = document.getElementById('logoutDropdownBtn');
        
        if (profileBtn) {
            profileBtn.querySelector('span').textContent = translations.profile[this.currentLanguage];
        }
        if (adminBtn) {
            adminBtn.querySelector('span').textContent = translations.admin[this.currentLanguage];
        }
        if (logoutBtn) {
            logoutBtn.querySelector('span').textContent = this.currentLanguage === 'kk' ? 'Шығу' : 
                                                         this.currentLanguage === 'ru' ? 'Выйти' : 'Logout';
        }
    }

    getTranslation(key) {
        const translations = {
            languageChanged: { 
                kk: 'Тіл қазақша ауыстырылды', 
                ru: 'Язык изменен на русский', 
                en: 'Language changed to English' 
            },
            savedSuccessfully: {
                kk: 'Сәтті сақталды',
                ru: 'Успешно сохранено',
                en: 'Saved successfully'
            },
            deletedSuccessfully: {
                kk: 'Сәтті жойылды',
                ru: 'Успешно удалено',
                en: 'Deleted successfully'
            },
            loginSuccessful: {
                kk: 'Кіру сәтті өтті',
                ru: 'Вход выполнен успешно',
                en: 'Login successful'
            },
            logoutSuccessful: {
                kk: 'Шығу сәтті өтті',
                ru: 'Выход выполнен успешно',
                en: 'Logout successful'
            },
            readMore: {
                kk: 'Толығырақ',
                ru: 'Подробнее',
                en: 'Read More'
            }
        };
        
        return translations[key]?.[this.currentLanguage] || key;
    }

    // Page management
    loadPage(pageId) {
        const contentArea = document.getElementById('content');
        if (!contentArea) return;

        const pageTemplates = {
            home: this.getHomePage(),
            news: this.getNewsPage(),
            events: this.getEventsPage(),
            teachers: this.getTeachersPage(),
            profile: this.getProfilePage(),
            admin: this.getAdminPage()
        };

        if (pageTemplates[pageId]) {
            contentArea.innerHTML = pageTemplates[pageId];
            this.initializePage(pageId);
            this.updateBreadcrumb(pageId);
        }
    }

    updateActiveMenuItem(pageId) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`.menu-item[data-page="${pageId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    updateBreadcrumb(pageId) {
        const breadcrumb = document.querySelector('.page-name');
        const pageNames = {
            home: { kk: 'Басты бет', ru: 'Главная', en: 'Home' },
            news: { kk: 'Жаңалықтар', ru: 'Новости', en: 'News' },
            events: { kk: 'Іс-шаралар', ru: 'Мероприятия', en: 'Events' },
            teachers: { kk: 'Мұғалімдер', ru: 'Учителя', en: 'Teachers' },
            profile: { kk: 'Жеке кабинет', ru: 'Личный кабинет', en: 'Profile' },
            admin: { kk: 'Әкімшілік панелі', ru: 'Админ панель', en: 'Admin Panel' }
        };
        
        if (breadcrumb && pageNames[pageId]) {
            breadcrumb.textContent = pageNames[pageId][this.currentLanguage] || pageNames[pageId]['en'];
        }
    }

    initializePage(pageId) {
        // Add page-specific event listeners
        switch (pageId) {
            case 'news':
                this.setupNewsPage();
                break;
            case 'events':
                this.setupEventsPage();
                break;
            case 'teachers':
                this.setupTeachersPage();
                break;
            case 'profile':
                this.setupProfilePage();
                break;
            case 'admin':
                this.setupAdminPage();
                break;
        }
    }

    // Page templates
    getHomePage() {
        const t = this.currentLanguage === 'kk' ? {
            title: "IT Лицейге қош келдіңіз",
            subtitle: "Біздің мектеп - болашақ IT мамандарын дайындау ордасы",
            aboutSchool: "Мектеп туралы",
            schoolDescription: "IT Лицей - бұл заманауи білім беру орталығы, онда оқушылар IT саласындағы ең соңғы технологияларды меңгереді.",
            address: "Мекенжайы: Көкшетау қаласы, Сарыарқа 7А",
            hours: "Жұмыс уақыты: 9:00 - 16:00",
            latestNews: "Соңғы жаңалықтар",
            upcomingEvents: "Жуықтаған іс-шаралар",
            quickLinks: "Жылдам сілтемелер",
            viewAll: "Барлығын көру",
            noNews: "Әлі жаңалықтар жоқ",
            noEvents: "Әлі іс-шаралар жоқ"
        } : this.currentLanguage === 'ru' ? {
            title: "Добро пожаловать в IT Лицей", 
            subtitle: "Наша школа - центр подготовки будущих IT специалистов",
            aboutSchool: "О школе",
            schoolDescription: "IT Лицей - это современный образовательный центр, где ученики осваивают самые передовые технологии в IT сфере.",
            address: "Адрес: г. Кокшетау, Сарыарка 7А",
            hours: "Часы работы: 9:00 - 16:00",
            latestNews: "Последние новости",
            upcomingEvents: "Ближайшие мероприятия",
            quickLinks: "Быстрые ссылки",
            viewAll: "Смотреть все",
            noNews: "Пока нет новостей",
            noEvents: "Пока нет мероприятий"
        } : {
            title: "Welcome to IT Lyceum",
            subtitle: "Our school is a center for training future IT specialists", 
            aboutSchool: "About School",
            schoolDescription: "IT Lyceum is a modern educational center where students master the latest technologies in the IT field.",
            address: "Address: Kokshetau, Saryarka 7A",
            hours: "Working Hours: 9:00 - 16:00",
            latestNews: "Latest News",
            upcomingEvents: "Upcoming Events",
            quickLinks: "Quick Links",
            viewAll: "View All",
            noNews: "No news yet",
            noEvents: "No events yet"
        };

        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]')
            .filter(item => item.published)
            .slice(0, 3);

        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]')
            .filter(item => item.published && new Date(item.date) > new Date())
            .slice(0, 3);

        return `
            <div class="page-content">
                <h1 class="page-title">${t.title}</h1>
                <p class="page-subtitle">${t.subtitle}</p>
                
                <div class="card">
                    <h2 class="card-title">${t.aboutSchool}</h2>
                    <p>${t.schoolDescription}</p>
                    <div style="margin-top: 1rem;">
                        <p><strong>${t.address}</strong></p>
                        <p><strong>${t.hours}</strong></p>
                    </div>
                </div>

                <div class="quick-links">
                    <a href="#" class="quick-link-card" data-page="news">
                        <div class="quick-link-icon">
                            <i class="fas fa-newspaper"></i>
                        </div>
                        <h3>${this.currentLanguage === 'kk' ? 'Жаңалықтар' : this.currentLanguage === 'ru' ? 'Новости' : 'News'}</h3>
                    </a>
                    <a href="#" class="quick-link-card" data-page="events">
                        <div class="quick-link-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <h3>${this.currentLanguage === 'kk' ? 'Іс-шаралар' : this.currentLanguage === 'ru' ? 'Мероприятия' : 'Events'}</h3>
                    </a>
                    <a href="#" class="quick-link-card" data-page="teachers">
                        <div class="quick-link-icon">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </div>
                        <h3>${this.currentLanguage === 'kk' ? 'Мұғалімдер' : this.currentLanguage === 'ru' ? 'Учителя' : 'Teachers'}</h3>
                    </a>
                    <a href="#" class="quick-link-card" data-page="profile">
                        <div class="quick-link-icon">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <h3>${this.currentLanguage === 'kk' ? 'Жеке кабинет' : this.currentLanguage === 'ru' ? 'Личный кабинет' : 'Profile'}</h3>
                    </a>
                </div>

                <div class="card">
                    <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 1rem;">
                        <h2 class="card-title">${t.latestNews}</h2>
                        <button class="btn btn-sm btn-primary" onclick="schoolApp.loadPage('news')">
                            ${t.viewAll}
                        </button>
                    </div>
                    ${newsData.length === 0 ? `
                        <div class="empty-state">
                            <i class="fas fa-newspaper empty-state-icon"></i>
                            <p>${t.noNews}</p>
                        </div>
                    ` : `
                        <div class="news-grid">
                            ${newsData.map(news => `
                                <div class="news-item">
                                    ${news.image ? `
                                        <img src="${news.image}" class="news-image" alt="${news.title}">
                                    ` : `
                                        <div class="image-placeholder">
                                            <i class="fas fa-newspaper"></i>
                                        </div>
                                    `}
                                    <div class="news-date">${new Date(news.date).toLocaleDateString(this.currentLanguage)}</div>
                                    <h3 class="news-title">${news.title}</h3>
                                    <p class="news-excerpt">${news.description}</p>
                                    <div class="news-meta">
                                        <span>${this.getTranslation('readMore')}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>

                <div class="card">
                    <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 1rem;">
                        <h2 class="card-title">${t.upcomingEvents}</h2>
                        <button class="btn btn-sm btn-primary" onclick="schoolApp.loadPage('events')">
                            ${t.viewAll}
                        </button>
                    </div>
                    ${eventsData.length === 0 ? `
                        <div class="empty-state">
                            <i class="fas fa-calendar empty-state-icon"></i>
                            <p>${t.noEvents}</p>
                        </div>
                    ` : `
                        <div class="events-grid">
                            ${eventsData.map(event => `
                                <div class="event-item">
                                    ${event.image ? `
                                        <img src="${event.image}" class="event-image" alt="${event.title}">
                                    ` : `
                                        <div class="image-placeholder">
                                            <i class="fas fa-calendar"></i>
                                        </div>
                                    `}
                                    <div class="event-date">${new Date(event.date).toLocaleDateString(this.currentLanguage)}</div>
                                    <h3 class="event-title">${event.title}</h3>
                                    <p class="event-description">${event.description}</p>
                                    <div class="event-meta">
                                        <span>${this.getTranslation('readMore')}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    getNewsPage() {
        const t = this.currentLanguage === 'kk' ? {
            title: "Жаңалықтар",
            noNews: "Әлі жаңалықтар жоқ",
            addFirstNews: "Алғашқы жаңалықты қосыңыз"
        } : this.currentLanguage === 'ru' ? {
            title: "Новости",
            noNews: "Пока нет новостей",
            addFirstNews: "Добавьте первую новость"
        } : {
            title: "News",
            noNews: "No news yet",
            addFirstNews: "Add first news"
        };

        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]')
            .filter(item => item.published)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        let newsHTML = '';
        
        if (newsData.length === 0) {
            newsHTML = `
                <div class="empty-state">
                    <i class="fas fa-newspaper empty-state-icon"></i>
                    <h3 class="empty-state-title">${t.noNews}</h3>
                    <p class="empty-state-description">${t.addFirstNews}</p>
                </div>
            `;
        } else {
            newsHTML = '<div class="news-grid">';
            newsData.forEach(news => {
                const date = new Date(news.date).toLocaleDateString(this.currentLanguage);
                newsHTML += `
                    <div class="news-item">
                        ${news.image ? `
                            <img src="${news.image}" class="news-image" alt="${news.title}">
                        ` : `
                            <div class="image-placeholder">
                                <i class="fas fa-newspaper"></i>
                            </div>
                        `}
                        <div class="news-date">${date}</div>
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-excerpt">${news.description}</p>
                        <div class="news-meta">
                            <span>${this.getAuthorName(news.authorId)}</span>
                        </div>
                        ${this.isAdmin() ? `
                            <div class="admin-actions">
                                <button class="btn btn-sm btn-warning" onclick="schoolApp.editNews(${news.id})">
                                    <i class="fas fa-edit"></i>
                                    ${this.getTranslation('edit')}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="schoolApp.deleteNews(${news.id})">
                                    <i class="fas fa-trash"></i>
                                    ${this.getTranslation('delete')}
                                </button>
                            </div>
                        ` : ''}
                    </div>
                `;
            });
            newsHTML += '</div>';
        }

        return `
            <div class="page-content">
                <h1 class="page-title">${t.title}</h1>
                ${newsHTML}
            </div>
        `;
    }

    getEventsPage() {
        const t = this.currentLanguage === 'kk' ? {
            title: "Іс-шаралар",
            noEvents: "Әлі іс-шаралар жоқ",
            addFirstEvent: "Алғашқы іс-шараны қосыңыз",
            upcoming: "Алдағы",
            past: "Өткен",
            all: "Барлығы"
        } : this.currentLanguage === 'ru' ? {
            title: "Мероприятия",
            noEvents: "Пока нет мероприятий",
            addFirstEvent: "Добавьте первое мероприятие",
            upcoming: "Предстоящие",
            past: "Прошедшие",
            all: "Все"
        } : {
            title: "Events",
            noEvents: "No events yet",
            addFirstEvent: "Add first event",
            upcoming: "Upcoming",
            past: "Past",
            all: "All"
        };

        return `
            <div class="page-content">
                <h1 class="page-title">${t.title}</h1>
                
                <div class="filters">
                    <div class="filter-group">
                        <button class="filter-btn active" data-filter="all">${t.all}</button>
                        <button class="filter-btn" data-filter="upcoming">${t.upcoming}</button>
                        <button class="filter-btn" data-filter="past">${t.past}</button>
                    </div>
                </div>
                
                <div id="eventsContent">
                    <!-- Events will be loaded here -->
                </div>
            </div>
        `;
    }

    getTeachersPage() {
        const t = this.currentLanguage === 'kk' ? {
            title: "Мұғалімдер",
            searchPlaceholder: "Мұғалімдерді іздеу...",
            filterBySubject: "Пән бойынша сүзгілеу",
            allSubjects: "Барлық пәндер",
            noTeachers: "Мұғалімдер тізімі бос",
            contactOnWhatsApp: "WhatsApp-та хабарласу"
        } : this.currentLanguage === 'ru' ? {
            title: "Учителя",
            searchPlaceholder: "Поиск учителей...",
            filterBySubject: "Фильтр по предметам",
            allSubjects: "Все предметы",
            noTeachers: "Список учителей пуст",
            contactOnWhatsApp: "Написать в WhatsApp"
        } : {
            title: "Teachers",
            searchPlaceholder: "Search teachers...",
            filterBySubject: "Filter by subject",
            allSubjects: "All subjects",
            noTeachers: "No teachers found",
            contactOnWhatsApp: "Contact on WhatsApp"
        };

        return `
            <div class="page-content">
                <h1 class="page-title">${t.title}</h1>
                
                <div class="filters">
                    <div class="search-box">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" id="teacherSearch" class="search-input" placeholder="${t.searchPlaceholder}">
                    </div>
                    <div class="filter-group">
                        <select id="subjectFilter" class="form-control">
                            <option value="">${t.allSubjects}</option>
                        </select>
                    </div>
                </div>
                
                <div id="teachersContent">
                    <!-- Teachers will be loaded here -->
                </div>
            </div>
        `;
    }

    getProfilePage() {
        const user = window.authSystem?.getCurrentUser();
        if (!user) return '<div>Please log in</div>';

        const t = this.currentLanguage === 'kk' ? {
            title: "Жеке кабинет",
            fullName: "Толық аты-жөні",
            role: "Рөл",
            class: "Сынып",
            email: "Электрондық пошта",
            phone: "Телефон",
            editProfile: "Профильді өңдеу",
            changePassword: "Құпия сөзді өзгерту",
            logout: "Шығу"
        } : this.currentLanguage === 'ru' ? {
            title: "Личный кабинет",
            fullName: "Полное имя",
            role: "Роль",
            class: "Класс",
            email: "Электронная почта",
            phone: "Телефон",
            editProfile: "Редактировать профиль",
            changePassword: "Изменить пароль",
            logout: "Выйти"
        } : {
            title: "Profile",
            fullName: "Full Name",
            role: "Role",
            class: "Class",
            email: "Email",
            phone: "Phone",
            editProfile: "Edit Profile",
            changePassword: "Change Password",
            logout: "Logout"
        };

        const classInfo = user.grade && user.letter ? `${user.grade}${user.letter}` : '';

        return `
            <div class="page-content">
                <h1 class="page-title">${t.title}</h1>
                
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
                        <div class="user-avatar" style="width: 80px; height: 80px; font-size: 1.5rem;">
                            <span>${this.getInitials(user.fullName)}</span>
                        </div>
                        <div>
                            <h2 style="margin-bottom: 0.5rem;">${user.fullName}</h2>
                            <p style="color: var(--text-secondary);">${user.role}</p>
                        </div>
                    </div>
                    
                    <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
                        <div>
                            <strong>${t.fullName}:</strong> ${user.fullName}
                        </div>
                        <div>
                            <strong>${t.role}:</strong> ${user.role}
                        </div>
                        ${classInfo ? `<div><strong>${t.class}:</strong> ${classInfo}</div>` : ''}
                        ${user.email ? `<div><strong>${t.email}:</strong> ${user.email}</div>` : ''}
                        ${user.phone ? `<div><strong>${t.phone}:</strong> ${user.phone}</div>` : ''}
                    </div>
                    
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="schoolApp.openProfileModal()">
                            <i class="fas fa-edit"></i>
                            ${t.editProfile}
                        </button>
                        <button class="btn btn-secondary" onclick="schoolApp.openProfileModal()">
                            <i class="fas fa-key"></i>
                            ${t.changePassword}
                        </button>
                        <button class="btn btn-danger" onclick="window.authSystem.logout()">
                            <i class="fas fa-sign-out-alt"></i>
                            ${t.logout}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getAdminPage() {
        if (!this.isAdmin()) {
            return `
                <div class="page-content">
                    <div class="empty-state">
                        <i class="fas fa-lock empty-state-icon"></i>
                        <h3 class="empty-state-title">Access Denied</h3>
                        <p>You don't have permission to access this page.</p>
                    </div>
                </div>
            `;
        }

        const t = this.currentLanguage === 'kk' ? {
            title: "Әкімшілік панелі",
            manageNews: "Жаңалықтарды басқару",
            manageEvents: "Іс-шараларды басқару",
            manageTeachers: "Мұғалімдерді басқару",
            statistics: "Статистика",
            totalNews: "Жаңалықтар саны",
            totalEvents: "Іс-шаралар саны",
            totalTeachers: "Мұғалімдер саны",
            recentActivity: "Соңғы әрекеттер"
        } : this.currentLanguage === 'ru' ? {
            title: "Админ панель",
            manageNews: "Управление новостями",
            manageEvents: "Управление мероприятиями",
            manageTeachers: "Управление учителями",
            statistics: "Статистика",
            totalNews: "Количество новостей",
            totalEvents: "Количество мероприятий",
            totalTeachers: "Количество учителей",
            recentActivity: "Недавняя активность"
        } : {
            title: "Admin Panel",
            manageNews: "Manage News",
            manageEvents: "Manage Events",
            manageTeachers: "Manage Teachers",
            statistics: "Statistics",
            totalNews: "Total News",
            totalEvents: "Total Events",
            totalTeachers: "Total Teachers",
            recentActivity: "Recent Activity"
        };

        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');

        return `
            <div class="page-content">
                <h1 class="page-title">${t.title}</h1>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">${newsData.length}</div>
                        <div class="stat-label">${t.totalNews}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${eventsData.length}</div>
                        <div class="stat-label">${t.totalEvents}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${teachersData.length}</div>
                        <div class="stat-label">${t.totalTeachers}</div>
                    </div>
                </div>
                
                <div class="card">
                    <h2 class="card-title">${t.manageNews}</h2>
                    <p>${this.currentLanguage === 'kk' ? 'Жаңалықтар мен хабарландыруларды жасау, өңдеу және басқару' : this.currentLanguage === 'ru' ? 'Создание, редактирование и управление школьными новостями и объявлениями' : 'Create, edit, and manage school news and announcements'}</p>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-primary" onclick="schoolApp.openNewsModal()">
                            <i class="fas fa-plus"></i>
                            ${t.manageNews}
                        </button>
                    </div>
                </div>
                
                <div class="card">
                    <h2 class="card-title">${t.manageEvents}</h2>
                    <p>${this.currentLanguage === 'kk' ? 'Мектеп іс-шаралары мен белсенділіктерін ұйымдастыру және басқару' : this.currentLanguage === 'ru' ? 'Организация и управление школьными мероприятиями и активностями' : 'Organize and manage school events and activities'}</p>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-success" onclick="schoolApp.openEventModal()">
                            <i class="fas fa-plus"></i>
                            ${t.manageEvents}
                        </button>
                    </div>
                </div>
                
                <div class="card">
                    <h2 class="card-title">${t.manageTeachers}</h2>
                    <p>${this.currentLanguage === 'kk' ? 'Мұғалім профильдері мен ақпаратын басқару' : this.currentLanguage === 'ru' ? 'Управление профилями учителей и информацией' : 'Manage teacher profiles and information'}</p>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-warning" onclick="schoolApp.openTeacherModal()">
                            <i class="fas fa-plus"></i>
                            ${t.manageTeachers}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Page setup methods
    setupNewsPage() {
        // News page specific setup
    }

    setupEventsPage() {
        this.loadEventsContent('all');
        
        // Event filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.loadEventsContent(btn.getAttribute('data-filter'));
            });
        });
    }

    loadEventsContent(filter) {
        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]')
            .filter(item => item.published);

        const now = new Date();
        let filteredEvents = eventsData;

        if (filter === 'upcoming') {
            filteredEvents = eventsData.filter(event => new Date(event.date) > now);
        } else if (filter === 'past') {
            filteredEvents = eventsData.filter(event => new Date(event.date) <= now);
        }

        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

        const t = this.currentLanguage === 'kk' ? {
            noEvents: "Әлі іс-шаралар жоқ",
            addFirstEvent: "Алғашқы іс-шараны қосыңыз"
        } : this.currentLanguage === 'ru' ? {
            noEvents: "Пока нет мероприятий",
            addFirstEvent: "Добавьте первое мероприятие"
        } : {
            noEvents: "No events yet",
            addFirstEvent: "Add first event"
        };

        let eventsHTML = '';
        
        if (filteredEvents.length === 0) {
            eventsHTML = `
                <div class="empty-state">
                    <i class="fas fa-calendar empty-state-icon"></i>
                    <h3 class="empty-state-title">${t.noEvents}</h3>
                    <p class="empty-state-description">${t.addFirstEvent}</p>
                </div>
            `;
        } else {
            eventsHTML = '<div class="events-grid">';
            filteredEvents.forEach(event => {
                const date = new Date(event.date).toLocaleDateString(this.currentLanguage);
                eventsHTML += `
                    <div class="event-item">
                        ${event.image ? `
                            <img src="${event.image}" class="event-image" alt="${event.title}">
                        ` : `
                            <div class="image-placeholder">
                                <i class="fas fa-calendar"></i>
                            </div>
                        `}
                        <div class="event-date">${date}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <div class="event-meta">
                            <span>${this.getAuthorName(event.authorId)}</span>
                        </div>
                        ${this.isAdmin() ? `
                            <div class="admin-actions">
                                <button class="btn btn-sm btn-warning" onclick="schoolApp.editEvent(${event.id})">
                                    <i class="fas fa-edit"></i>
                                    ${this.getTranslation('edit')}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="schoolApp.deleteEvent(${event.id})">
                                    <i class="fas fa-trash"></i>
                                    ${this.getTranslation('delete')}
                                </button>
                            </div>
                        ` : ''}
                    </div>
                `;
            });
            eventsHTML += '</div>';
        }

        const eventsContent = document.getElementById('eventsContent');
        if (eventsContent) {
            eventsContent.innerHTML = eventsHTML;
        }
    }

    setupTeachersPage() {
        this.loadTeachersContent();
        
        // Search functionality
        const searchInput = document.getElementById('teacherSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.loadTeachersContent();
            });
        }

        // Setup subject filter
        this.setupSubjectFilter();
    }

    setupSubjectFilter() {
        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
        const subjects = new Set();
        
        teachersData.forEach(teacher => {
            teacher.subjects.forEach(subject => {
                subjects.add(subject.trim());
            });
        });

        const subjectFilter = document.getElementById('subjectFilter');
        if (subjectFilter) {
            Array.from(subjects).sort().forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectFilter.appendChild(option);
            });

            subjectFilter.addEventListener('change', () => {
                this.loadTeachersContent();
            });
        }
    }

    loadTeachersContent() {
        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
        const searchTerm = document.getElementById('teacherSearch')?.value.toLowerCase() || '';
        const subjectFilter = document.getElementById('subjectFilter')?.value || '';

        let filteredTeachers = teachersData;

        // Apply search filter
        if (searchTerm) {
            filteredTeachers = filteredTeachers.filter(teacher =>
                teacher.fullName.toLowerCase().includes(searchTerm) ||
                teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm)) ||
                teacher.bio.toLowerCase().includes(searchTerm)
            );
        }

        // Apply subject filter
        if (subjectFilter) {
            filteredTeachers = filteredTeachers.filter(teacher =>
                teacher.subjects.includes(subjectFilter)
            );
        }

        const t = this.currentLanguage === 'kk' ? {
            noTeachers: "Мұғалімдер тізімі бос",
            contactOnWhatsApp: "WhatsApp-та хабарласу",
            subjects: "Пәндер"
        } : this.currentLanguage === 'ru' ? {
            noTeachers: "Список учителей пуст",
            contactOnWhatsApp: "Написать в WhatsApp",
            subjects: "Предметы"
        } : {
            noTeachers: "No teachers found",
            contactOnWhatsApp: "Contact on WhatsApp",
            subjects: "Subjects"
        };

        let teachersHTML = '';
        
        if (filteredTeachers.length === 0) {
            teachersHTML = `
                <div class="empty-state">
                    <i class="fas fa-chalkboard-teacher empty-state-icon"></i>
                    <h3 class="empty-state-title">${t.noTeachers}</h3>
                </div>
            `;
        } else {
            teachersHTML = '<div class="teachers-grid">';
            filteredTeachers.forEach(teacher => {
                const whatsappUrl = `https://wa.me/${teacher.phone.replace(/[^\d+]/g, '')}`;
                teachersHTML += `
                    <div class="teacher-item">
                        ${teacher.photo ? `
                            <img src="${teacher.photo}" class="teacher-image" alt="${teacher.fullName}">
                        ` : `
                            <div class="image-placeholder">
                                <i class="fas fa-user-tie"></i>
                            </div>
                        `}
                        <h3 class="teacher-name">${teacher.fullName}</h3>
                        <div class="teacher-subjects">
                            ${teacher.subjects.map(subject => `
                                <span class="subject-tag">${subject}</span>
                            `).join('')}
                        </div>
                        <p class="teacher-bio">${teacher.bio}</p>
                        <div class="teacher-actions">
                            <a href="${whatsappUrl}" target="_blank" class="whatsapp-btn">
                                <i class="fab fa-whatsapp"></i>
                                ${t.contactOnWhatsApp}
                            </a>
                            ${this.isAdmin() ? `
                                <button class="btn btn-sm btn-warning" onclick="schoolApp.editTeacher(${teacher.id})">
                                    <i class="fas fa-edit"></i>
                                    ${this.getTranslation('edit')}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="schoolApp.deleteTeacher(${teacher.id})">
                                    <i class="fas fa-trash"></i>
                                    ${this.getTranslation('delete')}
                                </button>
                            ` : ''}
                        </div>
                    </div>
                `;
            });
            teachersHTML += '</div>';
        }

        const teachersContent = document.getElementById('teachersContent');
        if (teachersContent) {
            teachersContent.innerHTML = teachersHTML;
        }
    }

    setupProfilePage() {
        // Profile page specific setup
    }

    setupAdminPage() {
        // Admin page specific setup
    }

    // Modal methods
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
            this.currentEditingId = null;
            this.clearModal(modalId);
        }
    }

    clearModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            const inputs = modal.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                if (input.type !== 'button' && input.type !== 'submit') {
                    input.value = '';
                }
            });

            const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });

            const imagePreviews = modal.querySelectorAll('.image-preview');
            imagePreviews.forEach(preview => {
                preview.innerHTML = '';
                preview.style.display = 'none';
            });

            const deleteButtons = modal.querySelectorAll('.btn-danger');
            deleteButtons.forEach(btn => {
                btn.style.display = 'none';
            });

            // Reset modal titles to default (add mode)
            const modalTitles = {
                'newsModal': 'Add News',
                'eventModal': 'Add Event',
                'teacherModal': 'Add Teacher'
            };

            if (modalTitles[modalId]) {
                const titleElement = modal.querySelector('.modal-title');
                if (titleElement) {
                    titleElement.textContent = modalTitles[modalId];
                }
            }
        }
    }

    // News management
    openNewsModal(newsId = null) {
        if (!this.isAdmin()) return;

        this.currentEditingId = newsId;
        const modal = document.getElementById('newsModal');
        const titleElement = document.getElementById('newsModalTitle');
        const deleteBtn = document.getElementById('deleteNews');

        if (newsId) {
            // Edit mode
            const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
            const news = newsData.find(item => item.id === newsId);
            
            if (news) {
                document.getElementById('newsTitle').value = news.title;
                document.getElementById('newsDescription').value = news.description;
                document.getElementById('newsContent').value = news.content;
                document.getElementById('newsLinks').value = news.links?.join('\n') || '';
                document.getElementById('newsDate').value = news.date.slice(0, 16);
                document.getElementById('newsPublished').checked = news.published;
                
                if (news.image) {
                    const preview = document.getElementById('newsImagePreview');
                    preview.innerHTML = `<img src="${news.image}" alt="Preview">`;
                    preview.style.display = 'block';
                }

                if (titleElement) titleElement.textContent = this.currentLanguage === 'kk' ? 'Жаңалықты өңдеу' : 
                                                           this.currentLanguage === 'ru' ? 'Редактировать новость' : 'Edit News';
                if (deleteBtn) deleteBtn.style.display = 'block';
            }
        } else {
            // Add mode
            document.getElementById('newsDate').value = new Date().toISOString().slice(0, 16);
            if (titleElement) titleElement.textContent = this.currentLanguage === 'kk' ? 'Жаңалық қосу' : 
                                                       this.currentLanguage === 'ru' ? 'Добавить новость' : 'Add News';
            if (deleteBtn) deleteBtn.style.display = 'none';
        }

        this.showModal('newsModal');
    }

    saveNews() {
        const title = document.getElementById('newsTitle').value;
        const description = document.getElementById('newsDescription').value;
        const content = document.getElementById('newsContent').value;
        const links = document.getElementById('newsLinks').value.split('\n').filter(link => link.trim());
        const date = document.getElementById('newsDate').value;
        const published = document.getElementById('newsPublished').checked;
        const imageFile = document.getElementById('newsImage').files[0];

        if (!title || !description || !date) {
            this.showNotification(this.currentLanguage === 'kk' ? 'Барлық міндетті өрістерді толтырыңыз' : 
                                this.currentLanguage === 'ru' ? 'Заполните все обязательные поля' : 
                                'Please fill all required fields', 'error');
            return;
        }

        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
        const user = window.authSystem?.getCurrentUser();

        const saveNewsItem = (imageUrl = '') => {
            const newsItem = {
                id: this.currentEditingId || Date.now(),
                title,
                description,
                content,
                image: imageUrl,
                links,
                date,
                authorId: user?.id || 1,
                published,
                createdAt: this.currentEditingId ? 
                    newsData.find(item => item.id === this.currentEditingId)?.createdAt || new Date().toISOString() :
                    new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            if (this.currentEditingId) {
                // Update existing news
                const index = newsData.findIndex(item => item.id === this.currentEditingId);
                if (index !== -1) {
                    newsData[index] = newsItem;
                }
            } else {
                // Add new news
                newsData.unshift(newsItem);
            }

            localStorage.setItem('newsData', JSON.stringify(newsData));
            this.hideModal('newsModal');
            this.showNotification(this.getTranslation('savedSuccessfully'));

            // Reload news page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'news') {
                this.loadPage('news');
            }
        };

        if (imageFile) {
            this.readImageFile(imageFile).then(imageUrl => {
                saveNewsItem(imageUrl);
            });
        } else {
            // Keep existing image if editing
            if (this.currentEditingId) {
                const existingNews = newsData.find(item => item.id === this.currentEditingId);
                saveNewsItem(existingNews?.image || '');
            } else {
                saveNewsItem('');
            }
        }
    }

    editNews(id) {
        this.openNewsModal(id);
    }

    deleteNews(id = null) {
        if (!this.isAdmin()) return;

        const newsId = id || this.currentEditingId;
        if (!newsId) return;

        if (confirm(this.currentLanguage === 'kk' ? 'Бұл жаңалықты жоюға сенімдісіз бе?' : 
                  this.currentLanguage === 'ru' ? 'Вы уверены, что хотите удалить эту новость?' : 
                  'Are you sure you want to delete this news?')) {
            const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
            const filteredData = newsData.filter(item => item.id !== newsId);
            localStorage.setItem('newsData', JSON.stringify(filteredData));
            
            this.hideModal('newsModal');
            this.showNotification(this.getTranslation('deletedSuccessfully'));

            // Reload news page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'news') {
                this.loadPage('news');
            }
        }
    }

    // Event management
    openEventModal(eventId = null) {
        if (!this.isAdmin()) return;

        this.currentEditingId = eventId;
        const modal = document.getElementById('eventModal');
        const titleElement = document.getElementById('eventModalTitle');
        const deleteBtn = document.getElementById('deleteEvent');

        if (eventId) {
            // Edit mode
            const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
            const event = eventsData.find(item => item.id === eventId);
            
            if (event) {
                document.getElementById('eventTitle').value = event.title;
                document.getElementById('eventDescription').value = event.description;
                document.getElementById('eventLinks').value = event.links?.join('\n') || '';
                document.getElementById('eventDate').value = event.date.slice(0, 16);
                document.getElementById('eventPublished').checked = event.published;
                
                if (event.image) {
                    const preview = document.getElementById('eventImagePreview');
                    preview.innerHTML = `<img src="${event.image}" alt="Preview">`;
                    preview.style.display = 'block';
                }

                if (titleElement) titleElement.textContent = this.currentLanguage === 'kk' ? 'Іс-шараны өңдеу' : 
                                                           this.currentLanguage === 'ru' ? 'Редактировать мероприятие' : 'Edit Event';
                if (deleteBtn) deleteBtn.style.display = 'block';
            }
        } else {
            // Add mode
            document.getElementById('eventDate').value = new Date().toISOString().slice(0, 16);
            if (titleElement) titleElement.textContent = this.currentLanguage === 'kk' ? 'Іс-шара қосу' : 
                                                       this.currentLanguage === 'ru' ? 'Добавить мероприятие' : 'Add Event';
            if (deleteBtn) deleteBtn.style.display = 'none';
        }

        this.showModal('eventModal');
    }

    saveEvent() {
        const title = document.getElementById('eventTitle').value;
        const description = document.getElementById('eventDescription').value;
        const links = document.getElementById('eventLinks').value.split('\n').filter(link => link.trim());
        const date = document.getElementById('eventDate').value;
        const published = document.getElementById('eventPublished').checked;
        const imageFile = document.getElementById('eventImage').files[0];

        if (!title || !description || !date) {
            this.showNotification(this.currentLanguage === 'kk' ? 'Барлық міндетті өрістерді толтырыңыз' : 
                                this.currentLanguage === 'ru' ? 'Заполните все обязательные поля' : 
                                'Please fill all required fields', 'error');
            return;
        }

        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
        const user = window.authSystem?.getCurrentUser();

        const saveEventItem = (imageUrl = '') => {
            const eventItem = {
                id: this.currentEditingId || Date.now(),
                title,
                description,
                image: imageUrl,
                links,
                date,
                authorId: user?.id || 1,
                published,
                createdAt: this.currentEditingId ? 
                    eventsData.find(item => item.id === this.currentEditingId)?.createdAt || new Date().toISOString() :
                    new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            if (this.currentEditingId) {
                // Update existing event
                const index = eventsData.findIndex(item => item.id === this.currentEditingId);
                if (index !== -1) {
                    eventsData[index] = eventItem;
                }
            } else {
                // Add new event
                eventsData.unshift(eventItem);
            }

            localStorage.setItem('eventsData', JSON.stringify(eventsData));
            this.hideModal('eventModal');
            this.showNotification(this.getTranslation('savedSuccessfully'));

            // Reload events page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'events') {
                this.loadEventsContent('all');
            }
        };

        if (imageFile) {
            this.readImageFile(imageFile).then(imageUrl => {
                saveEventItem(imageUrl);
            });
        } else {
            // Keep existing image if editing
            if (this.currentEditingId) {
                const existingEvent = eventsData.find(item => item.id === this.currentEditingId);
                saveEventItem(existingEvent?.image || '');
            } else {
                saveEventItem('');
            }
        }
    }

    editEvent(id) {
        this.openEventModal(id);
    }

    deleteEvent(id = null) {
        if (!this.isAdmin()) return;

        const eventId = id || this.currentEditingId;
        if (!eventId) return;

        if (confirm(this.currentLanguage === 'kk' ? 'Бұл іс-шараны жоюға сенімдісіз бе?' : 
                  this.currentLanguage === 'ru' ? 'Вы уверены, что хотите удалить это мероприятие?' : 
                  'Are you sure you want to delete this event?')) {
            const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
            const filteredData = eventsData.filter(item => item.id !== eventId);
            localStorage.setItem('eventsData', JSON.stringify(filteredData));
            
            this.hideModal('eventModal');
            this.showNotification(this.getTranslation('deletedSuccessfully'));

            // Reload events page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'events') {
                this.loadEventsContent('all');
            }
        }
    }

    // Teacher management
    openTeacherModal(teacherId = null) {
        if (!this.isAdmin()) return;

        this.currentEditingId = teacherId;
        const modal = document.getElementById('teacherModal');
        const titleElement = document.getElementById('teacherModalTitle');
        const deleteBtn = document.getElementById('deleteTeacher');

        if (teacherId) {
            // Edit mode
            const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
            const teacher = teachersData.find(item => item.id === teacherId);
            
            if (teacher) {
                document.getElementById('teacherName').value = teacher.fullName;
                document.getElementById('teacherSubjects').value = teacher.subjects.join(', ');
                document.getElementById('teacherPhone').value = teacher.phone;
                document.getElementById('teacherBio').value = teacher.bio;
                
                if (teacher.photo) {
                    const preview = document.getElementById('teacherPhotoPreview');
                    preview.innerHTML = `<img src="${teacher.photo}" alt="Preview">`;
                    preview.style.display = 'block';
                }

                if (titleElement) titleElement.textContent = this.currentLanguage === 'kk' ? 'Мұғалімді өңдеу' : 
                                                           this.currentLanguage === 'ru' ? 'Редактировать учителя' : 'Edit Teacher';
                if (deleteBtn) deleteBtn.style.display = 'block';
            }
        } else {
            // Add mode
            if (titleElement) titleElement.textContent = this.currentLanguage === 'kk' ? 'Мұғалім қосу' : 
                                                       this.currentLanguage === 'ru' ? 'Добавить учителя' : 'Add Teacher';
            if (deleteBtn) deleteBtn.style.display = 'none';
        }

        this.showModal('teacherModal');
    }

    saveTeacher() {
        const fullName = document.getElementById('teacherName').value;
        const subjects = document.getElementById('teacherSubjects').value.split(',').map(s => s.trim()).filter(s => s);
        const phone = document.getElementById('teacherPhone').value;
        const bio = document.getElementById('teacherBio').value;
        const photoFile = document.getElementById('teacherPhoto').files[0];

        if (!fullName || !subjects.length || !phone) {
            this.showNotification(this.currentLanguage === 'kk' ? 'Барлық міндетті өрістерді толтырыңыз' : 
                                this.currentLanguage === 'ru' ? 'Заполните все обязательные поля' : 
                                'Please fill all required fields', 'error');
            return;
        }

        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');

        const saveTeacherItem = (photoUrl = '') => {
            const teacherItem = {
                id: this.currentEditingId || Date.now(),
                fullName,
                subjects,
                phone,
                bio,
                photo: photoUrl,
                createdAt: this.currentEditingId ? 
                    teachersData.find(item => item.id === this.currentEditingId)?.createdAt || new Date().toISOString() :
                    new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            if (this.currentEditingId) {
                // Update existing teacher
                const index = teachersData.findIndex(item => item.id === this.currentEditingId);
                if (index !== -1) {
                    teachersData[index] = teacherItem;
                }
            } else {
                // Add new teacher
                teachersData.push(teacherItem);
            }

            localStorage.setItem('teachersData', JSON.stringify(teachersData));
            this.hideModal('teacherModal');
            this.showNotification(this.getTranslation('savedSuccessfully'));

            // Reload teachers page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'teachers') {
                this.loadTeachersContent();
            }
        };

        if (photoFile) {
            this.readImageFile(photoFile).then(photoUrl => {
                saveTeacherItem(photoUrl);
            });
        } else {
            // Keep existing photo if editing
            if (this.currentEditingId) {
                const existingTeacher = teachersData.find(item => item.id === this.currentEditingId);
                saveTeacherItem(existingTeacher?.photo || '');
            } else {
                saveTeacherItem('');
            }
        }
    }

    editTeacher(id) {
        this.openTeacherModal(id);
    }

    deleteTeacher(id = null) {
        if (!this.isAdmin()) return;

        const teacherId = id || this.currentEditingId;
        if (!teacherId) return;

        if (confirm(this.currentLanguage === 'kk' ? 'Бұл мұғалімді жоюға сенімдісіз бе?' : 
                  this.currentLanguage === 'ru' ? 'Вы уверены, что хотите удалить этого учителя?' : 
                  'Are you sure you want to delete this teacher?')) {
            const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
            const filteredData = teachersData.filter(item => item.id !== teacherId);
            localStorage.setItem('teachersData', JSON.stringify(filteredData));
            
            this.hideModal('teacherModal');
            this.showNotification(this.getTranslation('deletedSuccessfully'));

            // Reload teachers page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'teachers') {
                this.loadTeachersContent();
            }
        }
    }

    // Profile management
    openProfileModal() {
        const user = window.authSystem?.getCurrentUser();
        if (!user) return;

        document.getElementById('profileEmail').value = user.email || '';
        document.getElementById('profilePhone').value = user.phone || '';
        
        this.showModal('profileModal');
    }

    saveProfile() {
        const email = document.getElementById('profileEmail').value;
        const phone = document.getElementById('profilePhone').value;
        const newPassword = document.getElementById('profileNewPassword').value;
        const confirmPassword = document.getElementById('profileConfirmPassword').value;

        if (newPassword && newPassword !== confirmPassword) {
            this.showNotification(this.currentLanguage === 'kk' ? 'Құпия сөздер сәйкес емес' : 
                                this.currentLanguage === 'ru' ? 'Пароли не совпадают' : 
                                'Passwords do not match', 'error');
            return;
        }

        const user = window.authSystem?.getCurrentUser();
        if (user) {
            // Update user data
            user.email = email;
            user.phone = phone;

            // In a real app, you would update the password via API
            if (newPassword) {
                // Password would be hashed and sent to backend
                console.log('Password update requested');
            }

            // Update localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            this.hideModal('profileModal');
            this.showNotification(this.currentLanguage === 'kk' ? 'Профиль сәтті жаңартылды' : 
                                this.currentLanguage === 'ru' ? 'Профиль успешно обновлен' : 
                                'Profile updated successfully');
            
            // Update UI
            this.updateUserInterface();
            
            // Reload profile page
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'profile') {
                this.loadPage('profile');
            }
        }
    }

    // Utility methods
    readImageFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve(e.target.result);
            };
            reader.readAsDataURL(file);
        });
    }

    previewImage(event, previewId) {
        const file = event.target.files[0];
        if (file) {
            this.readImageFile(file).then(imageUrl => {
                const preview = document.getElementById(previewId);
                preview.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
                preview.style.display = 'block';
            });
        }
    }

    getAuthorName(authorId) {
        // In a real app, this would fetch from users data
        return authorId === 1 ? 'Admin' : 'Teacher';
    }

    getInitials(name) {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    isAdmin() {
        return window.authSystem?.isAdmin() || false;
    }

    isStudent() {
        return window.authSystem?.isStudent() || false;
    }

    updateUserInterface() {
        const user = window.authSystem?.getCurrentUser();
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const userAvatarMobile = document.getElementById('userAvatarMobile');
        
        if (userName && user) userName.textContent = user.fullName;
        if (userAvatar && user) userAvatar.textContent = this.getInitials(user.fullName);
        if (userAvatarMobile && user) userAvatarMobile.textContent = this.getInitials(user.fullName);
        
        // Set user role for admin features
        document.body.setAttribute('data-user-role', user?.role?.toLowerCase() || 'student');
        
        // Show/hide admin elements
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(element => {
            element.style.display = this.isAdmin() ? '' : 'none';
        });
    }

    showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-message">${message}</div>
            <button class="notification-close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Add show class with delay
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);

        // Close on click
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            });
        }
    }
}

// Initialize main application
function initializeMainApp() {
    window.schoolApp = new SchoolApp();
    window.schoolApp.init();
}

// Quick links event delegation
document.addEventListener('click', function(e) {
    if (e.target.closest('.quick-link-card')) {
        e.preventDefault();
        const card = e.target.closest('.quick-link-card');
        const page = card.getAttribute('data-page');
        if (page && window.schoolApp) {
            window.schoolApp.loadPage(page);
            window.schoolApp.updateActiveMenuItem(page);
        }
    }
});