"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
  ["Our Origin", "#origin", "origin"],
  ["Our Purpose", "#purpose", "purpose"],
  ["Companies", "#companies", "companies"],
  ["Values", "#values", "values"],
  ["Contact", "#contact", "contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
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
    const sections = items.map(([, , id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -62%", threshold: [0, .1, .25, .5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
    requestAnimationFrame(() => firstLink.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const classes = ["header", scrolled ? "header--scrolled" : "", open ? "header--menu-open" : ""].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <div className="header__inner frame">
        <a href="#top" className="header__logo" aria-label="OUMATRA home" onClick={() => setOpen(false)}>
          <Image src="/brand/logo/oumatra-logo-horizontal.svg" alt="" width={1080} height={220} priority />
        </a>
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
          {items.map(([label, href, id], index) => (
            <a
              ref={index === 0 ? firstLink : undefined}
              key={id}
              href={href}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
