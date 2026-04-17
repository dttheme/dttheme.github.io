import React, { useEffect, useRef } from "react";
import {
  MdAutoFixHigh,
  MdCode,
  MdFavorite,
  MdHome,
  MdSchedule,
} from "react-icons/md";
import { Social } from "../sections";
import { Link } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Home", Icon: MdHome },
  { to: "/currently", label: "Currently", Icon: MdSchedule },
  { to: "/engineering", label: "Engineering", Icon: MdCode },
  { to: "/peersupport", label: "Peer Support", Icon: MdFavorite },
  { to: "/magic", label: "Magic", Icon: MdAutoFixHigh },
];

export default ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);
  const year = new Date().getFullYear();

  const handleLinkClick = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen(false);
    }
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
      <div className="book-menu-social">
        <Social variant="menu" />
      </div>
      <ul className="book-menu-list">
        {navigationItems.map(({ to, label, Icon }) => (
          <li key={to} className="book-menu-item">
            <Link className="book-menu-link" to={to} onClick={handleLinkClick}>
              <Icon aria-hidden="true" className="book-menu-link-icon" size={22} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="book-menu-credit">© {year}, Dyanna Turner</p>
    </div>
  );
};
