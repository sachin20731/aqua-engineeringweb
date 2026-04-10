// "use client";

// import Image from "next/image";

// const services = [
//   {
//     title: "Steam Engineering & Consultation",
//     description:
//       "Engineering | Technical Consultation | Site Audits | System Design",
//     image: "/ServiceSection/image 2.svg",
//   },
//   {
//     title: "Boiler Sales & Equipment",
//     description:
//       "Steam Boilers | Thermal Heaters | Water Treatment | Rice Machinery",
//     image: "ServiceSection/image 3.svg",
//   },
//   {
//     title: "Operation & Maintenance",
//     description:
//       "Maintenance Contracts | Troubleshooting | Spare Parts | System Upgrades",
//     image: "/aboutus.svg",
//   },
//   {
//     title: "Energy & Water Solutions",
//     description:
//       "Energy Audits | Emission Control | Boiler Chemicals | RO & DM Plants",
//     image: "ServiceSection/image 4.svg",
//   },
// ];

// export function ServiceSection() {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Services We offer
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {/* Service Cards */}
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl overflow-hidden group"
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={600}
//                 height={500}
//                 className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40"></div>

//               {/* Text */}
//               <div className="absolute bottom-6 left-6 right-6 text-white">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {service.title}
//                 </h3>

//                 <p className="text-sm opacity-90">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* Tall Card */}
//           <div className="relative rounded-xl overflow-hidden row-span-2">
//             <Image
//               src="/ServiceSection/image 5.svg"
//               alt="Boiler Installation"
//               width={600}
//               height={900}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/40"></div>

//             <div className="absolute bottom-6 left-6 right-6 text-white">
//               <h3 className="text-2xl font-semibold mb-2">
//                 Boiler Installation & Commissioning
//               </h3>

//               <p className="text-sm">
//                 Installation | Fabrication | Piping | Commissioning
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Building & Construction",
    description:
      "We provide complete construction services, from laying strong foundations to delivering fully finished buildings.",
    image: "/Servicess/Building & Construction.png",
  },
  {
    title: "Architectural Designs",
    description:
      "Our architects create innovative and practical designs that suit your needs with sustainability.",
    image: "/Servicess/Architectural Designs.jpg",
  },
  {
    title: "Interior Design",
    description:
      "We design interiors that are both beautiful and practical, creating stylish and comfortable spaces.",
    image: "/Servicess/Interior Design.png",
  },
  {
    title: "Estimating & BOQ",
    description:
      "We prepare detailed cost estimates and Bills of Quantities to help you plan effectively.",
    image: "/Servicess/Estimating & BOQ.jpg",
  },
  {
    title: "Renovation and Remodeling",
    description:
      "We upgrade and transform existing spaces into modern and efficient ones.",
    image: "/Servicess/Renovation and Remodeling.jpg",
  },
  {
    title: "Project Management",
    description:
      "We manage projects from start to finish with proper planning and supervision.",
    image: "/Servicess/ProjectManagement.jpg",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-500 mt-2">
          Delivering quality construction solutions
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {service.description}
              </p>

              <Link
                href="/services"
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}