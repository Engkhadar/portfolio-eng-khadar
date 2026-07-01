# Eng-Khadar — Premium Personal Portfolio

A visually stunning, high-performance, and fully responsive personal portfolio website built entirely from scratch using **Semantic HTML5**, **Vanilla CSS3**, and **Modern Vanilla JavaScript (ES6+)**. 

This portfolio highlights the skills, services, projects, certificates, and experiences of **Mohamad Abdirahman Hassan (Eng-Khadar)**. It features premium interactive experiences designed to impress recruiters, clients, and technical managers.

## 🚀 Key Features

- **Dark Mode by Default:** Premium dark-themed UI that is gentle on the eyes, with a toggle switch to transition seamlessly to a clean light mode.
- **Glassmorphism Design:** Subtle backdrops, semi-transparent borders, and modern box-shadow tokens inspired by design trends from Awwwards and Framer.
- **Smooth Animations:** Includes typing speed typewriter headers, float-moving particle graphics, shimmer progress bars, scroll-reveal fades, and hovering scale micro-behaviors.
- **Advanced Dynamic Skills Progress Bars:** Visual percentage indicators that animate dynamically only when scrolled into the viewport.
- **Custom Cursor Tracker:** Interactive mouse follower pointer that expands and highlights when hovering over buttons, cards, and text fields.
- **EmailJS Integration:** Working contact form linked directly to EmailJS with complete field-checking rules, email format regex filters, dynamic spinner states, and warning/success indicators.
- **Working Assets:** Built-in downloadable resume document (`assets/CV.pdf`) and high-resolution professional layout mockups.
- **100% Fully Responsive Layout:** Optimised grids and flexboxes to fit devices of all resolutions (Mobile, Tablet, Desktop, Ultra-wide).

---

## 📁 Folder Structure

```text
portfolio/
│
├── index.html          # Main HTML document with semantic structures and SEO metadata
├── css/
│   └── style.css       # Core stylesheet containing themes, design system, and keyframe animations
├── js/
│   ├── script.js       # Global scripts (Cursor tracker, Typewriter, Scroll reveal, Theme switches)
│   └── email.js        # EmailJS client configurations, field validation, and form triggers
├── assets/
│   ├── CV.pdf          # Professional CV document (Viewable & Downloadable)
│   └── profile.jpg     # Generated high-resolution portrait headshot
├── images/
│   ├── food-system.jpg # Food Ordering System project visual mockup
│   └── hotel-system.jpg# Hotel Booking System project visual mockup
└── README.md           # Project documentation and setup guide
```

---

## 🛠️ EmailJS Integration & Setup

The contact form is pre-configured to work with **EmailJS**. To start receiving emails directly from visitors to your inbox, follow these steps:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Add your email service provider (e.g., Gmail, Outlook) to get a **Service ID**.
3. Create an email template. Use variables like `{{user_name}}`, `{{user_email}}`, `{{user_subject}}`, and `{{user_message}}` to map the contact form inputs, then grab the **Template ID**.
4. Navigate to your Account Dashboard and find your **Public Key**.
5. Open `js/email.js` and replace the placeholder constants with your credentials:

```javascript
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
```

*Note: If these values remain as placeholders, the form operates in a **Demo Mode** with simulated success notifications, ensuring your UI logic functions smoothly during testing.*

---

## 💻 Local Testing & Deployment

### Run Locally
To run and preview the website locally:
- Double click `index.html` to open it in your browser.
- Alternatively, run a local development server such as VS Code's "Live Server" extension, or run standard Python server command:
  ```bash
  python -m http.server 8000
  ```
  Then browse to `http://localhost:8000`.

### Deploying
The portfolio is ready for immediate deployment on free static hosting solutions:
- **GitHub Pages:** Create a repository, push your files, and enable GitHub Pages under repository Settings.
- **Netlify / Vercel:** Simply drag and drop the `portfolio` folder to deploy.

---

## ⚖️ License & Credits

Designed and developed by **Eng-Khadar**. Built with ❤️ in Somalia. 
All assets are optimized for high-performance and lightweight loading speeds. Feel free to customize and expand for your personal use.
# portfolio
# portfolio-eng-khadar
# portfolio-eng-khadar
# portfolio-eng-khadar
# portfolio-eng-khadar
# portfolio-eng-khadar
# portfolio-eng-khadar
# portfolio
# portfolio
