import { PageLayout } from "@/app/_components/sections/pageLayout";
import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";

const aboutUsContents = {
  hero: {
    headline: "Beyond Words: Your Partner in Language Innovation",
    subheadline:
      "At HCL360, we bridge the gap between languages, cultures, and technology.",
    cta: "Contact Us",
  },
  mission:
    "Our mission is to empower businesses and innovators to communicate globally with accuracy, cultural sensitivity, and technological precision.",
  story:
    "Founded with a vision to go beyond traditional translation, HCL360 combines expert linguists with advanced AI-driven solutions. We specialize in media localization, business translation, and AI training data to serve startups, enterprises, and global organizations.",
  values: [
    "Excellence: Delivering quality through expertise and precision.",
    "Innovation: Integrating technology and human intelligence.",
    "Confidentiality: Protecting your sensitive information.",
    "Partnership: Building long-term relationships with our clients.",
  ],
  teamIntro:
    "We are a diverse network of professional linguists, project managers, and technologists who share one goal: making your communication global.",
  ctaBanner: {
    headline: "Let’s Build Global Connections Together",
    buttons: ["Request a Quote", "Contact Us"],
  },
};

const AboutPage = () => {
  return (
    <section className="">
      <PageLayout contents={aboutUsContents} />
    </section>
  );
};

export default AboutPage;
