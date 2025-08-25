"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ctaTexts = [
  { lang: "en", text: "Let's Begin" }, // English
  { lang: "fr", text: "Commençons" }, // French
  { lang: "es", text: "Empecemos" }, // Spanish
  { lang: "de", text: "Lass uns anfangen" }, // German
  { lang: "pt", text: "Vamos começar" }, // Portuguese
  { lang: "ru", text: "Давайте начнем" }, // Russian
  { lang: "zh", text: "开始吧" }, // Chinese (Simplified)
  { lang: "ja", text: "始めましょう" }, // Japanese
  { lang: "ko", text: "시작합시다" }, // Korean
  { lang: "tr", text: "Hadi başlayalım" }, // Turkish
  { lang: "nl", text: "Laten we beginnen" }, // Dutch
  { lang: "sv", text: "Låt oss börja" }, // Swedish
];

const CtaSection = () => {
  return (
    <section className="my-[10em]">
      <div className="text-center py-10">
        <h1 className="lg:text-[4rem] font-bold mb-10">
          What are you waiting for?
        </h1>
        <p className="mb-10">
          Lorem ipsum text content, dummy replace later...{" "}
        </p>

        <Link href="/request-a-quote" className="button1">
          Request a Quote
        </Link>
      </div>

      <div className="flex lg:px-14 items-end w-[100%] overflow-hidden lg:block mt-20">
        <motion.div
          className="h-full flex  items-end gap-3 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {ctaTexts.map(({ text }, index) => {
            return (
              <div
                key={index}
                className="rounded-[1.5rem] border-gradient flex justify-center items-center px-8 py-6 w-fit"
              >
                <strong className="w-[10em] text-center flex text-wrap justify-center">
                  {text}
                </strong>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
