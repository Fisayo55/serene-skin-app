"use client";

import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      AboutPage
    </motion.section>
  );
};

export default AboutPage;