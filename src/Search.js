import React from "react";
const Search = (props) => {
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search City"
        type="text"
        value={props.searchInput}
        onChange={(event) => props.setSearchInput(event.target.value)}
      />
      <button className="search-icon" onClick={props.fetchWeather}>
        Search
      </button>
    </div>
  );
};

export default Search;
