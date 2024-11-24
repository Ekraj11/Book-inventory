import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`); // Replace with your API URL
        console.log(response)
        // const data = await response.json();
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found. {id}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
      <p className="text-sm text-gray-500">Author: {book.author}</p>
      <p>{book.genre}</p>
      <p>{book.publishedYear}</p>
    </div>
  );
};

export default BookDetails;
