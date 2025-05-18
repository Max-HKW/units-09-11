/**
 * @file main.js
 * @author Massimo Musso
 * @description
 * Dynamically generates a list of books with their title, author, and cover link.
 * Applies a CSS class based on whether the book has been read or not, after a delay.
 */

// Selects the container element where the book list will be appended
const bookContainer = document.querySelector('.book-container');

// Creates an unordered list element to hold book items
const bookList = document.createElement('ul');

// Appends the <ul> to the container
bookContainer.append(bookList);

/**
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The name of the author.
 * @property {boolean} alreadyRead - Indicates whether the book has been read.
 * @property {string} [url] - Optional. The URL to the book cover image.
 */

/** @type {Book[]} */
const books = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    alreadyRead: true,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    alreadyRead: false,
  },
  {
    title: 'Six of Crows',
    author: 'Leigh Bardugo',
    alreadyRead: false,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: true,
  },
];

// Array of URLs for book cover images
/** @type {string[]} */
const coversUrl = [
  'https://m.media-amazon.com/images/I/81nV6x2ey4L._AC_UF1000,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/81DI+BAN2SL._AC_UF1000,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/91v7vX+P9SL._AC_UF1000,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/81uEDUfKBZL.jpg',
];

// Loop through each book and display its info
books.forEach((book, index) => {
  // Add the corresponding cover URL to each book
  book.url = coversUrl[index];

  // Create an <li> element for each book
  const listElement = document.createElement('li');

  // Populate the element with book title, author, and cover img
  listElement.innerHTML = `
    <h2>Title: ${book.title}</h2>
    <h2>Author: ${book.author}</h2>
    <img src="${book.url}" alt="${book.title}">
  `;

  // After a 5-second delay, apply a CSS class based on read status
  setTimeout(() => {
    if (book.alreadyRead) {
      listElement.classList.add('isRead');
    } else {
      listElement.classList.add('isNotRead');
    }
  }, 5000);

  // Append the list item to the book list
  bookList.append(listElement);
});
