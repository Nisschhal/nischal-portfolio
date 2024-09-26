"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    // Slide bar for mobile menu
    <Sheet>
      {/* // Trigger == Menu icon part */}
      <SheetTrigger className="flex border-2 border-red-700 justify-center items-center">
        {/* Menu icon */}
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      {/* // Content for the slide bar */}
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="my-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Nisal
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname == link.path &&
                  "text-accent border-b-2 border-accent"
                }
                 text-xl hover:text-accent transition-all capitalize
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
