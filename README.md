# 📦 Project README

Welcome to **Clickys Website**! This README covers everything you need to know about the app—what it does, where it lives, and how it’s built.

---

## 📋 1. Product Overview

**ClickysWebApp** is a web application that provides users with:

* A dynamic product catalog (powered by Prismic CMS)
* An interactive guides section
* Promotional deals and special offers
* Contact and FAQ support

---

## 2. 😊 Client Info
| Key              | Details |
| -----------------| ------- |
| **Full Name**    | ... |
| **Company Name** | ... |
| **Location**     | ... |
| **Phone**        | ... |
| **Email**        | ... |     

---

## 🌐 3 Hosting & Domain

| Item              | Details            |
| ----------------- | ------------------ |
| **Hosting**       | Vercel             |
| **Hosted By**     | Tanatswa Gendere   |
| **Domain**        | [clickys.in](https://clickys.in)|
| **Guthub Repo**   | [Tanagends/amazon](https://github.com/Tanagends/amazon)       |
| **Domain Registrar**     | *None*             |
| **Registered On** | *None*             |
| **Expires On**    | *None*             |

---

## 📂 4. Project Structure

```plaintext
app
├── ScrollToTopButton.js
├── about
│   └── page.jsx
├── contact
│   ├── faqSection.js
│   └── page.jsx
├── deals
│   ├── DealsPage.jsx
│   └── page.jsx
├── favicon.ico
├── globals.css
├── guides
│   ├── GuidesPage.jsx
│   ├── [slug]
│   │   └── page.jsx
│   └── page.jsx
├── layout.jsx
├── not-found.jsx
├── page.jsx
└── products
    ├── ProductsPage.jsx
    ├── [slug]
    │   ├── MoreInfo.jsx
    │   ├── MoreInfo.tsx
    │   └── page.jsx
    └── page.jsx
```

---

## 🔑 5. Accounts & Credentials

| Service     | Account Email                                           | Notes                        |
| ----------- | ------------------------------------------------------- | ---------------------------- |
| **Prismic** | [tanatswagendere1@gmail.com](mailto:client@example.com)         | Content authoring & API      |
| **Google**  | [pixelcraftewt@gmail.com](mailto:pixelcraftewt@gmail.com) | Sitemap hosting (via Vercel) |

---

## 🛠 6. Data Sources

* **Prismic CMS**: Holds product catalog and guides content, fetched at build time via REST API
* **Local JSON**: Deals and promotions are maintained in `./components/products.js` and `./components/guides.js`

---

## ⚙️ 7. Postbuild Sitemap Script

To ensure search engines always see the latest routes, we run `next-sitemap` after each build:

```jsonc
// package.json
{
  "scripts": {
    "build": "next build",
    "postbuild": "next-sitemap"
  }
}
```

Running `npm run build` generates both the sitemap XML and `robots.txt`, keeping SEO in tip-top shape.

---