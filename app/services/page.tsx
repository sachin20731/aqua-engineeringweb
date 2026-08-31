import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Explore Aqua Engineering Construction's services: building & construction, architectural design, interior design, estimating & BOQ, renovation, and project management in Sri Lanka.",
  alternates: { canonical: "https://aquaengineering.lk/services" },
  openGraph: {
    title: "Construction Services | Aqua Engineering Construction",
    description:
      "Building & construction, architectural design, interior design, estimating & BOQ, renovation, and project management services in Sri Lanka.",
    url: "https://aquaengineering.lk/services",
  },
};

const services = [
  {
    title: "Building & Construction",
    image: "/Servicess/Building & Construction.png",
    description:
      "We deliver complete construction services for residential, commercial, and industrial buildings — from laying strong foundations to handing over fully finished structures, built to last and to code.",
  },
  {
    title: "Architectural Designs",
    image: "/Servicess/Architectural Designs.jpg",
    description:
      "Our design team creates innovative, practical, and sustainable architectural plans tailored to your site, budget, and vision, balancing aesthetics with buildability.",
  },
  {
    title: "Interior Design",
    image: "/Servicess/Interior Design.png",
    description:
      "We design interiors that are both beautiful and functional, turning empty spaces into comfortable, well-planned homes and workspaces.",
  },
  {
    title: "Estimating & BOQ",
    image: "/Servicess/Estimating & BOQ.jpg",
    description:
      "We prepare detailed cost estimates and Bills of Quantities so you can plan your budget accurately before construction begins, avoiding surprises later.",
  },
  {
    title: "Renovation and Remodeling",
    image: "/Servicess/Renovation and Remodeling.jpg",
    description:
      "We upgrade and transform existing buildings into modern, efficient spaces, handling everything from structural changes to finishing work.",
  },
  {
    title: "Project Management",
    image: "/Servicess/Project Managment.jpg",
    description:
      "We manage construction projects end-to-end — planning, scheduling, site supervision, and quality control — so your project stays on time and on budget.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="What We Do"
        title="Our Construction Services"
        subtitle="A full range of construction and design services for residential, commercial, and industrial projects across Sri Lanka."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={`${service.title} service by Aqua Engineering Construction`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-zinc-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-md shadow-sm transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
