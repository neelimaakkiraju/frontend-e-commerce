# E-Commerce Frontend

Concise React + Tailwind CSS e-commerce frontend.

## Project Structure

# E-Commerce Frontend

<p><b>Modern React + Tailwind CSS e-commerce frontend</b> — fast, responsive, and easy to extend.</p>

<p>
<img src="https://img.shields.io/badge/React-18.x-61dafb?logo=react" />
<img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss" />
<img src="https://img.shields.io/badge/Redux-Toolkit-764abc?logo=redux" />
<img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## Features

| Feature            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| 🛒 Product Listing | Browse all products on the Home page                      |
| 🔍 Product Detail  | View details, images, and price for each product          |
| 🛍️ Cart            | Add/remove products, view cart summary, update quantities |
| 💳 Checkout        | Simple checkout page for order review                     |
| 💾 Local Cache     | Fast product caching with custom React hook               |
| ⏳ Loading States  | Loading indicator for async actions                       |
| 📱 Responsive UI   | Mobile-first, built with Tailwind CSS                     |
| ⚡ Fast & Modern   | Optimized for performance and developer experience        |

---

## Demo Mode

No backend? No problem!

This app can be run in demo mode with mock product data:

- Instantly loads sample products for testing and development
- No API keys or backend required
- No errors, just a smooth experience

---

## Tech Stack

| Layer     | Technology                     |
| --------- | ------------------------------ |
| Framework | React 18, Create React App     |
| Styling   | Tailwind CSS 3                 |
| State     | Redux Toolkit                  |
| API       | Custom fetch (productsApis.js) |
| Testing   | Jest, React Testing Library    |
| Tooling   | ESLint, Prettier               |

---

## Project Structure

frontend-e-commerce/
├── package.json # Project dependencies & scripts
├── tailwind.config.js # Tailwind CSS configuration
├── public/ # Static assets (HTML, manifest, robots)
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src/ # Source code
│ ├── App.js # Main app component
│ ├── App.css # App styles
│ ├── index.js # Entry point
│ ├── api/
│ │ └── productsApis.js # Product API calls
│ ├── components/ # Reusable UI components
│ │ ├── Header.jsx # App header
│ │ ├── Loading.jsx # Loading spinner
│ │ └── ProductCard.jsx # Product display card
│ ├── hooks/
│ │ └── useLocalCache.js # Local cache hook
│ ├── pages/ # App pages
│ │ ├── Cart.jsx # Cart page
│ │ ├── Checkout.jsx # Checkout page
│ │ ├── Home.jsx # Home/product list
│ │ └── Product.jsx # Product detail
│ └── store/ # Redux store & slices
│ ├── cartSlice.js # Cart state
│ ├── productSlice.js # Product state
│ └── index.js # Store setup

---

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| npm start     | Start development server |
| npm test      | Run tests                |
| npm run build | Build for production     |

---

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
