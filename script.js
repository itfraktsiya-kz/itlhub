/// Translation System
class TranslationSystem {
    constructor() {
        this.translations = {
            kk: {
                // App
                appName: "IT Лицей",
                
                // Auth
                loginToSystem: "Жүйеге кіру",
                login: "Логин",
                password: "Құпия сөз",
                loginBtn: "Кіру",
                noAccountRegister: "Аккаунтыңыз жоқ па? Тіркелу",
                fullName: "Толық аты",
                passwordMin: "Құпия сөз * (кемінде 8 таңба)",
                confirmPassword: "Құпия сөзді растау",
                selectGrade: "Сыныпты таңдаңыз",
                grade: "Сынып",
                selectLetter: "Әріпті таңдаңыз",
                classLetter: "Сынып әрпі",
                emailOptional: "Электрондық пошта (міндетті емес)",
                phoneOptional: "Телефон (міндетті емес)",
                registerBtn: "Тіркелу",
                haveAccountLogin: "Аккаунтыңыз бар ма? Кіру",
                
                // Navigation
                home: "Басты бет",
                news: "Жаңалықтар",
                events: "Іс-шаралар",
                teachers: "Мұғалімдер",
                profile: "Профиль",
                adminPanel: "Әкімшілік панелі",
                adminUser: "Әкімшілік пайдаланушы",
                logout: "Шығу",
                
                // Common actions
                save: "Сақтау",
                cancel: "Болдырмау",
                delete: "Жою",
                edit: "Өңдеу",
                readMore: "Толығырақ",
                viewAll: "Барлығын көру",
                
                // Modal titles
                addNews: "Жаңалық қосу",
                editNews: "Жаңалықты өңдеу",
                addEvent: "Іс-шара қосу",
                editEvent: "Іс-шараны өңдеу",
                addTeacher: "Мұғалім қосу",
                editTeacher: "Мұғалімді өңдеу",
                editProfile: "Профильді өңдеу",
                
                // Form labels
                title: "Тақырып",
                description: "Сипаттама",
                content: "Мазмұны",
                image: "Сурет",
                links: "Сілтемелер",
                dateTime: "Күн мен уақыт",
                published: "Жарияланған",
                subjects: "Пәндер",
                phone: "Телефон",
                bio: "Сипаттама",
                photo: "Фото",
                email: "Электрондық пошта",
                newPassword: "Жаңа құпия сөз",
                confirmPassword: "Құпия сөзді растау",
                
                // Home page
                welcome: "IT Лицейге қош келдіңіз",
                aboutSchool: "Мектеп туралы",
                address: "Мекенжай",
                workingHours: "Жұмыс уақыты",
                latestNews: "Соңғы жаңалықтар",
                upcomingEvents: "Жуықтаған іс-шаралар",
                quickLinks: "Жылдам сілтемелер",
                noNews: "Әлі жаңалықтар жоқ",
                noEvents: "Әлі іс-шаралар жоқ",
                addFirstNews: "Алғашқы жаңалықты қосыңыз",
                addFirstEvent: "Алғашқы іс-шараны қосыңыз",
                
                // Events page
                all: "Барлығы",
                upcoming: "Алдағы",
                past: "Өткен",
                
                // Teachers page
                searchPlaceholder: "Мұғалімдерді іздеу...",
                filterBySubject: "Пән бойынша сүзгілеу",
                allSubjects: "Барлық пәндер",
                noTeachers: "Мұғалімдер табылмады",
                contactOnWhatsApp: "WhatsApp-та хабарласу",
                
                // Teacher descriptions
                teacher1Name: "Құлнар Кәрімова",
                teacher1Subjects: "Математика, Физика",
                teacher1Bio: "15 жылдық оқыту тәжірибесі бар тәжірибелі математика мұғалімі. Алға баспақ математика мен физика салаларына маманданған.",
                
                teacher2Name: "Марат Қасымов",
                teacher2Subjects: "Ағылшын тілі, Әдебиет",
                teacher2Bio: "Халықаралық оқыту тәжірибесі бар сертификатталған ағылшын тілі мұғалімі. Коммуникативті тілдік оқытуға бағытталған.",
                
                teacher3Name: "Айгүл Жанғозина",
                teacher3Subjects: "Информатика, Бағдарламалау",
                teacher3Bio: "IT маманы және компьютерлік ғылымдар мұғалімі. Веб-әзірлеу және бағдарламалау тілдері бойынша сарапшы.",
                
                teacher4Name: "Сара Жүсіпова",
                teacher4Subjects: "Тарих, Әлеуметтану",
                teacher4Bio: "10 жылдан астам оқыту тәжірибесі бар тарих мұғалімі. Әлеуметтану пәнінен де сабақ береді.",
                
                teacher5Name: "Дәулет Нұрғалиев",
                teacher5Subjects: "Химия, Биология",
                teacher5Bio: "Тәжірибелі химия және биология мұғалімі. Зертханалық жұмыстар мен тәжірибелерді ұйымдастыруда шебер.",
                
                // Profile page
                role: "Рөл",
                class: "Сынып",
                changePassword: "Құпия сөзді өзгерту",
                
                // Admin panel
                manageNews: "Жаңалықтарды басқару",
                manageEvents: "Іс-шараларды басқару",
                manageTeachers: "Мұғалімдерді басқару",
                statistics: "Статистика",
                totalNews: "Жаңалықтар саны",
                totalEvents: "Іс-шаралар саны",
                totalTeachers: "Мұғалімдер саны",
                recentActivity: "Соңғы әрекеттер",
                
                // Notifications
                languageChanged: "Тіл қазақша ауыстырылды",
                savedSuccessfully: "Сәтті сақталды",
                deletedSuccessfully: "Сәтті жойылды",
                loginSuccessful: "Кіру сәтті өтті",
                logoutSuccessful: "Шығу сәтті өтті",
                fillRequiredFields: "Барлық міндетті өрістерді толтырыңыз",
                passwordsNotMatch: "Құпия сөздер сәйкес емес",
                profileUpdated: "Профиль сәтті жаңартылды",
                confirmDeleteNews: "Бұл жаңалықты жоюға сенімдісіз бе?",
                confirmDeleteEvent: "Бұл іс-шараны жоюға сенімдісіз бе?",
                confirmDeleteTeacher: "Бұл мұғалімді жоюға сенімдісіз бе?",
                accessDenied: "Кіруге рұқсат жоқ",
                noPermission: "Бұл бетке кіруге рұқсатыңыз жоқ"
            },
            ru: {
                // App
                appName: "IT Лицей",
                
                // Auth
                loginToSystem: "Вход в систему",
                login: "Логин",
                password: "Пароль",
                loginBtn: "Войти",
                noAccountRegister: "Нет аккаунта? Зарегистрироваться",
                fullName: "Полное имя",
                passwordMin: "Пароль * (минимум 8 символов)",
                confirmPassword: "Подтвердить пароль",
                selectGrade: "Выберите класс",
                grade: "Класс",
                selectLetter: "Выберите букву",
                classLetter: "Буква класса",
                emailOptional: "Электронная почта (необязательно)",
                phoneOptional: "Телефон (необязательно)",
                registerBtn: "Зарегистрироваться",
                haveAccountLogin: "Уже есть аккаунт? Войти",
                
                // Navigation
                home: "Главная",
                news: "Новости",
                events: "Мероприятия",
                teachers: "Учителя",
                profile: "Профиль",
                adminPanel: "Админ панель",
                adminUser: "Администратор",
                logout: "Выйти",
                
                // Common actions
                save: "Сохранить",
                cancel: "Отмена",
                delete: "Удалить",
                edit: "Редактировать",
                readMore: "Подробнее",
                viewAll: "Смотреть все",
                
                // Modal titles
                addNews: "Добавить новость",
                editNews: "Редактировать новость",
                addEvent: "Добавить мероприятие",
                editEvent: "Редактировать мероприятие",
                addTeacher: "Добавить учителя",
                editTeacher: "Редактировать учителя",
                editProfile: "Редактировать профиль",
                
                // Form labels
                title: "Заголовок",
                description: "Описание",
                content: "Содержание",
                image: "Изображение",
                links: "Ссылки",
                dateTime: "Дата и время",
                published: "Опубликовано",
                subjects: "Предметы",
                phone: "Телефон",
                bio: "Биография",
                photo: "Фото",
                email: "Электронная почта",
                newPassword: "Новый пароль",
                confirmPassword: "Подтвердить пароль",
                
                // Home page
                welcome: "Добро пожаловать в IT Лицей",
                aboutSchool: "О школе",
                address: "Адрес",
                workingHours: "Часы работы",
                latestNews: "Последние новости",
                upcomingEvents: "Ближайшие мероприятия",
                quickLinks: "Быстрые ссылки",
                noNews: "Пока нет новостей",
                noEvents: "Пока нет мероприятий",
                addFirstNews: "Добавьте первую новость",
                addFirstEvent: "Добавьте первое мероприятие",
                
                // Events page
                all: "Все",
                upcoming: "Предстоящие",
                past: "Прошедшие",
                
                // Teachers page
                searchPlaceholder: "Поиск учителей...",
                filterBySubject: "Фильтр по предметам",
                allSubjects: "Все предметы",
                noTeachers: "Учителя не найдены",
                contactOnWhatsApp: "Написать в WhatsApp",
                
                // Teacher descriptions
                teacher1Name: "Гульнар Каримова",
                teacher1Subjects: "Математика, Физика",
                teacher1Bio: "Опытный учитель математики с 15-летним стажем преподавания. Специализируется на высшей математике и физике.",
                
                teacher2Name: "Марат Касымов",
                teacher2Subjects: "Английский язык, Литература",
                teacher2Bio: "Сертифицированный учитель английского языка с международным опытом преподавания. Сосредоточен на коммуникативном обучении языку.",
                
                teacher3Name: "Айгуль Жангозина",
                teacher3Subjects: "Информатика, Программирование",
                teacher3Bio: "IT-специалист и учитель информатики. Эксперт в веб-разработке и языках программирования.",
                
                teacher4Name: "Сара Юсупова",
                teacher4Subjects: "История, Социология",
                teacher4Bio: "Учитель истории с более чем 10-летним опытом преподавания. Также ведет уроки по социологии.",
                
                teacher5Name: "Даулет Нургалиев",
                teacher5Subjects: "Химия, Биология",
                teacher5Bio: "Опытный учитель химии и биологии. Мастер в организации лабораторных работ и экспериментов.",
                
                // Profile page
                role: "Роль",
                class: "Класс",
                changePassword: "Изменить пароль",
                
                // Admin panel
                manageNews: "Управление новостями",
                manageEvents: "Управление мероприятиями",
                manageTeachers: "Управление учителями",
                statistics: "Статистика",
                totalNews: "Количество новостей",
                totalEvents: "Количество мероприятий",
                totalTeachers: "Количество учителей",
                recentActivity: "Недавняя активность",
                
                // Notifications
                languageChanged: "Язык изменен на русский",
                savedSuccessfully: "Успешно сохранено",
                deletedSuccessfully: "Успешно удалено",
                loginSuccessful: "Вход выполнен успешно",
                logoutSuccessful: "Выход выполнен успешно",
                fillRequiredFields: "Заполните все обязательные поля",
                passwordsNotMatch: "Пароли не совпадают",
                profileUpdated: "Профиль успешно обновлен",
                confirmDeleteNews: "Вы уверены, что хотите удалить эту новость?",
                confirmDeleteEvent: "Вы уверены, что хотите удалить это мероприятие?",
                confirmDeleteTeacher: "Вы уверены, что хотите удалить этого учителя?",
                accessDenied: "Доступ запрещен",
                noPermission: "У вас нет разрешения на доступ к этой странице"
            },
            en: {
                // App
                appName: "IT Lyceum",
                
                // Auth
                loginToSystem: "Login to System",
                login: "Login",
                password: "Password",
                loginBtn: "Login",
                noAccountRegister: "Don't have an account? Register",
                fullName: "Full Name",
                passwordMin: "Password * (min 8 characters)",
                confirmPassword: "Confirm Password",
                selectGrade: "Select Grade",
                grade: "Grade",
                selectLetter: "Select Letter",
                classLetter: "Class Letter",
                emailOptional: "Email (optional)",
                phoneOptional: "Phone (optional)",
                registerBtn: "Register",
                haveAccountLogin: "Already have an account? Login",
                
                // Navigation
                home: "Home",
                news: "News",
                events: "Events",
                teachers: "Teachers",
                profile: "Profile",
                adminPanel: "Admin Panel",
                adminUser: "Admin User",
                logout: "Logout",
                
                // Common actions
                save: "Save",
                cancel: "Cancel",
                delete: "Delete",
                edit: "Edit",
                readMore: "Read More",
                viewAll: "View All",
                
                // Modal titles
                addNews: "Add News",
                editNews: "Edit News",
                addEvent: "Add Event",
                editEvent: "Edit Event",
                addTeacher: "Add Teacher",
                editTeacher: "Edit Teacher",
                editProfile: "Edit Profile",
                
                // Form labels
                title: "Title",
                description: "Description",
                content: "Content",
                image: "Image",
                links: "Links",
                dateTime: "Date and Time",
                published: "Published",
                subjects: "Subjects",
                phone: "Phone",
                bio: "Bio",
                photo: "Photo",
                email: "Email",
                newPassword: "New Password",
                confirmPassword: "Confirm Password",
                
                // Home page
                welcome: "Welcome to IT Lyceum",
                aboutSchool: "About School",
                address: "Address",
                workingHours: "Working Hours",
                latestNews: "Latest News",
                upcomingEvents: "Upcoming Events",
                quickLinks: "Quick Links",
                noNews: "No news yet",
                noEvents: "No events yet",
                addFirstNews: "Add first news",
                addFirstEvent: "Add first event",
                
                // Events page
                all: "All",
                upcoming: "Upcoming",
                past: "Past",
                
                // Teachers page
                searchPlaceholder: "Search teachers...",
                filterBySubject: "Filter by subject",
                allSubjects: "All subjects",
                noTeachers: "No teachers found",
                contactOnWhatsApp: "Contact on WhatsApp",
                
                // Teacher descriptions
                teacher1Name: "Gulnar Karimova",
                teacher1Subjects: "Mathematics, Physics",
                teacher1Bio: "Experienced mathematics teacher with 15 years of teaching experience. Specialized in advanced mathematics and physics.",
                
                teacher2Name: "Marat Kasymov",
                teacher2Subjects: "English Language, Literature",
                teacher2Bio: "Certified English language teacher with international teaching experience. Focused on communicative language teaching.",
                
                teacher3Name: "Aigul Zhangozina",
                teacher3Subjects: "Computer Science, Programming",
                teacher3Bio: "IT specialist and computer science teacher. Expert in web development and programming languages.",
                
                teacher4Name: "Sara Yusupova",
                teacher4Subjects: "History, Sociology",
                teacher4Bio: "History teacher with over 10 years of teaching experience. Also teaches sociology.",
                
                teacher5Name: "Daulet Nurgaliev",
                teacher5Subjects: "Chemistry, Biology",
                teacher5Bio: "Experienced chemistry and biology teacher. Skilled in organizing laboratory work and experiments.",
                
                // Profile page
                role: "Role",
                class: "Class",
                changePassword: "Change Password",
                
                // Admin panel
                manageNews: "Manage News",
                manageEvents: "Manage Events",
                manageTeachers: "Manage Teachers",
                statistics: "Statistics",
                totalNews: "Total News",
                totalEvents: "Total Events",
                totalTeachers: "Total Teachers",
                recentActivity: "Recent Activity",
                
                // Notifications
                languageChanged: "Language changed to English",
                savedSuccessfully: "Saved successfully",
                deletedSuccessfully: "Deleted successfully",
                loginSuccessful: "Login successful",
                logoutSuccessful: "Logout successful",
                fillRequiredFields: "Please fill all required fields",
                passwordsNotMatch: "Passwords do not match",
                profileUpdated: "Profile updated successfully",
                confirmDeleteNews: "Are you sure you want to delete this news?",
                confirmDeleteEvent: "Are you sure you want to delete this event?",
                confirmDeleteTeacher: "Are you sure you want to delete this teacher?",
                accessDenied: "Access Denied",
                noPermission: "You don't have permission to access this page"
            }
        };
        
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'kk';
    }
    
    translate(key) {
        return this.translations[this.currentLanguage]?.[key] || 
               this.translations['en']?.[key] || 
               key;
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.updateAllTranslations();
            return true;
        }
        return false;
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    updateAllTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update language selector text
        const langTexts = document.querySelectorAll('.lang-text');
        langTexts.forEach(element => {
            element.textContent = this.currentLanguage.toUpperCase();
        });
    }
    
    // Get translation for dynamic content
    t(key) {
        return this.translate(key);
    }
}

// Initialize translation system
window.translationSystem = new TranslationSystem();

// Main Application
class SchoolApp {
    constructor() {
        this.currentUser = null;
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        this.currentEditingId = null;
        
        this.initializeData();
    }

    initializeData() {
        // Initialize default data if not exists
        if (!localStorage.getItem('newsData')) {
            const defaultNews = [
                {
                    id: 1,
                    title: {
                        kk: 'Жаңа оқу жылына қош келдіңіз',
                        ru: 'Добро пожаловать в новый учебный год',
                        en: 'Welcome to New Academic Year'
                    },
                    description: {
                        kk: 'Біз жаңа оқу жылын барлық оқушылар үшін үлкен энергия мен жаңа мүмкіндіктермен бастауға қуаныштымыз.',
                        ru: 'Мы рады начать новый учебный год с большой энергией и новыми возможностями для всех учеников.',
                        en: 'We are excited to start the new academic year with great energy and new opportunities for all students.'
                    },
                    content: '',
                    image: '',
                    links: [],
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
                    title: {
                        kk: 'Ғылым көрмесі 2024',
                        ru: 'Научная ярмарка 2024',
                        en: 'Science Fair 2024'
                    },
                    description: {
                        kk: 'Оқушылардың жобалары мен инновацияларын көрсететін жылдық мектеп ғылым көрмесі.',
                        ru: 'Ежегодная школьная научная ярмарка, демонстрирующая проекты и инновации учащихся.',
                        en: 'Annual school science fair showcasing student projects and innovations.'
                    },
                    image: '',
                    links: [],
                    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
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
                    fullName: {
                        kk: 'Құлнар Кәрімова',
                        ru: 'Гульнар Каримова',
                        en: 'Gulnar Karimova'
                    },
                    subjects: {
                        kk: ['Математика', 'Физика'],
                        ru: ['Математика', 'Физика'],
                        en: ['Mathematics', 'Physics']
                    },
                    phone: '+7 701 123 4567',
                    photo: '',
                    bio: {
                        kk: '15 жылдық оқыту тәжірибесі бар тәжірибелі математика мұғалімі. Алға баспақ математика мен физика салаларына маманданған.',
                        ru: 'Опытный учитель математики с 15-летним стажем преподавания. Специализируется на высшей математике и физике.',
                        en: 'Experienced mathematics teacher with 15 years of teaching experience. Specialized in advanced mathematics and physics.'
                    },
                    createdAt: new Date().toISOString()
                },
                {
                    id: 2,
                    fullName: {
                        kk: 'Марат Қасымов',
                        ru: 'Марат Касымов',
                        en: 'Marat Kasymov'
                    },
                    subjects: {
                        kk: ['Ағылшын тілі', 'Әдебиет'],
                        ru: ['Английский язык', 'Литература'],
                        en: ['English Language', 'Literature']
                    },
                    phone: '+7 701 234 5678',
                    photo: '',
                    bio: {
                        kk: 'Халықаралық оқыту тәжірибесі бар сертификатталған ағылшын тілі мұғалімі. Коммуникативті тілдік оқытуға бағытталған.',
                        ru: 'Сертифицированный учитель английского языка с международным опытом преподавания. Сосредоточен на коммуникативном обучении языку.',
                        en: 'Certified English language teacher with international teaching experience. Focused on communicative language teaching.'
                    },
                    createdAt: new Date().toISOString()
                },
                {
                    id: 3,
                    fullName: {
                        kk: 'Айгүл Жанғозина',
                        ru: 'Айгуль Жангозина',
                        en: 'Aigul Zhangozina'
                    },
                    subjects: {
                        kk: ['Информатика', 'Бағдарламалау'],
                        ru: ['Информатика', 'Программирование'],
                        en: ['Computer Science', 'Programming']
                    },
                    phone: '+7 701 345 6789',
                    photo: '',
                    bio: {
                        kk: 'IT маманы және компьютерлік ғылымдар мұғалімі. Веб-әзірлеу және бағдарламалау тілдері бойынша сарапшы.',
                        ru: 'IT-специалист и учитель информатики. Эксперт в веб-разработке и языках программирования.',
                        en: 'IT specialist and computer science teacher. Expert in web development and programming languages.'
                    },
                    createdAt: new Date().toISOString()
                },
                {
                    id: 4,
                    fullName: {
                        kk: 'Сара Жүсіпова',
                        ru: 'Сара Юсупова',
                        en: 'Sara Yusupova'
                    },
                    subjects: {
                        kk: ['Тарих', 'Әлеуметтану'],
                        ru: ['История', 'Социология'],
                        en: ['History', 'Sociology']
                    },
                    phone: '+7 701 456 7890',
                    photo: '',
                    bio: {
                        kk: '10 жылдан астам оқыту тәжірибесі бар тарих мұғалімі. Әлеуметтану пәнінен де сабақ береді.',
                        ru: 'Учитель истории с более чем 10-летним опытом преподавания. Также ведет уроки по социологии.',
                        en: 'History teacher with over 10 years of teaching experience. Also teaches sociology.'
                    },
                    createdAt: new Date().toISOString()
                },
                {
                    id: 5,
                    fullName: {
                        kk: 'Дәулет Нұрғалиев',
                        ru: 'Даулет Нургалиев',
                        en: 'Daulet Nurgaliev'
                    },
                    subjects: {
                        kk: ['Химия', 'Биология'],
                        ru: ['Химия', 'Биология'],
                        en: ['Chemistry', 'Biology']
                    },
                    phone: '+7 701 567 8901',
                    photo: '',
                    bio: {
                        kk: 'Тәжірибелі химия және биология мұғалімі. Зертханалық жұмыстар мен тәжірибелерді ұйымдастыруда шебер.',
                        ru: 'Опытный учитель химии и биологии. Мастер в организации лабораторных работ и экспериментов.',
                        en: 'Experienced chemistry and biology teacher. Skilled in organizing laboratory work and experiments.'
                    },
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem('teachersData', JSON.stringify(defaultTeachers));
        }
    }

    init() {
        this.checkAuthState();
        this.setupTheme();
        this.setupNavigation();
        this.setupModals();
        this.setupEventListeners();
        
        console.log('🏫 School app initialized');
    }

    checkAuthState() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showMainApp();
        } else {
            this.showAuthModal();
        }
    }

    showAuthModal() {
        document.getElementById('authModal').style.display = 'flex';
        document.getElementById('appContainer').style.display = 'none';
        document.getElementById('mobileHeader').style.display = 'none';
    }

    showMainApp() {
        document.getElementById('authModal').style.display = 'none';
        document.getElementById('appContainer').style.display = 'flex';
        document.getElementById('mobileHeader').style.display = 'flex';
        
        // Hide preloader
        setTimeout(() => {
            document.getElementById('preloader').classList.add('hidden');
        }, 500);
        
        this.updateUserInterface();
        this.loadPage('home');
    }

    setupTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcons();
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
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        
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
                    this.logout();
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
        this.setupLanguageSwitcher();

        // Setup modal handlers
        this.setupNewsModal();
        this.setupEventModal();
        this.setupTeacherModal();
        this.setupProfileModal();
    }

    setupLanguageSwitcher() {
        // Desktop language switcher
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

        // Mobile language switcher
        const mobileLangToggle = document.getElementById('mobileLangToggle');
        const langDropdownMobile = document.getElementById('langDropdownMobile');
        
        if (mobileLangToggle && langDropdownMobile) {
            mobileLangToggle.addEventListener('click', () => {
                langDropdownMobile.classList.toggle('show');
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

    setupNewsModal() {
        const modal = document.getElementById('newsModal');
        const closeBtn = document.getElementById('closeNewsModal');
        const cancelBtn = document.getElementById('cancelNews');
        const saveBtn = document.getElementById('saveNews');
        const deleteBtn = document.getElementById('deleteNews');

        const closeModal = () => this.hideModal('newsModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveNews());
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteNews());
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

        const closeModal = () => this.hideModal('eventModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveEvent());
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteEvent());
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

        const closeModal = () => this.hideModal('teacherModal');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveTeacher());
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteTeacher());
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
        
        // Делегирование событий для динамически созданных кнопок
        document.addEventListener('click', (e) => {
            // Quick links
            if (e.target.closest('.quick-link-card')) {
                e.preventDefault();
                const card = e.target.closest('.quick-link-card');
                const page = card.getAttribute('data-page');
                if (page) {
                    this.loadPage(page);
                    this.updateActiveMenuItem(page);
                }
            }
            
            // Add News button
            if (e.target.closest('#addNewsBtn') || (e.target.id === 'addNewsBtn')) {
                this.openNewsModal();
            }
            
            // Add Event button
            if (e.target.closest('#addEventBtn') || (e.target.id === 'addEventBtn')) {
                this.openEventModal();
            }
            
            // Manage Teachers button
            if (e.target.closest('#manageTeachersBtn') || (e.target.id === 'manageTeachersBtn')) {
                this.openTeacherModal();
            }
            
            // Edit buttons
            if (e.target.closest('.btn-warning') && e.target.closest('.btn-warning').innerHTML.includes('fa-edit')) {
                const button = e.target.closest('.btn-warning');
                const parent = button.closest('[data-id]');
                if (parent) {
                    const id = parseInt(parent.getAttribute('data-id'));
                    const type = parent.classList.contains('news-item') ? 'news' : 
                                parent.classList.contains('event-item') ? 'event' : 
                                parent.classList.contains('teacher-item') ? 'teacher' : null;
                    
                    if (type === 'news') {
                        this.editNews(id);
                    } else if (type === 'event') {
                        this.editEvent(id);
                    } else if (type === 'teacher') {
                        this.editTeacher(id);
                    }
                }
            }
            
            // Delete buttons
            if (e.target.closest('.btn-danger') && e.target.closest('.btn-danger').innerHTML.includes('fa-trash')) {
                const button = e.target.closest('.btn-danger');
                const parent = button.closest('[data-id]');
                if (parent) {
                    const id = parseInt(parent.getAttribute('data-id'));
                    const type = parent.classList.contains('news-item') ? 'news' : 
                                parent.classList.contains('event-item') ? 'event' : 
                                parent.classList.contains('teacher-item') ? 'teacher' : null;
                    
                    if (type === 'news') {
                        this.deleteNews(id);
                    } else if (type === 'event') {
                        this.deleteEvent(id);
                    } else if (type === 'teacher') {
                        this.deleteTeacher(id);
                    }
                }
            }
            
            // Filter buttons on events page
            if (e.target.closest('.filter-btn')) {
                const button = e.target.closest('.filter-btn');
                const filter = button.getAttribute('data-filter');
                if (filter && document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'events') {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    button.classList.add('active');
                    this.loadEventsContent(filter);
                }
            }
            
            // Edit Profile button
            if (e.target.closest('.btn-primary') && e.target.closest('.btn-primary').textContent.includes(translationSystem.t('editProfile'))) {
                this.openProfileModal();
            }
        });
        
        // Search input event
        document.addEventListener('input', (e) => {
            if (e.target.id === 'teacherSearch') {
                this.loadTeachersContent();
            }
        });
        
        // Subject filter change event
        document.addEventListener('change', (e) => {
            if (e.target.id === 'subjectFilter') {
                this.loadTeachersContent();
            }
        });
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

    // Theme functionality
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcons();
        
        this.showNotification(
            this.currentTheme === 'dark' ? 'Темная тема включена' : 'Светлая тема включена',
            'info'
        );
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
        const success = translationSystem.setLanguage(lang);
        if (success) {
            this.currentLanguage = lang;
            
            // Update page content with new language
            const currentPage = document.querySelector('.menu-item.active')?.getAttribute('data-page') || 'home';
            this.loadPage(currentPage);
            
            this.showNotification(translationSystem.t('languageChanged'));
        }
    }

    // Get localized text
    getLocalizedText(data, lang = null) {
        const currentLang = lang || this.currentLanguage;
        
        if (!data) return '';
        
        if (typeof data === 'object') {
            // If it's a translation object
            if (data[currentLang]) {
                return data[currentLang];
            }
            // Try to get any language
            for (const key in data) {
                if (data[key]) return data[key];
            }
            return '';
        }
        
        // If it's a string, return as is
        return data;
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
            home: translationSystem.t('home'),
            news: translationSystem.t('news'),
            events: translationSystem.t('events'),
            teachers: translationSystem.t('teachers'),
            profile: translationSystem.t('profile'),
            admin: translationSystem.t('adminPanel')
        };
        
        if (breadcrumb && pageNames[pageId]) {
            breadcrumb.textContent = pageNames[pageId];
        }
    }

    initializePage(pageId) {
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
        }
    }

    // Page templates
    getHomePage() {
        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]')
            .filter(item => item.published)
            .slice(0, 3);

        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]')
            .filter(item => item.published && new Date(item.date) > new Date())
            .slice(0, 3);

        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]')
            .slice(0, 3);

        return `
            <div class="page-content">
                <h1 class="page-title">${translationSystem.t('welcome')}</h1>
                <p class="page-subtitle">${this.getLocalizedText({
                    kk: 'IT-лицей - бұл заманауи білім беру орталығы',
                    ru: 'IT-лицей - это современный образовательный центр',
                    en: 'IT Lyceum is a modern educational center'
                })}</p>
                
                <div class="card">
                    <h2 class="card-title">${translationSystem.t('aboutSchool')}</h2>
                    <p>${this.getLocalizedText({
                        kk: 'Біздің IT-лицей математика, информатика және бағдарламалауды тереңдетіп оқытатын болашақ IT мамандарын дайындауға маманданған.',
                        ru: 'Наш IT-лицей специализируется на подготовке будущих IT-специалистов с углубленным изучением математики, информатики и программирования.',
                        en: 'Our IT Lyceum specializes in training future IT professionals with in-depth study of mathematics, computer science and programming.'
                    })}</p>
                    <div style="margin-top: 1rem;">
                        <p><strong>${translationSystem.t('address')}: ${this.getLocalizedText({
                            kk: 'Қоқшетау қаласы, Сарыарқа көшесі 7А',
                            ru: 'г. Кокшетау, ул. Сарыарка 7А',
                            en: 'Kokshetau city, Saryarka street 7A'
                        })}</strong></p>
                        <p><strong>${translationSystem.t('workingHours')}: 8:00 - 18:00</strong></p>
                    </div>
                </div>

                <div class="quick-links">
                    <a href="#" class="quick-link-card" data-page="news">
                        <div class="quick-link-icon">
                            <i class="fas fa-newspaper"></i>
                        </div>
                        <h3>${translationSystem.t('news')}</h3>
                    </a>
                    <a href="#" class="quick-link-card" data-page="events">
                        <div class="quick-link-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <h3>${translationSystem.t('events')}</h3>
                    </a>
                    <a href="#" class="quick-link-card" data-page="teachers">
                        <div class="quick-link-icon">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </div>
                        <h3>${translationSystem.t('teachers')}</h3>
                    </a>
                    <a href="#" class="quick-link-card" data-page="profile">
                        <div class="quick-link-icon">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <h3>${translationSystem.t('profile')}</h3>
                    </a>
                </div>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h2 class="card-title">${translationSystem.t('latestNews')}</h2>
                        <button class="btn btn-sm btn-primary" onclick="window.schoolApp.loadPage('news'); window.schoolApp.updateActiveMenuItem('news');">
                            ${translationSystem.t('viewAll')}
                        </button>
                    </div>
                    ${newsData.length === 0 ? `
                        <div class="empty-state">
                            <i class="fas fa-newspaper empty-state-icon"></i>
                            <p>${translationSystem.t('noNews')}</p>
                        </div>
                    ` : `
                        <div class="news-grid">
                            ${newsData.map(news => `
                                <div class="news-item" data-id="${news.id}">
                                    <div class="image-placeholder">
                                        <i class="fas fa-newspaper"></i>
                                    </div>
                                    <div class="news-date">${new Date(news.date).toLocaleDateString()}</div>
                                    <h3 class="news-title">${this.getLocalizedText(news.title) || this.getLocalizedText({kk: 'Атауы жоқ', ru: 'Без названия', en: 'No title'})}</h3>
                                    <p class="news-excerpt">${this.getLocalizedText(news.description) || this.getLocalizedText({kk: 'Сипаттамасы жоқ', ru: 'Без описания', en: 'No description'})}</p>
                                    <div class="news-meta">
                                        <span>${translationSystem.t('readMore')}</span>
                                    </div>
                                    ${this.isAdmin() ? `
                                        <div class="admin-actions">
                                            <button class="btn btn-sm btn-warning" onclick="window.schoolApp.editNews(${news.id})">
                                                <i class="fas fa-edit"></i>
                                                ${translationSystem.t('edit')}
                                            </button>
                                            <button class="btn btn-sm btn-danger" onclick="window.schoolApp.deleteNews(${news.id})">
                                                <i class="fas fa-trash"></i>
                                                ${translationSystem.t('delete')}
                                            </button>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h2 class="card-title">${translationSystem.t('upcomingEvents')}</h2>
                        <button class="btn btn-sm btn-primary" onclick="window.schoolApp.loadPage('events'); window.schoolApp.updateActiveMenuItem('events');">
                            ${translationSystem.t('viewAll')}
                        </button>
                    </div>
                    ${eventsData.length === 0 ? `
                        <div class="empty-state">
                            <i class="fas fa-calendar empty-state-icon"></i>
                            <p>${translationSystem.t('noEvents')}</p>
                        </div>
                    ` : `
                        <div class="events-grid">
                            ${eventsData.map(event => `
                                <div class="event-item" data-id="${event.id}">
                                    <div class="image-placeholder">
                                        <i class="fas fa-calendar"></i>
                                    </div>
                                    <div class="event-date">${new Date(event.date).toLocaleDateString()}</div>
                                    <h3 class="event-title">${this.getLocalizedText(event.title) || this.getLocalizedText({kk: 'Атауы жоқ', ru: 'Без названия', en: 'No title'})}</h3>
                                    <p class="event-description">${this.getLocalizedText(event.description) || this.getLocalizedText({kk: 'Сипаттамасы жоқ', ru: 'Без описания', en: 'No description'})}</p>
                                    <div class="event-meta">
                                        <span>${translationSystem.t('readMore')}</span>
                                    </div>
                                    ${this.isAdmin() ? `
                                        <div class="admin-actions">
                                            <button class="btn btn-sm btn-warning" onclick="window.schoolApp.editEvent(${event.id})">
                                                <i class="fas fa-edit"></i>
                                                ${translationSystem.t('edit')}
                                            </button>
                                            <button class="btn btn-sm btn-danger" onclick="window.schoolApp.deleteEvent(${event.id})">
                                                <i class="fas fa-trash"></i>
                                                ${translationSystem.t('delete')}
                                            </button>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>

                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h2 class="card-title">${translationSystem.t('teachers')}</h2>
                        <button class="btn btn-sm btn-primary" onclick="window.schoolApp.loadPage('teachers'); window.schoolApp.updateActiveMenuItem('teachers');">
                            ${translationSystem.t('viewAll')}
                        </button>
                    </div>
                    ${teachersData.length === 0 ? `
                        <div class="empty-state">
                            <i class="fas fa-chalkboard-teacher empty-state-icon"></i>
                            <p>${translationSystem.t('noTeachers')}</p>
                        </div>
                    ` : `
                        <div class="teachers-grid">
                            ${teachersData.map(teacher => {
                                const whatsappUrl = teacher.phone ? `https://wa.me/${teacher.phone.replace(/[^\d+]/g, '')}` : '#';
                                const subjects = this.getLocalizedText(teacher.subjects) || [translationSystem.t('allSubjects')];
                                const subjectArray = Array.isArray(subjects) ? subjects : [subjects];
                                
                                return `
                                    <div class="teacher-item" data-id="${teacher.id}">
                                        <div class="image-placeholder">
                                            <i class="fas fa-user-tie"></i>
                                        </div>
                                        <h3 class="teacher-name">${this.getLocalizedText(teacher.fullName) || translationSystem.t('noTeachers')}</h3>
                                        <div class="teacher-subjects">
                                            ${subjectArray.map(subject => `
                                                <span class="subject-tag">${subject}</span>
                                            `).join('')}
                                        </div>
                                        <p class="teacher-bio">${this.getLocalizedText(teacher.bio) || translationSystem.t('noTeachers')}</p>
                                        <div class="teacher-actions">
                                            ${teacher.phone ? `
                                                <a href="${whatsappUrl}" target="_blank" class="whatsapp-btn">
                                                    <i class="fab fa-whatsapp"></i>
                                                    ${translationSystem.t('contactOnWhatsApp')}
                                                </a>
                                            ` : ''}
                                            ${this.isAdmin() ? `
                                                <button class="btn btn-sm btn-warning" onclick="window.schoolApp.editTeacher(${teacher.id})">
                                                    <i class="fas fa-edit"></i>
                                                    ${translationSystem.t('edit')}
                                                </button>
                                                <button class="btn btn-sm btn-danger" onclick="window.schoolApp.deleteTeacher(${teacher.id})">
                                                    <i class="fas fa-trash"></i>
                                                    ${translationSystem.t('delete')}
                                                </button>
                                            ` : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    getNewsPage() {
        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]')
            .filter(item => item.published)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        let newsHTML = '';
        
        if (newsData.length === 0) {
            newsHTML = `
                <div class="empty-state">
                    <i class="fas fa-newspaper empty-state-icon"></i>
                    <h3 class="empty-state-title">${translationSystem.t('noNews')}</h3>
                    <p class="empty-state-description">${translationSystem.t('addFirstNews')}</p>
                    ${this.isAdmin() ? `
                        <button class="btn btn-primary" id="addNewsBtn">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('addNews')}
                        </button>
                    ` : ''}
                </div>
            `;
        } else {
            newsHTML = '<div class="news-grid">';
            newsData.forEach(news => {
                const date = new Date(news.date).toLocaleDateString();
                newsHTML += `
                    <div class="news-item" data-id="${news.id}">
                        <div class="image-placeholder">
                            <i class="fas fa-newspaper"></i>
                        </div>
                        <div class="news-date">${date}</div>
                        <h3 class="news-title">${this.getLocalizedText(news.title) || this.getLocalizedText({kk: 'Атауы жоқ', ru: 'Без названия', en: 'No title'})}</h3>
                        <p class="news-excerpt">${this.getLocalizedText(news.description) || this.getLocalizedText({kk: 'Сипаттамасы жоқ', ru: 'Без описания', en: 'No description'})}</p>
                        <div class="news-meta">
                            <span>${this.getAuthorName(news.authorId)}</span>
                        </div>
                        ${this.isAdmin() ? `
                            <div class="admin-actions">
                                <button class="btn btn-sm btn-warning" onclick="window.schoolApp.editNews(${news.id})">
                                    <i class="fas fa-edit"></i>
                                    ${translationSystem.t('edit')}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="window.schoolApp.deleteNews(${news.id})">
                                    <i class="fas fa-trash"></i>
                                    ${translationSystem.t('delete')}
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
                <h1 class="page-title">${translationSystem.t('news')}</h1>
                ${this.isAdmin() ? `
                    <div style="margin-bottom: 2rem;">
                        <button class="btn btn-primary" id="addNewsBtn">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('addNews')}
                        </button>
                    </div>
                ` : ''}
                ${newsHTML}
            </div>
        `;
    }

    setupNewsPage() {
        // Кнопки уже работают через делегирование событий
    }

    getEventsPage() {
        return `
            <div class="page-content">
                <h1 class="page-title">${translationSystem.t('events')}</h1>
                ${this.isAdmin() ? `
                    <div style="margin-bottom: 2rem;">
                        <button class="btn btn-primary" id="addEventBtn">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('addEvent')}
                        </button>
                    </div>
                ` : ''}
                
                <div class="filters">
                    <div class="filter-group">
                        <button class="filter-btn active" data-filter="all">${translationSystem.t('all')}</button>
                        <button class="filter-btn" data-filter="upcoming">${translationSystem.t('upcoming')}</button>
                        <button class="filter-btn" data-filter="past">${translationSystem.t('past')}</button>
                    </div>
                </div>
                
                <div id="eventsContent">
                    <!-- Events will be loaded here -->
                </div>
            </div>
        `;
    }

    setupEventsPage() {
        this.loadEventsContent('all');
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

        let eventsHTML = '';
        
        if (filteredEvents.length === 0) {
            eventsHTML = `
                <div class="empty-state">
                    <i class="fas fa-calendar empty-state-icon"></i>
                    <h3 class="empty-state-title">${translationSystem.t('noEvents')}</h3>
                    <p class="empty-state-description">${translationSystem.t('addFirstEvent')}</p>
                </div>
            `;
        } else {
            eventsHTML = '<div class="events-grid">';
            filteredEvents.forEach(event => {
                const date = new Date(event.date).toLocaleDateString();
                eventsHTML += `
                    <div class="event-item" data-id="${event.id}">
                        <div class="image-placeholder">
                            <i class="fas fa-calendar"></i>
                        </div>
                        <div class="event-date">${date}</div>
                        <h3 class="event-title">${this.getLocalizedText(event.title) || this.getLocalizedText({kk: 'Атауы жоқ', ru: 'Без названия', en: 'No title'})}</h3>
                        <p class="event-description">${this.getLocalizedText(event.description) || this.getLocalizedText({kk: 'Сипаттамасы жоқ', ru: 'Без описания', en: 'No description'})}</p>
                        <div class="event-meta">
                            <span>${this.getAuthorName(event.authorId)}</span>
                        </div>
                        ${this.isAdmin() ? `
                            <div class="admin-actions">
                                <button class="btn btn-sm btn-warning" onclick="window.schoolApp.editEvent(${event.id})">
                                    <i class="fas fa-edit"></i>
                                    ${translationSystem.t('edit')}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="window.schoolApp.deleteEvent(${event.id})">
                                    <i class="fas fa-trash"></i>
                                    ${translationSystem.t('delete')}
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

    getTeachersPage() {
        return `
            <div class="page-content">
                <h1 class="page-title">${translationSystem.t('teachers')}</h1>
                ${this.isAdmin() ? `
                    <div style="margin-bottom: 2rem;">
                        <button class="btn btn-primary" id="manageTeachersBtn">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('manageTeachers')}
                        </button>
                    </div>
                ` : ''}
                
                <div class="filters">
                    <div class="search-box">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" id="teacherSearch" class="search-input" placeholder="${translationSystem.t('searchPlaceholder')}">
                    </div>
                    <div class="filter-group">
                        <select id="subjectFilter" class="form-control">
                            <option value="">${translationSystem.t('allSubjects')}</option>
                        </select>
                    </div>
                </div>
                
                <div id="teachersContent">
                    <!-- Teachers will be loaded here -->
                </div>
            </div>
        `;
    }

    setupTeachersPage() {
        this.loadTeachersContent();
        this.setupSubjectFilter();
    }

    setupSubjectFilter() {
        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
        const subjects = new Set();
        
        teachersData.forEach(teacher => {
            const teacherSubjects = this.getLocalizedText(teacher.subjects);
            if (teacherSubjects && Array.isArray(teacherSubjects) && teacherSubjects.length > 0) {
                teacherSubjects.forEach(subject => {
                    if (subject && subject.trim()) {
                        subjects.add(subject.trim());
                    }
                });
            }
        });

        const subjectFilter = document.getElementById('subjectFilter');
        if (subjectFilter) {
            Array.from(subjects).sort().forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectFilter.appendChild(option);
            });
        }
    }

    loadTeachersContent() {
        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
        const searchTerm = document.getElementById('teacherSearch')?.value.toLowerCase() || '';
        const subjectFilter = document.getElementById('subjectFilter')?.value || '';

        let filteredTeachers = teachersData;

        if (searchTerm) {
            filteredTeachers = filteredTeachers.filter(teacher => {
                const fullName = this.getLocalizedText(teacher.fullName) || '';
                const bio = this.getLocalizedText(teacher.bio) || '';
                const subjects = this.getLocalizedText(teacher.subjects) || [];
                
                return (
                    fullName.toLowerCase().includes(searchTerm) ||
                    bio.toLowerCase().includes(searchTerm) ||
                    (Array.isArray(subjects) && subjects.some(subject => 
                        subject && subject.toLowerCase().includes(searchTerm)
                    ))
                );
            });
        }

        if (subjectFilter) {
            filteredTeachers = filteredTeachers.filter(teacher => {
                const subjects = this.getLocalizedText(teacher.subjects) || [];
                return Array.isArray(subjects) && subjects.includes(subjectFilter);
            });
        }

        let teachersHTML = '';
        
        if (filteredTeachers.length === 0) {
            teachersHTML = `
                <div class="empty-state">
                    <i class="fas fa-chalkboard-teacher empty-state-icon"></i>
                    <h3 class="empty-state-title">${translationSystem.t('noTeachers')}</h3>
                </div>
            `;
        } else {
            teachersHTML = '<div class="teachers-grid">';
            filteredTeachers.forEach(teacher => {
                const whatsappUrl = teacher.phone ? `https://wa.me/${teacher.phone.replace(/[^\d+]/g, '')}` : '#';
                const subjects = this.getLocalizedText(teacher.subjects) || [translationSystem.t('allSubjects')];
                const subjectArray = Array.isArray(subjects) ? subjects : [subjects];
                
                teachersHTML += `
                    <div class="teacher-item" data-id="${teacher.id}">
                        <div class="image-placeholder">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h3 class="teacher-name">${this.getLocalizedText(teacher.fullName) || translationSystem.t('noTeachers')}</h3>
                        <div class="teacher-subjects">
                            ${subjectArray.map(subject => `
                                <span class="subject-tag">${subject}</span>
                            `).join('')}
                        </div>
                        <p class="teacher-bio">${this.getLocalizedText(teacher.bio) || translationSystem.t('noTeachers')}</p>
                        <div class="teacher-actions">
                            ${teacher.phone ? `
                                <a href="${whatsappUrl}" target="_blank" class="whatsapp-btn">
                                    <i class="fab fa-whatsapp"></i>
                                    ${translationSystem.t('contactOnWhatsApp')}
                                </a>
                            ` : ''}
                            ${this.isAdmin() ? `
                                <button class="btn btn-sm btn-warning" onclick="window.schoolApp.editTeacher(${teacher.id})">
                                    <i class="fas fa-edit"></i>
                                    ${translationSystem.t('edit')}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="window.schoolApp.deleteTeacher(${teacher.id})">
                                    <i class="fas fa-trash"></i>
                                    ${translationSystem.t('delete')}
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

    getProfilePage() {
        const user = this.currentUser;
        if (!user) {
            return `
                <div class="page-content">
                    <div class="empty-state">
                        <i class="fas fa-exclamation-circle empty-state-icon"></i>
                        <h3 class="empty-state-title">${translationSystem.t('accessDenied')}</h3>
                        <p>${this.getLocalizedText({
                            kk: 'Жүйеге кіріңіз',
                            ru: 'Пожалуйста, войдите в систему',
                            en: 'Please login to system'
                        })}</p>
                    </div>
                </div>
            `;
        }

        const classInfo = user.grade && user.letter ? `${user.grade}${user.letter}` : '';

        return `
            <div class="page-content">
                <h1 class="page-title">${translationSystem.t('profile')}</h1>
                
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
                            <strong>${translationSystem.t('fullName')}:</strong> ${user.fullName}
                        </div>
                        <div>
                            <strong>${translationSystem.t('role')}:</strong> ${user.role}
                        </div>
                        ${classInfo ? `<div><strong>${translationSystem.t('class')}:</strong> ${classInfo}</div>` : ''}
                        ${user.email ? `<div><strong>${translationSystem.t('email')}:</strong> ${user.email}</div>` : ''}
                        ${user.phone ? `<div><strong>${translationSystem.t('phone')}:</strong> ${user.phone}</div>` : ''}
                    </div>
                    
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="window.schoolApp.openProfileModal()">
                            <i class="fas fa-edit"></i>
                            ${translationSystem.t('editProfile')}
                        </button>
                        <button class="btn btn-secondary" onclick="window.schoolApp.logout()">
                            <i class="fas fa-sign-out-alt"></i>
                            ${translationSystem.t('logout')}
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
                        <h3 class="empty-state-title">${translationSystem.t('accessDenied')}</h3>
                        <p>${translationSystem.t('noPermission')}</p>
                    </div>
                </div>
            `;
        }

        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');

        return `
            <div class="page-content">
                <h1 class="page-title">${translationSystem.t('adminPanel')}</h1>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">${newsData.length}</div>
                        <div class="stat-label">${translationSystem.t('totalNews')}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${eventsData.length}</div>
                        <div class="stat-label">${translationSystem.t('totalEvents')}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${teachersData.length}</div>
                        <div class="stat-label">${translationSystem.t('totalTeachers')}</div>
                    </div>
                </div>
                
                <div class="card">
                    <h2 class="card-title">${translationSystem.t('manageNews')}</h2>
                    <p>${this.getLocalizedText({
                        kk: 'Мектеп жаңалықтары мен хабарландыруларын жасау, өңдеу және басқару',
                        ru: 'Создание, редактирование и управление школьными новостями и объявлениями',
                        en: 'Create, edit and manage school news and announcements'
                    })}</p>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-primary" onclick="window.schoolApp.openNewsModal()">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('addNews')}
                        </button>
                    </div>
                </div>
                
                <div class="card">
                    <h2 class="card-title">${translationSystem.t('manageEvents')}</h2>
                    <p>${this.getLocalizedText({
                        kk: 'Мектеп іс-шаралары мен белсенділіктерін ұйымдастыру және басқару',
                        ru: 'Организация и управление школьными мероприятиями и активностями',
                        en: 'Organize and manage school events and activities'
                    })}</p>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-success" onclick="window.schoolApp.openEventModal()">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('addEvent')}
                        </button>
                    </div>
                </div>
                
                <div class="card">
                    <h2 class="card-title">${translationSystem.t('manageTeachers')}</h2>
                    <p>${this.getLocalizedText({
                        kk: 'Мұғалім профильдері мен ақпаратын басқару',
                        ru: 'Управление профилями учителей и информацией',
                        en: 'Manage teacher profiles and information'
                    })}</p>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-warning" onclick="window.schoolApp.openTeacherModal()">
                            <i class="fas fa-plus"></i>
                            ${translationSystem.t('addTeacher')}
                        </button>
                    </div>
                </div>
            </div>
        `;
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

            const deleteButtons = modal.querySelectorAll('.btn-danger');
            deleteButtons.forEach(btn => {
                btn.style.display = 'none';
            });

            // Reset modal titles to default (add mode)
            const modalTitles = {
                'newsModal': 'addNews',
                'eventModal': 'addEvent',
                'teacherModal': 'addTeacher'
            };

            if (modalTitles[modalId]) {
                const titleElement = modal.querySelector('h3');
                if (titleElement) {
                    titleElement.textContent = translationSystem.t(modalTitles[modalId]);
                }
            }
        }
    }

    // News management
    openNewsModal(newsId = null) {
        if (!this.isAdmin()) return;

        this.currentEditingId = newsId;
        const modal = document.getElementById('newsModal');
        const titleElement = modal.querySelector('h3');
        const deleteBtn = document.getElementById('deleteNews');

        if (newsId) {
            // Edit mode
            const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
            const news = newsData.find(item => item.id === newsId);
            
            if (news) {
                document.getElementById('newsTitle').value = this.getLocalizedText(news.title) || '';
                document.getElementById('newsDescription').value = this.getLocalizedText(news.description) || '';
                document.getElementById('newsContent').value = this.getLocalizedText(news.content) || '';
                document.getElementById('newsDate').value = news.date.slice(0, 16);
                document.getElementById('newsPublished').checked = news.published;

                if (titleElement) titleElement.textContent = translationSystem.t('editNews');
                if (deleteBtn) deleteBtn.style.display = 'block';
            }
        } else {
            // Add mode - устанавливаем текущую дату
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 16);
            document.getElementById('newsDate').value = formattedDate;
            
            if (titleElement) titleElement.textContent = translationSystem.t('addNews');
            if (deleteBtn) deleteBtn.style.display = 'none';
        }

        this.showModal('newsModal');
    }

    saveNews() {
        const title = document.getElementById('newsTitle').value;
        const description = document.getElementById('newsDescription').value;
        const content = document.getElementById('newsContent').value;
        const date = document.getElementById('newsDate').value;
        const published = document.getElementById('newsPublished').checked;

        // Только дата обязательна
        if (!date) {
            this.showNotification(translationSystem.t('fillRequiredFields'), 'error');
            return;
        }

        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');

        const newsItem = {
            id: this.currentEditingId || Date.now(),
            title: {
                kk: title || 'Атауы жоқ',
                ru: title || 'Без названия',
                en: title || 'No title'
            },
            description: {
                kk: description || 'Сипаттамасы жоқ',
                ru: description || 'Без описания',
                en: description || 'No description'
            },
            content: {
                kk: content || '',
                ru: content || '',
                en: content || ''
            },
            image: '',
            links: [],
            date,
            authorId: this.currentUser?.id || 1,
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
        this.showNotification(translationSystem.t('savedSuccessfully'));

        // Reload news page if active
        if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'news') {
            this.loadPage('news');
        } else if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'home') {
            this.loadPage('home');
        }
    }

    editNews(id) {
        this.openNewsModal(id);
    }

    deleteNews(id = null) {
        if (!this.isAdmin()) return;

        const newsId = id || this.currentEditingId;
        if (!newsId) return;

        if (confirm(translationSystem.t('confirmDeleteNews'))) {
            const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
            const filteredData = newsData.filter(item => item.id !== newsId);
            localStorage.setItem('newsData', JSON.stringify(filteredData));
            
            if (this.currentEditingId) {
                this.hideModal('newsModal');
            }
            this.showNotification(translationSystem.t('deletedSuccessfully'));

            // Reload news page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'news') {
                this.loadPage('news');
            } else if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'home') {
                this.loadPage('home');
            }
        }
    }

    // Event management
    openEventModal(eventId = null) {
        if (!this.isAdmin()) return;

        this.currentEditingId = eventId;
        const modal = document.getElementById('eventModal');
        const titleElement = modal.querySelector('h3');
        const deleteBtn = document.getElementById('deleteEvent');

        if (eventId) {
            // Edit mode
            const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
            const event = eventsData.find(item => item.id === eventId);
            
            if (event) {
                document.getElementById('eventTitle').value = this.getLocalizedText(event.title) || '';
                document.getElementById('eventDescription').value = this.getLocalizedText(event.description) || '';
                document.getElementById('eventDate').value = event.date.slice(0, 16);
                document.getElementById('eventPublished').checked = event.published;

                if (titleElement) titleElement.textContent = translationSystem.t('editEvent');
                if (deleteBtn) deleteBtn.style.display = 'block';
            }
        } else {
            // Add mode - устанавливаем текущую дату
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 16);
            document.getElementById('eventDate').value = formattedDate;
            
            if (titleElement) titleElement.textContent = translationSystem.t('addEvent');
            if (deleteBtn) deleteBtn.style.display = 'none';
        }

        this.showModal('eventModal');
    }

    saveEvent() {
        const title = document.getElementById('eventTitle').value;
        const description = document.getElementById('eventDescription').value;
        const date = document.getElementById('eventDate').value;
        const published = document.getElementById('eventPublished').checked;

        // Только дата обязательна
        if (!date) {
            this.showNotification(translationSystem.t('fillRequiredFields'), 'error');
            return;
        }

        const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');

        const eventItem = {
            id: this.currentEditingId || Date.now(),
            title: {
                kk: title || 'Атауы жоқ',
                ru: title || 'Без названия',
                en: title || 'No title'
            },
            description: {
                kk: description || 'Сипаттамасы жоқ',
                ru: description || 'Без описания',
                en: description || 'No description'
            },
            image: '',
            links: [],
            date,
            authorId: this.currentUser?.id || 1,
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
        this.showNotification(translationSystem.t('savedSuccessfully'));

        // Reload events page if active
        if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'events') {
            this.loadEventsContent('all');
        } else if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'home') {
            this.loadPage('home');
        }
    }

    editEvent(id) {
        this.openEventModal(id);
    }

    deleteEvent(id = null) {
        if (!this.isAdmin()) return;

        const eventId = id || this.currentEditingId;
        if (!eventId) return;

        if (confirm(translationSystem.t('confirmDeleteEvent'))) {
            const eventsData = JSON.parse(localStorage.getItem('eventsData') || '[]');
            const filteredData = eventsData.filter(item => item.id !== eventId);
            localStorage.setItem('eventsData', JSON.stringify(filteredData));
            
            if (this.currentEditingId) {
                this.hideModal('eventModal');
            }
            this.showNotification(translationSystem.t('deletedSuccessfully'));

            // Reload events page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'events') {
                this.loadEventsContent('all');
            } else if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'home') {
                this.loadPage('home');
            }
        }
    }

    // Teacher management
    openTeacherModal(teacherId = null) {
        if (!this.isAdmin()) return;

        this.currentEditingId = teacherId;
        const modal = document.getElementById('teacherModal');
        const titleElement = modal.querySelector('h3');
        const deleteBtn = document.getElementById('deleteTeacher');

        if (teacherId) {
            // Edit mode
            const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
            const teacher = teachersData.find(item => item.id === teacherId);
            
            if (teacher) {
                document.getElementById('teacherName').value = this.getLocalizedText(teacher.fullName) || '';
                const subjects = this.getLocalizedText(teacher.subjects) || [];
                document.getElementById('teacherSubjects').value = Array.isArray(subjects) ? subjects.join(', ') : subjects;
                document.getElementById('teacherPhone').value = teacher.phone || '';
                document.getElementById('teacherBio').value = this.getLocalizedText(teacher.bio) || '';

                if (titleElement) titleElement.textContent = translationSystem.t('editTeacher');
                if (deleteBtn) deleteBtn.style.display = 'block';
            }
        } else {
            // Add mode
            if (titleElement) titleElement.textContent = translationSystem.t('addTeacher');
            if (deleteBtn) deleteBtn.style.display = 'none';
        }

        this.showModal('teacherModal');
    }

    saveTeacher() {
        const fullName = document.getElementById('teacherName').value;
        const subjectsInput = document.getElementById('teacherSubjects').value;
        const phone = document.getElementById('teacherPhone').value;
        const bio = document.getElementById('teacherBio').value;

        // Обязательные поля: только ФИО
        if (!fullName) {
            this.showNotification('Укажите ФИО учителя', 'error');
            return;
        }

        const subjects = subjectsInput ? 
            subjectsInput.split(',').map(s => s.trim()).filter(s => s) : 
            [translationSystem.t('allSubjects')];

        const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');

        const teacherItem = {
            id: this.currentEditingId || Date.now(),
            fullName: {
                kk: fullName,
                ru: fullName,
                en: fullName
            },
            subjects: {
                kk: subjects,
                ru: subjects,
                en: subjects
            },
            phone: phone || '',
            bio: {
                kk: bio || translationSystem.t('noTeachers'),
                ru: bio || translationSystem.t('noTeachers'),
                en: bio || translationSystem.t('noTeachers')
            },
            photo: '',
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
        this.showNotification(translationSystem.t('savedSuccessfully'));

        // Reload teachers page if active
        if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'teachers') {
            this.loadTeachersContent();
        }
    }

    editTeacher(id) {
        this.openTeacherModal(id);
    }

    deleteTeacher(id = null) {
        if (!this.isAdmin()) return;

        const teacherId = id || this.currentEditingId;
        if (!teacherId) return;

        if (confirm(translationSystem.t('confirmDeleteTeacher'))) {
            const teachersData = JSON.parse(localStorage.getItem('teachersData') || '[]');
            const filteredData = teachersData.filter(item => item.id !== teacherId);
            localStorage.setItem('teachersData', JSON.stringify(filteredData));
            
            if (this.currentEditingId) {
                this.hideModal('teacherModal');
            }
            this.showNotification(translationSystem.t('deletedSuccessfully'));

            // Reload teachers page if active
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'teachers') {
                this.loadTeachersContent();
            }
        }
    }

    // Profile management
    openProfileModal() {
        const user = this.currentUser;
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
            this.showNotification(translationSystem.t('passwordsNotMatch'), 'error');
            return;
        }

        const user = this.currentUser;
        if (user) {
            user.email = email;
            user.phone = phone;

            localStorage.setItem('currentUser', JSON.stringify(user));
            
            this.hideModal('profileModal');
            this.showNotification(translationSystem.t('profileUpdated'));
            
            this.updateUserInterface();
            
            if (document.querySelector('.menu-item.active')?.getAttribute('data-page') === 'profile') {
                this.loadPage('profile');
            }
        }
    }

    // Utility methods
    getAuthorName(authorId) {
        return authorId === 1 ? 'Admin' : 'Teacher';
    }

    getInitials(name) {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    }

    isAdmin() {
        return this.currentUser?.role === 'admin' || this.currentUser?.login === 'admin';
    }

    isStudent() {
        return this.currentUser?.role === 'student';
    }

    updateUserInterface() {
        const user = this.currentUser;
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const userAvatarMobile = document.getElementById('userAvatarMobile');
        
        if (userName && user) userName.textContent = user.fullName;
        if (userAvatar && user) userAvatar.textContent = this.getInitials(user.fullName);
        if (userAvatarMobile && user) userAvatarMobile.textContent = this.getInitials(user.fullName);
        
        document.body.setAttribute('data-user-role', user?.role?.toLowerCase() || 'student');
        
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(element => {
            element.style.display = this.isAdmin() ? '' : 'none';
        });
    }

    showNotification(message, type = 'success') {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-message">${message}</div>
            <button class="notification-close">&times;</button>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);

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

    logout() {
        const logoutMessage = this.currentLanguage === 'kk' ? 'Шығуға сенімдісіз бе?' :
                             this.currentLanguage === 'ru' ? 'Вы уверены, что хотите выйти?' :
                             'Are you sure you want to logout?';
        
        if (confirm(logoutMessage)) {
            this.currentUser = null;
            localStorage.removeItem('currentUser');
            
            this.showNotification(translationSystem.t('logoutSuccessful'), 'info');
            this.showAuthModal();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Apply translations
    translationSystem.updateAllTranslations();
    
    // Initialize school app
    window.schoolApp = new SchoolApp();
    window.schoolApp.init();
    
    // Hide preloader
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
    }, 1000);
});