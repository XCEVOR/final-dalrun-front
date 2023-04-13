import React from "react";

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onClick={handleSubmit}
      className="ptf-subscribe-form ptf-subscribe-form--default"
      style={{ maxWidth: "36.25rem" }}
    >
      <div className="ptf-form-group">
        <i className="lnil lnil-envelope-alt"></i>
        <input type="email" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </form>
    // {/* End subscribe form */}
  );
};

export default Newsletter;
