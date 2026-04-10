// // "use client";

// // import Image from "next/image";
// // import { CheckCircle } from "lucide-react";
// // import Link from "next/link";

// // export default function WhyChooseUs() {
// //   return (
// //     <section
// //       className="relative py-20 px-6 md:px-16 text-black"
// //       style={{
// //         backgroundImage: "url('/why-bg.jpg')", // 👈 background image
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       {/* Dark overlay */}
// //       {/* <div className="absolute inset-0 bg-black/80"></div> */}

// //       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

// //         {/* LEFT TEXT */}
// //         <div>
// //           <h2 className="text-4xl md:text-6xl font-bold leading-tight">
// //             Why Choose Us <br /> As Your <br /> Construction <br /> Partner?
// //           </h2>
// //         </div>

// //         {/* RIGHT CARD */}
// //         <div className="bg-[#0c1633] rounded-b-[150px]   rounded-t-[10px]  overflow-hidden shadow-2xl">

// //   {/* Image */}
// //   <div className="relative w-full h-94">
// //     <Image
// //       src="/pexels-burst-544966.jpg"
// //       alt="Construction Worker"
// //       fill
// //       className="object-cover"
// //     />
// //   </div>

// //   {/* Content */}
// //   <div className="p-8 space-y-5 flex flex-col items-center text-center">

// //     <div className="flex items-center gap-3 justify-center text-white">
// //       <CheckCircle className="text-orange-500" />
// //       <span>12+ Years of Experience</span>
// //     </div>

// //     <div className="flex items-center gap-3 justify-center text-white">
// //       <CheckCircle className="text-orange-500" />
// //       <span>Timely Project Delivery</span>
// //     </div>

// //     <div className="flex items-center gap-3 justify-center text-white">
// //       <CheckCircle className="text-orange-500" />
// //       <span>Customer-Centric Service</span>
// //     </div>

// //     <Link
// //       href="/contact"
// //       className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
// //     >
// //       Let’s Build Together
// //     </Link>

// //   </div>
// // </div>
       

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import { CheckCircle } from "lucide-react";
// import Link from "next/link";

// export default function WhyChooseUs() {
//   return (
//     <section className="relative py-20 px-6 md:px-16 text-black overflow-hidden">
//       {/* Parallax background layer */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url('/pexels-lucaspezeta-2333694.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed", // 👈 creates parallax effect
//           transform: "translateZ(0)", // performance hint
//         }}
//       />

//       {/* Optional dark overlay (uncomment if needed) */}
//       {/* <div className="absolute inset-0 bg-black/60 z-0"></div> */}

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* LEFT TEXT */}
//         <div>
//           <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//             Why Choose Us <br /> As Your <br /> Construction <br /> Partner?
//           </h2>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="bg-[#0c1633] rounded-b-[150px] rounded-t-[10px] overflow-hidden shadow-2xl">
//           {/* Image */}
//           <div className="relative w-full h-94">
//             <Image
//               src="/pexels-burst-544966.jpg"
//               alt="Construction Worker"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Content */}
//           <div className="p-8 space-y-5 flex flex-col items-center text-center">
//             <div className="flex items-center gap-3 justify-center text-white">
//               <CheckCircle className="text-orange-500" />
//               <span>12+ Years of Experience</span>
//             </div>
//             <div className="flex items-center gap-3 justify-center text-white">
//               <CheckCircle className="text-orange-500" />
//               <span>Timely Project Delivery</span>
//             </div>
//             <div className="flex items-center gap-3 justify-center text-white">
//               <CheckCircle className="text-orange-500" />
//               <span>Customer-Centric Service</span>
//             </div>
//             <Link
//               href="/contact"
//               className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
//             >
//               Let’s Build Together
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [bgPositionY, setBgPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = rect.top + scrollY;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how far the user has scrolled past the top of the section (clamped 0..1)
      let progress = (scrollY - sectionTop + viewportHeight) / (sectionHeight + viewportHeight);
      progress = Math.min(Math.max(progress, 0), 1);

      // Map progress to background position Y: 0% at start, 100% at end
      // The image will appear to move upward as we scroll down
      const newPos = progress * 100;
      setBgPositionY(newPos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-16 text-black overflow-hidden"
    >
      {/* Parallax background layer – moves up on scroll */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: "url('/sketch_orange_lines.png')",
          backgroundSize: "cover",
          backgroundPosition: `center ${bgPositionY}%`,
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Optional dark overlay (uncomment if needed) */}
      {/* <div className="absolute inset-0 bg-black/60 z-0"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Why Choose Us <br /> As Your <br /> Construction <br /> Partner?
          </h2>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#0c1633] rounded-b-[150px] rounded-t-[10px] overflow-hidden shadow-2xl">
          {/* Image */}
          <div className="relative w-full h-94">
            <Image
              src="/pexels-burst-544966.jpg"
              alt="Construction Worker"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-5 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 justify-center text-white">
              <CheckCircle className="text-orange-500" />
              <span>12+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-white">
              <CheckCircle className="text-orange-500" />
              <span>Timely Project Delivery</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-white">
              <CheckCircle className="text-orange-500" />
              <span>Customer-Centric Service</span>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
            >
              Let’s Build Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}