import React, { useEffect, useRef, useState } from "react";

const SectionHeader = ({ id, level = 2, text }) => {
  const safeLevel = [2, 3, 4].includes(level) ? level : 2;
  const Tag = `h${safeLevel}`;
  const [copied, setCopied] = useState(false);
  const copiedTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        window.clearTimeout(copiedTimeoutRef.current);
      }
    };
  }, []);

  const copySectionLink = async () => {
    const sectionUrl = `${window.location.origin}${window.location.pathname}${window.location.search}#${id}`;

    try {
      await navigator.clipboard.writeText(sectionUrl);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = sectionUrl;
      helper.setAttribute("readonly", "");
      helper.style.position = "absolute";
      helper.style.left = "-9999px";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }

    setCopied(true);
    if (copiedTimeoutRef.current) {
      window.clearTimeout(copiedTimeoutRef.current);
    }
    copiedTimeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1400);
  };

  return (
    <Tag id={id} className={`section-heading section-heading-l${safeLevel}`}>
      <span>{text}</span>
      <button
        type="button"
        className={`section-hash-link ${copied ? "copied" : ""}`}
        onClick={copySectionLink}
        aria-label={copied ? `Copied link to ${text}` : `Copy link to ${text}`}
        title={copied ? "Copied!" : `Copy link to ${text}`}
      >
        {copied ? "Copied!" : "#"}
      </button>
    </Tag>
  );
};

export default SectionHeader;