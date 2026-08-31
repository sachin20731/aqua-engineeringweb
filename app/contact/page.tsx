import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aqua Engineering Construction in Piliyandala, Sri Lanka. Call, email, or visit us to discuss your construction, design, or renovation project.",
  alternates: { canonical: "https://aquaengineering.lk/contact" },
  openGraph: {
    title: "Contact Aqua Engineering Construction",
    description:
      "Call, email, or visit Aqua Engineering Construction in Piliyandala, Sri Lanka to discuss your project.",
    url: "https://aquaengineering.lk/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have a construction, design, or renovation project in mind? Reach out and we'll get back to you."
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="tel:+94769770968"
            className="flex flex-col items-center text-center gap-3 p-8 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-orange-300 hover:shadow-sm transition-all"
          >
            <div className="bg-orange-50 p-3 rounded-full">
              <Phone className="text-orange-600" size={22} />
            </div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Call Us</p>
            <p className="text-zinc-900 font-medium">+94 76 977 0968</p>
          </a>

          <a
            href="mailto:info@aquaengineering.lk"
            className="flex flex-col items-center text-center gap-3 p-8 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-orange-300 hover:shadow-sm transition-all"
          >
            <div className="bg-orange-50 p-3 rounded-full">
              <Mail className="text-orange-600" size={22} />
            </div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Email</p>
            <p className="text-zinc-900 font-medium break-all">
              info@aquaengineering.lk
            </p>
          </a>

          <div className="flex flex-col items-center text-center gap-3 p-8 rounded-xl bg-zinc-50 border border-zinc-100">
            <div className="bg-orange-50 p-3 rounded-full">
              <MapPin className="text-orange-600" size={22} />
            </div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Visit Us</p>
            <p className="text-zinc-900 font-medium">
              Kurunduwaththa Road, Piliyandala, 10300, Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
