"use client";
import { motion } from "framer-motion";

const listOfPartners = [
  "Gloz Inc",
  "Flitto",
  "Innodata Inc",
  "Monisa Enterprise",
  "Argos Multilingual",
  "The Kitchen",
  "Hubdub Solutions",
  "Alchemy Translations",
  "Translated",
];

const PartnerList = () => {
  return (
    <div className="">
      <div className="flex lg:px-14 items-end w-[100%] overflow-hidden lg:block mb-14">
        <motion.div
          className="h-full flex  items-end gap-3"
          animate={{ x: ["-30%", "0%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {listOfPartners.map((partner, index) => {
            return (
              <div
                key={index}
                className="p-[2px] rounded-lg flex justify-center w-fit bg-gradient-to-br from-amber-500 via-pink-500 to-purple-600"
              >
                <div className="rounded-lg bg-background text-foreground py-4 px-8">
                  <strong className="flex text-nowrap  text-center justify-center">
                    {partner}
                  </strong>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex lg:px-14 items-end w-[100%] overflow-hidden lg:block">
        <motion.div
          className="h-full flex  items-end gap-3 "
          animate={{ x: ["0%", "-30%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {listOfPartners.map((partner, index) => {
            return (
              <div
                key={index}
                className="p-[2px] rounded-lg flex justify-center w-fit bg-gradient-to-br from-amber-500 via-pink-500 to-purple-600"
              >
                <div className="rounded-lg bg-background text-foreground py-4 px-8">
                  <strong className="text-nowrap  text-center ">
                    {partner}
                  </strong>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerList;
