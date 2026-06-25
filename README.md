# 🚀 Frontend Performance Optimization using React + Core Web Vitals

This project demonstrates how to identify, analyze, and optimize **Core Web Vitals (CWV)** in a **React + TypeScript + Vite** application.

The application was intentionally built with several frontend performance issues such as large images, layout shifts, blocking JavaScript, and poor loading strategies. These issues were analyzed using **Google Lighthouse** and optimized using modern frontend performance best practices.

---

# 🎯 Main Objective

The primary goal of this project is to improve the application's loading performance and user experience by optimizing **Core Web Vitals**.

## 📈 Performance Improvement

| Version | Lighthouse Performance Score |
|----------|-----------------------------:|
| Before Optimization | **8** |
| After Optimization | **100** |

---

# 🌟 Features

- Responsive React Application
- Hero Banner
- Article Grid
- Trending Sidebar
- Skeleton Loading
- Infinite Scroll
- Advertisement Banner
- Core Web Vitals Optimization
- Google Lighthouse Testing
- Bundle Analysis

---

# 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Web Vitals
- Google Lighthouse
- Rollup Plugin Visualizer
- Sharp CLI
- Lodash

---

# ⚡ Performance Optimizations Implemented

## 🖼️ Hero Image Optimization

- Converted Hero image from PNG to WebP
- Added image preload
- Added width & height attributes
- Used `fetchPriority="high"`
- Enabled asynchronous image decoding

---

## 🖼️ Image Optimization

- Added width & height attributes
- Implemented lazy loading for article images
- Reduced unnecessary layout shifts

---

## 📐 Layout Shift (CLS) Optimization

- Reserved advertisement banner space
- Eliminated unexpected page movement
- Improved visual stability

---

## ⚙️ JavaScript Optimization

- Removed heavy blocking tasks
- Deferred analytics initialization
- Reduced initial rendering delay

---

## 🔤 Font Optimization

- Added Google Fonts preconnect
- Loaded fonts asynchronously
- Enabled `display=swap`

---

## 📦 Bundle Optimization

- Installed Rollup Plugin Visualizer
- Generated bundle analysis report
- Optimized production bundle

---

# 📊 Lighthouse Results

| Metric | Before | After |
|--------|-------:|------:|
| Performance | **8** | **100** |

---

# 📷 Screenshots

## 🔴 Before Optimization (Performance Score: 8)

![Before Lighthouse](./screenshots/lighthouse-before.png)

---

## 🟢 After Optimization (Performance Score: 100)

![After Lighthouse](./screenshots/lighthouse-after.png)

---

## 📈 Bundle Analysis Report

![Bundle Analysis](./screenshots/bundle-analysis.png)

---

# 📦 Installation

## Clone the Repository

```bash
git clone https://github.com/saiyasaswi-685/REACT-CWV-TASK.git
```

## Navigate to the Project

```bash
cd REACT-CWV-TASK
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open your browser:

```
http://localhost:5173
```

---

# 🏗️ Production Build

Build the application

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

Open

```
http://localhost:4173
```

---

# 📥 NPM Packages Used

## Create Project

```bash
npm create vite@latest
```

## Install Project Dependencies

```bash
npm install
```

## Install Web Vitals

```bash
npm install web-vitals
```

## Install Performance Optimization Tools

```bash
npm install sharp-cli rollup-plugin-visualizer --save-dev
```

---

# 🧪 Testing Guide

## 1️⃣ Development Testing

Run

```bash
npm run dev
```

Verify:

- Hero image loads successfully
- 12 article cards are displayed
- Sidebar is visible
- Skeleton loader appears
- Infinite Scroll section appears
- Advertisement banner appears

---

## 2️⃣ Production Build Testing

Run

```bash
npm run build
```

Verify:

- Build completes successfully
- No build errors
- Production files are generated successfully

---

## 3️⃣ Production Preview

Run

```bash
npm run preview
```

Open

```
http://localhost:4173
```

Verify that the production application works correctly.

---

## 4️⃣ Lighthouse Testing

1. Open Chrome
2. Press **F12**
3. Navigate to **Lighthouse**
4. Select:

- Desktop
- Performance

5. Click

```
Analyze page load
```

Expected Result

```
Performance Score = 100
```

---

## 5️⃣ Bundle Analysis

Run

```bash
npm run build
```

The following file will be generated:

```
bundle-stats.html
```

Open the file in your browser to visualize the JavaScript bundle size and module distribution.

---

# 📂 Project Structure

```
REACT-CWV-TASK
│
├── public
│   ├── hero.png
│   ├── hero.webp
│   ├── favicon.svg
│   └── icons.svg
│
├── screenshots
│   ├── lighthouse-before.png
│   ├── lighthouse-after.png
│   └── bundle-analysis.png
│
├── src
│   ├── components
│   ├── data
│   ├── App.tsx
│   ├── main.tsx
│   ├── reportVitals.ts
│   └── index.css
│
├── bundle-stats.html
├── README.md
├── package.json
├── vite.config.ts
└── .gitignore
```

---

# 👩‍💻 Author

**Saiyasaswi**

GitHub Profile:

https://github.com/saiyasaswi-685

Project Repository:

https://github.com/saiyasaswi-685/REACT-CWV-TASK

---

# 🏆 Final Result

Successfully improved the **Google Lighthouse Performance Score** from

```
8  →  100
```

This project demonstrates practical implementation of modern frontend performance optimization techniques including:

- Core Web Vitals Optimization
- Image Optimization
- Lazy Loading
- Bundle Analysis
- JavaScript Optimization
- Layout Shift Prevention
- Font Optimization
- Production Performance Testing

---

⭐ If you found this project useful, feel free to star the repository.