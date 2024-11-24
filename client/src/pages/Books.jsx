import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/"); // Your API URL
        console.log("response: ", response);
        setBooks(response.data); // Directly access response.data with Axios
  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };
  
    fetchBooks();
  }, []);
  

  // Delete a book
 const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/books/${id}`);
    if (response.status === 200) {
      // Update the state to remove the deleted book from the list
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    }
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Books</h2>
      {books.length === 0 ? (
        <p>No books found. Add some!</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="border p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-500">Author: {book.author}</p>
              <div className="mt-2 space-x-4">
                <Link
                  to={`/books/${book.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
                <Link
                  to={`/books/edit/${book.id}`}
                  className="text-green-500 hover:underline"
                >
                  Edit
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
