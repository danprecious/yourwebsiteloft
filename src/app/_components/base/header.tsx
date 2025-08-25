"use client";

import Link from "next/link";
import Logo from "./logo";
import { useEffect, useRef, useState } from "react";
import { NavLinks } from "@/app/types/types";
import { usePathname } from "next/navigation";

const navLinks: NavLinks[] = [
  {
    id: 4,
    title: "WHAT WE OFFER YOU",
    href: "/about",
    subMenu: null,
  },

  {
    id: 6,
    title: "LEARN",
    href: "/blog",
    subMenu: null,
  },
  {
    id: 7,
    title: "REACH OUT",
    href: "/contact",
    subMenu: null,
  },
];
const Header = () => {
  const pathName = usePathname();
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <header className="flex justify-center items-center py-5 lg:px-14 shadow-xs shadow-foreground/5 px-3 sticky top-0 backdrop-blur-sm bg-transparent z-60">
      <nav className="lg:flex justify-between items-center hidden w-full text-sm font-light">
        <Logo />
        <div className="flex justify-between gap-8 mt-5 lg:mt-">
          {navLinks.map(({ id, title, href, subMenu }) => (
            <div
              key={id}
              className="relative"
              onMouseEnter={() => setHoverId(id)}
              // onMouseLeave={() => setHoverId(null)}
            >
              <Link
                href={href}
                className={`w-fit {pathName === href ? "text-blue-500 font-bold" : ""}`}
              >
                {title}
              </Link>

              {/* Submenu */}
              {subMenu && hoverId === id && (
                <div
                  onMouseLeave={() => setHoverId(null)}
                  className="absolute left-0 mt-2 bg-background border shadow-lg rounded-md p-5 z-50 w-[20em]"
                >
                  <ul>
                    {subMenu.map((item) => (
                      <li key={item.id} className="py-5">
                        <Link href={item.href} className="hover:text-stone-500">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="">
          <Link href="/request-a-quote" className="button1">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="lg:hidden w-full">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="">
      <div className="relative flex items-center justify-center py-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          {/* Optional: placeholder to balance layout */}
        </div>

        <Logo />

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl"
        >
          ☰
        </button>
      </div>
      {navOpen && (
        <nav className="mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 hover:bg-gray-200"
                  onClick={() => setNavOpen(false)} // 👈 Close nav
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
