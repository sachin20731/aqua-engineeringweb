// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function WelcomeSection() {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Partner Logos Row */}
//         <div className="flex justify-center flex-wrap gap-8 mb-12 items-center">
//           <Image src="/Partner Companies/Rectangle 2.svg" alt="Araliya" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 3.svg" alt="Cocomate" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 4.svg" alt="Dasa Coco" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 5.svg" alt="Abans" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 6.svg" alt="MAS" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 7.svg" alt="Yokohama" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 8.svg" alt="DSI" width={120} height={60} />
//         </div>

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-start">

//           {/* Left Text */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
//               Welcome to <br /> CS Engineering Services
//             </h2>

//             <Link
//               href="/about"
//               className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm"
//             >
//               Discover More
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </div>

//           {/* Right Description */}
//           <div className="text-gray-600 text-sm leading-relaxed">
//             <p className="mb-4">
//               CS Engineering Services is a energy services engineering company
//               that provides a strategic, flexible, experienced and innovative
//               approach to delivering engineering and management consultancy
//               services for its clients.
//             </p>

//             <p>
//               We believe our Steam Engineering approach and passion for
//               delivering the highest levels of customer services sets us apart
//               from other consultants and consistently delivers considerable
//               added value to any project.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";


// export function WelcomeSection() {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Partner Logos */}
      

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-start">

//           {/* Left Text */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
//               Welcome to <br /> Aqua Engineering & Construction 
//             </h2>

//             <Link
//               href="/about"
//               className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm"
//             >
//               Discover More
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </div>

//           {/* Right Description */}
//           {/* <div className="text-gray-600 text-sm leading-relaxed">
//             <p className="mb-4">
//               At AquaEngineering Construction, we specialize in delivering innovative and sustainable construction solutions across Sri Lanka. Our services include the development of commercial buildings, road infrastructure, and residential housing — all crafted with a focus on durability and design excellence.
//             </p>

//             <p>
              
//              With years of industry experience, our team is dedicated to upholding the highest standards of quality, safety, and integrity. We believe that strong construction starts with strong relationships — with our clients, partners, and the communities we serve. From laying solid foundations to completing turnkey projects, we combine modern technology with skilled craftsmanship to create spaces that stand the test of time.
//             </p>
//           </div> */}

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WelcomeSection() {
  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: "url('/sketch_black_lines.png')", // 👈 your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to <br /> Aqua Engineering & Construction
            </h2>

            <p className="text-gray-300 mb-6 max-w-md">
              We deliver innovative and sustainable construction solutions with
              a strong focus on quality, durability, and modern design.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition"
            >
              Discover More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Right Content */}
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
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