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

```bash
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
```

## Internationalization (i18n)

The project has been enhanced with full internationalization support:

### Key Features

- **Multi-language Support** – English and Russian languages included by default
- **i18next Integration** – Powerful internationalization framework with React bindings
- **Language Detection** – Automatic detection of user's preferred language
- **Language Switching** – User-friendly language switcher component
- **Translation Caching** – Efficient caching of translations in localStorage
- **Date and Time Formatting** – Custom formatting for dates and times based on selected language

### i18n Structure

```bash
public/
└── locales/           # Translation files
    ├── en/            # English translations
    │   └── translation.json
    └── ru/            # Russian translations
        └── translation.json
```

### Components

- **LanguageSwitcher** – Component for changing the application language
- **WelcomeWithDate** – Demonstrates date and time formatting with i18n
- **HtmlToTag** – Utility component for rendering HTML content from translations

### Usage Examples

#### Basic Translation

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
	const { t } = useTranslation();

	return <h1>{t("home.title")}</h1>;
}
```

#### Date and Time Formatting

```jsx
import { useTranslation } from "react-i18next";

function DateTimeExample() {
	const { t } = useTranslation();
	const currentDate = new Date();

	return (
		<div>
			{t("home.welcome", {
				date: currentDate,
				time: currentDate,
			})}
		</div>
	);
}
```

## VS Code Configuration

The project includes a VS Code workspace configuration file (`js-react-project.code-workspace`) with the following settings:

```javascript
// Essential tools for React development
("dbaeumer.vscode-eslint", // ESLint for code checking
	"esbenp.prettier-vscode", // Prettier for code formatting
	"editorconfig.editorconfig", // EditorConfig support
	// Automation and productivity
	"formulahendry.auto-close-tag", // Auto-closing of tags
	"formulahendry.auto-rename-tag", // Automatic renaming of tags
	"christian-kohler.path-intellisense", // Path autocompletion
	"christian-kohler.npm-intellisense", // Autocompletion of npm packages
	"steoates.autoimport", // Automatic import
	// Styling and CSS
	"bradlc.vscode-tailwindcss", // Tailwind CSS support
	"pranaygp.vscode-css-peek", // View CSS definitions
	// Improving code management
	"aaron-bond.better-comments", // Improved comments
	"intellsmi.comment-translate", // Translation of comments
	"alefragnani.bookmarks", // Bookmarks in the code
	"bierner.markdown-preview-github-styles", // Markdown preview in GitHub style
	"chouzz.vscode-better-align", // Improved code alignment
	"danielcanada.align-imports", // Alignment of imports in the code
	"ldez.ignore-files", // Support for .gitignore files and similar ones
	// Visual improvements
	"vscode-icons-team.vscode-icons", // File and folder icons
	"anseki.vscode-color", // Choosing flowers
	"bierner.color-info"); // Information about flowers
```
