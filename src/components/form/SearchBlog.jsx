import React from "react";

const SearchBlog = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="ptf-search-form" onClick={handleSubmit}>
      <input
        type="text"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        placeholder="Search in blog"
      />
      <button>
        <i className="lnil lnil-search-alt"></i>
      </button>
    </form>
  );
};

export default SearchBlog;
