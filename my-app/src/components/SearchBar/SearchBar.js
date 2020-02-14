import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props array
function SearchBar(props) {
  console.log('these r our props', props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Name:</label>
        <input
          onChange={props.searchChange}
          name="term"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchBar;