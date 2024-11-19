"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/treatments/img.jpg";

export const metadata = {
  title: "Serene / treatment",
};
const Treatments = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Indulge in our luxurious Treatment
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              {" "}
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Classic Facials</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Deep Cleansing,exfoliation and hydration for a refreshed
                  complexion
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Eyebrow Waxing/Shaping</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Exfoliating treatment to improve skin texture and tone
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Chemical Peel</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Deep Cleansing,exfoliation and hydration for a refreshed
                  complexion
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">HydraFacials</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Multi-step treatment for instant hydration and glow
                </p>
              </div>
            </div>

            <button className="btn mx-auto xl:mx-0">Discover more</button>
          </div>
          <div className="hidden xl:flex w-[384px] h-[534px] relative">
            <Image
              src={image}
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Treatments;
