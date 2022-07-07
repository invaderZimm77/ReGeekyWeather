import React, { useState } from "react";
import SearchButton from "./SearchButton";
import "../SearchForm.css";

const SearchForm = ({ search }) => {
  const [inputSearchBox, setInputSearchBox] = useState("");

  const handleChange = (event) => {
    setInputSearchBox(event.target.value);
    // console.log("value is:", event.target.value);
  };
  

  return (
    <form className="search-form">
      <input
        type="text"
        id="searchBox"
        onChange={handleChange}
        placeholder="Search for a city"
      />
      <SearchButton handleClick={() => search(inputSearchBox)} />
    </form>
  );
};

export default SearchForm;
