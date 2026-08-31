import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "See recent residential and commercial construction projects completed by Aqua Engineering Construction across Sri Lanka.",
  alternates: { canonical: "https://aquaengineering.lk/partners" },
  openGraph: {
    title: "Our Projects | Aqua Engineering Construction",
    description:
      "Recent residential and commercial construction projects completed by Aqua Engineering Construction.",
    url: "https://aquaengineering.lk/partners",
  },
};

const projects = [
  {
    title: "Three Story Apartment Building",
    location: "Near Boralesgamuwa",
    category: "Residential",
    year: "2024",
    image: "/Home 2.jpg",
  },
  {
    title: "Two Story House",
    location: "Near Kadawatha",
    category: "Residential",
    year: "2023",
    image: "/480724869_592370486960768_6831746569906568612_n.jpg",
  },
  {
    title: "Commercial Complex",
    location: "Colombo",
    category: "Commercial",
    year: "2024",
    image: "/work.jpg",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Our Portfolio"
        title="Our Projects"
        subtitle="A look at recent builds delivered by Aqua Engineering Construction, from residential homes to commercial developments."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl overflow-hidden border border-zinc-100 shadow-sm"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={`${project.title} in ${project.location} completed by Aqua Engineering Construction`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-orange-600 uppercase">
                  {project.category} · {project.year}
                </span>
                <h2 className="text-lg font-semibold text-zinc-900 mt-1">
                  {project.title}
                </h2>
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
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
