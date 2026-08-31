import type { Metadata } from "next";
import { HeroSlider } from "@/components/About/HeroSlider";
import { Aboutus } from "@/components/About/Aboutus";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aqua Engineering Construction, a Sri Lankan construction company delivering building & construction, architectural design, and renovation services with a focus on quality and durability.",
  alternates: {
    canonical: "https://aquaengineering.lk/about",
  },
  openGraph: {
    title: "About Aqua Engineering Construction",
    description:
      "Learn about Aqua Engineering Construction, a Sri Lankan construction company delivering building & construction, architectural design, and renovation services.",
    url: "https://aquaengineering.lk/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <Aboutus />
    </main>
  );
}
