const axios = require('axios');

// Task 10: Get the list of books
const getBooks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/customer');
    console.log('Books:', response.data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Task 11: Get book details based on ISBN
const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`http://localhost:5000/customer/isbn/${isbn}`);
    console.log('Book details:', response.data);
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error);
  }
};

// Task 12: Get books by Author
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`http://localhost:5000/customer/author/${author}`);
    console.log('Books by Author:', response.data);
  } catch (error) {
    console.error(`Error fetching books by author ${author}:`, error);
  }
};

// Task 13: Get books by Title
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`http://localhost:5000/customer/title/${title}`);
    console.log('Books by Title:', response.data);
  } catch (error) {
    console.error(`Error fetching books with title ${title}:`, error);
  }
};

// Execute tasks
getBooks();
getBookByISBN('9780141439518');
getBooksByAuthor('Chinua Achebe');
getBooksByTitle('Things Fall Apart');
