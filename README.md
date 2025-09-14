# ShoppyGlobe E-commerce Application

A modern, responsive e-commerce application built with React, Vite, Redux Toolkit, and React Router.

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shreyakshirsagar/ShoppyGlobe.git
cd shoppyglobe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── ProductList.jsx # Product listing page
│   ├── ProductItem.jsx # Individual product card
│   ├── ProductDetail.jsx # Product detail page
│   ├── Cart.jsx        # Shopping cart page
│   ├── CartItem.jsx    # Individual cart item
│   ├── Checkout.jsx    # Checkout form
│   ├── NotFound.jsx    # 404 error page
│   └── ...            # Other components
├── store/              # Redux store configuration
│   ├── store.js        # Store setup
│   └── slices/         # Redux slices
│       ├── cartSlice.js    # Cart state management
│       └── searchSlice.js  # Search state management
├── hooks/              # Custom React hooks
│   ├── useProducts.js      # Product data fetching
│   └── useProductDetail.js # Product detail fetching
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```
