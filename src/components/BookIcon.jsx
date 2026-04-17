import React from "react";
import { MdBook, MdMenuBook } from "react-icons/md";

export default function BookIcon({ isOpen }) {
  const Icon = isOpen ? MdMenuBook : MdBook;

  return <Icon aria-hidden="true" size={28} />;
}