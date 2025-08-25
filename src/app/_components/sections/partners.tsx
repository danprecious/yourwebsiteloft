import React from "react";
import AnimatedPartners from "./animatedPartners";
import PartnerList from "./partnerList";

const Partners = () => {
  return (
    <section className="">
      <div className="lg:px-20 px-3">
        <h2 className="lg:text-[3.5rem] text-[2rem] mb-5 lg:mb-0 font-bold">
          Partnering with Innovators
        </h2>
        <p className="">We work with AI Startups, Media Production</p>
      </div>
      <div className="lg:mb-[5em]">
        <AnimatedPartners />
      </div>

      <PartnerList />
    </section>
  );
};

export default Partners;
