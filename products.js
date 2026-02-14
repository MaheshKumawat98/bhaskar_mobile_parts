// ========================================
// Products Page JavaScript
// ========================================

// Product Data Array
const productsData = [
    // Mobile Combo Products
    {
        id: 1,
        name: "iPhone 13 Pro Max Display Combo",
        category: "combo",
        compatibility: "Apple iPhone 13 Pro Max",
        price: 8500,
        originalPrice: 12000,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Samsung Galaxy S21 Display Combo",
        category: "combo",
        compatibility: "Samsung Galaxy S21",
        price: 5200,
        originalPrice: 8000,
        image: "https://images.unsplash.com/photo-1610945064526-0e34e5519bbf?w=300&h=300&fit=crop",
        badge: "Hot"
    },
    {
        id: 3,
        name: "OnePlus 9R Display Combo",
        category: "combo",
        compatibility: "OnePlus 9R",
        price: 4800,
        originalPrice: 7500,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 4,
        name: "Xiaomi Mi 11 Display Combo",
        category: "combo",
        compatibility: "Xiaomi Mi 11",
        price: 4200,
        originalPrice: 6500,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop",
        badge: "Sale"
    },

    // Touch Products
    {
        id: 5,
        name: "iPhone 12 Touch Screen Digitizer",
        category: "touch",
        compatibility: "Apple iPhone 12",
        price: 2800,
        originalPrice: 4500,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 6,
        name: "Samsung A52 Touch Screen",
        category: "touch",
        compatibility: "Samsung Galaxy A52",
        price: 1800,
        originalPrice: 3200,
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=300&h=300&fit=crop",
        badge: "Best Value"
    },
    {
        id: 7,
        name: "Redmi Note 10 Touch Screen",
        category: "touch",
        compatibility: "Xiaomi Redmi Note 10",
        price: 1200,
        originalPrice: 2200,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 8,
        name: "Realme 8 Touch Screen Digitizer",
        category: "touch",
        compatibility: "Realme 8",
        price: 1100,
        originalPrice: 2000,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
        badge: "Sale"
    },

    // Glass Products
    {
        id: 9,
        name: "iPhone 13 Tempered Glass (3D)",
        category: "glass",
        compatibility: "Apple iPhone 13",
        price: 350,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
        badge: "Premium"
    },
    {
        id: 10,
        name: "Samsung S21 Tempered Glass",
        category: "glass",
        compatibility: "Samsung Galaxy S21",
        price: 299,
        originalPrice: 699,
        image: "https://images.unsplash.com/photo-1586942593568-29361efcd571?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 11,
        name: "OnePlus 9 Privacy Glass",
        category: "glass",
        compatibility: "OnePlus 9",
        price: 399,
        originalPrice: 899,
        image: "https://images.unsplash.com/photo-1556656793-02774a8c577a?w=300&h=300&fit=crop",
        badge: "New"
    },
    {
        id: 12,
        name: "Vivo Y21 Tempered Glass",
        category: "glass",
        compatibility: "Vivo Y21",
        price: 199,
        originalPrice: 499,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop",
        badge: null
    },

    // Charging PCB Products
    {
        id: 13,
        name: "iPhone 11 Charging PCB Board",
        category: "pcb",
        compatibility: "Apple iPhone 11",
        price: 1500,
        originalPrice: 2800,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
        badge: "Original"
    },
    {
        id: 14,
        name: "Samsung M31 Charging PCB",
        category: "pcb",
        compatibility: "Samsung Galaxy M31",
        price: 800,
        originalPrice: 1500,
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 15,
        name: "Redmi Note 10 Charging Board",
        category: "pcb",
        compatibility: "Xiaomi Redmi Note 10",
        price: 650,
        originalPrice: 1200,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 16,
        name: "Oppo A54 Charging PCB",
        category: "pcb",
        compatibility: "Oppo A54",
        price: 550,
        originalPrice: 1100,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop",
        badge: null
    },

    // Battery Products
    {
        id: 17,
        name: "iPhone 13 Pro Max Battery",
        category: "battery",
        compatibility: "Apple iPhone 13 Pro Max",
        price: 2500,
        originalPrice: 4500,
        image: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=300&h=300&fit=crop",
        badge: "Original"
    },
    {
        id: 18,
        name: "Samsung S20 FE Battery",
        category: "battery",
        compatibility: "Samsung Galaxy S20 FE",
        price: 1800,
        originalPrice: 3200,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 19,
        name: "OnePlus Nord Battery",
        category: "battery",
        compatibility: "OnePlus Nord",
        price: 1400,
        originalPrice: 2500,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        badge: "Best Value"
    },
    {
        id: 20,
        name: "Realme C21 Battery",
        category: "battery",
        compatibility: "Realme C21",
        price: 650,
        originalPrice: 1200,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
        badge: "Sale"
    },
    {
        id: 21,
        name: "Vivo Y20 Battery",
        category: "battery",
        compatibility: "Vivo Y20",
        price: 700,
        originalPrice: 1300,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
        badge: null
    },

    // Mobile Cover Products
    {
        id: 22,
        name: "iPhone 13 Silicone Cover - Black",
        category: "cover",
        compatibility: "Apple iPhone 13",
        price: 499,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
        badge: "Premium"
    },
    {
        id: 23,
        name: "Samsung S21 Ultra Clear Case",
        category: "cover",
        compatibility: "Samsung Galaxy S21 Ultra",
        price: 399,
        originalPrice: 899,
        image: "https://images.unsplash.com/photo-1586942593568-29361efcd571?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 24,
        name: "OnePlus 9T Rugged Case",
        category: "cover",
        compatibility: "OnePlus 9/9T",
        price: 349,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1556656793-02774a8c577a?w=300&h=300&fit=crop",
        badge: "New"
    },
    {
        id: 25,
        name: "Xiaomi Poco X3 Back Cover",
        category: "cover",
        compatibility: "Xiaomi Poco X3",
        price: 249,
        originalPrice: 599,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
        badge: "Sale"
    },

    // Speakers Products
    {
        id: 26,
        name: "iPhone 12 Speaker Replacement",
        category: "speakers",
        compatibility: "Apple iPhone 12",
        price: 800,
        originalPrice: 1500,
        image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?w=300&h=300&fit=crop",
        badge: "Original"
    },
    {
        id: 27,
        name: "Samsung A51 Speaker",
        category: "speakers",
        compatibility: "Samsung Galaxy A51",
        price: 450,
        originalPrice: 900,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 28,
        name: "Redmi Note 9 Speaker",
        category: "speakers",
        compatibility: "Xiaomi Redmi Note 9",
        price: 350,
        originalPrice: 700,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
        badge: "Best Value"
    },
    {
        id: 29,
        name: "Realme 7 Speaker Replacement",
        category: "speakers",
        compatibility: "Realme 7",
        price: 300,
        originalPrice: 600,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop",
        badge: null
    },

    // Charging Jack Products
    {
        id: 30,
        name: "iPhone 14 Charging Jack",
        category: "jack",
        compatibility: "Apple iPhone 14",
        price: 1200,
        originalPrice: 2200,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop",
        badge: "Original"
    },
    {
        id: 31,
        name: "Samsung S20 Charging Port",
        category: "jack",
        compatibility: "Samsung Galaxy S20",
        price: 650,
        originalPrice: 1300,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 32,
        name: "OnePlus 8T Charging Jack",
        category: "jack",
        compatibility: "OnePlus 8T",
        price: 550,
        originalPrice: 1100,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 33,
        name: "Vivo Y12 Charging Port",
        category: "jack",
        compatibility: "Vivo Y12/Y15",
        price: 350,
        originalPrice: 700,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
        badge: null
    },
    {
        id: 34,
        name: "Oppo F19 Charging pcb",
        category: "jack",
        compatibility: "Oppo F19",
        price: 400,
        originalPrice: 800,
        image: "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/847/848/detailed/5525/charging_connector_flex_pcb_board_for_oppo_f19_by_maxbhi_com_93577.jpg?t=1731780510",
        badge: "New"
    }
];

// Category display names
const categoryNames = {
    combo: "Mobile Combo",
    touch: "Touch Screen",
    glass: "Tempered Glass",
    pcb: "Charging PCB",
    battery: "Battery",
    cover: "Mobile Cover",
    speakers: "Speakers",
    jack: "Charging Jack"
};

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const productsCount = document.getElementById('productsCount');
const noProducts = document.getElementById('noProducts');

// Get category from URL
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

// Filter products by category
function filterProducts(category) {
    if (!category || category === 'all') {
        return productsData;
    }
    return productsData.filter(product => product.category === category);
}

// Create product card HTML
function createProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return `
        <div class="product-card">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=Product+Image'">
            </div>
            <div class="product-info">
                <span class="product-category">${categoryNames[product.category] || product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-compatibility">${product.compatibility}</p>
                <div class="product-price">
                    <div>
                        <span class="product-price-original">₹${product.originalPrice}</span>
                        <div class="product-price-sale"><span class="currency">₹</span>${product.price}</div>
                    </div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Render products
function renderProducts() {
    const category = getCategoryFromURL();
    const filteredProducts = filterProducts(category);
    
    // Update title
    if (category && category !== 'all') {
        categoryTitle.innerHTML = `${categoryNames[category] || category} <span class="category-badge">${filteredProducts.length} Products</span>`;
    } else {
        categoryTitle.textContent = 'All Products';
    }
    
    // Update count
    productsCount.textContent = `Showing ${filteredProducts.length} products`;
    
    // Check if products exist
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noProducts.style.display = 'block';
        return;
    }
    
    // Show products grid
    productsGrid.style.display = 'grid';
    noProducts.style.display = 'none';
    
    // Render products
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Add to cart function
function addToCart(productId) {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent) || 0;
    count++;
    cartCount.textContent = count;
    
    // Animation
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
    
    // Show toast
    showToast('Product added to cart!');
}

// Toast notification
function showToast(message) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span class="toast-message">${message}</span>
    `;
    
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
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
        animation: 'slideUpFade 0.4s ease',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    });
    
    const style = document.createElement('style');
    style.textContent = `
        .toast-icon {
            width: 24px;
            height: 24px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        @keyframes slideUpFade {
            from { opacity: 0; transform: translateX(-50%) translateY(20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initThemeToggle();
});