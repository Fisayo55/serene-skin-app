"use client";

import { motion } from "framer-motion";

import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Socials from "./Socials";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatment",
    name: "Treatment",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];
const MobileNav = ({ setIsShowing }) => {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setIsShowing(false)}
      >
        <IoCloseOutline className="text-4xl text-white" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } uppercase max-w-max mx-auto`}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
