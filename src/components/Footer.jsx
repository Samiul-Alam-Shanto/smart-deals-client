import React from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-linear-to-b from-[#1a2419] to-[#151a14]">
      <div className=" container mx-auto text-white ">
        <div className=" px-5 sm:px-10 lg:px-20 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/10">
          <div>
            <h3 className="text-base font-normal mb-5 text-gray-300">
              Find and follow us
            </h3>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <FaPinterest size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2a3229] border border-[#3a4339] flex items-center justify-center hover:bg-[#3a4339] transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full lg:w-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <FaPhone size={24} className="text-[#7fb069]" />
              </div>
              <div>
                <h4 className="text-xs font-normal text-gray-400 mb-1">
                  Contact Us At
                </h4>
                <p className="text-base font-medium">000-1000-0000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <FaMailBulk size={24} className="text-[#7fb069]" />
              </div>
              <div>
                <h4 className="text-xs font-normal text-gray-400 mb-1">
                  Mail Us At
                </h4>
                <a
                  href="mailto:contact@greenNest.com"
                  className="text-base font-medium hover:text-[#7fb069] transition-colors break-all"
                >
                  contact@greenNest.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-5 sm:px-10 lg:px-20 py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
            <div>
              <h3 className="text-lg font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors inline-flex items-center gap-2"
                  >
                    Career
                    <span className="bg-[#7fb069] text-[#1a2419] text-xs px-2 py-0.5 rounded font-semibold">
                      Hiring!
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Plants</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Indoor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Succulent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Tropical
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Rare Species
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Learn</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Our Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Tips & Trick
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Help</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#7fb069] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-medium mb-6">
                Subscribe to our newsletter
              </h3>
              <div className="flex flex-col flex-wrap  sm:flex-row lg:flex-row gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-4 py-3 bg-[#2a3229] border border-[#3a4339] text-white text-sm outline-none placeholder-gray-500"
                />
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full py-5  bg-white text-[#1a2419] text-sm font-medium hover:bg-[#7fb069] hover:text-white transition-colors ">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Get updates on new arrivals and home gardening hacks.
              </p>
            </div>
          </div>
        </div>

        <div className=" px-5 sm:px-10 lg:px-20 py-6 lg:py-8 flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <FaLeaf className="text-[#7fb069]" size={30} />
            <span className="text-2xl sm:text-3xl font-medium">
              Smart Deals
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              © 2025 GreenNest. All rights reserved. | Designed by{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-[#7fb069] transition-colors"
              >
                Samiul Alam Shanto
              </a>
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 bg-white text-[#1a2419] flex items-center justify-center hover:bg-[#7fb069] transition-colors shrink-0 cursor-pointer"
            >
              <FaArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
