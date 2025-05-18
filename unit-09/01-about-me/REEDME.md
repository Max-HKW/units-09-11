# 📄 script.js

## ✍️ Author
**Your Name**

## 📚 Description
This JavaScript script dynamically updates a webpage by manipulating the DOM. It performs several tasks:

- Replaces specific `<span>` elements with plain text
- Adds classes to `<li>` elements
- Appends an image to the page
- Dynamically loads a stylesheet after a delay

---

## 🔍 Code Breakdown

### 1. Add a CSS class to the `<body>`

The script starts by selecting the `<body>` element and adds the `page-font` class to it. This is likely used to apply a global font style through CSS.

---

### 2. Function: `replaceSpanWithText(spanId, text)`

This function takes two parameters:
- `spanId`: the ID of a `<span>` element
- `text`: the plain text that will replace the span

It finds the `<span>` using `document.getElementById`, creates a `TextNode` with the provided text, and replaces the `<span>` with this text using `replaceWith`.

This approach removes the span entirely from the DOM and puts clean text in its place.

---

### 3. Replace Span Elements

The function is called three times to replace these spans:

- `#nickname` is replaced with `"Max"`
- `#favorites` is replaced with `"Videogames"`
- `#hometown` is replaced with `"Rivoli"`

This assumes the HTML contains those IDs inside list items, like:

```html
<li>Nickname: <span id="nickname"></span></li>

