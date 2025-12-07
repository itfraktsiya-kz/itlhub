// Authentication System
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        console.log('🔐 Auth system initialized');
    }

    setupEventListeners() {
        // Login form
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.handleLogin());
        }

        // Register form
        const registerBtn = document.getElementById('registerBtn');
        if (registerBtn) {
            registerBtn.addEventListener('click', () => this.handleRegister());
        }

        // Form switching
        const switchToRegister = document.getElementById('switchToRegister');
        const switchToLogin = document.getElementById('switchToLogin');
        
        if (switchToRegister) {
            switchToRegister.addEventListener('click', (e) => {
                e.preventDefault();
                this.showRegisterForm();
            });
        }
        
        if (switchToLogin) {
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                this.showLoginForm();
            });
        }

        // Grade and letter selection logic
        const gradeSelect = document.getElementById('regGrade');
        const letterSelect = document.getElementById('regLetter');
        
        if (gradeSelect && letterSelect) {
            gradeSelect.addEventListener('change', () => this.updateLetterOptions());
        }

        // Enter key support
        const passwordInput = document.getElementById('passwordInput');
        if (passwordInput) {
            passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleLogin();
                }
            });
        }
    }

    updateLetterOptions() {
        const gradeSelect = document.getElementById('regGrade');
        const letterSelect = document.getElementById('regLetter');
        const selectedGrade = gradeSelect.value;

        letterSelect.disabled = !selectedGrade;

        if (selectedGrade) {
            letterSelect.innerHTML = '<option value="">Выберите букву</option>';
            
            const letters = ['а', 'ә', 'б', 'в'];
            const availableLetters = selectedGrade === '10' ? ['а', 'ә'] : letters;
            
            availableLetters.forEach(letter => {
                const option = document.createElement('option');
                option.value = letter;
                option.textContent = letter;
                letterSelect.appendChild(option);
            });
        }
    }

    async handleLogin() {
        const loginInput = document.getElementById('loginInput');
        const passwordInput = document.getElementById('passwordInput');
        const loginBtn = document.getElementById('loginBtn');

        if (!loginInput || !passwordInput) return;

        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        if (!login || !password) {
            this.showNotification('Введите логин и пароль', 'error');
            return;
        }

        if (loginBtn) {
            this.setButtonLoading(loginBtn, true);
        }

        try {
            await this.demoAuth(login, password);
            
        } catch (error) {
            this.showNotification(error.message, 'error');
        } finally {
            if (loginBtn) {
                this.setButtonLoading(loginBtn, false);
            }
        }
    }

    async demoAuth(login, password) {
        // Demo users data
        const demoUsers = [
            // Admin users
            {
                id: 1,
                login: 'aybibi_alzhanova',
                password: 'aybibi06',
                fullName: 'Alzhanova Aybibi',
                role: 'admin',
                email: '',
                phone: '',
                grade: '',
                letter: '',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                login: 'mansur_erzhigit',
                password: 'mansur27',
                fullName: 'Mansur Erzhigit',
                role: 'admin',
                email: '',
                phone: '',
                grade: '',
                letter: '',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                login: 'abilmansur_bulat',
                password: 'abil21',
                fullName: 'Bulat Abilmansur',
                role: 'admin',
                email: '',
                phone: '',
                grade: '',
                letter: '',
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                login: 'miras_bekishev',
                password: 'miras18',
                fullName: 'Bekishev Miras',
                role: 'admin',
                email: '',
                phone: '',
                grade: '',
                letter: '',
                createdAt: new Date().toISOString()
            },
            {
                id: 5,
                login: 'director',
                password: 'director123',
                fullName: 'School Director',
                role: 'admin',
                email: 'director@school.edu',
                phone: '+7 701 000 0001',
                grade: '',
                letter: '',
                createdAt: new Date().toISOString()
            },
            // Student users
            {
                id: 6,
                login: 'student1',
                password: 'student123',
                fullName: 'Erzhigit Mansur',
                role: 'student',
                email: 'erzhigit@school.edu',
                phone: '+7 701 123 4567',
                grade: '10',
                letter: 'а',
                createdAt: new Date().toISOString()
            }
        ];

        await new Promise(resolve => setTimeout(resolve, 1000));

        const user = demoUsers.find(u => u.login === login && u.password === password);
        
        if (user) {
            const { password: _, ...userWithoutPassword } = user;
            this.currentUser = userWithoutPassword;
            
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            
            if (window.schoolApp) {
                window.schoolApp.currentUser = this.currentUser;
                window.schoolApp.showMainApp();
            }
            
            this.showNotification(`Добро пожаловать, ${user.fullName}!`, 'success');
            
            if (loginInput) loginInput.value = '';
            if (passwordInput) passwordInput.value = '';
        } else {
            throw new Error('Неверный логин или пароль');
        }
    }

    async handleRegister() {
        const regLogin = document.getElementById('regLogin');
        const regPassword = document.getElementById('regPassword');
        const regConfirmPassword = document.getElementById('regConfirmPassword');
        const regFullName = document.getElementById('regFullName');
        const regGrade = document.getElementById('regGrade');
        const regLetter = document.getElementById('regLetter');
        const regEmail = document.getElementById('regEmail');
        const regPhone = document.getElementById('regPhone');
        const registerBtn = document.getElementById('registerBtn');

        if (!regLogin || !regPassword || !regConfirmPassword || !regFullName || !regGrade || !regLetter) return;

        const login = regLogin.value.trim();
        const password = regPassword.value.trim();
        const confirmPassword = regConfirmPassword.value.trim();
        const fullName = regFullName.value.trim();
        const grade = regGrade.value;
        const letter = regLetter.value;
        const email = regEmail.value.trim();
        const phone = regPhone.value.trim();

        // Validation
        if (!login || !password || !confirmPassword || !fullName || !grade || !letter) {
            this.showNotification('Заполните все обязательные поля', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showNotification('Пароли не совпадают', 'error');
            return;
        }

        if (password.length < 8) {
            this.showNotification('Пароль должен быть не менее 8 символов', 'error');
            return;
        }

        // Check if login already exists
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        if (existingUsers.find(u => u.login === login)) {
            this.showNotification('Этот логин уже занят', 'error');
            return;
        }

        if (registerBtn) {
            this.setButtonLoading(registerBtn, true);
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            const newUser = {
                id: Date.now(),
                login,
                password: this.hashPassword(password),
                fullName,
                role: 'student',
                grade,
                letter,
                email: email || '',
                phone: phone || '',
                createdAt: new Date().toISOString()
            };

            existingUsers.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

            this.showNotification('Регистрация успешна! Теперь вы можете войти.', 'success');
            
            setTimeout(() => {
                this.showLoginForm();
                this.clearRegistrationForm();
            }, 2000);

        } catch (error) {
            this.showNotification('Ошибка регистрации. Попробуйте снова.', 'error');
        } finally {
            if (registerBtn) {
                this.setButtonLoading(registerBtn, false);
            }
        }
    }

    clearRegistrationForm() {
        const elements = [
            'regLogin', 'regPassword', 'regConfirmPassword', 'regFullName', 
            'regEmail', 'regPhone'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.value = '';
        });
        
        const gradeSelect = document.getElementById('regGrade');
        const letterSelect = document.getElementById('regLetter');
        if (gradeSelect) gradeSelect.value = '';
        if (letterSelect) {
            letterSelect.innerHTML = '<option value="">Выберите букву</option>';
            letterSelect.disabled = true;
        }
    }

    hashPassword(password) {
        return btoa(password);
    }

    setButtonLoading(button, isLoading) {
        const btnText = button.querySelector('.btn-text');
        const btnLoading = button.querySelector('.btn-loading');
        
        if (isLoading) {
            button.disabled = true;
            if (btnText) btnText.style.opacity = '0';
            if (btnLoading) btnLoading.style.display = 'block';
        } else {
            button.disabled = false;
            if (btnText) btnText.style.opacity = '1';
            if (btnLoading) btnLoading.style.display = 'none';
        }
    }

    showRegisterForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');

        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        if (authTitle) authTitle.textContent = 'Создать аккаунт';
    }

    showLoginForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');

        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        if (authTitle) authTitle.textContent = 'Вход в систему';
    }

    showNotification(message, type = 'info') {
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
}

// Initialize auth system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.authSystem = new AuthSystem();
});

// Preloader handling
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 1000);
    }
});