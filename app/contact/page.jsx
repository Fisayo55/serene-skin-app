"use client";
import Form from "@/components/ui/Form";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/contact/pin.svg";
import phone from "@/assets/contact/phone.svg";
import email from "@/assets/contact/email.svg";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          <div className="mt-60 flex-1 flex-col justify-center">
            <h3 className="h3 mb-8 text-center xl:text-left">Contact Info</h3>
            <div className="flex flex-col items-center xl:items-start gap-12">
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src={image} fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">123/45 Elm St,Suite 800</p>
                  <br />
                  Los Angeles,CA 98012
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src={phone} fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone Number</h4>
                  <div className="pt-1 flex-1">
                    <p>Phone: +99(0) 999 333 777</p>
                    <p>Fax: +99(0) 999 333 777</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src={email} fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email address</h4>
                  <div className="flex flex-col gap-1">
                    <p>Serene@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#f0cfbc] w-full max-w-[588px] gap-4 xl:mx-0 px-2">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
