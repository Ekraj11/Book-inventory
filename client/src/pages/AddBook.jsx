import React from "react";

const AddBook = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Add a New Book</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Title</label>
          <input 
            type="text" 
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm" 
            placeholder="Enter book title" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Author</label>
          <input 
            type="text" 
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm" 
            placeholder="Enter author name" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Genre</label>
          <input 
            type="text" 
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm" 
            placeholder="Enter genre type" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Date</label>
          <input 
            type="text" 
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm" 
            placeholder="Enter released date" 
          />
        </div>
        <button type="submit" className="bg-accent text-white py-2 px-4 rounded hover:bg-green-600">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
