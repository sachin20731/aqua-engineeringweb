

// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// export function HeroSlider() {
//   return (
//     <section
//       className="relative w-full h-[calc(120vh)] mt-[130px] bg-cover bg-center flex items-center justify-center overflow-hidden "
//       style={{ backgroundImage: "url('/Rectangle 1.svg')"  }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-20 text-center text-white px-6 max-w-4xl top-[-180]">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight  font-satoshi">
//           Engineering Excellence in Steam & Energy Solutions
//         </h1>

//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link
//             href="/consultation"
//             className="group inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 text-md"
//           >
//             Request a Consultation
//             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </Link>

//           <Link
//             href="/services"
//             className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-full border border-white transition-all duration-300"
//           >
//             View Our Services
//           </Link>
//         </div>
//       </div>

//        {/* White Bottom Section */}
//       <div className="absolute bottom-0 left-0 w-full h-[140px] bg-white z-20"></div>

//       {/* Red Background Shape */}
//      <Image
//           src="/Vector 1.svg"
//           alt="shape"
//           width={1300}
//           height={1300}
//           className="absolute bottom-10 right-0 w-[900px] lg:w-[1200px] xl:w-[1500px] h-auto z-10"
//         />

//       {/* Boiler Image */}
//       <Image
//         src="/Group 1.png"
//         alt="boilers"
//         width={1200}
//         height={700}
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30"
//       />

      
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// export function HeroSlider() {
//   return (
//     <section
//       className="relative w-full h-[90vh] md:h-[90vh] lg:h-[120vh] mt-[10px] md:mt-[30px] bg-cover bg-center flex items-center justify-center overflow-hidden"
//       style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
//     >
//       {/* Dark overlay (FIX: allow clicks through) */}
//       <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

//       {/* Content (FIX: highest priority layer) */}
//       <div className="relative z-40 text-center text-white px-6 max-w-4xl md:-top-[120px]">
//         <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-satoshi">
//           Engineering Excellence in Steam & Energy Solutions
//         </h1>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link
//             href="/contact"
//             className="group inline-flex items-center px-5 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 text-sm md:text-md hover:scale-105"
//           >
//             Request a Consultation
//             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </Link>

//           <Link
//             href="/services"
//             className="inline-flex items-center px-5 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-full border border-white transition-all duration-300 text-sm md:text-md hover:scale-105"
//           >
//             View Our Services
//           </Link>
//         </div>
//       </div>

//       {/* White Bottom Section */}
//       <div className="absolute bottom-0 left-0 w-full h-[90px] md:h-[140px] bg-white z-20"></div>

//       {/* Red Background Shape */}
//       <Image
//         src="/Vector 1.svg"
//         alt="shape"
//         width={1300}
//         height={1300}
//         className="hidden lg:block absolute bottom-6 right-0 w-[900px] lg:w-[1200px] xl:w-[1500px] h-auto z-10 pointer-events-none"
//       />

//       {/* Boiler Image (FIX: lower z-index so it won't block buttons) */}
//       <Image
//         src="/Group 1.png"
//         alt="boilers"
//         width={1200}
//         height={700}
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[800px] md:w-[650px] lg:w-[900px] xl:w-[1100px] h-auto z-20 pointer-events-none"
//       />
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    bgImage: "/Home 1.png",
    title: "Precision Engineering",
    subtitle: "Modern Infrastructure",
    description:
      "Delivering world‑class residential and commercial projects with unmatched quality and safety.",
  },
  {
    id: 2,
    bgImage: "/Home 2.jpg",
    title: "Sustainable Solutions",
    subtitle: "Future‑Ready Designs",
    description:
      "Eco‑friendly construction methods that reduce environmental impact while maximizing efficiency.",
  },
  {
    id: 3,
    bgImage: "/Home 3.jpg",
    title: "Trusted Excellence",
    subtitle: "25+ Years of Leadership",
    description:
      "Thousands of successful projects and satisfied clients across the region.",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  // Auto-play every 6 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={slide.id} className="relative w-full h-full flex-shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out"
                style={{
                  backgroundImage: `url('${slide.bgImage}')`,
                  transform: idx === currentIndex ? "scale(1.08)" : "scale(1)",
                }}
              />
              {/* Professional gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Centered content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-16 text-center">
        <div className="max-w-4xl space-y-6 animate-fade-in-up">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-white/90 border border-white/20">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Aqua Engineering – Since 1998
          </div>

          {/* Dynamic headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-white">{slides[currentIndex].title}</span>
            <br />
            <span className="text-orange-400">{slides[currentIndex].subtitle}</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {slides[currentIndex].description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-5 justify-center pt-4">
            <Link
              href="/contact"
              className="group relative px-8 py-3.5 bg-orange-500 text-white rounded-md font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="px-8 py-3.5 border border-white/30 rounded-md font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Slide indicators (professional minimal) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-1 bg-orange-400"
                  : "w-6 h-1 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
            <ChevronDown size={16} className="text-white/70 mt-2" />
          </div>
        </div>
      </div>

      {/* Curved white bottom separator */}
      {/* <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L80 70C160 60 320 40 480 35C640 30 800 40 960 45C1120 50 1280 50 1360 50L1440 50V80H1360C1280 80 1120 80 960 80C800 80 640 80 480 80C320 80 160 80 80 80H0Z"
            fill="white"
          />
        </svg>
      </div> */}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
      `}</style>
    </section>
  );
}