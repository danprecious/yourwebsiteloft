"use client";

import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {
  const [active, setActive] = useState(0);

  const herosrc = "v1754448341/meg-jenson-_cp0vEyJb_Q-unsplash_xky98a.jpg";

  const faqs = [
    {
      id: 0,
      question:
        "What types of translation and localization services do you offer?",
      content:
        "We provide AI and data services, media localization (subtitling, captioning, voice-over, dubbing), business translation (documents, websites, certified translations), and industry-specific language solutions for legal, medical, technical, and marketing needs.",
    },
    {
      id: 1,
      question: "Do you work with both human translators and AI tools?",
      content:
        "Yes. We combine expert human linguists with advanced AI-assisted tools to deliver speed, accuracy, and cultural relevance. Every project undergoes human review to ensure top-quality results.",
    },
    {
      id: 2,
      question: "Can you handle specialized or technical content?",
      content:
        "Absolutely. Our linguists have industry expertise in legal, medical, technical, and marketing sectors. We ensure that your content is translated with correct terminology, style, and context.",
    },
    {
      id: 3,
      question: "What languages do you cover?",
      content:
        "We work with over 50 languages and a wide range of language pairs. From widely spoken languages to rare dialects, we connect you with the right native linguists for your project.",
    },
    {
      id: 4,
      question: "How far in advance should I request a project?",
      content:
        "For most projects, we can start within 24–48 hours. Larger or highly specialized projects should be booked at least 1–2 weeks in advance to ensure the best resources are assigned.",
    },
    {
      id: 5,
      question: "What is your pricing and payment structure?",
      content:
        "Pricing is typically based on word count, language pair, complexity, and turnaround time. We require an initial deposit for larger projects, with the balance due upon delivery or in agreed payment milestones.",
    },
    {
      id: 6,
      question: "Do you provide certified translations?",
      content:
        "Yes. We offer certified translations for legal, academic, and official documents that meet the requirements of government agencies, universities, and professional bodies.",
    },
    {
      id: 7,
      question: "How do you ensure confidentiality and data security?",
      content:
        "We take confidentiality seriously. All translators sign NDAs, and we use secure file transfer protocols. We also comply with international data protection standards.",
    },
    {
      id: 8,
      question: "What is your revision or correction policy?",
      content:
        "If you are not satisfied with any aspect of the translation, we offer free revisions within the agreed project scope to ensure the final delivery meets your expectations.",
    },
  ];

  const handleResponse = (id: number) => {
    setActive(id);
  };

  return (
    <section className="w-full lg:flex item-start overflow-hidden  lg:py-[10em] py-8 scroll-smooth relative min-h-[90vh] ">
      <div className="lg:sticky lg:top-48  mb-10 lg:w-[40%] flex h-fit lg:px-10 px-5 z-50 lg:pt-20">
        <h1 className="lg:text-[4rem] text-[2rem] font-bold z-50">FAQ</h1>
      </div>
      <div className="flex-col flex lg:w-[60%] lg:px-10 px-5 z-50 lg:pt-20">
        {faqs.map(({ id, question, content }) => {
          return (
            <div
              key={id}
              className="pb-10 pt-4 mb-12 border-b-[2px] px- border-solid border-background/20 z-50"
            >
              <div className="flex justify-between items-center">
                <h3
                  onClick={() => handleResponse(id)}
                  className="cursor-pointer text-[1.5rem] lg:text-[1.7rem] hover:text-foreground/50 font-semibold"
                >
                  {question}
                </h3>
                <button
                  onClick={() => handleResponse(id)}
                  className="cursor-pointer text-[1.5rem] lg:text-[1.7rem] hover:text-background/50 font-semibold"
                >
                  {active == id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${
                  active == id ? "flex" : "hidden"
                }   text-[1.1rem] lg:w-[70%] w-full mt-7`}
              >
                {content}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
