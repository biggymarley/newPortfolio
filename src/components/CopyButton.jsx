import { useState } from "react";
import { Check, Copy } from "./icons";

// Copies `value` and swaps to a check mark for a moment. Announced to screen readers.
const CopyButton = ({ value, label, className = "" }) => {
  const [copied, setCopied] = useState(false);
  const copy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`inline-flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] rounded-md transition-colors ${
        copied ? "text-accent" : "text-fog hover:text-accent"
      } ${className}`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
};

export default CopyButton;
