# 🧭 DOM Exploration on GOG.com

This document contains JavaScript code snippets and explanations to access key elements from the [www.gog.com](https://www.gog.com) homepage using Developer Tools (DevTools) and DOM selection methods.

All code is meant to be run directly in the browser console.

---

## 🖼️ 1. Select Every Image on the Page

```javascript
const allImages = document.querySelectorAll('img');
```

This selects all ```<img>``` elements on the page and stores them in a NodeList. Useful for inspecting, counting, or modifying image sources across the site.

## 📑 2. Select the Main Menu at the Top of the Page

```javascript
const mainMenu = document.querySelector('nav');
```

This targets the main navigation bar found within the ```<nav>``` element. It typically contains the site sections like Store, About, Community, Support, etc.

## 📰 3. Select All News Items Under the "News" Section

## 📰 3. Select All News Items Under the "News" Section

```javascript
const newsItems = document.querySelectorAll('section article');
```
This selects all ```<article>``` elements found inside any ```<section>```. On GOG.com, news stories are typically wrapped in articles within a section.

## 🦶 4. Select the Footer Element

```javascript
const footer = document.querySelector('footer');
```

This grabs the ```<footer>``` element at the bottom of the page. It often contains links to terms of service, privacy policy, and social media.

## 🔗 5. Select All Social Media Links at the Bottom

```javascript
const socialLinks = document.querySelectorAll('footer a[href*="facebook"], footer a[href*="twitter"], footer a[href*="instagram"], footer a[href*="youtube"], footer a[href*="discord"]');
```
This uses attribute selectors to target ```<a>``` tags in the footer whose href contains the name of a social platform. It retrieves all social media links in one go.

## 🛠️ Bonus Tip: Loop Through NodeLists
### You can loop through any of the selected NodeLists like this:

```javascript
allImages.forEach(img => console.log(img.src));
newsItems.forEach(item => console.log(item.innerText));
socialLinks.forEach(link => console.log(link.href));
```