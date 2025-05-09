"use client";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";

export default function Header() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <header>
      <Navbar
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        setIsOpen={setIsMobileSidebarOpen}
      />
    </header>
  );
}
