/* ==========================================================================
   4our.00 - Interactive Cart & Core Logic
   Author: Kevin Siaga
   Description: Manages cart state via local storage and handles mobile nav toggling.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Cart state from LocalStorage
    let cart = JSON.parse(localStorage.getItem('4our00_cart')) || [];
    updateCartCountUI();

    // 2. Mobile Navigation Menu Toggle Setup
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 3. Attach Event Listeners to all "Add to Cart" Buttons
    const addToCartButtons = document.querySelectorAll('.product-card button, .product-card .btn-primary');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            
            if (productCard) {
                const titleElement = productCard.querySelector('h3');
                const priceElement = productCard.querySelector('.price');
                const imageElement = productCard.querySelector('img');

                const item = {
                    id: Date.now(),
                    name: titleElement ? titleElement.textContent.trim() : 'Streetwear Product',
                    price: priceElement ? priceElement.textContent.trim() : 'R 0.00',
                    image: imageElement ? imageElement.getAttribute('src') : 'images/placeholder.jpg'
                };

                // Add to cart array & save to localStorage
                cart.push(item);
                localStorage.setItem('4our00_cart', JSON.stringify(cart));

                // Update UI Feedback
                updateCartCountUI();
                showAddedNotification(button);
            }
        });
    });

    // 4. Update Navigation Cart Link Counter
    function updateCartCountUI() {
        const cartNavLinks = document.querySelectorAll('.nav-links a[href="cart.html"]');
        cartNavLinks.forEach(link => {
            link.textContent = `Cart (${cart.length})`;
        });
    }

    // 5. Visual Button Feedback when clicked
    function showAddedNotification(button) {
        const originalText = button.textContent;
        button.textContent = 'Added ✓';
        button.style.backgroundColor = 'var(--accent-red)';
        button.style.color = '#ffffff';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 1200);
    }
});