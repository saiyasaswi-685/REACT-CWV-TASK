# 🚀 Frontend Performance Optimization (Core Web Vitals)

## 📌 Project Overview

This project demonstrates how to identify, analyze, and optimize **Core Web Vitals (CWV)** in a React + TypeScript + Vite application.

The application was intentionally built with several performance issues such as:

* Large unoptimized images
* Layout shifts (CLS)
* Blocking JavaScript execution
* Poor loading strategy
* Heavy bundle size

These issues were identified using **Google Lighthouse** and then fixed using modern frontend optimization techniques.

---

# 🎯 Main Objective

The primary goal of this project is to improve the Lighthouse Performance score by optimizing the application's loading performance and user experience.

### Before Optimization

* Performance Score: **8**

### After Optimization

* Performance Score: **100**

---

# 🛠️ Tech Stack

* React
* TypeScript
* Vite
* Web Vitals
* Lighthouse
* Rollup Plugin Visualizer
* Sharp CLI
* Lodash

---

# ✨ Optimizations Implemented

## ✅ Hero Image Optimization

* Converted PNG → WebP
* Added preload
* Added width & height
* Used `fetchPriority="high"`
* Enabled async image decoding

---

## ✅ Image Optimization

* Added width and height attributes
* Lazy loading for article thumbnails

---

## ✅ Layout Shift (CLS) Fix

* Reserved advertisement banner space
* Prevented layout movement during page load

---

## ✅ JavaScript Optimization

* Removed heavy blocking task
* Deferred analytics initialization
* Reduced loading delay

---

## ✅ Font Optimization

* Added Google Fonts preconnect
* Used asynchronous font loading
* Enabled `display=swap`

---

## ✅ Bundle Optimization

* Installed Rollup Plugin Visualizer
* Generated bundle analysis report

---

## 📊 Lighthouse Performance

| Version             | Performance Score |
| ------------------- | ----------------: |
| Before Optimization |                 8 |
| After Optimization  |               100 |

---

# 📷 Screenshots

## 🔴 Before Optimization

![Before Lighthouse](./screenshots/Screenshot%202026-06-24%20225728.png)

---

## 🟢 After Optimization

![After Lighthouse](./screenshots/Screenshot%202026-06-25%20161857.png)

---

## 📈 Bundle Analysis Report

![Bundle Visualizer](./screenshots/Screenshot%202026-06-24%20230111.png)

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/saiyasaswi-685/REACT-CWV-TASK.git
```

Go to the project directory

```bash
cd REACT-CWV-TASK
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

# 🏗️ Production Build

Build the application

```bash
npm run build
```

Preview production build

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

---

## Install Dependencies

```bash
npm install
```

---

## Install Web Vitals

```bash
npm install web-vitals
```

---

## Install Performance Tools

```bash
npm install sharp-cli rollup-plugin-visualizer --save-dev
```

---

# 🧪 Testing

## Development Server

```bash
npm run dev
```

Verify:

* Hero image loads correctly
* 12 article cards are visible
* Sidebar appears
* Skeleton loader appears
* Infinite scroll section appears
* Advertisement banner appears

---

## Production Build

```bash
npm run build
```

Verify:

* Build completes successfully
* No build errors

---

## Production Preview

```bash
npm run preview
```

Open

```
http://localhost:4173
```

---

## Lighthouse Testing

1. Open Chrome
2. Press **F12**
3. Open **Lighthouse**
4. Select

* Desktop
* Performance

5. Click

```
Analyze page load
```

Expected Result

```
Performance Score = 100
```

---

## Bundle Analysis

After running

```bash
npm run build
```

A file named

```
bundle-stats.html
```

is generated.

Open it in your browser to analyze the JavaScript bundle.

---

# 📂 Project Structure

```
REACT-CWV-TASK
│
├── public
├── screenshots
├── src
│   ├── components
│   ├── data
│   ├── App.tsx
│   ├── main.tsx
│   └── reportVitals.ts
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

GitHub:
https://github.com/saiyasaswi-685

---

# ⭐ Result

✅ Lighthouse Performance Improved

```
8  →  100
```

Successfully optimized Core Web Vitals using modern frontend performance best practices.
# 🚀 Frontend Performance Optimization (Core Web Vitals)

## 📌 Project Overview

This project demonstrates how to identify, analyze, and optimize **Core Web Vitals (CWV)** in a React + TypeScript + Vite application.

The application was intentionally built with several performance issues such as:

* Large unoptimized images
* Layout shifts (CLS)
* Blocking JavaScript execution
* Poor loading strategy
* Heavy bundle size

These issues were identified using **Google Lighthouse** and then fixed using modern frontend optimization techniques.

---

# 🎯 Main Objective

The primary goal of this project is to improve the Lighthouse Performance score by optimizing the application's loading performance and user experience.

### Before Optimization

* Performance Score: **8**

### After Optimization

* Performance Score: **100**

---

# 🛠️ Tech Stack

* React
* TypeScript
* Vite
* Web Vitals
* Lighthouse
* Rollup Plugin Visualizer
* Sharp CLI
* Lodash

---

# ✨ Optimizations Implemented

## ✅ Hero Image Optimization

* Converted PNG → WebP
* Added preload
* Added width & height
* Used `fetchPriority="high"`
* Enabled async image decoding

---

## ✅ Image Optimization

* Added width and height attributes
* Lazy loading for article thumbnails

---

## ✅ Layout Shift (CLS) Fix

* Reserved advertisement banner space
* Prevented layout movement during page load

---

## ✅ JavaScript Optimization

* Removed heavy blocking task
* Deferred analytics initialization
* Reduced loading delay

---

## ✅ Font Optimization

* Added Google Fonts preconnect
* Used asynchronous font loading
* Enabled `display=swap`

---

## ✅ Bundle Optimization

* Installed Rollup Plugin Visualizer
* Generated bundle analysis report

---

## 📊 Lighthouse Performance

| Version             | Performance Score |
| ------------------- | ----------------: |
| Before Optimization |                 8 |
| After Optimization  |               100 |

---

# 📷 Screenshots

## 🔴 Before Optimization

![Before Lighthouse](./screenshots/Screenshot%202026-06-24%20225728.png)

---

## 🟢 After Optimization

![After Lighthouse](./screenshots/Screenshot%202026-06-25%20161857.png)

---

## 📈 Bundle Analysis Report

![Bundle Visualizer](./screenshots/Screenshot%202026-06-24%20230111.png)

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/saiyasaswi-685/REACT-CWV-TASK.git
```

Go to the project directory

```bash
cd REACT-CWV-TASK
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

# 🏗️ Production Build

Build the application

```bash
npm run build
```

Preview production build

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

---

## Install Dependencies

```bash
npm install
```

---

## Install Web Vitals

```bash
npm install web-vitals
```

---

## Install Performance Tools

```bash
npm install sharp-cli rollup-plugin-visualizer --save-dev
```

---

# 🧪 Testing

## Development Server

```bash
npm run dev
```

Verify:

* Hero image loads correctly
* 12 article cards are visible
* Sidebar appears
* Skeleton loader appears
* Infinite scroll section appears
* Advertisement banner appears

---

## Production Build

```bash
npm run build
```

Verify:

* Build completes successfully
* No build errors

---

## Production Preview

```bash
npm run preview
```

Open

```
http://localhost:4173
```

---

## Lighthouse Testing

1. Open Chrome
2. Press **F12**
3. Open **Lighthouse**
4. Select

* Desktop
* Performance

5. Click

```
Analyze page load
```

Expected Result

```
Performance Score = 100
```

---

## Bundle Analysis

After running

```bash
npm run build
```

A file named

```
bundle-stats.html
```

is generated.

Open it in your browser to analyze the JavaScript bundle.

---

# 📂 Project Structure

```
REACT-CWV-TASK
│
├── public
├── screenshots
├── src
│   ├── components
│   ├── data
│   ├── App.tsx
│   ├── main.tsx
│   └── reportVitals.ts
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

GitHub:
https://github.com/saiyasaswi-685

---

# ⭐ Result

✅ Lighthouse Performance Improved

```
8  →  100
```

Successfully optimized Core Web Vitals using modern frontend performance best practices.
