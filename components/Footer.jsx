import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 E-Buy All Rights Reserved</p>
      <p className="icons">
      <a href="https://www.instagram.com/" target="_blank">
        <AiFillInstagram />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <AiOutlineTwitter />
      </a>
      </p>
    </div>
  )
}

export default Footer
