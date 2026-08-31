"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const backgrounds = [
  "/Home 1.png",
  "/Home 2.jpg",
  "/Home 3.jpg",
  "/480724869_592370486960768_6831746569906568612_n.jpg",
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>
        {`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .zoom-animation {
            animation: slowZoom 6s linear forwards;
          }
        `}
      </style>

      {/* Sliding image container */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {backgrounds.map((bg, idx) => (
            <div
              key={idx}
              className={`relative w-full flex-shrink-0 h-full bg-cover bg-center ${
                idx === currentIndex ? "zoom-animation" : ""
              }`}
              style={{ backgroundImage: `url('${bg}')` }}
            />
          ))}
        </div>
      </div>

      {/* Overlay for readability + charcoal tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/45 to-zinc-950/60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-28">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-orange-500" />
            <p className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase">
              Welcome to Aqua Engineering
            </p>
          </div>

          <div className="max-w-5xl">
            <h1
              className="text-orange-500 font-extrabold leading-[1.1]
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              From Vision To Reality
            </h1>
            <h2
              className="mt-2 text-white font-bold leading-[1.15]
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Your Trusted Construction Partner
            </h2>
          </div>

          <p
            className="mt-6 max-w-3xl text-zinc-200 font-medium leading-relaxed
            text-sm sm:text-base md:text-lg"
          >
            We provide cost-effective, high-quality construction solutions
            designed to match your vision. From residential to commercial and
            industrial projects, we build with expertise, innovation, and
            dedication.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700
              text-white font-semibold
              px-7 py-3
              rounded-md text-base
              transition-colors duration-300
              shadow-sm"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/partners"
              className="border border-white/70
              text-white font-semibold
              px-7 py-3
              rounded-md text-base
              backdrop-blur-sm
              hover:bg-white hover:text-zinc-900
              transition-colors duration-300"
            >
              View Our Projects
            </Link>
          </div>

          <div className="flex gap-3 mt-14">
            {backgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-10 bg-orange-500"
                    : "w-4 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
