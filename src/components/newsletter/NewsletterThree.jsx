import React from "react";

const NewsletterThree = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="ptf-newsletter-form" onClick={handleSubmit}>
      <input className="style-2" type="email" placeholder="Email Address" />
      <button className="ptf-btn ptf-btn--primary ptf-btn--block">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterThree;
