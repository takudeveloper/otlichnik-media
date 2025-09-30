// script.js
// Данные статей
const articlesData = [
    {
        id: 1,
        title: "Искусство школьной журналистики",
        excerpt: "Как мы создаем материалы, которые читают не только ученики, но и учителя с родителями",
        category: "Редакция",
        date: "15 октября 2023",
        image: "url('images/article1.jpg')"
    },
    {
        id: 2,
        title: "Интервью с директором: взгляд в будущее",
        excerpt: "Эксклюзивная беседа о новых образовательных программах и развитии школы",
        category: "Интервью",
        date: "12 октября 2023", 
        image: "url('images/article2.jpg')"
    },
    {
        id: 3,
        title: "Олимпийские достижения: история успеха",
        excerpt: "Рассказ о подготовке и победах наших учеников в городских олимпиадах",
        category: "Достижения",
        date: "8 октября 2023",
        image: "url('images/article3.jpg')"
    },
    {
        id: 4,
        title: "Театральный сезон: от классики к современности",
        excerpt: "Новая постановка школьного театра и работа над образами",
        category: "Искусство",
        date: "5 октября 2023",
        image: "url('images/article4.jpg')"
    },
    {
        id: 5,
        title: "Спорт как искусство: эстетика движения",
        excerpt: "Фоторепортаж с школьных соревнований и интервью с тренерами",
        category: "Спорт",
        date: "3 октября 2023",
        image: "url('images/article5.jpg')"
    },
    {
        id: 6,
        title: "Цифровая трансформация образования",
        excerpt: "Как современные технологии меняют подход к обучению в нашей школе",
        category: "Технологии",
        date: "1 октября 2023",
        image: "url('images/article6.jpg')"
    }
];

// Загрузка статей
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    setupMobileMenu();
    setupSmoothScroll();
    setupButtonHandlers();
    setupFormHandlers();
    setupScrollEffects();
});

function loadArticles() {
    const grid = document.getElementById('articles-grid');
    
    articlesData.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <div class="article-image" style="background-image: ${article.image};"></div>
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-date">${article.date}</div>
            </div>
        `;
        grid.appendChild(articleCard);
    });
}

// Мобильное меню
function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const isDisplayed = navLinks.style.display === 'flex';
            navLinks.style.display = isDisplayed ? 'none' : 'flex';
            navActions.style.display = isDisplayed ? 'none' : 'flex';
            
            if (!isDisplayed) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--white)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                navLinks.style.gap = '1.5rem';
                
                navActions.style.position = 'absolute';
                navActions.style.top = 'calc(100% + 200px)';
                navActions.style.left = '0';
                navActions.style.right = '0';
                navActions.style.background = 'var(--white)';
                navActions.style.padding = '2rem';
                navActions.style.justifyContent = 'center';
            }
        });
    }
}

// Плавная прокрутка
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Закрываем мобильное меню если открыто
                const navLinks = document.querySelector('.nav-links');
                const navActions = document.querySelector('.nav-actions');
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    navActions.style.display = 'none';
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Эффекты при скролле
function setupScrollEffects() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Обработчики кнопок
function setupButtonHandlers() {
    // Кнопка "Узнать о проекте"
    const aboutButton = document.querySelector('.cta-button.secondary');
    if (aboutButton) {
        aboutButton.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Кнопка "Исследовать материалы"
    const readButton = document.querySelector('.cta-button.primary');
    if (readButton) {
        readButton.addEventListener('click', function() {
            document.getElementById('articles').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Кнопка "Все публикации"
    const viewAllButton = document.querySelector('.elegant-button');
    if (viewAllButton && !viewAllButton.classList.contains('full-width')) {
        viewAllButton.addEventListener('click', function() {
            alert('В будущем здесь будет страница со всеми публикациями!');
        });
    }
    
    // Кнопка навигации "Войти"
    const navButton = document.querySelector('.nav-button');
    if (navButton) {
        navButton.addEventListener('click', function() {
            alert('Система входа будет реализована в будущем!');
        });
    }
}

// Обработчики формы
function setupFormHandlers() {
    const form = document.querySelector('.elegant-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            form.reset();
        });
    }
}

// Инициализация анимаций при загрузке
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});