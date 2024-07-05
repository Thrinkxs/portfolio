"use client"
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "@/public/hero.png";

const HeroSection = () => {
  const [loading, setloading] = useState(true);

  // const showHeroImage = loading ? 'opacity-0' : 'animate-fade-in';
  return (
    <section className="py-12 flex-start md:flex-center flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:py-12 w-full min-h-[85vh] md:gap-x-36 bg-backdrop px-12">
      <div>
        <h1 className="flex flex-col font-semibold mb-8">
          <span>Hi.</span>
          <span>I&apos;m Emmanuel.</span>
          <span className="text-teal-400 font-semibold relative drop-shadow-[0_0_0.3rem_#BF40BF60] max-w-[270px] md:max-w-[420px] md:text-[1.7rem] lg:text-4xl">
            Full Stack Software Engineer.
            <span className="block h-1 mt-1 bg-profile-bg max-w-[90%]"></span>
          </span>
        </h1>
        <p className="max-w-lg text-[0.9rem] md:text-[1.1rem] opacity-90 mb-3">
          I specialize in crafting intuitive digital solutions that seamlessly
          blend creative vision with user-centric design, simplifying complexity
          to deliver exceptional user experiences.
        </p>
        <p className="max-w-lg text-[0.9rem] md:text-[1.1rem] opacity-90">
          When I&apos;m not doing that, I&apos;m either watching anime or
          listening to Japanese (日本語のうた) songs。 PS: I speak Japanese
        </p>
      </div>
      <div className="min-h-[100px]">
        <div className={`bg-profile-bg rounded-full p-2 animate-fade-in`}>
          <Image
            src={HeroImage}
            alt="Emmanuel's memoji"
            width={350}
            height={200}
            onLoad={() => setloading(false)}
            priority
            className="bg-black/95 rounded-full w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
