"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

import logo from "@/assets/logo.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100">
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0"></div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Link href="/">
            <Image src={logo} width={120} height={44} alt="beauty"></Image>
          </Link>
        </div>
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setIsShowing(!isShowing)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: isShowing ? 0 : "-100%" }}
          className="fixed bg-primary top-0 right-0 buttom-0 w-[300px] xl:hidden z-50 h-screen"
        >
          <MobileNav setIsShowing={setIsShowing} />
        </motion.div>
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
