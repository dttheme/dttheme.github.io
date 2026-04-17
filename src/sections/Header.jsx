import React from "react";
import { BookIcon } from "../components";
import "../styles.css";

export default ({ title, isOpen, setIsOpen }) => {
  const handleBookIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <button
        className="book-icon-button"
        onClick={handleBookIconClick}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <BookIcon isOpen={isOpen} />
        <span className="book-icon-label">Menu</span>
      </button>
      <h1>{title}</h1>
    </div>
  );
};
