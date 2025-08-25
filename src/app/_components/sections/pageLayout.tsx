"use client";

import { PageLayoutProps } from "@/app/types/types";
import MotionWrapper from "../utilities/motionWrapper";
import Link from "next/link";

export const PageLayout: React.FC<PageLayoutProps> = ({ contents }) => {
  return (
    <div className="w-full ">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 text-white py-24 px-6 lg:px-16 min-h-[90vh]">
        <div className="max-w-5xl mx-auto text-center">
          <MotionWrapper direction="up">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {contents.hero.headline}
            </h1>
          </MotionWrapper>
          <MotionWrapper direction="up" delay={0.2}>
            <p className="mt-10   max-w-3xl mx-auto mb-20">
              {contents.hero.subheadline}
            </p>
          </MotionWrapper>
          <MotionWrapper direction="up" delay={0.4}>
            <Link
              href="/request-a-quote"
              className=" button1 px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              {contents.hero.cta}
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* INTRO (services pages) */}
      {contents.intro && (
        <section className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
          <MotionWrapper>
            <p className="text-xl md:text-2xl leading-relaxed font-light ">
              {contents.intro}
            </p>
          </MotionWrapper>
        </section>
      )}

      {/* MISSION (about page) */}
      {contents.mission && (
        <section className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
          <MotionWrapper direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          </MotionWrapper>
          <MotionWrapper direction="right">
            <p className="text-lg opacity-90 leading-relaxed">
              {contents.mission}
            </p>
          </MotionWrapper>
        </section>
      )}

      {/* STORY (about page) */}
      {contents.story && (
        <section className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
          <MotionWrapper direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          </MotionWrapper>
          <MotionWrapper direction="right">
            <p className="text-lg opacity-90 leading-relaxed">
              {contents.story}
            </p>
          </MotionWrapper>
        </section>
      )}

      {/* VALUES (about page) */}
      {contents.values && (
        <section id="values" className="py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Values
              </h2>
            </MotionWrapper>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {contents.values.map((val, i) => (
                <MotionWrapper key={i} direction="up" delay={i * 0.15}>
                  <div className="p-6 min-h-[10em] border rounded-xl shadow text-center text-lg font-medium">
                    {val}
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TEAM INTRO (about page) */}
      {/* {contents.teamIntro && (
        <section className="py-20 px-6 lg:px-16 max-w-5xl mx-auto text-center">
          <MotionWrapper direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
          </MotionWrapper>
          <MotionWrapper direction="up" delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed">
              {contents.teamIntro}
            </p>
          </MotionWrapper>
        </section>
      )} */}

      {/* SERVICES GRID (services pages) */}
      {contents.services && (
        <section
          id="services"
          className="py-20 px-6 lg:px-16 max-w-6xl mx-auto "
        >
          <MotionWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
              Expert Services
            </h2>
          </MotionWrapper>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {contents.services.map((service, i) => (
              <MotionWrapper key={i} direction="up" delay={i * 0.15}>
                <div className="p-8 border rounded-2xl shadow hover:shadow-xl transition min-h-[15em]">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className=" text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}

      {/* WHO IT'S FOR (services pages) */}
      {contents.whoFor && (
        <section id="whoWeServe" className="py-20 px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold mb-20">
                Who We Serve
              </h2>
            </MotionWrapper>
            <ul className="grid gap-6 md:grid-cols-2">
              {contents.whoFor.map((item, i) => (
                <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                  <li className="p-6 min-h-[20em] bg-foreground/5 rounded-xl text-lg font-medium">
                    {item}
                  </li>
                </MotionWrapper>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CASE STUDY (services pages) */}
      {/* {contents.caseStudy && (
        <section className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
          <MotionWrapper direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {contents.caseStudy.title}
            </h2>
          </MotionWrapper>
          <MotionWrapper direction="up" delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed">
              {contents.caseStudy.content}
            </p>
          </MotionWrapper>
        </section>
      )} */}

      {/* INDUSTRIES GRID (industries page) */}
      {contents.industries && (
        <section
          id="indutries"
          className="py-20 px-6 lg:px-16 max-w-6xl mx-auto"
        >
          <MotionWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industries We Serve
            </h2>
          </MotionWrapper>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {contents.industries.map((ind, i) => (
              <MotionWrapper key={i} direction="up" delay={i * 0.15}>
                <div className="p-8 border rounded-2xl shadow hover:shadow-xl transition min-h-[15em]">
                  <h3 className="text-2xl font-semibold mb-4">{ind.title}</h3>
                  <p className="opacity-70 text-md leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}

      {/* WHY CHOOSE US (services + about) */}
      {contents.whyChoose && (
        <section id="whyChooseUs" className="py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
                Why Choose Us
              </h2>
            </MotionWrapper>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {contents.whyChoose.map((point, i) => (
                <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                  <div className="p-6 border rounded-xl shadow text-center text-lg font-medium min-h-[15em]">
                    {/* ICON */}
                    <p className="">{point}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      {contents.ctaBanner && (
        <section className="py-20 px-6 min-h-[70vh] flex flex-col justify-center lg:px-16 bg-gradient-to-br from-purple-600 via-pink-500 to-amber-400 text-white text-center">
          <MotionWrapper direction="up">
            <h2 className="text-3xl md:text-[3rem] font-black mb-20">
              {contents.ctaBanner.headline}
            </h2>
          </MotionWrapper>
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[6em] lg:justify-center gap-6">
            {contents.ctaBanner.buttons.map((btn, i) => (
              <MotionWrapper key={i} direction="up" delay={i * 0.15}>
                <Link
                  href="/contact"
                  className="button1 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition mt-10"
                >
                  {btn}
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
