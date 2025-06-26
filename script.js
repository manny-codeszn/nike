// DOM Elements
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const buyButtons = document.querySelectorAll(".buyButton");
const cartCount = document.getElementById("cartCount");
const cartNotification = document.getElementById("cartNotification");
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const productBtn = document.getElementById("productBtn");

// State
let currentSlide = 0;
let cart = [];
let selectedColor = 'black';
let selectedSize = null;

// Slider functionality
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
        updateActiveMenuItem();
    });
});

function updateSlider() {
    wrapper.style.transform = `translateX(${-100 * currentSlide}vw)`;
}

function updateActiveMenuItem() {
    menuItems.forEach((item, index) => {
        if (index === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Auto-advance slider
setInterval(() => {
    currentSlide = (currentSlide + 1) % 5;
    updateSlider();
    updateActiveMenuItem();
}, 5000);

// Cart functionality
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            name: button.dataset.product,
            price: button.dataset.price,
            image: button.closest('.sliderItem').querySelector('.sliderImage').src
        };
        addToCart(product);
    });
});

function addToCart(product) {
    cart.push(product);
    updateCartCount();
    showCartNotification();
}

function updateCartCount() {
    cartCount.textContent = cart.length;
    if (cart.length > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

function showCartNotification() {
    cartNotification.style.display = 'block';
    setTimeout(() => {
        cartNotification.style.display = 'none';
    }, 2000);
}

// Color selection
colors.forEach(color => {
    color.addEventListener("click", () => {
        colors.forEach(c => c.classList.remove('selected'));
        color.classList.add('selected');
        selectedColor = color.dataset.color;
        checkProductSelection();
    });
});

// Size selection
sizes.forEach(size => {
    size.addEventListener("click", () => {
        sizes.forEach(s => s.classList.remove('selected'));
        size.classList.add('selected');
        selectedSize = size.dataset.size;
        checkProductSelection();
    });
});

function checkProductSelection() {
    if (selectedSize) {
        productBtn.disabled = false;
    } else {
        productBtn.disabled = true;
    }
}

// Product button functionality
productBtn.addEventListener("click", () => {
    if (selectedSize) {
        const product = {
            name: 'Air Force',
            price: '£120',
            image: './img/sneakers/air force.png',
            size: selectedSize,
            color: selectedColor
        };
        addToCart(product);
    }
});

// Search functionality
const searchInput = document.querySelector(".searchInput");
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // You can implement search functionality here
    console.log("Searching for:", searchTerm);
});

// Smooth scrolling for footer links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
updateCartCount();