// // "use client";

// // import Image from "next/image";

// // export  function Aboutus() {
// //   return (
// //     <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
// //         {/* LEFT SIDE - IMAGE */}
// //         <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
// //           <Image
// //             src="/Untitled design (8).png" // 👉 add your image here
// //             alt="Aqua Engineering and Construction"
// //             fill
// //             className="object-cover hover:scale-105 transition-transform duration-500"
// //           />
// //         </div>

// //         {/* RIGHT SIDE - CONTENT */}
// //         <div>
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// //             About <span className="text-orange-600">Aqua Engineering</span>
// //           </h2>

// //           <p className="text-gray-600 mb-4 leading-relaxed">
// //             Aqua Engineering & Construction is a trusted name in delivering
// //             innovative engineering solutions and high-quality construction
// //             services. With a strong commitment to excellence, we specialize in
// //             building modern infrastructure that meets both functionality and
// //             sustainability standards.
// //           </p>

// //           <p className="text-gray-600 mb-6 leading-relaxed">
// //             Our team of experienced professionals ensures that every project is
// //             completed with precision, safety, and attention to detail. From
// //             residential developments to large-scale industrial projects, we
// //             strive to exceed client expectations at every stage.
// //           </p>

// //           {/* FEATURES */}
// //           <div className="grid grid-cols-2 gap-4 mb-6">
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <h4 className="font-semibold text-gray-800">✔ Quality Work</h4>
// //             </div>
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <h4 className="font-semibold text-gray-800">✔ Expert Team</h4>
// //             </div>
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <h4 className="font-semibold text-gray-800">✔ Modern Design</h4>
// //             </div>
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <h4 className="font-semibold text-gray-800">✔ On-Time Delivery</h4>
// //             </div>
// //           </div>

// //           {/* BUTTON */}
// //           <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
// //             Learn More
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import Image from "next/image";

// export function Aboutus() {
//   return (
//     <>
//       {/* ================= ABOUT SECTION ================= */}
//       <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT SIDE - IMAGE */}
//           <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <Image
//               src="/Untitled design (8).png"
//               alt="Aqua Engineering and Construction"
//               fill
//               className="object-cover hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* RIGHT SIDE - CONTENT */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               About <span className="text-orange-600">Aqua Engineering</span>
//             </h2>

//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Aqua Engineering & Construction is a trusted name in delivering
//               innovative engineering solutions and high-quality construction
//               services.
//             </p>

//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Our team ensures every project is completed with precision,
//               safety, and excellence.
//             </p>

//             {/* FEATURES */}
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-800">✔ Quality Work</h4>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-800">✔ Expert Team</h4>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-800">✔ Modern Design</h4>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-800">✔ On-Time Delivery</h4>
//               </div>
//             </div>

//             <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= BANNER SECTION ================= */}
//       <section className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center text-center overflow-hidden">
        
//         {/* Background Image */}
//         <Image
//           src="/sketch_black_lines.png"
//           alt="Quality Banner"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Orange Overlay */}
//         <div className="absolute inset-0 bg-orange-500/90"></div>

//         {/* Content */}
//         <div className="relative z-10 text-white px-6">
//           <p className="text-sm md:text-base mb-2 opacity-80">
//             History time
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Quality above Quantity
//           </h2>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import Image from "next/image";

export function Aboutus() {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - IMAGE */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Untitled design (8).png"
              alt="Aqua Engineering and Construction"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">Aqua Engineering</span>
            </h2>

            {/* NEW PROFESSIONAL DESCRIPTION */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Aqua Engineering & Construction was founded in the Kegalle area
              with a vision to deliver reliable and high-quality engineering
              solutions to local communities. What began as a small-scale
              operation has grown steadily through dedication, hard work, and a
              commitment to excellence.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the years, the company expanded its services beyond Kegalle,
              successfully completing numerous residential, commercial, and
              industrial projects. With increasing demand and a strong
              reputation for quality workmanship, Aqua Engineering established
              its presence in Colombo, the commercial capital of Sri Lanka.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, Aqua Engineering & Construction operates across Sri Lanka,
              delivering innovative and sustainable construction solutions. Our
              success is driven by a skilled team, modern technology, and a
              strong commitment to quality, safety, and customer satisfaction.
              We continue to grow while maintaining our core value —{" "}
              <span className="font-semibold text-orange-600">
                quality above quantity
              </span>.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">✔ Quality Work</h4>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">✔ Expert Team</h4>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">✔ Modern Design</h4>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">✔ On-Time Delivery</h4>
              </div>
            </div>

            {/* BUTTON */}
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= BANNER SECTION ================= */}
      <section className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center text-center overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/sketch_black_lines.png"
          alt="Quality Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-orange-500/90"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6">
          <p className="text-sm md:text-base mb-2 opacity-80">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Quality above Quantity
          </h2>
        </div>

       
      </section>

      
    </>
  );
}