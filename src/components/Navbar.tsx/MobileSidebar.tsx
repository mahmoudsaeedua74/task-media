"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { navLinks } from "./Navbar";
import { X } from "lucide-react";
interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileSidebar({ isOpen, setIsOpen }: NavbarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[61] shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-4 m-2 text-gray-900 gap-y-6">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group w-fit ">
              <Link href={link.path} className="text-lg font-medium">
                {link.name}
              </Link>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gray-900 transition-all duration-300 
              ${link.name === "Home" ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(false)}
          className="p-2 absolute top-4 right-4 rounded-2xl text-black border border-gray-500 hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
