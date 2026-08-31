import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Products Supply",
  description:
    "Aqua Engineering Construction supplies building materials and construction products to support residential, commercial, and industrial projects across Sri Lanka.",
  alternates: { canonical: "https://aquaengineering.lk/products" },
  openGraph: {
    title: "Products Supply | Aqua Engineering Construction",
    description:
      "Building materials and construction products supplied for projects across Sri Lanka.",
    url: "https://aquaengineering.lk/products",
  },
};

const categories = [
  {
    title: "Structural Materials",
    description:
      "Core materials for foundations, framing, and structural work, sourced and supplied to match each project's specification.",
  },
  {
    title: "Finishing Materials",
    description:
      "Flooring, wall finishes, and fittings that complete a build to the standard your design calls for.",
  },
  {
    title: "Interior & Fit-Out Products",
    description:
      "Materials and fixtures for interior fit-outs, coordinated with our interior design and renovation work.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Supply"
        title="Products Supply"
        subtitle="Alongside our construction services, we supply the building materials and products our projects need, so you don't have to manage multiple suppliers."
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-zinc-50 border border-zinc-100"
            >
              <h2 className="text-xl font-bold text-zinc-900 mb-2">
                {category.title}
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mt-10 text-center">
          Product availability varies by project. Contact us for current
          stock and pricing for your specific requirements.
        </p>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-md shadow-sm transition-colors"
          >
            Enquire About Products
          </Link>
        </div>
      </div>
    </main>
  );
}
