"use client";

import { images } from "@/app/utils/images";

import Image from "next/image";
import { motion } from "framer-motion";
import cloudinaryLoader from "@/app/lib/cloudinary";

const AnimatedPartners = () => {
  const companies = [
    {
      id: 0,
      src: "v1755525338/gloz_lhkh1o.jpg",
      name: "GloZ Inc",
      description:
        "Founded in Hollywood in 2016, GloZ is a transcreation and localization studio serving the media and entertainment industry—offering subtitles and culturally adapted content across more than 61 languages worldwide.",
    },
    {
      id: 1,
      src: "v1755525334/flitto_tzlruo.jpg",
      name: "Flitto",
      description:
        "South-Korea’s Flitto is a crowdsourced translation and AI data platform that supports text, image, voice, and real-time translations—used by millions across 170+ countries for AI training and interpretation services.",
    },
    {
      id: 2,
      src: "v1755525334/innodata_wuodri.png",
      name: "Innodata Inc",
      description:
        "A global data engineering and AI enablement company founded in 1988, Innodata builds digital and generative AI platforms, partnering with leading tech firms to drive large-scale content transformation and ML data services.",
    },
    {
      id: 3,
      src: "v1755525334/monisa_hi52a6.png",
      name: "MoniSa Enterprise",
      description:
        "An ISO-certified global language services provider (ISO 17100, 9001, 27001), MoniSa offers translation, localization, subtitling, voice-over, transcription, and DTP in over 250 languages—focused on quality and compliance.",
    },
    {
      id: 4,
      src: "v1755525334/argos_ydhcj9.png",
      name: "Argos Multilingual",
      description:
        "Argos provides end-to-end global content solutions in tech, life sciences, manufacturing, and HR sectors. With 30+ years of experience, 400+ professionals, and ISO certifications, they deliver localization across 36+ locations.",
    },
    {
      id: 5,
      src: "v1755525333/theKitchen_qvxmm8.jpg",
      name: "The Kitchen",
      description:
        "An Emmy® Award–winning dubbing and localization studio since 2001, headquartered in Miami, with 14 global facilities. They specialize in high-quality subtitling and dubbing across all genres and formats.",
    },
    {
      id: 6,
      src: "v1755525334/hubdub_vtq2nx.png",
      name: "Hubdub Solutions",
      description:
        "Hubdub Solutions (unverified) is described as a boutique localization and IT support company, providing translation, multilingual content management, and digital workflow services for small-to-mid-sized businesses.",
    },
    {
      id: 7,
      src: "v1755525333/alchemy_rfnw88.png",
      name: "Alchemy Translations",
      description:
        "Based in Vilnius, Lithuania, Alchemy Translations crafts nuanced, certified translations across legal, technical, medical, and automotive sectors—backed by skilled linguists and ISO-level quality workflows.",
    },
    {
      id: 8,
      src: "v1755525333/translated_w5trnw.png",
      name: "Translated",
      description:
        "Translated (unverified) is often referred to as an AI-powered translation company specializing in human-in-the-loop solutions, combining professional linguists with machine translation to serve global enterprises.",
    },
  ];

  return (
    <section
      className="w-full min-h-[60vh] py-[10em] overflow-hidden"
      id="gallery"
    >
      <div className="flex lg:px-14 items-end w-[100%] overflow-hidden lg:block rotate-[-6deg]">
        <motion.div
          className="h-full flex  items-end"
          animate={{ x: ["0%", "-120%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {companies.map(({ id, name, src, description }) => {
            return (
              <div
                key={id}
                className={`h-[30em] min-w-[25em] rounded-[1em] overflow-hidden bg-foreground/5 border p-8 mx-4`}
              >
                <div className="w-full h-[40%] mb-6 rounded-[1em] relative overflow-hidden bg-foreground/5 border">
                  <div className="bg-black/20 absolute h-full w-full z-50"></div>

                  <Image
                    loader={cloudinaryLoader}
                    src={src}
                    alt={`Partner: ${name}`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                    // unoptimized
                  />
                </div>
                <div className="">
                  <h3 className="text-[1.3rem] font-bold mb-8 mt-8">{name}</h3>
                  <p className="text-sm opacity-70">{description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedPartners;
