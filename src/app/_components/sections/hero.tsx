import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";
import ClientList from "./clientList";

const Hero = () => {
  const taglinePairs = [
    { built: "Growth", designed: "Trust" },
    { built: "Speed", designed: "Impact" },
    { built: "Sales", designed: "Credibility" },
    { built: "Startups", designed: "Scaling" },
    { built: "Performance", designed: "Reliability" },
    { built: "Visibility", designed: "Conversions" },
    { built: "Business", designed: "People" },
  ];
  const randomIndex = Math.floor(Math.random() * taglinePairs.length);
  const tagline = taglinePairs[randomIndex];

  return (
    <section className="h-full overflow-hidden lg:py-20 py-10">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-[4rem] font-black text-[2rem] text-center">
          Websites Built for{" "}
          <span className="text-primary">"{tagline.built}"</span>. <br />{" "}
          Designed for{" "}
          <span className="text-secondary">"{tagline.designed}"</span>
        </h1>

        <p className="lg:w-[60%] mt-6 text-center">
          We craft sleek, conversion-ready websites for businesses that want to
          stand out.
        </p>

        <div className="flex mt-10 justify-center">
          <Link
            href=""
            className="border px-8 py-4 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Hero;
