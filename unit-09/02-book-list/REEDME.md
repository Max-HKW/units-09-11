# 📚 Book List Display

A simple JavaScript script that dynamically creates a list of books, displaying each book's title, author, and a link to its cover. It also highlights whether the book has been read or not using CSS classes.

---

## 📝 Description

This script:
- Selects a container element from the DOM.
- Creates an unordered list (`<ul>`) and appends it to the container.
- Loops over an array of book objects.
- For each book, creates an HTML structure with:
  - Title
  - Author
  - A link to the book cover image
- Waits 5 seconds, then applies a CSS class to indicate whether the book has been read (`.isRead`) or not (`.isNotRead`).

---

## 📦 Data Structure

The list of books is defined as an array of objects, with the following structure:

```js
{
  title: 'Book Title',
  author: 'Author Name',
  alreadyRead: true or false
}
```

## Logic Flow

1. Select the HTML element with class "book-container"
2. Create a new <ul> element
3. Append the <ul> to the book container

4. For each book in the books array:
   a. Assign the corresponding image URL from coversUrl to the book object
   b. Create a new <li> element
   c. Set its innerHTML with the book's title, author, and a img to the cover
   d. After 5 seconds:
      - If alreadyRead is true → add class "isRead"
      - If alreadyRead is false → add class "isNotRead"
   e. Append the <li> to the <ul>