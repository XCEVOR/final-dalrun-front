import React from "react";

const Pagination = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <ul className="ptf-page-navigation">
          <li className="is-active">1</li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>...</li>
          <li>
            <a href="#">20</a>
          </li>
          <li className="next">
            <a href="#">
              <i className="lnil lnil-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
