import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";
import { LogoImage } from "./logo";

const Footer = () => {
  return (
    <footer className="pt-[10em] overflow-hidden justify-end flex items-center flex-col pb-10">
      <div className="relative">
        <div className="flex justify-center opacity-40">
          {/* <LogoImage /> */}
        </div>
        <h1 className="text-[20rem] font-black text-gradient-r-2 opacity-10">
          Loft
        </h1>
      </div>

      <div className="text-center">
        <div className="py-10">
          <strong></strong>
        </div>
        <p>Copyright 2025, yourwebsiteloft</p>
      </div>
    </footer>
  );
};

export default Footer;
