"use client";
import { Button } from "@/components/button";
import LanguageSelect from "@/components/language-select";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigations = [
  {
    href: "/",
    name: "Accueil",
  },
  {
    href: "#",
    name: "Services",
  },
  {
    href: "#",
    name: "Recrutement",
  },
  {
    href: "#",
    name: "À propos",
  },
  {
    href: "#",
    name: "Nous Contactez",
  },
];

export default function HeaderNavigate() {
  const path = usePathname();
  const [language, setLanguage] = useState("fr");

  return (
    <header className="py-6 w-full container mx-auto max-w-7xl flex items-center justify-between">
      <Link href="/" className="z-10 relative">
        <Image
          src={"/logo/logo.png"}
          height={500}
          width={500}
          alt="sst"
          className="w-52 bg-cover"
        />
      </Link>
      <div className="flex items-center gap-8">
        <ul
          id="menu"
          className="max-md:absolute max-md:h-full max-md:z-50 max-md:w-full max-md:top-0 max-md:-left-full transition-all duration-300 max-md:backdrop-blur max-md:bg-white/70 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium"
        >
          {navigations.map((item) => {
            return (
              <li
                key={item.name}
                className={classNames(
                  { "text-button": path == item.href },
                  { "text-black": path !== item.href },
                  "hover:text-button font-semibold text-lg"
                )}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <LanguageSelect value={language} onChange={setLanguage} />
    </header>
  );
}
