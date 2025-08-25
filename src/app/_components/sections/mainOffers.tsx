import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";
import { BsCollectionPlayFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { SiDatadotai } from "react-icons/si";

const offers = [
  {
    id: 0,
    title: "AI & Data Services",
    description:
      "High-quality, structured data to train your AI and machine learning models",
    subTitle: "Data Annotation",
    subDescription:
      "High-quality labeled datasets for NLP, computer vision, and speech recognition. Human-in-the-loop precision ensures reliable AI performance.",
    image1:
      "v1755520698/StockCake-Global_Network_Concept_1755518579-removebg-preview_kuo30a.png",
    image2: <SiDatadotai />,
    orientation: "lg:flex-row",
  },
  {
    id: 1,
    title: "Media Localization",
    description:
      "Engaging subtitles and localization that make your content accessible to a global audience",
    subTitle: "Subtitling & Dubbing",
    subDescription:
      "Bring your stories to life across cultures. From accurate subtitling to professional dubbing, we make your media globally accessible.",
    image1:
      "v1755520699/StockCake-Digital_Media_Evolution_1755518390-removebg-preview_znqzke.png",
    image2: <BsCollectionPlayFill />,
    orientation: "lg:flex-row-reverse",
  },
  {
    id: 2,
    title: "Translation",
    description:
      "Accurate and reliable translation for all your corporate needs.",
    subTitle: "Corporate Communication",
    subDescription:
      "Translate contracts, reports, and marketing materials with cultural accuracy, ensuring your brand voice is preserved globally.",
    image1:
      "v1755520699/StockCake-Holographic_Passport_Globe_1755518457-removebg-preview_a2bt9x.png",
    image2: <GrDocumentText />,
    orientation: "lg:flex-row",
  },
];

const MainOffers = () => {
  return (
    <section className="lg:px-20 px-5 py-[10em]">
      <div className="hidden flex-row-reverse "></div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end lg:mb-[8em]">
        <h2 className="lg:text-[3.5rem] text-[2em] font-bold lg:w-[70%] mb-8 lg:mb-0">
          Bridging the language gap with expert services
        </h2>
        <p className="self-end pb-[1em] lg:text-right lg:w-[25%]">
          Our expertise ranges over professional modern solutions making the
          language barrier a breeze
        </p>
      </div>
      <div className="">
        {offers.map((offer) => {
          return (
            <div
              key={offer.id}
              className={`flex flex-col gap-4 my-10 lg:h-[60vh] ${offer.orientation}`}
            >
              <div
                className={`flex flex-col relative justify-end lg:h-full h-[70vh] overflow-hidden  text-white rounded-[1em] lg:rounded-[1.7em] w-full lg:w-[70%] bg-gradient-to-br from-amber-500 from-0% via-pink-500 via-70% to-purple-600 to-90% lg:p-10 p-5`}
              >
                <h3 className="text-[2rem] font-extrabold">{offer.title}</h3>
                <p className="mt-4 lg:w-[60%]">{offer.description}</p>

                <div className="absolute border top-0 right-0 w-[50%] h-full ">
                  <Image
                    loader={cloudinaryLoader}
                    src={offer.image1}
                    alt={`${offer.title} image`}
                    width={1000}
                    height={1000}
                    className="object-contain w-full mb-4"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:rounded-[1.7em] p-6 lg:p-8 rounded-[1em] lg:h-full min-h-[30vh] lg:w-[30%] w-full bg-foreground/5 border-[1px] border-solid border-foreground/5">
                <strong className="text-[1.7rem] lg:">{offer.subTitle}</strong>
                <div className="h-[70%] py-6 lg:text-[6rem] items-center flex justify-center text-[3rem]">
                  {offer.image2}
                </div>
                <p className="">{offer.subDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainOffers;
