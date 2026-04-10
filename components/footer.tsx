


"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  // Six core services offered by the company
  const servicesList = [
    "Steam Engineering & Consultation",
    "Boiler Installation & Commissioning",
    "Energy & Sustainability Solutions",
    "Boiler Sales & Supply",
    "Maintenance & Repair Services",
    "Project Management & Consultancy"
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content - Reorganized without Capabilities/Products */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Company Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/Aqua Engineering Logo.png"
                alt="CS Engineering Services"
                width={220}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              CS Engineering Services is a energy services engineering company that provides a 
              strategic, flexible, experienced and innovative approach to delivering engineering 
              and management consultancy services for its clients.
            </p>

            {/* Social Icons (placeholder - can be enabled later) */}
            <div className="flex gap-4 pt-2">
              {/* Social links can be added here when needed */}
            </div>
          </div>

          {/* Company Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-black font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: 'Our Partners', href: '/partners' },
                { label: "Services", href: "/services" },
                { label: "Experience", href: "/experience" },
                { label: "Products Supply", href: "/products" },
                { label: 'News', href: '/news' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-red-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (replacing Capabilities & Products) */}
          <div className="lg:col-span-4">
            <h3 className="text-black font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-600 hover:text-red-500 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <Phone className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Call Us</p>
                <p className="text-black font-medium">+94 71 143 6850</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <Mail className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-black font-medium">info@csengservices.com</p>
              </div>
            </div>

            {/* Updated Address - Single Location */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <MapPin className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Visit Us</p>
                <p className="text-black font-medium">
                  256 Makuluduwa Road, Piliyandala
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          {/* Legal Links */}
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Use</Link>
          </div>

          {/* Copyright */}
          <p>© 2026 VERLIXTECH (PVT) LTD. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}