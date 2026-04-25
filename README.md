# Hidden Thoughts

React frontend for the Hidden Thoughts e-commerce assignment. The storefront consumes the existing Express and MongoDB backend API in `../NodeAPI`, uses product images returned by the API, and keeps local content limited to brand story, contact UI, and decorative artwork.

## Tech Stack

- React + Vite
- React Router
- Plain CSS
- Fetch API
- localStorage cart

## Setup

1. Install frontend dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file if the backend is not on the default port:

   ```bash
   cp .env.example .env
   ```

3. Set the backend URL in `.env`:

   ```bash
   VITE_API_BASE_URL=https://htapi-00on.onrender.com
   ```

4. Start the backend in the sibling `NodeAPI` folder:

   ```bash
   cd ../NodeAPI
   npm install
   npm start
   ```

5. Start this React app:

   ```bash
   npm run dev
   ```

The frontend runs at `http://localhost:5173` by default.

## API Configuration

The API base URL is defined in `src/services/config.js`.

Current backend routes detected from `../NodeAPI/server.js`:

- `GET /api/products`
- `GET /api/products?category=Clothing`
- `GET /api/products?featured=true`
- `GET /api/products?search=print`
- `GET /api/products/:id`
- `GET /api/categories`

If the backend routes change, update the `ENDPOINTS` object in `src/services/config.js`.

## Product Images

Shop, featured, cart, related, and product detail images all come from the product API payload. The current backend field is `imageUrl`.

`src/utils/images.js` handles image paths:

- full `http` or `https` image URLs are used directly
- relative paths are prefixed with `VITE_API_BASE_URL`
- missing or broken images render a styled fallback

Local files in `public/` or `src/assets/` should only be used for decorative brand media, icons, textures, or editorial filler.

## Pages

- Home: hero, featured API products, API category preview, editorial section
- Shop: API product grid, API category filters, client-side sorting
- Product Details: API product fetch by id, image, price, description, stock, related products
- About: brand concept and project explanation
- Contact: polished frontend-only contact form
- Cart: localStorage cart with quantity, remove, clear, and subtotal

## Folder Structure

```txt
src/
  components/
  hooks/
  layouts/
  pages/
  services/
  styles/
  utils/
  App.jsx
  main.jsx
```

## Rubric Mapping

- Built with React and Vite.
- Retrieves product and category data from the existing backend API.
- Uses API-returned `imageUrl` values for product cards, featured products, details, related products, and cart items.
- Includes loading, error, and empty states on API-driven pages.
- Includes storefront pages expected for an e-commerce submission.
- Uses a responsive dark editorial visual identity for the Hidden Thoughts brand.
- Keeps contact/about content local because the current backend has no contact or brand-story endpoint.

Important backend note: the detected backend has one MongoDB `Product` model and a static `/api/categories` endpoint. The frontend consumes both endpoints faithfully instead of inventing extra backend data.

## Verification

Run these checks before submission:

```bash
npm run build
npm run lint
```

With both servers running, confirm:

- Home loads featured products.
- Shop loads all products and category filters.
- Product detail pages open from product cards.
- Product images render from API data or show the fallback.
- Cart persists after refresh.
- Mobile layout remains readable.
