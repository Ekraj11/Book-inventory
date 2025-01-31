const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Create a new book
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Get book by id
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book){
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//Update book by id
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
             req.body, 
             { new: true, runValidators: true } 
        );
        if (!updatedBook){
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//DELETE BOOK BY ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);        //
        if (!deletedBook){
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book deleted succesfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;