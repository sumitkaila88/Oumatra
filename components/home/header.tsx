"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!open) {
      if (restoreFocus.current) menuButton.current?.focus();
      restoreFocus.current = false;
      return;
    }

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const focusFrame = requestAnimationFrame(() => firstLink.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const header = menuButton.current?.closest("header");
        const focusable = header?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(focusFrame);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const classes = ["header", scrolled ? "header--scrolled" : "", open ? "header--menu-open" : ""].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <div className="header__inner frame">
        <Link href="/" className="header__logo" aria-label="OUMATRA home" onClick={() => setOpen(false)}>
          <Image src="/brand/logo/oumatra-logo-horizontal.svg" alt="" width={1080} height={220} priority />
        </Link>
        <button
          ref={menuButton}
          className="menu"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => {
            restoreFocus.current = open;
            setOpen((current) => !current);
          }}
        >
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <i /><i />
        </button>
        <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label="Primary navigation">
          {primaryNavigation.map(([label, href], index) => (
            <Link
              ref={index === 0 ? firstLink : undefined}
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
