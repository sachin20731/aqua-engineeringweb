// "use client";

// import Image from "next/image";
// import { MapPin } from "lucide-react";
// import Link from "next/link";

// const projects = [
//   {
//     title: "Three Story Apartment Building",
//     location: "Near Boralesgamuwa",
//     image: "/projects/project1.jpg",
//     dark: false,
//   },
//   {
//     title: "Two Story House",
//     location: "Near Kadawatha",
//     image: "/projects/project2.jpg",
//     dark: true,
//   },
// ];

// export default function ProjectSection() {
//   return (
//     <section className="w-full">

//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className={`grid md:grid-cols-2 ${
//             index % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* IMAGE */}
//           <div className="relative w-full h-[400px] md:h-[500px]">
//             <Image
//               src={project.image}
//               alt={project.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* CONTENT */}
//           <div
//             className={`flex flex-col justify-center px-8 md:px-16 py-10 ${
//               project.dark
//                 ? "bg-[#0c1633] text-white"
//                 : "bg-gray-100 text-black"
//             }`}
//           >
//             <span className="text-orange-500 font-medium mb-2">
//               Special Project
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//               {project.title}
//             </h2>

//             {/* Divider */}
//             <div className="flex items-center gap-2 mb-4">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               <span className="w-6 h-[2px] bg-blue-500"></span>
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-2 mb-6">
//               <MapPin className="text-orange-500" size={18} />
//               <span>{project.location}</span>
//             </div>

//             {/* Button */}
//             <Link
//               href="/projects"
//               className="w-fit bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//       ))}
      
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { MapPin, ArrowRight } from "lucide-react";
// import Link from "next/link";

// const projects = [
//   {
//     title: "Three Story Apartment Building",
//     location: "Near Boralesgamuwa",
//     image: "/projects/project1.jpg",
//     dark: false,
//   },
//   {
//     title: "Two Story House",
//     location: "Near Kadawatha",
//     image: "/projects/project2.jpg",
//     dark: true,
//   },
//   // Add more projects as needed – they will alternate automatically
// ];

// export default function ProjectSection() {
//   return (
//     <section className="w-full overflow-hidden">
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className={`
//             flex flex-col md:flex-row
//             ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
//             w-full
//           `}
//         >
//           {/* IMAGE SECTION */}
//           <div className="relative w-full md:w-1/2 h-[400px] md:h-[550px] group overflow-hidden">
//             <Image
//               src={project.image}
//               alt={project.title}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           </div>

//           {/* CONTENT SECTION */}
//           <div
//             className={`
//               w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12
//               ${project.dark
//                 ? "bg-[#0c1633] text-white"
//                 : "bg-gray-100 text-gray-800"
//               }
//             `}
//           >
//             <span className="text-orange-500 font-semibold tracking-wide text-sm mb-3">
//               Special Project
//             </span>

//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//               {project.title}
//             </h2>

//             {/* Divider */}
//             <div className="flex items-center gap-2 mb-4">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//               <span className="w-8 h-[2px] bg-orange-500 rounded-full"></span>
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-2 mb-6">
//               <MapPin className="text-orange-500" size={18} />
//               <span className="text-base">{project.location}</span>
//             </div>

//             {/* Button */}
//             <Link
//               href="/projects"
//               className="w-fit flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group/btn"
//             >
//               Read More
//               <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Three Story Apartment Building",
    location: "Near Boralesgamuwa",
    image: "/Home 2.jpg",
    year: "2024",
    category: "Residential",
    dark: false,
  },
  {
    title: "Two Story House",
    location: "Near Kadawatha",
    image: "/480724869_592370486960768_6831746569906568612_n.jpg",
    year: "2023",
    category: "Residential",
    dark: true,
  },
  {
    title: "Commercial Complex",
    location: "Colombo",
    image: "/projects/project3.jpg",
    year: "2024",
    category: "Commercial",
    dark: false,
  },
];

export default function ProjectSection() {
  const [visible, setVisible] = useState<boolean[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisible(new Array(projects.length).fill(false));

    const observers = projects.map((_, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
      );
      if (sectionRefs.current[idx]) {
        observer.observe(sectionRefs.current[idx]!);
      }
      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="w-full bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
          Our Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Discover our latest constructions – built with precision, passion, and quality.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`
              flex flex-col md:flex-row w-full mb-16 md:mb-24
              transition-all duration-700 transform
              ${visible[index] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 h-[320px] md:h-[480px] lg:h-[560px] overflow-hidden group rounded-2xl shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                {project.category}
              </div>
            </div>

            {/* Content Container – Modern Card Style */}
            <div
              className={`
                w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12
                ${project.dark
                  ? "bg-gradient-to-br from-[#0c1633] to-[#0a0f2a] text-white"
                  : "bg-white text-gray-800 border border-gray-100 shadow-xl"
                }
                rounded-2xl md:rounded-none md:rounded-r-2xl
                ${index % 2 === 1 ? "md:rounded-l-2xl md:rounded-r-none" : "md:rounded-r-2xl"}
              `}
            >
              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-orange-500">
                  <Calendar size={14} />
                  <span>{project.year}</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span className="opacity-80">{project.location}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {project.title}
              </h3>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-10 h-[2px] bg-orange-500 rounded-full"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              </div>

              <p className="mb-8 text-base leading-relaxed opacity-90">
                A masterpiece of modern engineering, this {project.category.toLowerCase()} project
                exemplifies our commitment to quality, sustainability, and aesthetic excellence.
                Built with premium materials and cutting-edge techniques.
              </p>

              <Link
                href={`/projects/${index + 1}`}
                className="group w-fit flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
              >
                View Project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA to All Projects */}
      <div className="text-center py-16 border-t border-gray-200">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300"
        >
          Browse All Projects
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}