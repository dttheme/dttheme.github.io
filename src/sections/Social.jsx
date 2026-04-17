import React from "react";
import "../styles.css";
import Card from "../components/Card";
import Github from "../../svg/logo-github.svg";
import Instagram from "../../svg/logo-instagram.svg";
import LinkedIn from "../../svg/logo-linkedin.svg";
import Letterboxd from "../../svg/logo-letterboxd.svg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/dyannaturner/",
    icon: LinkedIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/dttheme",
    icon: Github,
    label: "Github",
  },
  {
    href: "https://instagram.com/peachbutterprints",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://letterboxd.com/dttheme/",
    icon: Letterboxd,
    label: "Letterboxd",
  },
];

function SocialLinks({ className = "" }) {
  const classes = ["social", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <img src={icon} alt={label} />
        </a>
      ))}
    </div>
  );
}

export default function Social({ variant = "card" }) {
  if (variant === "menu") {
    return <SocialLinks className="social-menu" />;
  }

  return (
    <Card>
      <SocialLinks />
    </Card>
  );
}
