"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-zinc-50 py-10 lg:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-orange-500" />

              <p className="text-orange-500 font-semibold text-lg">
                About Us
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              Building Strong Foundations
              <br />
              for a Better Tomorrow
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-8 text-zinc-600 text-base md:text-sm leading-[2]">
              At{" "}
              <span className="font-semibold text-zinc-800">
                Aqua Engineering Construction
              </span>
              , we specialize in delivering innovative and sustainable
              construction solutions across Sri Lanka. Our services include the
              development of commercial buildings, road infrastructure, and
              residential housing — all crafted with a focus on durability and
              design excellence.
            </p>

           
            {/* Bottom Highlight */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug">
                Your Vision, Our Commitment —
                <br />
                Building the Future Together.
              </h3>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full min-h-[350px] overflow-hidden rounded-xl shadow-lg group">

            <Image
              src="/Untitled design (8).png"
              alt="Construction"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-zinc-950/10" />

          </div>

        </div>
      </div>
    </section>
  );
}