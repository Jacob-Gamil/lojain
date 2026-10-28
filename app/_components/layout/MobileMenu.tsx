import { X } from "lucide-react";
import LotusMark from "../ui/LotusMark";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "Workshops", to: "/workshops" },
  { label: "Tutorials", to: "/tutorials" },
  { label: "About the Artist", to: "/about" },
];

const secondary = [
  { label: "Your Bag", to: "/cart" },
  { label: "Contact", to: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [closing, setClosing] = useState<boolean>(false);

  const close = () => {
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      onClose();
    }, 260);
  };

  return (
    <div>
      {open && !closing ? (
        <div className="fixed inset-0 z-80 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={close}
          />
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-ivory px-7 py-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg tracking-[0.18em]">
                LOTUS &amp; GOLD
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="text-ink/60 hover:text-burgundy"
              >
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>

            <ul className="mt-12 space-y-5">
              {links.map((link) => (
                <li key={link.to}>
                  <Link href={link.to} onClick={close}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <span className="hairline block" />
              <ul className="mt-6 space-y-3">
                {secondary.map((link) => (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      onClick={close}
                      className="text-[11px] uppercase tracking-[0.26em] text-ink/60 hover:text-burgundy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <LotusMark
                className="mt-8 h-16 w-16 text-gold/60"
                strokeWidth={0.9}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
