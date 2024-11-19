"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/about/img.jpg";
import StatsItem from "@/components/ui/StatsItem";

export const metadata = {
  title: "Serene / About",
};
const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flrx items-center pt-48 pb-12 xl:pt-32">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0 mt-30 xl:mt-60"
          >
            <Image
              src={image}
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </motion.div>
          <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Committed to Your skin&apos;s Health and Beauty
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin.
            </p>
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={13} text="Years On market" />
              </div>
              <div>
                <StatsItem countNum={35} countText="k+" text="Happy Clients" />
              </div>
              <div>
                <StatsItem
                  countNum={97}
                  countText="%"
                  text="Natural Ingredients"
                />
              </div>
            </div>
            <button className="btn mx-auto xl:mx-0">Contact Us</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
