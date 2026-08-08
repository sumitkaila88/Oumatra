"use client";

import Image from "next/image";
import { useState } from "react";

const items = [["About","#purpose"],["Our Companies","#companies"],["Our Values","#values"],["Careers","#footer"],["Insights","#footer"],["Contact","#footer"]] as const;

export function Header() {
  const [open,setOpen]=useState(false);
  return <header className="header"><div className="header__inner frame">
    <a href="#top" className="header__logo" aria-label="OUMATRA home"><Image src="/brand/logo/oumatra-logo-horizontal.svg" alt="" width={1080} height={220} priority /></a>
    <button className="menu" type="button" aria-expanded={open} aria-controls="nav" onClick={()=>setOpen(!open)}><span className="sr-only">{open?"Close":"Open"} menu</span><i/><i/></button>
    <nav id="nav" className={open?"nav nav--open":"nav"} aria-label="Primary navigation">{items.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
  </div></header>;
}
