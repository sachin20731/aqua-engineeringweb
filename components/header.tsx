// // components/layout/Header.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// interface NavItem {
//   name: string;
//   href: string;
// }

// const navigation: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'About us', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Product Supply', href: '/product-supply' },
//   { name: 'News', href: '/news' },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
//    <header className="fixed top-0 w-full z-50 bg-white py-2">
//   <div className="container mx-auto px-4">

//     {/* Logo - Top Center */}
//     <div className="flex justify-center">
//       <Link href="/">
//         <div className="relative w-64 h-20">
//           <Image
//             src="/image 1.svg"
//             alt="CS Engineering Services Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </Link>
//     </div>

//     {/* Navigation Row */}
//     <div className="flex items-center  mt-0 justify-between">

//       {/* Left Navigation */}
//       <div className="hidden lg:flex space-x-8 ml-8">
//         {navigation.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`text-sm font-medium hover:text-blue-600 ${
//               pathname === item.href ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       {/* Right Contact Button */}
//       <Link
//         href="/contact"
//         className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 mr-9  "
//       >
//         Contact Us →
//       </Link>

//     </div>
//   </div>
// </header>
//   );
// }


// // components/layout/Header.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// interface NavItem {
//   name: string;
//   href: string;
// }

// const navigation: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'About us', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Product Supply', href: '/product-supply' },
//   { name: 'News', href: '/news' },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
// <header className="fixed top-0 w-full z-50 bg-white ">
//   <div className="container mx-auto px-4 py-2">

//     {/* Mobile Header */}
//     <div className="flex items-center justify-between lg:hidden">

//       {/* Logo */}
//       <Link href="/">
//         <div className="relative w-40 h-12">
//           <Image
//             src="/image 1.svg"
//             alt="CS Engineering Services Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </Link>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="text-black"
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//     </div>

//     {/* Desktop Logo */}
//     <div className="hidden lg:flex justify-center">
//       <Link href="/">
//         <div className="relative w-64 h-20">
//           <Image
//             src="/image 1.svg"
//             alt="CS Engineering Services Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </Link>
//     </div>

//     {/* Desktop Navigation */}
//     <div className="hidden lg:flex items-center justify-between mt-0">

//       {/* Left Navigation */}
//       <div className="flex space-x-8 ml-8">
//         {navigation.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`text-sm font-medium hover:text-blue-600 ${
//               pathname === item.href ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       {/* Contact Button */}
//       <Link
//         href="/contact"
//         className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 mr-9"
//       >
//         Contact Us →
//       </Link>

//     </div>

   
  
//   {/* MOBILE MENU (outside container) */}
//   {isOpen && (
//     <div className="lg:hidden relative overflow-hidden bg-white rounded-b-2xl border-t pt-6 pb-8 flex flex-col items-center space-y-6">

//       {/* Ellipse */}
//       <Image
//         src="/navigation ellipse.svg"
//         alt="ellipse"
//         width={500}
//         height={500}
//         className="absolute -bottom-36 -right-36 w-[420px]"
//       />

//       <div className="relative z-10 flex flex-col items-center space-y-6">
//         {navigation.map((item) => (
//           <Link key={item.name} href={item.href} className="text-gray-700 text-base">
//             {item.name}
//           </Link>
//         ))}

//         <Link
//           href="/contact"
//           className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full"
//         >
//           Contact Us →
//         </Link>
//       </div>

//     </div>
//   )}


//   </div>
// </header>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// interface NavItem {
//   name: string;
//   href: string;
// }

// const navigation: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'About us', href: '/about' },
//   { name: 'Our Partners', href: '/partners' },
//   { name: 'Services', href: '/services' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Products Supply', href: '/products' },
//   { name: 'News', href: '/news' },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white">

//       {/* HEADER CONTENT */}
//       <div className="max-w-7xl mx-auto px-4 py-2 rounded-b-6xl">

//         {/* Mobile Header */}
//         <div className="flex items-center justify-between lg:hidden round-b-6xl">

//           <Link href="/">
//             <div className="relative w-40 h-12">
//               <Image
//                 src="/Aqua Engineering Logo.png"
//                 alt="Aqua Engineering & Construction Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </Link>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-black"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//         </div>

//         {/* Desktop Logo */}
//         <div className="hidden lg:flex justify-center">
//           <Link href="/">
//             <div className="relative w-64 h-20">
//               <Image
//                 src="/Aqua Engineering Logo.png"
//                 alt="Aqua Engineering & Construction Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center justify-between">

//           <div className="flex space-x-8 ml-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`text-sm font-medium hover:text-blue-600 ${
//                   pathname === item.href ? "text-blue-600" : "text-gray-700"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <Link
//             href="/contact"
//             className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 mr-9"
//           >
//             Contact Us →
//           </Link>

//         </div>

//       </div>

//       {/* MOBILE MENU (FULL WIDTH) */}
//       {isOpen && (
//         <div className="lg:hidden relative overflow-hidden bg-white rounded-b-6xl border-t pt-6 pb-10 flex flex-col items-center space-y-6">

//           {/* Ellipse Background */}
//           <Image
//             src="/navigation ellipse.svg"
//             alt="ellipse"
//             width={800}
//             height={800}
//             className="absolute -bottom-10 -right-10 w-[220px]"
//           />

//           <div className="relative z-10 flex flex-col items-center space-y-6">

//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 text-base"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <Link
//               href="/contactus"
//               className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full"
//             >
//               Contact Us →
//             </Link>

//           </div>

//         </div>
//       )}

//     </header>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Our Projects', href: '/partners' },
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'Products Supply', href: '/products' },
  // { name: 'News', href: '/news' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:hidden py-3">
          <Link href="/" className="relative z-10">
            <div className="relative w-36 h-11 transition-transform hover:scale-105">
              <Image
                src="/Aqua Engineering Logo.png"
                alt="Aqua Engineering & Construction Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 p-2 rounded-full bg-orange-50 text-gray-800 hover:bg-orange-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <div className="relative w-76 h-16">
              <Image
                src="/Aqua Engineering Logo.png"
                alt="Aqua Engineering & Construction Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group relative text-sm font-semibold tracking-wide transition-colors duration-200
                    ${isActive 
                      ? 'text-orange-600' 
                      : 'text-gray-700 hover:text-orange-500'
                    }
                  `}
                >
                  {item.name}
                  <span
                    className={`
                      absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full 
                      transition-transform duration-300 ease-out
                      ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Contact & Phone */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Phone size={18} className="text-orange-500" />
              <span>+1 (234) 567-8900</span>
            </a>
            <Link
              href="/contact"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                Contact Us 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] z-40 bg-white/95 backdrop-blur-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col h-full overflow-y-auto pb-20">
            <nav className="flex flex-col items-center pt-8 space-y-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      text-lg font-semibold py-2 px-4 rounded-full transition-all duration-200
                      ${isActive 
                        ? 'bg-orange-50 text-orange-600 ring-1 ring-orange-200' 
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/50'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="pt-6 w-full max-w-xs mx-auto space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-orange-50 transition-colors"
                >
                  <Phone size={20} className="text-orange-500" />
                  <span>Call Us: +1 (234) 567-8900</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Get a Quote →
                </Link>
              </div>
            </nav>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      )}
    </header>
  );
}