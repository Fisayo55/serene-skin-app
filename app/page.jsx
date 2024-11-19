"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import homeImage from "@/assets/home/img.png";
import ModalVideo from "@/components/ui/ModalVideo";
import Link from "next/link";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
        }}
        className="container mx-auto"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center h-full">
          <div className="w-full text-center xl:text-left xl:w-[500px] pt-[120px] ">
            <h1 className="h1">
              Natural Beauty <br />
              Starts Here
            </h1>
            <p className="lead max-w-xl mx-auto">
              Tailored skincare solutions for a healthy complexion,offering
              customized care for radiant skin
            </p>
            <div className="flex flex-col items-center gap-6 max-w-max mx-auto">
              <button className="btn btn-lg">
                <Link href="/contact">Book an appointment</Link>
              </button>
            </div>
            <div className="xl:flex justify-center items-center">
              <ModalVideo />
            </div>
          </div>
          <div className="flex-1">
            <div className="hidden xl:flex fixed bottom-0">
              <Image
                src={homeImage}
                alt="hero-image"
                width={500}
                height={300}
                quality={100}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
