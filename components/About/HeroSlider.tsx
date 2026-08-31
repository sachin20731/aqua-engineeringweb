"use client";

import Image from "next/image";

export function HeroSlider() {
  return (
    <section className="relative w-full h-[40vh] md:h-[55vh] lg:h-[60vh] overflow-hidden mb-8">
      <Image
        src="/Subpages.png"
        alt="About Aqua Engineering Construction"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">
          About Us
        </p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          Building With Purpose
        </h1>
      </div>
    </section>
  );
}
