/* ========================================
   BHASKAR MOBILES PARTS
   Premium JavaScript Functionality
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all premium functions
    initThemeToggle();
    initSmoothScroll();
    initCategoryNavigation();
    initSearchFunctionality();
    initStickyHeader();
    initScrollAnimations();
    initHoverEffects();
    initCartCount();
    initIntersectionObserver();
    initParallaxEffect();
    initButtonRipples();
});

/* ========================================
   Theme Toggle (Dark/Light Mode)
   ======================================== */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.classList.add('active');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Toggle theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Toggle icon with animation
        icon.style.transform = 'rotate(180deg)';
        
        setTimeout(() => {
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
            icon.style.transform = 'rotate(0deg)';
        }, 200);
        
        // Toggle active class
        themeToggle.classList.toggle('active');
        
        // Show toast notification
        const themeName = newTheme === 'dark' ? 'Dark' : 'Light';
        showToast(`✓ Switched to ${themeName} mode`);
    });
}

/* ========================================
   Smooth Scroll
   ======================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   Category Navigation
   ======================================== */
function initCategoryNavigation() {
    const categoryItems = document.querySelectorAll('.category-item');
    const categoryContainer = document.querySelector('.category-container');

    categoryItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items with animation
            categoryItems.forEach(cat => {
                cat.classList.remove('active');
                cat.style.transform = 'scale(1)';
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            // Get category
            const category = this.dataset.category;
            console.log('Category selected:', category);
        });
    });

    // Horizontal scroll with mouse wheel
    if (categoryContainer) {
        categoryContainer.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaY) > 0) {
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }
}

/* ========================================
   Search Functionality - Premium
   ======================================== */
function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const categorySelect = document.getElementById('categorySelect');
    const searchWrapper = document.querySelector('.search-wrapper');

    // Search on button click
    searchBtn.addEventListener('click', performSearch);

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Search on category change
    categorySelect.addEventListener('change', function() {
        if (searchInput.value.trim() !== '') {
            performSearch();
        }
    });

    // Focus effects
    searchInput.addEventListener('focus', function() {
        searchWrapper.classList.add('focused');
    });

    searchInput.addEventListener('blur', function() {
        searchWrapper.classList.remove('focused');
    });

    function performSearch() {
        const query = searchInput.value.trim();
        const category = categorySelect.value;

        if (query === '') {
            // Enhanced shake animation
            searchWrapper.style.animation = 'none';
            searchWrapper.offsetHeight; // Trigger reflow
            searchWrapper.style.animation = 'shake 0.6s ease';
            searchInput.focus();
            return;
        }

        // Loading state with icon change
        const originalBtnContent = searchBtn.innerHTML;
        searchBtn.innerHTML = '<span class=\"loading-spinner\"></span>';
        searchBtn.style.opacity = '0.8';
        
        // Simulate search
        setTimeout(() => {
            searchBtn.innerHTML = originalBtnContent;
            searchBtn.style.opacity = '1';
            console.log('Searching for:', query, 'in category:', category || 'all');
            showToast(`Searching for "${query}"...`);
        }, 1000);
    }

    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
            20%, 40%, 60%, 80% { transform: translateX(6px); }
        }
    `;
    document.head.appendChild(style);
}

/* ========================================
   Sticky Header with Hide/Show
   ======================================== */
function initStickyHeader() {
    const header = document.querySelector('.top-header');
    const categoryNav = document.querySelector('.category-nav');
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', function() {
        lastScroll = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Header shadow on scroll
                if (lastScroll > 50) {
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
                } else {
                    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
                }

                // Category nav hide/show
                if (lastScroll > 300) {
                    if (lastScroll > lastScroll) {
                        categoryNav.style.transform = 'translateY(-100%)';
                    } else {
                        categoryNav.style.transform = 'translateY(0)';
                    }
                } else {
                    categoryNav.style.transform = 'translateY(0)';
                }

                ticking = false;
            });

            ticking = true;
        }
    }, { passive: true });
}

/* ========================================
   Scroll Animations - Premium
   ======================================== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.brand-card, .hero-content, .section-header');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for brand cards
                const delay = entry.target.classList.contains('brand-card') 
                    ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 0.1 
                    : 0;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * 1000);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.brand-card, .hero-content, .section-header').forEach(el => {
        observer.observe(el);
    });
}

/* ========================================
   Enhanced Hover Effects
   ======================================== */
function initHoverEffects() {
    // Button hover effects with scale
    const buttons = document.querySelectorAll('.book-now-btn, .login-btn, .become-seller-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Brand card enhanced hover
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const logo = this.querySelector('.brand-logo');
            logo.style.transform = 'scale(1.15) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const logo = this.querySelector('.brand-logo');
            logo.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Search wrapper glow effect
    const searchWrapper = document.querySelector('.search-wrapper');
    searchWrapper.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.15), 0 0 0 1px rgba(37, 99, 235, 0.1)';
    });

    searchWrapper.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
}

/* ========================================
   Cart Count Animation
   ======================================== */
function initCartCount() {
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    
    let count = 0;
    
    // Add to cart on brand card click
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            count++;
            updateCartCount(count);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    function updateCartCount(num) {
        cartCount.textContent = num;
        
        // Bounce animation
        cartCount.style.animation = 'none';
        cartCount.offsetHeight; // Trigger reflow
        cartCount.style.animation = 'cartBounce 0.4s ease';
        
        showToast('✓ Item added to cart');
    }

    // Add cart bounce animation
    const bounceStyle = document.createElement('style');
    bounceStyle.textContent = `
        @keyframes cartBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.4); }
        }
    `;
    document.head.appendChild(bounceStyle);
}

/* ========================================
   Parallax Effect for Hero
   ======================================== */
function initParallaxEffect() {
    const heroBanner = document.querySelector('.hero-banner');
    
    if (heroBanner) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < 500) {
                heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
                heroContent.style.opacity = 1 - (scrolled * 0.002);
            }
        }, { passive: true });
    }
}

/* ========================================
   Button Ripple Effect
   ======================================== */
function initButtonRipples() {
    const buttons = document.querySelectorAll('.book-now-btn, .login-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

/* ========================================
   Delivery Location - Show Only During Checkout
   ======================================== */
function showDeliveryLocation() {
    const deliveryLocation = document.getElementById('deliveryLocation');
    if (deliveryLocation) {
        deliveryLocation.style.display = 'block';
    }
}

function hideDeliveryLocation() {
    const deliveryLocation = document.getElementById('deliveryLocation');
    if (deliveryLocation) {
        deliveryLocation.style.display = 'none';
    }
}

// Auto-hide delivery location on homepage by default
// Call showDeliveryLocation() when entering checkout page

/* ========================================
   Premium Toast Notifications
   ======================================== */
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span class="toast-message">${message}</span>
    `;

    // Premium toast styles
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%) translateY(20px)',
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: '#fff',
        padding: '16px 28px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '14px',
        fontWeight: '600',
        zIndex: '10000',
        opacity: '0',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
    });

    // Icon style
    const iconStyle = document.createElement('style');
    iconStyle.textContent = `
        .toast-icon {
            width: 24px;
            height: 24px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            flex-shrink: 0;
        }
    `;
    document.head.appendChild(iconStyle);

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

/* ========================================
   Location Selection (Demo)
   ======================================== */
const locationItem = document.querySelector('.location-item');
if (locationItem) {
    locationItem.addEventListener('click', function() {
        const locations = [
            { name: 'Mumbai, 400001', city: 'Mumbai' },
            { name: 'Delhi, 110001', city: 'Delhi' },
            { name: 'Bangalore, 560001', city: 'Bangalore' },
            { name: 'Chennai, 600001', city: 'Chennai' },
            { name: 'Hyderabad, 500001', city: 'Hyderabad' }
        ];

        const currentLocation = this.querySelector('.location-name').textContent;
        const currentIndex = locations.findIndex(l => l.name === currentLocation);
        const nextIndex = (currentIndex + 1) % locations.length;

        this.querySelector('.location-name').textContent = locations[nextIndex].name;
        
        // Show toast
        showToast(`📍 Delivery location: ${locations[nextIndex].city}`);
    });
}

/* ========================================
   WhatsApp Button Handler
   ======================================== */
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
        console.log('WhatsApp chat initiated');
    });
}

/* ========================================
   Book Now Button Handler
   ======================================== */
const bookNowBtn = document.querySelector('.book-now-btn');
if (bookNowBtn) {
    bookNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const originalHTML = this.innerHTML;
        
        // Loading state
        this.innerHTML = `
            <span class="loading-dots">
                <span></span><span></span><span></span>
            </span>
            <span>Processing...</span>
        `;
        this.style.pointerEvents = 'none';
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.style.pointerEvents = 'auto';
            showToast('🔧 Redirecting to booking page...');
        }, 1500);
    });

    // Add loading dots animation
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        .loading-dots {
            display: flex;
            gap: 4px;
        }
        .loading-dots span {
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            animation: loadingPulse 1s infinite;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes loadingPulse {
            0%, 80%, 100% { opacity: 0.4; transform: scale(0.8); }
            40% { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(loadingStyle);
}

/* ========================================
   Window Resize Handler
   ======================================== */
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        const categoryContainer = document.querySelector('.category-container');
        
        if (window.innerWidth < 480) {
            categoryContainer.classList.add('compact');
        } else {
            categoryContainer.classList.remove('compact');
        }
    }, 250);
});

/* ========================================
   Preloader (Optional)
   ======================================== */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loaded class styles
    const loadedStyle = document.createElement('style');
    loadedStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadedStyle);
});