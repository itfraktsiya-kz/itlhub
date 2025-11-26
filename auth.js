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

        // Enable/disable based on grade selection
        letterSelect.disabled = !selectedGrade;

        if (selectedGrade) {
            // Reset options
            letterSelect.innerHTML = '<option value="">Select Letter</option>';
            
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

    checkAuthState() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.isAuthenticated = true;
            this.showMainApp();
        }
    }

    showAuthModal() {
        const authModal = document.getElementById('authModal');
        const appContainer = document.getElementById('appContainer');
        const mobileHeader = document.getElementById('mobileHeader');
        
        if (authModal) authModal.style.display = 'flex';
        if (appContainer) appContainer.style.display = 'none';
        if (mobileHeader) mobileHeader.style.display = 'none';
    }

    showMainApp() {
        const authModal = document.getElementById('authModal');
        const appContainer = document.getElementById('appContainer');
        const mobileHeader = document.getElementById('mobileHeader');
        const preloader = document.getElementById('preloader');
        
        if (authModal) authModal.style.display = 'none';
        if (appContainer) appContainer.style.display = 'block';
        if (mobileHeader) mobileHeader.style.display = 'flex';
        
        // Hide preloader
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300);
            }
        }, 1000);
        
        // Initialize main app
        if (typeof initializeMainApp === 'function') {
            setTimeout(() => {
                initializeMainApp();
            }, 100);
        }
    }

    showRegisterForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');

        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        if (authTitle) authTitle.textContent = 'Create Account';
    }

    showLoginForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');

        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        if (authTitle) authTitle.textContent = 'Login to System';
    }

    async handleLogin() {
        const loginInput = document.getElementById('loginInput');
        const passwordInput = document.getElementById('passwordInput');
        const loginBtn = document.getElementById('loginBtn');

        if (!loginInput || !passwordInput) return;

        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        if (!login || !password) {
            this.showNotification('Please enter login and password', 'error');
            return;
        }

        // Show loading
        if (loginBtn) {
            this.setButtonLoading(loginBtn, true);
        }

        try {
            // Demo authentication - replace with actual API call
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
        // Demo users data - including admins and students
        const demoUsers = [
            // Admin users
            {
                id: 1,
                login: 'admin',
                password: 'admin123',
                fullName: 'System Administrator',
                role: 'admin',
                email: 'admin@school.edu',
                phone: '+7 701 000 0000',
                grade: '',
                letter: '',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
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
                id: 3,
                login: 'student1',
                password: 'student123',
                fullName: 'Erzhigit Mansur',
                role: 'student',
                email: 'erzhigit@school.edu',
                phone: '+7 701 123 4567',
                grade: '10',
                letter: 'а',
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                login: 'student2',
                password: 'student123',
                fullName: 'Aruzhan Abilda',
                role: 'student',
                email: 'aruzhan@school.edu',
                phone: '+7 701 234 5678',
                grade: '11',
                letter: 'б',
                createdAt: new Date().toISOString()
            },
            {
                id: 5,
                login: 'student3',
                password: 'student123',
                fullName: 'Alikhan Bektur',
                role: 'student',
                email: 'alikhan@school.edu',
                phone: '+7 701 345 6789',
                grade: '10',
                letter: 'ә',
                createdAt: new Date().toISOString()
            }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const user = demoUsers.find(u => u.login === login && u.password === password);
        
        if (user) {
            // Remove password from user object before storing
            const { password: _, ...userWithoutPassword } = user;
            this.currentUser = userWithoutPassword;
            this.isAuthenticated = true;
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            
            this.showMainApp();
            this.showNotification(`Welcome, ${user.fullName}!`, 'success');
            
            // Clear form
            if (loginInput) loginInput.value = '';
            if (passwordInput) passwordInput.value = '';
        } else {
            throw new Error('Invalid login or password');
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
            this.showNotification('Please fill all required fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        if (password.length < 8) {
            this.showNotification('Password must be at least 8 characters long', 'error');
            return;
        }

        // Special validation for grade 10
        if (grade === '10' && !['а', 'ә'].includes(letter)) {
            this.showNotification('For grade 10, only letters "а" and "ә" are available', 'error');
            return;
        }

        // Check if login already exists (in a real app, this would be an API call)
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        if (existingUsers.find(u => u.login === login)) {
            this.showNotification('This login is already taken', 'error');
            return;
        }

        // Show loading
        if (registerBtn) {
            this.setButtonLoading(registerBtn, true);
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Create new user
            const newUser = {
                id: Date.now(),
                login,
                password: this.hashPassword(password), // In real app, hash on backend
                fullName,
                role: 'student',
                grade,
                letter,
                email: email || '',
                phone: phone || '',
                createdAt: new Date().toISOString()
            };

            // Save to localStorage (in real app, send to backend)
            existingUsers.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

            this.showNotification('Registration successful! You can now login.', 'success');
            
            // Switch to login form and clear
            setTimeout(() => {
                this.showLoginForm();
                this.clearRegistrationForm();
            }, 2000);

        } catch (error) {
            this.showNotification('Registration failed. Please try again.', 'error');
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
            letterSelect.innerHTML = '<option value="">Select Letter</option>';
            letterSelect.disabled = true;
        }
    }

    hashPassword(password) {
        // In a real app, use proper hashing like bcrypt on the backend
        // This is just a simple demo implementation
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

    logout() {
        this.currentUser = null;
        this.isAuthenticated = false;
        localStorage.removeItem('currentUser');
        this.showAuthModal();
        this.showNotification('You have been logged out', 'info');
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isAdmin() {
        return this.currentUser?.role === 'admin';
    }

    isStudent() {
        return this.currentUser?.role === 'student';
    }

    showNotification(message, type = 'info') {
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