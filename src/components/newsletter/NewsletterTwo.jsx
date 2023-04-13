import React from "react";

const NewsletterTwo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      className="ptf-subscribe-form ptf-subscribe-form--large"
      onClick={handleSubmit}
    >
      <div className="ptf-form-group">
        <i className="lnil lnil-envelope-alt"></i>
        <input type="email" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </form>
  );
};

export default NewsletterTwo;
