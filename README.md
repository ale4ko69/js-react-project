<!--
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 -->

# React + Vite Starter Template

This template is a ready-to-use solution for quickly starting the development of modern React applications. It combines the most popular and effective frontend development tools.

## What's Included

### Core Technologies
- **React 18** – a modern library for building user interfaces
- **Vite** – a lightning-fast build tool providing instant startup and hot module replacement (HMR)
- **React Router v7** – routing for React apps with support for nested routes
- **Redux Toolkit** – efficient state management tool
- **SCSS** – CSS preprocessor for more convenient styling

### Additional Tools
- **ESLint** – static code analysis tool
- **Prettier** – code formatter for consistent style
- **SWC** – fast JavaScript/TypeScript compiler used in Vite

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable components
│   └── Layout.jsx   # Main application layout
├── pages/           # Page components
│   ├── About/       # "About" page with nested routes
│   ├── Contact.jsx  # Contact page
│   └── Home.jsx     # Home page
├── routes/          # Routing configuration
├── store/           # Redux store
│   ├── index.js     # Store configuration
│   └── slices/      # Redux slices
│       └── counterSlice.js  # Example counter slice
├── styles/          # SCSS styles
│   ├── about.scss   # Styles for About page
│   ├── contact.scss # Styles for Contact page
│   ├── layout.scss  # Styles for Layout component
│   └── main.scss    # Main styles and imports
└── main.jsx         # Application entry point
```

## Template Features

### Routing
The project is set up with React Router v7, including:
- Main pages (Home, About, Contact)
- Nested routes (subsections in About)
- Handling of non-existent routes (404)

### State Management
- Configured Redux store using Redux Toolkit
- Example counter slice with actions (increment, decrement, reset)
- Integration with React components via useSelector and useDispatch hooks

### Styling
- SCSS is set up for convenient styling
- Styles organized by components and pages
- Basic styling to demonstrate capabilities

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd [folder-name]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Commands

- `npm run dev` – start the project in development mode
- `npm run build` – build the project for production
- `npm run preview` – preview the production build
- `npm run lint` – check code with ESLint

## Extending Functionality

### Adding TypeScript
If you want to use TypeScript, it is recommended to switch to the corresponding template:
```bash
npm create vite@latest my-app -- --template react-ts
```

Then transfer components and settings from the current project.

### Extending ESLint
For production apps, it is recommended to use TypeScript with type-aware lint rules. See more in the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

## Why Use This Template

- **Quick start** – no need to set up basic infrastructure
- **Modern technologies** – up-to-date versions of React, Vite, and other libraries
- **Ready-made structure** – organized folder and file structure
- **Usage examples** – demonstration of routing, Redux, and SCSS
- **Optimized development** – fast compilation and hot module replacement

## License

MIT