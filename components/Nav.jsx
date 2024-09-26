"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation links
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        // classname based on the pathname matches and default classname
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && `text-accent  border-b-2 border-accent  `
          } hover:bg-gradient-to-r hover:from-accent hover:to-green-500 hover:text-transparent hover:bg-clip-text capitalize transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
