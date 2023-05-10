import React from "react";
import { BsGithub } from 'react-icons/bs';



const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
     
        <a
          className={`ptf-social-icon ptf-social-icon--style-1 `}
          
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/XCEVOR/final-dalrun-front"
        > 
         <BsGithub />
        </a>
     
    </div>
  );
};

export default Social;
