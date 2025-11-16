// Authentication System
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.isAuthenticated = false;
        this.init();
    }

    init() {
        this.checkAuthState();
        this.setupEventListeners();
        console.log('Auth system initialized');
    }

    setupEventListeners() {
        // Login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.handleLogin());
        }

        // Register button
        const registerBtn = document.getElementById('registerBtn');
        if (registerBtn) {
            registerBtn.addEventListener('click', () => this.handleRegister());
        }

        // Switch to registration form
        const switchToRegister = document.getElementById('switchToRegister');
        if (switchToRegister) {
            switchToRegister.addEventListener('click', () => this.showRegisterForm());
        }

        // Switch to login form
        const switchToLogin = document.getElementById('switchToLogin');
        if (switchToLogin) {
            switchToLogin.addEventListener('click', () => this.showLoginForm());
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

        // Password visibility toggle
        this.setupPasswordVisibility();
    }

    setupPasswordVisibility() {
        // For registration form
        const regPasswordGroup = document.querySelector('#registerForm .input-group:nth-child(3)');
        const regConfirmPasswordGroup = document.querySelector('#registerForm .input-group:nth-child(4)');
        
        if (regPasswordGroup) {
            this.addPasswordToggle(regPasswordGroup, 'regPassword');
        }
        if (regConfirmPasswordGroup) {
            this.addPasswordToggle(regConfirmPasswordGroup, 'regConfirmPassword');
        }

        // For login form
        const loginPasswordGroup = document.querySelector('#loginForm .input-group:nth-child(2)');
        if (loginPasswordGroup) {
            this.addPasswordToggle(loginPasswordGroup, 'passwordInput');
        }
    }

    addPasswordToggle(inputGroup, inputId) {
        const passwordInput = document.getElementById(inputId);
        if (!passwordInput) return;

        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
        toggleBtn.setAttribute('aria-label', 'Show password');
        
        // Add styles
        toggleBtn.style.background = 'none';
        toggleBtn.style.border = 'none';
        toggleBtn.style.position = 'absolute';
        toggleBtn.style.right = '10px';
        toggleBtn.style.top = '50%';
        toggleBtn.style.transform = 'translateY(-50%)';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.color = 'var(--text-tertiary)';
        toggleBtn.style.padding = '8px';
        toggleBtn.style.borderRadius = '4px';
        toggleBtn.style.transition = 'color 0.2s ease';
        toggleBtn.style.width = '40px';
        toggleBtn.style.height = '40px';
        toggleBtn.style.display = 'flex';
        toggleBtn.style.alignItems = 'center';
        toggleBtn.style.justifyContent = 'center';
        toggleBtn.style.zIndex = '2';
        toggleBtn.style.webkitTapHighlightColor = 'transparent';

        // Add hover effect
        toggleBtn.addEventListener('mouseenter', () => {
            toggleBtn.style.color = 'var(--primary)';
            toggleBtn.style.background = 'var(--bg-tertiary)';
        });

        toggleBtn.addEventListener('mouseleave', () => {
            if (!toggleBtn.classList.contains('active')) {
                toggleBtn.style.color = 'var(--text-tertiary)';
                toggleBtn.style.background = 'none';
            }
        });

        // Toggle password visibility
        toggleBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            
            // Update icon
            const icon = toggleBtn.querySelector('i');
            if (isPassword) {
                icon.className = 'fas fa-eye-slash';
                toggleBtn.classList.add('active');
                toggleBtn.style.color = 'var(--primary)';
                toggleBtn.style.background = 'var(--primary-light)';
            } else {
                icon.className = 'fas fa-eye';
                toggleBtn.classList.remove('active');
                toggleBtn.style.color = 'var(--text-tertiary)';
                toggleBtn.style.background = 'none';
            }
        });

        // Add to input group
        inputGroup.style.position = 'relative';
        inputGroup.appendChild(toggleBtn);

        // Adjust input padding to make space for the toggle button
        passwordInput.style.paddingRight = '50px';
    }

    checkAuthState() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.isAuthenticated = true;
            this.showMainApp();
        } else {
            this.showAuthModal();
            // Show registration form first by default
            this.showRegisterForm();
        }
    }

    showAuthModal() {
        const authModal = document.getElementById('authModal');
        const appContainer = document.getElementById('appContainer');
        
        if (authModal) authModal.style.display = 'flex';
        if (appContainer) appContainer.style.display = 'none';
    }

    showMainApp() {
        const authModal = document.getElementById('authModal');
        const appContainer = document.getElementById('appContainer');
        const preloader = document.getElementById('preloader');
        
        if (authModal) authModal.style.display = 'none';
        if (appContainer) appContainer.style.display = 'block';
        
        // Hide preloader
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300);
            }
        }, 1000);
        
        // Initialize main app immediately after showing main app
        setTimeout(() => {
            if (typeof initializeMainApp === 'function') {
                initializeMainApp();
            }
        }, 100);
    }

    showRegisterForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');
        const loginBtnText = document.getElementById('loginBtnText');

        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        if (authTitle) authTitle.textContent = 'Тіркелу';
        if (loginBtnText) loginBtnText.textContent = 'Тіркелу';
    }

    showLoginForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');
        const loginBtnText = document.getElementById('loginBtnText');

        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        if (authTitle) authTitle.textContent = 'Жүйеге кіру';
        if (loginBtnText) loginBtnText.textContent = 'Кіру';
    }

    async handleLogin() {
        const loginInput = document.getElementById('loginInput');
        const passwordInput = document.getElementById('passwordInput');
        const loginBtn = document.getElementById('loginBtn');

        if (!loginInput || !passwordInput) return;

        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        if (!login || !password) {
            this.showNotification('Логин және құпия сөзді енгізіңіз!', 'error');
            return;
        }

        // Show loading
        if (loginBtn) {
            loginBtn.classList.add('loading');
        }

        try {
            // Demo authentication - replace with actual API call
            await this.demoAuth(login, password);
            
        } catch (error) {
            this.showNotification('Кіру кезінде қате пайда болды', 'error');
        } finally {
            if (loginBtn) {
                loginBtn.classList.remove('loading');
            }
        }
    }

    async demoAuth(login, password) {
        // Demo users data
        const demoUsers = [
            {
                login: 'mansur_erzhigit_7',
                password: 'mans27',
                fullName: 'Ержігіт Мансур',
                role: 'Admin',
                class: ''
            },
            {
                login: 'alzhanova_aybibi_3',
                password: 'aybibi06',
                fullName: 'Альжанова Айбиби',
                role: 'Admin',
                class: ''
            },
            {
                login: 'bulat_abilmansur_8',
                password: 'abil21',
                fullName: 'Булат Әбілмансур',
                role: 'Admin',
                class: ''
            },
            {
                login: 'teacher',
                password: 'teacher123', 
                fullName: 'Гүлнар Кәрімова',
                role: 'Мұғалім',
                class: ''
            },
            {
                login: 'student',
                password: 'student123',
                fullName: 'Ержигит Мансур',
                role: 'Оқушы',
                class: '10А'
            },
            {
                login: 'aruzhan',
                password: 'aruzhan123',
                fullName: 'Аружан Әбілда',
                role: 'Оқушы', 
                class: '11Б'
            }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const user = demoUsers.find(u => u.login === login && u.password === password);
        
        if (user) {
            this.currentUser = { ...user };
            this.isAuthenticated = true;
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            
            this.showMainApp();
            this.showNotification(`Қош келдіңіз, ${user.fullName}!`, 'success');
        } else {
            throw new Error('Қате логин немесе құпия сөз');
        }
    }

    async handleRegister() {
        const regLogin = document.getElementById('regLogin');
        const regPassword = document.getElementById('regPassword');
        const regConfirmPassword = document.getElementById('regConfirmPassword');
        const regFullName = document.getElementById('regFullName');
        const regClass = document.getElementById('regClass');
        const registerBtn = document.getElementById('registerBtn');

        if (!regLogin || !regPassword || !regConfirmPassword || !regFullName || !regClass) return;

        const login = regLogin.value.trim();
        const password = regPassword.value.trim();
        const confirmPassword = regConfirmPassword.value.trim();
        const fullName = regFullName.value.trim();
        const className = regClass.value;

        // Validation
        if (!login || !password || !confirmPassword || !fullName || !className) {
            this.showNotification('Барлық өрістерді толтырыңыз!', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showNotification('Құпия сөздер сәйкес емес!', 'error');
            return;
        }

        if (password.length < 6) {
            this.showNotification('Құпия сөз кемінде 6 таңбадан тұруы керек!', 'error');
            return;
        }

        // Show loading
        if (registerBtn) {
            registerBtn.classList.add('loading');
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Create new user
            const newUser = {
                login,
                password,
                fullName,
                role: 'Оқушы',
                class: className
            };

            // In a real app, you would send this to your backend
            console.log('Registration data:', newUser);

            this.showNotification('Сіз сәтті тіркелдіңіз! Енді жүйеге кіре аласыз.', 'success');
            
            // Auto login after registration
            this.currentUser = newUser;
            this.isAuthenticated = true;
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            this.showMainApp();

        } catch (error) {
            this.showNotification('Тіркеу кезінде қате пайда болды', 'error');
        } finally {
            if (registerBtn) {
                registerBtn.classList.remove('loading');
            }
        }
    }

    logout() {
        this.currentUser = null;
        this.isAuthenticated = false;
        localStorage.removeItem('currentUser');
        this.showAuthModal();
        this.showNotification('Сіз жүйеден шықтыңыз', 'info');
    }

    getCurrentUser() {
        return this.currentUser;
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
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

// Make initializeMainApp globally available
window.initializeMainApp = function() {
    console.log('Initializing main application...');
    
    // Initialize all main app functionality
    if (typeof setupNavigation === 'function') setupNavigation();
    if (typeof setupSidebar === 'function') setupSidebar();
    if (typeof setupTheme === 'function') setupTheme();
    if (typeof setupLanguage === 'function') setupLanguage();
    if (typeof setupMobileMenu === 'function') setupMobileMenu();
    if (typeof updateUserInterface === 'function') updateUserInterface();
    
    // Load initial page
    if (typeof loadPage === 'function') loadPage('school');
    if (typeof updateBreadcrumb === 'function') updateBreadcrumb('school');
    
    console.log('Main application initialized successfully!');
};

