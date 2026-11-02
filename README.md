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

## Part 3: Project Catalog & Overview of Completed Work

1. Global Architecture & Branding System

Brand Theme & Styling (style.css):
*Established a dark streetwear design system utilizing CSS root custom properties (--bg-dark, --card-bg, --accent-red, --border-color).
*Configured fluid images (max-width: 100%) and responsive layout breakpoints.
*Applied typography rules using clean modern sans-serif fonts (Inter).
*Built a uniform sticky navigation bar (.site-header) and footer across all pages.

2. Page Catalog & StructurePage
*Home Page- Hero section showcasing modern streetwear positioning, quick feature links, and responsive drop preview grid.
*Shop Catalog- Interactive multi-column product layout using CSS Grid (repeat(auto-fill, minmax(280px, 1fr))), category filter selectors, and product dynamic action triggers.
*About Page- Two-column responsive brand showcase featuring origin story, brand vision, brand values interactive cards, and lookbook media placement.
*Contact page- Professional two-column support portal with location details and custom JavaScript form validation with client-side error handling.
*Shopping cart- Dynamic cart view that reads from browser localStorage, renders added items with thumbnails, supports item removal, and calculates totals.
*References- Dedicated academic citation page formatted with Harvard Referencing.

3. Interactive Features (script.js)

*Dynamic Cart Management:
localStorage integration (4our00_cart) ensuring added items persist across page transitions.
*Mobile Viewport Navigation:
Accessible mobile navigation menu toggle (#menu-toggle) supporting standard touch breakpoints.
*Client-Side Form Validation:
Field-level validation for full name, email format (@ check), subject, and message inputs.

## Academic Referencing (Harvard Format)

Developer.mozilla.org. 2026. CSS Grid Layout - CSS: Cascading Style Sheets | MDN. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout [Accessed 2 November 2026].

Developer.mozilla.org. 2026. Window.localStorage - Web APIs | MDN. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage [Accessed 2 November 2026].

W3C Web Accessibility Initiative (WAI). 2026. Web Content Accessibility Guidelines (WCAG) Overview. [online] Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ [Accessed 2 November 2026].

W3Schools. 2026. How To Create a Responsive Navigation Menu. [online] Available at: https://www.w3.org/howto/howto_js_responsive_navbar_dropdown.asp [Accessed 2 November 2026].

W3Schools. 2026. JavaScript Form Validation. [online] Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 2 November 2026].
