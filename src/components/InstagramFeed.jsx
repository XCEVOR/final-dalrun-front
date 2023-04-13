import React from "react";

const instagramFeed = ["image-1", "image-2", "image-3", "image-4", "image-5"];

const InstagramFeed = () => {
  return (
    <ul className="ptf-instagram-feed">
      {instagramFeed.map((icon, i) => (
        <li key={i}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`assets/img/instagram/${icon}.png`}
              alt="instagram icon"
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default InstagramFeed;
