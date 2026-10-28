"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";
import LotusMark from "../ui/LotusMark";
// import { useCart } from "@/context/CartContext";
// import SearchOverlay from "./SearchOverlay";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "Workshops", to: "/workshops" },
  { label: "About the Artist", to: "/about" },
];

export default function Header() {
  //   const { count, setDrawerOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [condensed, setCondensed] = useState<boolean>(false);

  return (
    <>
      <div className="bg-primary px-4 py-2.5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-background/85">
          Handcrafted with inspiration from ancient Egypt
        </p>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-md">
        <div className="container-lux">
          <div
            className={`flex items-center justify-between gap-6 transition-all duration-500 ${
              condensed ? "h-17" : "h-21"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="LOTUS & GOLD home"
            >
              <LotusMark className="h-9 w-9 text-gold" strokeWidth={1.1} />
              <span className="font-display text-[15px] tracking-[0.28em] text-ink sm:text-[17px]">
                LOTUS &amp; GOLD
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-9 lg:flex"
            >
              {links.map((link) => (
                <Link key={link.to} href={link.to}>
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="p-2.5 text-ink/70 transition-colors hover:text-burgundy lg:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={1.3} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
