# KevinSiaga_ST10532380_WEDE5020_POE
WED POE
4our.00 Website Architecture (Sitemap)
│
├── index.html (Home Page)
│   ├── Hero Section / Latest Drop
│   └── Featured Products Gallery
│
├── shop.html (Product Catalog)
│   ├── Tops (Tees, Hoodies)
│   ├── Bottoms (Cargos, Shorts)
│   └── Accessories (Caps, Bags)
│
├── about.html (Brand Story)
│   ├── Vision & Mission
│   └── Sustainability Practices
│
├── contact.html (Customer Service)
│   ├── Contact Form
│   ├── FAQs
│   └── Sizing Guide
│
└── cart.html (Checkout Flow)
    ├── Shopping Bag Review
    └── Payment Gateway

## Changelog

**2026-09-18 - Part 1 Feedback Corrections**
* Added the missing site map to clearly show the page structure (Home, Shop, About, Contact).
* Swapped out presentational tags (`<b>`, `<i>`) for correct semantic tags (`<strong>`, `<em>`) across all HTML files to improve accessibility.
* Cleaned up the `contact.html` form by removing redundant `<br>` tags so the layout can be properly controlled by CSS.
* Added clear, descriptive comments throughout all HTML files to explain the purpose of each section.

## Part 2: CSS & Responsive Design

* Set up the main `style.css` file to handle all the base fonts, colors, and global brand styling.
* Used CSS Grid to build out the product layout on the shop page and Flexbox to keep the navigation menu neat and aligned.
* Wrote media queries for mobile (480px) and tablet (768px) screens so the layout cleanly drops from multiple columns down to a single column on smaller devices.
* Swapped out fixed sizing for relative units (like `rem` and `%`) so the text and spacing scale smoothly on any screen.
* Set up the product image styling
* Updated the main navigation menu across all HTML files to include a "Cart (0)" link so users can actually access their bag.
* Created a brand new `cart.html` page to close the shopping loop, giving users a place to review their items and check out.
* Reused the existing form CSS to style the checkout form on the cart page, keeping the design consistent without needing extra code.

The complete Website will be done in part 3
