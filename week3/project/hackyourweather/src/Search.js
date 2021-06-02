import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        placeholder="Search City"
        type="text"
        value={props.searchInput}
        onChange={(event) => props.setSearchInput(event.target.value)}
      />
      <button onClick={props.WeatherFetch}>Search</button>
    </div>
  );
};

export default Search;
