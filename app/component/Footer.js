'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  
  const renderNavLink = (href, label) => {
    const isActive = pathname === href;
    return (
      <li key={label} className="group relative">
        <Link href={href}>
          <span className={`text-sm ${isActive ? 'text-green-600' : 'text-gray-700'} hover:text-green-500 transition-colors duration-300`}>
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>
      </li>
    );
  };

  return (
    <footer className="bg-white font-cor text-gray-700 pt-16 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image 
              src="/logoBlack.png" // Replace with your logo
              alt="Roy Architects & Engineers"
              width={120}
              height={40}
              className="h-30 w-auto"
            />
          </Link>
          <p className="text-sm mt-2">
            Transforming visions into enduring structures through innovative design and precision engineering.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-600">Quick Links</h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              renderNavLink(link.href, link.label)
            ))}
            <li className="group relative">
              <Link href="/services">
                <span className="text-sm text-gray-700 hover:text-green-500 transition-colors duration-300">
                  Services
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-600">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm">
                First Floor, 2/50 Viveknagar<br />
                Jadavpur, Kolkata - 700075<br />
                West Bengal, India
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-green-600" />
              <a href="tel:+918961598876" className="text-sm hover:text-green-500 transition-colors">
                +91 89615 98876
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-green-600" />
              <a href="mailto:roy.archen@gmail.com" className="text-sm hover:text-green-500 transition-colors">
                roy.archen@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FiClock className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm">
                Mon-Fri: 9AM - 6PM<br />
                Saturday: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-600">Our Location</h4>
          <div className="aspect-video w-full overflow-hidden rounded-md shadow-md">
            <iframe
              title="Roy Architects & Engineers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1257386396196!2d88.3780476!3d22.499465100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271ae1c7954b3%3A0x935c591f2f1e67fc!2sRoy%20Architects%20And%20Engineers!5e0!3m2!1sen!2sin!4v1746853669586!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0 filter grayscale(20%) contrast(110%)"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e2dcd6] mt-10 pt-6 text-center text-sm text-gray-600">
         Copyright © {new Date().getFullYear()}. All Rights Reserved.
        Website Developed & Maintained by Digital Exposure Online Services
      </div>
    </footer>
  );
}