"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const servicesList = [
    "Building & Construction",
    "Architectural Designs",
    "Interior Design",
    "Estimating & BOQ",
    "Renovation and Remodeling",
    "Project Management",
  ];

  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/partners" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Products Supply", href: "/products" },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Company Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white inline-block rounded-md p-2">
              <Image
                src="/Aqua Engineering Logo.png"
                alt="Aqua Engineering Construction Logo"
                width={200}
                height={54}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Aqua Engineering Construction delivers cost-effective, high-quality
              building &amp; construction, architectural design, interior design,
              and renovation solutions for residential, commercial, and
              industrial projects across Sri Lanka.
            </p>
          </div>

          {/* Company Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-zinc-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-zinc-900 p-3 rounded-md">
                <Phone className="text-orange-500" size={18} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">Call Us</p>
                <p className="text-white font-medium text-sm">+94 76 977 0968</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-zinc-900 p-3 rounded-md">
                <Mail className="text-orange-500" size={18} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">Email</p>
                <p className="text-white font-medium text-sm">info@aquaengineering.lk</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-zinc-900 p-3 rounded-md">
                <MapPin className="text-orange-500" size={18} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">Visit Us</p>
                <p className="text-white font-medium text-sm">
                  Kurunduwaththa Road, Piliyandala, 10300
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Use</Link>
          </div>
          <p>© 2026 Aqua Engineering Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
