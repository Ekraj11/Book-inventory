import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";

import banner from './assets/banner.jpg';

function App() {
  return (
    <Router>
      <div className="bg-center bg-cover" style = {{ backgroundImage: `url(${banner})`}}>
        <div className=" min-h-screen">
          <header className="bg-primary text-blue p-4">
            <nav className="container mx-auto flex justify-between">
              
              <h1 className="text-2xl font-bold text-white">Book Inventory</h1>
              <div>
                <Link to="/" className="mr-4 hover:text-accent text-white">Home</Link>
                <Link to="/books" className="mr-4 hover:text-accent text-white">Books</Link>
                <Link to="/add-book" className="hover:text-accent text-white">Add Book</Link>
              </div>
            </nav>
          </header>
          

          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/books/:id" element={< BookDetails/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
