import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Experience",
  description:
    "Aqua Engineering Construction has delivered residential, commercial, and industrial construction projects across Sri Lanka with a focus on quality, planning, and on-time delivery.",
  alternates: { canonical: "https://aquaengineering.lk/experience" },
  openGraph: {
    title: "Our Experience | Aqua Engineering Construction",
    description:
      "Residential, commercial, and industrial construction experience across Sri Lanka.",
    url: "https://aquaengineering.lk/experience",
  },
};

const projects = [
  {
    title: "Three Story Apartment Building",
    location: "Near Boralesgamuwa",
    category: "Residential",
    image: "/Home 2.jpg",
  },
  {
    title: "Two Story House",
    location: "Near Kadawatha",
    category: "Residential",
    image: "/480724869_592370486960768_6831746569906568612_n.jpg",
  },
  {
    title: "Commercial Complex",
    location: "Colombo",
    category: "Commercial",
    image: "/work.jpg",
  },
];

const sectors = [
  {
    title: "Residential",
    description:
      "Houses and apartment buildings designed and built around how families actually live, from first sketch to final finish.",
  },
  {
    title: "Commercial",
    description:
      "Commercial buildings and fit-outs delivered with attention to budget, timeline, and the operational needs of the business.",
  },
  {
    title: "Industrial",
    description:
      "Industrial and infrastructure work handled with the estimating, BOQ, and project management discipline larger sites demand.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Track Record"
        title="Our Experience"
        subtitle="Aqua Engineering Construction has worked across residential, commercial, and industrial construction, bringing careful planning and hands-on project management to every site."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="p-6 rounded-xl bg-zinc-50 border border-zinc-100"
            >
              <h2 className="text-lg font-bold text-zinc-900 mb-2">
                {sector.title}
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center">
          Recent Project Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl overflow-hidden border border-zinc-100 shadow-sm"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={`${project.title} in ${project.location} by Aqua Engineering Construction`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-orange-600 uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 mt-1">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-md shadow-sm transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
