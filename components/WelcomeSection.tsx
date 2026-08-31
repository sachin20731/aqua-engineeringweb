"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WelcomeSection() {
  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: "url('/sketch_black_lines.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Charcoal overlay for readable contrast */}
      <div className="absolute inset-0 bg-zinc-950/90" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-4">
              Welcome
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Aqua Engineering Construction
            </h2>
            <p className="text-zinc-300 mb-6 max-w-md leading-relaxed">
              We deliver innovative and sustainable construction solutions with
              a strong focus on quality, durability, and modern design.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm font-semibold transition-colors"
            >
              Discover More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/* Right Content */}
          <div className="text-zinc-300 text-sm leading-relaxed space-y-4">
            <p>
              At Aqua Engineering Construction, we specialize in delivering
              innovative and sustainable construction solutions across Sri Lanka.
              Our expertise spans residential, commercial, and infrastructure
              development.
            </p>
            <p>
              With years of experience, we ensure the highest standards of
              quality, safety, and client satisfaction. From concept to
              completion, we bring your vision to life with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
