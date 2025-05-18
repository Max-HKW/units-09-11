# 🧭 DOM Exploration on [BBC News](https://www.bbc.com/news)

This file includes JavaScript code snippets used in the browser DevTools console to explore and select various elements from the DOM. These examples use more specific and useful selectors that can be reused across multiple modern news websites.

---

## 🔗 Website Chosen

- **BBC News**
- URL: [https://www.bbc.com/news](https://www.bbc.com/news)

---

## 📚 JavaScript DOM Selectors

### 1. 🖼️ Select Images Inside Articles

```javascript
const articleImages = document.querySelectorAll('article img');
```

Explanation:
Selects all `<img>` tags that are found inside `<article>` elements. This helps retrieve images that belong specifically to news items.

## 2. 🌐 Select External Links (Open in New Tab)

```javascript
const externalLinks = document.querySelectorAll('a[target="_blank"]');
```

Explanation:
Selects all anchor tags that open in a new browser tab (usually used for external sources or references).

## 3. 📰 Select Article Headlines in <h2> Tags

```javascript
const articleHeadlines = document.querySelectorAll('h2 a[href]');
```

Explanation:
Selects all clickable article headlines wrapped in `<h2>` and linked with an href. These usually represent primary news links.

## 4. 🧭 Select Navigation Menu Links

```javascript
const navLinks = document.querySelectorAll('nav a');
```

Explanation:
Finds all anchor tags inside any `<nav>` element, which typically includes the main site navigation like News, Sport, Weather, etc.

## 5. 📄 Paragraphs Inside Main Content Area

```javascript
const mainParagraphs = document.querySelectorAll('main p');
```

Explanation:
Targets all `<p>` tags within the main content section of the page — often used for article bodies or summaries.

## 6. 🔍 Buttons Inside Forms

```javascript
const formButtons = document.querySelectorAll('form button');
```

Explanation:
Selects all buttons that are located inside any form — typically used for search or newsletter subscriptions.

## 7. 📣 Social Media Links

```javascript
const socialLinks = document.querySelectorAll(
  'a[href*="twitter"], a[href*="facebook"]'
);
```

Explanation:
Finds all links that contain the word "twitter" or "facebook" in their URLs. Helpful to locate social icons or follow buttons.

## 8. 📥 List Items Inside Footer

```javascript
const footerListItems = document.querySelectorAll('footer ul li');
```

Explanation:
Selects all list items inside unordered lists in the `<footer>`, commonly used for extra site links like privacy, contact, etc.

## 9. 🌟 Headlines in Featured Sections

```javascript
const featuredHeadlines = document.querySelectorAll('div[class*="feature"] h3');
```

Explanation:
Finds `<h3>` elements inside divs that have a class name containing "feature" — usually for highlighted or trending stories.

## 10. 🖼️ First Image of Each Article

```javascript
const firstImagePerArticle = document.querySelectorAll(
  'article img:first-of-type'
);
```

Explanation:
Targets the first image inside every `<article>`. This is often the main image shown for each news story.
