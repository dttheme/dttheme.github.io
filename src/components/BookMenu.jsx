import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ClosedBookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const OpenBookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

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
