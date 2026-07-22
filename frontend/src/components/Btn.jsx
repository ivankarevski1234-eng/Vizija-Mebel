import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-[0.12em] text-xs transition-colors duration-300";

const variants = {
  solid: "bg-foreground text-background px-8 py-4 hover:bg-accent",
  outline: "border border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background",
  light: "bg-background text-foreground px-8 py-4 hover:bg-accent hover:text-white",
};

export const Btn = ({ to, href, onClick, children, variant = "solid", arrow = true, className = "", type, testid, disabled }) => {
  const cls = `${base} ${variants[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  if (to) return <Link to={to} className={cls} data-testid={testid}>{inner}</Link>;
  if (href) return <a href={href} className={cls} data-testid={testid} target="_blank" rel="noreferrer">{inner}</a>;
  return <button type={type || "button"} onClick={onClick} disabled={disabled} className={cls} data-testid={testid}>{inner}</button>;
};

export const Kicker = ({ children, className = "" }) => (
  <span className={`inline-block text-xs font-display font-bold uppercase tracking-[0.3em] text-accent ${className}`}>
    {children}
  </span>
);
