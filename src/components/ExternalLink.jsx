import React from "react";

const ExternalLink = ({ href, children, className, ...props }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;