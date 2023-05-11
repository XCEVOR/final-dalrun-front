import React from "react";
import { useEffect, useState } from "react";

//검색기능
const CrewSearchBlog = () => {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");

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
        placeholder="Search in crew"
      />
      <button>
        <i className="lnil lnil-search-alt"></i>
      </button>
    </form>
  );
};

export default CrewSearchBlog;
