# ForkCasted

ForkCasted is a Next.js-based web application that allows users to browse and discover various recipes across different categories.

## Features

- Browse recipes by categories (Breakfast, Pasta, Vegan, Sides, Chicken, Beef, etc.)
- Search functionality for finding specific recipes
- Detailed view for each recipe category
- Responsive design for various devices

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `pages/`: Contains the main pages of the application
  - `index.tsx`: Home page with category overview
  - `recipes/category/[category].tsx`: Dynamic page for each recipe category
- `components/`: Reusable React components (e.g., HeroCard, Loading, CategoriesNav)
- `styles/`: CSS modules for styling (e.g., Home.module.scss, category.module.scss)
- `assets/`: Static assets like images

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for production
- [React](https://reactjs.org/): JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript
- [React Query](https://react-query.tanstack.com/): For managing server state
- [SASS](https://sass-lang.com/): For enhanced CSS styling

## Environment Variables

The project uses the following environment variable:

- `NEXT_PUBLIC_API_URL`: The base URL for the recipe API

Ensure this is set in your `.env.local` file or deployment environment.
