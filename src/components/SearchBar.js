import React, { useState } from 'react';
 
const SearchBar = (event) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = ({onFormSubmit}) => {
    event.preventDefault();

    onFormSubmit(term);
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input 
            type="text" 
            onChange={onInputChange} 
            value={term} 
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;