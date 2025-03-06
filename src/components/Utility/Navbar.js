"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone, Mail, Heart } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/JSONData/Navitem";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">+91 9067050941</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-sm">shendes969@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className="hover:text-gray-300 transition"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Savali Bahuddyeshiy Sanstha Logo"
              width={80}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1 hover:text-accent transition ${
                  pathname === href
                    ? "text-accent font-medium"
                    : "text-gray-700"
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white h-full shadow-xl flex flex-col z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 border-b flex items-center justify-center">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/logo.svg"
              alt="Savali Bahuddyeshiy Sanstha Logo"
              width={60}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 p-2 rounded-md hover:bg-accent/10 transition ${
                    pathname === href
                      ? "bg-accent/10 text-accent"
                      : "text-gray-700"
                  }`}
                  onClick={closeMenu}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="p-4 border-t">
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-accent" />
              <span>+91 9067050941</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-accent" />
              <span>shendes969@gmail.com</span>
            </div>
          </div>

          <Button
            onClick={() => router.push("/DonateUs")}
            className="w-full mt-2"
          >
            <Heart/>
            Donate Us
          </Button>
        </div>
      </div>
    </>
  );
}
