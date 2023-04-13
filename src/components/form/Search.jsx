import React from "react";

const Search = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input
        type="text"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        placeholder="Type and hit enter to search..."
      />
    </form>
  );
};

export default Search;
