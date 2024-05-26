import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded mr-2"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
