import { useState } from "react";
import { FlagEnglishIcon, FlagFrenchIcon } from "./icons";

const LANGUAGES = [
  {
    code: "fr",
    label: "Français",
    flag: <FlagFrenchIcon className="h-6 w-6" />,
  },
  {
    code: "en",
    label: "English",
    flag: <FlagEnglishIcon className="h-6 w-6" />,
  },
];

export default function LanguageSelect({
  value = "fr",
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === value);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-32 flex items-center gap-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-secondary px-2"
      >
        <span className="text-lg">{current?.flag}</span>
        <span>{current?.label}</span>
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
                setOpen(false);
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
