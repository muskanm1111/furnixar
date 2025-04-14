"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Search, Menu, Moon } from "lucide-react";

export default function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full bg-[#f8f5f0] overflow-hidden">
      {/* Navigation Bar */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              <span className="text-[#1e2a3b]">Furni</span>
              <span className="text-[#c9a87a]">xar</span>
            </span>
          </Link>
        </div>

        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>

        <div
          className={`
          fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:bg-transparent md:transform-none md:flex md:items-center md:space-x-6
        `}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 md:flex-row md:space-y-0 md:space-x-6">
            <button
              className="md:hidden absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">&times;</span>
            </button>
            <Link href="/login" className="text-gray-800 hover:text-gray-600">
              Login
            </Link>
            <button className="text-gray-800 hover:text-gray-600">
              <Search className="h-5 w-5" />
            </button>
            <button className="relative text-gray-800 hover:text-gray-600">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                1
              </span>
            </button>
            <button className="relative text-gray-800 hover:text-gray-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              <Moon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10 order-2 md:order-1">
            <p className="text-gray-700 mb-2">All products in Store</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[#1e2a3b]">Get </span>
              <span className="text-[#c9a87a]">25%</span>
              <span className="text-[#1e2a3b]"> Off</span>
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Unlock unbeatable savings on every purchase. Introducing our new
              collection of stylish and comfortable sofas, designed to elevate
              your living space with modern elegance.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              Let&apos;s Shop Now
            </Link>
          </div>

          {/* Right Content - Main Chair Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative">
              <Image
                src="/banner-02.png"
                alt="Blue accent chair"
                width={600}
                height={600}
                className="object-contain"
              />
              {/* Price Tag for Chair */}
              <div className="absolute top-10 right-10 bg-white rounded-full h-16 w-16 flex flex-col items-center justify-center shadow-md">
                <span className="text-xs">$</span>
                <span className="text-xl font-bold">55</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-[5%] left-0 md:left-1/3 z-0">
          <div className="relative">
            <Image
              src="/banner-shape-02.png"
              alt="Pendant lamp"
              width={200}
              height={200}
              className="object-contain"
            />
            {/* Price Tag */}
            <div className="absolute top-0 right-0 bg-white rounded-full h-14 w-14 flex flex-col items-center justify-center shadow-md">
              <span className="text-xs">$</span>
              <span className="text-lg font-bold">20</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-10 hidden md:block z-0">
          <div className="relative">
            <Image
              src="/banner-shape-01.png"
              alt="Side table with plant"
              width={200}
              height={200}
              className="object-contain"
            />
            {/* Price Tag */}
            <div className="absolute top-0 right-0 bg-white rounded-full h-14 w-14 flex flex-col items-center justify-center shadow-md">
              <span className="text-xs">$</span>
              <span className="text-lg font-bold">20</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:block z-0">
          <div className="relative">
            <Image
              src="/banner-shape-03.png"
              alt="Decorative plant"
              width={150}
              height={150}
              className="object-contain"
            />
            {/* Price Tag */}
            <div className="absolute top-0 right-0 bg-white rounded-full h-14 w-14 flex flex-col items-center justify-center shadow-md">
              <span className="text-xs">$</span>
              <span className="text-lg font-bold">12</span>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button className="h-2 w-8 bg-gray-800 rounded-full"></button>
          <button className="h-2 w-2 bg-gray-300 rounded-full"></button>
          <button className="h-2 w-2 bg-gray-300 rounded-full"></button>
        </div>
      </div>
    </div>
  );
}
