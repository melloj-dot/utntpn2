import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Cats.css';

function Cats({ cats }) {
  const [search, setSearch] = useState("");

  if (!cats || cats.length === 0) {
    return <p>An error has occurred. Try again.</p>;
  }

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? cats
    : cats.filter((cat) =>
        cat.tags[0].toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className='row'>
      <div>
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={searcher}
          placeholder="Search by cat Tag"
        />
      </div>
    
      {results.map((cat) => (
        <div key={cat.id} className='col mb-5'>
          <div className='card' style={{ minWidth: '200px' }}>
            <div className="card-header">
              <h5 className='card-title'>Id: {cat.id}</h5>
            </div>
            <img
              className="img-cat"
              src={`https://cataas.com/cat/${cat.tags[0]}`}
              alt="cat"
            />
            <div className='card-body'>
              <p className='card-text'>Tags: {cat.tags.join(', ')}</p> {/* Converts an arrray to text items using , */}
              <p className='card-text'>Img Info.: {cat.mimetype}</p>
              <p className='card-text'>Created At: {cat.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Cats.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      mimetype: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cats;
