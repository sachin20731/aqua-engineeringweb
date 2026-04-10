

"use client";

import Image from "next/image";

export function HeroSlider() {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-b-4xl mb-8">

      {/* Background Image */}
      <Image
        src="/Subpages.png"
        alt="About Banner"
        fill
        priority
        className="object-cover "
        
      />
<div className="absolute inset-0 bg-black/50 z-0"></div>
  

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-6">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mt-20">
          About Us
        </h1>
      </div>

    </section>
  );
}