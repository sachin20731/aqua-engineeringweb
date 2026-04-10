"use client";

import { HardHat, Building2, Headphones } from "lucide-react";

const features = [
  {
    icon: <HardHat size={40} />,
    title: "Expert Worker",
    desc: "Our team includes skilled engineers and certified technicians with 10+ years of experience, ensuring safety, precision, and craftsmanship.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Quality Work",
    desc: "We deliver projects using top-tier materials and technologies, always aiming for lasting quality, minimal rework, and satisfaction.",
    highlight: true,
  },
  {
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    desc: "Whether you're planning, building, or maintaining, our support team is always ready to assist with quick and reliable service.",
  },
];

export function FeatureSection() {
  return (
    <section className="bg-white py-24 relative  z-10">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl p-10 text-center transition-all duration-500 flex flex-col
                ${item.highlight 
                  ? "bg-orange-600 text-white shadow-xl md:-mt-12 md:pb-16 md:pt-16 z-20" 
                  : "bg-[#0b132b] text-white shadow-md hover:shadow-xl hover:-translate-y-2"
                }
              `}
            >
              <div
                className={`flex justify-center mb-5 transition
                ${item.highlight ? "text-white" : "text-orange-400"}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p
                className={`text-sm leading-relaxed flex-grow
                ${item.highlight ? "text-white/90" : "text-gray-300"}`}
              >
                {item.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}