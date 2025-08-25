"use client";

import MotionWrapper from "../utilities/motionWrapper";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary"; // adjust import path

export interface LanguagesContents {
  header: string;
  subtext: string;
  languages: { name: string; flag: string }[];
}

export const languagesContents: LanguagesContents = {
  header: "Languages We Offer",
  subtext:
    "Our team of native linguists covers a wide range of languages to help your business connect globally with precision and cultural nuance.",
  languages: [
    { name: "English", flag: "v1755527185/english_mx7yda.jpg" },
    { name: "French", flag: "v1755527184/french_d8z431.jpg" },
    { name: "Spanish", flag: "v1755527184/spanish_usx4zx.jpg" },
    { name: "German", flag: "v1755527181/german_elxo5l.jpg" },
    { name: "Italian", flag: "v1755527180/italian_uvma2d.jpg" },
    { name: "Portuguese", flag: "v1755527180/portuguese_cwi3qs.jpg" },
    { name: "Russian", flag: "v1755527180/russian_ryplut.jpg" },
    {
      name: "Chinese (Simplified)",
      flag: "v1755527176/chinese-simplified_z6vo9c.png",
    },
    {
      name: "Chinese (Traditional)",
      flag: "v1755527175/chinese-traditional_kl8gc9.jpg",
    },
    { name: "Japanese", flag: "v1755527175/japanese_uuiywx.jpg" },
    { name: "Korean", flag: "v1755527175/korean_z3y3sg.jpg" },
    { name: "Arabic", flag: "v1755527174/arabic_bjllcw.jpg" },
    { name: "Turkish", flag: "v1755527169/turkish_yzfomu.jpg" },
    { name: "Hindi", flag: "v1755527168/hindi_muh8d3.jpg" },
    { name: "Bengali", flag: "v1755527168/bengali_bnfp28.jpg" },
    { name: "Swahili", flag: "v1755527168/swahili_b0d3un.jpg" },
    { name: "Dutch", flag: "v1755527158/dutch_ltgfoa.jpg" },
    { name: "Greek", flag: "v1755527157/greek_qsniuz.jpg" },
    { name: "Polish", flag: "v1755527157/polish_mycxj8.jpg" },
    { name: "Thai", flag: "v1755527157/thai_i3pfx3.jpg" },
    { name: "Vietnamese", flag: "v1755527157/vietnamese_qi8dkr.jpg" },
    { name: "Hebrew", flag: "v1755527157/hebrew_bjdntr.jpg" },
    { name: "Urdu", flag: "v1755527157/urdu_sti3rm.jpg" },
    { name: "Persian (Farsi)", flag: "v1755527157/persian_uafm95.jpg" },
  ],
};

export const LanguagesPage = () => {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="py-20 px-6 lg:px-16 text-center max-w-5xl mx-auto">
        <MotionWrapper direction="up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {languagesContents.header}
          </h1>
        </MotionWrapper>
        <MotionWrapper direction="up" delay={0.2}>
          <p className="text-lg md:text-2xl leading-relaxed">
            {languagesContents.subtext}
          </p>
        </MotionWrapper>
      </section>

      {/* GRID OF LANGUAGES */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {languagesContents.languages.map((lang, i) => (
            <MotionWrapper key={i} direction="up" delay={i * 0.05}>
              <div className="min-h-[15rem] flex flex-col rounded-1em items-center justify-between rounded-2xl shadow hover:shadow-xl transition    p-8">
                <div className="h-[80%] w-full rounded-[1em] overflow-hidden">
                  <Image
                    loader={cloudinaryLoader}
                    src={lang.flag || ""}
                    alt={`${lang.name} flag`}
                    width={1000}
                    height={1000}
                    className="object-cover mb-4 w-full h-full"
                  />
                </div>
                <strong className="text-xl font-semibold text-center">
                  {lang.name}
                </strong>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
};
