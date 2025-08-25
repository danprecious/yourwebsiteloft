"use client";
import { motion } from "framer-motion";

const clients = [
  { id: 0, image: "en", title: "Gloz Inc" },
  { id: 1, image: "fr", title: "Flitto" },
  { id: 2, image: "es", title: "Innodata Inc" },
  { id: 3, image: "de", title: "Monisa Enterprise " },
  { id: 4, image: "pt", title: "Argos Multilingual " },
  { id: 5, image: "ru", title: "The Kitchen" },
  { id: 6, image: "zh", title: "Hubdub Solutions" },
  { id: 7, image: "ja", title: "Alchemy Translations" },
  { id: 8, image: "ko", title: "Translated" },
];

const ClientList = () => {
  return (
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
        {clients.map(({ title, id, image }) => {
          return (
            <div
              key={id}
              className="rounded-[1.5rem] shadow-border flex justify-center items-center px-14 py-12 w-fit"
            >
              <strong className="w-[10em] text-center flex text-wrap justify-center">
                {title}
              </strong>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ClientList;
