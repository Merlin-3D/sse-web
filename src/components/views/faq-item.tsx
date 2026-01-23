import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

export function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-primary/40 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-lg font-bold uppercase text-primary">{question}</h3>

        <span className="text-3xl font-bold text-primary">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-250 mt-4" : "max-h-0"
        }`}
      >
        <div className="text-gray-700 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}
