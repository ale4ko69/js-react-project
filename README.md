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
├── assets/               # Static assets (images, icons)
├── components/           # Reusable components
│   └── Layout.jsx        # Main application layout
├── hooks/                # Custom React hooks
│   └── useFetchData.js   # Hook for fetching data from API
├── pages/                # Page components
│   ├── Technologies/     # "About Technologies" page with nested routes
│   ├── Contact.jsx       # Contact page
│   ├── Home.jsx          # Home page
│   └── ReactHooks/       # Example React Hooks demonstration page
│       ├── index.jsx     # Component implementation
│       └── ReactHooks.module.scss # Component styles
├── routes/               # Routing configuration
├── store/                # Redux store
│   ├── index.js          # Store configuration
│   └── slices/           # Redux slices
│       └── counterSlice.js  # Example counter slice
├── styles/               # SCSS styles
│   ├── about.scss        # Styles for About page
│   ├── contact.scss      # Styles for Contact page
│   ├── layout.scss       # Styles for Layout component
│   └── main.scss         # Main styles
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

### Custom React Hooks
- `useFetchData`: A reusable hook for fetching data from APIs
  - Handles loading states
  - Error handling
  - Data caching
  - Supports manual refresh functionality

### React Hooks Demonstration
The project includes a comprehensive example of React Hooks usage:
- `ReactHooks` page demonstrates:
  - Custom hooks implementation
  - useState for local state management
  - useCallback for performance optimization
  - Data filtering functionality
  - Conditional rendering based on state
  - Integration with SCSS modules for styling

### Styling
- SCSS is set up for convenient styling
- SCSS modules for component-scoped styles
- Styles organized by components and pages
- Basic styling to demonstrate capabilities

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd [folder-name]

