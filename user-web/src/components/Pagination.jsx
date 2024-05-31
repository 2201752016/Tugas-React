// src/components/Pagination.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, setPage, maxPage }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < maxPage) setPage(page + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page <= 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNext} disabled={page >= maxPage}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  maxPage: PropTypes.number.isRequired,
};

export default Pagination;


