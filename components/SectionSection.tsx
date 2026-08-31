"use client";

import { HardHat, Building2, Headphones } from "lucide-react";

const features = [
  {
    icon: <HardHat size={36} />,
    title: "Expert Worker",
    desc: "Our team includes skilled engineers and certified technicians with 10+ years of experience, ensuring safety, precision, and craftsmanship.",
  },
  {
    icon: <Building2 size={36} />,
    title: "Quality Work",
    desc: "We deliver projects using top-tier materials and technologies, always aiming for lasting quality, minimal rework, and satisfaction.",
    highlight: true,
  },
  {
    icon: <Headphones size={36} />,
    title: "24/7 Support",
    desc: "Whether you're planning, building, or maintaining, our support team is always ready to assist with quick and reliable service.",
  },
];

export function FeatureSection() {
  return (
    <section className="bg-zinc-50 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                group relative rounded-xl p-8 text-center transition-all duration-300 flex flex-col
                ${
                  item.highlight
                    ? "bg-white border-b-4 border-orange-500 shadow-lg hover:shadow-xl"
                    : "bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`flex justify-center mb-5 transition-colors duration-300 ${
                  item.highlight ? "text-orange-500" : "text-zinc-700 group-hover:text-orange-500"
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-zinc-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}