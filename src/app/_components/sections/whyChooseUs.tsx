"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa6";
import { languagesContents } from "./languages";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary";

const WhyChooseUs = () => {
  return (
    <section className="lg:px-40 px-3 min-h-[100vh] lg:my-[10em] my-[10em]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-[8em]">
        <h2 className="lg:text-[3.5rem] text-[2em] font-bold lg:w-[60%] mb-8 lg:mb-0">
          Why HCL 360?
        </h2>
        <p className="self-end pb-[1em] lg:text-righ lg:w-[40%]">
          Partnering with the best to deliver top quality work. Our expertise
          ranges over professional modern solutions making the language barrier
          a breeze
        </p>
      </div>
      <div className="lg:h-[100vh] flex lg:gap-3 gap-8 flex-col lg:flex-row ">
        <div className="lg:w-[50%] rounded-lg h-full shadow-border lg:p-8 p-5  ">
          <div className="h-[65%]"></div>
          <div className="">
            <h2 className="lg:text-[2.5rem] text-[1.5rem] font-bold py-5">
              Quality Assurance
            </h2>
            <p className="">Multi-step review process</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:w-[50%] rouned-lg h-full">
          <div className="h-[60%] shadow-border rounded-lg lg:p-8 p-5">
            <div className="">
              <h2 className="text-[1.5rem] lg:text-[2.5rem] font-bold py-5">
                Expert Linguistics
              </h2>
              <p className="">Native speakers with industry expertise.</p>
            </div>
            <div className="h-[60%] lg:p-8 pt-5">
              <div className="flex items-end w-[100%] overflow-hidden lg:block">
                <motion.div
                  className="h-full flex  items-end gap-3"
                  animate={{ x: ["-60%", "0%"] }}
                  transition={{
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "mirror", // Loop the animation
                    duration: 50, // Duration of one complete cycle
                    ease: "linear", // Smooth movement
                  }}
                >
                  {languagesContents.languages.map(({ name, flag }, index) => {
                    return (
                      <div
                        key={index}
                        className="p-[2px] rounded-lg bg-gradient-to-br w-fit from-amber-500 via-pink-500 to-purple-600"
                      >
                        <div className="rounded-lg bg-background w-fit text-foreground p-4 flex ">
                          <div className="h-[10px] w-[10px] mr-2 ">
                            {/* <Image
                              loader={cloudinaryLoader}
                              src={flag}
                              alt={`Country, Linguistic, language, translation: ${name}`}
                              width={1000}
                              height={1000}
                              className="object-cover w-full h-full"
                              // unoptimized
                            /> */}
                          </div>
                          <strong className="text-nowrap">{name}</strong>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
              <div className="flex items-end w-[100%] overflow-hidden lg:block mt-10">
                <motion.div
                  className="h-full flex  items-end gap-3"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "mirror", // Loop the animation
                    duration: 50, // Duration of one complete cycle
                    ease: "linear", // Smooth movement
                  }}
                >
                  {languagesContents.languages.map(({ name, flag }, index) => {
                    return (
                      <div
                        key={index}
                        className="p-[2px] rounded-lg bg-gradient-to-br w-fit from-amber-500 via-pink-500 to-purple-600"
                      >
                        <div className="rounded-lg bg-background w-fit text-foreground p-4 flex ">
                          <div className="h-[10px] w-[10px] mr-2 ">
                            {/* <Image
                              loader={cloudinaryLoader}
                              src={flag}
                              alt={`Country, Linguistic, language, translation: ${name}`}
                              width={1000}
                              height={1000}
                              className="object-cover w-full h-full"
                              // unoptimized
                            /> */}
                          </div>
                          <strong className="text-nowrap">{name}</strong>
                        </div>
                      </div>
                    );
                  })}{" "}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col gap-3 h-[40%]">
            <div className="rounded-lg lg:w-[50%] shadow-border lg:p-8 p-5">
              <div className="h-[60%]">
                <h2 className="text-[3rem] text-[] font-extrabold">100%</h2>
              </div>

              <h3 className="text-[1.5rem]">Fast Turnaround</h3>
              <p className="">We respect your deadlines.</p>
            </div>
            <div className="rounded-lg lg:w-[50%] shadow-border lg:p-8 p-5">
              <div className="h-[60%]">
                <FaHandshake className="font-bold lg:text-[5rem] text-[5rem]" />
              </div>
              <div className="">
                <h3 className="text-[1.5rem]">Confidentiality</h3>
                <p className="">We value your data security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
