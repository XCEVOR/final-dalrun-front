import React from "react";

function StoreDetailsCommentForm() {
    return (
        <div className="post-comment-form">
            <h4>Leave a Reply </h4>
            <span>Your email address will not be published.</span>
            <div className="bd-contact-form-wrapper mb-30">
                <form action="#">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bd-contact-field mb-30">
                                <input type="text" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bd-contact-field mb-30">
                                <input type="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field mb-30">
                                <input type="text" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field mb-30">
                                <textarea placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field">
                                <button type="submit" className="theme-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StoreDetailsCommentForm;