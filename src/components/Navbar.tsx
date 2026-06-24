"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "ACCUEIL", href: "/" },
  { name: "LE LIVRE", href: "#le-livre" },
  { name: "L'AUTEUR", href: "#explorer", tabId: "auteur" },
  { name: "CONTEXTE HISTORIQUE", href: "#explorer", tabId: "contexte" },
  { name: "ARCHIVES", href: "#explorer", tabId: "archives" },
  { name: "PRESSE & ÉVÉNEMENTS", href: "#explorer", tabId: "presse" },
  { name: "CONTACT", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-sm shadow-md py-3"
          : "bg-[#1A1A1A] py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="flex flex-col group">
          <span className="font-serif text-[#D4AF37] text-xl md:text-2xl tracking-wide group-hover:text-white transition-colors">
            TROIS FOIS DÉRACINÉS
          </span>
          <span className="font-sans text-[#FDFBF7]/70 text-xs tracking-widest uppercase mt-1">
            Une saga familiale
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else if (link.tabId) {
                  window.dispatchEvent(new CustomEvent('changeExplorerTab', { detail: link.tabId }));
                }
              }}
              className="text-[#FDFBF7] text-xs font-medium tracking-widest hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-[#FDFBF7] hover:text-[#D4AF37] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          "xl:hidden absolute top-full left-0 w-full bg-[#1A1A1A] shadow-xl transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[500px] border-t border-[#D4AF37]/20" : "max-h-0"
        )}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#FDFBF7] text-sm font-medium tracking-widest hover:text-[#D4AF37] transition-colors"
              onClick={(e) => {
                setIsOpen(false);
                if (link.href === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else if (link.tabId) {
                  window.dispatchEvent(new CustomEvent('changeExplorerTab', { detail: link.tabId }));
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
