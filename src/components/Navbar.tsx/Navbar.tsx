"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
export const navLinks = [
  { name: "Home", path: "/", id: 1 },
  { name: "About us", path: "/about", id: 2 },
  { name: "Services", path: "/services", id: 3 },
  { name: "Contact us", path: "/contact", id: 4 },
];
interface TopNavbarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (isOpen: boolean) => void;
}
export default function Navbar({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: TopNavbarProps) {
  return (
    <nav className=" text-white px-6 py-4 relative z-50">
      <ul className="hidden lg:flex justify-center space-x-8 ">
        {navLinks.map((link) => (
          <li key={link.id} className="relative group">
            <Link href={link.path} className="text-lg font-medium">
              {link.name}
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 origin-left
                ${link.name === "Home" ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden icon-with-text"
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-8 h-8" />
      </button>
    </nav>
  );
}
