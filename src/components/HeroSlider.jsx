import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { asset } from '../utils/asset';

const slides = [
  { image: '/assets/img/5.jpg', title: 'Ikatan Arsitek Indonesia', region: 'Sulawesi Tenggara' },
  { image: '/assets/img/7.jpeg', title: 'Ikatan Arsitek Indonesia', region: 'Sulawesi Tenggara' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center bg-brand-black overflow-hidden pt-20">
      
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2500ms] ease-in-out ${
              isActive
                ? 'opacity-100 scale-110 duration-[10000ms]'
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${asset(slide.image)})` }}
          />
        );
      })}

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 z-10 pointer-events-none" />

      {/* Content */}
      <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-24">
        <div className="max-w-3xl text-left animate-hero-fade">
          <h1 className="font-hero text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-2 drop-shadow-md">
            Ikatan Arsitek Indonesia
          </h1>

          <p className="font-hero text-2xl sm:text-3xl lg:text-4xl text-white/70 italic font-normal mb-6">
            Sulawesi Tenggara
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Mewujudkan Kota Berkelas melalui Karya Arsitektur yang Beretika, Inovatif, dan Berdaya Saing.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/tentang/profil"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-brand font-semibold text-sm sm:text-base uppercase tracking-wider text-white bg-maroon hover:bg-maroon-hover border border-maroon-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>Tentang Kami</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-brand font-semibold text-sm sm:text-base uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300"
            >
              Lihat Karya Desain
            </Link>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'w-8 bg-maroon-light' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </section>
  );
}
