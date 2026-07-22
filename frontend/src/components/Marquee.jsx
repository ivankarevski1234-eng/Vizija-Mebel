import React from "react";

export const Marquee = ({ text, className = "" }) => {
  const item = (
    <span className="inline-flex items-center">
      <span className="mx-6">{text}</span>
      <span className="mx-6 text-accent">✦</span>
    </span>
  );
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <div className="vm-marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </div>
  );
};
