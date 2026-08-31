"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 px-6 md:px-16 text-white overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Subpages.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-zinc-950/85 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.9fr] gap-14 items-center">
        {/* LEFT TEXT */}
        <div>
          <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-4">
            Why Aqua Engineering
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Why Choose Us As Your Trusted Construction Partner
          </h2>

          <p className="text-zinc-300 mt-6 max-w-xl leading-relaxed">
            We combine careful planning, transparent estimating, and hands-on
            project management to deliver builds that meet your budget,
            timeline, and standards.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 px-8 py-3.5 rounded-md font-semibold transition-colors shadow-sm"
          >
            Let&apos;s Build Together
          </Link>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="relative w-full h-[220px] md:h-[280px]">
            <Image
              src="/pexels-burst-544966.jpg"
              alt="Construction worker on site for Aqua Engineering Construction"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-zinc-950/20" />
          </div>

          <div className="p-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-orange-500 shrink-0" size={22} />
                <span className="text-sm text-zinc-200">
                  12+ Years of Industry Experience
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-orange-500 shrink-0" size={22} />
                <span className="text-sm text-zinc-200">
                  Timely &amp; Professional Project Delivery
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-orange-500 shrink-0" size={22} />
                <span className="text-sm text-zinc-200">
                  Customer-Centric Construction Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
