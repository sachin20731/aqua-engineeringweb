'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'Our Projects', href: '/partners' },
  { name: 'Products Supply', href: '/products' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top contact bar */}
      <div className="hidden lg:block bg-zinc-950 text-zinc-300 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href="tel:+94769770968" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone size={13} className="text-orange-500" />
              +94 76 977 0968
            </a>
            <a href="mailto:info@aquaengineering.lk" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail size={13} className="text-orange-500" />
              info@aquaengineering.lk
            </a>
          </div>
          <span className="text-zinc-500">Building &amp; Construction · Piliyandala, Sri Lanka</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200'
            : 'bg-white border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden py-3">
            <Link href="/" className="relative z-10">
              <div className="relative w-32 h-10">
                <Image
                  src="/Aqua Engineering Logo.png"
                  alt="Aqua Engineering Construction Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 p-2 rounded-md bg-zinc-100 text-zinc-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between py-3">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-56 h-14">
                <Image
                  src="/Aqua Engineering Logo.png"
                  alt="Aqua Engineering Construction Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <nav className="flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                      isActive ? 'text-orange-600' : 'text-zinc-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-orange-500 transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md shadow-sm transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] z-40 bg-white border-t border-zinc-100">
          <div className="flex flex-col h-full overflow-y-auto pb-20">
            <nav className="flex flex-col pt-6 px-6 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                      isActive ? 'bg-orange-50 text-orange-600' : 'text-zinc-700 hover:bg-zinc-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-6 space-y-3">
                <a
                  href="tel:+94769770968"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-zinc-100 text-zinc-800 rounded-md font-medium hover:bg-zinc-200 transition-colors"
                >
                  <Phone size={18} className="text-orange-600" />
                  <span>+94 76 977 0968</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-700 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
