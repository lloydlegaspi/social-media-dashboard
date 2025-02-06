# 🗃️ Social Media Dashboard with Theme Switcher
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm](https://img.shields.io/npm/v/npm.svg)

A responsive social media dashboard with a dark/light theme switcher built using HTML, SCSS, and JavaScript. This project was completed as a challenge from Frontend Mentor. The goal was to replicate the design as closely as possible while maintaining responsive and accessible UI elements.

## 🌐 Live Site  
[Social Media Dashboard](https://social-media-dashboard-lloyd.netlify.app/)

## 🔘 Table of Contents
1. 🔄 [Preview](#-preview)
2. 📄 [Challenge](#-challenge)
3. 💸 [Features](#-features)
4. 🔧 [Technology Used](#-technology-used)
5. 📂 [Project Structure](#-project-structure)
6. 📖 [How to Run](#-how-to-run)
7. 🤝 [Browser Support](#-browser-support)
8. 📄 [Credits](#-credits)

## 🔄 Preview
![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

## 📄 Challenge 

The challenge involved building a Social Media Dashboard with a theme switcher feature. The key requirements were:

- Implementing a responsive design to ensure optimal layout across different screen sizes.
- Incorporating hover states for all interactive elements.
- Enabling users to toggle between color themes according to their preference.

## 💸 Features
- Responsive layout that adapts to different screen sizes
- Interactive dark/light theme toggle
- Color theme respects system preferences by default
- Hover states for interactive elements
- Accessible toggle controls using semantic HTML
- CSS Grid and Flexbox for layout
- SCSS with organized architecture (7-1 pattern)
- Gulp build system for SCSS and JS compilation

## 🔧 Technology Used
- **HTML5:** Markup for structuring the page.
- **SCSS (7-1 Architecture):** Organized and maintainable stylesheets.
- **JavaScript (ES6+):** Theme switcher logic and interactivity.
- **Gulp:** Task runner for build automation.
- **PostCSS:** Autoprefixer and CSS optimization.
-  **Babel:** ES6+ compatibility.
-  **BrowserSync:** Live reloading during development.

## 📂 Project Structure
```
app/
  ├── js/
  │   └── script.js
  └── scss/
      ├── components/
      ├── globals/
      ├── util/
      └── style.scss
dist/
  ├── style.css
  └── script.js
```

## 📖 How to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-directory
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   gulp
   ```
4. Open the project in your browser at `http://localhost:3000`.

## 🤝 Browser Support
The project uses Autoprefixer to ensure compatibility with modern browsers.

## 📄 Credits
Challenge by Frontend Mentor
Coded by John Lloyd Legaspi
