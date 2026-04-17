import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

  // Close menu when a link is clicked (mainly for mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Don't close if clicking the book icon button (it has its own toggle)
        const bookButton = document.querySelector(".book-icon-button");
        if (bookButton && !bookButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div ref={menuRef} className={`book-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/currently" onClick={handleLinkClick}>
            Currently
          </Link>
        </li>
        <li>
          <Link to="/engineering" onClick={handleLinkClick}>
            Engineering
          </Link>
        </li>
        <li>
          <Link to="/peersupport" onClick={handleLinkClick}>
            Peer Support
          </Link>
        </li>
        <li>
          <Link to="/magic" onClick={handleLinkClick}>
            Magic
          </Link>
        </li>
      </ul>
    </div>
  );
};
